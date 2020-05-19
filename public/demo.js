function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}


const url = "https://api.twitter.com/1.1/statuses/home_timeline.json";
var unixtime=Math.round((new Date()).getTime() / 1000.0);
nonce=randomString(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
var httpMethod = 'GET';
fetch(url, {
    method: "GET",
    withCredentials: true,
    parameters : {
        oauth_consumer_key : 'Y4GfQSnq9ysYKGYnL4eUNB6VY',
        oauth_nonce : nonce,
        oauth_signature_method : 'HMAC-SHA1',
        oauth_timestamp : unixtime,
        oauth_token : '890610687566688256-WmQNNeAZGPlRkrQqBBxBZAmpDw4xenL',
        oauth_version : '1.0',
        screen_name:'twitterapi',
        callback: 'twitterCallback'
    },
    
    consumerSecret : 'RsgID6lpQzpAcOjT9o12Wt12TqmvLykt2gruliPKOq8YQRlRoK',
    tokenSecret : '9qkfb4tFGFtEbNwjWZFMrQOql6eTDvAZ5UhtYtHUgOWhu',
    signature : oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
        { encodeSignature: true}),

   headers: {
    'Authorization':
        'OAuth oauth_consumer_key:"Y4GfQSnq9ysYKGYnL4eUNB6VY",' +
        'oauth_signature_method:"HMAC-SHA1",' +
        'oauth_timestamp:'+unixtime +
        'oauth_nonce:'+nonce +
        'oauth_version:"1.0",' +
        'oauth_token:"890610687566688256-WmQNNeAZGPlRkrQqBBxBZAmpDw4xenL",'+
        'oauth_signature:'+signature
},
})
.then((data) => {console.log(data)})