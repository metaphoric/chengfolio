/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
if(typeof Muse=="undefined")window.Muse={};Muse.Assert={};Muse.Assert.fail=function(a){alert("MuseJSAssert: "+a)};$.extend($.browser,{SafariMobile:navigator.userAgent.toLowerCase().match(/iP(hone|ad)/i)});if(!Array.indexOf)Array.prototype.indexOf=function(a){for(var c=0;c<this.length;++c)if(this[c]==a)return c;return-1};Muse.Plugins={};Muse.Utils={};Muse.Utils.addLoadListener=function(a){$(document).ready(a)};
Muse.Utils.runLoadListeners=function(){if(Muse.Utils.loadListeners)for(var a=0;a<Muse.Utils.loadListeners.length;a++)try{Muse.Utils.loadListeners[a]()}catch(c){Muse.Assert.fail("LoadListener failed: "+c)}};Muse.Utils.selectorFns=[];Muse.Utils.addSelectorFn=function(a,c){Muse.Utils.selectorFns.push({selector:a,selFn:c})};
Muse.Utils.addLoadListener(function(){$(Muse.Utils.selectorFns).each(function(){var a=this.selFn,c;try{$(this.selector).each(function(){a(this)})}catch(b){Muse.Assert.fail("Error calling selector function:"+b)}})});Muse.Utils.isTouchDevice=function(){if(typeof Muse.Utils.isTouchDevice.flag=="undefined")try{document.createEvent("TouchEvent"),Muse.Utils.isTouchDevice.flag=!0}catch(a){Muse.Utils.isTouchDevice.flag=!1}return Muse.Utils.isTouchDevice.flag};
Muse.Utils.wrapElement=function(a,c){a.parentNode.replaceChild(c,a);c.appendChild(a)};Muse.Utils.firstChild=function(a,c){for(var b=0;b<a.childNodes.length;b++){var f=a.childNodes[b];if(f.nodeType==1&&(!c||c.matches(f)))return f}return null};Muse.Utils.firstDescendant=function(a,c,b){for(var f=0;f<a.childNodes.length;f++){var d=a.childNodes[f];if(d.nodeType==1){if(!c||c.matches(d))return d;if(!b||!b.matches(d))if(d=Muse.Utils.firstDescendant(d,c,b))return d}}return null};
Muse.Utils.descendants=function(a,c,b,f){if(!f)f=[],f.forEach=function(a){for(var b=0;b<this.length;b++)if(a(this[b]))break},f.forEachTry=function(a){for(var b=0;b<this.length;b++)try{if(a(this[b]))break}catch(f){}};for(var d=0;d<a.childNodes.length;d++){var g=a.childNodes[d];g.nodeType==1&&((!c||c.matches(g))&&f.push(g),(!b||!b.matches(g))&&Muse.Utils.descendants(g,c,b,f))}return f};Muse.Utils.children=function(a,c){return Muse.Utils.descendants(a,c,Muse.Utils.Match.always)};Muse.Utils.Match={};
Muse.Utils.Match.ByClass=function(a){this.cl=a};Muse.Utils.Match.ByClass.prototype.matches=function(a){return $(a).hasClass(this.cl)};Muse.Utils.Match.ByNodeName=function(a){this.nm=a.toLowerCase()};Muse.Utils.Match.ByNodeName.prototype.matches=function(a){return this.nm==a.nodeName.toLowerCase()};Muse.Utils.Match.ByFixed=function(a){this.matchResult=a};Muse.Utils.Match.ByFixed.prototype.matches=function(){return this.matchResult};Muse.Utils.Match.byClass=function(a){return new Muse.Utils.Match.ByClass(a)};
Muse.Utils.Match.byNodeName=function(a){return new Muse.Utils.Match.ByNodeName(a)};Muse.Utils.Match.byFixed=function(a){return new Muse.Utils.Match.ByFixed(a)};Muse.Utils.Match.always=Muse.Utils.Match.byFixed(!0);Muse.Utils.Match.never=Muse.Utils.Match.byFixed(!1);Muse.Utils.moveChildren=function(a,c){for(;a.childNodes.length>0;)c.appendChild(a.childNodes[0])};Muse.Utils.copyChildren=function(a,c){for(var b=0;b<a.childNodes.length;b++)c.appendChild(a.childNodes[b].cloneNode(!0))};
Muse.Utils.copyChildrenBefore=function(a,c){for(var b=0;b<a.childNodes.length;b++)c.parentNode.insertBefore(a.childNodes[b].cloneNode(!0),c)};Muse.Utils.pixelRound=function(a){return Math.floor((a*100+0.5)/100)};Muse.Utils.getCurrentHTMLFileName=function(a){var c=document.location.href;c.charAt(c.length-1)=="/"?c="index":(c=c.substring(c.lastIndexOf("/")+1),c=c.indexOf("#")==0?"index":c.substring(0,c.lastIndexOf(".")));a&&(c+=".html");return c};
Muse.Utils.getPageStyleSheet=function(){for(var a="/"+Muse.Utils.getCurrentHTMLFileName(!1).toLowerCase()+".css",c=0;c<document.styleSheets.length;++c){var b=document.styleSheets[c];if(b.href&&b.href.toLowerCase().indexOf(a)!=-1)return b}};
Muse.Utils.getStyleSheetRuleById=function(a,c){var b=!1,f="#"+c.toLowerCase(),d=a.cssRules;if(!d)b=!0,d=a.rules;if(d)for(var g=0;g<d.length;++g){var h=d[g];if(b){if(h.selectorText.toLowerCase()==f)return h}else if(h.selectorText.toLowerCase().split(", ").indexOf(f)!=-1)return h}return null};Muse.Utils.setRuleProperty=function(a,c,b){a.style.setProperty?a.style.setProperty(c,b,""):a.style.setAttribute(c,b,0)};
Muse.Utils.removeRuleProperty=function(a,c){a.style.removeProperty?a.style.removeProperty(c):a.style.removeAttribute(c,0)};
Muse.Utils.cloneStyleSheetRule=function(a){if(typeof Muse.Utils.cloneStyleSheetRule.newNumber=="undefined")Muse.Utils.cloneStyleSheetRule.newNumber=1;var c=Muse.Utils.getPageStyleSheet(a),b=Muse.Utils.getStyleSheetRuleById(c,a),f="c"+Muse.Utils.cloneStyleSheetRule.newNumber++,d="#"+f;c.insertRule?c.insertRule(b.cssText.replace("#"+a,d),c.cssRules.length):c.addRule(d,b.style.cssText);return f};
Muse.Utils.toCamelCase=function(a){for(var c=Muse.Utils.toCamelCase.exp;c.test(a);a=a.replace(c,RegExp.$1.toUpperCase()));return a};Muse.Utils.toCamelCase.exp=/-([a-z])/;Muse.Utils.getStyleValue=function(a,c){var b=a.style[Muse.Utils.toCamelCase(c)];b||(document.defaultView?b=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(b=a.currentStyle[Muse.Utils.toCamelCase(c)]));b&&b.match(/(\d+)px/)&&(b=parseInt(b.substring(0,b.length-2)));return b};
Muse.Utils.checkCSSFeature=function(a,c){var b=c||Muse.Utils.toCamelCase(a),f=document.createElement("div");if(b in f.style)return!0;for(var b=b.charAt(0).toUpperCase()+b.substr(1,b.length-1),d=0,g=Muse.Utils.checkCSSFeature.domPrefixes.length;d<g;d++)if(Muse.Utils.checkCSSFeature.domPrefixes[d]+b in f.style)return Muse.Utils.checkCSSFeature.domPrefixes[d];return!1};Muse.Utils.checkCSSFeature.domPrefixes="Webkit Moz O ms Khtml".split(" ");
Muse.Utils.checkCSSValueCompatibility=function(a,c){var b=document.createElement("div");if(!(a in b.style))return!1;var f=b.style[a];if(f===c)return!0;for(var d=0;d<Muse.Utils.checkCSSFeature.domPrefixes.length;d++){var g="-"+Muse.Utils.checkCSSFeature.domPrefixes[d].toLowerCase()+"-"+c;b.style[a]=g;if(b.style[a]!==f)return"-"+Muse.Utils.checkCSSFeature.domPrefixes[d].toLowerCase()+"-"}b.style[a]=c;return b.style[a]!==f};var actionStack=[];Muse.Utils.redirectCancelled=!1;
Muse.Utils.redirectHyperlink=function(a){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else{actionStack=[];var c=a.href,b=$(a).attr("target");if(!b){var b=c.lastIndexOf("/"),f=c.lastIndexOf("#");if(f>b){var d=Muse.Utils.getCurrentHTMLFileName(!0);if(c.substring(b+1,f)==d){var g=c.substring(f);if(a=$(a).attr("class").match(/anim_(\w+)/)){a=a[1];c=(document.documentElement||document.body).scrollHeight-$(window).height();b=(document.documentElement||document.body).scrollWidth-
$(window).width();f=Math.min(c,$(g).offset().top);d=Math.min(b,$(g).offset().left);if(!jQuery.browser.msie||jQuery.browser.version>7){var h=[],i=[],j=[],k=$("html,body"),n={},l=0,m=[],o=!1;h.scrollLeft=0;h.scrollTop=0;i.scrollTop=k.scrollTop();i.scrollLeft=k.scrollLeft();j.scrollTop=[];j.scrollLeft=[];m.scrollTop=!0;m.scrollLeft=!0;if(b>0&&d!==i.scrollLeft)n.scrollLeft=d,l++;if(c>0&&f!==i.scrollTop)n.scrollTop=f,l++;if(!l){window.location.hash=g;return}try{history.pushState({},null,g)}catch(p){}k.animate(n,
{duration:1E3,easing:a,step:function(a,b){if(o)b.options.duration=0;else if(m[b.prop]){var f=!1;j[b.prop].push(Math.floor(a));for(var d=j[b.prop].length,c=j[b.prop].length-8;!f&&d>=0&&d>c;d--)f=Math.abs(j[b.prop][d]-b.elem[b.prop])<=1;Math.abs(a-i[b.prop])<2?h[b.prop]=0:f?0>10*l*2&&h[b.prop]<=1?m[b.prop]=!1:h[b.prop]--:h[b.prop]++;if(h[b.prop]>10)b.options.duration=0,o=!0}},complete:function(){if(o){try{history.replaceState({},null,"#")}catch(a){}setTimeout(function(){window.location.hash=g},16)}else try{history.replaceState({})}catch(b){window.location.hash=
g}}})}else $("html,body").animate({scrollTop:f,scrollLeft:d},1E3,a);return}window.location.hash=g;return}}b="_self"}window.open(c,b)}};Muse.Utils.redirectHyperlinkInNewTab=function(a,c){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else{actionStack=[];thisWindow=window.self;var b=window.open(a);c?b.focus():thisWindow.focus()}};Muse.Utils.isMouseLeftClick=function(a){return a.which==1};Muse.Utils.isMouseMiddleClick=function(a){return a.which==2};
Muse.Utils.isRedirectLinkKeyboardAction=function(a){return a.which==13};
Muse.Utils.addHyperlinkAnchor=function(a){a=$(a);a.bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this)});a.bind("mouseup keyup",function(a){if(Muse.Utils.isMouseLeftClick(a)&&actionStack.indexOf(this)!=-1)a.ctrlKey||a.metaKey?Muse.Utils.redirectHyperlinkInNewTab(this.href,a.shiftKey):Muse.Utils.redirectHyperlink(this);else if(Muse.Utils.isMouseMiddleClick(a)&&actionStack.indexOf(this)!=-1)if(jQuery.browser.webkit||!a.target.href&&
jQuery.browser.msie)Muse.Utils.redirectHyperlinkInNewTab(this.href,a.shiftKey);else return actionStack=[],!0;else Muse.Utils.isRedirectLinkKeyboardAction(a)&&Muse.Utils.redirectHyperlink(this);return!1});a.bind("click",function(){return!1})};
Muse.Utils.addHyperlinkBlock=function(a){$(a.parentNode).bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this);return!1});$(a.parentNode).bind("mouseup keyup",function(c){Muse.Utils.isMouseLeftClick(c)&&actionStack.indexOf(this)!=-1?c.ctrlKey||c.metaKey?Muse.Utils.redirectHyperlinkInNewTab(a.href,c.shiftKey):Muse.Utils.redirectHyperlink(a):Muse.Utils.isMouseMiddleClick(c)&&actionStack.indexOf(this)!=-1?Muse.Utils.redirectHyperlinkInNewTab(a.href,
c.shiftKey):Muse.Utils.isRedirectLinkKeyboardAction(c)&&Muse.Utils.redirectHyperlink(a);return!1});$(a.parentNode).bind("click",function(){return!1})};
Muse.Utils.getNaturalWidth=function(a){var c=-1;a.naturalWidth!=null?c=a.naturalWidth:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",c=a.offsetWidth,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
c=a.width);return c};
Muse.Utils.getNaturalHeight=function(a){var c=-1;a.naturalHeight!=null?c=a.naturalHeight:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",c=a.offsetHeight,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
c=a.height);return c};Muse.Utils.needPIE=function(){if(!Muse.Utils.havePIE)$.ajax({url:"scripts/1.1/pie.js",dataType:"script",async:!1}),Muse.Utils.havePIE=!0};Muse.Utils.transformMarkupToFixBrowserProblemsPreInit=function(){jQuery.browser.msie?(jQuery("html").addClass("ie"),jQuery.browser.version<8&&Muse.Utils.changeLItoDIVs()):jQuery.browser.SafariMobile&&jQuery("body").css("-webkit-text-size-adjust","none")};
Muse.Utils.transformMarkupToFixBrowserProblems=function(){Muse.Utils.havePIE=!1;jQuery.browser.msie&&(jQuery.browser.version<=9&&(Muse.Utils.addGradientFill(),Muse.Utils.addShadows()),jQuery.browser.version<9&&(Muse.Utils.applyIEFilterToPNGImages(),Muse.Utils.addRoundedCorners(),Muse.Utils.addRGBA(),Muse.Utils.removeEdgeAnimationBorderForIE78()),jQuery.browser.version<8&&Muse.Utils.fixWidthsForClearingInIE7());(jQuery.browser.msie&&jQuery.browser.version<9||jQuery.browser.webkit)&&Muse.Utils.insertEmptyDivAfterPinnedColumnElements()};
Muse.Utils.applyIEFilterToPNGImages=function(){jQuery.browser.msie&&jQuery.browser.version<9&&$("body *").not(".museBgSizePolyfill img").each(function(){var a=$(this);if(a.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&a.attr("src").match(/\b.png/i)){var c=a.css("filter");a.css("filter",c?c+" progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)":"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)")}})};
Muse.Utils.insertEmptyDivAfterPinnedColumnElements=function(){$(".pinned-colelem").each(function(){$("<div class='colelem'/>").insertAfter($(this))})};Muse.Utils.fixPNGImages=function(){$("body *").each(function(){var a=$(this);if(a.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&a.attr("src").match(/\b.png/i))Muse.Utils.needPIE(),a.css("-pie-png-fix","true"),PIE.attach(this)})};
Muse.Utils.addGradientFill=function(){$(".gradient").each(function(){Muse.Utils.needPIE();PIE.attach(this)})};Muse.Utils.addShadows=function(){$(".shadow").each(function(){Muse.Utils.needPIE();PIE.attach(this)})};
Muse.Utils.addRoundedCorners=function(){$(".rounded-corners").each(function(){Muse.Utils.needPIE();var a=$(this);if(jQuery.browser.msie&&jQuery.browser.version<8&&(a.css("border-left-width")==0||a.css("border-left-style")=="none")&&(a.css("border-right-width")==0||a.css("border-right-style")=="none")&&(a.css("border-top-width")==0||a.css("border-top-style")=="none")&&(a.css("border-bottom-width")==0||a.css("border-bottom-style")=="none"))a.css({"border-right-width":"1px","border-right-style":"solid",
"border-right-color":a.css("background-color")}),a.width(a.width()-1);PIE.attach(this)})};Muse.Utils.addRGBA=function(){$(".rgba-background").each(function(){Muse.Utils.needPIE();PIE.attach(this)})};Muse.Utils.fixWidthsForClearingInIE7=function(){$(".colelem").each(function(){var a=$(this).offset().left-$(this).parent().offset().left;if($(this).width()<1||$(this).width()+a<1)$(this).css("width",(a<0?1-a:1)+"px")})};
Muse.Utils.removeEdgeAnimationBorderForIE78=function(){$(".animationContainer").each(function(){$(this).parent().html(function(a,c){return c.replace(/><\/iframe>$/gi,' frameBorder="0"></iframe>')})})};Muse.Utils.changeLItoDIVs=function(){var a=function(){var a=$(this),b=$("<div/>");b.addClass(a.attr("class"));b.attr("id",a.attr("id"));b.append(a.contents());a.replaceWith(b)};$("ul").each(function(){$(this).find("li").each(a)});$("ul").each(a)};
Muse.Utils.showWidgetsWhenReady=function(){jQuery(".disn").removeClass("disn");jQuery(".invi").removeClass("invi");jQuery(".widget_invisible").removeClass("widget_invisible")};
Muse.Utils.detachIframesAndObjectsToPauseMedia=function(a){var c=[];$("iframe, object",a).each(function(){var a=$(this);if(!a.is("object")||!(jQuery.browser.msie&&jQuery.browser.version<9)){var f={};f.$next=a.next();f.$parent=a.parent();jQuery.browser.msie?(f.html=a.wrap("<div id='deleteMeWrapper'/>").parent().html(),a.remove(),f.$parent.children("div #deleteMeWrapper").remove()):f.$node=a.detach();c.push(f)}});c.length&&a.data("detached",c);$("video",a).each(function(){if(jQuery.browser.msie&&jQuery.browser.version==
9&&this.pause&&this.getAttribute("autoplay")&&this.readyState!=4)$(this).one("play",function(){this.pause()});else this.pause&&!this.paused&&this.pause()})};
Muse.Utils.attachIframesAndObjectsToResumeMedia=function(a){var c=a.data("detached");if(c){for(var b=c.length-1;b>=0;b--){var f=c[b];!f.$next||f.$next.length==0?f.$parent.append(f.$node?f.$node:f.html):f.$next.before(f.$node?f.$node:f.html);f.$next=f.$parent=f.$node=f.html=void 0}a.data("detached",null)}$("video",a).each(function(){if(this.play&&this.getAttribute("autoplay")&&this.paused)this.currentTime=0,this.play()})};