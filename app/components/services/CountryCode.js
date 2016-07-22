(function () {
    angular
        .module('mainApp')
        .factory('dataservice', dataservice);
    dataservice.$inject = ['$http','$q','$timeout', '$scope'];

    function dataservice($http, $scope, $timeout, $q) {
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




         $scope.getCountry = function(keyword) {
            return $http({
                method: "GET",
                url: "http://api.geonames.org/countryInfo",
                params: {
                    username: 'rostasan',
                    country: keyword
                  },
                  callback: 'JSON_CALLBACK'
            })
      };



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
