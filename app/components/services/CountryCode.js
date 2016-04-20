(function () {
    angular
        .module('mainApp')
        .factory('dataservice', dataservice);
    dataservice.$inject = ['$http','$q'];




    function dataservice($http, $q, $scope) {
      
        // var urlString = [
        //     "http://api.geonames.org/searchJSON?" +
        //     "q=greece" +
        //     "&username=demo"

        // ];
        var q = $q.defer
        return  {
            getCountries: getCountries
                };
        function getCountries() {
            return $http({
                method : "GET",
                // url: urlString,
                url:  "http://api.geonames.org/searchJSON?",
                params: {
                    username: 'rostasan',
                        },
                callback: 'JSON_CALLBACK'
            })
                q.then(getCountriesComplete)
                q.catch(getCountriesFailed);

            function getCountriesComplete(response) {
                return q.response.data.geonames;
            }

            function getCountriesFailed(error) {
                console.error('XHR Failed for getCountries.' + error.data);
            }

        }
    }
})();
