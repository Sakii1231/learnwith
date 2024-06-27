import { json } from "@sveltejs/kit"
import { client } from '$db/mongo'
import { ObjectId } from 'mongodb'

const db = client.db('test')
const collection = db.collection('workouts')
const projection = {title:1,_id:0}
let firstTime = Date.now()
// const all_items = await collection.find().toArray()
// const all_items_2 = await collection.find().project(projection).toArray()
// let secondTime = Date.now()
// let time_diff = secondTime - firstTime
// console.log(time_diff)
// console.log(all_items_2)



export async function GET() {
// const all_items_2 = await collection.find().project(projection).toArray()

    // console.log(request)
    // console.log(typeof(request))
    // const {method} = request
    // console.log(method)
    return json({ok:'ok'})
}