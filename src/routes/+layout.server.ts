import { client } from '$db/mongo'
import { ObjectId } from 'mongodb'
import { json } from '@sveltejs/kit'

const db = client.db('test')
const collection = db.collection('workouts')

const projection = {title:1,_id:0}

let firstTime = Date.now()
// const all_items = await collection.find().toArray()
const all_items_2 = await collection.find().project(projection).toArray()
let secondTime = Date.now()
let time_diff = secondTime - firstTime
console.log(time_diff)
console.log(all_items_2)

// let firstTime = Date.now()
// const one_item = await collection.find(new ObjectId('6678c2dac84819f8fb4c1021')).toArray()
// let secondTime = Date.now()
// let time_diff = secondTime - firstTime
// console.log(one_item)
// console.log(time_diff)

// firstTime = Date.now()
// const all_items_2 = await collection.find().project(projection).toArray()
// secondTime = Date.now()
// time_diff = secondTime - firstTime
// console.log(time_diff)



// const serialized_all_items = all_items.map((item) => JSON.stringify(item,(key,value) => key === '_id'? value.toString(value): value))
// console.log(serialized_all_items)


export function load() {
    return {items:all_items_2}
}