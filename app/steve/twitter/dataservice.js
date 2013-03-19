define(['../config', './tweet.mapper'], function (config, tweetMapper) {

    'use strict';

    var getTweets = function (options) {

        $.ajax({
            url: config.twitterSearchUrl + options.param,
            crossDomain: true,
            cache: false,
            dataType: 'JSONP',
            contentType: "application/jsonp; charset=UTF-8",
            success: function (json) {
                // handleResult(json, row);
                options.results(buildTweets(json));
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });

        function buildTweets (json) {
            console.log("json", json);
            var tweets = [];
            $.each(json.results, function (index, data) {
                tweets.push(tweetMapper.create(data));
            });
            return tweets;
        }

     };

    return {
        getTweets: getTweets
    };

});