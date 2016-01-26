(function(){

var app = angular.module('productModule',[]);

app.directive('productTitle', function(){
	return {
		restrict: 'E',
		templateUrl: 'pickupTitle.html'
	};
});

app.directive('productReview', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-review.html'
	};
});

app.directive('pickupPanels', function(){
	return {
		restrict: 'E',
		templateUrl: 'pickup-panels.html',
		controller: function(){
			this.tab = 1;
	
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
	
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		},
		controllerAs: 'panels'
	};
});



app.controller('ReviewController',function(){
	this.review = {};
	this.addReview = function(pickup){
		 this.review.createdOn = Date.now();
		pickup.reviews.push(this.review);
		
		this.review = {};
	};
});
})();