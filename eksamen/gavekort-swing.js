(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s().p("Ag6gfIBegYIAWBXIhdAYg");
	this.shape.setTransform(401.3,71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6gfIBegYIAWBXIhdAYg");
	this.shape_1.setTransform(401.3,71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s().p("Aizi3ICjgqIASBKQALg1AUgZQAUgZAlgJQAngKAzAMIgWCKQgigFgSAFQgiAIgMAhQgQAuAcBsIAmCYIiuAtg");
	this.shape_2.setTransform(367.9,59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s().p("AlYkhICxgtIBTFDIBai4IDWg2Ih6DHID3D6IjEAyIiKifIgwBRIAeB2IiyAtg");
	this.shape_3.setTransform(321.5,67.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s().p("AgyFMQg3gNgsgpQgggdgbg4Qgcg5gThJQgtixAuhYQAuhYCEghQA/gQArAFQAtAGAfASQAgATAWAXQAWAYASAiQAjBCAUBMQArCpglBdQgmBeiNAkQgwAMgnAAQgYAAgVgEgAg1jOQgrALgIAxQgIAxAeB1QAeB3AhAnQAfAmAogKQAagHAPgYQAPgXgBgqQgBgrgWhUQggh9gfglQgZgdgfAAQgIAAgKACg");
	this.shape_4.setTransform(231.4,85.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s().p("AgyFMQg3gNgsgpQgggdgbg4Qgcg5gThJQgtixAuhYQAuhYCEghQA/gQArAFQAtAGAfASQAgATAWAXQAWAYASAiQAjBCAUBMQArCpglBdQgmBeiNAkQgwAMgnAAQgYAAgVgEgAg1jOQgrALgIAxQgIAxAeB1QAeB3AhAnQAfAmAogKQAagHAPgYQAPgXgBgqQgBgrgWhUQggh9gfglQgZgdgfAAQgIAAgKACg");
	this.shape_5.setTransform(173.2,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s().p("AgyFMQg3gNgsgpQgggdgbg4Qgcg5gThJQgtixAuhYQAuhYCEghQA/gQArAFQAtAGAfASQAgATAWAXQAWAYASAiQAjBCAUBMQArCpglBdQgmBeiNAkQgwAMgnAAQgYAAgVgEgAg1jOQgrALgIAxQgIAxAeB1QAeB3AhAnQAfAmAogKQAagHAPgYQAPgXgBgqQgBgrgWhUQggh9gfglQgZgdgfAAQgIAAgKACg");
	this.shape_6.setTransform(114.9,115.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Aizi3ICjgqIASBKQALg1AUgZQAUgZAlgJQAngKAzAMIgWCKQgigFgSAFQgiAIgMAhQgQAuAcBsIAmCYIiuAtg");
	this.shape_7.setTransform(367.9,59);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlYkhICxgtIBTFDIBai4IDWg2Ih6DHID3D6IjEAyIiKifIgwBRIAeB2IiyAtg");
	this.shape_8.setTransform(321.5,67.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgyFMQg3gNgsgpQgggdgbg4Qgcg5gThJQgtixAuhYQAuhYCEghQA/gQArAFQAtAGAfASQAgATAWAXQAWAYASAiQAjBCAUBMQArCpglBdQgmBeiNAkQgwAMgnAAQgYAAgVgEgAg1jOQgrALgIAxQgIAxAeB1QAeB3AhAnQAfAmAogKQAagHAPgYQAPgXgBgqQgBgrgWhUQggh9gfglQgZgdgfAAQgIAAgKACg");
	this.shape_9.setTransform(231.4,85.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgyFMQg3gNgsgpQgggdgbg4Qgcg5gThJQgtixAuhYQAuhYCEghQA/gQArAFQAtAGAfASQAgATAWAXQAWAYASAiQAjBCAUBMQArCpglBdQgmBeiNAkQgwAMgnAAQgYAAgVgEgAg1jOQgrALgIAxQgIAxAeB1QAeB3AhAnQAfAmAogKQAagHAPgYQAPgXgBgqQgBgrgWhUQggh9gfglQgZgdgfAAQgIAAgKACg");
	this.shape_10.setTransform(173.2,100.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyFMQg3gNgsgpQgggdgbg4Qgcg5gThJQgtixAuhYQAuhYCEghQA/gQArAFQAtAGAfASQAgATAWAXQAWAYASAiQAjBCAUBMQArCpglBdQgmBeiNAkQgwAMgnAAQgYAAgVgEgAg1jOQgrALgIAxQgIAxAeB1QAeB3AhAnQAfAmAogKQAagHAPgYQAPgXgBgqQgBgrgWhUQggh9gfglQgZgdgfAAQgIAAgKACg");
	this.shape_11.setTransform(114.9,115.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s().p("Ag5gfIBdgYIAXBXIheAYg");
	this.shape_12.setTransform(85.2,151.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5gfIBdgYIAXBXIheAYg");
	this.shape_13.setTransform(85.2,151.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s().p("AglFjQgwgBgkgPQglgQgbgYQgagYgZgpICshAQARApAdAQQAcAQAggJQAkgJASgiQAQghgOg3QgOg4gfgUQgegUgnAKQgZAHgVASQgPAOgPAcIiaARIgeldIGchqIAjCLIkWBHIAJBiQAZgVAbgOQAbgOAagHQBegYBJAqQBJApAWBWQAPA8gPBAQgRBAgvArQgwArhWAWQg8AQgtAAIgDAAg");
	this.shape_14.setTransform(43,132.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglFjQgwgBgkgPQglgQgbgYQgagYgZgpICshAQARApAdAQQAcAQAggJQAkgJASgiQAQghgOg3QgOg4gfgUQgegUgnAKQgZAHgVASQgPAOgPAcIiaARIgeldIGchqIAjCLIkWBHIAJBiQAZgVAbgOQAbgOAagHQBegYBJAqQBJApAWBWQAPA8gPBAQgRBAgvArQgwArhWAWQg8AQgtAAIgDAAg");
	this.shape_15.setTransform(43,132.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-6.3,-21.2,422.2,223.5), null);


(lib.gavekort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.7).p("AEDGuIoFtb");
	this.shape.setTransform(-10,-100.3,0.411,0.411);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.7).p("EAiFAd+QhWjAiQkDQkgoGkflOQjwkYoIliQlJjhl3jVQheg1hlgrQl9ilmPj/QqMmhnSoN");
	this.shape_1.setTransform(-88.9,-161.5,0.411,0.411);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(62.3,147.5,0.411,0.411,0,0,0,204.8,90.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGBFQgFgDgBgGQgBgGACgFQACgFAIgCQAHgCAFAEQAEADACAGQABAGgCAFQgDAFgHACIgFABQgEAAgDgDgAgWgrQgEgDgCgGQgBgGACgFQACgFAIgCQAIgCAEADQAFADABAHQABAFgCAFQgDAFgHACIgFABQgEAAgDgCg");
	this.shape_2.setTransform(106.7,99.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBoQgQgIgFgSQgFgWANgQQAOgQAegIIAWgGIgDgKQgDgMgKgGQgIgFgOADQgNAEgHAIQgHAIACAJIgXAGQgDgKAFgLQAFgLALgJQALgJAPgEQAXgGARAIQAQAJAGAVIAQA/QAFATAIAKIABACIgZAGQgDgDgEgKQgMAVgXAGQgHACgHAAQgMAAgKgFgAAFAgQgrALAGAZQADAMAJAEQAJAEALgDQALgCAJgJQAIgIACgLIgHgcgAgtg5QgKgFgDgLQgDgLAGgKQAGgKAMgDQAMgDAKAGQAJAGADALQADALgGAJQgGAKgMADIgIABQgHAAgGgEgAgjhfQgGABgDAGQgDAGABAGQACAGAFADQAGADAGgCQAGgBAEgFQADgGgCgGQgBgHgGgCQgDgDgFAAIgEABg");
	this.shape_3.setTransform(96.9,98.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEhVIAVgGIAGAPQAKgVAZgHQAYgGAUAPQATAPAIAiIABACQAIAggKAVQgJAYgZAGQgZAGgSgMIAQBDIgWAGgAgIhSQgVAGgGAWIARBBQAPAQAVgGQARgEAHgQQAHgPgHgbQgGgXgOgLQgKgIgLAAIgJABg");
	this.shape_4.setTransform(81.4,108.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXgpIAXgGIAkCKIgYAGgAgchFQgFgDgBgFQgBgGACgFQACgFAHgCQAHgCAFADQAFADABAGQABAGgCAFQgDAFgHACIgEAAQgEAAgDgCg");
	this.shape_5.setTransform(64.1,107.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBhQgVgQgIggIAAgBQgIggAKgXQAKgXAZgGQAYgHARAOIgRhJIAXgGIAyDEIgWAGIgFgPQgKAVgZAHQgHACgFAAQgRAAgOgMgAgRgRQgSAEgGAPQgGAQAGAaQAGAYANALQAOALAQgFQAWgGAGgXIgRg+QgLgMgOAAIgLABg");
	this.shape_6.setTransform(54.5,109.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Agjg7IAXgGIAEAQQAHgWAVgFQAHgCAEABIAFAWIgLACQgYAGgCAWIAYBiIgXAGg");
	this.shape_7.setTransform(41.5,115.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhMBSQgPgIgFgTQgFgUAMgQQALgOAdgGIAcgIIgCgLQgEgNgJgGQgJgHgNAEQgOADgHAJQgHAKACAKIgYAEQgEgSAMgQQANgQAYgGQAPgEAMADQANADAJAJQAGgMAIgJQAKgJAOgDQAagHATANQAUAMAHAeIAEAPIheAXQAHAXAOAJQAPAJATgFQATgEANgOIAFgGIAMAQQgQAUgcAHQgiAJgXgTQgGAOgMAJQgNAKgSAFQgJACgHAAQgLAAgJgFgAgtAQQgPAEgHAJQgHAKACAKQADAKAIAEQAIAFANgEQAJgCAJgIQAJgHAFgIIgIgfgAAdhBQgPAEgHAOQgHANACATIBFgSIgBgEQgEgRgLgHQgHgFgJAAIgKABg");
	this.shape_8.setTransform(27.1,120);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhPg/IAbgHIBbCMIAOinIAbgHIgWDMIgWAFg");
	this.shape_9.setTransform(4.4,121.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkheIAYgGIAxDEIgYAFg");
	this.shape_10.setTransform(85.2,-28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXgpIAXgGIAkCKIgYAGgAgchFQgFgDgBgFQgBgGACgFQACgFAHgCQAHgCAFADQAFADABAGQABAGgCAFQgDAFgHACIgEAAQgEAAgDgCg");
	this.shape_11.setTransform(79,-26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAMBSQgLgHgEgSIgVhVIgaAGIgFgSIAagGIgJgiIAYgGIAJAhIAZgGIAEASIgZAHIAWBVQACAIAEAEQAEADAJgCIAKgEIAGATQgJAFgJACIgKABQgKAAgGgFg");
	this.shape_12.setTransform(71.7,-23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMBSQgLgHgDgSIgWhVIgZAGIgGgSIAagGIgJgiIAYgGIAJAhIAZgGIAEASIgZAHIAWBVQACAIAEAEQAFADAIgCIAKgEIAGATQgJAFgJACIgKABQgKAAgGgFg");
	this.shape_13.setTransform(56.6,-19.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Agjg7IAXgGIAEAQQAHgWAVgFQAHgCAEABIAFAWIgLACQgYAGgCAWIAYBiIgXAGg");
	this.shape_14.setTransform(47.5,-16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfBAQgXgPgIggIgBgCQgFgTAEgTQAEgSAMgMQAMgNASgFQAcgHAWAPQAXAQAIAgIAAACQAGATgEASQgEASgMANQgMAMgTAFQgJACgIAAQgRAAgPgKgAgNgzQgRAEgHARQgIARAHAZQAGAXAOALQAOALARgEQASgFAHgRQAIgQgHgZQgGgXgOgLQgLgJgLAAIgKACg");
	this.shape_15.setTransform(36.4,-12.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhShfIAZgGIAdB3IAJgSIAfg5IAdgIIgnBHIBRBCIgdAHIhAg0IgKAUIAMAwIgXAGg");
	this.shape_16.setTransform(22.4,-11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBBQgXgOgHgfIgCgFQgFgTAEgSQADgTANgMQALgOARgEQAagHATAPQAUAOAIAhIADAKIhdAXQAGAUAOAKQAPAJARgEQAMgEAIgHQAHgHAFgKIARAIQgLAfgjAIQgJADgJAAQgQAAgPgJgAgOgzQgPADgHANQgHANADAUIBEgSIAAgCQgGgRgLgIQgHgGgJAAIgJACg");
	this.shape_17.setTransform(9.1,-5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag6gvIAYgHIA+BhIAHhyIAYgGIgOCWIgSAFg");
	this.shape_18.setTransform(-6.5,-2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBHQgQgIgFgSQgFgWANgQQAOgPAegIIAWgGIgDgLQgDgMgKgGQgIgFgOADQgNAEgHAIQgHAJACAJIgXAGQgDgKAFgMQAFgLALgJQALgJAPgEQAXgGARAIQAQAJAGAVIAQA/QAFATAIAKIABACIgZAGQgDgDgEgKQgMAVgXAGQgHACgHAAQgMAAgKgFgAAFAAQgrAKAGAZQADAMAJAEQAJAEALgDQALgCAJgJQAIgIACgLIgHgbg");
	this.shape_19.setTransform(-17.5,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRBgQgVgHgPgRQgOgRgHgaIgEgQQgLgqAOgcQANgcAkgJQAcgIAWALQAWAKALAbIgZAGQgQgjgkAJQgZAGgIAVQgJAUAIAgIAEAQQAIAfAUAPQASAPAYgGQAOgEAJgFQAKgGAFgJIgLgqIgrALIgEgUIBDgQIARBDQgGAQgPALQgQALgWAGQgMADgLAAQgJAAgKgDg");
	this.shape_20.setTransform(-34.5,2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1.7).p("EghIAIdMBCRgQ4");
	this.shape_21.setTransform(39.6,54.8,0.411,0.411);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1.7).p("EghIAIcMBCRgQ3");
	this.shape_22.setTransform(72.9,184.9,0.411,0.411);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.8).p("AgTgLIAnAX");
	this.shape_23.setTransform(-43.4,47.1,0.411,0.411);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.8).p("AgXgGIAvAN");
	this.shape_24.setTransform(-40.8,46.6,0.411,0.411);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.8).p("AgWgGIAtAN");
	this.shape_25.setTransform(-42.3,49.1,0.411,0.411);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.8).p("AgSgHIAlAP");
	this.shape_26.setTransform(-38.4,45.6,0.411,0.411);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.8).p("AgWgGIAtAN");
	this.shape_27.setTransform(-39.7,48.4,0.411,0.411);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.8).p("AgbgFIA3AL");
	this.shape_28.setTransform(-41.2,51.3,0.411,0.411);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.8).p("AgagBIA0AD");
	this.shape_29.setTransform(-39.8,52.9,0.411,0.411);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.8).p("AgWgGIAtAN");
	this.shape_30.setTransform(-38.5,50.3,0.411,0.411);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.8).p("AgSgHIAlAP");
	this.shape_31.setTransform(-37.3,47.5,0.411,0.411);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.8).p("AgWgGIAtAN");
	this.shape_32.setTransform(-36.2,45.4,0.411,0.411);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.8).p("AgRgDIAjAH");
	this.shape_33.setTransform(-35,46.7,0.411,0.411);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.8).p("AgVgCIArAF");
	this.shape_34.setTransform(-36.2,49.5,0.411,0.411);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.8).p("AgVgCIArAF");
	this.shape_35.setTransform(-37.4,51.9,0.411,0.411);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.8).p("AgRgDIAjAH");
	this.shape_36.setTransform(-34.4,49,0.411,0.411);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.8).p("AgRgDIAjAH");
	this.shape_37.setTransform(-35.3,51,0.411,0.411);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.8).p("AgNgEIAbAJ");
	this.shape_38.setTransform(-33.5,50.6,0.411,0.411);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.8).p("AAYgoIgvBR");
	this.shape_39.setTransform(-42.6,47.6,0.411,0.411);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.8).p("AAshPIhXCf");
	this.shape_40.setTransform(-41,48.6,0.411,0.411);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.8).p("AA2hsIhrDZ");
	this.shape_41.setTransform(-39.1,49.2,0.411,0.411);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.8).p("AA2hsIhrDZ");
	this.shape_42.setTransform(-36.8,48.6,0.411,0.411);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.8).p("AAkhNIhHCb");
	this.shape_43.setTransform(-35.2,49.3,0.411,0.411);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.8).p("AATgrIglBW");
	this.shape_44.setTransform(-33.9,50.2,0.411,0.411);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.8).p("AB6geIjyA9");
	this.shape_45.setTransform(-39.2,45.3,0.411,0.411);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.8).p("AhkmMQikAqhXCSQhWCSApCjQAqClCSBWQCSBXCjgqQClgqBWiSQBXiSgqijQgqikiShXQiShWijApgAAfB5QgxANgtgaQgsgagNgzQgNgxAbgtQAagsAygNQAygNAsAbQAtAaAMAyQANAxgaAtQgaAtgzAMg");
	this.shape_46.setTransform(93.2,9.3,0.411,0.411);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AjQFgQiShWgqilQgpijBWiSQBXiSCkgqQCjgpCSBWQCSBXAqCkQAqCjhXCSQhWCSilAqQg1ANgzAAQhrAAhig6gAgeh4QgyANgaAsQgbAtANAxQANAzAsAaQAtAaAxgNQAzgMAagtQAagtgNgxQgMgygtgaQgegSghAAQgPAAgQAEg");
	this.shape_47.setTransform(93.2,9.3,0.411,0.411);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.8).p("AkjkKIIViIIAyDCIiaAoICCH9IjzA+Ih/n1IiJAjg");
	this.shape_48.setTransform(62.2,15.6,0.411,0.411);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhmhiIiJAjIg0jLIIViIIAyDCIiaAoICCH9IjzA+g");
	this.shape_49.setTransform(62.2,15.6,0.411,0.411);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.8).p("AkgkLIAyDDICKgkICBH9ID7hAIiAn0ICJgjIgzjLg");
	this.shape_50.setTransform(38.8,21.6,0.411,0.411);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhlhsIiJAkIgyjDIINiFIA0DKIiJAjICAH1Ij7BAg");
	this.shape_51.setTransform(38.8,21.6,0.411,0.411);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.8).p("AlQkhIHth9IApChIjZA4IAVBZIDLgzIAtCxIjKAzIAUBRIDbg3IAyDCIntB+g");
	this.shape_52.setTransform(18.8,28.1,0.411,0.411);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AlQkgIHth+IApCiIjZA4IAVBZIDLg0IAtCxIjKAzIAUBRIDbg3IAyDCIntB+g");
	this.shape_53.setTransform(18.8,28.1,0.411,0.411);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.8).p("AmkgQIgtiyIEThGID5DMIg/j7IEjhLICzLAIkTBGIkLjQIAaBpg");
	this.shape_54.setTransform(-8.9,32.6,0.411,0.411);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhMC0IAaBpIlyktIgtiyIEThGID5DLIg/j7IEjhKICzK/IkTBGg");
	this.shape_55.setTransform(-8.9,32.6,0.411,0.411);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.8).p("AhFiuIAdBxIhpAbIAxDBIANARQARAPATgKICpgrQAIgCAHgGQAOgMgFgVIgxjBIhpAbIgchyg");
	this.shape_56.setTransform(-38.7,46,0.411,0.411);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.8).p("AjpmTIKqJHIAOAiQAIAngfAZIn1CAQgRgBgIgOQgSgcAlhAQACAAACgEQACgHgEgPIhSlDQgNgQgRgCQghgFgUBGIgUgMIgNATIgMgvIgwAMIAMAwIgYAoIgTgmIgeAzQgNgigPgiQgfhFgMgIQgGgFgCgIQgEgQASgPIBYg6QAEgBgBgCQgEgGgdgJQgCgGAHgFQAMgJAoAGIgXgUIA9ABIgOgWIAaACQAMAGAGgJQAKgSgihIQgBgCgBgCQAAgEAEAAQANgBA0AjQgJgagGgYQgLgwAQAKg");
	this.shape_57.setTransform(-28.7,39.9,0.411,0.411);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhWGHQgSgcAlhAQACAAACgEQACgHgEgPIhSlDQgNgQgRgCQghgFgUBGIgUgMIgNATIgMgvIgwAMIAMAwIgYAoIgTgmIgeAzIgchEQgfhFgMgIQgGgFgCgIQgEgQASgPIBYg6QABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgEgGgdgJQgCgGAHgFQAMgJAoAGIgXgUIA9ABIgOgWIAaACQAMAGAGgJQAKgSgihIIgCgEQAAgEAEAAQANgBA0AjQgJgagGgYQgLgwAQAKIKqJHIAOAiQAIAngfAZIn1CAQgRgBgIgOg");
	this.shape_58.setTransform(-28.7,39.9,0.411,0.411);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(3.1).p("EgMmgqkQh9AghuhCQhvhCggh8Qggh9BChvQBChuB8ggQB9ggBvBCQBuBCAgB8QAgB9hCBuQhCBvh8AggEAA2hHSMgnAAJ9ItOWRMAcIBuVMBKngTBMgcGhuOg");
	this.shape_59.setTransform(43.5,52.8,0.411,0.411);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E5E5E5").s().p("EgzXgnDINO2RMAnBgJ9IWaNUMAcGBuOMhKnATBgEgO+gz9Qh9AghBBuQhCBvAfB9QAgB8BvBCQBvBCB8ggQB9ggBBhvQBChuggh9Qgfh8hvhCQhKgshRAAQgoAAgoAKg");
	this.shape_60.setTransform(43.5,52.8,0.411,0.411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.6,-241.3,360.2,483.6);


// stage content:
(lib.gavekortswing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gavekort("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(356.3,81.3,0.812,0.812,50.4,0,0,-178.5,-240.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:0.3,x:298,y:317.7},0).wait(1).to({x:298.1},0).wait(1).to({x:298.3,y:317.8},0).wait(1).to({rotation:50.3,x:298.6},0).wait(1).to({rotation:50.2,x:298.9,y:317.9},0).wait(1).to({rotation:50.1,x:299.3,y:318},0).wait(1).to({rotation:50,x:299.8,y:318.1},0).wait(1).to({rotation:49.9,x:300.4,y:318.3},0).wait(1).to({rotation:49.7,x:301.1,y:318.4},0).wait(1).to({rotation:49.5,x:301.9,y:318.6},0).wait(1).to({rotation:49.3,x:302.8,y:318.8},0).wait(1).to({rotation:49.1,x:303.7,y:319},0).wait(1).to({rotation:48.8,x:304.8,y:319.3},0).wait(1).to({rotation:48.5,x:306,y:319.5},0).wait(1).to({rotation:48.2,x:307.3,y:319.8},0).wait(1).to({rotation:47.9,x:308.6,y:320.1},0).wait(1).to({rotation:47.5,x:310.2,y:320.4},0).wait(1).to({rotation:47.1,x:311.8,y:320.7},0).wait(1).to({rotation:46.7,x:313.5,y:321},0).wait(1).to({rotation:46.3,x:315.4,y:321.3},0).wait(1).to({rotation:45.8,x:317.5,y:321.6},0).wait(1).to({rotation:45.3,x:319.6,y:321.9},0).wait(1).to({rotation:44.7,x:321.9,y:322.3},0).wait(1).to({rotation:44.2,x:324.3,y:322.6},0).wait(1).to({rotation:43.6,x:326.9,y:323},0).wait(1).to({rotation:42.9,x:329.6,y:323.3},0).wait(1).to({rotation:42.2,x:332.4,y:323.6},0).wait(1).to({rotation:41.5,x:335.4,y:323.9},0).wait(1).to({rotation:40.8,x:338.6,y:324.1},0).wait(1).to({rotation:40,x:341.9,y:324.3},0).wait(1).to({rotation:39.2,x:345.3,y:324.5},0).wait(1).to({rotation:38.3,x:348.9,y:324.6},0).wait(1).to({rotation:37.5,x:352.6,y:324.7},0).wait(1).to({rotation:36.5,x:356.5,y:324.8},0).wait(1).to({rotation:35.6,x:360.6,y:324.7},0).wait(1).to({rotation:34.6,x:364.7,y:324.6},0).wait(1).to({rotation:33.6,x:369,y:324.4},0).wait(1).to({rotation:32.6,x:373.4,y:324.2},0).wait(1).to({rotation:31.5,x:377.9,y:323.8},0).wait(1).to({rotation:30.4,x:382.6,y:323.3},0).wait(1).to({rotation:29.3,x:387.3,y:322.7},0).wait(1).to({rotation:28.2,x:392,y:322.1},0).wait(1).to({rotation:27,x:396.8,y:321.3},0).wait(1).to({rotation:25.9,x:401.6,y:320.5},0).wait(1).to({rotation:24.7,x:406.4,y:319.5},0).wait(1).to({rotation:23.6,x:411.2,y:318.4},0).wait(1).to({rotation:22.4,x:416.1,y:317.3},0).wait(1).to({rotation:21.3,x:420.8,y:316.1},0).wait(1).to({rotation:20.1,x:425.4,y:314.7},0).wait(1).to({rotation:19,x:430,y:313.3},0).wait(1).to({rotation:17.9,x:434.5,y:311.8},0).wait(1).to({rotation:16.8,x:438.9,y:310.3},0).wait(1).to({rotation:15.7,x:443.1,y:308.7},0).wait(1).to({rotation:14.7,x:447.2,y:307.1},0).wait(1).to({rotation:13.7,x:451.1,y:305.5},0).wait(1).to({rotation:12.7,x:454.9,y:303.9},0).wait(1).to({rotation:11.8,x:458.5,y:302.2},0).wait(1).to({rotation:10.9,x:462,y:300.6},0).wait(1).to({rotation:10,x:465.2,y:299},0).wait(1).to({rotation:9.2,x:468.3,y:297.4},0).wait(1).to({rotation:8.4,x:471.3,y:295.9},0).wait(1).to({rotation:7.7,x:474,y:294.4},0).wait(1).to({rotation:7,x:476.7,y:292.9},0).wait(1).to({rotation:6.3,x:479.1,y:291.5},0).wait(1).to({rotation:5.7,x:481.4,y:290.1},0).wait(1).to({rotation:5.1,x:483.6,y:288.8},0).wait(1).to({rotation:4.6,x:485.5,y:287.6},0).wait(1).to({rotation:4,x:487.4,y:286.4},0).wait(1).to({rotation:3.6,x:489.1,y:285.3},0).wait(1).to({rotation:3.1,x:490.6,y:284.3},0).wait(1).to({rotation:2.7,x:492.1,y:283.4},0).wait(1).to({rotation:2.4,x:493.4,y:282.5},0).wait(1).to({rotation:2,x:494.6,y:281.7},0).wait(1).to({rotation:1.7,x:495.6,y:280.9},0).wait(1).to({rotation:1.4,x:496.6,y:280.3},0).wait(1).to({rotation:1.2,x:497.4,y:279.7},0).wait(1).to({rotation:1,x:498.2,y:279.1},0).wait(1).to({rotation:0.8,x:498.8,y:278.7},0).wait(1).to({rotation:0.6,x:499.4,y:278.3},0).wait(1).to({rotation:0.5,x:499.8,y:277.9},0).wait(1).to({rotation:0.4,x:500.2,y:277.7},0).wait(1).to({rotation:0.3,x:500.5,y:277.5},0).wait(1).to({x:500.7,y:277.3},0).wait(1).to({rotation:0.2,x:500.8,y:277.2},0).wait(1).to({regX:-178.6,regY:-240.3,x:356.2,y:81.2},0).wait(1).to({regX:0.3,regY:0.3,x:500.8,y:277.2},0).wait(1).to({rotation:0.3,x:500.7,y:277.3},0).wait(1).to({x:500.5,y:277.5},0).wait(1).to({rotation:0.4,x:500.2,y:277.7},0).wait(1).to({rotation:0.5,x:499.8,y:278},0).wait(1).to({rotation:0.7,x:499.3,y:278.4},0).wait(1).to({rotation:0.8,x:498.7,y:278.8},0).wait(1).to({rotation:1,x:498,y:279.3},0).wait(1).to({rotation:1.3,x:497.2,y:279.9},0).wait(1).to({rotation:1.5,x:496.2,y:280.5},0).wait(1).to({rotation:1.8,x:495.2,y:281.2},0).wait(1).to({rotation:2.2,x:494.1,y:282},0).wait(1).to({rotation:2.5,x:492.8,y:282.9},0).wait(1).to({rotation:2.9,x:491.4,y:283.8},0).wait(1).to({rotation:3.4,x:489.9,y:284.8},0).wait(1).to({rotation:3.8,x:488.2,y:285.9},0).wait(1).to({rotation:4.3,x:486.4,y:287.1},0).wait(1).to({rotation:4.9,x:484.5,y:288.3},0).wait(1).to({rotation:5.5,x:482.4,y:289.6},0).wait(1).to({rotation:6.1,x:480.1,y:291},0).wait(1).to({rotation:6.7,x:477.7,y:292.4},0).wait(1).to({rotation:7.4,x:475.1,y:293.8},0).wait(1).to({rotation:8.1,x:472.4,y:295.3},0).wait(1).to({rotation:8.9,x:469.5,y:296.8},0).wait(1).to({rotation:9.7,x:466.5,y:298.4},0).wait(1).to({rotation:10.5,x:463.3,y:300},0).wait(1).to({rotation:11.4,x:460,y:301.6},0).wait(1).to({rotation:12.3,x:456.5,y:303.2},0).wait(1).to({rotation:13.3,x:452.8,y:304.8},0).wait(1).to({rotation:14.2,x:449,y:306.4},0).wait(1).to({rotation:15.2,x:445.1,y:308},0).wait(1).to({rotation:16.3,x:441,y:309.6},0).wait(1).to({rotation:17.3,x:436.8,y:311.1},0).wait(1).to({rotation:18.4,x:432.5,y:312.6},0).wait(1).to({rotation:19.5,x:428.1,y:314},0).wait(1).to({rotation:20.6,x:423.6,y:315.3},0).wait(1).to({rotation:21.7,x:419,y:316.6},0).wait(1).to({rotation:22.8,x:414.4,y:317.7},0).wait(1).to({rotation:23.9,x:409.7,y:318.8},0).wait(1).to({rotation:25.1,x:405,y:319.8},0).wait(1).to({rotation:26.2,x:400.4,y:320.7},0).wait(1).to({rotation:27.3,x:395.7,y:321.5},0).wait(1).to({rotation:28.4,x:391.1,y:322.2},0).wait(1).to({rotation:29.5,x:386.5,y:322.9},0).wait(1).to({rotation:30.6,x:382,y:323.4},0).wait(1).to({rotation:31.6,x:377.5,y:323.9},0).wait(1).to({rotation:32.6,x:373.1,y:324.2},0).wait(1).to({rotation:33.7,x:368.9,y:324.5},0).wait(1).to({rotation:34.6,x:364.7,y:324.6},0).wait(1).to({rotation:35.6,x:360.6,y:324.7},0).wait(1).to({rotation:36.5,x:356.7,y:324.8},0).wait(1).to({rotation:37.4,x:352.9},0).wait(1).to({rotation:38.3,x:349.2,y:324.7},0).wait(1).to({rotation:39.1,x:345.7,y:324.6},0).wait(1).to({rotation:39.9,x:342.3,y:324.4},0).wait(1).to({rotation:40.7,x:339.1,y:324.2},0).wait(1).to({rotation:41.4,x:335.9,y:323.9},0).wait(1).to({rotation:42.1,x:333,y:323.7},0).wait(1).to({rotation:42.8,x:330.1,y:323.4},0).wait(1).to({rotation:43.4,x:327.4,y:323.1},0).wait(1).to({rotation:44,x:324.9,y:322.7},0).wait(1).to({rotation:44.6,x:322.4,y:322.4},0).wait(1).to({rotation:45.2,x:320.1,y:322},0).wait(1).to({rotation:45.7,x:318,y:321.7},0).wait(1).to({rotation:46.2,x:315.9,y:321.4},0).wait(1).to({rotation:46.6,x:314,y:321.1},0).wait(1).to({rotation:47,x:312.2,y:320.8},0).wait(1).to({rotation:47.4,x:310.6,y:320.5},0).wait(1).to({rotation:47.8,x:309,y:320.2},0).wait(1).to({rotation:48.1,x:307.6,y:319.9},0).wait(1).to({rotation:48.5,x:306.3,y:319.6},0).wait(1).to({rotation:48.7,x:305.1,y:319.4},0).wait(1).to({rotation:49,x:304,y:319.1},0).wait(1).to({rotation:49.3,x:303,y:318.9},0).wait(1).to({rotation:49.5,x:302.1,y:318.7},0).wait(1).to({rotation:49.7,x:301.3,y:318.5},0).wait(1).to({rotation:49.8,x:300.6,y:318.3},0).wait(1).to({rotation:50,x:300,y:318.2},0).wait(1).to({rotation:50.1,x:299.4,y:318.1},0).wait(1).to({rotation:50.2,x:299,y:318},0).wait(1).to({rotation:50.3,x:298.6,y:317.9},0).wait(1).to({rotation:50.4,x:298.4,y:317.8},0).wait(1).to({x:298.2},0).wait(1).to({x:298.1,y:317.7},0).wait(1).to({regX:-178.5,regY:-240.3,x:356.3,y:81.3},0).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#991C2B").ss(0.3).p("AkEkjIAGHrIADA7IAXA6IAwgNQA7gOA7gGQC5gTBmBEIAjhRIgVgmIAPnZIg/g4QgvAlhJAQQiRAhiBhpg");
	this.shape.setTransform(346.9,72.8,0.334,0.334);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E22B2B").s().p("Ag+EdQg6AGg8AOIgwANIgXg6IgDg7IgGnsIA5gqQCBBoCRggQBJgQAwglIA+A4IgPHZIAVAmIgjBRQhlhFi6AUg");
	this.shape_1.setTransform(346.9,72.8,0.334,0.334);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#991C2B").ss(0.3).p("Aq+g1IAVAmICKAqQCsAxCsAXQImBLFbjKQhHgtiagbQk1g1mdBgQhTAJhiAFQjFAKhLgUg");
	this.shape_2.setTransform(378.4,81.8,0.334,0.334);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#760000").s().p("AjEBjQitgXisgxIiJgqIgWgmQBLAUDFgKQBigFBUgJQGdhgE0A1QCaAbBIAtQj+CUlqAAQiFAAiUgVg");
	this.shape_3.setTransform(378.3,81.8,0.334,0.334);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#991C2B").ss(0.3).p("AK1gnIADA6QjQBLkVAbQoqA2lZjwIBRgUQBmgXBngLQFIglDVBXIA5AMQBGAOBGAIQDfAcCGggg");
	this.shape_4.setTransform(315.2,80.8,0.334,0.334);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#760000").s().p("Aq0hBIBSgUQBlgXBngLQFJglDVBXIA4AMQBGAOBGAIQDgAcCFggIAEA6QjQBLkWAbQhkAKheAAQmmAAkbjEg");
	this.shape_5.setTransform(315.3,80.8,0.334,0.334);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#991C2B").ss(0.3).p("A4gnrIAzg3QBCg8BQgdQEBhcEpEAIDwDZQD+DaA+AJIA4gqIAhAYQApAbAuAOQCQAuCDhcIA+A3IAMgEQAUgKAtgfQCOhlFLkVIBLg+QBdhEBcgkQEnhyCuEGIBsOsQgdAVg5AbQhyA2iQAbQnKBYpCjMIgjBRIhRgkQgogMhDgEQiEgIiGAsIgWg6QjVBLkYAbQowA2lNjyg");
	this.shape_6.setTransform(346.9,64,0.334,0.334);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E22B2B").s().p("AEDIFIgjBRIhRgkQgogMhDgEQiEgIiGAsIgWg6QjVBLkYAbQowA2lNjyIBGuhIAzg3QBCg8BQgdQEBhcEpEAIDwDZQD+DaA+AJIA4gqIAhAYQApAbAuAOQCQAuCDhcIA+A3IAMgEQAUgKAtgfQCOhlFLkVIBLg+QBdhEBcgkQEnhyCuEGIBsOsQgdAVg5AbQhyA2iQAbQiKAbiUAAQlaAAmUiPg");
	this.shape_7.setTransform(346.9,64,0.334,0.334);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#991C2B").ss(0.3).p("AuTm3MgqfgANIAApvITAgGMBelAAGIAAKJMgr0AAEICLB2QCpCRCQCHQHOGyAuC2IpGi7IAeDnQAcEIgDCtIyL3YIj/ANI0GWnIBBqPIpHCpQA3hcCdiqQE7lSIEmGg");
	this.shape_8.setTransform(348.5,100.6,0.334,0.334);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E24040").s().p("ABlmjIj/ANI0GWnIBBqOIpGCoQA2hbCdiqQE7lSIFmHMgqggAMIAApvITBgHMBekAAHIAAKJMgr0AAEICLB1QCpCRCQCIQHNGxAvC3IpGi7IAeDmQAcEJgDCtg");
	this.shape_9.setTransform(348.5,100.4,0.334,0.334);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#991C2B").ss(0.3).p("EAFEAkhIqHAAMAAAhJBIKHAAg");
	this.shape_10.setTransform(345.9,78.1,0.334,0.334);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E24040").s().p("EgFDAkhMAAAhJBIKIAAMAAABJBg");
	this.shape_11.setTransform(345.9,78.1,0.334,0.334);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5E5E5").s().p("Eg0YAkhQh1AAhShSQhThTAAh1MAAAhANQAAh0BThTQBShTB1AAMBoxAAAQB1AABSBTQBTBTAAB0MAAABANQAAB1hTBTQhSBSh1AAg");
	this.shape_12.setTransform(348.5,78.1,0.334,0.334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},170).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(461.6,304,334.4,530.5);
// library properties:
lib.properties = {
	width: 650,
	height: 610,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;