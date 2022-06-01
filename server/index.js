const express = require("express");
const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",  
  database:"construction",
  password: ""
}); 

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
});

const app = express( );


app.use(express.json());

app.post("/register",(req, res)=>{
  
let userName = req.body.userName
// let firstName = req.body.firstName
// let lastName = req.body.lastName
let email = req.body.email
let phone = req.body.phone
let password = req.body.password 
let empId=req.body.empId 
// let designation = req.body.designation
// let address = req.body.address 
let  dob = req.body.dob

console.log(req.body)

sql = "INSERT INTO user ( userName, email, phone,empId, password,loginStatus,dob) VALUES (?,?,?,?,?,?,?);";
  con.query(sql, [ userName, email, phone,empId, password,0,dob],function (err, result) {
    if (err) throw err;var s
    console.log(result);
    if(result){
      return res.json({status:true, message:"Register successfully!",data:result}) 
  }else{
      return res.json({status:false, message:"Register Failed!"}) 
  } 
  });
  
  
})


app.post("/register1",(req, res)=>{
  
  let userName = req.body.userName
  // let firstName = req.body.firstName
  // let lastName = req.body.lastName
  let email = req.body.email
  let phone = req.body.phone
  let password = req.body.password 
  let empId=req.body.empId 
  let designation = req.body.designation
  // let address = req.body.address 
  let  dob = req.body.dob
  
   console.log(req.body)
  
  sql = "INSERT INTO worker ( userName, email, phone,empId,designation, password,loginStatus,dob) VALUES (?,?,?,?,?,?,?,?);";
    con.query(sql, [ userName, email, phone,empId,designation, password,0,dob],function (err, result) {
      if (err) throw err;var s
      console.log(result);
      if(result){
        return res.json({status:true, message:"Register successfully!",data:result}) 
    }else{
        return res.json({status:false, message:"Register Failed!"}) 
    } 
    });
    
    
  })

app.post('/login',(req, res)=>{

  
  let email = req.body.email
  let password = req.body.password 

  
  console.log(req.body)
  
  var sql = 'SELECT * FROM user WHERE email=(?)';
    con.query(sql,[email],function (err, result) {
      if (err) throw err;
      console.log(result);
      if(result.length !== 0 ){
        if(result[0].password === password){
         var sql2 = "UPDATE  user SET loginStatus=(?) WHERE email=(?)";
          con.query(sql2,[1,email],function (err, result) {
            if (err) throw err;  
       
                return res.json({status:true, message:"Login successfully!",data:result}) 
      
          });
        }else{
          return res.json({status:false, message:"Wrong Password!"})
        }
       
     }else{
        return res.json({status:false, message:"Not Registered!"}) 
     } 
    });
  })

app.listen(7000,()=>{
    console.log("app listening port number 7000!")
})


