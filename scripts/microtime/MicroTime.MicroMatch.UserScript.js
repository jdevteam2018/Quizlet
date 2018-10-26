// ==UserScript==
// @name         MicroTime for MicroMatch
// @namespace    MicroTime
// @version      1.0
// @description  This bot get's 0.5 seconds most of the time, clicking "Play again" prevents the "Start game button", so in those cases it will get ~0.7-0.8 seconds.
// @author       John Jelatis
// @match        https://quizlet.com/*/micro*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	function onclick() {
		setTimeout(function runBot() {
			try {
				var data = (((Quizlet || {}).matchModeData || {}).terms || []);
				data.forEach((term)=>{
					document.querySelectorAll('div').forEach(function(div) {
						if(div.innerHTML == term.word) {
							document.querySelectorAll('div').forEach(function(div2) {
								if(div2.innerHTML == term.definition) {
									var evObj = document.createEvent('Events');
									evObj.initEvent('pointerdown', true, false);
									div2.dispatchEvent(evObj);
									div.dispatchEvent(evObj);
								};
							});
						};
					});
				});
			} catch(err) {
				alert(err);
			};
		}, 500);
	};
	if(Quizlet.matchModeData.isReplaying) {
		window.onload = onclick;
	} else {
		window.onclick = onclick;
	};
})();
