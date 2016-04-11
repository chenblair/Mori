var app = angular.module('app', ['ngRoute']);

var percent=0;



app.controller('suggestionController', function($scope) {
  $scope.todos = [
      {text:"todo1"},
      {text:"todo2"},
      {text:"todo3"}
    ];

    
  });
function getPercent (percentage){
	alert(percentage);
	percent=percentage;

}
app.controller('percentageController', function($scope) {
  $scope.cent = [
      {text:"wutup"}
      
    ];
});

