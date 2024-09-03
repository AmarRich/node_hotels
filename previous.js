console.log("server file is running");
// let result =10
// console.log(result);
// console.log(result+1);


// function add1(a,b) {
//     return a+b;
// }

// const add2 = function(a,b){
//     return a+b
// }

// var add3 = (a,b)=> { return a+b}
// var add4 = (a,b)=> a+b;

// add4(12,3);
// (function(){ 
//     console.log("Hii");
// })();



// const add5 = function (a,b, fun) {
//     console.log(a+b);
//     fun();
// }

// add5(3,5,function(){
//     console.log("completed");
// })
// add5(3,4,() => console.log(" Now completed"))

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 
// => this is for running 


// var fs = require('fs')
// var os = require('os')
// var user = os.userInfo()
// console.log(user);
// fs.appendFile('greeting.txt', 'hii '+ user.username + '!' + '\n', ()=>{ console.log("file is created"); })
// console.log(fs);



const notes = require('./notes.js')
console.log(notes.age);
console.log(notes.AddNumber(12,3));
var _ = require('lodash')
let data = ['al','al',1,1,2,3,4,2,2,'AJ']
var filterData = _.uniq(data)
console.log(filterData);



app.get('/chicken', function (req, res) {
    res.send('Yes, sir chicken is available')
  })
  app.get('/Idli', function (req, res) {
      let customizedIdli ={
          name : "rava idli",
          size : '10 cm',
          isSamber: true,
          isChutney:true
      }
    res.send(customizedIdli)
  })
  
  
  app.post('/items',(req,res) =>{
    res.send('data is saved')
  })

  // const data = req.body
  // const newPerson =new Person(data)
  // newPerson.save((error,savedPerson)=>{
  //   if(error){
  //     console.log('error saving person',error);
  //     res.status(500).json({error:'internal server error'})
  //   }else{
  //     console.log('data saved successfully');
  //     res.status(200).json(savedPerson)
  //   }
  // })