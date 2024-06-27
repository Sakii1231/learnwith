// import { client } from '$db/mongo'
// import { ObjectId } from 'mongodb'
// import { json } from '@sveltejs/kit'
// import { md5,checkHash } from '$lib/utils'

// // const db = client.db('test')
// // const collection = db.collection('workouts')

// // const projection = {title:1,_id:0}

// // let firstTime = Date.now()
// // const all_items = await collection.find().toArray()
// // const all_items_2 = await collection.find().project(projection).toArray()
// // let secondTime = Date.now()
// // let time_diff = secondTime - firstTime
// // console.log(time_diff)
// // console.log(all_items_2)

// // let firstTime = Date.now()
// // const one_item = await collection.find(new ObjectId('6678c2dac84819f8fb4c1021')).toArray()
// // let secondTime = Date.now()
// // let time_diff = secondTime - firstTime
// // console.log(one_item)
// // console.log(time_diff)

// // firstTime = Date.now()
// // const all_items_2 = await collection.find().project(projection).toArray()
// // secondTime = Date.now()
// // time_diff = secondTime - firstTime
// // console.log(time_diff)



// // const serialized_all_items = all_items.map((item) => JSON.stringify(item,(key,value) => key === '_id'? value.toString(value): value))
// // console.log(serialized_all_items)



// const db = client.db('students')
// const collection = db.collection('student_details')

// // const projection = {title:1,_id:0}

// interface Student_schema {
//     name: string
//     email: string
//     phone: string
//     course: string
//     details: string
//     created_at: Date
//     email_hash: string

// }

// const student1:Student_schema = {
//     name: 'sakshat',
//     email: 'reban@gmail.com',
//     phone: '982345',
//     course: 'backend',
//     details: 'anything',
//     created_at: new Date(),
//     email_hash: ''
// }


// /** NORMAL words **/
// const value = student1.email

// const hash = md5(value)

// student1.email_hash = hash


// console.log(hash)

// console.log(student1)

// const details = {
//     "name": "okkkk",
//     "email": "ksakshat8@gmail.com",
//     "phone": 2342367
// }



// // collection.insertOne(details)

// const projection = {email_hash:1,_id:0}

// const hash_list = await collection.find().project(projection).toArray()
// console.log(typeof(hash_list))
// const hashToCheck = '4232adff6b3f51194cdc7409a2ff419';
// const result = checkHash(hashToCheck, hash_list);

// console.log(result)

// // export function load() {
// //     return {items:all_items_2}
// // }