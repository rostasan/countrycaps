(function () {
    angular
        .module('mainApp')
        .factory('dataservice', dataservice);
    dataservice.$inject = ['$http','$q','$timeout'];

    function dataservice($http, $q, $timeout) {
        function wait() {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    resolve();
                }, 2000);


            });
        }
        function notify() {
            $scope.notifySaved = true;
            return wait().then(function() {
                $scope.notifySaved = false;
            });
        }




        function getCountries() {
            return $http({
                method: "GET",
                url: "http://api.geonames.org/countryInfoJSON",
                params: {
                    username: 'rostasan',
                    maxRows: 10

                },
                callback: 'JSON_CALLBACK'
            })
        }
        function getCountry(keyword) {
            return $http({
                method: "GET",
                url: "http://api.geonames.org/searchJSON",
                params: {
                    username: '',
                    q: "london",
                    maxRows: 10
                },
                callback: 'JSON_CALLBACK'
            })
        }
        return {
            wait: wait,
            notify: notify,
            getCountries: getCountries,
            getCountry: getCountry
//            search: search,
//            neighbours: neighbours
        };

// method to get all the countries

// method to get a single country




      //  $scope.keyword = ""
//        var defer = $q.defer
//        return  {
//            getCountries: getCountries,
//            getCountry: getCountry
//                };
//        function getCountries(query) {
//            return $http({
//                method : "GET",
//
//                url:  "http://api.geonames.org/searchJSON",
//                params: {
//                    username: 'rostasan',
//
//                        },
//                callback: 'JSON_CALLBACK',
//
//            })
//
//
//        }
    }
})();
