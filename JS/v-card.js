var app = angular.module('myApp', []);
app.controller('myctrl', function($scope) {

	$scope.btnSave = function(){
		html2canvas($("#widget"), {
				onrendered: function(canvas) {
					theCanvas = canvas;
					document.body.appendChild(canvas);

					
					Canvas2Image.saveAsPNG(canvas); 
					$("#img-out").append(canvas);
				
				}
			});
		$scope.msg = "Note:Right click on the image and click Save image as";	
	 }
  
});

