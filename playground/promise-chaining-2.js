require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cb722b7068a957e03a4f9e0').then(task=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then(result=>{
//     console.log(result)
// }).catch(e=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5cb7fc08a72aa91b8cc726b8').then(count=>{
    console.log(count)
}).catch(e=>{
    console.log(e)
})