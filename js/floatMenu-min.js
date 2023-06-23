/*! ========= INFORMATION ============================
	- author:    Wow-Company
	- url:       https://wow-estore.com/item/float-menu-pro/
==================================================== */
"use strict";!function(t){var e={position:["left","center"],offset:[0,0],buttonShape:"round",buttonColor:"custom",buttonOverColor:"custom",iconColor:"white",iconOverColor:"white",labelColor:"match",labelTextColor:"match",labelEffect:"slide-out-fade",labelAnimate:"default",labelConnected:!1,labelsOn:!0,sideSpace:!1,buttonSpace:!1,labelSpace:!1,mobileEnable:!1,mobileScreen:768,subPosition:["circular",100,-90,90],subEffect:["slide",30],subAnimate:[400,"easeOutQuad"],subSpace:!1,subOpen:"mouseover",subTop:42,windowPosition:["center","center"],windowOffset:[0,0],windowCorners:"match",windowColor:"match",windowShadow:!0,showAfterPosition:!1,hideAfterPosition:!1,barAnimate:[250,"easeOutQuad"],hideUnderWidth:!1,shareTarget:"default"},o={default:[400,"easeOutQuad"],fade:[200,"easeOutQuad"],"slide-in-in":{show:[400,"easeOutQuad"],hide:[400,"swing"]}},s={build:i,destroy:a};function i(s){var i=function(s){var i=t.extend({},e,s);return"string"==typeof i.position&&(i.position=i.position.split("-")),"center"===i.position[0]&&(i.position[0]=e.position[0],c('Bar horizontal position cannot be "center". Horizontal position reset to "left".')),i.position[1]||(i.position[1]=e.position[1]),0===i.offset||!1===i.offset?i.offset=[0,0]:"string"==typeof i.offset&&(i.offset=n(i.offset)),!s.buttonShape&&s.shape&&(i.buttonShape=i.shape),"square"!==i.buttonShape&&"round"!==i.buttonShape&&"rounded"!==i.buttonShape&&"rounded-out"!==i.buttonShape&&(i.buttonShape="square"),!s.buttonColor&&s.color&&(i.buttonColor=i.color),"default"===i.buttonColor&&(i.buttonColor="custom"),!s.buttonOverColor&&s.overColor&&(i.buttonOverColor=i.overColor),"default"===i.buttonOverColor&&(i.buttonOverColor="custom"),"match"===i.labelColor&&(i.labelColor=i.buttonOverColor),"match"===i.labelTextColor&&(i.labelTextColor=i.iconOverColor),"slide"===i.labelEffect&&(i.labelEffect="slide-out"),"slide-in-fade"===i.labelEffect&&(i.labelEffect="slide-in"),!s.labelAnimate&&s.labelAnim&&(i.labelAnimate=i.labelAnim),"default"===i.labelAnimate&&(o[i.labelEffect]?i.labelAnimate=o[i.labelEffect]:i.labelAnimate=o[0]),i.labelAnimate=l(i.labelAnimate),i.labelConnected&&("slide-in"===i.labelEffect||"slide-out-out"===i.labelEffect||"slide-in-in"===i.labelEffect?(i.labelConnected=!1,c('"labelConnected: true" incompatible with "labelEffect: '+i.labelEffect+'". "labelConnected" reset to false.')):i.labelSpace&&(i.labelSpace=!1,c('"labelSpace: true" incompatible with "labelConnected: true". "labelSpace" reset to false.'))),"string"==typeof i.subPosition&&(i.subPosition=[i.subPosition]),"circular"===i.subPosition[0]&&(i.subPosition[1]||(i.subPosition[1]=e.subPosition[1]),void 0===i.subPosition[2]&&(i.subPosition[2]=e.subPosition[2]),void 0===i.subPosition[3]&&(i.subPosition[3]=e.subPosition[3]),i.subSpace&&(i.subSpace=!1)),!s.subAnimate&&s.subAnim&&(i.subAnimate=i.subAnim),"default"===i.subAnimate&&(i.subAnimate=e.subAnimate),"string"==typeof i.subEffect&&(i.subEffect=[i.subEffect]),"linear-fade"!==i.subEffect[0]&&"linear-slide"!==i.subEffect[0]||i.subEffect[1]||(i.subEffect[1]=e.subEffect[1]),i.subAnimate=l(i.subAnimate),"string"==typeof i.windowPosition&&(i.windowPosition=i.windowPosition.split("-")),i.windowPosition[1]||(i.windowPosition[1]=e.windowPosition[1]),0===i.windowOffset||!1===i.windowOffset?i.windowOffset=[0,0]:"string"==typeof i.windowOffset&&(i.windowOffset=n(i.windowOffset)),"match"===i.windowCorners&&("round"!==i.buttonShape&&"rounded"!==i.buttonShape&&"rounded-out"!==i.buttonShape||(i.windowCorners="round")),"match"===i.windowColor?i.windowColor=i.buttonColor:"default"===i.windowColor&&(i.windowColor="custom"),"default"===i.barAnimate&&(i.barAnimate=e.barAnimate),i.barAnimate=l(i.barAnimate),i.hideUnder&&(i.hideUnderWidth=i.hideUnder),i}(s);return this.each((function(){var o=t(this);o.data("fm-built")&&a.apply(this),o.data("fm-built",!0);var s=o.children(".fm-bar"),l=s.children(),f=o.children(".fm-window"),d=t(window),u=t(document),h=!0,m=!1,p=null,b=null,w=[];function v(){f.removeClass("fm-show"),b.removeClass("fm-show"),b=null}function C(){g(s,i.position,i.offset),b&&y(b),i.hideUnderWidth&&(d.width()<i.hideUnderWidth?o.addClass("fm-vhide"):o.removeClass("fm-vhide"))}function y(t){var o,s;t.data("position")?(o=t.data("position").split("-"))[1]||(o[1]=e.windowPosition[1]):o=i.windowPosition,s=t.data("offset")?n(t.data("offset")):i.windowOffset,g(t,o,s)}function g(e,o,s){if(o){var i,a,n=d.width(),l=d.height(),c=e.outerWidth(!0),f=e.outerHeight(!0);"number"==typeof o[0]?i={left:o[0]+s[0]}:"string"==typeof o[0]&&(i=-1!==o[0].indexOf("%")?{left:r(o[0].split("%")[0])/100*n+s[0]}:"left"===o[0]?{left:0+s[0]}:"center"===o[0]?{left:(n-c)/2+s[0]}:"right"===o[0]?{right:0+s[0]}:{left:r(o[0])+s[0]}),"number"==typeof o[1]?a={top:o[1]+s[1]}:"string"==typeof o[1]&&(a=-1!==o[1].indexOf("%")?{top:r(o[1].split("%")[0])/100*l+s[1]}:"top"===o[1]?{top:0+s[1]}:"center"===o[1]?{top:(l-f)/2+s[1]}:"bottom"===o[1]?{bottom:0+s[1]}:{top:r(o[1])+s[1]}),i.left&&(i.left=Math.round(i.left)),i.right&&(i.right=Math.round(i.right)),a.top&&(a.top=Math.round(a.top)),a.bottom&&(a.bottom=Math.round(a.bottom)),e.css(t.extend({},i,a))}}function A(e){t("body").append('<script src="https://assets.pinterest.com/js/pinmarklet.js" type="text/javascript"><\/script>'),e.preventDefault()}function S(t){var e,o,s=t.data.url,i=t.data.params;e="center"===i.left?(d.width()-i.width)/2:i.left,o="menubar=no,toolbar=no,location=no,scrollbars=no,status=no,resizable=yes,width="+i.width+",height="+i.height+",top="+i.top+",left="+e,window.open(s,"sbShareWindow",o),t.preventDefault()}function P(){s.removeClass("fm-hide"),s.velocity("stop").velocity({opacity:1},i.barAnimate.show[0],i.barAnimate.show[1]),h=!0}function E(){s.velocity("stop").velocity({opacity:0},i.barAnimate.show[0],i.barAnimate.show[1],(function(){s.addClass("fm-hide")})),h=!1}"right"===i.position[0]&&(m=!0,s.addClass("fm-right")),"square"!==i.buttonShape&&s.addClass("fm-"+i.buttonShape),i.labelConnected&&s.addClass("fm-connected"),"custom"!==i.buttonColor&&s.addClass("fm-"+i.buttonColor+"-button"),"custom"!==i.buttonOverColor&&s.addClass("fm-"+i.buttonOverColor+"-button-over"),"custom"!==i.iconColor&&s.addClass("fm-"+i.iconColor+"-icon"),"custom"!==i.iconOverColor&&s.addClass("fm-"+i.iconOverColor+"-icon-over"),"custom"!==i.labelColor&&s.addClass("fm-"+i.labelColor+"-label"),"custom"!==i.labelTextColor&&s.addClass("fm-"+i.labelTextColor+"-label-text"),i.sideSpace&&s.addClass("fm-side-space"),i.buttonSpace&&s.addClass("fm-button-space"),i.labelSpace&&s.addClass("fm-label-space"),"round"===i.windowCorners&&f.addClass("fm-round"),"custom"!==i.windowColor&&f.addClass("fm-"+i.windowColor),i.windowShadow&&f.addClass("fm-winshadow"),function e(o){o.children().each((function(o){t(this).hasClass("fm-sub")?function(o,a){var n,c,f,d,h,v,C=(o=t(o)).children(".fm-icon"),y=o.children("ul"),g=y.children(),A=null,S=null,P='<div class="fm-subhit"></div>',E=i.subPosition[0],O=i.subEffect[0],k=m?"right":"left",T=g.length,x=r(C.css("width")),M=r(C.css("height")),q=[],I=null,j={},Q={},U=0,L=0,W=!1,z=i.subAnimate.show[0],D=i.subAnimate.show[1],_=i.subAnimate.hide[0],H=i.subAnimate.hide[1];if(e(y),"side"===E&&o.addClass("fm-side"),i.subSpace&&o.addClass("fm-sub-space"),"linear-slide"!==O&&"circular"!==E||o.addClass("fm-posabs"),("under"===E&&"linear-slide"===O||"circular"===E&&"slide"===O||"circular"===E&&"linear-slide"===O)&&g.each((function(e){t(this).css("z-index",100-e)})),l[a+1]&&(S=l.eq(a+1)),"circular"===E){o.addClass("fm-circular");var F,B,G,R,J=i.subPosition[1],K=i.subPosition[2],N=i.subPosition[3],V=K*Math.PI/180,X=(N*Math.PI/180-V)/(T-1);g.each((function(e){F=e*X+V,B=Math.round(J*Math.cos(F)),G=Math.round(J*Math.sin(F)),(R={top:G})[k]=B,t(this).css(R),q[e]=[B,G]})),(A=t(P).appendTo(o)).css({width:J+x,height:2*J+x,"border-radius":m?J+"px 0 0 "+J+"px":"0 "+J+"px "+J+"px 0",top:-J}),h=r(l.eq(0).css("margin-bottom")),0!==a&&(L=J+h,v=r(s.css("margin-top")),o.css("margin-top",h)),S&&(U=J+h)}else{if("linear-slide"===O){var Y=0;g.each((function(e){var o=t(this);o.css("top",Y),q[e]=Y,Y+=r(o.css("height"))+r(o.css("margin-bottom"))})),y.css({width:x,height:Y})}A=t(P).appendTo(o),"side"===E?A.css({width:x+r(y.css("margin-"+k)),height:M}):A.css({width:x,height:M+r(y.css("margin-top"))}),"under"===E&&S&&(U=y.outerHeight(!0)+r(S.css("margin-top"))+r(y.css("margin-top")))}switch(y.addClass("fm-hide"),O){case"fade":j={opacity:0},Q={opacity:1},y.css(j),c=function(){y.velocity("stop").removeClass("fm-hide").velocity(Q,z,D)},f=function(){y.velocity("stop").velocity(j,_,H,(function(){y.addClass("fm-hide")}))};break;case"slide":"circular"===E?((j={top:0,opacity:0})[k]=0,g.css(j),c=function(){y.removeClass("fm-hide"),g.each((function(e){(Q={top:q[e][1],opacity:1})[k]=q[e][0],t(this).velocity("stop").velocity(Q,z,D)}))},f=function(){g.each((function(e){t(this).velocity("stop").velocity(j,_,H,(function(){e===T-1&&y.addClass("fm-hide")}))}))}):("side"===E?(j[k]=0,Q[k]=x):(j={top:0},Q={top:C[0].clientHeight}),j.opacity=0,Q.opacity=1,y.css(j),c=function(){y.velocity("stop").removeClass("fm-hide").velocity(Q,z,D)},f=function(){y.velocity("stop").velocity(j,_,H,(function(){y.addClass("fm-hide")}))});break;case"linear-fade":j={opacity:0},Q={opacity:1},g.css(j),c=function(){I="show",y.removeClass("fm-hide"),et(),d=0,n=setInterval((function(){g.eq(d).velocity("stop").velocity(Q,z,D),d===T-1?et():d++}),i.subEffect[1])},f=function(){I="hide",et(),d=T-1,n=setInterval((function(){var t=d;g.eq(d).velocity("stop").velocity(j,z,D,(function(){"hide"===I&&0===t&&y.addClass("fm-hide")})),0===d?et():d--}),i.subEffect[1])};break;case"linear-slide":var Z,$,tt;"side"===E?j[k]=-x:"circular"===E?(j={top:0})[k]=0:j={top:-M},j.opacity=0,g.css(j),c=function(){I="show",y.removeClass("fm-hide"),et(),d=0,n=setInterval((function(){"side"===E?Q[k]=0:"circular"===E?(Q={top:q[d][1]})[k]=q[d][0]:Q={top:q[d]},Q.opacity=1,g.eq(d).velocity("stop").velocity(Q,z,D),d===T-1?et():d++}),i.subEffect[1])},f=function(){I="hide","side"===E||"circular"===E?(Z=0,$=T-1,tt=1):(Z=T-1,$=0,tt=-1),et(),d=Z,n=setInterval((function(){var t=d;g.eq(d).velocity("stop").velocity(j,z,D,(function(){"hide"===I&&t===$&&y.addClass("fm-hide")})),d===$?et():d+=tt}),i.subEffect[1])};break;default:c=function(){y.removeClass("fm-hide")},f=function(){y.addClass("fm-hide")}}function et(){clearInterval(n)}function ot(){c(),A&&A.addClass("fm-show"),L&&(s.velocity("stop").velocity({"margin-top":v-L+h},z,D),o.velocity("stop").velocity({"margin-top":L},z,D)),U&&S.velocity("stop").velocity({"margin-top":U},z,D),W=!0,p=o}function st(){f(),A&&A.removeClass("fm-show"),L&&(s.velocity("stop").velocity({"margin-top":v},z,D),o.velocity("stop").velocity({"margin-top":h},z,D)),U&&S.velocity("stop").velocity({"margin-top":w[a+1]},z,D),W=!1,p=null}o.show=ot,o.hide=st,"click"===i.subOpen?(C.on("click",(function(t){W?st():(p&&p.hide(),ot()),t.stopPropagation()})),u.on("click",(function(e){!W||b||t(e.target).closest(o).length||st()}))):(o.on("mouseenter touchstart",ot),o.on("mouseleave",st)),window.addEventListener("scroll",(function(){W&&st()}))}(this,o):function(e){var o,s,a,n,l,d=t(e).children("a, .fm-link"),u=d.children(".fm-icon"),h=d.children(".fm-label"),p=null,w=0,v=t(window).width(),C='<div class="fm-mask"></div>',g=m?"right":"left",P=!1,E={},O={},k={},T=i.labelAnimate.show[0],x=i.labelAnimate.show[1],M=i.labelAnimate.hide[0],q=i.labelAnimate.hide[1];if(i.labelsOn&&h.length){switch(s=r(u.css("width")),a=h.outerWidth(!0),"left"===i.position[0]?h.css({left:s+"px"}):h.css({right:s+"px"}),"round"!==i.buttonShape&&"rounded"!==i.buttonShape||(P=!0),i.labelConnected&&"left"===i.position[0]?h.css({left:0,"padding-left":s+12+"px"}):i.labelConnected&&"right"===i.position[0]&&h.css({right:0,"padding-right":s+12+"px"}),i.labelConnected||!i.labelSpace&&"round"!==i.buttonShape&&"rounded"!==i.buttonShape&&"rounded-out"!==i.buttonShape||(p=t('<div class="fm-hit"></div>').appendTo(d)),i.labelEffect){case"fade":E={opacity:0},O={opacity:1},h.css(E),n=function(){p&&p.addClass("fm-show"),h.velocity("stop").addClass("fm-show").velocity(O,T,x)},l=function(){h.velocity("stop").velocity(E,M,q,(function(){h.removeClass("fm-show"),p&&p.removeClass("fm-show")}))};break;case"slide-out":case"slide-out-fade":(o=d.wrap(C).parent()).css("width",s),P&&o.addClass("fm-off"),E[g]=-a+s,i.labelConnected?O[g]=0:O[g]=s,"slide-out-fade"===i.labelEffect&&(E.opacity=0,O.opacity=1),h.css(E),n=function(){o.css("width",s+a),P&&o.removeClass("fm-off"),p&&p.addClass("fm-show"),h.velocity("stop").addClass("fm-show").velocity(O,T,x,(function(){o.addClass("fm-off")}))},l=function(){o.removeClass("fm-off"),h.velocity("stop").velocity(E,M,q,(function(){h.removeClass("fm-show"),o.css("width",s),P&&o.addClass("fm-off"),p&&p.removeClass("fm-show")}))};break;case"slide-in":(E={opacity:0})[g]=s+40,(O={opacity:1})[g]=s,h.css(E),n=function(){p&&p.addClass("fm-show"),h.velocity("stop").addClass("fm-show").velocity(O,T,x)},l=function(){h.velocity("stop").velocity(E,M,q,(function(){h.removeClass("fm-show"),p&&p.removeClass("fm-show")}))};break;case"slide-out-out":case"slide-in-in":(o=d.wrap(C).parent()).css("width",s),P&&o.addClass("fm-off"),"slide-out-out"===i.labelEffect?(E[g]=-a+s,O[g]=s,k[g]=s+40):(E[g]=s+40,O[g]=s,k[g]=-a+s),E.opacity=0,O.opacity=1,k.opacity=0,n=function(){o.css("width",s+a+40),P&&o.removeClass("fm-off"),p&&p.addClass("fm-show"),h.velocity("stop").css(E).addClass("fm-show").velocity(O,T,x,(function(){o.css("width",s+a),o.addClass("fm-off")}))},l=function(){o.removeClass("fm-off"),o.css("width",s+a+40),h.velocity("stop").velocity(k,M,q,(function(){h.removeClass("fm-show"),o.css("width",s),P&&o.addClass("fm-off"),p&&p.removeClass("fm-show")}))};break;default:n=function(){p&&p.addClass("fm-show"),h.addClass("fm-show")},l=function(){h.removeClass("fm-show"),p&&p.removeClass("fm-show")}}1==i.mobileEnable&&i.mobileScreen>=v?d.on("touchend",(function(t){if(0==w)return t.preventDefault(),n(),w=1,void setTimeout((function(){l(),w=0}),3e3);1==w&&(l(),w=0)})):(d.on("mouseenter",n),d.on("mouseleave",l))}var I,j,Q,U=d.data("share");U?"pinterest"===U?d.on("click",A):(I=i.shareServices[U])?(j=I.url.replace("{URL}",PAGE_URL).replace("{TITLE}",PAGE_TITLE),d.attr("href",j),"app"===I.target?d.attr("target","_self"):"popup"===("default"===i.shareTarget?I.target:i.shareTarget)?d.on("click",{url:j,params:I.popup},S):d.attr("target","_blank")):c('There is no share data for "'+U+'".'):(Q=d.attr("href"))&&Q.indexOf("fm-popup")>-1&&"#"!==Q&&d.on("click",(function(){var e;return e=Q,f.addClass("fm-show"),y(b=t(e).addClass("fm-show")),!1})),"show"===d.attr("data-label")&&n()}(this)}))}(s),l.each((function(t){w[t]=r(l.eq(t).css("margin-top"))})),f.children(".fm-shadow").on("click",v),f.children(".fm-panel").each((function(){t(this).find(".fm-close").on("click",(function(t){v(),t.stopPropagation()}))})),C(),d.on("resize.superSidebar",C),i.showAfterPosition&&(d.scrollTop()<i.showAfterPosition&&(s.css("opacity",0).addClass("fm-hide"),h=!1),d.on("scroll.superSidebar",(function(){d.scrollTop()<i.showAfterPosition?h&&E():h||P()}))),i.hideAfterPosition&&(d.scrollTop()>i.hideAfterPosition&&(s.css("opacity",0).addClass("fm-hide"),h=!1),d.on("scroll.superSidebar",(function(){d.scrollTop()>i.hideAfterPosition?h&&E():h||P()}))),s.addClass("fm-css-anim"),o.addClass("fm-ready")}))}function a(){return t(this).each((function(){var e,o,s=t(this);s.data("fm-built")&&(s.data("fm-built",!1),e=s.children(".fm-bar"),o=s.children(".fm-window"),e.attr("class","fm-bar").removeAttr("style"),o.attr("class","fm-window"),e.children().each((function(){var e,o,s;t(this).hasClass("fm-sub")?function(e){var o=(e=t(e)).children("ul");e.removeClass("fm-side fm-circular fm-sub-space fm-posabs"),o.removeClass("fm-hide"),o.removeAttr("style"),o.children().removeAttr("style"),e.children(".fm-subhit").remove(),e.off("mouseenter mouseleave")}(this):(s=(o=(e=t(this)).find("a")).children(".fm-label"),o.data("share")&&o.removeAttr("href target"),o.children(".fm-hit").remove(),e.children(".fm-mask").length&&o.unwrap(),s.removeAttr("style"),o.off("mouseenter mouseleave click"))})),o.removeClass("fm-show"),o.children(".fm-shadow").off("click"),o.children(".fm-panel").removeClass("fm-show").removeAttr("style").each((function(){var e=t(this);e.find(".fm-close").off("click");var o=e.find("form");o.length&&function(e){var o=e.find("input, textarea");e.find(".fm-submit").off("click"),e.off("submit"),o.removeClass("fm-formerror").off("focus"),o.each((function(){t(this).val("")})),e.find(".fm-status").attr("class","fm-status")}(o)})),t(window).off("resize.superSidebar scroll.superSidebar"),s.removeClass("fm-ready"))}))}function n(t){return(t=t.split("-"))[0]=r(t[0]),t[1]&&(t[1]=r(t[1])),t}function l(t){return"[object Array]"===Object.prototype.toString.call(t)?{show:t,hide:t}:t}function c(t){window.console&&console.log("(!) Float Menu: "+t)}function r(t){return parseInt(t,10)}t.fn.floatingMenu=function(e){"object"!=typeof e&&e?s[e]?s[e].apply(this,Array.prototype.slice.call(arguments,1)):t.error("The method "+e+" does not exist in Float Menu."):i.apply(this,arguments)},t("[data-btn-type]").on("click",(function(e){switch(e.preventDefault(),t(this).data("btn-type")){case"print":window.print();break;case"scroll":let e=t(this).attr("href");t("html, body").animate({scrollTop:t(e).offset().top},777);break;case"toTop":t("body,html").animate({scrollTop:0},777);break;case"toBottom":t("html, body").animate({scrollTop:jQuery(document).height()},777);break;case"back":window.history.back();break;case"forward":window.history.forward()}}))}(jQuery),document.addEventListener("DOMContentLoaded",(function(){for(let t in window)if(t.indexOf("FloatMenu_")>=0){const e=window[t];jQuery(e.selector).floatingMenu(e)}}));