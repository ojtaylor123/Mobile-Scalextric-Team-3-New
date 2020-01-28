angular.module('myApp', ['ui.router']);

angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    // sets default state
    $urlRouterProvider.otherwise("/onboarding");
    // sets up all the other states of the app
    $stateProvider
        .state('onboarding', {
            url: '/onboarding',
            templateUrl : 'scripts/states/onboarding/onboarding.html'
    })
        .state('queue', {
            url: '/queue',
            templateUrl : 'scripts/states/queue/queue.html'
    })
        .state('race', {
            url: '/race',
            templateUrl : 'scripts/states/race/race.html'
    })
        .state('casual', {
            url: '/casual',
            templateUrl : 'scripts/states/casual/casual.html'
    })
        .state('singleplayer', {
            url: '/singleplayer',
            templateUrl : 'scripts/states/singleplayer/singleplayer.html'
    })
        .state('challenge', {
            url: '/challenge',
            templateUrl : 'scripts/states/challenge/challenge.html'
    })
        .state('win', {
            url: '/win',
            templateUrl : 'scripts/states/win/win.html'
    })
        .state('lose', {
            url: '/lose',
            templateUrl : 'scripts/states/lose/lose.html'
    })
}]);

angular.module("myApp").run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
