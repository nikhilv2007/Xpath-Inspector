
var angMain = angular.module('myApp', []);

angMain.controller('UserInputController', ['$scope', function($scope){
	
	$scope.locator = ["Id", "Name", "Class Name", "Tag Name", "Link Text", "Partial Link Text", "CSS", "Xpath"];
	
	$scope.selection = "Xpath";
	
	$scope.userEntry = '';
	
	$scope.result = [];
	
	$scope.elemInnertext ="";
	
	$scope.findElement = function(selected, txtEntered){
		alert(selected+ " | " +txtEntered);
		
		if(!txtEntered == "")
		{
			alert("about to execute evaluate function");
			/*
			var xpath = function(txtEntered){
			 	$scope.result = [];
			 	var nodesSnapshot = document.evaluate(txtEntered, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
			 	alert("elements found - "+nodesSnapshot.snapshotLength);
			  	for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
			    	$scope.result.push( nodesSnapshot.snapshotItem(i) );
			  	};			  
			};
			*/
			switch(selected.replace(" ", "").toUpperCase())
			{
				case "ID":
					chrome.devtools.inspectedWindow.eval(
			          	"document.getElementById('console-settings').attributes[0] ",
			           	function(result, isException) {
			             	if (isException)
			             	{
			               		alert("exception encountered");
			               		alert(isException.isError +"<>"+ isException.code +"<>"+ isException.description +"<>"+ isException.details +"<>"+ isException.isException +"<>"+ isException.value +"<>");
			               	}
			             	else
			               		$scope.elemInnertext = result;
		           		}
		      		);
		      		break;
		      	case "XPATH":
		      		alert("xpath code block");
		      		break;
		      	
		      	default:
		      		alert("case not handled yet")
			}
			
		}
		
	};
}]);