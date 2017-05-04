angular.module('playerDataEditModule', ['customFilterModule']);

angular.module('playerDataEditModule').directive('playerDataEditDir', function () {
    return {
        restrict: 'E',
        controller: ["$scope", function ($scope) {
        }],
        templateUrl: 'Templates/playerDataEdit.html'
    }
})
