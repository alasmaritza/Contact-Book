(function () {
    'use strict';
    angular
        .module('contact')
        .controller('viewController', viewController);

    viewController.$inject = ['$scope', 'contactFactory'];

    function viewController($scope, contactFactory) {
        var vm = this;
        vm.displayContact = displayContact;

        contactFactory.getContacts().then(displayContact);

        function displayContact(data) {
            vm.person = data.data[0];
            console.log(vm.person);
        }
    }
})();