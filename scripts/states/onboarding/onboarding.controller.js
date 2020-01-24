(function () {

    'use strict';

    var app = angular.module('app.onboardingState');

    app.controller('onboardingCtrl', onboardingCtrl);

    onboardingCtrl.$inject = [
        '$state',
        '$stateprams'
    ];

    function onboardingCtrl(
        $state,
        $stateParams
    ) {
        var vm = angular.extend(this, {});
        
        vm.goToQueue = function(){            
            $state.go('queue');
        }     
    }

})();
