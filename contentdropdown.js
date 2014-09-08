$('document').ready(function(){
$('.dropdowncontent').on('click',".dpdwbutton1", function(){
	$('.dpdwcontent1').slideToggle();
	$(this).find(".plusoption").toggle();
	$(this).find(".minusoption").toggle();
})
$('.dropdowncontent').on('click',".dpdwbutton2", function(){
	$('.dpdwcontent2').slideToggle();
	$(this).find(".plusoption").toggle();
	$(this).find(".minusoption").toggle();
})
$('.dropdowncontent').on('click',".dpdwbutton3", function(){
	$('.dpdwcontent3').slideToggle();
	$(this).find(".plusoption").toggle();
	$(this).find(".minusoption").toggle();
})
$('.dropdowncontent').on('click',".dpdwbutton4", function(){
	$('.dpdwcontent4').slideToggle();
	$(this).find(".plusoption").toggle();
	$(this).find(".minusoption").toggle();
})
$('.dropdowncontent').on('click',".dpdwbutton5", function(){
	$('.dpdwcontent5').slideToggle();
	$(this).find(".plusoption").toggle();
	$(this).find(".minusoption").toggle();
})
})