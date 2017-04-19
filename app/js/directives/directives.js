/*jshint boss:true */
angular.module( 'hello', [] ).directive( "scroll", function() {
  return function( scope, element, attrs ) {
    angular.element( document.body ).bind( "scroll", function() {
    	//var h = document.body.scrollTop;  
      document.body.scrollTop = 0;
      if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800 ) {
      document.getElementById("myP").style.display = "none";
    } else {
      document.getElementById("myP").style.display = "block";
      console.log('hh');
    }
    } );
  };
} );
