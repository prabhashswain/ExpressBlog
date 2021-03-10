const { body,validationResult } = require('express-validator');

module.exports.registerValidations = [
    body('name').not().isEmpty().trim().withMessage('name is required'),
    body('email').not().isEmpty().trim().withMessage('email is required'),
    body('password').isLength({min:6}).withMessage("password must be 6 character")
]
module.exports.loginValidations = [
    body('email').not().isEmpty().trim().withMessage("Email is required"),
    body('password').not().isEmpty().trim().withMessage("Password is required")
]
module.exports.register = (req,res)=>{
    const title = "create new account"
    res.render('register',{title,errors:[]})
}
module.exports.register_view = (req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const title = "create new account"
        res.render('register',{ title,errors:errors.array() })
    }else{
        res.send('form submitted')
    }
}
module.exports.login = (req,res)=>{
    title = "user login"
    res.render('login',{title})
}