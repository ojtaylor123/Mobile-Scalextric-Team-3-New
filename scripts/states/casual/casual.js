(function () {

    'use strict';

    var app = angular.module('app.loginState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('casual', {
            url: '/casual',
            templateUrl: 'scripts/states/casual/casual.html',
            controller: 'casualCtrl as vm',
            cache: false
        });
    });

})();
