define([], function () {

    'use strict';

    var Tweet = function () {

        var self = this;

        self.id = ko.observable();
        self.text = ko.observable();
        self.fromUserName = ko.observable();
        self.fromUser = ko.observable();
        self.createdAt = ko.observable();
        self.profileImageUrl = ko.observable();

        return self;
    };

    Tweet.prototype.formattedCreatedAt = function () {

        // twitter date format - eg: 'Sun, 10 Feb 2013 13:13:12 +0000'
        var fmtIn, fmtOut, dte;

        fmtIn = "ddd, DD MMM YYYY HH:mm:ss Z";
        fmtOut = "DD/MM/YYYY HH:mm:ss";

        dte = moment(this.createdAt(), fmtIn);

        return dte.format(fmtOut);
    };

    return Tweet;

});