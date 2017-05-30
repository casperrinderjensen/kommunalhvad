(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chat_forside_atlas_", frames: [[0,2002,2000,2000],[0,0,2000,2000]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Emojione_1F609svg = function() {
	this.spriteSheet = ss["chat_forside_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Emojione_1F914svg = function() {
	this.spriteSheet = ss["chat_forside_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBAIAAgWIAUAAIAAAWgAgFAdIAAgGQAAgKAEgIQADgGAHgJIAJgMQACgFAAgGQAAgHgFgEQgFgEgIAAQgHAAgJAEQgIADgJAHIgGgOIAIgGIALgFQALgEAKAAQAPAAAKAIQAFAEADAFQADAFgBAHQABAGgDAGQgCAFgEAEIgIALQgIAHgEAGQgDAGgBAIIgBAEg");
	this.shape.setTransform(62.5,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOA/QgFgCgEgDQgJgFgFgLIgEgLIgBgNIABgMIAEgLQAFgKAJgFIAJgFQAFgBAGAAIAIABIAIADQAIAFAEAHIAAg0IASAAIAAB9IgSAAIAAgQQgEAIgIAFIgIADIgIAAIgLAAgAgJgJQgFABgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAJAKAAQAMgBAHgHQADgFABgFQACgGAAgIQAAgHgCgFQgBgGgDgDQgHgIgMAAQgEAAgFACg");
	this.shape_1.setTransform(53.1,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_2.setTransform(46,36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGA3QgGgCgEgEQgJgIABgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAXAAIAAAOIgXAAIAAAoQgBAKAFAFQAEAFAKAAIAIgBIgCAOIgJAAQgIAAgGgCg");
	this.shape_3.setTransform(40.7,37.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_4.setTransform(29.8,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAFgLAKgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAFAMQgFAFgKAEQgIACgKAAQgUAAgMgMgAAZgGQgCgMgFgGQgGgHgKAAQgJAAgHAHQgCADgCAEIgDALIAuAAIAAAAg");
	this.shape_5.setTransform(17.4,38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAtIAAhXIARAAIAAAQQAHgQAVgBIAFgBIACAPIgLACQgNABgFAGQgFAHAAAKIAAAwg");
	this.shape_6.setTransform(10,38.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOA/IAAhIIgRAAIAAgOIARAAIAAgCQAAgJADgHQACgGAFgFQAIgJATgBIAIAAIABANIgIABQgGAAgEABIgGAEQgFAFAAAKIAAAFIAYAAIAAAOIgYAAIAABIg");
	this.shape_7.setTransform(3.3,36.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_8.setTransform(325.3,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgHAFgJAEQgJACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgFgHgLAAQgJAAgGAHQgEADgCAEIgCALIAtAAIAAAAg");
	this.shape_9.setTransform(316.4,10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVAtIAAg1QAAgLgEgFQgFgFgJAAQgKAAgHAHQgGAHAAALIAAAxIgSAAIAAhXIARAAIAAAOQAFgIAHgEIAJgDIAIgBQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_10.setTransform(306.5,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmAJIAAg0IASAAIAAA0QAAALAFAFQACACADACIAIABQAFAAAEgCIAHgFQADgDACgFQABgEABgGIAAgwIASAAIAABWIgSAAIAAgOIgFAHQgCADgEACQgHADgIAAQghAAAAgjg");
	this.shape_11.setTransform(296.2,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_12.setTransform(283.5,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_13.setTransform(268.1,10.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWAoQgKgGgEgKQgGgKAAgOQAAgNAGgKQAEgKAKgGIALgEQAGgBAFAAQAHAAAFABIAKAEQALAGAFAKQACAFABAGQACAGAAAGQAAAHgCAGQgBAGgCAFQgFAKgLAGQgEADgGABIgMABQgMAAgKgFgAgJgcQgFACgDAEQgGAIgBAOQAAAPAHAIQADAEAFACQAEACAFAAQAGAAAFgCQAEgCAEgEQADgEABgFQABgGAAgIQABgOgHgIQgDgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_14.setTransform(255.4,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASA/IgogpIAAApIgSAAIAAh9IASAAIAABNIAlgmIAWAAIgoApIAsAtg");
	this.shape_15.setTransform(246.4,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVAtIAAg1QAAgLgEgFQgFgFgJAAQgKAAgHAHQgGAHAAALIAAAxIgSAAIAAhXIARAAIAAAOQAFgIAHgEIAJgDIAIgBQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_16.setTransform(231.2,10.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_17.setTransform(223.9,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgGgFgKIgEgLIgBgNIABgNIAEgJQAFgLAJgGIAJgDQAFgCAGAAIAIABIAIADQAIAFAEAHIAAg1IASAAIAAB9IgSAAIAAgOQgEAHgIAEIgIADIgIACIgLgCgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAIAKAAQAMABAHgJQADgEABgGQACgFAAgHQAAgIgCgGQgBgFgDgDQgHgJgMAAQgEAAgFACg");
	this.shape_18.setTransform(216.2,9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVBBQgHgEgEgGQgEgGAAgIQAAgFACgEQABgDACgDQAFgGALgBQAIgDAWAAIAFAAIAAgFIgBgJQgCgDgCgCQgCgCgDgBIgIgBQgOAAgPAIIgFgMQAGgEALgEQAJgDAJAAQAIAAAHACQAGADAFAEQAEAFACAGQACAGAAAJIAAA2IgRAAIAAgPQgEAIgGAEQgHAEgIAAQgIAAgIgDgAgEAcQgIABgDACQgDADAAAGQAAAHAFADQAEAFAHAAQAJAAAGgHQADgDACgFQACgEAAgFIAAgFIgEAAQgOAAgGACgAgKgkIgDgGQgCgDAAgEQAAgEACgDIADgGIAGgEIAHgBIAHABIAGAEQAFAFABAIQgBAHgFAGQgGAFgHAAQgHAAgGgFgAgCg3QgDACABAEQgBAEADACQACACADABQADgBACgCQADgCAAgEQAAgEgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_19.setTransform(201.6,8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgqA9IAAh3IASAAIAAAOIAFgGIAHgGQAHgEAJAAQALAAAJAGQAFADADAEQAEADACAGQAFAKAAAOQAAANgFAJIgGAJQgDAFgFACQgEADgFABIgLACQgJgBgHgEIgHgEIgFgHIAAAvgAgKgsQgEACgDAFQgHAHAAAQQAAAHACAFQACAFADAEQADAEAEADQAFABAFAAQAMABAGgJQAHgHAAgOQAAgPgHgIQgDgFgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_20.setTransform(191.9,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAGgLAJgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHAMAAQAHAAAHgCQAHgDAGgEIAFAMQgGAFgIAEQgKACgJAAQgUAAgMgMgAAZgGQgCgMgFgGQgGgHgKAAQgJAAgGAHQgEADgBAEIgCALIAtAAIAAAAg");
	this.shape_21.setTransform(177,10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_22.setTransform(167.9,10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_23.setTransform(161.5,9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAFgLAKgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAFAMQgFAFgKAEQgIACgKAAQgUAAgMgMgAAZgGQgCgMgFgGQgGgHgKAAQgJAAgHAHQgCADgCAEIgDALIAuAAIAAAAg");
	this.shape_24.setTransform(154.7,10.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgGgFgKIgEgLIgBgNIABgNIAEgJQAFgLAJgGIAJgDQAFgCAGAAIAIABIAIADQAIAFAEAHIAAg1IASAAIAAB9IgSAAIAAgOQgEAHgIAEIgIADIgIACIgLgCgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAIAKAAQAMABAHgJQADgEABgGQACgFAAgHQAAgIgCgGQgBgFgDgDQgHgJgMAAQgEAAgFACg");
	this.shape_25.setTransform(144.4,9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYA8IAQgjIglhUIATAAIAaBCIAchCIASAAIgzB3g");
	this.shape_26.setTransform(134.7,12.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_27.setTransform(127.9,9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOA/IAAhIIgRAAIAAgOIARAAIAAgCQAAgJADgHQACgGAFgFQAIgJATgBIAIAAIABANIgIABQgGAAgEABIgGAEQgFAFAAAKIAAAFIAYAAIAAAOIgYAAIAABIg");
	this.shape_28.setTransform(122.9,8.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgGgFgKIgEgLIgBgNIABgNIAEgJQAFgLAJgGIAJgDQAFgCAGAAIAIABIAIADQAIAFAEAHIAAg1IASAAIAAB9IgSAAIAAgOQgEAHgIAEIgIADIgIACIgLgCgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAIAKAAQAMABAHgJQADgEABgGQACgFAAgHQAAgIgCgGQgBgFgDgDQgHgJgMAAQgEAAgFACg");
	this.shape_29.setTransform(114.1,9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVAtIAAg1QAAgLgEgFQgFgFgJAAQgKAAgHAHQgGAHAAALIAAAxIgSAAIAAhXIARAAIAAAOQAFgIAHgEIAJgDIAIgBQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_30.setTransform(104,10.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_31.setTransform(96.7,8.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAGgLAJgFQAKgGALAAQAJAAAGADQAHADAGAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHAMAAQAHAAAHgCQAHgDAGgEIAFAMQgGAFgIAEQgJACgKAAQgUAAgMgMgAAZgGQgBgMgGgGQgFgHgLAAQgJAAgHAHQgDADgBAEIgCALIAtAAIAAAAg");
	this.shape_32.setTransform(85.1,10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHArIgmhVIATAAIAbBBIAbhBIASAAIgmBVg");
	this.shape_33.setTransform(75.7,10.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAqQgHgEgEgGQgEgGAAgIQAAgEACgEQABgEACgDQAFgEALgCQAIgCAWgBIAFAAIAAgFIgBgJQgCgDgCgCQgCgDgDgBIgIgBQgOAAgPAJIgFgMQAGgFALgDQAJgDAJAAQAIAAAHACQAGACAFAEQAEAFACAHQACAGAAAJIAAA1IgRAAIAAgOQgEAHgGAEQgHAEgIAAQgIAAgIgDgAgEAFQgIABgDADQgDADAAAFQAAAHAFAEQAEAEAHAAQAJAAAGgHQADgDACgEQACgFAAgFIAAgFIgEAAQgOAAgGACg");
	this.shape_34.setTransform(66.2,10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAVA/IAAg2QAAgJgEgGQgFgFgJAAQgKAAgHAHQgGAGAAALIAAAyIgSAAIAAh9IASAAIAAA0IAFgHIAHgFQAHgEAJAAQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_35.setTransform(56.4,9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmAJIAAg0IASAAIAAA0QABALAEAFQACACADACIAIABQAEAAAFgCIAHgFQAEgDABgFQABgEABgGIAAgwIASAAIAABWIgSAAIAAgOIgFAHQgCADgEACQgIADgHAAQghAAAAgjg");
	this.shape_36.setTransform(41.4,10.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgGgFgKIgEgLIgBgNIABgNIAEgJQAFgLAJgGIAJgDQAFgCAGAAIAIABIAIADQAIAFAEAHIAAg1IASAAIAAB9IgSAAIAAgOQgEAHgIAEIgIADIgIACIgLgCgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAIAKAAQAMABAHgJQADgEABgGQACgFAAgHQAAgIgCgGQgBgFgDgDQgHgJgMAAQgEAAgFACg");
	this.shape_37.setTransform(30.8,9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_38.setTransform(19,9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_39.setTransform(14.7,8.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHA/Ig3h9IATAAIArBmIAthmIASAAIg3B9g");
	this.shape_40.setTransform(6.3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-2,-4.8,333.9,56.4), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Emojione_1F609svg();
	this.instance.parent = this;
	this.instance.setTransform(226.9,9,0.014,0.014,0,0,180);

	this.text = new cjs.Text(" ", "18px 'Nunito Sans SemiBold'");
	this.text.lineHeight = 28;
	this.text.parent = this;
	this.text.setTransform(-1.3,32.4);

	this.text_1 = new cjs.Text(" ", "18px 'Nunito Sans SemiBold'");
	this.text_1.lineHeight = 28;
	this.text_1.parent = this;
	this.text_1.setTransform(-1.3,11.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFA3QgFgCgEgEQgIgIAAgQIAAgpIgSAAIAAgOIASAAIAAgaIARAAIAAAaIAYAAIAAAOIgYAAIAAAoQAAAKAEAFQAEAFAKAAIAIgBIgBAOIgKAAQgIAAgHgCg");
	this.shape.setTransform(186.7,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_1.setTransform(179.2,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA8IAQgjIglhUIATAAIAaBCIAchCIASAAIgzB3g");
	this.shape_2.setTransform(170.3,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_3.setTransform(163.5,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgHAFgJAEQgJACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgFgHgLAAQgJAAgGAHQgEADgCAEIgCALIAtAAIAAAAg");
	this.shape_4.setTransform(156.6,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_5.setTransform(144.2,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_6.setTransform(128.8,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAGgLAJgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHAMAAQAHAAAHgCQAHgDAGgEIAGAMQgGAFgJAEQgKACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgGgHgKAAQgJAAgGAHQgEADgCAEIgBALIAsAAIAAAAg");
	this.shape_7.setTransform(116.4,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFA3QgFgCgEgEQgIgIgBgQIAAgpIgRAAIAAgOIARAAIAAgaIASAAIAAAaIAYAAIAAAOIgYAAIAAAoQAAAKAEAFQAEAFAJAAIAJgBIgBAOIgKAAQgIAAgHgCg");
	this.shape_8.setTransform(108.5,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_9.setTransform(101,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgFgFgLIgEgLIgBgNIABgMIAEgKQAFgLAJgFIAJgFQAFgBAGAAIAIABIAIADQAIAFAEAHIAAg1IASAAIAAB9IgSAAIAAgOQgEAIgIAEIgIACIgIABIgLgBgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAJAKAAQAMgBAHgHQADgEABgGQACgGAAgIQAAgHgCgFQgBgGgDgDQgHgJgMABQgEAAgFABg");
	this.shape_10.setTransform(86.5,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAoQgJgGgFgKQgGgKAAgOQAAgNAGgKQAFgKAJgGIALgEQAGgBAFAAQAGAAAGABIAKAEQALAGAEAKQADAFACAGQABAGAAAGQAAAHgBAGQgCAGgDAFQgEAKgLAGQgEADgGABIgMABQgMAAgKgFgAgJgcQgFACgDAEQgGAIgBAOQAAAPAHAIQADAEAFACQAEACAFAAQAGAAAEgCQAFgCADgEQADgEACgFQACgGAAgIQAAgOgHgIQgDgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_11.setTransform(76.5,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTA6QgLgDgHgFIAFgNQAJAGAIACQAIACAIABQAMgBAGgGQAGgGAAgNIAAgNIgEAGIgHAGIgIADQgFABgEAAQgMABgIgGQgJgGgFgJIgEgKIgBgMQAAgNAFgKIAGgJQADgDAFgDQAIgGAMABQAJgBAIAFQAHAEAEAIIAAgPIASAAIAABQQAAAKgDAIQgCAHgGAFQgKALgVgBQgKAAgKgDgAgJgsQgFACgDADQgHAJAAANQAAAHACAFQABAFAEAEQAHAHAKAAQAMAAAHgHQADgEABgFQACgFAAgHQAAgOgGgHQgEgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_12.setTransform(65.8,26.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGA3QgGgCgEgEQgIgIAAgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAXAAIAAAOIgXAAIAAAoQgBAKAFAFQAEAFAKAAIAIgBIgBAOIgKAAQgIAAgGgCg");
	this.shape_13.setTransform(52.9,23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAqQgHgEgEgGQgEgGAAgIQAAgEACgEQABgEACgDQAFgEALgCQAIgCAXgBIADAAIAAgFIAAgJQgBgDgCgCQgDgDgDgBIgIgBQgOAAgPAJIgGgMQAIgFAKgDQAJgDAIAAQAKAAAGACQAHACAEAEQAEAFACAHQACAGAAAJIAAA1IgRAAIAAgOQgEAHgGAEQgHAEgIAAQgJAAgHgDgAgEAFQgIABgDADQgDADAAAFQAAAHAEAEQAFAEAHAAQAJAAAGgHQAEgDABgEQABgFAAgFIAAgFIgCAAQgPAAgGACg");
	this.shape_14.setTransform(44.9,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_15.setTransform(35.9,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAFA3QgFgCgEgEQgJgIAAgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAZAAIAAAOIgZAAIAAAoQABAKAEAFQAEAFAJAAIAJgBIgBAOIgKAAQgIAAgHgCg");
	this.shape_16.setTransform(28.5,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAtIAAhXIASAAIAAAQQAHgQAUgBIAGgBIABAPIgKACQgNABgEAGQgHAHAAAKIAAAwg");
	this.shape_17.setTransform(22.7,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAoQgLgGgFgKQgFgKAAgOQAAgNAFgKQAFgKALgGIAKgEQAFgBAGAAQAGAAAGABIALAEQAKAGAEAKQAEAFABAGQABAGAAAGQAAAHgBAGQgBAGgEAFQgEAKgKAGQgFADgGABIgMABQgMAAgJgFgAgKgcQgEACgDAEQgHAIABAOQAAAPAFAIQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCADgEQAEgEABgFQABgGAAgIQAAgOgGgIQgDgEgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_18.setTransform(13.8,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnA/IAAh9IBPAAIAAAPIg9AAIAAAoIA5AAIAAANIg5AAIAAA5g");
	this.shape_19.setTransform(4.2,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-3.3,9,230.2,49.8), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA/IAAgVIAVAAIAAAVgAgFAbIgFhZIAVAAIgGBZg");
	this.shape.setTransform(272.2,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1A/IAAh9IAsAAQAeAAARAQQAIAJAEALQAEAMAAAOQAAAPgEALQgEAMgIAIQgRARgeAAgAgjAvIAZAAQAuAAAAgvQAAgvguAAIgZAAg");
	this.shape_1.setTransform(263.6,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAtA/IgNgfIg/AAIgNAfIgTAAIA4h9IAPAAIA4B9gAAaARIgag7IgZA7IAzAAg");
	this.shape_2.setTransform(250.2,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA/Ig3h9IATAAIArBmIAthmIASAAIg3B9g");
	this.shape_3.setTransform(237.4,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAjA/IAAg4IhFAAIAAA4IgTAAIAAh9IATAAIAAA2IBFAAIAAg2IATAAIAAB9g");
	this.shape_4.setTransform(224.3,29);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_5.setTransform(215.4,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAqQgHgEgEgGQgEgGAAgIQAAgEABgEQACgEACgDQAFgEALgCQAIgCAXgBIADAAIAAgFIgBgJQAAgDgCgCQgCgDgEgBIgJgBQgNAAgPAJIgGgMQAIgFAJgDQALgDAHAAQAKAAAGACQAHACADAEQAFAFACAHQACAGAAAJIAAA1IgRAAIAAgOQgEAHgHAEQgGAEgIAAQgIAAgIgDgAgEAFQgIABgDADQgDADAAAFQAAAHAEAEQAFAEAHAAQAJAAAGgHQAEgDABgEQACgFgBgFIAAgFIgCAAQgPAAgGACg");
	this.shape_6.setTransform(208.3,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVAtIAAg1QAAgLgEgFQgFgFgJAAQgKAAgHAHQgGAHAAALIAAAxIgSAAIAAhXIARAAIAAAOQAFgIAHgEIAJgDIAIgBQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_7.setTransform(198.5,30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAJIAAg0IASAAIAAA0QAAALAEAFQACACADACIAJABQADAAAFgCIAHgFQADgDACgFQABgEAAgGIAAgwIASAAIAABWIgRAAIAAgOIgFAHQgCADgFACQgGADgJAAQgfAAAAgjg");
	this.shape_8.setTransform(188.3,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_9.setTransform(175.5,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_10.setTransform(160.1,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAoQgLgGgFgKQgFgKAAgOQAAgNAFgKQAFgKALgGIAKgEQAFgBAGAAQAGAAAGABIALAEQAKAGAEAKQAEAFABAGQABAGAAAGQAAAHgBAGQgBAGgEAFQgEAKgKAGQgFADgGABIgMABQgMAAgJgFgAgKgcQgEACgDAEQgHAIABAOQAAAPAFAIQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCADgEQAEgEABgFQABgGAAgIQAAgOgGgIQgDgEgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_11.setTransform(147.4,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASA/IgogpIAAApIgSAAIAAh9IASAAIAABNIAlgmIAWAAIgoAoIAsAug");
	this.shape_12.setTransform(138.5,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABA/IAGgfIgZAAIgGAfIgOAAIAHgfIgPAAIAAgNIARAAIAIgmIgVAAIAAgNIAXAAIAGgeIANAAIgFAeIAYAAIAGgeIANAAIgFAeIAOAAIAAANIgRAAIgIAmIAVAAIAAANIgXAAIgGAfgAgQATIAZAAIAIgmIgZAAg");
	this.shape_13.setTransform(127.8,29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_14.setTransform(115.6,29);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_15.setTransform(111.3,28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAFA3QgFgCgEgEQgJgIAAgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAZAAIAAAOIgZAAIAAAoQABAKAEAFQAFAFAIAAIAIgBIAAAOIgKAAQgIAAgHgCg");
	this.shape_16.setTransform(106,29.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVAtIAAg1QAAgLgEgFQgFgFgJAAQgKAAgHAHQgGAHAAALIAAAxIgSAAIAAhXIARAAIAAAOQAFgIAHgEIAJgDIAIgBQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_17.setTransform(93,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAFAMQgFAFgKAEQgIACgKAAQgUAAgMgMgAAZgGQgCgMgFgGQgGgHgKAAQgJAAgHAHQgCADgCAEIgDALIAuAAIAAAAg");
	this.shape_18.setTransform(83.1,30.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_19.setTransform(70.7,30.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_20.setTransform(55.3,30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAoQgLgGgFgKQgFgKAAgOQAAgNAFgKQAFgKALgGIAKgEQAFgBAGAAQAGAAAGABIALAEQAKAGAEAKQAEAFABAGQABAGAAAGQAAAHgBAGQgBAGgEAFQgEAKgKAGQgFADgGABIgMABQgMAAgJgFgAgKgcQgEACgDAEQgHAIABAOQAAAPAFAIQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCADgEQAEgEABgFQABgGABgIQgBgOgGgIQgDgEgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_21.setTransform(42.6,30.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASA/IgogpIAAApIgSAAIAAh9IASAAIAABNIAlgmIAWAAIgoAoIAsAug");
	this.shape_22.setTransform(33.6,29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_23.setTransform(26.1,29);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgGAFgJAEQgKACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgGgHgKAAQgJAAgGAHQgDADgDAEIgBALIAsAAIAAAAg");
	this.shape_24.setTransform(19.3,30.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHA/Ig3h9IATAAIArBmIAthmIASAAIg3B9g");
	this.shape_25.setTransform(8.3,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,15.2,276.5,28.4), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000DD").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgHAFgJAEQgJACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgFgHgLAAQgJAAgGAHQgEADgCAEIgCALIAtAAIAAAAg");
	this.shape.setTransform(325.4,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000DD").s().p("AgOA/QgFgCgEgDQgJgGgFgKIgEgLIgBgNIABgNIAEgKQAFgKAJgGIAJgDQAFgCAGAAIAIABIAIADQAIAEAEAIIAAg0IASAAIAAB9IgSAAIAAgQQgEAJgIADIgIAEIgIABIgLgBgAgJgJQgFACgDADQgDAEgCAFQgBAGAAAHQAAAPAGAIQAHAIAKAAQAMABAHgJQADgDABgHQACgFAAgHQAAgIgCgGQgBgFgDgEQgHgHgMgBQgEAAgFADg");
	this.shape_1.setTransform(315.1,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000DD").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_2.setTransform(307.9,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000DD").s().p("AglAJIAAg0IASAAIAAA0QgBALAFAFQACACAEACIAIABQADAAAFgCIAHgFQADgDACgFQABgEAAgGIAAgwIASAAIAABWIgRAAIAAgOIgFAHQgDADgEACQgGADgJAAQgfAAAAgjg");
	this.shape_3.setTransform(300.7,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000DD").s().p("AgTA7QgLgDgHgGIAFgNQAJAFAIADQAIACAIAAQAMABAGgHQAGgGAAgMIAAgOIgEAHIgHAFIgIADQgFABgEABQgMgBgIgFQgJgGgFgJIgEgKIgBgMQAAgNAFgJIAGgJQADgEAFgDQAIgFAMgBQAJABAIAEQAHAEAEAIIAAgPIASAAIAABQQAAAKgDAHQgCAIgGAFQgKALgVAAQgKAAgKgDgAgJgsQgFACgDAEQgHAHAAAOQAAAHACAFQABAFAEADQAHAIAKAAQAMAAAHgIQADgDABgFQACgFAAgHQAAgNgGgIQgEgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_4.setTransform(290,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000DD").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgHAFgIAEQgKACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgGgHgKAAQgJAAgGAHQgDADgDAEIgBALIAsAAIAAAAg");
	this.shape_5.setTransform(280.3,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000DD").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_6.setTransform(267.8,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000DD").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_7.setTransform(252.4,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000DD").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAGgLAJgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHAMAAQAHAAAHgCQAHgDAGgEIAFAMQgGAFgIAEQgKACgJAAQgUAAgMgMgAAZgGQgCgMgFgGQgGgHgKAAQgJAAgGAHQgEADgBAEIgCALIAtAAIAAAAg");
	this.shape_8.setTransform(240,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000DD").s().p("AAFA3QgFgCgEgEQgIgIAAgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAYAAIAAAOIgYAAIAAAoQAAAKAEAFQAEAFAKAAIAIgBIgBAOIgKAAQgIAAgHgCg");
	this.shape_9.setTransform(232.1,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000DD").s().p("AgNA/IgNgCQgMgEgJgIIAHgOIAJAHIAKAEQAHADAOABQAPAAAHgGQAEgDACgEQABgDAAgFQAAgEgBgDQgCgDgDgCQgNgGgKgCQgOgDgKgEQgJgDgGgHIgFgIIgBgKQABgLAFgIQADgFAEgDIAKgGIAMgEIALgBQAOAAALAEIALAFQAFADAEAEIgGANQgKgGgIgEQgKgEgKABQgNgBgIAGQgIAFAAALQAAAEACAEQACACAEACQAGAFAOADQAQAEAKADIAIAFIAIAFQACAEABAEQACAFAAAFQAAAFgCAFQgBAFgCAEQgHAJgLAEQgKAFgPgBg");
	this.shape_10.setTransform(223.4,24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAsIAAgWIAVAAIAAAWgAgKgVIAAgWIAVAAIAAAWg");
	this.shape_11.setTransform(208.9,25.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAtIAAhXIASAAIAAAQQAHgQAUgBIAGgBIABAPIgKACQgNABgFAGQgFAHgBAKIAAAwg");
	this.shape_12.setTransform(204.1,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAFAMQgFAFgKAEQgJACgJAAQgUAAgMgMgAAYgGQAAgMgGgGQgFgHgLAAQgJAAgHAHQgCADgCAEIgDALIAtAAIAAAAg");
	this.shape_13.setTransform(195.5,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVA/IAAg2QAAgKgEgFQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAxIgSAAIAAh9IASAAIAAA0IAFgHIAHgEQAHgFAJAAQAQABAHAIQAIAJAAAQIAAA3g");
	this.shape_14.setTransform(185.6,24);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAGA3QgGgCgEgEQgIgIAAgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAXAAIAAAOIgXAAIAAAoQgBAKAFAFQAEAFAKAAIAIgBIgBAOIgKAAQgIAAgGgCg");
	this.shape_15.setTransform(172.6,24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAGgLAJgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHAMAAQAHAAAHgCQAHgDAGgEIAFAMQgGAFgIAEQgJACgKAAQgUAAgMgMgAAZgGQgBgMgGgGQgFgHgLAAQgJAAgHAHQgDADgBAEIgCALIAtAAIAAAAg");
	this.shape_16.setTransform(164.8,25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTA7QgLgDgHgGIAFgNQAJAFAIADQAIACAIAAQAMABAGgHQAGgGAAgMIAAgOIgEAHIgHAFIgIADQgFABgEABQgMgBgIgFQgJgGgFgJIgEgKIgBgMQAAgNAFgJIAGgJQADgEAFgDQAIgFAMgBQAJABAIAEQAHAEAEAIIAAgPIASAAIAABQQAAAKgDAHQgCAIgGAFQgKALgVAAQgKAAgKgDgAgJgsQgFACgDAEQgHAHAAAOQAAAHACAFQABAFAEADQAHAIAKAAQAMAAAHgIQADgDABgFQACgFAAgHQAAgNgGgIQgEgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_17.setTransform(154.4,27.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_18.setTransform(147.2,24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAqQgHgEgEgGQgEgGAAgIQAAgEACgEQAAgEADgDQAFgEALgCQAIgCAWgBIAFAAIAAgFIgBgJQgBgDgDgCQgBgDgEgBIgIgBQgOAAgPAJIgFgMQAHgFAKgDQAJgDAIAAQAKAAAGACQAHACAEAEQAEAFACAHQACAGAAAJIAAA1IgRAAIAAgOQgEAHgGAEQgHAEgIAAQgJAAgHgDgAgEAFQgHABgEADQgDADAAAFQAAAHAEAEQAFAEAHAAQAJAAAGgHQADgDACgEQABgFABgFIAAgFIgDAAQgPAAgGACg");
	this.shape_19.setTransform(140.2,25.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAsIgmhWIATAAIAaBBIAchBIASAAIgmBWg");
	this.shape_20.setTransform(130.9,26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_21.setTransform(124.1,24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAqQgHgEgEgGQgEgGAAgIQAAgEACgEQABgEACgDQAFgEALgCQAIgCAWgBIAFAAIAAgFIgBgJQgCgDgCgCQgCgDgDgBIgIgBQgOAAgPAJIgFgMQAGgFALgDQAJgDAJAAQAIAAAHACQAGACAFAEQAEAFACAHQACAGAAAJIAAA1IgRAAIAAgOQgEAHgGAEQgHAEgIAAQgIAAgIgDgAgEAFQgIABgDADQgDADAAAFQAAAHAFAEQAEAEAHAAQAJAAAGgHQADgDACgEQACgFAAgFIAAgFIgEAAQgOAAgGACg");
	this.shape_22.setTransform(117,25.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVAtIAAg1QAAgLgEgFQgFgFgJAAQgKAAgHAHQgGAHAAALIAAAxIgSAAIAAhXIARAAIAAAOQAFgIAHgEIAJgDIAIgBQAQAAAHAJQAIAJAAARIAAA2g");
	this.shape_23.setTransform(107.2,25.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgmAJIAAg0IASAAIAAA0QAAALAFAFQACACAEACIAHABQAFAAAEgCIAHgFQADgDACgFQABgEABgGIAAgwIARAAIAABWIgRAAIAAgOIgFAHQgCADgEACQgIADgIAAQgfAAgBgjg");
	this.shape_24.setTransform(97,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_25.setTransform(84.2,25.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_26.setTransform(68.8,25.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAoQgJgGgFgKQgGgKAAgOQAAgNAGgKQAFgKAJgGIALgEQAFgBAGAAQAGAAAGABIAKAEQALAGAEAKQADAFABAGQACAGAAAGQAAAHgCAGQgBAGgDAFQgEAKgLAGQgEADgGABIgMABQgMAAgKgFgAgJgcQgFACgDAEQgGAIgBAOQAAAPAHAIQADAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQADgEABgFQACgGAAgIQAAgOgHgIQgDgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_27.setTransform(56.1,25.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASA/IgogpIAAApIgSAAIAAh9IASAAIAABNIAlgmIAWAAIgoAoIAsAug");
	this.shape_28.setTransform(47.2,24);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_29.setTransform(35,24);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_30.setTransform(30.7,24);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAGA3QgGgCgEgEQgJgIABgQIAAgpIgRAAIAAgOIARAAIAAgaIARAAIAAAaIAXAAIAAAOIgXAAIAAAoQgBAKAFAFQAEAFAKAAIAIgBIgCAOIgJAAQgIAAgGgCg");
	this.shape_31.setTransform(25.4,24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVBBQgHgEgEgGQgEgHAAgHQAAgFACgEQABgDACgDQAFgFALgCQAIgCAWgBIAFAAIAAgFIgBgJQgCgDgCgCQgCgCgDgBIgIgBQgOAAgPAIIgFgMQAGgEALgDQAJgEAJAAQAIAAAHACQAGADAFAEQAEAFACAGQACAGAAAJIAAA2IgRAAIAAgOQgEAHgGAEQgHAEgIAAQgIAAgIgDgAgEAcQgIABgDACQgDADAAAGQAAAGAFAEQAEAFAHAAQAJAAAGgHQADgDACgFQACgEAAgFIAAgFIgEAAQgOAAgGACgAgKgkIgDgGQgCgDAAgEQAAgEACgDIADgGIAGgEIAHgBIAHABIAGAEQAFAGABAHQgBAHgFAGQgGAFgHAAQgHAAgGgFgAgCg3QgDACABAEQgBADADADQACADADgBQADABACgDQADgDAAgDQAAgEgDgCQgCgCgDgBQgDABgCACg");
	this.shape_32.setTransform(12.6,23.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgqA9IAAh3IASAAIAAAPIAFgHIAHgGQAHgEAJAAQALAAAJAGQAFADADADQAEAEACAGQAFAKAAAOQAAAOgFAIIgGAJQgDAEgFADQgEADgFACIgLABQgJAAgHgFIgHgEIgFgIIAAAwgAgKgrQgEACgDADQgHAJAAAPQAAAHACAFQACAGADADQADAFAEABQAFACAFAAQAMABAGgJQAHgHAAgOQAAgPgHgJQgDgDgFgCQgEgDgGAAQgFAAgFADg");
	this.shape_33.setTransform(2.9,27.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgHAFgJAEQgJACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgFgHgLAAQgJAAgGAHQgEADgCAEIgCALIAtAAIAAAAg");
	this.shape_34.setTransform(325.4,-2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_35.setTransform(312.9,-2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_36.setTransform(297.5,-2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAGgLAJgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGACAIQADAIAAAKIAAAFIg9AAQABAOAHAGQAHAHAMAAQAHAAAHgCQAHgDAGgEIAGAMQgGAFgJAEQgKACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgGgHgKAAQgJAAgGAHQgEADgCAEIgBALIAsAAIAAAAg");
	this.shape_37.setTransform(285.1,-2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAFA3QgFgCgEgEQgIgIAAgQIAAgpIgSAAIAAgOIASAAIAAgaIAQAAIAAAaIAZAAIAAAOIgZAAIAAAoQABAKAEAFQAEAFAJAAIAJgBIgBAOIgKAAQgIAAgHgCg");
	this.shape_38.setTransform(277.2,-3.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_39.setTransform(269.7,-2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_40.setTransform(258.6,-3.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAqQgHgEgEgGQgEgGAAgIQAAgEACgEQABgEACgDQAFgEALgCQAIgCAWgBIAFAAIAAgFIgBgJQgCgDgCgCQgCgDgDgBIgIgBQgOAAgPAJIgFgMQAGgFALgDQAJgDAJAAQAIAAAHACQAGACAFAEQAEAFACAHQACAGAAAJIAAA1IgRAAIAAgOQgEAHgGAEQgHAEgIAAQgIAAgIgDgAgEAFQgIABgDADQgDADAAAFQAAAHAFAEQAEAEAHAAQAJAAAGgHQADgDACgEQACgFAAgFIAAgFIgEAAQgOAAgGACg");
	this.shape_41.setTransform(251.6,-2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASA/IgogpIAAApIgSAAIAAh9IASAAIAABNIAlgmIAWAAIgoApIAsAtg");
	this.shape_42.setTransform(243,-3.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTArQgJgDgHgGIAGgNQANALARAAQAJAAAEgDQAFgDAAgGQAAgEgDgDQgDgDgIgBIgNgEQgGgBgFgCIgHgEQgGgGAAgKQAAgGADgEQACgFAFgEQAFgEAGgBQAGgCAHAAQAJAAAJADQAIADAGAFIgFANQgNgKgOAAQgHAAgFADQgFADAAAGQAAAEADADQADADAHABIAOADQAMADAGAFQADADACAEIABAJQAAAGgCAFQgDAEgFAEQgJAGgQAAQgLAAgJgCg");
	this.shape_43.setTransform(233.3,-2.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgmAJIAAg0IASAAIAAA0QAAALAFAFQACACADACIAIABQAFAAAEgCIAHgFQADgDACgFQABgEABgGIAAgwIASAAIAABWIgSAAIAAgOIgFAHQgCADgEACQgHADgIAAQggAAgBgjg");
	this.shape_44.setTransform(219.3,-2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgFgFgLIgEgLIgBgNIABgMIAEgKQAFgLAJgFIAJgFQAFgBAGAAIAIABIAIADQAIAEAEAIIAAg1IASAAIAAB9IgSAAIAAgPQgEAIgIAFIgIACIgIABIgLgBgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAJAKAAQAMgBAHgHQADgFABgFQACgGAAgIQAAgHgCgFQgBgGgDgDQgHgJgMABQgEAAgFABg");
	this.shape_45.setTransform(208.7,-3.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_46.setTransform(191.3,-2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAFAMQgFAFgKAEQgJACgJAAQgUAAgMgMgAAYgGQAAgMgGgGQgFgHgLAAQgJAAgHAHQgCADgCAEIgDALIAtAAIAAAAg");
	this.shape_47.setTransform(178.9,-2.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHArIgmhWIATAAIAaBCIAchCIASAAIgmBWg");
	this.shape_48.setTransform(169.5,-2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAVA/IAAg1QAAgLgEgEQgFgGgJAAQgKAAgHAHQgGAGAAALIAAAyIgSAAIAAh9IASAAIAAA0IAFgHIAHgFQAHgDAJAAQAQAAAHAJQAIAIAAARIAAA2g");
	this.shape_49.setTransform(159.7,-3.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgFgFgLIgEgLIgBgNIABgMIAEgKQAFgLAJgFIAJgFQAFgBAGAAIAIABIAIADQAIAEAEAIIAAg1IASAAIAAB9IgSAAIAAgPQgEAIgIAFIgIACIgIABIgLgBgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAJAKAAQAMgBAHgHQADgFABgFQACgGAAgIQAAgHgCgFQgBgGgDgDQgHgJgMABQgEAAgFABg");
	this.shape_50.setTransform(144.3,-3.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAGgKQAEgLAKgFQAJgGAMAAQAJAAAGADQAIADAFAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAGAMQgHAFgJAEQgJACgJAAQgUAAgMgMgAAYgGQgBgMgFgGQgFgHgLAAQgJAAgGAHQgEADgCAEIgCALIAtAAIAAAAg");
	this.shape_51.setTransform(134.6,-2.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAvAtIAAg1QAAgLgEgFQgCgDgDgBQgDgBgEAAQgKAAgGAHIgEAIQgCAEAAAGIAAAxIgRAAIAAg1IgBgJQgBgEgCgDQgEgFgIAAQgKAAgGAHQgDADgBAFQgCAEAAAGIAAAxIgSAAIAAhXIASAAIAAAOQAEgIAHgEQAHgEAJAAQAKAAAHAEQAFAFADAIQAFgIAHgEIAIgEIAJgBQAeAAAAAjIAAA2g");
	this.shape_52.setTransform(122.1,-2.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTA7QgLgDgHgGIAFgNQAJAGAIACQAIACAIABQAMgBAGgGQAGgGAAgNIAAgOIgEAHIgHAGIgIADQgFABgEAAQgMABgIgGQgJgGgFgJIgEgKIgBgMQAAgNAFgKIAGgJQADgDAFgDQAIgGAMABQAJgBAIAFQAHAEAEAIIAAgOIASAAIAABPQAAAKgDAIQgCAHgGAFQgKAKgVAAQgKAAgKgCgAgJgsQgFACgDADQgHAJAAANQAAAHACAFQABAFAEAEQAHAHAKAAQAMAAAHgHQADgEABgFQACgFAAgHQAAgOgGgHQgEgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_53.setTransform(104.1,-0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_54.setTransform(96.9,-4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOA+QgFgBgEgDQgJgFgFgLIgEgLIgBgNIABgMIAEgKQAFgLAJgFIAJgFQAFgBAGAAIAIABIAIADQAIAEAEAIIAAg1IASAAIAAB9IgSAAIAAgPQgEAIgIAFIgIACIgIABIgLgBgAgJgKQgFACgDAFQgDADgCAFQgBAGAAAHQAAAPAGAIQAHAJAKAAQAMgBAHgHQADgFABgFQACgGAAgIQAAgHgCgFQgBgGgDgDQgHgJgMABQgEAAgFABg");
	this.shape_55.setTransform(89.2,-3.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgaAtIAAhXIASAAIAAAQQAHgQAVgBIAFgBIABAPIgKACQgNABgFAGQgFAHgBAKIAAAwg");
	this.shape_56.setTransform(76.9,-2.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbAhQgMgLAAgWQAAgMAFgKQAFgLAKgFQAKgGALAAQAJAAAHADQAGADAGAFQAFAGADAIQACAIAAAKIAAAFIg9AAQABAOAHAGQAHAHALAAQAIAAAHgCQAHgDAGgEIAFAMQgFAFgKAEQgIACgKAAQgUAAgMgMgAAZgGQgCgMgFgGQgGgHgKAAQgJAAgHAHQgCADgCAEIgDALIAuAAIAAAAg");
	this.shape_57.setTransform(68.3,-2.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgqA9IAAh3IASAAIAAAOIAFgHIAHgEQAHgFAJAAQALAAAJAGQAFADADAEQAEAEACAFQAFALAAANQAAANgFAKIgGAJQgDADgFADQgEADgFABIgLABQgJAAgHgDIgHgGIgFgHIAAAwgAgKgsQgEACgDAFQgHAHAAAPQAAAIACAGQACAEADAFQADADAEACQAFADAFAAQAMgBAGgHQAHgIAAgOQAAgPgHgIQgDgFgFgCQgEgBgGAAQgFAAgFABg");
	this.shape_58.setTransform(58.5,-0.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgIA/IAAh9IARAAIAAB9g");
	this.shape_59.setTransform(50.8,-3.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAVAsIgKgEQgJgFgEgKQgEAKgIAFQgIAFgMAAQgJAAgHgDQgIgEgEgGQgFgGABgIQAAgJAEgGQAGgEALgCQAHgCAYgBIAEAAIAAgFIgBgIQgBgEgCgCQgEgFgKAAQgOAAgPAJIgGgMQAHgFAKgDQAKgDAJAAQALAAAHADQAHAEADAHQAGgHAHgEQAIgDAJAAQAIAAAHADQAHADAFAFQAFAGACAIQACAIABAKIAAAFIg9AAQABAOAHAGQAGAHAMAAQAOAAANgJIAGAMQgFAFgKAEQgJACgJAAIgMgBgAgjAFQgHABgEADQgCADAAAFQAAAHAEAEQAFAEAIAAQAJAAAGgHQADgDACgFQACgEgBgFIAAgFIgDAAQgOAAgIACgAA0gGQAAgMgGgGQgGgHgJAAQgFAAgEACQgFABgCAEQgEADgCAFQgBAEgBAGIAtAAIAAAAg");
	this.shape_60.setTransform(41.2,-2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgWBCIAJAAQAJgBAEgEQADgFAAgJIAAhXIASAAIAABVQAAARgIAIQgEAEgGACQgGADgJAAIgIABgAACg8IAAgTIAVAAIAAATg");
	this.shape_61.setTransform(30.1,-2.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAVA/IAAg1QAAgLgEgEQgFgGgJAAQgKAAgHAHQgGAGAAALIAAAyIgSAAIAAh9IASAAIAAA0IAFgHIAHgFQAHgDAJAAQAQAAAHAJQAIAIAAARIAAA2g");
	this.shape_62.setTransform(24.1,-3.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgIA/IAAhWIARAAIAABWgAgJgrIAAgTIATAAIAAATg");
	this.shape_63.setTransform(12.1,-4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHA/Ig3h9IATAAIArBmIAthmIASAAIg3B9g");
	this.shape_64.setTransform(3.7,-3.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#0900DD").ss(1,1,1).p("ApGAAISNAA");
	this.shape_65.setTransform(274,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(-4.6,-17.7,337.9,56.4), null);


(lib.bubble6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(7.6,1.1,1,1,0,0,0,165.3,30.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5E5EA").p("A5NFWIAOARQAWATAkANQAcALAkAAMAwfAAAIATgCQAYgEAXgJQBLgdArhKQAkg+AAhNIAAkdQAAgsgOgqQgPgqgbghQgngwg7gZQg1gWhDgBIztgFI7fAAQgOAAgWADQgrAHgmARQh5A3gUCIQgCAQAAAWIAFGpIgaAuQgmA0g4AZIBLgEQBVgMAygsg");
	this.shape.setTransform(-1.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5EA").s().p("A3QGSQgjABgdgLQgkgNgVgTIgPgRQgyAshVAMIhLADQA5gYAlg0IAaguIgFmqQAAgVACgQQAUiIB6g3QAlgSAsgGQAVgDAOgBIbfAAITtAGQBDABA1AWQA7AZAnAvQAcAiAOAqQAOApAAAtIAAEdQAABNgjA+QgrBJhLAeQgYAJgYADIgTACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,-41.2,370.6,82.5);


(lib.bubble3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(6.9,-3.6,1,1,0,0,0,164.5,20.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5E5EA").p("A5NFWIAOARQAWATAkANQAcALAkAAMAwfAAAIATgCQAYgEAXgJQBLgdArhKQAkg+AAhNIAAkdQAAgsgOgqQgPgqgbghQgngwg7gZQg1gWhDgBIztgFI7fAAQgOAAgWADQgrAHgmARQh5A3gUCIQgCAQAAAWIAFGpIgaAuQgmA0g4AZIBLgEQBVgMAygsg");
	this.shape.setTransform(-1.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5EA").s().p("A3QGSQgjAAgdgKQgkgNgVgUIgPgQQgxArhWANIhLADQA4gZAmgzIAaguIgFmqQAAgVADgQQATiJB5g2QAmgSArgGQAWgEAOABIbfAAITtAEQBDACA1AWQA7AZAnAvQAcAiAOAqQAOApAAAtIAAEdQAABNgkA+QgqBJhMAeQgXAJgYADIgTACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,-41.2,370.6,82.5);


(lib.bubble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Emojione_1F914svg();
	this.instance.parent = this;
	this.instance.setTransform(-84,2,0.015,0.015);

	this.instance_1 = new lib.Group_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.1,-1.6,1,1,0,0,0,168.8,20.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5E5EA").p("A5NFWIAOARQAWATAkANQAcALAkAAMAwfAAAIATgCQAYgEAXgJQBLgdArhKQAkg+AAhNIAAkdQAAgsgOgqQgPgqgbghQgngwg7gZQg1gWhDgBIztgFI7fAAQg5AAg8AbQh5A3gUCIQgCAQAAAWIAFGpIgaAuQgmA0g4AZIBLgEQBVgMAygsg");
	this.shape.setTransform(-1.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5EA").s().p("A3QGTQgjAAgdgLQgkgNgVgTIgPgRQgyArhVANIhLAEQA4gaAmgzIAaguIgFmpQAAgXADgPQATiIB5g3QA9gbA4gBIbfAAITtAGQBDAAA1AXQA7AZAnAvQAbAiAPAqQAOApAAAtIAAEdQAABNgjA+QgsBJhLAeQgXAJgYADIgTADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,-41.2,370.6,82.5);


(lib.bubble_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,0.1,1,1,0,0,0,147.2,9.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5E5EA").p("A5NFWIAOARQAWATAkANQAcALAkAAMAwfAAAIATgCQAYgEAXgJQBLgdArhKQAkg+AAhNIAAkdQAAgsgOgqQgPgqgbghQgngwg7gZQg1gWhDgBIztgFI7fAAQgOAAgWADQgrAHgmARQh5A3gUCIQgCAQAAAWIAFGpIgaAuQgmA0g4AZIBLgEQBVgMAygsg");
	this.shape.setTransform(-1.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5EA").s().p("A3PGSQglAAgcgKQgkgNgWgUIgOgQQgyArhVANIhLADQA4gZAmgzIAaguIgFmqQAAgVACgQQAViJB5g2QAlgSAsgGQAVgEAOABIbfAAITuAEQBCACA1AWQA7AZAnAwQAbAhAPAqQAOAqAAAsIAAEdQAABNgkA+QgrBJhKAeQgYAJgYADIgTACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1}},{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-9.5,y:0.1}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.054,scaleY:1.054}},{t:this.shape,p:{scaleX:1.054,scaleY:1.054}},{t:this.instance,p:{scaleX:1.054,scaleY:1.054,x:-10,y:0.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,-41.2,370.6,82.5);


// stage content:
(lib.chatforside = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("messagesend2");
	}
	this.frame_37 = function() {
		playSound("messagesend2");
	}
	this.frame_105 = function() {
		playSound("messagesend2");
	}
	this.frame_128 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.casperrinderjensen.dk/kommunalhvad/stemmeguide.html", "_self");
		}
	}
	this.frame_161 = function() {
		playSound("messagesend2");
	}
	this.frame_206 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(29).call(this.frame_37).wait(68).call(this.frame_105).wait(23).call(this.frame_128).wait(33).call(this.frame_161).wait(45).call(this.frame_206).wait(1));

	// bubble4
	this.instance = new lib.bubble3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(278.5,382.7,1,1,0,0,0,-1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({y:373.8},5).wait(34).to({startPosition:0},0).wait(1));

	// bubble2
	this.instance_1 = new lib.bubble2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(278.5,152.9,1,1,0,0,0,-1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({y:148.4},6).wait(158).to({startPosition:0},0).wait(1));

	// loading
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B5B5B8").p("AAAg7QAZAAASARQARATAAAXQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAg");
	this.shape.setTransform(158.5,234.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B8").s().p("AgpArQgSgSAAgZQAAgYASgSQARgRAYAAQAZAAARARQASATAAAXQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_1.setTransform(158.5,234.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B5B5B8").p("AAAg7QAZAAASARQARATAAAXQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAg");
	this.shape_2.setTransform(142.5,234.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B5B8").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAARARQASATAAAXQAAAZgSASQgRARgZAAQgYAAgSgRg");
	this.shape_3.setTransform(142.5,234.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9E9EA1").p("AAAg7QAZAAASARQARATAAAXQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAg");
	this.shape_4.setTransform(126.5,234.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9EA1").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARATAAAXQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape_5.setTransform(126.5,234.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E5E5EA").p("AAAgnQARAAALAMQAMAMAAAPQAAARgMAMQgLALgRAAQgQAAgMgLQgLgMAAgRQAAgPALgMQAMgMAQAAg");
	this.shape_6.setTransform(100,257.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E5EA").s().p("AgcAcQgLgLAAgRQAAgQALgLQAMgMAQAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgQAAgMgMg");
	this.shape_7.setTransform(100,257.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E5E5EA").p("AgljjIC9AAQBLAAA8AnQBfA+AAB3QADAcgLAlQgVBMhBAuQhBAwhXAAIkqAAQgPAAgSgFQgmgKgTgZIgTAVQgZAUgegKQgUgGgOgQQgPgQgEgVQgKgtAlglQgKgegBgqQgChRArg5QALgRAWgTQArgnA1gLQAQgEASAAg");
	this.shape_8.setTransform(140.8,234.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5E5EA").s().p("AiiDjQgPAAgSgEQgmgKgTgZIgTAVQgZATgegJQgUgHgOgPQgPgQgEgVQgKgtAlgmQgKgdgBgpQgChSArg5QALgQAWgUQArgmA1gMQAQgDASgBIB6gEIC9AAQBLAAA8AnQBfA9AAB3QADAbgLAmQgVBLhBAwQhBAuhXAAg");
	this.shape_9.setTransform(140.8,234.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E9EA1").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAARARQASATAAAXQAAAZgSASQgRARgZAAQgYAAgSgRg");
	this.shape_10.setTransform(142.5,234.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5B5B8").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARATAAAXQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape_11.setTransform(126.5,234.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9E9EA1").s().p("AgpArQgSgSAAgZQAAgYASgSQARgRAYAAQAZAAARARQASATAAAXQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_12.setTransform(158.5,234.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9,p:{y:234.5}},{t:this.shape_8,p:{y:234.5}},{t:this.shape_7,p:{y:257.7}},{t:this.shape_6,p:{y:257.7}},{t:this.shape_5,p:{y:234.2}},{t:this.shape_4,p:{x:126.5,y:234.2}},{t:this.shape_3,p:{y:234.2}},{t:this.shape_2,p:{x:142.5,y:234.2}},{t:this.shape_1,p:{y:234.2}},{t:this.shape,p:{y:234.2,x:158.5}}]},57).to({state:[{t:this.shape_9,p:{y:234.5}},{t:this.shape_8,p:{y:234.5}},{t:this.shape_7,p:{y:257.8}},{t:this.shape_6,p:{y:257.8}},{t:this.shape_11,p:{y:234.3}},{t:this.shape_2,p:{x:126.5,y:234.3}},{t:this.shape_10,p:{y:234.3}},{t:this.shape_4,p:{x:142.5,y:234.3}},{t:this.shape_1,p:{y:234.3}},{t:this.shape,p:{y:234.3,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:234.7}},{t:this.shape_8,p:{y:234.7}},{t:this.shape_7,p:{y:257.9}},{t:this.shape_6,p:{y:257.9}},{t:this.shape_11,p:{y:234.4}},{t:this.shape_2,p:{x:126.5,y:234.4}},{t:this.shape_3,p:{y:234.4}},{t:this.shape,p:{y:234.4,x:142.5}},{t:this.shape_12,p:{y:234.4}},{t:this.shape_4,p:{x:158.5,y:234.4}}]},6).to({state:[{t:this.shape_9,p:{y:234.8}},{t:this.shape_8,p:{y:234.8}},{t:this.shape_7,p:{y:258}},{t:this.shape_6,p:{y:258}},{t:this.shape_5,p:{y:234.5}},{t:this.shape_4,p:{x:126.5,y:234.5}},{t:this.shape_3,p:{y:234.5}},{t:this.shape_2,p:{x:142.5,y:234.5}},{t:this.shape_1,p:{y:234.5}},{t:this.shape,p:{y:234.5,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:234.7}},{t:this.shape_8,p:{y:234.7}},{t:this.shape_7,p:{y:258}},{t:this.shape_6,p:{y:258}},{t:this.shape_11,p:{y:234.5}},{t:this.shape_2,p:{x:126.5,y:234.5}},{t:this.shape_10,p:{y:234.5}},{t:this.shape_4,p:{x:142.5,y:234.5}},{t:this.shape_1,p:{y:234.5}},{t:this.shape,p:{y:234.5,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:235.2}},{t:this.shape_8,p:{y:235.2}},{t:this.shape_7,p:{y:258.4}},{t:this.shape_6,p:{y:258.4}},{t:this.shape_11,p:{y:234.9}},{t:this.shape_2,p:{x:126.5,y:234.9}},{t:this.shape_3,p:{y:234.9}},{t:this.shape,p:{y:234.9,x:142.5}},{t:this.shape_12,p:{y:234.9}},{t:this.shape_4,p:{x:158.5,y:234.9}}]},6).to({state:[{t:this.shape_9,p:{y:234.5}},{t:this.shape_8,p:{y:234.5}},{t:this.shape_7,p:{y:257.8}},{t:this.shape_6,p:{y:257.8}},{t:this.shape_11,p:{y:234.3}},{t:this.shape_2,p:{x:126.5,y:234.3}},{t:this.shape_10,p:{y:234.3}},{t:this.shape_4,p:{x:142.5,y:234.3}},{t:this.shape_1,p:{y:234.3}},{t:this.shape,p:{y:234.3,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:234.7}},{t:this.shape_8,p:{y:234.7}},{t:this.shape_7,p:{y:257.9}},{t:this.shape_6,p:{y:257.9}},{t:this.shape_11,p:{y:234.4}},{t:this.shape_2,p:{x:126.5,y:234.4}},{t:this.shape_3,p:{y:234.4}},{t:this.shape,p:{y:234.4,x:142.5}},{t:this.shape_12,p:{y:234.4}},{t:this.shape_4,p:{x:158.5,y:234.4}}]},6).to({state:[{t:this.shape_9,p:{y:234.8}},{t:this.shape_8,p:{y:234.8}},{t:this.shape_7,p:{y:258}},{t:this.shape_6,p:{y:258}},{t:this.shape_5,p:{y:234.5}},{t:this.shape_4,p:{x:126.5,y:234.5}},{t:this.shape_3,p:{y:234.5}},{t:this.shape_2,p:{x:142.5,y:234.5}},{t:this.shape_1,p:{y:234.5}},{t:this.shape,p:{y:234.5,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:234.7}},{t:this.shape_8,p:{y:234.7}},{t:this.shape_7,p:{y:258}},{t:this.shape_6,p:{y:258}},{t:this.shape_11,p:{y:234.5}},{t:this.shape_2,p:{x:126.5,y:234.5}},{t:this.shape_10,p:{y:234.5}},{t:this.shape_4,p:{x:142.5,y:234.5}},{t:this.shape_1,p:{y:234.5}},{t:this.shape,p:{y:234.5,x:158.5}}]},5).to({state:[]},6).to({state:[{t:this.shape_9,p:{y:347.2}},{t:this.shape_8,p:{y:347.2}},{t:this.shape_7,p:{y:370.4}},{t:this.shape_6,p:{y:370.4}},{t:this.shape_5,p:{y:346.9}},{t:this.shape_4,p:{x:126.5,y:346.9}},{t:this.shape_3,p:{y:346.9}},{t:this.shape_2,p:{x:142.5,y:346.9}},{t:this.shape_1,p:{y:346.9}},{t:this.shape,p:{y:346.9,x:158.5}}]},18).to({state:[{t:this.shape_9,p:{y:347.2}},{t:this.shape_8,p:{y:347.2}},{t:this.shape_7,p:{y:370.4}},{t:this.shape_6,p:{y:370.4}},{t:this.shape_11,p:{y:346.9}},{t:this.shape_2,p:{x:126.5,y:346.9}},{t:this.shape_10,p:{y:346.9}},{t:this.shape_4,p:{x:142.5,y:346.9}},{t:this.shape_1,p:{y:346.9}},{t:this.shape,p:{y:346.9,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:347.3}},{t:this.shape_8,p:{y:347.3}},{t:this.shape_7,p:{y:370.6}},{t:this.shape_6,p:{y:370.6}},{t:this.shape_11,p:{y:347.1}},{t:this.shape_2,p:{x:126.5,y:347.1}},{t:this.shape_3,p:{y:347.1}},{t:this.shape,p:{y:347.1,x:142.5}},{t:this.shape_12,p:{y:347.1}},{t:this.shape_4,p:{x:158.5,y:347.1}}]},6).to({state:[{t:this.shape_9,p:{y:347.2}},{t:this.shape_8,p:{y:347.2}},{t:this.shape_7,p:{y:370.4}},{t:this.shape_6,p:{y:370.4}},{t:this.shape_5,p:{y:346.9}},{t:this.shape_4,p:{x:126.5,y:346.9}},{t:this.shape_3,p:{y:346.9}},{t:this.shape_2,p:{x:142.5,y:346.9}},{t:this.shape_1,p:{y:346.9}},{t:this.shape,p:{y:346.9,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:347.2}},{t:this.shape_8,p:{y:347.2}},{t:this.shape_7,p:{y:370.4}},{t:this.shape_6,p:{y:370.4}},{t:this.shape_11,p:{y:346.9}},{t:this.shape_2,p:{x:126.5,y:346.9}},{t:this.shape_10,p:{y:346.9}},{t:this.shape_4,p:{x:142.5,y:346.9}},{t:this.shape_1,p:{y:346.9}},{t:this.shape,p:{y:346.9,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:347.3}},{t:this.shape_8,p:{y:347.3}},{t:this.shape_7,p:{y:370.6}},{t:this.shape_6,p:{y:370.6}},{t:this.shape_11,p:{y:347.1}},{t:this.shape_2,p:{x:126.5,y:347.1}},{t:this.shape_3,p:{y:347.1}},{t:this.shape,p:{y:347.1,x:142.5}},{t:this.shape_12,p:{y:347.1}},{t:this.shape_4,p:{x:158.5,y:347.1}}]},6).to({state:[{t:this.shape_9,p:{y:347.2}},{t:this.shape_8,p:{y:347.2}},{t:this.shape_7,p:{y:370.4}},{t:this.shape_6,p:{y:370.4}},{t:this.shape_5,p:{y:346.9}},{t:this.shape_4,p:{x:126.5,y:346.9}},{t:this.shape_3,p:{y:346.9}},{t:this.shape_2,p:{x:142.5,y:346.9}},{t:this.shape_1,p:{y:346.9}},{t:this.shape,p:{y:346.9,x:158.5}}]},5).to({state:[{t:this.shape_9,p:{y:347.2}},{t:this.shape_8,p:{y:347.2}},{t:this.shape_7,p:{y:370.4}},{t:this.shape_6,p:{y:370.4}},{t:this.shape_11,p:{y:346.9}},{t:this.shape_2,p:{x:126.5,y:346.9}},{t:this.shape_10,p:{y:346.9}},{t:this.shape_4,p:{x:142.5,y:346.9}},{t:this.shape_1,p:{y:346.9}},{t:this.shape,p:{y:346.9,x:158.5}}]},5).to({state:[]},1).to({state:[]},23).wait(17));

	// bubble1
	this.instance_2 = new lib.bubble6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(279.5,54.6,1,1,0,0,0,-1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({y:40.4},5).wait(19).to({startPosition:0},0).wait(169).to({startPosition:0},0).wait(1));

	// bubble_btn
	this.button_1 = new lib.bubble_btn();
	this.button_1.parent = this;
	this.button_1.setTransform(278.5,269,1,1,0,0,0,-1,0.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(111).to({_off:false},0).to({y:257.4},5).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 750,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chat_forside_atlas_.png", id:"chat_forside_atlas_"},
		{src:"sounds/messagesend2.mp3", id:"messagesend2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;