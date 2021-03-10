const app = require('express');
const { register,register_view,login,registerValidations,loginValidations } = require('../controllers/userController')
const router = app.Router();

router.get('/',register)
router.post('/register',registerValidations,register_view)
router.get('/login',loginValidations,login)

module.exports = router;