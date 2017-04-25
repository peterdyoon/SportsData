angular.module("storeProducts", []);

angular.module("storeProducts").directive("gemPanels", function () {
    return {
        restrict: 'A',
        controller: ['$scope', function($scope) {
            $scope.tab = 1;
            $scope.selectTab = function (newTab) {
                $scope.tab = newTab;
            }
        }],
        templateUrl: "Templates/store-panels.html"
    }
});