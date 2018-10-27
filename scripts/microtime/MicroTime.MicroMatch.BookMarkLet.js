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
	}, 490);
};
if(((Quizlet || {}).matchModeData || {}).isReplaying) {
	window.onload = onclick;
} else {
	window.onclick = onclick;
};
