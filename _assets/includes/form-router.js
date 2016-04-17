
router.post('/', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
    res.send('Post page');
});
