(function() {
    angular
        .module('mainApp')
        .config(config);
    function config($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controlleras: 'vm'
                })
                .when('/list', {
                    templateUrl: 'views/CountryList.html',
                    controller: 'ListController',
                    controlleras: 'vm'
                })
                .when('/detail',{
                    templateUrl: 'views/CountryDetail.html',
                    controller: 'DetailController',
                    controlleras: 'vm'
                })
                 
        }

})();
