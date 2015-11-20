materialAdmin
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/pages/profile/profile-about");

        $stateProvider        
            //------------------------------
            // HOME
            //------------------------------        
            .state ('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: []
                            },
                            {
                                name: 'vendors',
                                insertBefore: '#app-level-js',
                                files: []
                            }
                        ])
                    }
                }
            })                    
            
            //------------------------------
            // PAGES
            //------------------------------            
            .state ('pages', {
                url: '/pages',
                templateUrl: 'views/common.html'
            })
                   
            // Profile        
            .state ('pages.profile', {
                url: '/profile',
                templateUrl: 'views/profile.html'
            })        
            .state ('pages.profile.profile-about', {
                url: '/profile-about',
                templateUrl: 'views/profile-about.html'
            })  
    });
