const router = require('express').Router();
const { Item } = require('../../config/db')

//  Validation

// const signupValidate = [
//     check('name').exists(),
//     check('email').isEmail(),
// ];


router.get('/', (req,res)=>{
    Item.find()
        .sort({data: -1})
        .then(items => res.json(items))
})

router.post('/', (req,res)=>{
    const newItem = new Item({
        name: req.body.name,
        email:req.body.email
    })
    newItem.save().then(item => res.json(item))
})


router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
        .then(
            item => item.remove()
            .then(()=>res.json({success: true})
            .check(err => res.status(404).json({success:false}))
            )
        )
})

module.exports = router
