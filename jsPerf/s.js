/*! CDNsneaker/jsPerf | (c)2014 tomByrer released MIT */
// readies http://jsperf.com/ for intro.js
;(function(){
//Nuke old buttons
var doc = content.document;
var div = doc.getElementById("add-buttons");
div.parentNode.removeChild(div);

//load buttons
/* from jsPerf is copyright © Mathias Bynens and dual-licensed under the MIT & GPL */
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
			$prepHTML.insertAtCaret('<script src="//' + 'ajax.googleapis.com/ajax/libs/' + str + '.js">\x3C/script>\n');
		}
		$prepHTML.focus();
		event.preventDefault();
	});
};
var $prepHTML = $('#prep-html'),
	$addjQuery = $('<button id="add-jquery">jQuery</button>').addScript('jquery/1/jquery.min'),

$('<div id="add-buttons" />').append($addjQuery).insertBefore('#add-libraries');
/* end jsPerf lift */


})();