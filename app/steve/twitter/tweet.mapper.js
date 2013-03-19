define(['./model'], function (model) {

    'use strict';

    var create = function (data) {

        var tweet = new model.Tweet();

        tweet.id(data.id)
            .text(data.text)
            .fromUserName(data.from_user_name)
            .fromUser(data.from_user)
            .createdAt(data.created_at)
            .profileImageUrl(data.profile_image_url);

        return tweet;

    };

    return {
        create: create
    };
});