(function(){
    angular
        .module('mainApp')
        .controller('CountryController', CountryController);
        //  $scope.data = data['geonames'][0];
          CountryController.$inject = ['dataservice', '$scope'];
           $scope.data = {};

    function CountryController(dataservice, $scope) {
      //  $scope.data = data['geonames'][0];
        var vm = this;
        vm.countries = [];
     //   vm.countryCode = [];

        activate();

        function activate() {
            return dataservice.getCountries()
                .then(function(countries) {
                    vm.countries = countries
                })
             //   .then(function(countryCode) {
            //        vm.countryCode = countryCode
            //    })
        }
    }



})();
