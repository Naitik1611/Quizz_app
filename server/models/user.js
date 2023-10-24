const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const Joi=require("joi");
const pwdComplexity=require("joi-password-complexity");

const userSchema=new mongoose.Schema({
    firstName:{type:String, requires:true},
    lastName:{type:String, requires:true},
    email:{type:String, requires:true},
    password:{type:String, requires:true}
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    return token;
}

const User=mongoose.model("user",userSchema);
const validate=(data)=>{
    const schema=Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        email:Joi.string().email().required().label("Email"),
        password:pwdComplexity.required().label("Password")
    });
    return schema.validate(data);
};

module.exports={User,validate};