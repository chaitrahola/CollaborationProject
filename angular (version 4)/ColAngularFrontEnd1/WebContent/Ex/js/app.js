
var app = angular.module('myApp', [ 'ngRoute','ngCookies' ]);

app.config(function($routeProvider) {
	console.log(" i am inside app js ");
  $routeProvider

 
  .when('/home', {
    templateUrl : 'col/home/home.html',
    	controller : 'UserHomeController'
  })

  .when('/adminhome', {
    templateUrl : 'col/home/adminhome.html'
    	/*controller : 'UserHomeController'*/
  })
  .when('/blog', {
    templateUrl : 'col/blog/blog.html',
    	controller : 'BlogController'
    		
   
  })
  
  .when("/friendslist", {
		templateUrl : "col/friend/friendslist.html",
		controller : 'FriendsListController'
  })
  .when('/adminblog', {
		templateUrl : 'col/blogadmin/adminblog.html',
		controller : 'AdminBlogController'
  })
  
.when("/allblogs", {
	templateUrl : "col/allblog/allblogs.html",
	controller : "AllBlogsController"
})

.when("/userforum", {
		templateUrl : "col/userforum/userforum.html",
		controller : "UserForumController"

	}).when("/adminforum", {
		templateUrl : "col/adminforum/adminforum.html",
		controller : "AdminForumController"

	})
	
	.when("/userjobs", {
		templateUrl : "col/userjobs/userjobs.html",
		controller : "UserJobsController"

	}).when("/job", {
		templateUrl : "col/adminjobs/jobs.html",
		controller : "AdminJobsController"
	
	}).when('/contact', {
    templateUrl : 'col/contact/contact.html'
   
  })
  
   .when('/about', {
    templateUrl : 'col/about/about.html'
   
  })
  
  .when('/login', {
    templateUrl : 'col/login/login.html',
    	controller:'LoginController'
    	
  })
  
  .when('/logout', {
    templateUrl : 'col/login/logout.html',
    	controller : 'LogoutController' 
    	
  })
  
  .when('/register', {
    templateUrl : 'col/register/register.html',
    controller : 'RegisterController' 	
    	   
  })
  
  
.when('/chat', {
    templateUrl : 'col/chat/chat.html',
    controller : 'chatController' 	
    	   
  })
  .otherwise({redirectTo: '/'});
});

