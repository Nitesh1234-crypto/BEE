const express= require("express")
const app = express()
const path= require("path")
const mongoose=require("mongoose");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const Blog = require("./models/blog");

app.use(express.static(path.join(__dirname,"static")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'hbs');

app.post("/upload-file",upload.single("image"),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const {title} =req.body;
    const {path} =req.file;
    const newBlog=await new Blog({title,image:path}).save();
    res.end("ok");
})
app.get("/blogs",async(req,res)=>{
    const blogs= await Blog.find();
    res.render("blog",{blogs});
})
mongoose.connect("mongodb://127.0.0.1:27017/g17multer").then(()=>{
    app.listen(1333,()=>{
        console.log("server started at port 3334");
      })
})
