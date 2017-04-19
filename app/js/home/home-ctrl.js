angular.module( 'home', [ 'main' ] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope, $window ) {
  $scope.homectrl = {};
  console.log( "homectrl" );

  window.onscroll = function() {
    scrollFunction();
    myFunction();
  };
  function scrollFunction() {
    console.log('logo');
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
      document.getElementById( "myP" ).style.display = "block";
    } else {
      document.getElementById( "myP" ).style.display = "none";
    }
  }


  function myFunction() {
    console.log('logo');
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
      document.getElementById( "myP" ).className = "fixed";
    } else {
      document.getElementById( "myP" ).className = "top";
    }
  }
  // angular.element(document.body).bind("scroll", function() { console.log('gg');
  //            if (this.pageYOffset >= 200) {
  //                element.addClass('min');
  //                console.log('Scrolled below header.');
  //            } else {
  //                element.removeClass('min');
  //                console.log('Header is in view.');
  //            }
  //       });
} );
// .directive("scroll", function ($window) {
//       return function(scope, element, attrs) {
//   angular.element($window).bind("scroll", function() { console.log( "homectrl" );
//               if (this.pageYOffset >= 100) {
//                    scope.boolChangeClass = true;
//                    console.log('Scrolled below header.');
//                } else {
//                    scope.boolChangeClass = false;
//                    console.log('Header is in view.');
//                }
//               $scope.$apply();
//           });
//       };
// }
