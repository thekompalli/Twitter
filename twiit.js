const Twit = require('twit');
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apikey = 'Y4GfQSnq9ysYKGYnL4eUNB6VY'
const apiSecretKey = 'RsgID6lpQzpAcOjT9o12Wt12TqmvLykt2gruliPKOq8YQRlRoK'
const accessToken = '890610687566688256-WmQNNeAZGPlRkrQqBBxBZAmpDw4xenL'
const accessTokenSecret = '9qkfb4tFGFtEbNwjWZFMrQOql6eTDvAZ5UhtYtHUgOWhu'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

    // //1. GET RECENT TWEETS
     T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 100 }, function(err, data, response) {
       const tweets = data.statuses
    //   // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
    //   .map(tweet => tweet.text)
    //   .filter(tweet => tweet.toLowerCase().includes('elon'));
    console.log(tweets);
    })

    // //2. REAL TIME MONITORING USING STREAM (HASHTAG)
    // var stream = T.stream('statuses/filter', { track: '#tesla' })
    // stream.on('tweet', function (tweet) {
    //     console.log(tweet.text);
    //     console.log('Language: ' + franc(tweet.text));
    //     console.log('------');
    // })

    // 3. REAL TIME MONITORING USING STREAM (LOCATION)
     
})();