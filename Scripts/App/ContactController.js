(function () {
    'use strict';
    angular
        .module('contact')
        .controller('contactController', contactController);

    contactController.$inject = ['$scope', '$http', 'contactFactory'];

    function contactController($scope, $http, contactFactory) {
        var vm = this;
        vm.create = create;

        // contactFactory.getContacts().then();

        function create(data) {
            contactFactory.newContact(data);
            console.log(data);
        }
    }
})();