import { connect } from "$db/mongo";

connect()
.then(() => {
    console.log('Mongo started!!')
})
