(function() {
    angular
        .module('mainApp')
        .config(config);
    function config($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .when('/list', {
                    templateUrl: 'views/CountryList.html',
                    controller: 'CountryController',
                    controllerAs: 'countries as vm'
                })
                .when('/detail',{
                    templateUrl: 'views/CountryDetail.html',
                    controller: 'DetailController',
                    controllerAs: 'vm'
                })
                 
        }

})();
