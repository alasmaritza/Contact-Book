(function () {
    'use strict';
    angular
        .module('contact')
        .controller('contactController', contactController);

    contactController.$inject = ['$scope', '$http', '$window', 'contactFactory'];

    function contactController($scope, $http, $window, contactFactory) {
        var vm = this;
        vm.create = create;
        vm.created = "Your New Contact Has Been Created!";

        // contactFactory.getContacts().then();

        function create(data) {
            contactFactory.newContact(data);
            console.log(data);
            $window.alert(vm.created);
        }
    }
})();