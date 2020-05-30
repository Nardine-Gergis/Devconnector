const express = require('express');
const router = express.Router();

//@route    Get Api/posts
//@desc     Test route
//@access   public
router.get('/', (req, res) => res.send('posts router'));

module.exports = router;
