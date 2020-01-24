(function () {

    'use strict';

    var app = angular.module('app.onboardingState', ['ui.router]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('onboarding', {
            url: '/onboarding',
            templateUrl: 'scripts/states/onboarding/onboarding.html',
            controller: 'onboardingCtrl as vm',
            cache: false
        })
        $urlRouterProvider.otherwise('/onboarding');                                             
    });

})();
