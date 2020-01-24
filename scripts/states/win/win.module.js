(function () {

    'use strict';

    var app = angular.module('app.winState', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('win', {
            url: '/win',
            templateUrl: 'scripts/states/win/win.html',
            controller: 'winCtrl as vm',
            cache: false
        })
        $urlRouterProvider.otherwise('/casual');
    });

})();
