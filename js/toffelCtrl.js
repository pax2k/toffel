app.controller("toffelCtrl", function ($scope) {

    $scope.titleReceiver = "";
    $scope.receiver = "";
    $scope.date = "";
    $scope.dateFrom = "";
    $scope.dateTo = "";
    $scope.amountOfAlcohol = "";
    $scope.places = "";
    $scope.women = "";


    $scope.valid = function () {
        return ($scope.titleReceiver) &&
        ($scope.receiver) &&
        ($scope.date) &&
        ($scope.dateFrom) &&
        ($scope.dateTo) &&
        ($scope.amountOfAlcohol) &&
        ($scope.places) &&
        ($scope.women);
    };
});
