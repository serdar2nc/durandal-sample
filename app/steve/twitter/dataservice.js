define(['../config', './tweet.mapper'], function (config, tweetMapper) {

    'use strict';

    var getTweets = function (options) {

        $.ajax({
            url: config.twitterSearchUrl + options.param,
            dataType: 'JSONP',
            success: function (data) {
                options.results(buildTweets(data));
            }
        });

        function buildTweets (data) {
            var tweets = [];
            $.each(data.results, function (index, item) {
                tweets.push(tweetMapper.create(item));
            });
            return tweets;
        }
     };

    return {
        getTweets: getTweets
    };

});