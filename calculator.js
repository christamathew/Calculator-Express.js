const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(request,response){
    response.sendFile(__dirname+"/index.html");
});
app.post("/", function(request,response){
    console.log(request.body);
    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);
    var r=num1+num2;
    response.send("Answer is "+r);
});
app.get("/bmicalculator", function(request,response){
    response.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi=weight/(height*height);
    res.send("BMI is "+bmi);
});
app.listen(3000);
