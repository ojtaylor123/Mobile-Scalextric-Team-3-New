(function () {

    'use strict';

    var app = angular.module('app.winState');

    app.controller('winCtrl', winCtrl);

    winCtrl.$inject = [];

    function winCtrl() {
        var vm = angular.extend(this, {});
        return vm;
    }

})();
function go(valid) {
    if (!valid) {
        alert("Invalid Details")
    } else {
        mqttService.initialize(brokerDetails.HOST, brokerDetails.PORT);
        mqttService.onConnectionLost(function () {
            console.error("connection lost");
        });


        var mqttOptions = {};

        if (brokerDetails.SSL) { mqttOptions.useSSL = brokerDetails.SSL; }
        if (brokerDetails.USERNAME) {
            mqttOptions.userName = brokerDetails.USERNAME;
            if(brokerDetails.PASSWORD){
                mqttOptions.password = brokerDetails.PASSWORD;
            }
        }

        

        mqttService.connect(function (success, error) {
            if (success) {
                $state.transitionTo('casual',
                    {
                        channel: vm.channel,
                    });
            } else if (error) {
                console.log(error)
                alert(`Could Not Connect to ${brokerDetails.HOST}:${brokerDetails.PORT}`)
            }

        },mqttOptions)
    }

}
