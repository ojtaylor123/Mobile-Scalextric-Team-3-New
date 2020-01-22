
(function () {

    'use strict';

    var app = angular.module('app.raceState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('race', {
            url: '/race',
            templateUrl: 'scripts/states/race/race.html',
            controller: 'raceCtrl as vm',
            cache: false
        });
        $urlRouterProvider.otherwise('/race');
    });
})();
