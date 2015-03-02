// responsive-nav.js 1.0.34 https://github.com/viljamis/responsive-nav.js http://responsive-nav.com Copyright (c) 2014 @viljamis Available under the MIT license
! function(e, t, n) {"use strict"; var i = function(i, s) {var o = !!t.getComputedStyle; o || (t.getComputedStyle = function(e) {return this.el = e, this.getPropertyValue = function(t) {var n = /(\-([a-z]){1})/g; return "float" === t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {return arguments[2].toUpperCase() })), e.currentStyle[t] ? e.currentStyle[t] : null }, this }); var a, r, c, l, h, u, v = function(e, t, n, i) {if ("addEventListener" in e) try {e.addEventListener(t, n, i) } catch (s) {if ("object" != typeof n || !n.handleEvent) throw s; e.addEventListener(t, function(e) {n.handleEvent.call(n, e) }, i) } else "attachEvent" in e && ("object" == typeof n && n.handleEvent ? e.attachEvent("on" + t, function() {n.handleEvent.call(n) }) : e.attachEvent("on" + t, n)) }, p = function(e, t, n, i) {if ("removeEventListener" in e) try {e.removeEventListener(t, n, i) } catch (s) {if ("object" != typeof n || !n.handleEvent) throw s; e.removeEventListener(t, function(e) {n.handleEvent.call(n, e) }, i) } else "detachEvent" in e && ("object" == typeof n && n.handleEvent ? e.detachEvent("on" + t, function() {n.handleEvent.call(n) }) : e.detachEvent("on" + t, n)) }, d = function(e) {if (e.children.length < 1) throw new Error("The Nav container has no containing elements"); for (var t = [], n = 0; n < e.children.length; n++) 1 === e.children[n].nodeType && t.push(e.children[n]); return t }, f = function(e, t) {for (var n in t) e.setAttribute(n, t[n]) }, m = function(e, t) {0 !== e.className.indexOf(t) && (e.className += " " + t, e.className = e.className.replace(/(^\s*)|(\s*$)/g, "")) }, g = function(e, t) {var n = new RegExp("(\\s|^)" + t + "(\\s|$)"); e.className = e.className.replace(n, " ").replace(/(^\s*)|(\s*$)/g, "") }, y = function(e, t, n) {for (var i = 0; i < e.length; i++) t.call(n, i, e[i]) }, E = e.createElement("style"), b = e.documentElement, _ = function(t, n) {var i; this.options = {animate: !0, transition: 284, label: "Menu", insert: "before", customToggle: "", closeOnNavClick: !1, openPos: "relative", navClass: "nav-collapse", navActiveClass: "js-nav-active", jsClass: "js", init: function() {}, open: function() {}, close: function() {} }; for (i in n) this.options[i] = n[i]; if (m(b, this.options.jsClass), this.wrapperEl = t.replace("#", ""), e.getElementById(this.wrapperEl)) this.wrapper = e.getElementById(this.wrapperEl); else {if (!e.querySelector(this.wrapperEl)) throw new Error("The nav element you are trying to select doesn't exist"); this.wrapper = e.querySelector(this.wrapperEl) } this.wrapper.inner = d(this.wrapper), r = this.options, a = this.wrapper, this._init(this) }; return _.prototype = {destroy: function() {this._removeStyles(), g(a, "nav--closed"), g(a, "nav--opened"), g(a, r.navClass), g(a, r.navClass + "-" + this.index), g(b, r.navActiveClass), a.removeAttribute("style"), a.removeAttribute("aria-hidden"), p(t, "resize", this, !1), p(t, "focus", this, !1), p(e.body, "touchmove", this, !1), p(c, "touchstart", this, !1), p(c, "touchend", this, !1), p(c, "mouseup", this, !1), p(c, "keyup", this, !1), p(c, "click", this, !1), r.customToggle ? c.removeAttribute("aria-hidden") : c.parentNode.removeChild(c) }, toggle: function() {l === !0 && (u ? this.close() : this.open(), this._enablePointerEvents()) }, open: function() {u || (g(a, "nav--closed"), m(a, "nav--opened"), m(b, r.navActiveClass), m(c, "nav--active"), a.style.position = r.openPos, f(a, {"aria-hidden": "false"}), u = !0, r.open()) }, close: function() {u && (m(a, "nav--closed"), g(a, "nav--opened"), g(b, r.navActiveClass), g(c, "nav--active"), f(a, {"aria-hidden": "true"}), r.animate ? (l = !1, setTimeout(function() {a.style.position = "absolute", l = !0 }, r.transition + 10)) : a.style.position = "absolute", u = !1, r.close()) }, resize: function() {"none" !== t.getComputedStyle(c, null).getPropertyValue("display") ? (h = !0, f(c, {"aria-hidden": "false"}), a.className.match(/(^|\s)closed(\s|$)/) && (f(a, {"aria-hidden": "true"}), a.style.position = "absolute"), this._createStyles(), this._calcHeight()) : (h = !1, f(c, {"aria-hidden": "true"}), f(a, {"aria-hidden": "false"}), a.style.position = r.openPos, this._removeStyles()) }, handleEvent: function(e) {var n = e || t.event; switch (n.type) {case "touchstart": this._onTouchStart(n); break; case "touchmove": this._onTouchMove(n); break; case "touchend": case "mouseup": this._onTouchEnd(n); break; case "click": this._preventDefault(n); break; case "keyup": this._onKeyUp(n); break; case "focus": case "resize": this.resize(n) } }, _init: function() {this.index = n++, m(a, r.navClass), m(a, r.navClass + "-" + this.index), m(a, "nav--closed"), l = !0, u = !1, this._closeOnNavClick(), this._createToggle(), this._transitions(), this.resize(); var i = this; setTimeout(function() {i.resize() }, 20), v(t, "resize", this, !1), v(t, "focus", this, !1), v(e.body, "touchmove", this, !1), v(c, "touchstart", this, !1), v(c, "touchend", this, !1), v(c, "mouseup", this, !1), v(c, "keyup", this, !1), v(c, "click", this, !1), r.init() }, _createStyles: function() {E.parentNode || (E.type = "text/css", e.getElementsByTagName("head")[0].appendChild(E)) }, _removeStyles: function() {E.parentNode && E.parentNode.removeChild(E) }, _createToggle: function() {if (r.customToggle) {var t = r.customToggle.replace("#", ""); if (e.getElementById(t)) c = e.getElementById(t); else {if (!e.querySelector(t)) throw new Error("The custom nav toggle you are trying to select doesn't exist"); c = e.querySelector(t) } } else {var n = e.createElement("a"); n.innerHTML = r.label, f(n, {href: "#", "class": "nav-toggle [ title title--secondary ]"}), "after" === r.insert ? a.parentNode.insertBefore(n, a.nextSibling) : a.parentNode.insertBefore(n, a), c = n } }, _closeOnNavClick: function() {if (r.closeOnNavClick) {var e = a.getElementsByTagName("a"), t = this; y(e, function(n) {v(e[n], "click", function() {h && t.toggle() }, !1) }) } }, _preventDefault: function(e) {return e.preventDefault ? (e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation(), !1) : void(e.returnValue = !1) }, _onTouchStart: function(t) {this._preventDefault(t), m(e.body, "disable-pointer-events"), this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY, this.touchHasMoved = !1, p(c, "mouseup", this, !1) }, _onTouchMove: function(e) {(Math.abs(e.touches[0].clientX - this.startX) > 10 || Math.abs(e.touches[0].clientY - this.startY) > 10) && (this._enablePointerEvents(), this.touchHasMoved = !0) }, _onTouchEnd: function(n) {if (this._preventDefault(n), h && !this.touchHasMoved) {if ("touchend" === n.type) return this.toggle(), void("after" === r.insert && setTimeout(function() {g(e.body, "disable-pointer-events") }, r.transition + 300)); var i = n || t.event; 3 !== i.which && 2 !== i.button && this.toggle() } }, _onKeyUp: function(e) {var n = e || t.event; 13 === n.keyCode && this.toggle() }, _enablePointerEvents: function() {g(e.body, "disable-pointer-events") }, _transitions: function() {if (r.animate) {var e = a.style, t = "max-height " + r.transition + "ms"; e.WebkitTransition = t, e.MozTransition = t, e.OTransition = t, e.transition = t } }, _calcHeight: function() {for (var e = 0, t = 0; t < a.inner.length; t++) e += a.inner[t].offsetHeight; var n = "." + r.jsClass + " ." + r.navClass + "-" + this.index + ".nav--opened{max-height:" + e + "px !important} ." + r.jsClass + " .disable-pointer-events{pointer-events:none !important} ." + r.jsClass + " ." + r.navClass + "-" + this.index + ".nav--opened.dropdown-active {max-height:9999px !important}"; E.styleSheet ? E.styleSheet.cssText = n : E.innerHTML = n, n = ""} }, new _(i, s) }; t.responsiveNav = i }(document, window, 0);

var navigation = responsiveNav(".nav--collapse", {
    animate: true,                    // Boolean: Use CSS3 transitions, true or false
    transition: 284,                  // Integer: Speed of the transition, in milliseconds
  //label: "Menu",                    // String: Label for the navigation toggle
    insert: "after",                  // String: Insert the toggle before or after the navigation
    customToggle: "",                 // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative",              // String: Position of the opened nav, relative or static
    navClass: "nav--collapse",        // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
    jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
    init: function(){},               // Function: Init callback
    open: function(){},               // Function: Open callback
    close: function(){}               // Function: Close callback
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    keyboardControl: true,
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});