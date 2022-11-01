const express=require("express");
const app=express();
const date=require(__dirname+"/date.js");
var xy=["do coding","learn coding","again practice"];
var workList=[];
app.set('view engine', 'ejs');
const port=3000||process.env.PORT;
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/work",function(req,res){
  res.render("list",{ListTitle: "work",newListItem: workList});
});
app.get("/about",function(req,res){
  res.render("about");
});
app.get("/",function(req,res){
  let day=date.getDate();
   res.render("list",{ListTitle: day,newListItem: xy});
});
app.listen(port,function(req,res){
  console.log("server running at port no "+port);
})
app.post("/",function(req,res){
  let qw= req.body.newItem;
  if(req.body.list==="work")
  {
    workList.push(qw);
    res.redirect("/work");
  }
  else{
    xy.push(qw);
    res.redirect("/");
  }
});
