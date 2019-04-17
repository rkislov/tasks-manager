// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('unavle to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cb5d8e55cd46f7f67696c5d")
    // },
    //     {
    //         $inc: {
    //             age: 2
    //         }
    //     }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
            completed: true
    }, {
        $set: {
            completed: false
        }
    }).then((result)=>{
        console.log(result.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })

})