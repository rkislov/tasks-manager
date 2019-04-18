require('../src/db/mongoose')
const User = require('../src/models/user')

// 5cb7f7e835639c1482a524e4


// User.findByIdAndUpdate('5cb7fe0bc255c41e22a2efb4', {
//     age: 1
// }).then(user=> {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then(result=>{
//     console.log(result)
// }).catch(e=>{
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5cb7fe0bc255c41e22a2efb4', 2).then(count=>{
    console.log(count)
}).catch(e=>{
    console.log(e)
})
