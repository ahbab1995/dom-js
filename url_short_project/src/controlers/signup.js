const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { generate } = require('../utlis/password')
const { Users }  = require('../utlis/db')
const _p       = require('../utlis/promiss_error')

const signupValedator = [
    check('name').exists(),
    check('email').isEmail(),
    check('password').isLength({min:5})
]


router.post('/signup', signupValedator,async(req,res)=>{
    const errors = (validationResult(req));
    if(!errors.isEmpty()){
        return res
             .status(422)
             .json({errors: errors.array()})
    }

    let chunks = generate(req.body.password);
    let password = `${chunks.salt}.${chunks.hash}`;

    let { name, email} = req.body;
    let [ucErr, userCreated] = await _p(Users.create({
        name,email,password
    }))

    if (ucErr && !userCreated){
        res.status(400).json({error:true,message:ucErr.message})
    }else{
         res.json({error:false,message:'User Created..?'})
    }

})




module.exports = router