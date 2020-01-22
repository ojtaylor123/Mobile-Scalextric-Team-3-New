(function () {

    'use strict';

    var app = angular.module('singleplayer.loseState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('singleplayer', {
            url: '/singleplayer',
            templateUrl: 'scripts/states/singleplayer/singleplayer.html',
            controller: 'singleplayerCtrl as vm',
            cache: false
        })
    });

})();


