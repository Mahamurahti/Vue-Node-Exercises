let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const { check, validationResult } = require('express-validator');

let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log('Got a request! Sending form to browser');
    res.sendFile( __dirname + "/form.html" );
})

app.post('/process_post', urlencodedParser,
    [check('first_name').isLength({ min: 2 }).withMessage("must be at least 2 characters!"),
    check('last_name').isLength({ min: 2 }).withMessage("must be at least 2 characters!!"),
    check('email').isEmail().withMessage("must be in email form (example@example.com)!"),
    check('age').isInt( {gt : 0}).withMessage("must be in numeric form and greater than zero!")],
    function (req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Form didn\'t go through validation!');
        return res.status(422).json({errors: errors.array()});
    }

    // Prepare output in JSON format
    let response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        age:req.body.age
    };
    console.log('Form got through validation: ');
    console.log(response);
    res.end(JSON.stringify(response));
})

let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})