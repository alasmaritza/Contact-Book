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
        vm.update = update;

        contactFactory.getContacts().then(displayContact);

        function displayContact(data) {
            vm.person = data.data;
        }

        function edit(names) {
            document.getElementById("editForm").classList.remove("hidden");
            vm.names = names;
            console.log(vm.names);
        }

        function remove(person) {
            var id = person.id;
            contactFactory.removeContact(id);
            $window.alert(person.firstName + " has been removed from your contacts.");
        }

        function update(name) {
            document.getElementById("editForm").classList.add("hidden");
            var name = name;
            var id = name.id;
            contactFactory.updateContact(name, id);
            $window.alert(name.firstName + "'s information has been updated.");
        }
    }

})();