const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')

router.use('/home',(req, res, next)=>{
    console.log("Home Page");
    res.sendFile(path.join(rootDir,'views','home.html'))
})
router.get('/add-student', (req, res, next) => {
    console.log("Add student page")
    res.sendFile(path.join(rootDir,'views','add-student.html'))
});


router.post('/added-student', (req, res, next) => {
    console.log("Student name added:", req.body);
    res.sendFile(path.join(rootDir,'views','added-student.html'))
});

module.exports = router;
