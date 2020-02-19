angular.module('app').controller('queueCtrl', queueCtrl);

queueCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'mqttService',
    'brokerDetails'
];

function queueCtrl($scope, $state, $stateParams, mqttService, brokerDetails) {
    var vm = this;

    var channel = $stateParams.channel;
    
    function go() {
        $state.transitionTo('casual', {
            channel: vm.channel,
        })
    }
    
    function exit() {
        $state.transitionTo('onboarding', {
            channel: vm.channel,
        })
    }
}
