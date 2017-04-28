angular.module('playerRankModule', ['customFilterModule']);

angular.module('playerRankModule').directive('playerRankDir', function(){
    return {
        restrict: 'E', 
        templateUrl: '/Templates/playerRank.html'
    }
})