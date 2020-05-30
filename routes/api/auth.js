const express = require('express');
const router = express.Router();

//@route    Get Api/auth
//@desc     Test route
//@access   public
router.get('/', (req, res) => res.send('auth router'));

module.exports = router;
