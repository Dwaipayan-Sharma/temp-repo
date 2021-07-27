
function sayHi(name){
    console.log("Hello " + name)
};

module.exports = sayHi

const os = require('os')
//info about current user

const user = os.userInfo()
console.log(user)
