// allow bsa targeting to be overriden elsewhere
window.BSAS2S_targeting = (window.BSAS2S_targeting || []).concat([
	['bsas2s', 'true'],
	['bsas2spub', 'scotch'],
	['bsas2saudience', 'dev']
]);

// setup placements
var BSAS2SConfig = {
	network: 8691100,
	refreshInterval: 240,
	placements: {
		"bsa-zone_1537909991-0_123456": 
		{
			"name": "Scotchio_S2S_Leaderboard_ROS_Top_ATF",
			"sizes": [[320,100], [728,90], [970,90], [970,250]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[320, 100]]
					],
					[
						[640, 480],
						[[728, 90], [970, 90], [970,250]]
					]
				]
			}
		},
		"bsa-zone_1537909991-1_123456": 
		{
			"name": "Scotchio_S2S_Sidebar_Top_ATF",
			"sizes": [[300,250], [300,600]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [300,600]]
					]
				]
			}
		},
		"bsa-zone_1537909991-2_123456": 
		{
			"name": "Scotchio_S2S_Sidebar_SecondPos_BTF",
			"sizes": [[300,250], [300,600]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [300,600]]
					]
				]
			}
		},
		"bsa-zone_1537909991-3_123456": 
		{
			"name": "Scotchio_S2S_Sidebar_ThirdPos_BTF",
			"sizes": [[300,250], [300,600]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [300,600]]
					]
				]
			}
		},
		"bsa-zone_1537909991-4_123456": 
		{
			"name": "Scotchio_S2S_Grid_1",
			"sizes": [[300,250], [336,280]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [336,280]]
					]
				]
			}
		},
		"bsa-zone_1537909991-5_123456": 
		{
			"name": "Scotchio_S2S_Grid_2",
			"sizes": [[300,250], [336,280]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [336,280]]
					]
				]
			}
		},
		"bsa-zone_1537909991-6_123456": 
		{
			"name": "Scotchio_S2S_Grid_3",
			"sizes": [[300,250], [336,280]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [336,280]]
					]
				]
			}
		},
		"bsa-zone_1537909991-7_123456": 
		{
			"name": "Scotchio_S2S_Search_Top_ATF",
			"sizes": [[300,250], [336,280]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250]]
					],
					[
						[640, 480],
						[[300, 250], [336,280]]
					]
				]
			}
		},
		"bsa-zone_1537909991-8_123456": 
		{
			"name": "Scotchio_S2S_InContent_FirstPos_BTF",
			"sizes": [[728,90], [300,250], [300,600], [336,280]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250], [300,600]]
					],
					[
						[640, 480],
						[[728,90], [300, 250], [300,600], [336,280]]
					]
				]
			}
		},
		"bsa-zone_1537909991-9_123456": 
		{
			"name": "Scotchio_S2S_InContent_SecondPos_BTF",
			"sizes": [[728,90], [300,250], [300,600], [336,280]],
			"options": {
				"sizemap": [
					[
						[0, 0],
						[[300, 250], [300,600]]
					],
					[
						[640, 480],
						[[728,90], [300, 250], [300,600], [336,280]]
					]
				]
			}
		}
	}
};

// setup gpt
var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];
(
	function() {
		var gads = document.createElement('script');
			gads.async = true;
			gads.type = 'text/javascript';
			gads.src = '//www.googletagservices.com/tag/js/gpt.js';
		document.getElementsByTagName('head')[0].appendChild(gads);
	}
)();

/*!
  * domready (c) Dustin Diaz 2012 - License MIT
 */
!function (name, definition) {
	if (typeof module != 'undefined') module.exports = definition()
	else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	else this[name] = definition()
}('domready', function (ready) {

	var fns = [], fn, f = false
	, doc = document
	, testEl = doc.documentElement
	, hack = testEl.doScroll
	, domContentLoaded = 'DOMContentLoaded'
	, addEventListener = 'addEventListener'
	, onreadystatechange = 'onreadystatechange'
	, readyState = 'readyState'
	, loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/
			, loaded = loadedRgx.test(doc[readyState])

	function flush(f) {
		loaded = 1
		while (f = fns.shift()) f()
	}

	doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
		doc.removeEventListener(domContentLoaded, fn, f)
		flush()
	}, f)


	hack && doc.attachEvent(onreadystatechange, fn = function () {
		if (/^c/.test(doc[readyState])) {
			doc.detachEvent(onreadystatechange, fn)
			flush()
		}
	})

	return (ready = hack ?
			function (fn) {
				self != top ?
					loaded ? fn() : fns.push(fn) :
				function () {
					try {
						testEl.doScroll('left')
					} catch (e) {
						return setTimeout(function() { ready(fn) }, 50)
					}
					fn()
				}()
			} :
			function (fn) {
				loaded ? fn() : fns.push(fn)
			})
});

// expose a public BSAS2S function with a load(id) function.
var BSAS2S = {

	_slots: {},

	// setup BSA S2S targeting and config
	init: function () {
		window.googletag.cmd.push(function() {
			window.googletag.pubads().enableSingleRequest();
			window.googletag.pubads().disableInitialLoad();
			window.googletag.pubads().collapseEmptyDivs();
			
			window.googletag.enableServices();
			
			window.BSAS2S_targeting.forEach(function (targ) {
				window.googletag.pubads().setTargeting(targ[0], targ[1]);
			});
		});
	},

	// load a zone by ID
	_load: function (id) {
		var placement = BSAS2SConfig.placements[id];
		if (!placement) {
			console.warn('Unknown placement ID: ', id);
			return false;
		}
		if (BSAS2S._slots[id]) {
			console.warn('Already loaded: ', id);
			return false;
		}

		var slotName = '/' + BSAS2SConfig.network + '/' + placement.name;

		var slot = window.googletag.defineSlot(slotName, placement.sizes, id);
		if (!slot) {
			console.warn('failed to create slot: ', id, slotName);
			return false;
		}

		slot.defineSizeMapping(
			window.googletag.sizeMapping(id)
				.addSize(placement.options.sizemap[0][0], placement.options.sizemap[0][1])
				.addSize(placement.options.sizemap[1][0], placement.options.sizemap[1][1])
				.build()
		);
		slot.addService(window.googletag.pubads());
		
		BSAS2S._slots[id] = slot;
		
		window.googletag.display(id);
		
		return true;
	},
	// display (loading if necessary) a zone by ID
	_display: function (id) {
		var slot = BSAS2S._slots[id];
		if (!slot) {
			if (BSAS2S._load(id)) {
				// if we're loading, kick the ad off on the next tick, not inline.
				window.googletag.cmd.push(function() {
					BSAS2S._display(id);
				});
			}
			return false;
		}

		window.googletag.display(id);
		window.googletag.pubads().refresh([slot]);

		return true;
	},
	// force re-fresh a zone by ID
	refresh: function (id) {
		window.googletag.cmd.push(function() {		
			var slot = BSAS2S._slots[id];
			if (!slot) {
				console.warn('Unknown slot ID: ', id);
				return;
			}
			
			window.googletag.display(id);
			window.googletag.pubads().refresh([slot]);
		});
	},
	
	// force re-fresh on all zones
	refreshAll: function () {
		window.googletag.cmd.push(function() {
			window.googletag.pubads().refresh();
		});
	},
	
	// render a zone by ID
	render: function (id) {
		window.googletag.cmd.push(function() {
			BSAS2S._display(id);
		});
	},

	// output loaded slots. debug use only.
	_outputDebug: function () {
		window.googletag.cmd.push(function() {
			var output = [];
			window.googletag.pubads().getSlots().forEach(function (slot) {
				var sizes = "";
				slot.getSizes().forEach(function (dim) {
				    sizes += dim.l + "x" + dim.j + ",";
				});
				output.push({
				    'adunitPath' : slot.getName(),
				    'TargetingMap': JSON.stringify(slot.getTargetingMap()),
				    'div' : slot.getSlotElementId(),
				    "size" : sizes
				});
			});
			if (output.length) {
				if (console.table) {
				    console.table(output);
				} else {
					output.forEach(function (line) {
						console.log(line);
				    });
				}
			} else {
				console.warn('No defined slots');
			}
		});
	}
};

BSAS2S.init();

domready(function () {
	document.querySelectorAll('[id^=bsa-zone_]').forEach(function (element) {
		BSAS2S.render(element.id);
	});
	if(BSAS2SConfig.refreshInterval) {
		setInterval(function () {
		     BSAS2S.refreshAll(); 
		}, BSAS2SConfig.refreshInterval * 1000);
	}
});