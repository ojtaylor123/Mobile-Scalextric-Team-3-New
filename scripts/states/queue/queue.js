(function () {

    'use strict';

    var app = angular.module('app.queueState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('queue', {
            url: '/queue',
            templateUrl: 'scripts/states/about/about.html',
            controller: 'queueCtrl as vm',
            cache: false
        })
    });

})();
