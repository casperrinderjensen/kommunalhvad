// JavaScript Document

$('.hamburger-btn').click(function() {
	$(this).toggleClass('expanded').siblings('div').slideToggle(600);
}		 
);