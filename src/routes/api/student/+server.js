import { json } from '@sveltejs/kit';
import { client } from '$db/mongo';
import { md5, checkHash } from '$lib/utils';

const db = client.db('students');
const collection = db.collection('student_details');
const projection = { email_hash: 1, _id: 0 };

export async function GET() {
	const all_items_2 = await collection.find().toArray();
	// const serialized_all_items = all_items_2.map((item) => JSON.stringify(item,(key,value) => key === '_id'? value.toString(value): value))
	return json(all_items_2);
}

export async function POST(requestEvent) {
	let msg_body = {
		error: false,
		msg: 'Succesfully added student to db.',
		details: {}
	};

	const { request } = requestEvent;
	const requestBody = await request.json();
	const { email } = requestBody;

	const hash_list = await collection.find().project(projection).toArray();
	const hashToCheck = md5(email);
	const is_same_hash = checkHash(hashToCheck, hash_list);

	if (is_same_hash) {
		msg_body.error = true;
		msg_body.msg = 'Student already exists in db.';
		msg_body.details = requestBody;
	} else {
		requestBody.email_hash = hashToCheck;
		collection.insertOne(requestBody);
		msg_body.details = requestBody;
	}
	console.log(msg_body);
	return json(msg_body);
}
