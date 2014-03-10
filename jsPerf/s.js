/*! CDNsneaker/jsPerf v0.1.0 | (c)2014 tomByrer released MIT */
// readies http://jsperf.com/ for intro.js
;(function(){
//Nuke old buttons
var doc = content.document;
var div = doc.getElementById("add-buttons");
div.parentNode.removeChild(div);

//load buttons
/* from jsPerf is copyright © Mathias Bynens and dual-licensed under the MIT & GPL, edits by tomByrer */
// targeting old browsers, jQuery 1.5.2
// http://gist.github.com/326491
$.fn.insertAtCaret = function(myValue) {
	return this.each(function() {
		var me = this;
		if (document.selection) { // IE <=8?
			me.focus();
			sel = document.selection.createRange();
			sel.text = myValue;
			me.focus();
		} else if (me.selectionStart || me.selectionStart == 0) { // Real browsers
			var startPos = me.selectionStart,
			    endPos = me.selectionEnd,
			    scrollTop = me.scrollTop;
			me.value = me.value.substring(0, startPos) + myValue + me.value.substring(endPos, me.value.length);
			me.focus();
			me.selectionStart = startPos + myValue.length;
			me.selectionEnd = startPos + myValue.length;
			me.scrollTop = scrollTop;
		} else {
			me.value += myValue;
			me.focus();
		}
	});
};

$.fn.addScript = function(str, myLib) {
	return this.click(function(event) {
		if (!~$prepHTML.val().indexOf(str)) {
			$prepHTML.insertAtCaret('<script src="//cdn.jsdelivr.net/' + str + '.js">\x3C/script>\n');
		}
		$prepHTML.focus();
		event.preventDefault();
	});
};
var $prepHTML = $('#prep-html'),
		$addjQuery1 = $('<button id="add-jquery1">jQuery v1</button>').addScript('jquery/1/jquery.min'),
		$addjQuery2 = $('<button id="add-jquery2">jQuery v2</button>').addScript('jquery/2/jquery.min'),
		$lodash = $('<button id="add-lodash">Lo-Dash</button>').addScript('lodash/latest/lodash.min'),
		$lodashU = $('<button id="add-lodashU">Lo-Dash_Underscore</button>').addScript('lodash/latest/lodash.underscore.min'),
		$underscore = $('<button id="add-underscore">Underscore</button>').addScript('underscorejs/latest/underscore-min');

$('<div id="add-buttons" />').append($addjQuery1).append($addjQuery2).append($lodash).append($lodashU).append($underscore).insertBefore('#add-libraries');
/* end jsPerf lift */

})();