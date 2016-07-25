(function(){
    angular
        .module('mainApp')
        .controller('CountryController', CountryController);

          CountryController.$inject = ['dataservice', '$scope'];


    function CountryController(dataservice, $scope) {

        var vm = this;
        vm.countries = [];
        // vm.getCountry = getCountry;

        function init(){
            $scope.countries = dataservice.getCountries();
       }


        init();





        function activate() {
            return dataservice.getCountries()
                .then(function(countries) {
                    vm.countries = countries
                })

        }activate();
    }
    


})();
