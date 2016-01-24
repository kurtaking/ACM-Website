site.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html'
        })
        .state('info', {
            url: '/info',
            templateUrl: '../views/info.html'
        })
        .state('involvement', {
            url: '/involvement',
            templateUrl: '../views/involvement.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '../views/contact.html'
        })
        .state('calendar', {
            url: '/calendar',
            templateUrl: '../views/calendar.html'
        })
        .state('404', {
            url: '/404',
            templateUrl: '../404.html'
        });

        $urlRouterProvider.when('/index', '/');
        $urlRouterProvider.when('/home', '/');
        $urlRouterProvider.otherwise('/404');
});
