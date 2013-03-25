var modules = [
    'durandal/system',
    'durandal/http',
    '../config',
    './tweet.mapper'
];

define(modules, function (system, http, config, tweetMapper) {

    'use strict';

    var getTweets = function (options) {

        system.log('search', options.param);

        http.jsonp(config.twitterSearchUrl, { q: options.param })
            .done(function (data) {
                options.results(buildTweets(data.results));
            });
    };

    return {
        getTweets: getTweets
    };

    function buildTweets(results) {

        var tweets = [];
        $.each(results, function (index, item) {
            system.log("item", item);
            tweets.push(tweetMapper.create(item));
        });

        system.log('tweets', tweets);

        return tweets;
    }

});