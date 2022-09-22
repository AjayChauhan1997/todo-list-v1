const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const ejs=require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const port=3000;
var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var day=today.toLocaleDateString("en-US",options);
var item="";
var list=[];
var worklist=[];
var tittleon="Home";



app.get("/",function(req,res){
    var tittleon="Home";
    res.render('list',{tittle:tittleon,kindofday:day,newlist:list});
});

app.post("/",function(req,res){
    var item=req.body.todo;
    var btn=req.body.button;

if(btn === "Work"){
    worklist.push(item);
    res.redirect("/work");
}else{

list.push(item);
    res.redirect("/");}
});

app.get("/work",function(req,res){
    tittleon="Work";
    res.render('list',{tittle:tittleon,kindofday:day,newlist:worklist});
});





app.listen(port,function(req,res){
console.log("SERVER IS UP AND RUNNING ON PORT "+ port);
});