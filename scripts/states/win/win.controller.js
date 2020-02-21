angular.module('app').controller('winCtrl', winCtrl);

winCtrl.$inject = [
    '$rootScope',
    '$state',
    'mqttService',
    'brokerDetails'
];

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