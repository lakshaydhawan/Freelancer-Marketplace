var express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');
const mysql =require("mysql");

var app = express();
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"lakshayparth",
    database:"myfreelancer",
    port:3306
})
connection.connect(function(error){
    if(error){
        console.log(error.message);
    }
    else{
        console.log("database connected");
    }
});

    
    
app.post("/signup",function(req,res){
    var email=req.body.data.email;
    var password=req.body.data.password;
    var confirmpassword=req.body.data.confirmpassword;
    var user=req.body.data.signinas;
    if(password!=confirmpassword){
        res.send("pp");
    }
    else{
        const insertQuery=`Insert Into users(email,password,user) Values('${email}','${password}','${user}')`;
        connection.query(insertQuery,(error) =>{
            if(error){
                res.send("false")
            } 
            else{
                res.send("true");
            }
        })
    }
   });
   app.post("/login",function(req,res){
    var email=req.body.data.email;
    var password=req.body.data.password;
    var user=req.body.data.loginas;
    const insertQuery=`(Select * from users)`;
    var emailfound=0;
    connection.query(insertQuery,(error,result) =>{
       for(var i=0;i<result.length;i++){
        if(result[i].email==email && result[i].password==password && result[i].user==user){
            res.json({user:user});
            emailfound=1;
        }
       }
       if(emailfound==0){
        res.send("false");
       }
    })
});
app.post("/postatask",function(req,res){
    var heading=req.body.data.heading;
    var description=req.body.data.description;
    var budget=req.body.data.budget;
    var q=`Insert into jobs(heading,description,budget) VALUES('${heading}','${description}',${budget})`;
    connection.query(q,(error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(true);
        }
    })
})
app.get("/getdata",function(req,res){
    var q=`select * from jobs`;
    connection.query(q,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(result);    
        }
    })
})
app.post("/deletejob",function(req,res){
    console.log(req.body.buttonId);
    var id=req.body.buttonId;
    var q=`delete from jobs where id = ${id}`;
    connection.query(q,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(true);   
        }
    })
})
app.post("/password",function(req,res){
    var email=req.body.data.email;
    var password=req.body.data.password;
    var newpassword=req.body.data.newpassword;
    var q=`Select * from users where email='${email}'`;
    connection.query(q,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(result)
           if(result.length==0){
            res.send(false);
           }
           else{
            var q=`Update users SET password='${newpassword}' where email='${email}'`;
            connection.query(q,(error,result)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(result);
                    res.send(true);
                }
            })
           }
        }
    })
})
app.listen(3000, function () {
    console.log('app listening on port 3000!');
  });