/*angular.module('myApp', ['ui.router']);

angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    // sets default state
    $urlRouterProvider.otherwise("/onboarding");
    // sets up all the other states of the app
    $stateProvider
        .state('onboarding', {
            url: '/onboarding',
            templateUrl : 'scripts/states/onboarding/onboarding.html',
            cache: false
    })
        .state('queue', {
            url: '/queue',
            templateUrl : 'scripts/states/queue/queue.html',
            cache: false
    })
        .state('race', {
            url: '/race',
            templateUrl : 'scripts/states/race/race.html',
            cache: false
    })
        .state('casual', {
            url: '/casual',
            templateUrl : 'scripts/states/casual/casual.html',
            cache: false
    })
        .state('singleplayer', {
            url: '/singleplayer',
            templateUrl : 'scripts/states/singleplayer/singleplayer.html',
            cache: false
    })
        .state('challenge', {
            url: '/challenge',
            templateUrl : 'scripts/states/challenge/challenge.html',
            cache: false
    })
        .state('win', {
            url: '/win',
            templateUrl : 'scripts/states/win/win.html',
            cache: false
    })
        .state('lose', {
            url: '/lose',
            templateUrl : 'scripts/states/lose/lose.html',
            cache: false
    })
}]);

angular.module("myApp").run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});*/

angular.module('myApp', ['ui.router']);


angular.module('myApp').config(config);

config.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
]

function config($stateProvider, $urlRouterProvider) {
    
    var onboardingState = {
        name: 'onboarding',
        url: '/onboarding?uuid&brokerHost&brokerPort&username&password&ssl',
        params: {
            uuid : {
                dynamic: false
            },
            brokerHost: {
                dynamic: false
            },
            brokerPort: {
                dynamic: false
            },
            username: {
                dynamic : false
            },
            password: {
                dynamic : false
            },
            ssl:{
                dynamic : false
            }
        },
        templateUrl: 'scripts/states/onboarding/onboarding.html',
        controller: 'onboardingCtrl',
        controllerAs: 'onboarding',
        resolve: {
            broker: ['$stateParams','brokerDetails', function($stateParams, brokerDetails) {
                if($stateParams.uuid) brokerDetails.UUID = $stateParams.uuid;
                if($stateParams.brokerHost) brokerDetails.HOST = $stateParams.brokerHost;
                if($stateParams.brokerPort) brokerDetails.PORT = $stateParams.brokerPort;
                if($stateParams.username) brokerDetails.USERNAME = $stateParams.username;
                if($stateParams.password) brokerDetails.PASSWORD = $stateParams.password;
                if($stateParams.ssl) brokerDetails.SSL = ($stateParams.ssl.toLowerCase() == 'true');                
            }]
        }
    }   

    var casualState = {
        name: 'casual',
        url: '/casual',
        templateUrl: 'scripts/states/casual/casual.html',
        controller: 'casualCtrl',
        controllerAs: 'casual',
        params: {
            channel: null,
            ip_address: null
        },
        //resolve used to check if transition contains channel and ipaddress params
        resolve: {
            parameters: ['$q', '$state','$stateParams', function ($q, $state,$stateParams) {
                var deferred = $q.defer();
               
                if ($stateParams.channel === null) {
                    $state.transitionTo('onboarding', {});
                }else{
                    deferred.resolve();
                }

                return deferred.promise;
            }]
        }
    };

    $stateProvider.state(onboardingState);
    $stateProvider.state(casualState);

    $urlRouterProvider.otherwise('/onbording');
}

angular.module('app').run(run);
run.$inject = [
]

function run() {
    console.log('version 1.0.0 Mobile Scalextric 3');
}

