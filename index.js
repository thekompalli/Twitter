const express = require('express') //a nodejs web framework to GET and POST data
const path = require('path'); // path is used to link the local host to the path of the HTML page created. So the local host inherits the ui and design of the HTML page
const app = express();
const bodyParser = require('body-parser');
const twit = require('twit'); //twit is a library to GET or POST the data from twitter
const T = new twit({
    consumer_key: 'Y4GfQSnq9ysYKGYnL4eUNB6VY', //api key
    consumer_secret: 'RsgID6lpQzpAcOjT9o12Wt12TqmvLykt2gruliPKOq8YQRlRoK',//api secret key
    access_token: '890610687566688256-WmQNNeAZGPlRkrQqBBxBZAmpDw4xenL', //access token
    access_token_secret: '9qkfb4tFGFtEbNwjWZFMrQOql6eTDvAZ5UhtYtHUgOWhu',//access token secret
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests. 
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/tweets/:search', function (req, res) { //to get desired tweets
    T.get('search/tweets', {
        q: req.params.search
        , count: 10 // change this to filter the number of tweets at a time
    }, function (err, data, response) {
        res.json(data);
    })
})
app.post('/comment/', function (req, res) {  //to post a tweet
    console.log(req.body.comment);
    T.post('statuses/update', {
        status: req.body.comment
    }, function (err, data, response) {
        res.json(data)
    })
})
app.listen(3000) //port is 3000
