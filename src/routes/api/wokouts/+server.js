import { json } from "@sveltejs/kit"
import { client } from '$db/mongo'
import { ObjectId } from 'mongodb'

const db = client.db('test')
const collection = db.collection('workouts')
const projection = {title:1,_id:0}
// let firstTime = Date.now()
// const all_items = await collection.find().toArray()
// const all_items_2 = await collection.find().project(projection).toArray()
// let secondTime = Date.now()
// let time_diff = secondTime - firstTime
// console.log(time_diff)
// console.log(all_items_2)

export async function GET() {
    const all_items_2 = await collection.find().toArray()
    // const serialized_all_items = all_items_2.map((item) => JSON.stringify(item,(key,value) => key === '_id'? value.toString(value): value))
    return json(all_items_2)
}

export async function POST(requestEvent) {
    const {request } = requestEvent;
    const response = await request.json();
    console.log (response)
    // console.log(response.ids[0])
    return json({ok: 'ok'})
}
//     const newComment = {
//         id: coms.length + 1,
//         text: text,
//         wher: wher
//     };
//     coms.push(newComment);
//     return json(newComment, {status: 200});
// }