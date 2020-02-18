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

}
