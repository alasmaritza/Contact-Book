(function () {
    'use strict';
    angular
    .module('contact')
    .controller('editController', editController);

    editController.$inject = ['$scope', 'contactFactory'];

    function editController ($scope, contactFactory) {
        var vm = this;
        vm.edit = edit;
       // vm.displayContact = displayContact;


        // contactFactory.getContacts().then(displayContact);

        // function displayContact(data) {
        //     vm.person = data.data;
        // }

        function edit(person) {
            console.log(person);
        }
    }
})();