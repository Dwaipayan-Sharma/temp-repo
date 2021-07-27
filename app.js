// const amount = 12

// if(amount<10){
//     console,log("small number")
// }
// else{
//     console.log("big number")
// } 

//console.log(`hey its my first node app`)

//globals - no window

//Globals - NO WINODOW

//__directory - path to current directory
//__filename - file name
//require - function to use modules(CommonJS)
//module - info about current module(file)
//process - info about env where the program is executed

// console.log(__dirname);
// setInterval(()=>{
//     console.log("What is up")
// },1000)
//CommonJS, every file is a module
// Modules = Encapsulated code(only share minimum)


// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./alternative')
// console.log(names)
// require('./mindgreande')
//  sayHi("Rudra");
//  sayHi(names.john);
//  sayHi(names.susan);


//Built-In modules

// const os = require('os')

//info about current user

// const user= os.userInfo()
// console.log(user);
// //method returns the system uptime in seconds


// console.log(`The system uptime is ${os.uptime()} seconds`)


// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS)

// const path = require('path')
// console.log(path.sep)
// const filePath = path.join('\content','subfolder','Test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,'content','subfolder','Test.txt')
// console.log(absolute)

// const fs = require('fs')


// const first = fs.readFileSync('./content/first.txt','utf-8')

// const second = fs.readFileSync('./content/second.txt','utf-8')

// console.log(first)
// console.log(second)

// fs.writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,)

// const a = fs.readFileSync('./content/result-sync.txt','utf-8')
// console.log(a)


// fs.writeFileSync('./content/second.txt','This is second text file')

//async


// const {readFile,writeFile} = require('fs')

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     const first = result;
//     readFile('./content/second.txt','utf-8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//     const second = result;
//     writeFile('./content/result-async.txt',
//     `This has been created in a async manner:) ${first} ${second}`
//     ,(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log(result)
//     })
    

//     })
// })

// const fs = require('fs');

// fs.readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//     return
//     console.log(err)
//     }
//     const first = result;
//     fs.writeFile('./content/result-async.txt',`This is me trying to code on my own.${first}`,(err,result)=>{
//         if(err){
//             return
//             console.log(err)
//         }

//     const second = result;
//     fs.readFile('./content/result-async.txt','utf-8',(err,result)=>{
//         if(err){
//             return
//             console.log(err)
//         }

//         console.log(result)
//     })

//     })
    
// })


//HTTP

// const http = require('http');
// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.end('Welcome to our homepage')
        
//     }
    
//     if(req.url === '/about'){
//         res.end('Here is our short history')
       
//     }

//     res.end(`<h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
    
    


// })

// server.listen(5000)


// const http = require('http')
// const server = http.createServer((req,res)=>{

//      if(req.url === "/"){
//           res.end("Welcome to our homepage")
//      }

//      else if (req.url === "/about") {
//           res.end("Here is our short history")
//      }

//      else{res.end(`
//      <h1>Oops</h1>
//      <p>We cannot find the page that you are looking for</p>
//      <a href = "/">back home</a>
//      `)}
// })
// server.listen(5000)

// npm - global command, comes with node
//local dependency - use it only in this particular project
//npm i<pakageName>

//global dependency - use it in any project
//npm install -g <pakageName>
//sudo npm install -g <packageName (mac)

//package.json - manifest file(stores important info about project/package)
//manual approach(create package.json in the root, create properties etc)
//npm init(step by step, press enter or skip)
//npm -y(everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)


































































































