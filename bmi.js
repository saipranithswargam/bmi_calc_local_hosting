const express=require('express');

const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(500,function(){
    console.log("server started ...");
});


app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    var n1=parseFloat(req.body.Weight);//parseFlote converts the string to float
    var n2=parseFloat(req.body.Height);
    var bmi = n1/(Math.pow(n2,2));
    res.send("you bmi is :"+bmi);

})
