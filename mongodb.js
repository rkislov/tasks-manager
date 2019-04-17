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
    //
    // db.collection('users').findOne({_id: new ObjectID("5cb5d8e55cd46f7f67696c5d")},(error,user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //
    //     console.log(user)
    // })
    //
    // db.collection('users').find({}).toArray((error, users)=> {
    //     if (error) {
    //         return console.log('Unnable to find users')
    //     }
    //
    //     console.log(users)
    // })

    db.collection('tasks').findOne({_id:new ObjectID("5cb5de5860205c057aaff745")}, (error,task)=> {
        if (error){
            return console.log('Unable to find task')
        }

        console.log(task)
    })

    db.collection('tasks').find({completed:false}).toArray((error,tasks) => {
        if (error) {
            return console.log('Unable to find tasks')
        }

        console.log(tasks)
    })
})