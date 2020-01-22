(function () {

    'use strict';

    var app = angular.module('app.onboardingState', []);

    app.config(function ($stateProvider) {
        $stateProvider.state('onboarding', {
            url: '/onboarding',
            templateUrl: 'scripts/states/onboarding/onboarding.html',
            controller: 'onboardingCtrl as vm',
            cache: false
        })
    });

})();
