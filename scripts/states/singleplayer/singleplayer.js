(function () {

    'use strict';

    var app = angular.module('app.singleplayerState', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('singleplayer', {
            url: '/singleplayer',
            templateUrl: 'scripts/states/singleplayer/singleplayer.html',
            controller: 'singleplayerCtrl as vm',
            cache: false
        })
        $urlRouterProvider.otherwise('/onboarding');
    });

})();

