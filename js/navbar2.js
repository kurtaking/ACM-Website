site.directive('navbar2', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
        templateUrl: "/views/navbar2.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});

jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.navbar-fixed-top').removeClass("navbar-transparent");
            $('.navbar-brand').css("color","#f15a22");
            $('.nav > li >a').css("color","#f15a22");
		} else {
			$('.navbar-fixed-top').addClass("navbar-transparent");
            $('.navbar-brand').css("color","#fff");
            $('.nav > li >a').css("color","#fff");
		}
	});
});