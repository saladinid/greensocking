
var main_tl = new TimelineMax({repeat: -1});

TweenMax.set('#pocket', {opacity: 0});

 main_tl.from('svg', .2, {autoAlpha: 0})
		.add(animateBanner1())
 	    .add(animateBanner2(), "+=1")
 	    .add(animateBanner3(), "+=0.5")
 	    .add(animateBanner4());

function animateBanner1() {  
	var tl = new TimelineMax();
	tl.from('#Banner-world-map', 1, {opacity: 0}, "first")
  .staggerFrom('#Banner1-manage, #Banner1-projects', 0.5, {attr:{x:-200}, ease:Power3.easeOut}, 0.15, "first")
	  .from('#Banner1-text', .6, {opacity: 0, xPercent: "-100%", transformOrigin: "100% 50%", ease: Power3.easeOut}, "first")
  .add("second", "-=0.5")
	  .staggerFrom("#monochrome-icons > g", .2, {scale: "0", opacity: "0", transformOrigin: "50% 50%"}, 0.07, "second")
	  .staggerFrom("#colored-icons > g", .2, {scale: "0", transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7)}, 0.07, "second")
  .add("show", "-=0.2")
	  .from('#mobile', .5, {yPercent: "150%", opacity: 0, transformOrigin: "50% 0%", ease: Back.easeOut.config(1.7)}, "show")
	  .from('#tablet', .5, {xPercent: "-150%", opacity: 0, transformOrigin: "100% 50%", ease: Back.easeOut.config(1.7)}, "show")
	  .from('#desktop', .5, {xPercent: "150%", opacity: 0, transformOrigin: "0% 50%", ease: Back.easeOut.config(1.7)}, "show")
	  	
	return tl;
}

function animateBanner2() {
	var tl = new TimelineMax();
	//start by removing scene 1 elements
  tl.staggerTo("#monochrome-icons, #colored-icons > g, #mobile, #tablet, #desktop", 0.3, {x:"+=200", autoAlpha:0, ease:Power2.easeIn}, 0.03)
    .staggerTo('#Banner1-manage, #Banner1-projects, #Banner1-text', 0.5, {attr:{x:-200}, autoAlpha:0, ease:Power2.easeIn}, 0.1, "-=0.5")
	  .to('#Banner-bg', .6, {fill: "#D1F2F8"}, "-=0.2")
	  //animate the second scene
  .add("first", "-=0.6")
	  .from('#Banner2-text', .6, {opacity: 0, xPercent: "-100%", transformOrigin: "100% 50%", ease: Power3.easeOut}, "first")
	  .staggerFrom("#money-icons > g", .2, {scale: "0", transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7)}, 0.1, "+=0.1")
	  .from('#Banner2-hand', .4, {xPercent: "100%", transformOrigin: "0% 50%", ease: Back.easeOut.config(1.7)})
	  .from('#Banner2-pig', .4, {y: "200px"})
	  .to('#pocket', 0, {opacity: 1})
  	  .to('#Banner2-coin', .2, {y: 40}, "save")
  	  .staggerTo("#money-icons > g", .2, {scale: "0", transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7)}, 0.1, "save")

	  tl.delay(.5);

  return tl;
}


function animateBanner3(){
	var tl = new TimelineMax();
	//first remove scene 2 from view
	tl.to('#Banner2-content', .5, {xPercent: "100%", ease: Back.easeIn.config(1.7)})
	  .to('#Banner2-text', .5, {yPercent: "200%", ease: Back.easeIn.config(1.7)}, "-=0.2")
	  .to('#Banner-bg', .6, {fill: "#0C4856"}, "-=0.2")
	  //then animate last scene
	  .from('#Banner3-text', .4, {opacity: 0, yPercent: "150%", transformOrigin: "100% 50%", ease: Power3.easeOut}, "first")  
    .staggerFrom('#screen, #phone, #keyboard, #tab, #rotators', 0.4, {opacity:0, y:-100, ease:Back.easeOut}, 0.07)
    .from('#hands', 0.4, {opacity:0, y:100}, "-=0.4")
 	  .from('#hours', 3.5, {rotation: 360, svgOrigin: "496.5px 53.2px", ease: Power0.easeNone}, "first")
	  .from('#minutes', .9, {rotation: 360, svgOrigin: "496.5px 53.2px", ease: Power0.easeNone, repeat: 3}, "first")
	  	
	return tl;
}


function animateBanner4() {
	var tl = new TimelineMax();
	//first remove scene 3 from view
  tl.staggerTo('#screen, #phone, #keyboard, #tab, #rotators, #hands', 0.5, {y:150, autoAlpha:0, ease:Back.easeIn.config(1.7)}, 0.06)
	  .to('#Banner3-text', .5, {yPercent: "-200%", ease: Back.easeIn.config(1.7)}, "-=0.2")
	  .to('#Banner-world-map', .3, {xPercent: "-50%"})
	  //then animate last scene
	  .staggerFrom('#Banner4-text tspan', .6, {scale: 3, autoAlpha: 0, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7)}, .2)
	  
	  .from('#call-to-action', .4, {scale: 3, opacity: 0, transformOrigin: "50% 50%"})
  .to('#call-to-action', 0.9, {transformOrigin: "50% 200%", bezier:[{rotation:-10},{rotation:8},{rotation:-5},{rotation:3},{rotation:0}], ease:Power2.easeInOut}, "+=0.3")
  .to("svg", 0.3, {autoAlpha:0}, "+=4");
	return tl;
}