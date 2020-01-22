(function () {

    'use strict';

    var app = angular.module('app.winState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('win', {
            url: '/win',
            templateUrl: 'scripts/states/win/win.html',
            controller: 'winCtrl as vm',
            cache: false
        })
    });

})();
