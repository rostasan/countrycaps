(function () {
    angular
        .module('mainApp')
        .factory('dataservice', dataservice);
    dataservice.$inject = ['$http','logger'];

    function dataservice($http, logger) {
        return {
            getCountries: getCountries
        };
        function getCountries() {
            return $http({
                method : "GET",
                url : 'api.geonames.org/search?',
                username : 'rostasan',
                format: "json",
                nojsoncallback: 1
            })
                .then(getCountriesComplete)
                .catch(getCountriesFailed);

            function getCountriesComplete(response) {
                return response.data.results;
            }

            function getContriesFailed(error) {
                logger.error('XHR Failed for getCountries.' + error.data);
            }

        }
    }
})();