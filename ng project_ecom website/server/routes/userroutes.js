const express = require("express");
const userRouter = express.Router();
const { getAllUsers, getById, postUsers, updateUsers, deleteUsers,  } = require("../controllers/userController");

userRouter.get("/", getAllUsers); 
userRouter.get("/:id", getById);  
userRouter.post("/", postUsers);   
userRouter.patch("/:id", updateUsers); 
userRouter.delete("/:id", deleteUsers); 

userRouter.post('/login',async(req,res)=>{
    const data=await userRouter.findOne({
        username:req.body.username,
        password:req.body.password
    });
    if(data){
        res.send(data);
    }
    else{
        const data={
            isValid:false,
            msg:"username/password does not match"
        };

        if(data){
            var token=JsonWebTokenError.sign({...data},process.env.jwtsecret);
          const ans={
            isValid:true,
            msg:"welcome",
            token:token
        };

        res.send(ans);
    }

})

module.exports = userRouter;

//GETALL http://localhost:7000/user/all_users

//GETBYID http://localhost:7000/user/65abc123ef45678901234567


// POST http://localhost:7000/user

// PATCH http://localhost:7000/user/65abc123ef45678901234567

//DELETE http://localhost:7000/user/65abc123ef45678901234567

