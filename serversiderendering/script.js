let express = require("express");
let app = express();
let path = require("path");
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static(path.join(__dirname,"static")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'hbs');

let data=[ "cricket","hockey","football"]

app.get("/home",(req,res)=>{
    res.render("home");
})
app.get("/about",(req,res)=>{
    res.render("about",{
        username:"Nitesh",
        id:"12345",
        email:"jdsdhds@gmail.com"
    });
})
app.get("/gettodo",(req,res)=>{
     res.render("todo",{
        todo:data
     })
})





app.listen(4443,()=>{
    console.log("server started at port 4443 ");
})

