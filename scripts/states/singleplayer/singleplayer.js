(function () {

    'use strict';

    var app = angular.module('app.singleplayerState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('singleplayer', {
            url: '/singleplayer',
            templateUrl: 'scripts/states/singleplayer/singleplayer.html',
            controller: 'singleplayerCtrl as vm',
            cache: false
        })
    });

})();


