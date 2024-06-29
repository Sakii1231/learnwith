import { MONGO_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';
// npm i --save mongodb

export const client = new MongoClient(MONGO_URI);

// connect to the database
export async function connect(): Promise<void> {
	console.log('Starting mongo...');
	await client.connect();
}
