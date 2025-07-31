const express = require('express');
const router = express.Router();

router.get('/garcon/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`usario ${req.params.id} acessou o sgm`);
})

module.exports = router;