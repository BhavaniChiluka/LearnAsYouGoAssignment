app.controller('countryController', function($scope, $http, $location) {
    $http.get('data/countries.json').then(function(response) {
        $scope.countries = response.data;
    });
    $scope.viewDetails = function(country) {
        $scope.selectedCountry = country;
        $location.path('/details');
    };
});