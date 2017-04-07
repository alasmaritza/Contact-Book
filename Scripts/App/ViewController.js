(function () {
    'use strict';
    angular
        .module('contact')
        .controller('viewController', viewController);

    viewController.$inject = ['$scope', '$window', 'contactFactory'];

    function viewController($scope, $window, contactFactory) {
        var vm = this;
        vm.displayContact = displayContact;
        vm.edit = edit;
        vm.remove = remove;

        contactFactory.getContacts().then(displayContact);

        function displayContact(data) {
            vm.person = data.data;
        }

        function edit(person) {
            console.log(person);
        }

        function remove(person) {
            var id = person.id;
            contactFactory.removeContact(id);
            $window.alert(person.firstName + " has been removed from your contacts.");
        }
     }
})();