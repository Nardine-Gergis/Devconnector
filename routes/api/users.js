const express = require('express');
const router = express.Router();




//@route    Get Api/user
//@desc     Test route
//@access   public
router.get('/',(req,res)=>res.send('user router'));


module.exports = router;