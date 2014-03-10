Sneak CDN-inserting buttons into [jsPerf](http://jsperf.com/)'s "Preparation code HTML" TextBox.

## Usage

Add bookmark:
```js
(function(){var e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/CDNsneaker/master/jsPerf/s.js";document.getElementsByTagName("body")[0].appendChild(e)})();
```
Edit or [add a test at jsPerf](http://jsperf.com/)
Run bookmark
After a few seconds, the buttons under "Preparation code HTML" should swap out.

## ToDo

* update exsisting refrences
* select older versions
* [branch aliasing](https://github.com/jsdelivr/jsdelivr#version-aliasing)

### WillNotDo

* auto-updating version aliasing (eg "latest" in jsDelivr API.  This is a bad practice since over a year updates will throw net results.  Please make a new revision, update versions of external files, & make comment of what you've done.

## Licence

MIT
