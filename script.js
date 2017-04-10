//var timer;
var title, subtitle, about, cred;
var video, f1, f2, img;
var banner, bGL, bPK, bTW, bFB;
var bpH = 0; //current breakpoint for header
var bpM = 0; //current breakpoint for main page
var bpC = 0; //current breakpoint for credits
var bpB = 0; //current breakpoint for buttons
var bpF = false; //smaller font size

$(document).ready(function(){
    title = $("h1"); subtitle = $("h2"); about = $(".about"); cred = $(".credits");
	banner = $(".top"); bGL = $(".gl-image"); bPK = $(".pk-image"); bTW = $(".tw-image"); bFB = $(".fb-image"); 
	if (about.length > 0) {
		video = $("#video"); f1 = $("#feat1"); f2 = $("#feat2");
		img = [$("#I1"), $("#I2"), $("#I3"), $("#I4"), $("#I5"), $("#I6"), $("#I7"), $("#I8"), $("#I9")];
	}
	Adjust();
});

$(window).resize(function() {
	//timer = setInterval(Adjust(), 100);
	Adjust();
});

function Adjust() {
	var W = $(window).width(); //console.log(W);
	
	//header
if (W >= 1024 && bpH != 0) { title.removeAttr("style"); subtitle.removeAttr("style"); subtitle.show(); bpH = 0; }
else if (W < 1024 && W >= 850 && bpH != 1) { title.attr("style","font-size: 50px"); subtitle.attr("style","font-size: 22px"); subtitle.show(); bpH = 1; }
else if (W < 850 && W >= 760 && bpH != 2) { title.attr("style", "font-size: 45px"); subtitle.attr("style", "font-size: 20px"); subtitle.show(); bpH = 2; }
else if (W < 760 && W >= 680 && bpH != 3) { title.attr("style", "font-size: 40px"); subtitle.attr("style", "font-size: 16px"); subtitle.show(); bpH = 3; }
else if (W < 680 && bpH != 4) { title.attr("style", "font-size: 35px; margin-top: 0.25em"); subtitle.hide(); bpH = 4; }
	
	//buttons
	if (W >= 1030 && bpB != 0) {
		bGL.removeClass(); bPK.removeClass(); bTW.removeClass(); bFB.removeClass();
		bGL.addClass("gl-image"); bPK.addClass("pk-image"); bTW.addClass("tw-image"); bFB.addClass("fb-image");
		banner.show(); bpB = 0;
	}
	else if (W < 1030 && W >= 570 && bpB != 1) {
		bGL.removeClass(); bPK.removeClass(); bTW.removeClass(); bFB.removeClass();
		bGL.addClass("gl-image"); bPK.addClass("pk-image-2"); bTW.addClass("tw-image-2"); bFB.addClass("fb-image-2");
		banner.show(); bpB = 1;
	}
	else if (W < 570 && bpB != 2) {
		bGL.removeClass(); bPK.removeClass(); bTW.removeClass(); bFB.removeClass();
		bGL.addClass("bt-image-no"); bPK.addClass("bt-image-no"); bTW.addClass("bt-image-no"); bFB.addClass("bt-image-no");
		banner.hide(); bpB = 2;
	}
	
	if (about.length > 0) {
		//about - font
		if (W >= 480 && bpF) { about.removeAttr("style"); bpF = false; }
		else if (W < 480 && !bpF) { about.attr("style", "font-size: 16px"); bpF = true; }
		//about - layout
		if (W >= 800 && bpM != 0) {
			bpM = 0;
			video.insertBefore("#premise1"); video.removeClass(); video.addClass("trailer");
			f1.addClass("features-column-1"); f2.addClass("features-column-2");
			img[0].removeClass(); img[0].addClass("imL"); img[1].removeClass(); img[1].addClass("imC"); img[2].removeClass(); img[2].addClass("imR");
			img[3].removeClass(); img[3].addClass("imL"); img[4].removeClass(); img[4].addClass("imC"); img[5].removeClass(); img[5].addClass("imR");
			img[6].removeClass(); img[6].addClass("imL"); img[7].removeClass(); img[7].addClass("imC"); img[8].removeClass(); img[8].addClass("imR");
		}
		else if (W >= 500 && W < 800 && bpM != 1) {
			bpM = 1;
			video.insertAfter("#premise2"); video.removeClass(); video.addClass("trailer-alt");
			f1.removeClass(); f2.removeClass();
			img[0].removeClass(); img[0].addClass("imL2"); img[1].removeClass(); img[1].addClass("imR2"); img[2].removeClass(); img[2].addClass("imL2");
			img[3].removeClass(); img[3].addClass("imR2"); img[4].removeClass(); img[4].addClass("imL2"); img[5].removeClass(); img[5].addClass("imR2");
			img[6].removeClass(); img[6].addClass("imL2"); img[7].removeClass(); img[7].addClass("imR2"); img[8].removeClass(); img[8].addClass("im1");
		}
		else if (W < 500 && bpM != 2) {
			bpM = 2;
			video.insertAfter("#premise2"); video.removeClass(); video.addClass("trailer-alt");
			f1.removeClass(); f2.removeClass();
			for (i = 0; i < img.length; i++) { img[i].removeClass(); img[i].addClass("im1"); }
		}
	}
	
	if (cred.length > 0) {
		if (W >= 800 && bpC != 0) { bpC = 0; AdjustCredits(); cred.removeAttr("style"); }
		else if (W >= 480 && W < 800 && bpC != 1) { bpC = 1; AdjustCredits(); cred.removeAttr("style"); }
		else if (W < 480 && bpC != 2) { bpC = 2; AdjustCredits(); cred.attr("style", "font-size: 16px"); }
	}
	
	//clearInterval(timer);
}

function AdjustCredits() {
	$("#cMus1").removeClass(); $("#cMus2").removeClass(); $("#cVid1").removeClass(); $("#cVid2").removeClass(); $("#cMod1").removeClass(); $("#cMod2").removeClass();
	$("#cImg1").removeClass(); $("#cImg2").removeClass(); $("#cImg3").removeClass(); $("#cSnd1").removeClass(); $("#cSnd2").removeClass(); $("#cSnd3").removeClass();
	$(".c-intro").removeAttr("style"); $(".c-license").removeAttr("style"); $(".c-header-1").removeAttr("style"); $(".c-header-2").removeAttr("style");
	if (bpC == 0) {
		$("#cMus1").addClass("c-col-1"); $("#cMus2").addClass("c-col-2");
		$("#cVid1").addClass("c-col-1"); $("#cVid2").addClass("c-col-2");
		$("#cMod1").addClass("c-col-1"); $("#cMod2").addClass("c-col-2");
		$("#cImg1").addClass("c-col-A"); $("#cImg2").addClass("c-col-B"); $("#cImg3").addClass("c-col-C");
		$("#cSnd1").addClass("c-col-A"); $("#cSnd2").addClass("c-col-B"); $("#cSnd3").addClass("c-col-C");
	} else {
		$(".c-intro").attr("style", "text-align:left"); $(".c-license").attr("style", "text-align:left");
		$(".c-header-1").attr("style", "text-align:left"); $(".c-header-2").attr("style", "text-align:left");
	}
}

var goForm = false;

function ContactValidation() {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email = $("#msgAddress").val().length == 0 || regex.test($("#msgAddress").val());
	var messg = $("#msgText").val().length >= 20;
	if (!email) $("#errorA").removeAttr("style"); else $("#errorA").attr("style", "display:none");
	if (!messg) $("#errorB").removeAttr("style"); else $("#errorB").attr("style", "display:none");
	goForm = email && messg;
	return goForm;
}
function Submitted() {
	//$("#contactForm *").fadeOut(500);
	//$(".contact-desc").fadeOut(500, function() { $(".contact-success").fadeIn(500); });
	$("#contactForm").hide(); $(".contact-desc").hide(); $(".contact-success").show();
}
//$(document).on('submit', 'form', function(e) { });