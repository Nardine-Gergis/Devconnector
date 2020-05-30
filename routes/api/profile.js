const express = require('express');
const router = express.Router();




//@route    Get Api/profile
//@desc     Test route
//@access   public
router.get('/',(req,res)=>res.send('profile router'));


module.exports = router;