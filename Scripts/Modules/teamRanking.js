angular.module('teamRankModule', ['customFilterModule']);

angular.module('teamRankModule').directive('teamRankDir', function(){
    return {
        restrict: 'E', 
        templateUrl: 'Templates/teamRank.html'
    }
})