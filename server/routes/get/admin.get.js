const express = require('express');
const router = express.Router();
const authenticateJWT = require('../../middleware/authentication');

router.get('/data', authenticateJWT, (req, res)=> {
    try {
        const user_admin = req.user;
        if(user_admin) {
            console.log("Admin data fetched successfully:", user_admin);
            res.status(200).json({ message: "Admin data fetched successfully", data: user_admin, sucess: true});
        } else {
            throw new Error("Admin not found");
        }
    } catch (error) {
        console.error("Error fetching admin data:", error);
        res.status(500).json({ message: error.message, sucess: false});
    }
}) 

module.exports = router;