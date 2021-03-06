(function(){
    angular
        .module('mainApp')
        .controller('CountryController', CountryController);

          CountryController.$inject = ['dataservice', '$scope'];


    function CountryController(dataservice, $scope) {

        var vm = this;
        vm.countries = [];

//  This was the cause of my duplicate display of data in the XHR log. I'm not sure why I had it, maybe was the beggining
//   of the activate function.
//        function init(){
//            $scope.countries = dataservice.getCountries();
//
//       }
//        init();
// I was thinking of adding a separate function to call the dataservice functions by adding
// getCountry, but it doesn't look like I can have more than one function init() or function activate()
// I found the both under John Papa's style guide, but I don't quite understand the point.

        activate();
        function activate() {
            return dataservice.getCountries()
                .then(function(countries) {
                    vm.countries = countries
                });

        }
    }



})();
