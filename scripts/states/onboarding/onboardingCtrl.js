angular.module('app').controller('onboardingCtrl', onboardingCtrl);

onboardingCtrl.$inject = [
    '$rootScope',
    '$state',
    'mqttService',
    'brokerDetails'
];

function onboardingCtrl($rootScope, $state, mqttService, brokerDetails) {
    var vm = this;
    
    //creates channel array and number of channels
    vm.channels = Array.apply(null, {
        length: 5
    }).map(Function.call, Number)
    vm.channel = 0; //default channel
    
    console.log(brokerDetails);
    
    vm.go = go;
    
    function go(valid) {
        if (!valid) {
            alert("Invalid Details")
        }
        else {
            mqttService.initialize(brokerDetails.HOST, brokerDetails.PORT);
            mqttService.onConnectionLost(function (){
                console.error("connection lost");
            });
            
            var mqttOptions = {};
            
            if(brokerDetails.SSL) { mqttOptions.useSSL = brokerDetails.SSL; }
            if(brokerDetails.USERNAME) {
                mqttOptions.userName = brokerDetails.USERNAME
                if(brokerDetails.PASSWORD){
                    mqttOptions.password = brokerDetails.PASSWORD;
                }
            }
            
            mqttService.connect(function (success, error) {
                if(success){
                    $state.transitionTo('race', {
                        channel: vm.channel,
                    })
                }
                else if (error) {
                    console.log(error)
                    alert(`Could Not Connect to ${brokerDetails.HOST}:${brokerDetails.PORT}`)
                }
            },mqttOptions)
        }
    }
}
