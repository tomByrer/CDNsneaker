Sneak CDN-inserting buttons into [jsPerf](http://jsperf.com/)'s "Preparation code HTML" TextBox.

## Usage

1: Add bookmarklet manually:
`(function(){var e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/CDNsneaker/master/jsPerf/s.js";document.getElementsByTagName("body")[0].appendChild(e)})();`
2: Edit or [add a test at jsPerf](http://jsperf.com/)

3: Run bookmark

4: After a few seconds, the buttons under "Preparation code HTML" should swap out.


## ToDo

* update exsisting refrences

## Licence

MIT
