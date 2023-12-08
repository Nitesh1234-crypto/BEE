const express=require("express");
const router=express.Router();
let {getAllpost,postAddpost,getOnepost,deleteOnepost,putUpdatepost}=require("../controller/post");
router.get("/",getAllpost)
router.post("/",postAddpost)
router.get("/:id",getOnepost)
router.delete("/:id",deleteOnepost)
 router.put("/:id",putUpdatepost)

module.exports=router;
