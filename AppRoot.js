(function(){

var app = angular.module('BookMyPickupApp',['productModule']);


app.controller('RootController', ['$http','$log',function($http, $log){
    var store = this;
    store.pickups = [ {
	"name" : "Tata ACE",
	"size" : "1.0 ton",
	"description": "Ideal for carrying small household stuffs",
	"canBook" : true,
	"price" : 200,
	"images": [{ "full" : "ace_full.jpg" , "thumbnail" : "ace_thumb.jpg"}],
	"reviews": [{"stars":5, "body":"áaaaaaaaa", "author":"amit@amit.com"}],
	
	},
	
	{
	"name" : "Piaggio",
	"size" : "2.0 ton",
	"description": "Ideal for carrying Medium household stuffs",
	"canBook" : true,
	"price" : 300,
	"images": [{ "full" : "piaggio_full.jpg" , "thumbnail" : "piaggio_thumb.jpg" }],
	"reviews": [{"stars":5, "body":"áaaaaaaaa", "author":"amit@amit.com"}],
	},
	
	{
	"name" : "Mahindra Bolero",
	"size" : "5.0 ton",
	"description": "Ideal for carrying large household stuffs",
	"canBook" : true,
	"price" : 500,
	"images": [{ "full" : "bolero_full.jpg" , "thumbnail" : "bolero_thumb.jpg" }],
	"reviews": [{"stars":5, "body":"áaaaaaaaa", "author":"amit@amit.com"}],
	},
	
	];
	$log.log("hello");
	
    $http.get('/pickups.json').success(function(data){
      store.pickups = data;
           
    });
  }]);
  
  
// app.controller('RootController', function(){
	
	// var store = this;
	// store.pickups = [ {
	// "name" : "Tata ACE",
	// "size" : "1.0 ton",
	// "description": "Ideal for carrying small household stuffs",
	// "canBook" : true,
	// "price" : 200,
	// "images": [{ "full" : "ace_full.jpg" , "thumbnail" : "ace_thumb.jpg"}],
	// "reviews": [{"stars":5, "body":"áaaaaaaaa", "author":"amit@amit.com"}],
	
	// },
	
	// {
	// "name" : "Piaggio",
	// "size" : "2.0 ton",
	// "description": "Ideal for carrying Medium household stuffs",
	// "canBook" : true,
	// "price" : 300,
	// "images": [{ "full" : "piaggio_full.jpg" , "thumbnail" : "piaggio_thumb.jpg" }],
	// "reviews": [{"stars":5, "body":"áaaaaaaaa", "author":"amit@amit.com"}],
	// },
	
	// {
	// "name" : "Mahindra Bolero",
	// "size" : "5.0 ton",
	// "description": "Ideal for carrying large household stuffs",
	// "canBook" : true,
	// "price" : 500,
	// "images": [{ "full" : "bolero_full.jpg" , "thumbnail" : "bolero_thumb.jpg" }],
	// "reviews": [{"stars":5, "body":"áaaaaaaaa", "author":"amit@amit.com"}],
	// },
	
	// ];
	
	
// });


})();

