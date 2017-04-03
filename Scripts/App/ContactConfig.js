(function () {
    'use strict';
    angular
        .module('contact')
        .config(config);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/Home');

        $stateProvider
            .state('Home', {
                url: '/Home',
                templateUrl: 'Home.html',
                // controller: 'homeController as home'
            })

            .state('NewContact', {
                url: '/NewContact',
                templateUrl: 'NewContact.html',
                controller: 'contactController as contact'
            })

            .state('Contacts', {
                url: '/ViewContact',
                templateUrl: 'ViewContacts.html',
                controller: 'viewController as view'

            })
    }

})();