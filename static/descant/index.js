var app = angular.module('descant', ['ngAnimate', 'ngRoute', 'ngTagsInput', 'relativeDate', 'infinite-scroll',
 									 'descant.config', 'descant.services.tokenservice', 'descant.directives.authforms',
									 'descant.directives.authmisc', 'descant.directives.authstatus', 
									 'descant.directives.navbtn', 'descant.directives.newpost',
									 'descant.directives.newtopic', 'descant.directives.taglist',
									 'descant.directives.topiclist', 'descant.directives.topicview',
									 'descant.directives.topicview', 'descant.directives.userlist',
									 'descant.directives.userstats', 'descant.directives.entropyindicator',
									 'descant.filters.html', 'descant.controllers.routing', 'descant.directives.resetpass',
									 'descant.directives.resetconf']);

app.config(function($routeProvider, $locationProvider) {
		$routeProvider
    	.when('/', {
			title: 'Home',
    		templateUrl: 'pages/topics.html'
    	})
		.when('/topics', {
			title: 'Topics',
			templateUrl: 'pages/topics.html'
		})
    	.when('/users', {
			title: 'Users',
    		templateUrl: 'pages/users.html'
    	})
    	.when('/admin', {
			title: 'Administration',
    		templateUrl: 'pages/admin.html'
    	})
		.when('/topic/:topicId', {
			title: 'Topic',
			templateUrl: 'pages/post-view.html',
			controller: 'PostViewController'
		})
		.when('/topics/:tagId', {
			title: 'Topics',
			templateUrl: 'pages/tag-topics.html',
			controller: 'TagTopicViewController'
		})
		.when('/user/:userId', {
			title: 'User Information',
			templateUrl: 'pages/user-view.html',
			controller: 'UserViewController'
		})
		.when('/chat', {
			title: 'Chat',
			templateUrl: 'pages/chat.html'
		})
		.when('/login', {
			title: 'Log in',
			templateUrl: 'pages/login.html'
		})
		.when('/register', {
			title: 'Register',
			templateUrl: 'pages/register.html'
		})
		.when('/logout', {
			title: 'Log out',
			templateUrl: 'pages/logout.html'
		})
		.when('/activate', {
			title: 'Account Activation',
			template: '',
			controller: 'ActivateController'
		})
		.when('/registered', {
			title: 'Registration Succeeded!',
			templateUrl: 'pages/registration-done.html'
		})
		.when('/usercp', {
			title: 'User Control Panel',
			templateUrl: 'pages/user-cp.html',
			controller: 'UserCPController',
			controllerAs: 'cpCtrl'
		})
		.when('/resetpass', {
			title: 'Reset Password',
			templateUrl: 'pages/reset-pass.html'
		})
		.when('/reset', {
			title: 'Reset Password',
			templateUrl: 'pages/reset-pass-confirm.html',
			controller: 'ResetPassController'
		})
		.when('/404', {
			title: 'Not Found',
			templateUrl: 'pages/404.html'
		})
		.otherwise('/404');

});

app.run(function ($rootScope, $route, $timeout, $window, descantConfig) {
	$rootScope.$on('$routeChangeSuccess', function () {
		$timeout(function () {
			$window.scrollTo(0,0);
		}, 500);
		
        document.title = $route.current.title + " | " + descantConfig.forumName;        
	});
});
