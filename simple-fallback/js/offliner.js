var offliner = (function() {
	return {
		addCachingIframe: function() {
			$( document.body ).prepend(
				'<iframe src="/simple-fallback/fallback.html" style="position:absolute;top:-999em;visibility:hidden"></iframe>'
			);
		}
	};
})();