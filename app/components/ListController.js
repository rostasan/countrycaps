(function(){
    angular
        .module('mainApp')
        .controller('CountryController', CountryController);

    CountryController.$inject = ['dataservice'];

    function CountryController(dataservice) {
        var vm = this;
        vm.countries = [];

        activate();

        function activate() {
            return dataservice.getCountries()
                .then(function(countries) {
                    vm.countries = countries
                })
        }
    }



})();