/*jshint boss:true */
angular.module( 'hello', [] ).directive( "scroll", function() {
  return function( scope, element, attrs ) {
    angular.element( document.body ).bind( "scroll", function() {
    	//var h = document.body.scrollTop;  
      if ( this.scrollTop >= 200 ) {
        console.log( this.scrollTop );
        element.addClass( 'min' );
        // document.getElementById("myP").style.display = 'none';
        console.log( 'Scrolled below header.' );
      } else {
        //element.removeClass('min');
        //document.getElementById("myP").style.display = 'none';
        console.log( 'Header is in view.' );
      }
    } );
  };
} );
