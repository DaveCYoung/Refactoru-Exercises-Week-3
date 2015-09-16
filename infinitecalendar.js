angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController',['$scope', function($scope){

$scope.calendarObject = {};
$scope.dateArray = []
$scope.daycounter = 0
$scope.dayAdd = function(){
for (i=0;i<10;i++){
		$scope.date = new Date();
		$scope.date.setDate($scope.date.getDate() + (i + $scope.daycounter));
		var datestring = $scope.date.toUTCString();
		var datestring = datestring.slice(0, 16)
		$scope.dateArray.push({date: datestring, content: "Click to Enter an Appointment",})
		console.log($scope.date.getMonth())
	}
	$scope.daycounter = $scope.daycounter + 10;
}
$scope.dayAdd()	

$scope.activeindex = false;
$scope.paragraphclick = function($index){
		$scope.activeindex = $index;
	}
$scope.setactiveindex = function($index){
		return ($scope.activeindex === $index);
	}
$scope.buttonclick = function($index){
		$scope.activeindex = -2;
	}

data = JSON.stringify($scope.dateArray)
console.log(data)


}])