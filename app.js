angular.module('myApp', [])

.controller('myCtrl', ['$scope', '$http', function($scope, 
	$http){

	$scope.search = function(userInput){
	$http.get("https://www.googleapis.com/books/v1/volumes?q=" + userInput)
		.then(function(data){

		$scope.books = data.data.items;
		console.log($scope.books);
	})
}
}])
