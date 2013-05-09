define(function () {

    'use strict';

    ko.bindingHandlers.expandy = {

        init: function (element, valueAccessor) {
            $(element).click(function () {
                $('.expandy').hide();
                $(this).next().show();
            });
        }
    };

});
