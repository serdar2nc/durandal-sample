define(['durandal/app', 'durandal/system', './dataservice'], function (app, system, dataservice) {

    "use strict";

    var tweets = ko.observableArray(),

        searchString = ko.observable(),

        search = function () {
            dataservice.getTweets({
                param: searchString(),
                results: tweets
            });
        };

    return {
        title: 'Twitter',
        tweets: tweets,
        search: search,
        searchString: searchString
    };

});