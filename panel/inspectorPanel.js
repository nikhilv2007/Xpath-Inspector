function hello(){
	chrome.devtools.inspectedWindow.eval(
          "jQuery.fn.jquery",
           function(result, isException) {
             if (isException)
               console.log("the page is not using jQuery");
             else
               alert("The page is using jQuery v" + result);
           }
      );
}

var angMain = angular.module('myApp', []);

angMain.controller('UserInputController', function($scope){
	
	$scope.Locater = ["Id", "Name", "Class Name", "Tag Name", "Link Text", "Partial Link Text", "CSS", "Xpath"];
	
});
