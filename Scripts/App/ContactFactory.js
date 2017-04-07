(function () {
    'use strict';
    angular
        .module('contact')
        .factory('contactFactory', contactFactory);

    contactFactory.$inject = ['$http'];

    function contactFactory($http) {
        var urlPrefix = 'http://58e02f412043701200d0b326.mockapi.io/Contacts';
        var service = {
            getContacts: getContacts,
            newContact: newContact,
            removeContact: removeContact
        }
        return service

        function getContacts() {
            return $http.get(urlPrefix + '/People');
        }

        function newContact(data) {
            var config = {
                method: 'POST',
                url: urlPrefix + '/People',
                data: data
            }
            return $http(config);
        }

        function removeContact(id) {
            var config = {
                method: 'DELETE',
                url: urlPrefix + '/People/' + id,
                data: id
            }
            return $http(config);
        }

    }
})();