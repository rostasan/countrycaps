(function () {
    angular
        .module('mainApp')
        .factory('dataservice', dataservice);
    dataservice.$inject = ['$http'];

    function dataservice($http) {
        return {
            getCountries: getCountries
        };
        function getCountries() {
            return $http({
                method : "GET",
                url : 'http://api.geonames.org/searchJSON?',
                params : {
                    username : 'rostasan'
                },
                format: "json",
                nojsoncallback: 1
            })
                .then(getCountriesComplete)
                .catch(getCountriesFailed);

            function getCountriesComplete(response) {
                return response.data.geonames;
            }

            function getCountriesFailed(error) {
                console.error('XHR Failed for getCountries.' + error.data);
            }

        }
    }
})();