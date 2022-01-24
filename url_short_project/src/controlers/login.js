const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const jwt   = require('jsonwebtoken')
const { valideta }  = require('../utlis/password')
const _p       = require('../utlis/promiss_error')
const { Users }  = require('../utlis/db')


const loginValedator = [check('email').isEmail(),check('password').isLength({min:5})]

router.post('/login',loginValedator,async (req,res)=>{
    const errors = (validationResult(req));
    if(!errors.isEmpty()){
        return res
             .status(422)
             .json({errors: errors.array()})
    }
    let {password,email} = req.body;
    let [uer,users] = await _p(Users.findOne({
        where:{
            email
        }
    }))
    if(!users && uer){
        res.status(401).json({error:true ,message:'User not found'})
    }
    else{
        console.log(uer.password);
        
    }
})


module.exports = router