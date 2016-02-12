/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS v0.19.18
	 */
	(function() {
	function bootstrap() {(function(__global) {

	  var isWorker = typeof window == 'undefined' && typeof self != 'undefined' && typeof importScripts != 'undefined';
	  var isBrowser = typeof window != 'undefined' && typeof document != 'undefined';
	  var isWindows = typeof process != 'undefined' && typeof process.platform != 'undefined' && !!process.platform.match(/^win/);

	  if (!__global.console)
	    __global.console = { assert: function() {} };

	  // IE8 support
	  var indexOf = Array.prototype.indexOf || function(item) {
	    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
	      if (this[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  };
	  
	  var defineProperty;
	  (function () {
	    try {
	      if (!!Object.defineProperty({}, 'a', {}))
	        defineProperty = Object.defineProperty;
	    }
	    catch (e) {
	      defineProperty = function(obj, prop, opt) {
	        try {
	          obj[prop] = opt.value || opt.get.call(obj);
	        }
	        catch(e) {}
	      }
	    }
	  })();

	  function addToError(err, msg) {
	    var newErr;
	    if (err instanceof Error) {
	      newErr = new Error(err.message, err.fileName, err.lineNumber);
	      if (isBrowser) {
	        newErr.message = err.message + '\n\t' + msg;
	        newErr.stack = err.stack;
	      }
	      else {
	        // node errors only look correct with the stack modified
	        newErr.message = err.message;
	        newErr.stack = err.stack + '\n\t' + msg;
	      }
	    }
	    else {
	      newErr = err + '\n\t' + msg;
	    }
	      
	    return newErr;
	  }

	  function __eval(source, debugName, context) {
	    try {
	      new Function(source).call(context);
	    }
	    catch(e) {
	      throw addToError(e, 'Evaluating ' + debugName);
	    }
	  }

	  var baseURI;
	  // environent baseURI detection
	  if (typeof document != 'undefined' && document.getElementsByTagName) {
	    baseURI = document.baseURI;

	    if (!baseURI) {
	      var bases = document.getElementsByTagName('base');
	      baseURI = bases[0] && bases[0].href || window.location.href;
	    }

	    // sanitize out the hash and querystring
	    baseURI = baseURI.split('#')[0].split('?')[0];
	    baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
	  }
	  else if (typeof process != 'undefined' && process.cwd) {
	    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
	    if (isWindows)
	      baseURI = baseURI.replace(/\\/g, '/');
	  }
	  else if (typeof location != 'undefined') {
	    baseURI = __global.location.href;
	  }
	  else {
	    throw new TypeError('No environment baseURI');
	  }

	  var URL = __global.URLPolyfill || __global.URL;
	/*
	*********************************************************************************************

	  Dynamic Module Loader Polyfill

	    - Implemented exactly to the former 2014-08-24 ES6 Specification Draft Rev 27, Section 15
	      http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27

	    - Functions are commented with their spec numbers, with spec differences commented.

	    - Spec bugs are commented in this code with links.

	    - Abstract functions have been combined where possible, and their associated functions
	      commented.

	    - Realm implementation is entirely omitted.

	*********************************************************************************************
	*/

	function Module() {}
	// http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag
	defineProperty(Module.prototype, 'toString', {
	  value: function() {
	    return 'Module';
	  }
	});
	function Loader(options) {
	  this._loader = {
	    loaderObj: this,
	    loads: [],
	    modules: {},
	    importPromises: {},
	    moduleRecords: {}
	  };

	  // 26.3.3.6
	  defineProperty(this, 'global', {
	    get: function() {
	      return __global;
	    }
	  });

	  // 26.3.3.13 realm not implemented
	}

	(function() {

	// Some Helpers

	// logs a linkset snapshot for debugging
	/* function snapshot(loader) {
	  console.log('---Snapshot---');
	  for (var i = 0; i < loader.loads.length; i++) {
	    var load = loader.loads[i];
	    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

	    for (var j = 0; j < load.linkSets.length; j++) {
	      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
	    }
	    console.log(linkSetLog);
	  }
	  console.log('');
	}
	function logloads(loads) {
	  var log = '';
	  for (var k = 0; k < loads.length; k++)
	    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
	  return log;
	} */


	/* function checkInvariants() {
	  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

	  var loads = System._loader.loads;
	  var linkSets = [];

	  for (var i = 0; i < loads.length; i++) {
	    var load = loads[i];
	    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

	    for (var j = 0; j < load.linkSets.length; j++) {
	      var linkSet = load.linkSets[j];

	      for (var k = 0; k < linkSet.loads.length; k++)
	        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

	      if (linkSets.indexOf(linkSet) == -1)
	        linkSets.push(linkSet);
	    }
	  }

	  for (var i = 0; i < loads.length; i++) {
	    var load = loads[i];
	    for (var j = 0; j < linkSets.length; j++) {
	      var linkSet = linkSets[j];

	      if (linkSet.loads.indexOf(load) != -1)
	        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

	      if (load.linkSets.indexOf(linkSet) != -1)
	        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
	    }
	  }

	  for (var i = 0; i < linkSets.length; i++) {
	    var linkSet = linkSets[i];
	    for (var j = 0; j < linkSet.loads.length; j++) {
	      var load = linkSet.loads[j];

	      for (var k = 0; k < load.dependencies.length; k++) {
	        var depName = load.dependencies[k].value;
	        var depLoad;
	        for (var l = 0; l < loads.length; l++) {
	          if (loads[l].name != depName)
	            continue;
	          depLoad = loads[l];
	          break;
	        }

	        // loading records are allowed not to have their dependencies yet
	        // if (load.status != 'loading')
	        //  console.assert(depLoad, 'depLoad found');

	        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
	      }
	    }
	  }
	} */

	  // 15.2.3 - Runtime Semantics: Loader State

	  // 15.2.3.11
	  function createLoaderLoad(object) {
	    return {
	      // modules is an object for ES5 implementation
	      modules: {},
	      loads: [],
	      loaderObj: object
	    };
	  }

	  // 15.2.3.2 Load Records and LoadRequest Objects

	  // 15.2.3.2.1
	  function createLoad(name) {
	    return {
	      status: 'loading',
	      name: name,
	      linkSets: [],
	      dependencies: [],
	      metadata: {}
	    };
	  }

	  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

	  // 15.2.4

	  // 15.2.4.1
	  function loadModule(loader, name, options) {
	    return new Promise(asyncStartLoadPartwayThrough({
	      step: options.address ? 'fetch' : 'locate',
	      loader: loader,
	      moduleName: name,
	      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
	      moduleMetadata: options && options.metadata || {},
	      moduleSource: options.source,
	      moduleAddress: options.address
	    }));
	  }

	  // 15.2.4.2
	  function requestLoad(loader, request, refererName, refererAddress) {
	    // 15.2.4.2.1 CallNormalize
	    return new Promise(function(resolve, reject) {
	      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
	    })
	    // 15.2.4.2.2 GetOrCreateLoad
	    .then(function(name) {
	      var load;
	      if (loader.modules[name]) {
	        load = createLoad(name);
	        load.status = 'linked';
	        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
	        load.module = loader.modules[name];
	        return load;
	      }

	      for (var i = 0, l = loader.loads.length; i < l; i++) {
	        load = loader.loads[i];
	        if (load.name != name)
	          continue;
	        console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded');
	        return load;
	      }

	      load = createLoad(name);
	      loader.loads.push(load);

	      proceedToLocate(loader, load);

	      return load;
	    });
	  }

	  // 15.2.4.3
	  function proceedToLocate(loader, load) {
	    proceedToFetch(loader, load,
	      Promise.resolve()
	      // 15.2.4.3.1 CallLocate
	      .then(function() {
	        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
	      })
	    );
	  }

	  // 15.2.4.4
	  function proceedToFetch(loader, load, p) {
	    proceedToTranslate(loader, load,
	      p
	      // 15.2.4.4.1 CallFetch
	      .then(function(address) {
	        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
	        if (load.status != 'loading')
	          return;
	        load.address = address;

	        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
	      })
	    );
	  }

	  var anonCnt = 0;

	  // 15.2.4.5
	  function proceedToTranslate(loader, load, p) {
	    p
	    // 15.2.4.5.1 CallTranslate
	    .then(function(source) {
	      if (load.status != 'loading')
	        return;

	      return Promise.resolve(loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source }))

	      // 15.2.4.5.2 CallInstantiate
	      .then(function(source) {
	        load.source = source;
	        return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
	      })

	      // 15.2.4.5.3 InstantiateSucceeded
	      .then(function(instantiateResult) {
	        if (instantiateResult === undefined) {
	          load.address = load.address || '<Anonymous Module ' + ++anonCnt + '>';

	          // instead of load.kind, use load.isDeclarative
	          load.isDeclarative = true;
	          return transpile.call(loader.loaderObj, load)
	          .then(function(transpiled) {
	            // Hijack System.register to set declare function
	            var curSystem = __global.System;
	            var curRegister = curSystem.register;
	            curSystem.register = function(name, deps, declare) {
	              if (typeof name != 'string') {
	                declare = deps;
	                deps = name;
	              }
	              // store the registered declaration as load.declare
	              // store the deps as load.deps
	              load.declare = declare;
	              load.depsList = deps;
	            }
	            // empty {} context is closest to undefined 'this' we can get
	            __eval(transpiled, load.address, {});
	            curSystem.register = curRegister;
	          });
	        }
	        else if (typeof instantiateResult == 'object') {
	          load.depsList = instantiateResult.deps || [];
	          load.execute = instantiateResult.execute;
	          load.isDeclarative = false;
	        }
	        else
	          throw TypeError('Invalid instantiate return value');
	      })
	      // 15.2.4.6 ProcessLoadDependencies
	      .then(function() {
	        load.dependencies = [];
	        var depsList = load.depsList;

	        var loadPromises = [];
	        for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
	          loadPromises.push(
	            requestLoad(loader, request, load.name, load.address)

	            // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
	            .then(function(depLoad) {

	              // adjusted from spec to maintain dependency order
	              // this is due to the System.register internal implementation needs
	              load.dependencies[index] = {
	                key: request,
	                value: depLoad.name
	              };

	              if (depLoad.status != 'linked') {
	                var linkSets = load.linkSets.concat([]);
	                for (var i = 0, l = linkSets.length; i < l; i++)
	                  addLoadToLinkSet(linkSets[i], depLoad);
	              }

	              // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
	              // snapshot(loader);
	            })
	          );
	        })(depsList[i], i);

	        return Promise.all(loadPromises);
	      })

	      // 15.2.4.6.2 LoadSucceeded
	      .then(function() {
	        // console.log('LoadSucceeded ' + load.name);
	        // snapshot(loader);

	        console.assert(load.status == 'loading', 'is loading');

	        load.status = 'loaded';

	        var linkSets = load.linkSets.concat([]);
	        for (var i = 0, l = linkSets.length; i < l; i++)
	          updateLinkSetOnLoad(linkSets[i], load);
	      });
	    })
	    // 15.2.4.5.4 LoadFailed
	    ['catch'](function(exc) {
	      load.status = 'failed';
	      load.exception = exc;

	      var linkSets = load.linkSets.concat([]);
	      for (var i = 0, l = linkSets.length; i < l; i++) {
	        linkSetFailed(linkSets[i], load, exc);
	      }

	      console.assert(load.linkSets.length == 0, 'linkSets not removed');
	    });
	  }

	  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

	  // 15.2.4.7.1
	  function asyncStartLoadPartwayThrough(stepState) {
	    return function(resolve, reject) {
	      var loader = stepState.loader;
	      var name = stepState.moduleName;
	      var step = stepState.step;

	      if (loader.modules[name])
	        throw new TypeError('"' + name + '" already exists in the module table');

	      // adjusted to pick up existing loads
	      var existingLoad;
	      for (var i = 0, l = loader.loads.length; i < l; i++) {
	        if (loader.loads[i].name == name) {
	          existingLoad = loader.loads[i];

	          if (step == 'translate' && !existingLoad.source) {
	            existingLoad.address = stepState.moduleAddress;
	            proceedToTranslate(loader, existingLoad, Promise.resolve(stepState.moduleSource));
	          }

	          // a primary load -> use that existing linkset if it is for the direct load here
	          // otherwise create a new linkset unit
	          if (existingLoad.linkSets.length && existingLoad.linkSets[0].loads[0].name == existingLoad.name)
	            return existingLoad.linkSets[0].done.then(function() {
	              resolve(existingLoad);
	            });
	        }
	      }

	      var load = existingLoad || createLoad(name);

	      load.metadata = stepState.moduleMetadata;

	      var linkSet = createLinkSet(loader, load);

	      loader.loads.push(load);

	      resolve(linkSet.done);

	      if (step == 'locate')
	        proceedToLocate(loader, load);

	      else if (step == 'fetch')
	        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

	      else {
	        console.assert(step == 'translate', 'translate step');
	        load.address = stepState.moduleAddress;
	        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
	      }
	    }
	  }

	  // Declarative linking functions run through alternative implementation:
	  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
	  // 15.2.5.1.2 LookupExport not implemented
	  // 15.2.5.1.3 LookupModuleDependency not implemented

	  // 15.2.5.2.1
	  function createLinkSet(loader, startingLoad) {
	    var linkSet = {
	      loader: loader,
	      loads: [],
	      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
	      loadingCount: 0
	    };
	    linkSet.done = new Promise(function(resolve, reject) {
	      linkSet.resolve = resolve;
	      linkSet.reject = reject;
	    });
	    addLoadToLinkSet(linkSet, startingLoad);
	    return linkSet;
	  }
	  // 15.2.5.2.2
	  function addLoadToLinkSet(linkSet, load) {
	    if (load.status == 'failed')
	      return;

	    console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded on link set');

	    for (var i = 0, l = linkSet.loads.length; i < l; i++)
	      if (linkSet.loads[i] == load)
	        return;

	    linkSet.loads.push(load);
	    load.linkSets.push(linkSet);

	    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
	    if (load.status != 'loaded') {
	      linkSet.loadingCount++;
	    }

	    var loader = linkSet.loader;

	    for (var i = 0, l = load.dependencies.length; i < l; i++) {
	      if (!load.dependencies[i])
	        continue;

	      var name = load.dependencies[i].value;

	      if (loader.modules[name])
	        continue;

	      for (var j = 0, d = loader.loads.length; j < d; j++) {
	        if (loader.loads[j].name != name)
	          continue;

	        addLoadToLinkSet(linkSet, loader.loads[j]);
	        break;
	      }
	    }
	    // console.log('add to linkset ' + load.name);
	    // snapshot(linkSet.loader);
	  }

	  // linking errors can be generic or load-specific
	  // this is necessary for debugging info
	  function doLink(linkSet) {
	    var error = false;
	    try {
	      link(linkSet, function(load, exc) {
	        linkSetFailed(linkSet, load, exc);
	        error = true;
	      });
	    }
	    catch(e) {
	      linkSetFailed(linkSet, null, e);
	      error = true;
	    }
	    return error;
	  }

	  // 15.2.5.2.3
	  function updateLinkSetOnLoad(linkSet, load) {
	    // console.log('update linkset on load ' + load.name);
	    // snapshot(linkSet.loader);

	    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

	    linkSet.loadingCount--;

	    if (linkSet.loadingCount > 0)
	      return;

	    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
	    var startingLoad = linkSet.startingLoad;

	    // non-executing link variation for loader tracing
	    // on the server. Not in spec.
	    /***/
	    if (linkSet.loader.loaderObj.execute === false) {
	      var loads = [].concat(linkSet.loads);
	      for (var i = 0, l = loads.length; i < l; i++) {
	        var load = loads[i];
	        load.module = !load.isDeclarative ? {
	          module: _newModule({})
	        } : {
	          name: load.name,
	          module: _newModule({}),
	          evaluated: true
	        };
	        load.status = 'linked';
	        finishLoad(linkSet.loader, load);
	      }
	      return linkSet.resolve(startingLoad);
	    }
	    /***/

	    var abrupt = doLink(linkSet);

	    if (abrupt)
	      return;

	    console.assert(linkSet.loads.length == 0, 'loads cleared');

	    linkSet.resolve(startingLoad);
	  }

	  // 15.2.5.2.4
	  function linkSetFailed(linkSet, load, exc) {
	    var loader = linkSet.loader;
	    var requests;

	    checkError: 
	    if (load) {
	      if (linkSet.loads[0].name == load.name) {
	        exc = addToError(exc, 'Error loading ' + load.name);
	      }
	      else {
	        for (var i = 0; i < linkSet.loads.length; i++) {
	          var pLoad = linkSet.loads[i];
	          for (var j = 0; j < pLoad.dependencies.length; j++) {
	            var dep = pLoad.dependencies[j];
	            if (dep.value == load.name) {
	              exc = addToError(exc, 'Error loading ' + load.name + ' as "' + dep.key + '" from ' + pLoad.name);
	              break checkError;
	            }
	          }
	        }
	        exc = addToError(exc, 'Error loading ' + load.name + ' from ' + linkSet.loads[0].name);
	      }
	    }
	    else {
	      exc = addToError(exc, 'Error linking ' + linkSet.loads[0].name);
	    }


	    var loads = linkSet.loads.concat([]);
	    for (var i = 0, l = loads.length; i < l; i++) {
	      var load = loads[i];

	      // store all failed load records
	      loader.loaderObj.failed = loader.loaderObj.failed || [];
	      if (indexOf.call(loader.loaderObj.failed, load) == -1)
	        loader.loaderObj.failed.push(load);

	      var linkIndex = indexOf.call(load.linkSets, linkSet);
	      console.assert(linkIndex != -1, 'link not present');
	      load.linkSets.splice(linkIndex, 1);
	      if (load.linkSets.length == 0) {
	        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
	        if (globalLoadsIndex != -1)
	          linkSet.loader.loads.splice(globalLoadsIndex, 1);
	      }
	    }
	    linkSet.reject(exc);
	  }

	  // 15.2.5.2.5
	  function finishLoad(loader, load) {
	    // add to global trace if tracing
	    if (loader.loaderObj.trace) {
	      if (!loader.loaderObj.loads)
	        loader.loaderObj.loads = {};
	      var depMap = {};
	      load.dependencies.forEach(function(dep) {
	        depMap[dep.key] = dep.value;
	      });
	      loader.loaderObj.loads[load.name] = {
	        name: load.name,
	        deps: load.dependencies.map(function(dep){ return dep.key }),
	        depMap: depMap,
	        address: load.address,
	        metadata: load.metadata,
	        source: load.source,
	        kind: load.isDeclarative ? 'declarative' : 'dynamic'
	      };
	    }
	    // if not anonymous, add to the module table
	    if (load.name) {
	      console.assert(!loader.modules[load.name], 'load not in module table');
	      loader.modules[load.name] = load.module;
	    }
	    var loadIndex = indexOf.call(loader.loads, load);
	    if (loadIndex != -1)
	      loader.loads.splice(loadIndex, 1);
	    for (var i = 0, l = load.linkSets.length; i < l; i++) {
	      loadIndex = indexOf.call(load.linkSets[i].loads, load);
	      if (loadIndex != -1)
	        load.linkSets[i].loads.splice(loadIndex, 1);
	    }
	    load.linkSets.splice(0, load.linkSets.length);
	  }

	  function doDynamicExecute(linkSet, load, linkError) {
	    try {
	      var module = load.execute();
	    }
	    catch(e) {
	      linkError(load, e);
	      return;
	    }
	    if (!module || !(module instanceof Module))
	      linkError(load, new TypeError('Execution must define a Module instance'));
	    else
	      return module;
	  }

	  // 26.3 Loader

	  // 26.3.1.1
	  // defined at top

	  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
	  function createImportPromise(loader, name, promise) {
	    var importPromises = loader._loader.importPromises;
	    return importPromises[name] = promise.then(function(m) {
	      importPromises[name] = undefined;
	      return m;
	    }, function(e) {
	      importPromises[name] = undefined;
	      throw e;
	    });
	  }

	  Loader.prototype = {
	    // 26.3.3.1
	    constructor: Loader,
	    // 26.3.3.2
	    define: function(name, source, options) {
	      // check if already defined
	      if (this._loader.importPromises[name])
	        throw new TypeError('Module is already loading.');
	      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
	        step: 'translate',
	        loader: this._loader,
	        moduleName: name,
	        moduleMetadata: options && options.metadata || {},
	        moduleSource: source,
	        moduleAddress: options && options.address
	      })));
	    },
	    // 26.3.3.3
	    'delete': function(name) {
	      var loader = this._loader;
	      delete loader.importPromises[name];
	      delete loader.moduleRecords[name];
	      return loader.modules[name] ? delete loader.modules[name] : false;
	    },
	    // 26.3.3.4 entries not implemented
	    // 26.3.3.5
	    get: function(key) {
	      if (!this._loader.modules[key])
	        return;
	      doEnsureEvaluated(this._loader.modules[key], [], this);
	      return this._loader.modules[key].module;
	    },
	    // 26.3.3.7
	    has: function(name) {
	      return !!this._loader.modules[name];
	    },
	    // 26.3.3.8
	    'import': function(name, parentName, parentAddress) {
	      if (typeof parentName == 'object')
	        parentName = parentName.name;

	      // run normalize first
	      var loaderObj = this;

	      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
	      return Promise.resolve(loaderObj.normalize(name, parentName))
	      .then(function(name) {
	        var loader = loaderObj._loader;

	        if (loader.modules[name]) {
	          doEnsureEvaluated(loader.modules[name], [], loader._loader);
	          return loader.modules[name].module;
	        }

	        return loader.importPromises[name] || createImportPromise(loaderObj, name,
	          loadModule(loader, name, {})
	          .then(function(load) {
	            delete loader.importPromises[name];
	            return evaluateLoadedModule(loader, load);
	          }));
	      });
	    },
	    // 26.3.3.9 keys not implemented
	    // 26.3.3.10
	    load: function(name) {
	      var loader = this._loader;
	      if (loader.modules[name])
	        return Promise.resolve();
	      return loader.importPromises[name] || createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
	        step: 'locate',
	        loader: loader,
	        moduleName: name,
	        moduleMetadata: {},
	        moduleSource: undefined,
	        moduleAddress: undefined
	      }))
	      .then(function() {
	        delete loader.importPromises[name];
	      }));
	    },
	    // 26.3.3.11
	    module: function(source, options) {
	      var load = createLoad();
	      load.address = options && options.address;
	      var linkSet = createLinkSet(this._loader, load);
	      var sourcePromise = Promise.resolve(source);
	      var loader = this._loader;
	      var p = linkSet.done.then(function() {
	        return evaluateLoadedModule(loader, load);
	      });
	      proceedToTranslate(loader, load, sourcePromise);
	      return p;
	    },
	    // 26.3.3.12
	    newModule: function (obj) {
	      if (typeof obj != 'object')
	        throw new TypeError('Expected object');

	      var m = new Module();

	      var pNames = [];
	      if (Object.getOwnPropertyNames && obj != null)
	        pNames = Object.getOwnPropertyNames(obj);
	      else
	        for (var key in obj)
	          pNames.push(key);

	      for (var i = 0; i < pNames.length; i++) (function(key) {
	        defineProperty(m, key, {
	          configurable: false,
	          enumerable: true,
	          get: function () {
	            return obj[key];
	          }
	        });
	      })(pNames[i]);

	      return m;
	    },
	    // 26.3.3.14
	    set: function(name, module) {
	      if (!(module instanceof Module))
	        throw new TypeError('Loader.set(' + name + ', module) must be a module');
	      this._loader.modules[name] = {
	        module: module
	      };
	    },
	    // 26.3.3.15 values not implemented
	    // 26.3.3.16 @@iterator not implemented
	    // 26.3.3.17 @@toStringTag not implemented

	    // 26.3.3.18.1
	    normalize: function(name, referrerName, referrerAddress) {
	      return name;
	    },
	    // 26.3.3.18.2
	    locate: function(load) {
	      return load.name;
	    },
	    // 26.3.3.18.3
	    fetch: function(load) {
	    },
	    // 26.3.3.18.4
	    translate: function(load) {
	      return load.source;
	    },
	    // 26.3.3.18.5
	    instantiate: function(load) {
	    }
	  };

	  var _newModule = Loader.prototype.newModule;
	/*
	 * ES6 Module Declarative Linking Code - Dev Build Only
	 */
	  function link(linkSet, linkError) {

	    var loader = linkSet.loader;

	    if (!linkSet.loads.length)
	      return;

	    var loads = linkSet.loads.concat([]);

	    for (var i = 0; i < loads.length; i++) {
	      var load = loads[i];

	      var module = doDynamicExecute(linkSet, load, linkError);
	      if (!module)
	        return;
	      load.module = {
	        name: load.name,
	        module: module
	      };
	      load.status = 'linked';

	      finishLoad(loader, load);
	    }
	  }

	  function evaluateLoadedModule(loader, load) {
	    console.assert(load.status == 'linked', 'is linked ' + load.name);
	    return load.module.module;
	  }

	  function doEnsureEvaluated() {}

	  function transpile() {
	    throw new TypeError('ES6 transpilation is only provided in the dev module loader build.');
	  }
	})();/*
	*********************************************************************************************

	  System Loader Implementation

	    - Implemented to https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js

	    - <script type="module"> supported

	*********************************************************************************************
	*/

	var System;

	function SystemLoader() {
	  Loader.call(this);
	  this.paths = {};
	}

	// NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25
	function applyPaths(paths, name) {
	  // most specific (most number of slashes in path) match wins
	  var pathMatch = '', wildcard, maxWildcardPrefixLen = 0;

	  // check to see if we have a paths entry
	  for (var p in paths) {
	    var pathParts = p.split('*');
	    if (pathParts.length > 2)
	      throw new TypeError('Only one wildcard in a path is permitted');

	    // exact path match
	    if (pathParts.length == 1) {
	      if (name == p)
	        return paths[p];
	      
	      // support trailing / in paths rules
	      else if (name.substr(0, p.length - 1) == p.substr(0, p.length - 1) && (name.length < p.length || name[p.length - 1] == p[p.length - 1]) && paths[p][paths[p].length - 1] == '/')
	        return paths[p].substr(0, paths[p].length - 1) + (name.length > p.length ? '/' + name.substr(p.length) : '');
	    }
	    // wildcard path match
	    else {
	      var wildcardPrefixLen = pathParts[0].length;
	      if (wildcardPrefixLen >= maxWildcardPrefixLen &&
	          name.substr(0, pathParts[0].length) == pathParts[0] &&
	          name.substr(name.length - pathParts[1].length) == pathParts[1]) {
	            maxWildcardPrefixLen = wildcardPrefixLen;
	            pathMatch = p;
	            wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
	          }
	    }
	  }

	  var outPath = paths[pathMatch];
	  if (typeof wildcard == 'string')
	    outPath = outPath.replace('*', wildcard);

	  return outPath;
	}

	// inline Object.create-style class extension
	function LoaderProto() {}
	LoaderProto.prototype = Loader.prototype;
	SystemLoader.prototype = new LoaderProto();
	  var fetchTextFromURL;
	  if (typeof XMLHttpRequest != 'undefined') {
	    fetchTextFromURL = function(url, authorization, fulfill, reject) {
	      var xhr = new XMLHttpRequest();
	      var sameDomain = true;
	      var doTimeout = false;
	      if (!('withCredentials' in xhr)) {
	        // check if same domain
	        var domainCheck = /^(\w+:)?\/\/([^\/]+)/.exec(url);
	        if (domainCheck) {
	          sameDomain = domainCheck[2] === window.location.host;
	          if (domainCheck[1])
	            sameDomain &= domainCheck[1] === window.location.protocol;
	        }
	      }
	      if (!sameDomain && typeof XDomainRequest != 'undefined') {
	        xhr = new XDomainRequest();
	        xhr.onload = load;
	        xhr.onerror = error;
	        xhr.ontimeout = error;
	        xhr.onprogress = function() {};
	        xhr.timeout = 0;
	        doTimeout = true;
	      }
	      function load() {
	        fulfill(xhr.responseText);
	      }
	      function error() {
	        reject(new Error('XHR error' + (xhr.status ? ' (' + xhr.status + (xhr.statusText ? ' ' + xhr.statusText  : '') + ')' : '') + ' loading ' + url));
	      }

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) {
	          // in Chrome on file:/// URLs, status is 0
	          if (xhr.status == 0) {
	            if (xhr.responseText) {
	              load();
	            }
	            else {
	              // when responseText is empty, wait for load or error event
	              // to inform if it is a 404 or empty file
	              xhr.addEventListener('error', error);
	              xhr.addEventListener('load', load);
	            }
	          }
	          else if (xhr.status === 200) {
	            load();
	          }
	          else {
	            error();
	          }
	        }
	      };
	      xhr.open("GET", url, true);

	      if (xhr.setRequestHeader) {
	        xhr.setRequestHeader('Accept', 'application/x-es-module, */*');
	        // can set "authorization: true" to enable withCredentials only
	        if (authorization) {
	          if (typeof authorization == 'string')
	            xhr.setRequestHeader('Authorization', authorization);
	          xhr.withCredentials = true;
	        }
	      }

	      if (doTimeout) {
	        setTimeout(function() {
	          xhr.send();
	        }, 0);
	      } else {
	        xhr.send(null);
	      }
	    };
	  }
	  else if ("function" != 'undefined' && typeof process != 'undefined') {
	    var fs;
	    fetchTextFromURL = function(url, authorization, fulfill, reject) {
	      if (url.substr(0, 8) != 'file:///')
	        throw new Error('Unable to fetch "' + url + '". Only file URLs of the form file:/// allowed running in Node.');
	      fs = fs || __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	      if (isWindows)
	        url = url.replace(/\//g, '\\').substr(8);
	      else
	        url = url.substr(7);
	      return fs.readFile(url, function(err, data) {
	        if (err) {
	          return reject(err);
	        }
	        else {
	          // Strip Byte Order Mark out if it's the leading char
	          var dataString = data + '';
	          if (dataString[0] === '\ufeff')
	            dataString = dataString.substr(1);

	          fulfill(dataString);
	        }
	      });
	    };
	  }
	  else if (typeof self != 'undefined' && typeof self.fetch != 'undefined') {
	    fetchTextFromURL = function(url, authorization, fulfill, reject) {
	      var opts = {
	        headers: {'Accept': 'application/x-es-module, */*'}
	      };

	      if (authorization) {
	        if (typeof authorization == 'string')
	          opts.headers['Authorization'] = authorization;
	        opts.credentials = 'include';
	      }

	      fetch(url, opts)
	        .then(function (r) {
	          if (r.ok) {
	            return r.text();
	          } else {
	            throw new Error('Fetch error: ' + r.status + ' ' + r.statusText);
	          }
	        })
	        .then(fulfill, reject);
	    }
	  }
	  else {
	    throw new TypeError('No environment fetch API available.');
	  }

	  SystemLoader.prototype.fetch = function(load) {
	    return new Promise(function(resolve, reject) {
	      fetchTextFromURL(load.address, undefined, resolve, reject);
	    });
	  };
	/*
	 * Traceur, Babel and TypeScript transpile hook for Loader
	 */
	var transpile = (function() {

	  // use Traceur by default
	  Loader.prototype.transpiler = 'traceur';

	  function transpile(load) {
	    var self = this;

	    return Promise.resolve(__global[self.transpiler == 'typescript' ? 'ts' : self.transpiler]
	        || (self.pluginLoader || self)['import'](self.transpiler))
	    .then(function(transpiler) {
	      if (transpiler.__useDefault)
	        transpiler = transpiler['default'];

	      var transpileFunction;
	      if (transpiler.Compiler)
	        transpileFunction = traceurTranspile;
	      else if (transpiler.createLanguageService)
	        transpileFunction = typescriptTranspile;
	      else
	        transpileFunction = babelTranspile;

	      // note __moduleName will be part of the transformer meta in future when we have the spec for this
	      return '(function(__moduleName){' + transpileFunction.call(self, load, transpiler) + '\n})("' + load.name + '");\n//# sourceURL=' + load.address + '!transpiled';
	    });
	  };

	  function traceurTranspile(load, traceur) {
	    var options = this.traceurOptions || {};
	    options.modules = 'instantiate';
	    options.script = false;
	    if (options.sourceMaps === undefined)
	      options.sourceMaps = 'inline';
	    options.filename = load.address;
	    options.inputSourceMap = load.metadata.sourceMap;
	    options.moduleName = false;

	    var compiler = new traceur.Compiler(options);

	    return doTraceurCompile(load.source, compiler, options.filename);
	  }
	  function doTraceurCompile(source, compiler, filename) {
	    try {
	      return compiler.compile(source, filename);
	    }
	    catch(e) {
	      // on older versions of traceur (<0.9.3), an array of errors is thrown
	      // rather than a single error.
	      if (e.length) {
	        throw e[0];
	      }
	      throw e;
	    }
	  }

	  function babelTranspile(load, babel) {
	    var options = this.babelOptions || {};
	    options.modules = 'system';
	    if (options.sourceMap === undefined)
	      options.sourceMap = 'inline';
	    options.inputSourceMap = load.metadata.sourceMap;
	    options.filename = load.address;
	    options.code = true;
	    options.ast = false;

	    return babel.transform(load.source, options).code;
	  }

	  function typescriptTranspile(load, ts) {
	    var options = this.typescriptOptions || {};
	    options.target = options.target || ts.ScriptTarget.ES5;
	    if (options.sourceMap === undefined)
	      options.sourceMap = true;
	    if (options.sourceMap && options.inlineSourceMap !== false)
	      options.inlineSourceMap = true;

	    options.module = ts.ModuleKind.System;

	    return ts.transpile(load.source, options, load.address);
	  }

	  return transpile;
	})();
	// SystemJS Loader Class and Extension helpers

	function SystemJSLoader() {
	  SystemLoader.call(this);

	  systemJSConstructor.call(this);
	}

	// inline Object.create-style class extension
	function SystemProto() {};
	SystemProto.prototype = SystemLoader.prototype;
	SystemJSLoader.prototype = new SystemProto();
	SystemJSLoader.prototype.constructor = SystemJSLoader;

	// remove ESML instantiate
	SystemJSLoader.prototype.instantiate = function() {};

	var systemJSConstructor;

	function hook(name, hook) {
	  SystemJSLoader.prototype[name] = hook(SystemJSLoader.prototype[name] || function() {});
	}
	function hookConstructor(hook) {
	  systemJSConstructor = hook(systemJSConstructor || function() {});
	}

	function dedupe(deps) {
	  var newDeps = [];
	  for (var i = 0, l = deps.length; i < l; i++)
	    if (indexOf.call(newDeps, deps[i]) == -1)
	      newDeps.push(deps[i])
	  return newDeps;
	}

	function group(deps) {
	  var names = [];
	  var indices = [];
	  for (var i = 0, l = deps.length; i < l; i++) {
	    var index = indexOf.call(names, deps[i]);
	    if (index === -1) {
	      names.push(deps[i]);
	      indices.push([i]);
	    }
	    else {
	      indices[index].push(i);
	    }
	  }
	  return { names: names, indices: indices };
	}

	var getOwnPropertyDescriptor = true;
	try {
	  Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
	}
	catch(e) {
	  getOwnPropertyDescriptor = false;
	}

	// converts any module.exports object into an object ready for SystemJS.newModule
	function getESModule(exports) {
	  var esModule = {};
	  // don't trigger getters/setters in environments that support them
	  if (typeof exports == 'object' || typeof exports == 'function') {
	    if (getOwnPropertyDescriptor) {
	      var d;
	      for (var p in exports)
	        if (d = Object.getOwnPropertyDescriptor(exports, p))
	          defineProperty(esModule, p, d);
	    }
	    else {
	      var hasOwnProperty = exports && exports.hasOwnProperty;
	      for (var p in exports) {
	        if (!hasOwnProperty || exports.hasOwnProperty(p))
	          esModule[p] = exports[p];
	      }
	    }
	  }
	  esModule['default'] = exports;
	  defineProperty(esModule, '__useDefault', {
	    value: true
	  });
	  return esModule;
	}

	function extend(a, b, prepend) {
	  for (var p in b) {
	    if (!prepend || !(p in a))
	      a[p] = b[p];
	  }
	  return a;
	}

	// package configuration options
	var packageProperties = ['main', 'format', 'defaultExtension', 'meta', 'map', 'basePath', 'depCache'];

	// meta first-level extends where:
	// array + array appends
	// object + object extends
	// other properties replace
	function extendMeta(a, b, prepend) {
	  for (var p in b) {
	    var val = b[p];
	    if (!(p in a))
	      a[p] = val;
	    else if (val instanceof Array && a[p] instanceof Array)
	      a[p] = [].concat(prepend ? val : a[p]).concat(prepend ? a[p] : val);
	    else if (typeof val == 'object' && val !== null && typeof a[p] == 'object')
	      a[p] = extend(extend({}, a[p]), val, prepend);
	    else if (!prepend)
	      a[p] = val;
	  }
	}

	function warn(msg) {
	  if (this.warnings && typeof console != 'undefined' && console.warn)
	    console.warn(msg);
	}// we define a __exec for globally-scoped execution
	// used by module format implementations
	var __exec;

	(function() {

	  // System clobbering protection (mostly for Traceur)
	  var curSystem;
	  var callCounter = 0;
	  var curLoad;
	  function preExec(loader, load) {
	    if (callCounter++ == 0)
	      curSystem = __global.System;
	    __global.System = __global.SystemJS = loader;
	    curLoad = load;
	  }
	  function postExec() {
	    if (--callCounter == 0)
	      __global.System = __global.SystemJS = curSystem;
	    curLoad = undefined;
	  }

	  // System.register, System.registerDynamic, AMD define pipeline
	  // if currently evalling code here, immediately reduce the registered entry against the load record
	  hook('pushRegister_', function() {
	    return function(register) {
	      if (!curLoad)
	        return false;

	      this.reduceRegister_(curLoad, register);
	      return true;
	    };
	  });

	  var hasBtoa = typeof btoa != 'undefined';

	  // used to support leading #!/usr/bin/env in scripts as supported in Node
	  var hashBangRegEx = /^\#\!.*/;

	  function getSource(load) {
	    var lastLineIndex = load.source.lastIndexOf('\n');

	    // wrap ES formats with a System closure for System global encapsulation
	    var wrap = load.metadata.format == 'esm' || load.metadata.format == 'register' || load.metadata.bundle;

	    return (wrap ? '(function(System) {' : '') + (load.metadata.format == 'cjs' ? load.source.replace(hashBangRegEx, '') : load.source) + (wrap ? '\n})(System);' : '')
	        // adds the sourceURL comment if not already present
	        + (load.source.substr(lastLineIndex, 15) != '\n//# sourceURL=' 
	          ? '\n//# sourceURL=' + load.address + (load.metadata.sourceMap ? '!transpiled' : '') : '')
	        // add sourceMappingURL if load.metadata.sourceMap is set
	        + (load.metadata.sourceMap && hasBtoa && 
	          '\n//# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(load.metadata.sourceMap))) || '')
	  }

	  function evalExec(load) {
	    if (load.metadata.integrity)
	      throw new TypeError('Subresource integrity checking is not supported in Web Workers or Chrome Extensions.');
	    try {
	      preExec(this, load);
	      new Function(getSource(load)).call(__global);
	      postExec();
	    }
	    catch(e) {
	      postExec();
	      throw addToError(e, 'Evaluating ' + load.address);
	    }
	  }

	  // use script injection eval to get identical global script behaviour
	  if (typeof document != 'undefined' && document.getElementsByTagName) {
	    var head;

	    var scripts = document.getElementsByTagName('script');
	    $__curScript = scripts[scripts.length - 1];
	    __exec = function(load) {
	      if (!this.globalEvaluationScope)
	        return evalExec.call(this, load);

	      if (!head)
	        head = document.head || document.body || document.documentElement;

	      var script = document.createElement('script');
	      script.text = getSource(load);
	      var onerror = window.onerror;
	      var e;
	      window.onerror = function(_e) {
	        e = addToError(_e, 'Evaluating ' + load.address);
	      }
	      preExec(this, load);

	      if (load.metadata.integrity)
	        script.setAttribute('integrity', load.metadata.integrity);
	      if (load.metadata.nonce)
	        script.setAttribute('nonce', load.metadata.nonce);

	      head.appendChild(script);
	      head.removeChild(script);
	      postExec();
	      window.onerror = onerror;
	      if (e)
	        throw e;
	    };
	  }

	  // global scoped eval for node
	  else if (true) {
	    var vmModule = 'vm';
	    var vm = __webpack_require__(25)(vmModule);
	    __exec = function vmExec(load) {
	      if (!this.globalEvaluationScope)
	        return evalExec.call(this, load);

	      if (load.metadata.integrity)
	        throw new TypeError('Subresource integrity checking is unavailable in Node.');
	      try {
	        preExec(this, load);
	        vm.runInThisContext(getSource(load));
	        postExec();
	      }
	      catch(e) {
	        postExec();
	        throw addToError(e.toString(), 'Evaluating ' + load.address);
	      }
	    };
	  }
	  else {
	    __exec = evalExec;
	  }

	})();var absURLRegEx = /^[^\/]+:\/\//;

	function readMemberExpression(p, value) {
	  var pParts = p.split('.');
	  while (pParts.length)
	    value = value[pParts.shift()];
	  return value;
	}

	var baseURLCache = {};
	function getBaseURLObj() {
	  if (baseURLCache[this.baseURL])
	    return baseURLCache[this.baseURL];

	  // normalize baseURL if not already
	  if (this.baseURL[this.baseURL.length - 1] != '/')
	    this.baseURL += '/';

	  var baseURL = new URL(this.baseURL, baseURI);

	  this.baseURL = baseURL.href;

	  return (baseURLCache[this.baseURL] = baseURL);
	}

	function getMapMatch(map, name) {
	  var bestMatch, bestMatchLength = 0;

	  for (var p in map) {
	    if (name.substr(0, p.length) == p && (name.length == p.length || name[p.length] == '/')) {
	      var curMatchLength = p.split('/').length;
	      if (curMatchLength <= bestMatchLength)
	        continue;
	      bestMatch = p;
	      bestMatchLength = curMatchLength;
	    }
	  }

	  return bestMatch;
	}

	function setProduction(isProduction) {
	  this.set('@system-env', this.newModule({
	    browser: isBrowser,
	    node: !!this._nodeRequire,
	    production: isProduction
	  }));
	}

	var baseURIObj = new URL(baseURI);

	hookConstructor(function(constructor) {
	  return function() {
	    constructor.call(this);

	    // support baseURL
	    this.baseURL = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);

	    // support map and paths
	    this.map = {};
	    this.paths = {};

	    // global behaviour flags
	    this.warnings = false;
	    this.defaultJSExtensions = false;
	    this.globalEvaluationScope = true;
	    this.pluginFirst = false;

	    // by default load ".json" files as json
	    // leading * meta doesn't need normalization
	    // NB add this in next breaking release
	    // this.meta['*.json'] = { format: 'json' };

	    // Default settings for globalEvaluationScope:
	    // Disabled for WebWorker, Chrome Extensions and jsdom
	    if (isWorker 
	        || isBrowser && window.chrome && window.chrome.extension 
	        || isBrowser && navigator.userAgent.match(/^Node\.js/))
	      this.globalEvaluationScope = false;

	    // support the empty module, as a concept
	    this.set('@empty', this.newModule({}));

	    setProduction.call(this, false);
	  };
	});

	// include the node require since we're overriding it
	if ("function" != 'undefined' && typeof process != 'undefined' && !process.browser)
	  SystemJSLoader.prototype._nodeRequire = __webpack_require__(25);

	var nodeCoreModules = ['assert', 'buffer', 'child_process', 'cluster', 'console', 'constants', 
	    'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'module', 'net', 'os', 'path', 
	    'process', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'timers', 
	    'tls', 'tty', 'url', 'util', 'vm', 'zlib'];

	/*
	  Core SystemJS Normalization

	  If a name is relative, we apply URL normalization to the page
	  If a name is an absolute URL, we leave it as-is

	  Plain names (neither of the above) run through the map and paths
	  normalization phases.

	  The paths normalization phase applies last (paths extension), which
	  defines the `decanonicalize` function and normalizes everything into
	  a URL.
	 */
	hook('normalize', function(normalize) {
	  return function(name, parentName) {
	    // first run map config
	    if (name[0] != '.' && name[0] != '/' && !name.match(absURLRegEx)) {
	      var mapMatch = getMapMatch(this.map, name);
	      if (mapMatch)
	        name = this.map[mapMatch] + name.substr(mapMatch.length);
	    }

	    // dynamically load node-core modules when requiring `@node/fs` for example
	    if (name.substr(0, 6) == '@node/' && nodeCoreModules.indexOf(name.substr(6)) != -1) {
	      if (!this._nodeRequire)
	        throw new TypeError('Error loading ' + name + '. Can only load node core modules in Node.');
	      this.set(name, this.newModule(getESModule(this._nodeRequire(name.substr(6)))));
	    }
	    
	    // relative URL-normalization
	    if (name[0] == '.' || name[0] == '/') {
	      if (parentName)
	        name = new URL(name, parentName.replace(/#/g, '%05')).href.replace(/%05/g, '#');
	      else
	        name = new URL(name, baseURIObj).href;
	    }

	    // if the module is in the registry already, use that
	    if (this.has(name))
	      return name;

	    if (name.match(absURLRegEx)) {
	      // defaultJSExtensions backwards compatibility
	      if (this.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js')
	        name += '.js';
	      return name;
	    }

	    // applyPaths implementation provided from ModuleLoader system.js source
	    name = applyPaths(this.paths, name) || name;

	    // defaultJSExtensions backwards compatibility
	    if (this.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js')
	      name += '.js';

	    // ./x, /x -> page-relative
	    if (name[0] == '.' || name[0] == '/')
	      return new URL(name, baseURIObj).href;
	    // x -> baseURL-relative
	    else
	      return new URL(name, getBaseURLObj.call(this)).href;
	  };
	});

	// percent encode just '#' in urls if using HTTP requests
	var httpRequest = typeof XMLHttpRequest != 'undefined';
	hook('locate', function(locate) {
	  return function(load) {
	    return Promise.resolve(locate.call(this, load))
	    .then(function(address) {
	      if (httpRequest)
	        return address.replace(/#/g, '%23');
	      return address;
	    });
	  };
	});

	/*
	 * Fetch with authorization
	 */
	hook('fetch', function() {
	  return function(load) {
	    return new Promise(function(resolve, reject) {
	      fetchTextFromURL(load.address, load.metadata.authorization, resolve, reject);
	    });
	  };
	});

	/*
	  __useDefault
	  
	  When a module object looks like:
	  newModule(
	    __useDefault: true,
	    default: 'some-module'
	  })

	  Then importing that module provides the 'some-module'
	  result directly instead of the full module.

	  Useful for eg module.exports = function() {}
	*/
	hook('import', function(systemImport) {
	  return function(name, parentName, parentAddress) {
	    if (parentName && parentName.name)
	      warn.call(this, 'SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing ' + name + ' from ' + parentName.name);
	    return systemImport.call(this, name, parentName, parentAddress).then(function(module) {
	      return module.__useDefault ? module['default'] : module;
	    });
	  };
	});

	/*
	 * Allow format: 'detect' meta to enable format detection
	 */
	hook('translate', function(systemTranslate) {
	  return function(load) {
	    if (load.metadata.format == 'detect')
	      load.metadata.format = undefined;
	    return systemTranslate.call(this, load);
	  };
	});


	/*
	 * JSON format support
	 *
	 * Supports loading JSON files as a module format itself
	 *
	 * Usage:
	 *
	 * SystemJS.config({
	 *   meta: {
	 *     '*.json': { format: 'json' }
	 *   }
	 * });
	 *
	 * Module is returned as if written:
	 *
	 * export default {JSON}
	 *
	 * No named exports are provided
	 *
	 * Files ending in ".json" are treated as json automatically by SystemJS
	 */
	hook('instantiate', function(instantiate) {
	  return function(load) {
	    if (load.metadata.format == 'json' && !this.builder) {
	      var entry = load.metadata.entry = createEntry();
	      entry.deps = [];
	      entry.execute = function() {
	        try {
	          return JSON.parse(load.source);
	        }
	        catch(e) {
	          throw new Error("Invalid JSON file " + load.name);
	        }
	      };
	    }
	  };
	})

	/*
	 Extend config merging one deep only

	  loader.config({
	    some: 'random',
	    config: 'here',
	    deep: {
	      config: { too: 'too' }
	    }
	  });

	  <=>

	  loader.some = 'random';
	  loader.config = 'here'
	  loader.deep = loader.deep || {};
	  loader.deep.config = { too: 'too' };


	  Normalizes meta and package configs allowing for:

	  SystemJS.config({
	    meta: {
	      './index.js': {}
	    }
	  });

	  To become

	  SystemJS.meta['https://thissite.com/index.js'] = {};

	  For easy normalization canonicalization with latest URL support.

	*/
	SystemJSLoader.prototype.env = 'development';

	SystemJSLoader.prototype.config = function(cfg) {
	  var loader = this;

	  if ('warnings' in cfg)
	    loader.warnings = cfg.warnings;

	  // transpiler deprecation path
	  if (cfg.transpilerRuntime === false)
	    loader._loader.loadedTranspilerRuntime = true;

	  // always configure baseURL first
	  if (cfg.baseURL) {
	    var hasConfig = false;
	    function checkHasConfig(obj) {
	      for (var p in obj)
	        return true;
	    }
	    if (checkHasConfig(loader.packages) || checkHasConfig(loader.meta) || checkHasConfig(loader.depCache) || checkHasConfig(loader.bundles) || checkHasConfig(loader.packageConfigPaths))
	      throw new TypeError('Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.');

	    loader.baseURL = cfg.baseURL;

	    // sanitize baseURL
	    getBaseURLObj.call(loader);
	  }

	  if (cfg.defaultJSExtensions) {
	    loader.defaultJSExtensions = cfg.defaultJSExtensions;
	    warn.call(loader, 'The defaultJSExtensions configuration option is deprecated, use packages configuration instead.');
	  }

	  if (cfg.pluginFirst)
	    loader.pluginFirst = cfg.pluginFirst;

	  if (cfg.production)
	    setProduction.call(loader, true);

	  if (cfg.paths) {
	    for (var p in cfg.paths)
	      loader.paths[p] = cfg.paths[p];
	  }

	  if (cfg.map) {
	    var objMaps = '';
	    for (var p in cfg.map) {
	      var v = cfg.map[p];

	      // object map backwards-compat into packages configuration
	      if (typeof v !== 'string') {
	        objMaps += (objMaps.length ? ', ' : '') + '"' + p + '"';

	        var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
	        var prop = loader.decanonicalize(p);
	        if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
	          prop = prop.substr(0, prop.length - 3);

	        // if a package main, revert it
	        var pkgMatch = '';
	        for (var pkg in loader.packages) {
	          if (prop.substr(0, pkg.length) == pkg 
	              && (!prop[pkg.length] || prop[pkg.length] == '/') 
	              && pkgMatch.split('/').length < pkg.split('/').length)
	            pkgMatch = pkg;
	        }
	        if (pkgMatch && loader.packages[pkgMatch].main)
	          prop = prop.substr(0, prop.length - loader.packages[pkgMatch].main.length - 1);

	        var pkg = loader.packages[prop] = loader.packages[prop] || {};
	        pkg.map = v;
	      }
	      else {
	        loader.map[p] = v;
	      }
	    }
	    if (objMaps)
	      warn.call(loader, 'The map configuration for ' + objMaps + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + p + '": { map: {...} } } }).');
	  }

	  if (cfg.packageConfigPaths) {
	    var packageConfigPaths = [];
	    for (var i = 0; i < cfg.packageConfigPaths.length; i++) {
	      var path = cfg.packageConfigPaths[i];
	      var packageLength = Math.max(path.lastIndexOf('*') + 1, path.lastIndexOf('/'));
	      var defaultJSExtension = loader.defaultJSExtensions && path.substr(packageLength - 3, 3) != '.js';
	      var normalized = loader.decanonicalize(path.substr(0, packageLength));
	      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
	        normalized = normalized.substr(0, normalized.length - 3);
	      packageConfigPaths[i] = normalized + path.substr(packageLength);
	    }
	    loader.packageConfigPaths = packageConfigPaths;
	  }

	  if (cfg.bundles) {
	    for (var p in cfg.bundles) {
	      var bundle = [];
	      for (var i = 0; i < cfg.bundles[p].length; i++) {
	        var defaultJSExtension = loader.defaultJSExtensions && cfg.bundles[p][i].substr(cfg.bundles[p][i].length - 3, 3) != '.js';
	        var normalizedBundleDep = loader.decanonicalize(cfg.bundles[p][i]);
	        if (defaultJSExtension && normalizedBundleDep.substr(normalizedBundleDep.length - 3, 3) == '.js')
	          normalizedBundleDep = normalizedBundleDep.substr(0, normalizedBundleDep.length - 3);
	        bundle.push(normalizedBundleDep);
	      }
	      loader.bundles[p] = bundle;
	    }
	  }

	  if (cfg.packages) {
	    for (var p in cfg.packages) {
	      if (p.match(/^([^\/]+:)?\/\/$/))
	        throw new TypeError('"' + p + '" is not a valid package name.');

	      var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
	      var prop = loader.decanonicalize(p);
	      if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
	        prop = prop.substr(0, prop.length - 3);

	      // allow trailing slash in packages
	      if (prop[prop.length - 1] == '/')
	        prop = prop.substr(0, prop.length - 1);

	      loader.packages[prop] = loader.packages[prop] || {};

	      // meta backwards compatibility
	      if (cfg.packages[p].modules) {
	        warn.call(loader, 'Package ' + p + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
	        cfg.packages[p].meta = cfg.packages[p].modules;
	        delete cfg.packages[p].modules;
	      }

	      for (var q in cfg.packages[p])
	        if (indexOf.call(packageProperties, q) == -1)
	          warn.call(loader, '"' + q + '" is not a valid package configuration option in package ' + p);

	      extendMeta(loader.packages[prop], cfg.packages[p]);
	    }
	  }

	  for (var c in cfg) {
	    var v = cfg[c];
	    var normalizeProp = false;

	    if (c == 'baseURL' || c == 'map' || c == 'packages' || c == 'bundles' || c == 'paths' || c == 'warnings' || c == 'packageConfigPaths')
	      continue;

	    if (typeof v != 'object' || v instanceof Array) {
	      loader[c] = v;
	    }
	    else {
	      loader[c] = loader[c] || {};

	      if (c == 'meta' || c == 'depCache')
	        normalizeProp = true;

	      for (var p in v) {
	        // base-level wildcard meta does not normalize to retain catch-all quality
	        if (c == 'meta' && p[0] == '*') {
	          loader[c][p] = v[p];
	        }
	        else if (normalizeProp) {
	          var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
	          var prop = loader.decanonicalize(p);
	          if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
	            prop = prop.substr(0, prop.length - 3);
	          loader[c][prop] = v[p];
	        }
	        else {
	          loader[c][p] = v[p];
	        }
	      }
	    }
	  }
	};/*
	 * Package Configuration Extension
	 *
	 * Example:
	 *
	 * SystemJS.packages = {
	 *   jquery: {
	 *     basePath: 'lib', // optionally only use a subdirectory within the package
	 *     main: 'index.js', // when not set, package name is requested directly
	 *     format: 'amd',
	 *     defaultExtension: 'ts', // defaults to 'js', can be set to false
	 *     modules: {
	 *       '*.ts': {
	 *         loader: 'typescript'
	 *       },
	 *       'vendor/sizzle.js': {
	 *         format: 'global'
	 *       }
	 *     },
	 *     map: {
	 *        // map internal require('sizzle') to local require('./vendor/sizzle')
	 *        sizzle: './vendor/sizzle.js',
	 *        // map any internal or external require of 'jquery/vendor/another' to 'another/index.js'
	 *        './vendor/another.js': './another/index.js',
	 *        // test.js / test -> lib/test.js
	 *        './test.js': './lib/test.js',
	 *
	 *        // environment-specific map configurations
	 *        './index.js': {
	 *          '~browser': './index-node.js'
	 *        }
	 *     },
	 *     // allows for setting package-prefixed depCache
	 *     // keys are normalized module names relative to the package itself
	 *     depCache: {
	 *       // import 'package/index.js' loads in parallel package/lib/test.js,package/vendor/sizzle.js
	 *       './index.js': ['./test'],
	 *       './test.js': ['external-dep'],
	 *       'external-dep/path.js': ['./another.js']
	 *     }
	 *   }
	 * };
	 *
	 * Then:
	 *   import 'jquery'                       -> jquery/index.js
	 *   import 'jquery/submodule'             -> jquery/submodule.js
	 *   import 'jquery/submodule.ts'          -> jquery/submodule.ts loaded as typescript
	 *   import 'jquery/vendor/another'        -> another/index.js
	 *
	 * Detailed Behaviours
	 * - main can have a leading "./" can be added optionally
	 * - map and defaultExtension are applied to the main
	 * - defaultExtension adds the extension only if the exact extension is not present
	 * - defaultJSExtensions applies after map when defaultExtension is not set
	 * - if a meta value is available for a module, map and defaultExtension are skipped
	 * - like global map, package map also applies to subpaths (sizzle/x, ./vendor/another/sub)
	 * - condition module map is '@env' module in package or '@system-env' globally
	 * - map targets support conditional interpolation ('./x': './x.#{|env}.js')
	 * - internal package map targets cannot use boolean conditionals
	 *
	 * In addition, the following modules properties will be allowed to be package
	 * -relative as well in the package module config:
	 *
	 *   - loader
	 *   - alias
	 *
	 *
	 * Package Configuration Loading
	 *
	 * Not all packages may already have their configuration present in the System config
	 * For these cases, a list of packageConfigPaths can be provided, which when matched against
	 * a request, will first request a ".json" file by the package name to derive the package
	 * configuration from. This allows dynamic loading of non-predetermined code, a key use
	 * case in SystemJS.
	 *
	 * Example:
	 *
	 *   SystemJS.packageConfigPaths = ['packages/test/package.json', 'packages/*.json'];
	 *
	 *   // will first request 'packages/new-package/package.json' for the package config
	 *   // before completing the package request to 'packages/new-package/path'
	 *   SystemJS.import('packages/new-package/path');
	 *
	 *   // will first request 'packages/test/package.json' before the main
	 *   SystemJS.import('packages/test');
	 *
	 * When a package matches packageConfigPaths, it will always send a config request for
	 * the package configuration.
	 * The package name itself is taken to be the match up to and including the last wildcard
	 * or trailing slash.
	 * The most specific package config path will be used.
	 * Any existing package configurations for the package will deeply merge with the
	 * package config, with the existing package configurations taking preference.
	 * To opt-out of the package configuration request for a package that matches
	 * packageConfigPaths, use the { configured: true } package config option.
	 *
	 */
	(function() {

	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.packages = {};
	      this.packageConfigPaths = [];
	    };
	  });

	  function getPackage(loader, normalized) {
	    // use most specific package
	    var curPkg, curPkgLen = 0, pkgLen;
	    for (var p in loader.packages) {
	      if (normalized.substr(0, p.length) === p && (normalized.length === p.length || normalized[p.length] === '/')) {
	        pkgLen = p.split('/').length;
	        if (pkgLen > curPkgLen) {
	          curPkg = p;
	          curPkgLen = pkgLen;
	        }
	      }
	    }
	    return curPkg;
	  }

	  function getBasePath(pkg) {
	    // sanitize basePath
	    var basePath = pkg.basePath && pkg.basePath != '.' ? pkg.basePath : '';
	    if (basePath) {
	      if (basePath.substr(0, 2) == './')
	        basePath = basePath.substr(2);
	      if (basePath[basePath.length - 1] != '/')
	        basePath += '/';
	    }
	    return basePath;
	  }

	  function addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions) {
	    // don't apply extensions to folders or if defaultExtension = false
	    if (!subPath || subPath[subPath.length - 1] == '/' || skipExtensions || pkg.defaultExtension === false)
	      return subPath;

	    // NB are you sure about this?
	    // skip if we have interpolation conditional syntax in subPath?
	    if (subPath.match(interpolationRegEx))
	      return subPath;

	    var metaMatch = false;

	    // exact meta or meta with any content after the last wildcard skips extension
	    if (pkg.meta)
	      getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
	        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
	          return metaMatch = true;
	      });

	    // exact global meta or meta with any content after the last wildcard skips extension
	    if (!metaMatch && loader.meta)
	      getMetaMatches(loader.meta, pkgName + '/' + basePath + subPath, function(metaPattern, matchMeta, matchDepth) {
	        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
	          return metaMatch = true;
	      });

	    if (metaMatch)
	      return subPath;

	    // work out what the defaultExtension is and add if not there already
	    // NB reconsider if default should really be ".js"?
	    var defaultExtension = '.' + (pkg.defaultExtension || 'js');
	    if (subPath.substr(subPath.length - defaultExtension.length) != defaultExtension)
	      return subPath + defaultExtension;
	    else
	      return subPath;
	  }

	  function applyPackageConfigSync(loader, pkg, pkgName, subPath, skipExtensions) {
	    // main
	    if (!subPath) {
	      if (pkg.main)
	        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
	      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
	      else
	        // NB can add a default package main convention here when defaultJSExtensions is deprecated
	        // if it becomes internal to the package then it would no longer be an exit path
	        return pkgName + (loader.defaultJSExtensions ? '.js' : '');
	    }

	    var basePath = getBasePath(pkg);

	    // map config checking without then with extensions
	    if (pkg.map) {
	      var mapPath = './' + subPath;

	      var mapMatch = getMapMatch(pkg.map, mapPath);

	      // we then check map with the default extension adding
	      if (!mapMatch) {
	        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions);
	        if (mapPath != './' + subPath)
	          mapMatch = getMapMatch(pkg.map, mapPath);
	      }
	      if (mapMatch)
	        return doMapSync(loader, pkg, pkgName, basePath, mapMatch, mapPath, skipExtensions);
	    }

	    // normal package resolution
	    return pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions);
	  }

	  function doMapSync(loader, pkg, pkgName, basePath, mapMatch, path, skipExtensions) {
	    var mapped = pkg.map[mapMatch];

	    // ignore conditionals in sync
	    if (typeof mapped != 'string')
	      mapped = mapMatch = path;

	    // package map to main / base-level
	    if (mapped == '.')
	      mapped = pkgName;

	    // internal package map
	    else if (mapped.substr(0, 2) == './')
	      return pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions);
	    
	    // external map reference
	    return loader.normalizeSync(mapped + path.substr(mapMatch.length), pkgName + '/');
	  }

	  function applyPackageConfig(loader, pkg, pkgName, subPath, skipExtensions) {
	    // main
	    if (!subPath) {
	      if (pkg.main)
	        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
	      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
	      else
	        // NB can add a default package main convention here when defaultJSExtensions is deprecated
	        // if it becomes internal to the package then it would no longer be an exit path
	        return Promise.resolve(pkgName + (loader.defaultJSExtensions ? '.js' : ''));
	    }

	    var basePath = getBasePath(pkg);

	    // map config checking without then with extensions
	    var mapPath, mapMatch;

	    if (pkg.map) {
	      mapPath = './' + subPath;
	      mapMatch = getMapMatch(pkg.map, mapPath);

	      // we then check map with the default extension adding
	      if (!mapMatch) {
	        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions);
	        if (mapPath != './' + subPath)
	          mapMatch = getMapMatch(pkg.map, mapPath);
	      }
	    }

	    return (mapMatch ? doMap(loader, pkg, pkgName, basePath, mapMatch, mapPath, skipExtensions) : Promise.resolve())
	    .then(function(mapped) {
	      if (mapped)
	        return Promise.resolve(mapped);

	      // normal package resolution / fallback resolution for no conditional match
	      return Promise.resolve(pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions));
	    });
	  }

	  function doStringMap(loader, pkg, pkgName, basePath, mapMatch, mapped, path, skipExtensions) {
	    // NB the interpolation cases should strictly skip subsequent interpolation

	    // package map to main / base-level
	    if (mapped == '.')
	      mapped = pkgName;
	    
	    // internal package map
	    else if (mapped.substr(0, 2) == './')
	      return Promise.resolve(pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions))
	      .then(function(name) {
	        return interpolateConditional.call(loader, name, pkgName + '/');
	      });
	    
	    // external map reference
	    // NB deprecate the use of the second argument here -> should be fully global reference
	    return loader.normalize(mapped + path.substr(mapMatch.length), pkgName + '/');
	  }

	  function doMap(loader, pkg, pkgName, basePath, mapMatch, path, skipExtensions) {
	    var mapped = pkg.map[mapMatch];

	    if (typeof mapped == 'string')
	      return doStringMap(loader, pkg, pkgName, basePath, mapMatch, mapped, path, skipExtensions);

	    // we use a special conditional syntax to allow the builder to handle conditional branch points further
	    if (loader.builder)
	      return Promise.resolve(pkgName + '/#:' + path);

	    // map object -> conditional map
	    return loader['import'](pkg.map['@env'] || '@system-env', pkgName)
	    .then(function(env) {
	      // first map condition to match is used
	      for (var e in mapped) {
	        var negate = e[0] == '~';

	        var value = readMemberExpression(negate ? e.substr(1) : e, env);

	        if (!negate && value || negate && !value)
	          return mapped[e];
	      }
	    })
	    .then(function(mapped) {
	      if (mapped)
	        return doStringMap(loader, pkg, pkgName, basePath, mapMatch, mapped, path, skipExtensions);

	      // no environment match -> fallback to original subPath by returning undefined
	    });
	  }

	  // normalizeSync = decanonicalize + package resolution
	  SystemJSLoader.prototype.normalizeSync = SystemJSLoader.prototype.decanonicalize = SystemJSLoader.prototype.normalize;

	  // decanonicalize must JUST handle package defaultExtension: false case when defaultJSExtensions is set
	  // to be deprecated!
	  hook('decanonicalize', function(decanonicalize) {
	    return function(name, parentName) {
	      var decanonicalized = decanonicalize.call(this, name, parentName);

	      if (!this.defaultJSExtensions)
	        return decanonicalized;
	    
	      var pkgName = getPackage(this, decanonicalized);

	      var pkg = this.packages[pkgName];
	      var defaultExtension = pkg && pkg.defaultExtension;

	      if (defaultExtension == undefined && pkg && pkg.meta)
	        getMetaMatches(pkg.meta, decanonicalized.substr(pkgName), function(metaPattern, matchMeta, matchDepth) {
	          if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1) {
	            defaultExtension = false;
	            return true;
	          }
	        });
	      
	      if ((defaultExtension === false || defaultExtension && defaultExtension != '.js') && name.substr(name.length - 3, 3) != '.js' && decanonicalized.substr(decanonicalized.length - 3, 3) == '.js')
	        decanonicalized = decanonicalized.substr(0, decanonicalized.length - 3);

	      return decanonicalized;
	    };
	  });

	  hook('normalizeSync', function(normalizeSync) {
	    return function(name, parentName, isPlugin) {
	      warn.call(this, 'SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.');

	      var loader = this;
	      isPlugin = isPlugin === true;

	      // apply contextual package map first
	      // (we assume the parent package config has already been loaded)
	      if (parentName)
	        var parentPackageName = getPackage(loader, parentName) ||
	            loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
	            getPackage(loader, parentName.substr(0, parentName.length - 3));

	      var parentPackage = parentPackageName && loader.packages[parentPackageName];

	      // remove any parent basePath from parentName
	      if (parentPackage) {
	        var parentBasePath = getBasePath(parentPackage);
	        if (parentBasePath && parentName.substr(parentPackageName.length + 1, parentBasePath.length) == parentBasePath)
	          parentName = parentPackageName + parentName.substr(parentPackageName.length + parentBasePath.length);
	      }

	      // ignore . since internal maps handled by standard package resolution
	      if (parentPackage && name[0] != '.') {
	        var parentMap = parentPackage.map;
	        var parentMapMatch = parentMap && getMapMatch(parentMap, name);

	        if (parentMapMatch && typeof parentMap[parentMapMatch] == 'string')
	          return doMapSync(loader, parentPackage, parentPackageName, getBasePath(parentPackage), parentMapMatch, name, isPlugin);
	      }

	      var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

	      // apply map, core, paths, contextual package map
	      var normalized = normalizeSync.call(loader, name, parentName);

	      // undo defaultJSExtension
	      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
	        defaultJSExtension = false;
	      if (defaultJSExtension)
	        normalized = normalized.substr(0, normalized.length - 3);

	      var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
	      var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

	      if (!pkgName)
	        return normalized + (defaultJSExtension ? '.js' : '');

	      var subPath = normalized.substr(pkgName.length + 1);

	      return applyPackageConfigSync(loader, loader.packages[pkgName] || {}, pkgName, subPath, isPlugin);
	    };
	  });

	  hook('normalize', function(normalize) {
	    return function(name, parentName, isPlugin) {
	      var loader = this;
	      isPlugin = isPlugin === true;

	      return Promise.resolve()
	      .then(function() {
	        // apply contextual package map first
	        // (we assume the parent package config has already been loaded)
	        if (parentName)
	          var parentPackageName = getPackage(loader, parentName) ||
	              loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
	              getPackage(loader, parentName.substr(0, parentName.length - 3));

	        var parentPackage = parentPackageName && loader.packages[parentPackageName];

	        // remove any parent basePath from parentName
	        if (parentPackage) {
	          var parentBasePath = getBasePath(parentPackage);
	          if (parentBasePath && parentName.substr(parentPackageName.length + 1, parentBasePath.length) == parentBasePath)
	            parentName = parentPackageName + parentName.substr(parentPackageName.length + parentBasePath.length);
	        }

	        // ignore . since internal maps handled by standard package resolution
	        if (parentPackage && name.substr(0, 2) != './') {
	          var parentMap = parentPackage.map;
	          var parentMapMatch = parentMap && getMapMatch(parentMap, name);

	          if (parentMapMatch)
	            return doMap(loader, parentPackage, parentPackageName, parentBasePath, parentMapMatch, name, isPlugin);
	        }

	        return Promise.resolve();
	      })
	      .then(function(mapped) {
	        if (mapped)
	          return mapped;

	        var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

	        // apply map, core, paths, contextual package map
	        var normalized = normalize.call(loader, name, parentName);

	        // undo defaultJSExtension
	        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
	          defaultJSExtension = false;
	        if (defaultJSExtension)
	          normalized = normalized.substr(0, normalized.length - 3);

	        var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
	        var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

	        if (!pkgName)
	          return Promise.resolve(normalized + (defaultJSExtension ? '.js' : ''));

	        var pkg = loader.packages[pkgName];

	        // if package is already configured or not a dynamic config package, use existing package config
	        var isConfigured = pkg && (pkg.configured || !pkgConfigMatch);
	        return (isConfigured ? Promise.resolve(pkg) : loadPackageConfigPath(loader, pkgName, pkgConfigMatch.configPath))
	        .then(function(pkg) {
	          var subPath = normalized.substr(pkgName.length + 1);

	          return applyPackageConfig(loader, pkg, pkgName, subPath, isPlugin);
	        });
	      });
	    };
	  });

	  // check if the given normalized name matches a packageConfigPath
	  // if so, loads the config
	  var packageConfigPaths = {};

	  // data object for quick checks against package paths
	  function createPkgConfigPathObj(path) {
	    var lastWildcard = path.lastIndexOf('*');
	    var length = Math.max(lastWildcard + 1, path.lastIndexOf('/'));
	    return {
	      length: length,
	      // NB handle regex control character escapes or simply create a test function here
	      regEx: new RegExp('^(' + path.substr(0, length).replace(/\*/g, '[^\\/]+') + ')(\\/|$)'),
	      wildcard: lastWildcard != -1
	    };
	  }

	  // most specific match wins
	  function getPackageConfigMatch(loader, normalized) {
	    var pkgName, exactMatch = false, configPath;
	    for (var i = 0; i < loader.packageConfigPaths.length; i++) {
	      var packageConfigPath = loader.packageConfigPaths[i];
	      var p = packageConfigPaths[packageConfigPath] || (packageConfigPaths[packageConfigPath] = createPkgConfigPathObj(packageConfigPath));
	      if (normalized.length < p.length)
	        continue;
	      var match = normalized.match(p.regEx);
	      if (match && (!pkgName || (!(exactMatch && p.wildcard) && pkgName.length < match[1].length))) {
	        pkgName = match[1];
	        exactMatch = !p.wildcard;
	        configPath = pkgName + packageConfigPath.substr(p.length);
	      }
	    }

	    if (!pkgName)
	      return;

	    return {
	      packageName: pkgName,
	      configPath: configPath
	    };
	  }

	  function loadPackageConfigPath(loader, pkgName, pkgConfigPath) {
	    var configLoader = loader.pluginLoader || loader;

	    // NB remove this when json is default
	    (configLoader.meta[pkgConfigPath] = configLoader.meta[pkgConfigPath] || {}).format = 'json';

	    return configLoader.load(pkgConfigPath)
	    .then(function() {
	      pkgConfig = configLoader.get(pkgConfigPath);

	      var cfg = pkgConfig['default'];

	      // support "systemjs" prefixing
	      if (cfg.systemjs)
	        cfg = cfg.systemjs;

	      // modules backwards compatibility
	      if (cfg.modules) {
	        cfg.meta = cfg.modules;
	        warn.call(loader, 'Package config file ' + pkgConfigPath + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
	      }

	      // remove any non-system properties if generic config file (eg package.json)
	      for (var p in cfg) {
	        if (indexOf.call(packageProperties, p) == -1)
	          delete cfg[p];
	      }

	      // deeply-merge (to first level) config with any existing package config
	      var pkg = loader.packages[pkgName] = loader.packages[pkgName] || {};
	      extendMeta(pkg, cfg, true);

	      // support external depCache
	      var basePath = getBasePath(pkg);
	      if (cfg.depCache) {
	        for (var d in cfg.depCache) {
	          var dNormalized;

	          if (d.substr(0, 2) == './')
	            dNormalized = pkgName + '/' + basePath + d.substr(2);
	          else
	            dNormalized = coreResolve.call(loader, d);
	          loader.depCache[dNormalized] = (loader.depCache[dNormalized] || []).concat(cfg.depCache[d]);
	        }
	        delete cfg.depCache;
	      }

	      return pkg;
	    });
	  }

	  function getMetaMatches(pkgMeta, subPath, matchFn) {
	    // wildcard meta
	    var meta = {};
	    var wildcardIndex;
	    for (var module in pkgMeta) {
	      // allow meta to start with ./ for flexibility
	      var dotRel = module.substr(0, 2) == './' ? './' : '';
	      if (dotRel)
	        module = module.substr(2);

	      wildcardIndex = module.indexOf('*');
	      if (wildcardIndex === -1)
	        continue;

	      if (module.substr(0, wildcardIndex) == subPath.substr(0, wildcardIndex)
	          && module.substr(wildcardIndex + 1) == subPath.substr(subPath.length - module.length + wildcardIndex + 1)) {
	        // alow match function to return true for an exit path
	        if (matchFn(module, pkgMeta[dotRel + module], module.split('/').length))
	          return;
	      }
	    }
	    // exact meta
	    var exactMeta = pkgMeta[subPath] || pkgMeta['./' + subPath];
	    if (exactMeta)
	      matchFn(exactMeta, exactMeta, 0);
	  }

	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      return Promise.resolve(locate.call(this, load))
	      .then(function(address) {
	        var pkgName = getPackage(loader, load.name);
	        if (pkgName) {
	          var pkg = loader.packages[pkgName];
	          var basePath = getBasePath(pkg);
	          var subPath = load.name.substr(pkgName.length + basePath.length + 1);

	          // format
	          if (pkg.format)
	            load.metadata.format = load.metadata.format || pkg.format;

	          var meta = {};
	          if (pkg.meta) {
	            var bestDepth = 0;

	            // NB support a main shorthand in meta here?
	            getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
	              if (matchDepth > bestDepth)
	                bestDepth = matchDepth;
	              extendMeta(meta, matchMeta, matchDepth && bestDepth > matchDepth);
	            });

	            // allow alias and loader to be package-relative
	            if (meta.alias && meta.alias.substr(0, 2) == './')
	              meta.alias = pkgName + meta.alias.substr(1);
	            if (meta.loader && meta.loader.substr(0, 2) == './')
	              meta.loader = pkgName + meta.loader.substr(1);
	            extendMeta(load.metadata, meta);
	          }
	        }

	        return address;
	      });
	    };
	  });

	})();
	/*
	 * Script tag fetch
	 *
	 * When load.metadata.scriptLoad is true, we load via script tag injection.
	 */
	(function() {

	  if (typeof document != 'undefined')
	    var head = document.getElementsByTagName('head')[0];

	  var curSystem;

	  // if doing worker executing, this is set to the load record being executed
	  var workerLoad = null;
	  
	  // interactive mode handling method courtesy RequireJS
	  var ieEvents = head && (function() {
	    var s = document.createElement('script');
	    var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
	    return s.attachEvent && !(s.attachEvent.toString && s.attachEvent.toString().indexOf('[native code') < 0) && !isOpera;
	  })();

	  // IE interactive-only part
	  // we store loading scripts array as { script: <script>, load: {...} }
	  var interactiveLoadingScripts = [];
	  var interactiveScript;
	  function getInteractiveScriptLoad() {
	    if (interactiveScript && interactiveScript.script.readyState === 'interactive')
	      return interactiveScript.load;

	    for (var i = 0; i < interactiveLoadingScripts.length; i++)
	      if (interactiveLoadingScripts[i].script.readyState == 'interactive') {
	        interactiveScript = interactiveLoadingScripts[i];
	        return interactiveScript.load;
	      }
	  }
	  
	  // System.register, System.registerDynamic, AMD define pipeline
	  // this is called by the above methods when they execute
	  // we then run the reduceRegister_ collection function either immediately
	  // if we are in IE and know the currently executing script (interactive)
	  // or later if we need to wait for the synchronous load callback to know the script
	  var loadingCnt = 0;
	  var registerQueue = [];
	  hook('pushRegister_', function(pushRegister) {
	    return function(register) {
	      // if using eval-execution then skip
	      if (pushRegister.call(this, register))
	        return false;

	      // if using worker execution, then we're done
	      if (workerLoad)
	        this.reduceRegister_(workerLoad, register);

	      // detect if we know the currently executing load (IE)
	      // if so, immediately call reduceRegister
	      else if (ieEvents)
	        this.reduceRegister_(getInteractiveScriptLoad(), register);

	      // otherwise, add to our execution queue
	      // to call reduceRegister on sync script load event
	      else if (loadingCnt)
	        registerQueue.push(register);

	      // if we're not currently loading anything though
	      // then do the reduction against a null load
	      // (out of band named define or named register)
	      // note even in non-script environments, this catch is used
	      else
	        this.reduceRegister_(null, register);

	      return true;
	    };
	  });

	  function webWorkerImport(loader, load) {
	    return new Promise(function(resolve, reject) {
	      if (load.metadata.integrity)
	        reject(new Error('Subresource integrity checking is not supported in web workers.'));

	      workerLoad = load;
	      try {
	        importScripts(load.address);
	      }
	      catch(e) {
	        workerLoad = null;
	        reject(e);
	      }
	      workerLoad = null;

	      // if nothing registered, then something went wrong
	      if (!load.metadata.entry)
	        reject(new Error(load.address + ' did not call System.register or AMD define'));

	      resolve('');
	    });
	  }

	  // override fetch to use script injection
	  hook('fetch', function(fetch) {
	    return function(load) {
	      var loader = this;

	      if (load.metadata.format == 'json' || !load.metadata.scriptLoad || (!isBrowser && !isWorker))
	        return fetch.call(this, load);

	      if (isWorker)
	        return webWorkerImport(loader, load);

	      return new Promise(function(resolve, reject) {
	        var s = document.createElement('script');
	        
	        s.async = true;
	        
	        if (load.metadata.integrity)
	          s.setAttribute('integrity', load.metadata.integrity);

	        if (ieEvents) {
	          s.attachEvent('onreadystatechange', complete);
	          interactiveLoadingScripts.push({
	            script: s,
	            load: load
	          });
	        }
	        else {
	          s.addEventListener('load', complete, false);
	          s.addEventListener('error', error, false);
	        }

	        loadingCnt++;

	        curSystem = __global.System;

	        s.src = load.address;
	        head.appendChild(s);

	        function complete(evt) {
	          if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
	            return;

	          loadingCnt--;

	          // complete call is sync on execution finish
	          // (in ie already done reductions)
	          if (!load.metadata.entry && !registerQueue.length) {
	            loader.reduceRegister_(load);
	          }
	          else if (!ieEvents) {
	            for (var i = 0; i < registerQueue.length; i++)
	              loader.reduceRegister_(load, registerQueue[i]);
	            registerQueue = [];
	          }

	          cleanup();

	          // if nothing registered, then something went wrong
	          if (!load.metadata.entry && !load.metadata.bundle)
	            reject(new Error(load.name + ' did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.'));

	          resolve('');
	        }

	        function error(evt) {
	          cleanup();
	          reject(new Error('Unable to load script ' + load.address));
	        }

	        function cleanup() {
	          __global.System = curSystem;

	          if (s.detachEvent) {
	            s.detachEvent('onreadystatechange', complete);
	            for (var i = 0; i < interactiveLoadingScripts.length; i++)
	              if (interactiveLoadingScripts[i].script == s) {
	                if (interactiveScript && interactiveScript.script == s)
	                  interactiveScript = null;
	                interactiveLoadingScripts.splice(i, 1);
	              }
	          }
	          else {
	            s.removeEventListener('load', complete, false);
	            s.removeEventListener('error', error, false);
	          }

	          head.removeChild(s);
	        }
	      });
	    };
	  });
	})();
	/*
	 * Instantiate registry extension
	 *
	 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
	 *
	 * - Creates the loader.register function
	 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
	 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
	 *     for handling dynamic modules alongside register-transformed ES6 modules
	 *
	 *
	 * The code here replicates the ES6 linking groups algorithm to ensure that
	 * circular ES6 compiled into System.register can work alongside circular AMD 
	 * and CommonJS, identically to the actual ES6 loader.
	 *
	 */


	/*
	 * Registry side table entries in loader.defined
	 * Registry Entry Contains:
	 *    - name
	 *    - deps 
	 *    - declare for declarative modules
	 *    - execute for dynamic modules, different to declarative execute on module
	 *    - executingRequire indicates require drives execution for circularity of dynamic modules
	 *    - declarative optional boolean indicating which of the above
	 *
	 * Can preload modules directly on SystemJS.defined['my/module'] = { deps, execute, executingRequire }
	 *
	 * Then the entry gets populated with derived information during processing:
	 *    - normalizedDeps derived from deps, created in instantiate
	 *    - groupIndex used by group linking algorithm
	 *    - evaluated indicating whether evaluation has happend
	 *    - module the module record object, containing:
	 *      - exports actual module exports
	 *
	 *    For dynamic we track the es module with:
	 *    - esModule actual es module value
	 *    - esmExports whether to extend the esModule with named exports
	 *      
	 *    Then for declarative only we track dynamic bindings with the 'module' records:
	 *      - name
	 *      - exports
	 *      - setters declarative setter functions
	 *      - dependencies, module records of dependencies
	 *      - importers, module records of dependents
	 *
	 * After linked and evaluated, entries are removed, declarative module records remain in separate
	 * module binding table
	 *
	 */

	var leadingCommentAndMetaRegEx = /^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
	function detectRegisterFormat(source) {
	  var leadingCommentAndMeta = source.match(leadingCommentAndMetaRegEx);
	  return leadingCommentAndMeta && source.substr(leadingCommentAndMeta[0].length, 15) == 'System.register';
	}

	function createEntry() {
	  return {
	    name: null,
	    deps: null,
	    originalIndices: null,
	    declare: null,
	    execute: null,
	    executingRequire: false,
	    declarative: false,
	    normalizedDeps: null,
	    groupIndex: null,
	    evaluated: false,
	    module: null,
	    esModule: null,
	    esmExports: false
	  };
	}

	(function() {

	  /*
	   * There are two variations of System.register:
	   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
	   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
	   *
	   * 2. System.registerDynamic for dynamic modules (3-4 params) - System.registerDynamic([name, ]deps, executingRequire, execute)
	   * the true or false statement 
	   *
	   * this extension implements the linking algorithm for the two variations identical to the spec
	   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
	   *
	   */
	  SystemJSLoader.prototype.register = function(name, deps, declare) {
	    if (typeof name != 'string') {
	      declare = deps;
	      deps = name;
	      name = null;
	    }

	    // dynamic backwards-compatibility
	    // can be deprecated eventually
	    if (typeof declare == 'boolean')
	      return this.registerDynamic.apply(this, arguments);

	    var entry = createEntry();
	    // ideally wouldn't apply map config to bundle names but 
	    // dependencies go through map regardless so we can't restrict
	    // could reconsider in shift to new spec
	    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
	    entry.declarative = true;
	    entry.deps = deps;
	    entry.declare = declare;

	    this.pushRegister_({
	      amd: false,
	      entry: entry
	    });
	  };
	  SystemJSLoader.prototype.registerDynamic = function(name, deps, declare, execute) {
	    if (typeof name != 'string') {
	      execute = declare;
	      declare = deps;
	      deps = name;
	      name = null;
	    }

	    // dynamic
	    var entry = createEntry();
	    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
	    entry.deps = deps;
	    entry.execute = execute;
	    entry.executingRequire = declare;

	    this.pushRegister_({
	      amd: false,
	      entry: entry
	    });
	  };
	  hook('reduceRegister_', function() {
	    return function(load, register) {
	      if (!register)
	        return;

	      var entry = register.entry;
	      var curMeta = load && load.metadata;

	      // named register
	      if (entry.name) {
	        if (!(entry.name in this.defined))
	          this.defined[entry.name] = entry;

	        if (curMeta)
	          curMeta.bundle = true;
	      }
	      // anonymous register
	      if (!entry.name || load && entry.name == load.name) {
	        if (!curMeta)
	          throw new TypeError('Unexpected anonymous System.register call.');
	        if (curMeta.entry) {
	          if (curMeta.format == 'register')
	            throw new Error('Multiple anonymous System.register calls in module ' + load.name + '. If loading a bundle, ensure all the System.register calls are named.');
	          else
	            throw new Error('Module ' + load.name + ' interpreted as ' + curMeta.format + ' module format, but called System.register.');
	        }
	        if (!curMeta.format)
	          curMeta.format = 'register';
	        curMeta.entry = entry;
	      }
	    };
	  });

	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);

	      this.defined = {};
	      this._loader.moduleRecords = {};
	    };
	  });

	  function buildGroups(entry, loader, groups) {
	    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

	    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
	      return;

	    groups[entry.groupIndex].push(entry);

	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      var depEntry = loader.defined[depName];
	      
	      // not in the registry means already linked / ES6
	      if (!depEntry || depEntry.evaluated)
	        continue;
	      
	      // now we know the entry is in our unlinked linkage group
	      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

	      // the group index of an entry is always the maximum
	      if (depEntry.groupIndex === null || depEntry.groupIndex < depGroupIndex) {
	        
	        // if already in a group, remove from the old group
	        if (depEntry.groupIndex !== null) {
	          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

	          // if the old group is empty, then we have a mixed depndency cycle
	          if (groups[depEntry.groupIndex].length == 0)
	            throw new Error("Mixed dependency cycle detected");
	        }

	        depEntry.groupIndex = depGroupIndex;
	      }

	      buildGroups(depEntry, loader, groups);
	    }
	  }

	  function link(name, loader) {
	    var startEntry = loader.defined[name];

	    // skip if already linked
	    if (startEntry.module)
	      return;

	    startEntry.groupIndex = 0;

	    var groups = [];

	    buildGroups(startEntry, loader, groups);

	    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
	    for (var i = groups.length - 1; i >= 0; i--) {
	      var group = groups[i];
	      for (var j = 0; j < group.length; j++) {
	        var entry = group[j];

	        // link each group
	        if (curGroupDeclarative)
	          linkDeclarativeModule(entry, loader);
	        else
	          linkDynamicModule(entry, loader);
	      }
	      curGroupDeclarative = !curGroupDeclarative; 
	    }
	  }

	  // module binding records
	  function Module() {}
	  defineProperty(Module, 'toString', {
	    value: function() {
	      return 'Module';
	    }
	  });

	  function getOrCreateModuleRecord(name, moduleRecords) {
	    return moduleRecords[name] || (moduleRecords[name] = {
	      name: name,
	      dependencies: [],
	      exports: new Module(), // start from an empty module and extend
	      importers: []
	    });
	  }

	  function linkDeclarativeModule(entry, loader) {
	    // only link if already not already started linking (stops at circular)
	    if (entry.module)
	      return;

	    var moduleRecords = loader._loader.moduleRecords;
	    var module = entry.module = getOrCreateModuleRecord(entry.name, moduleRecords);
	    var exports = entry.module.exports;

	    var declaration = entry.declare.call(__global, function(name, value) {
	      module.locked = true;

	      if (typeof name == 'object') {
	        for (var p in name)
	          exports[p] = name[p];
	      }
	      else {
	        exports[name] = value;
	      }

	      for (var i = 0, l = module.importers.length; i < l; i++) {
	        var importerModule = module.importers[i];
	        if (!importerModule.locked) {
	          var importerIndex = indexOf.call(importerModule.dependencies, module);
	          importerModule.setters[importerIndex](exports);
	        }
	      }

	      module.locked = false;
	      return value;
	    }, entry.name);
	    
	    module.setters = declaration.setters;
	    module.execute = declaration.execute;

	    if (!module.setters || !module.execute) {
	      throw new TypeError('Invalid System.register form for ' + entry.name);
	    }

	    // now link all the module dependencies
	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      var depEntry = loader.defined[depName];
	      var depModule = moduleRecords[depName];

	      // work out how to set depExports based on scenarios...
	      var depExports;

	      if (depModule) {
	        depExports = depModule.exports;
	      }
	      // dynamic, already linked in our registry
	      else if (depEntry && !depEntry.declarative) {
	        depExports = depEntry.esModule;
	      }
	      // in the loader registry
	      else if (!depEntry) {
	        depExports = loader.get(depName);
	      }
	      // we have an entry -> link
	      else {
	        linkDeclarativeModule(depEntry, loader);
	        depModule = depEntry.module;
	        depExports = depModule.exports;
	      }

	      // only declarative modules have dynamic bindings
	      if (depModule && depModule.importers) {
	        depModule.importers.push(module);
	        module.dependencies.push(depModule);
	      }
	      else {
	        module.dependencies.push(null);
	      }
	      
	      // run setters for all entries with the matching dependency name
	      var originalIndices = entry.originalIndices[i];
	      for (var j = 0, len = originalIndices.length; j < len; ++j) {
	        var index = originalIndices[j];
	        if (module.setters[index]) {
	          module.setters[index](depExports);
	        }
	      }
	    }
	  }

	  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
	  function getModule(name, loader) {
	    var exports;
	    var entry = loader.defined[name];

	    if (!entry) {
	      exports = loader.get(name);
	      if (!exports)
	        throw new Error('Unable to load dependency ' + name + '.');
	    }

	    else {
	      if (entry.declarative)
	        ensureEvaluated(name, [], loader);
	    
	      else if (!entry.evaluated)
	        linkDynamicModule(entry, loader);

	      exports = entry.module.exports;
	    }

	    if ((!entry || entry.declarative) && exports && exports.__useDefault)
	      return exports['default'];
	    
	    return exports;
	  }

	  function linkDynamicModule(entry, loader) {
	    if (entry.module)
	      return;

	    var exports = {};

	    var module = entry.module = { exports: exports, id: entry.name };

	    // AMD requires execute the tree first
	    if (!entry.executingRequire) {
	      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	        var depName = entry.normalizedDeps[i];
	        // we know we only need to link dynamic due to linking algorithm
	        var depEntry = loader.defined[depName];
	        if (depEntry)
	          linkDynamicModule(depEntry, loader);
	      }
	    }

	    // now execute
	    entry.evaluated = true;
	    var output = entry.execute.call(__global, function(name) {
	      for (var i = 0, l = entry.deps.length; i < l; i++) {
	        if (entry.deps[i] != name)
	          continue;
	        return getModule(entry.normalizedDeps[i], loader);
	      }
	      throw new Error('Module ' + name + ' not declared as a dependency.');
	    }, exports, module);
	    
	    if (output)
	      module.exports = output;

	    // create the esModule object, which allows ES6 named imports of dynamics
	    exports = module.exports;

	    // __esModule flag treats as already-named
	    if (exports && exports.__esModule)
	      entry.esModule = exports;
	    // set module as 'default' export, then fake named exports by iterating properties
	    else if (entry.esmExports && exports !== __global)
	      entry.esModule = getESModule(exports);
	    // just use the 'default' export
	    else
	      entry.esModule = { 'default': exports };
	  }

	  /*
	   * Given a module, and the list of modules for this current branch,
	   *  ensure that each of the dependencies of this module is evaluated
	   *  (unless one is a circular dependency already in the list of seen
	   *  modules, in which case we execute it)
	   *
	   * Then we evaluate the module itself depth-first left to right 
	   * execution to match ES6 modules
	   */
	  function ensureEvaluated(moduleName, seen, loader) {
	    var entry = loader.defined[moduleName];

	    // if already seen, that means it's an already-evaluated non circular dependency
	    if (!entry || entry.evaluated || !entry.declarative)
	      return;

	    // this only applies to declarative modules which late-execute

	    seen.push(moduleName);

	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      if (indexOf.call(seen, depName) == -1) {
	        if (!loader.defined[depName])
	          loader.get(depName);
	        else
	          ensureEvaluated(depName, seen, loader);
	      }
	    }

	    if (entry.evaluated)
	      return;

	    entry.evaluated = true;
	    entry.module.execute.call(__global);
	  }

	  // override the delete method to also clear the register caches
	  hook('delete', function(del) {
	    return function(name) {
	      delete this._loader.moduleRecords[name];
	      delete this.defined[name];
	      return del.call(this, name);
	    };
	  });

	  hook('fetch', function(fetch) {
	    return function(load) {
	      if (this.defined[load.name]) {
	        load.metadata.format = 'defined';
	        return '';
	      }
	      
	      if (load.metadata.format == 'register' && !load.metadata.authorization && load.metadata.scriptLoad !== false)
	        load.metadata.scriptLoad = true;

	      load.metadata.deps = load.metadata.deps || [];
	      
	      return fetch.call(this, load);
	    };
	  });

	  hook('translate', function(translate) {
	    // we run the meta detection here (register is after meta)
	    return function(load) {
	      load.metadata.deps = load.metadata.deps || [];
	      return Promise.resolve(translate.call(this, load)).then(function(source) {
	        // run detection for register format
	        if (load.metadata.format == 'register' || !load.metadata.format && detectRegisterFormat(load.source))
	          load.metadata.format = 'register';
	        return source;
	      });
	    };
	  });

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      if (load.metadata.format == 'detect')
	        load.metadata.format = undefined;

	      // assumes previous instantiate is sync
	      // (core json support)
	      instantiate.call(this, load);

	      var loader = this;

	      var entry;

	      // first we check if this module has already been defined in the registry
	      if (loader.defined[load.name]) {
	        entry = loader.defined[load.name];
	        // don't support deps for ES modules
	        if (!entry.declarative)
	          entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // picked up already by an anonymous System.register script injection
	      // or via the dynamic formats
	      else if (load.metadata.entry) {
	        entry = load.metadata.entry;
	        entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // Contains System.register calls
	      // (dont run bundles in the builder)
	      else if (!(loader.builder && load.metadata.bundle) 
	          && (load.metadata.format == 'register' || load.metadata.format == 'esm' || load.metadata.format == 'es6')) {
	        
	        if (typeof __exec != 'undefined')
	          __exec.call(loader, load);

	        if (!load.metadata.entry && !load.metadata.bundle)
	          throw new Error(load.name + ' detected as ' + load.metadata.format + ' but didn\'t execute.');

	        entry = load.metadata.entry;

	        // support metadata deps for System.register
	        if (entry && load.metadata.deps)
	          entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // named bundles are just an empty module
	      if (!entry) {
	        entry = createEntry();
	        entry.deps = load.metadata.deps;
	        entry.execute = function() {};
	      }

	      // place this module onto defined for circular references
	      loader.defined[load.name] = entry;
	      
	      var grouped = group(entry.deps);
	      
	      entry.deps = grouped.names;
	      entry.originalIndices = grouped.indices;
	      entry.name = load.name;
	      entry.esmExports = load.metadata.esmExports !== false;

	      // first, normalize all dependencies
	      var normalizePromises = [];
	      for (var i = 0, l = entry.deps.length; i < l; i++)
	        normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

	      return Promise.all(normalizePromises).then(function(normalizedDeps) {

	        entry.normalizedDeps = normalizedDeps;

	        return {
	          deps: entry.deps,
	          execute: function() {
	            // recursively ensure that the module and all its 
	            // dependencies are linked (with dependency group handling)
	            link(load.name, loader);

	            // now handle dependency execution in correct order
	            ensureEvaluated(load.name, [], loader);

	            // remove from the registry
	            loader.defined[load.name] = undefined;

	            // return the defined module object
	            return loader.newModule(entry.declarative ? entry.module.exports : entry.esModule);
	          }
	        };
	      });
	    };
	  });
	})();
	/*
	 * Extension to detect ES6 and auto-load Traceur or Babel for processing
	 */
	(function() {
	  // good enough ES6 module detection regex - format detections not designed to be accurate, but to handle the 99% use case
	  var esmRegEx = /(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/;

	  var traceurRuntimeRegEx = /\$traceurRuntime\s*\./;
	  var babelHelpersRegEx = /babelHelpers\s*\./;

	  hook('translate', function(translate) {
	    return function(load) {
	      var loader = this;
	      return translate.call(loader, load)
	      .then(function(source) {
	        // detect & transpile ES6
	        if (load.metadata.format == 'esm' || load.metadata.format == 'es6' || !load.metadata.format && loader.transpiler !== false && source.match(esmRegEx)) {
	          if (load.metadata.format == 'es6')
	            warn.call(loader, 'Module ' + load.name + ' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".');

	          load.metadata.format = 'esm';

	          if (loader.transpiler === false) {
	            // we accept translation to esm for builds though to enable eg rollup optimizations
	            if (loader.builder)
	              return source;
	            throw new TypeError('Unable to dynamically transpile ES module as SystemJS.transpiler set to false.');
	          }

	          // setting _loader.loadedTranspiler = false tells the next block to
	          // do checks for setting transpiler metadata
	          loader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;
	          if (loader.pluginLoader)
	            loader.pluginLoader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;

	          // do transpilation
	          return (loader._loader.transpilerPromise || (
	            loader._loader.transpilerPromise = Promise.resolve(
	              __global[loader.transpiler == 'typescript' ? 'ts' : loader.transpiler] || (loader.pluginLoader || loader)['import'](loader.transpiler)
	          ))).then(function(transpiler) {
	            loader._loader.loadedTranspilerRuntime = true;

	            // translate hooks means this is a transpiler plugin instead of a raw implementation
	            if (transpiler.translate) {
	              // if transpiler is the same as the plugin loader, then don't run twice
	              if (transpiler == load.metadata.loaderModule)
	                return load.source;

	              return Promise.resolve(transpiler.translate.call(loader, load))
	              .then(function(source) {
	                if (load.metadata.format == 'esm' && !loader.builder && detectRegisterFormat(source))
	                  load.metadata.format = 'register';
	                return source;
	              });
	            }

	            // legacy builder support
	            if (loader.builder)
	              load.metadata.originalSource = load.source;
	            
	            // defined in es6-module-loader/src/transpile.js
	            return transpile.call(loader, load)
	            .then(function(source) {
	              // clear sourceMap as transpiler embeds it
	              load.metadata.sourceMap = undefined;
	              return source;
	            });            
	          });
	        }

	        // skip transpiler and transpiler runtime loading when transpiler is disabled
	        if (loader.transpiler === false)
	          return source;

	        // load the transpiler correctly
	        if (loader._loader.loadedTranspiler === false && (loader.transpiler == 'traceur' || loader.transpiler == 'typescript' || loader.transpiler == 'babel')
	            && load.name == loader.normalizeSync(loader.transpiler)) {

	          // always load transpiler as a global
	          if (source.length > 100 && !load.metadata.format) {
	            load.metadata.format = 'global';

	            if (loader.transpiler === 'traceur')
	              load.metadata.exports = 'traceur';
	            if (loader.transpiler === 'typescript')
	              load.metadata.exports = 'ts';
	          }

	          loader._loader.loadedTranspiler = true;
	        }

	        // load the transpiler runtime correctly
	        if (loader._loader.loadedTranspilerRuntime === false) {
	          if (load.name == loader.normalizeSync('traceur-runtime')
	              || load.name == loader.normalizeSync('babel/external-helpers*')) {
	            if (source.length > 100)
	              load.metadata.format = load.metadata.format || 'global';

	            loader._loader.loadedTranspilerRuntime = true;
	          }
	        }

	        // detect transpiler runtime usage to load runtimes
	        if ((load.metadata.format == 'register' || load.metadata.bundle) && loader._loader.loadedTranspilerRuntime !== true) {
	          if (!__global.$traceurRuntime && load.source.match(traceurRuntimeRegEx)) {
	            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
	            return loader['import']('traceur-runtime').then(function() {
	              return source;
	            });
	          }
	          if (!__global.babelHelpers && load.source.match(babelHelpersRegEx)) {
	            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
	            return loader['import']('babel/external-helpers').then(function() {
	              return source;
	            });
	          }
	        }

	        return source;
	      });
	    };
	  });

	})();
	/*
	  SystemJS Global Format

	  Supports
	    metadata.deps
	    metadata.globals
	    metadata.exports

	  Without metadata.exports, detects writes to the global object.
	*/
	var __globalName = typeof self != 'undefined' ? 'self' : 'global';

	hook('fetch', function(fetch) {
	  return function(load) {
	    if (load.metadata.exports && !load.metadata.format)
	      load.metadata.format = 'global';

	    // A global with exports, no globals and no deps
	    // can be loaded via a script tag
	    if (load.metadata.format == 'global' && !load.metadata.authorization
	        && load.metadata.exports && !load.metadata.globals 
	        && (!load.metadata.deps || load.metadata.deps.length == 0)
	        && load.metadata.scriptLoad !== false)
	      load.metadata.scriptLoad = true;

	    return fetch.call(this, load);
	  };
	});

	// ideally we could support script loading for globals, but the issue with that is that
	// we can't do it with AMD support side-by-side since AMD support means defining the
	// global define, and global support means not definining it, yet we don't have any hook
	// into the "pre-execution" phase of a script tag being loaded to handle both cases
	hook('instantiate', function(instantiate) {
	  return function(load) {
	    var loader = this;

	    if (!load.metadata.format)
	      load.metadata.format = 'global';

	    // global is a fallback module format
	    if (load.metadata.format == 'global' && !load.metadata.registered) {

	      var entry = createEntry();

	      load.metadata.entry = entry;

	      entry.deps = [];

	      for (var g in load.metadata.globals) {
	        var gl = load.metadata.globals[g];
	        if (gl)
	          entry.deps.push(gl);
	      }

	      entry.execute = function(require, exports, module) {

	        var globals;
	        if (load.metadata.globals) {
	          globals = {};
	          for (var g in load.metadata.globals)
	            if (load.metadata.globals[g])
	              globals[g] = require(load.metadata.globals[g]);
	        }
	        
	        var exportName = load.metadata.exports;

	        if (exportName)
	          load.source += '\n' + __globalName + '["' + exportName + '"] = ' + exportName + ';';

	        var retrieveGlobal = loader.get('@@global-helpers').prepareGlobal(module.id, exportName, globals);

	        __exec.call(loader, load);

	        return retrieveGlobal();
	      }
	    }
	    return instantiate.call(this, load);
	  };
	});
	hook('reduceRegister_', function(reduceRegister) {
	  return function(load, register) {
	    if (register || !load.metadata.exports)
	      return reduceRegister.call(this, load, register);

	    load.metadata.format = 'global';
	    var entry = load.metadata.entry = createEntry();
	    entry.deps = load.metadata.deps;
	    var globalValue = readMemberExpression(load.metadata.exports, __global);
	    entry.execute = function() {
	      return globalValue;
	    };
	  };
	});

	hookConstructor(function(constructor) {
	  return function() {
	    var loader = this;
	    constructor.call(loader);

	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    // bare minimum ignores for IE8
	    var ignoredGlobalProps = ['_g', 'sessionStorage', 'localStorage', 'clipboardData', 'frames', 'frameElement', 'external', 
	      'mozAnimationStartTime', 'webkitStorageInfo', 'webkitIndexedDB', 'mozInnerScreenY', 'mozInnerScreenX'];

	    var globalSnapshot;

	    function forEachGlobal(callback) {
	      if (Object.keys)
	        Object.keys(__global).forEach(callback);
	      else
	        for (var g in __global) {
	          if (!hasOwnProperty.call(__global, g))
	            continue;
	          callback(g);
	        }
	    }

	    function forEachGlobalValue(callback) {
	      forEachGlobal(function(globalName) {
	        if (indexOf.call(ignoredGlobalProps, globalName) != -1)
	          return;
	        try {
	          var value = __global[globalName];
	        }
	        catch (e) {
	          ignoredGlobalProps.push(globalName);
	        }
	        callback(globalName, value);
	      });
	    }

	    loader.set('@@global-helpers', loader.newModule({
	      prepareGlobal: function(moduleName, exportName, globals) {
	        // disable module detection
	        var curDefine = __global.define;
	        
	        __global.define = undefined;
	        __global.exports = undefined;
	        if (__global.module && __global.module.exports)
	          __global.module = undefined;

	        // set globals
	        var oldGlobals;
	        if (globals) {
	          oldGlobals = {};
	          for (var g in globals) {
	            oldGlobals[g] = __global[g];
	            __global[g] = globals[g];
	          }
	        }

	        // store a complete copy of the global object in order to detect changes
	        if (!exportName) {
	          globalSnapshot = {};

	          forEachGlobalValue(function(name, value) {
	            globalSnapshot[name] = value;
	          });
	        }

	        // return function to retrieve global
	        return function() {
	          var globalValue;

	          if (exportName) {
	            globalValue = readMemberExpression(exportName, __global);
	          }
	          else {
	            var singleGlobal;
	            var multipleExports;
	            var exports = {};

	            forEachGlobalValue(function(name, value) {
	              if (globalSnapshot[name] === value)
	                return;
	              if (typeof value == 'undefined')
	                return;
	              exports[name] = value;

	              if (typeof singleGlobal != 'undefined') {
	                if (!multipleExports && singleGlobal !== value)
	                  multipleExports = true;
	              }
	              else {
	                singleGlobal = value;
	              }
	            });
	            globalValue = multipleExports ? exports : singleGlobal;
	          }

	          // revert globals
	          if (oldGlobals) {
	            for (var g in oldGlobals)
	              __global[g] = oldGlobals[g];
	          }
	          __global.define = curDefine;

	          return globalValue;
	        };
	      }
	    }));
	  };
	});
	/*
	  SystemJS CommonJS Format
	*/
	(function() {
	  // CJS Module Format
	  // require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
	  var cjsExportsRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/;
	  // RegEx adjusted from https://github.com/jbrantly/yabble/blob/master/lib/yabble.js#L339
	  var cjsRequireRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g;
	  var commentRegEx = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

	  var stringRegEx = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;

	  function getCJSDeps(source) {
	    cjsRequireRegEx.lastIndex = commentRegEx.lastIndex = stringRegEx.lastIndex = 0;

	    var deps = [];

	    var match;

	    // track string and comment locations for unminified source    
	    var stringLocations = [], commentLocations = [];

	    function inLocation(locations, match) {
	      for (var i = 0; i < locations.length; i++)
	        if (locations[i][0] < match.index && locations[i][1] > match.index)
	          return true;
	      return false;
	    }

	    if (source.length / source.split('\n').length < 200) {
	      while (match = stringRegEx.exec(source))
	        stringLocations.push([match.index, match.index + match[0].length]);
	      
	      while (match = commentRegEx.exec(source)) {
	        // only track comments not starting in strings
	        if (!inLocation(stringLocations, match))
	          commentLocations.push([match.index, match.index + match[0].length]);
	      }
	    }

	    while (match = cjsRequireRegEx.exec(source)) {
	      // ensure we're not within a string or comment location
	      if (!inLocation(stringLocations, match) && !inLocation(commentLocations, match)) {
	        var dep = match[1].substr(1, match[1].length - 2);
	        // skip cases like require('" + file + "')
	        if (dep.match(/"|'/))
	          continue;
	        // trailing slash requires are removed as they don't map mains in SystemJS
	        if (dep[dep.length - 1] == '/')
	          dep = dep.substr(0, dep.length - 1);
	        deps.push(dep);
	      }
	    }

	    return deps;
	  }

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      var loader = this;
	      if (!load.metadata.format) {
	        cjsExportsRegEx.lastIndex = 0;
	        cjsRequireRegEx.lastIndex = 0;
	        if (cjsRequireRegEx.exec(load.source) || cjsExportsRegEx.exec(load.source))
	          load.metadata.format = 'cjs';
	      }

	      if (load.metadata.format == 'cjs') {
	        var metaDeps = load.metadata.deps;
	        var deps = load.metadata.cjsRequireDetection === false ? [] : getCJSDeps(load.source);

	        for (var g in load.metadata.globals)
	          if (load.metadata.globals[g])
	            deps.push(load.metadata.globals[g]);

	        var entry = createEntry();

	        load.metadata.entry = entry;

	        entry.deps = deps;
	        entry.executingRequire = true;
	        entry.execute = function(_require, exports, module) {
	          function require(name) {
	            if (name[name.length - 1] == '/')
	              name = name.substr(0, name.length - 1);
	            return _require.apply(this, arguments);
	          }

	          // ensure meta deps execute first
	          for (var i = 0; i < metaDeps.length; i++)
	            require(metaDeps[i]);

	          // disable AMD detection
	          var define = __global.define;
	          __global.define = undefined;

	          var pathVars = loader.get('@@cjs-helpers').getPathVars(module.id);

	          __global.__cjsWrapper = {
	            exports: exports,
	            args: [require, exports, module, pathVars.filename, pathVars.dirname, __global, __global]
	          };

	          var globals = '';
	          if (load.metadata.globals) {
	            for (var g in load.metadata.globals)
	              globals += 'var ' + g + ' = require("' + load.metadata.globals[g] + '");';
	          }

	          load.source = "(function(require, exports, module, __filename, __dirname, global, GLOBAL) {" + globals
	              + load.source + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";

	          __exec.call(loader, load);

	          __global.__cjsWrapper = undefined;
	          __global.define = define;
	        };
	      }

	      return instantiate.call(loader, load);
	    };
	  });
	})();
	hookConstructor(function(constructor) {
	  return function() {
	    var loader = this;
	    constructor.call(loader);

	    if (typeof window != 'undefined' && typeof document != 'undefined' && window.location)
	      var windowOrigin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

	    loader.set('@@cjs-helpers', loader.newModule({
	      getPathVars: function(moduleId) {
	        // remove any plugin syntax
	        var pluginIndex = moduleId.lastIndexOf('!');
	        var filename;
	        if (pluginIndex != -1)
	          filename = moduleId.substr(0, pluginIndex);
	        else
	          filename = moduleId;

	        var dirname = filename.split('/');
	        dirname.pop();
	        dirname = dirname.join('/');

	        if (filename.substr(0, 8) == 'file:///') {
	          filename = filename.substr(7);
	          dirname = dirname.substr(7);

	          // on windows remove leading '/'
	          if (isWindows) {
	            filename = filename.substr(1);
	            dirname = dirname.substr(1);
	          }
	        }
	        else if (windowOrigin && filename.substr(0, windowOrigin.length) === windowOrigin) {
	          filename = filename.substr(windowOrigin.length);
	          dirname = dirname.substr(windowOrigin.length);
	        }

	        return {
	          filename: filename,
	          dirname: dirname
	        };
	      }
	    }))
	  };
	});/*
	 * AMD Helper function module
	 * Separated into its own file as this is the part needed for full AMD support in SFX builds
	 * NB since implementations have now diverged this can be merged back with amd.js
	 */
	hookConstructor(function(constructor) {
	  return function() {
	    var loader = this;
	    constructor.call(this);

	    var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;
	    var cjsRequirePre = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])";
	    var cjsRequirePost = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)";
	    var fnBracketRegEx = /\(([^\)]*)\)/;
	    var wsRegEx = /^\s+|\s+$/g;
	    
	    var requireRegExs = {};

	    function getCJSDeps(source, requireIndex) {

	      // remove comments
	      source = source.replace(commentRegEx, '');

	      // determine the require alias
	      var params = source.match(fnBracketRegEx);
	      var requireAlias = (params[1].split(',')[requireIndex] || 'require').replace(wsRegEx, '');

	      // find or generate the regex for this requireAlias
	      var requireRegEx = requireRegExs[requireAlias] || (requireRegExs[requireAlias] = new RegExp(cjsRequirePre + requireAlias + cjsRequirePost, 'g'));

	      requireRegEx.lastIndex = 0;

	      var deps = [];

	      var match;
	      while (match = requireRegEx.exec(source))
	        deps.push(match[2] || match[3]);

	      return deps;
	    }

	    /*
	      AMD-compatible require
	      To copy RequireJS, set window.require = window.requirejs = loader.amdRequire
	    */
	    function require(names, callback, errback, referer) {
	      // in amd, first arg can be a config object... we just ignore
	      if (typeof names == 'object' && !(names instanceof Array))
	        return require.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));

	      // amd require
	      if (typeof names == 'string' && typeof callback == 'function')
	        names = [names];
	      if (names instanceof Array) {
	        var dynamicRequires = [];
	        for (var i = 0; i < names.length; i++)
	          dynamicRequires.push(loader['import'](names[i], referer));
	        Promise.all(dynamicRequires).then(function(modules) {
	          if (callback)
	            callback.apply(null, modules);
	        }, errback);
	      }

	      // commonjs require
	      else if (typeof names == 'string') {
	        var defaultJSExtension = loader.defaultJSExtensions && names.substr(names.length - 3, 3) != '.js';
	        var normalized = loader.decanonicalize(names, referer);
	        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
	          normalized = normalized.substr(0, normalized.length - 3);
	        var module = loader.get(normalized);
	        if (!module)
	          throw new Error('Module not already loaded loading "' + names + '" from "' + referer + '".');
	        return module.__useDefault ? module['default'] : module;
	      }

	      else
	        throw new TypeError('Invalid require');
	    }

	    function define(name, deps, factory) {
	      if (typeof name != 'string') {
	        factory = deps;
	        deps = name;
	        name = null;
	      }
	      if (!(deps instanceof Array)) {
	        factory = deps;
	        deps = ['require', 'exports', 'module'].splice(0, factory.length);
	      }

	      if (typeof factory != 'function')
	        factory = (function(factory) {
	          return function() { return factory; }
	        })(factory);

	      // in IE8, a trailing comma becomes a trailing undefined entry
	      if (deps[deps.length - 1] === undefined)
	        deps.pop();

	      // remove system dependencies
	      var requireIndex, exportsIndex, moduleIndex;
	      
	      if ((requireIndex = indexOf.call(deps, 'require')) != -1) {
	        
	        deps.splice(requireIndex, 1);

	        // only trace cjs requires for non-named
	        // named defines assume the trace has already been done
	        if (!name)
	          deps = deps.concat(getCJSDeps(factory.toString(), requireIndex));
	      }

	      if ((exportsIndex = indexOf.call(deps, 'exports')) != -1)
	        deps.splice(exportsIndex, 1);
	      
	      if ((moduleIndex = indexOf.call(deps, 'module')) != -1)
	        deps.splice(moduleIndex, 1);

	      function execute(req, exports, module) {
	        var depValues = [];
	        for (var i = 0; i < deps.length; i++)
	          depValues.push(req(deps[i]));

	        module.uri = module.id;

	        module.config = function() {};

	        // add back in system dependencies
	        if (moduleIndex != -1)
	          depValues.splice(moduleIndex, 0, module);
	        
	        if (exportsIndex != -1)
	          depValues.splice(exportsIndex, 0, exports);
	        
	        if (requireIndex != -1) {
	          function contextualRequire(names, callback, errback) {
	            if (typeof names == 'string' && typeof callback != 'function')
	              return req(names);
	            return require.call(loader, names, callback, errback, module.id);
	          }
	          contextualRequire.toUrl = function(name) {
	            // normalize without defaultJSExtensions
	            var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';
	            var url = loader.decanonicalize(name, module.id);
	            if (defaultJSExtension && url.substr(url.length - 3, 3) == '.js')
	              url = url.substr(0, url.length - 3);
	            return url;
	          };
	          depValues.splice(requireIndex, 0, contextualRequire);
	        }

	        // set global require to AMD require
	        var curRequire = __global.require;
	        __global.require = require;

	        var output = factory.apply(exportsIndex == -1 ? __global : exports, depValues);

	        __global.require = curRequire;

	        if (typeof output == 'undefined' && module)
	          output = module.exports;

	        if (typeof output != 'undefined')
	          return output;
	      }

	      var entry = createEntry();
	      entry.name = name && (loader.decanonicalize || loader.normalize).call(loader, name);
	      entry.deps = deps;
	      entry.execute = execute;

	      loader.pushRegister_({
	        amd: true,
	        entry: entry
	      });
	    }
	    define.amd = {};

	    // reduction function to attach defines to a load record
	    hook('reduceRegister_', function(reduceRegister) {
	      return function(load, register) {
	        // only handle AMD registers here
	        if (!register || !register.amd)
	          return reduceRegister.call(this, load, register);

	        var curMeta = load && load.metadata;
	        var entry = register.entry;

	        if (curMeta)
	          curMeta.format = 'amd';

	        // anonymous define
	        if (!entry.name) {
	          if (!curMeta)
	            throw new TypeError('Unexpected anonymous AMD define.');

	          // already defined anonymously -> throw
	          if (curMeta.entry)
	            throw new TypeError('Multiple defines for anonymous module ' + load.name);
	          
	          curMeta.entry = entry;
	        }
	        // named define
	        else {
	          // if we don't have any other defines, 
	          // then let this be an anonymous define
	          // this is just to support single modules of the form:
	          // define('jquery')
	          // still loading anonymously
	          // because it is done widely enough to be useful
	          // as soon as there is more than one define, this gets removed though
	          if (curMeta) {
	            if (!curMeta.entry && !curMeta.bundle)
	              curMeta.entry = entry;
	            else
	              curMeta.entry = undefined;

	            // note this is now a bundle
	            curMeta.bundle = true;
	          }

	          // define the module through the register registry
	          if (!(entry.name in this.defined))
	            this.defined[entry.name] = entry;
	        }
	      };
	    });

	    // adds define as a global (potentially just temporarily)
	    function createDefine() {
	      // ensure no NodeJS environment detection
	      var oldModule = __global.module;
	      var oldExports = __global.exports;
	      var oldDefine = __global.define;

	      __global.module = undefined;
	      __global.exports = undefined;
	      __global.define = define;

	      return function() {
	        __global.define = oldDefine;
	        __global.module = oldModule;
	        __global.exports = oldExports;
	      };
	    }

	    loader.set('@@amd-helpers', loader.newModule({
	      createDefine: createDefine,
	      require: require,
	      define: define
	    }));
	    loader.amdDefine = define;
	    loader.amdRequire = require;
	  };
	});/*
	  SystemJS AMD Format
	*/
	(function() {
	  // AMD Module Format Detection RegEx
	  // define([.., .., ..], ...)
	  // define(varName); || define(function(require, exports) {}); || define({})
	  var amdRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;

	  hook('fetch', function(fetch) {
	    return function(load) {
	      if (load.metadata.format === 'amd' 
	          && !load.metadata.authorization 
	          && load.metadata.scriptLoad !== false)
	        load.metadata.scriptLoad = true;
	      // script load implies define global leak
	      if (load.metadata.scriptLoad && isBrowser)
	        this.get('@@amd-helpers').createDefine();
	      return fetch.call(this, load);
	    };
	  });

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      var loader = this;
	      
	      if (load.metadata.format == 'amd' || !load.metadata.format && load.source.match(amdRegEx)) {
	        load.metadata.format = 'amd';
	        
	        if (!loader.builder && loader.execute !== false) {
	          var removeDefine = this.get('@@amd-helpers').createDefine();

	          try {
	            __exec.call(loader, load);
	          }
	          finally {
	            removeDefine();
	          }

	          if (!load.metadata.entry && !load.metadata.bundle)
	            throw new TypeError('AMD module ' + load.name + ' did not define');
	        }
	        else {
	          load.metadata.execute = function() {
	            return load.metadata.builderExecute.apply(this, arguments);
	          };
	        }
	      }

	      return instantiate.call(loader, load);
	    };
	  });

	})();
	/*
	  SystemJS Loader Plugin Support

	  Supports plugin loader syntax with "!", or via metadata.loader

	  The plugin name is loaded as a module itself, and can override standard loader hooks
	  for the plugin resource. See the plugin section of the systemjs readme.
	*/

	(function() {
	  function getParentName(loader, parentName) {
	    // if parent is a plugin, normalize against the parent plugin argument only
	    if (parentName) {
	      var parentPluginIndex;
	      if (loader.pluginFirst) {
	        if ((parentPluginIndex = parentName.lastIndexOf('!')) != -1)
	          return parentName.substr(parentPluginIndex + 1);
	      }
	      else {
	        if ((parentPluginIndex = parentName.indexOf('!')) != -1)
	          return parentName.substr(0, parentPluginIndex);
	      }

	      return parentName;
	    }
	  }

	  function parsePlugin(loader, name) {
	    var argumentName;
	    var pluginName;

	    var pluginIndex = name.lastIndexOf('!');

	    if (pluginIndex == -1)
	      return;

	    if (loader.pluginFirst) {
	      argumentName = name.substr(pluginIndex + 1);
	      pluginName = name.substr(0, pluginIndex);
	    }
	    else {
	      argumentName = name.substr(0, pluginIndex);
	      pluginName = name.substr(pluginIndex + 1) || argumentName.substr(argumentName.lastIndexOf('.') + 1);
	    }

	    return {
	      argument: argumentName,
	      plugin: pluginName
	    };
	  }

	  // put name back together after parts have been normalized
	  function combinePluginParts(loader, argumentName, pluginName, defaultExtension) {
	    if (defaultExtension && argumentName.substr(argumentName.length - 3, 3) == '.js')
	      argumentName = argumentName.substr(0, argumentName.length - 3);

	    if (loader.pluginFirst) {
	      return pluginName + '!' + argumentName;
	    }
	    else {
	      return argumentName + '!' + pluginName;
	    }
	  }

	  // note if normalize will add a default js extension
	  // if so, remove for backwards compat
	  // this is strange and sucks, but will be deprecated
	  function checkDefaultExtension(loader, arg) {
	    return loader.defaultJSExtensions && arg.substr(arg.length - 3, 3) != '.js'; 
	  }

	  function createNormalizeSync(normalizeSync) {
	    return function(name, parentName, isPlugin) {
	      var loader = this;
	      
	      parentName = getParentName(this, parentName);
	      var parsed = parsePlugin(loader, name);

	      if (!parsed)
	        return normalizeSync.call(this, name, parentName, isPlugin);

	      // if this is a plugin, normalize the plugin name and the argument
	      var argumentName = loader.normalizeSync(parsed.argument, parentName, true);
	      var pluginName = loader.normalizeSync(parsed.plugin, parentName, true);
	      return combinePluginParts(loader, argumentName, pluginName, checkDefaultExtension(loader, parsed.argument));
	    };
	  }
	  
	  hook('decanonicalize', createNormalizeSync);
	  hook('normalizeSync', createNormalizeSync);

	  hook('normalize', function(normalize) {
	    return function(name, parentName, isPlugin) {
	      var loader = this;

	      parentName = getParentName(this, parentName);

	      var parsed = parsePlugin(loader, name);

	      if (!parsed)
	        return normalize.call(loader, name, parentName, isPlugin);

	      return Promise.all([
	        loader.normalize(parsed.argument, parentName, true),
	        loader.normalize(parsed.plugin, parentName, true)
	      ])
	      .then(function(normalized) {
	        return combinePluginParts(loader, normalized[0], normalized[1], checkDefaultExtension(loader, parsed.argument));
	      });
	    }
	  });

	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;

	      var name = load.name;

	      // plugin syntax
	      var pluginSyntaxIndex;
	      if (loader.pluginFirst) {
	        if ((pluginSyntaxIndex = name.indexOf('!')) != -1) {
	          load.metadata.loader = name.substr(0, pluginSyntaxIndex);
	          load.name = name.substr(pluginSyntaxIndex + 1);
	        }
	      }
	      else {
	        if ((pluginSyntaxIndex = name.lastIndexOf('!')) != -1) {
	          load.metadata.loader = name.substr(pluginSyntaxIndex + 1);
	          load.name = name.substr(0, pluginSyntaxIndex);
	        }
	      }

	      return locate.call(loader, load)
	      .then(function(address) {
	        var plugin = load.metadata.loader;

	        if (!plugin)
	          return address;

	        // only fetch the plugin itself if this name isn't defined
	        if (loader.defined && loader.defined[name])
	          return address;

	        var pluginLoader = loader.pluginLoader || loader;

	        // load the plugin module and run standard locate
	        return pluginLoader['import'](plugin)
	        .then(function(loaderModule) {
	          // store the plugin module itself on the metadata
	          load.metadata.loaderModule = loaderModule;

	          load.address = address;
	          if (loaderModule.locate)
	            return loaderModule.locate.call(loader, load);

	          return address;
	        });
	      });
	    };
	  });

	  hook('fetch', function(fetch) {
	    return function(load) {
	      var loader = this;
	      if (load.metadata.loaderModule && load.metadata.loaderModule.fetch && load.metadata.format != 'defined') {
	        load.metadata.scriptLoad = false;
	        return load.metadata.loaderModule.fetch.call(loader, load, function(load) {
	          return fetch.call(loader, load);
	        });
	      }
	      else {
	        return fetch.call(loader, load);
	      }
	    };
	  });

	  hook('translate', function(translate) {
	    return function(load) {

	      /*
	       * Source map sanitization for load.metadata.sourceMap
	       * Used to set browser and build-level source maps for
	       * translated sources in a general way.
	       *
	       * This isn't plugin-specific, but can't go anywhere else for now
	       * As it is post-translate
	       */
	      var sourceMap = load.metadata.sourceMap;

	      // if an object not a JSON string do sanitizing
	      if (sourceMap && typeof sourceMap == 'object') {
	        var originalName = load.name.split('!')[0];
	        
	        // force set the filename of the original file
	        sourceMap.file = originalName + '!transpiled';

	        // force set the sources list if only one source
	        if (!sourceMap.sources || sourceMap.sources.length == 1)
	          sourceMap.sources = [originalName];
	        load.metadata.sourceMap = JSON.stringify(sourceMap);
	      }

	      var loader = this;
	      if (load.metadata.loaderModule && load.metadata.loaderModule.translate && load.metadata.format != 'defined') {
	        return Promise.resolve(load.metadata.loaderModule.translate.call(loader, load)).then(function(result) {
	          // NB we should probably enforce a string output
	          if (typeof result == 'string')
	            load.source = result;
	          return translate.call(loader, load);
	        });
	      }
	      else {
	        return translate.call(loader, load);
	      }
	    };
	  });

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      var loader = this;

	      if (load.metadata.loaderModule && load.metadata.loaderModule.instantiate && !loader.builder && load.metadata.format != 'defined')
	        return Promise.resolve(load.metadata.loaderModule.instantiate.call(loader, load)).then(function(result) {
	          load.metadata.entry = createEntry();
	          load.metadata.entry.execute = function() {
	            return result;
	          }
	          load.metadata.entry.deps = load.metadata.deps;
	          load.metadata.format = 'defined';
	          return instantiate.call(loader, load);
	        });
	      else
	        return instantiate.call(loader, load);
	    };
	  });

	})();/*
	 * Conditions Extension
	 *
	 *   Allows a condition module to alter the resolution of an import via syntax:
	 *
	 *     import $ from 'jquery/#{browser}';
	 *
	 *   Will first load the module 'browser' via `SystemJS.import('browser')` and 
	 *   take the default export of that module.
	 *   If the default export is not a string, an error is thrown.
	 * 
	 *   We then substitute the string into the require to get the conditional resolution
	 *   enabling environment-specific variations like:
	 * 
	 *     import $ from 'jquery/ie'
	 *     import $ from 'jquery/firefox'
	 *     import $ from 'jquery/chrome'
	 *     import $ from 'jquery/safari'
	 *
	 *   It can be useful for a condition module to define multiple conditions.
	 *   This can be done via the `|` modifier to specify an export member expression:
	 *
	 *     import 'jquery/#{./browser.js|grade.version}'
	 *
	 *   Where the `grade` export `version` member in the `browser.js` module  is substituted.
	 *
	 *
	 * Boolean Conditionals
	 *
	 *   For polyfill modules, that are used as imports but have no module value,
	 *   a binary conditional allows a module not to be loaded at all if not needed:
	 *
	 *     import 'es5-shim#?./conditions.js|needs-es5shim'
	 *
	 *   These conditions can also be negated via:
	 *     
	 *     import 'es5-shim#?~./conditions.js|es6'
	 *
	 */

	  function parseCondition(condition) {
	    var conditionExport, conditionModule, negation;

	    var negation = condition[0] == '~';
	    var conditionExportIndex = condition.lastIndexOf('|');
	    if (conditionExportIndex != -1) {
	      conditionExport = condition.substr(conditionExportIndex + 1);
	      conditionModule = condition.substr(negation, conditionExportIndex - negation) || '@system-env';
	    }
	    else {
	      conditionExport = null;
	      conditionModule = condition.substr(negation);
	    }

	    return {
	      module: conditionModule,
	      prop: conditionExport,
	      negate: negation
	    };
	  }

	  function serializeCondition(conditionObj) {
	    return (conditionObj.negate ? '~' : '') + conditionObj.module + (conditionObj.prop ? '|' + conditionObj.prop : '');
	  }

	  function resolveCondition(conditionObj, parentName, bool) {
	    return this['import'](conditionObj.module, parentName)
	    .then(function(m) {
	      if (conditionObj.prop)
	        m = readMemberExpression(conditionObj.prop, m);
	      else if (typeof m == 'object' && m + '' == 'Module')
	        m = m['default'];

	      return conditionObj.negate ? !m : m;
	    });
	  }

	  var interpolationRegEx = /#\{[^\}]+\}/;
	  function interpolateConditional(name, parentName) {
	    // first we normalize the conditional
	    var conditionalMatch = name.match(interpolationRegEx);

	    if (!conditionalMatch)
	      return Promise.resolve(name);

	    var conditionObj = parseCondition(conditionalMatch[0].substr(2, conditionalMatch[0].length - 3));

	    // in builds, return normalized conditional
	    if (this.builder)
	      return this['normalize'](conditionObj.module, parentName)
	      .then(function(conditionModule) {
	        conditionObj.module = conditionModule;
	        return name.replace(interpolationRegEx, '#{' + serializeCondition(conditionObj) + '}');
	      });

	    return resolveCondition.call(this, conditionObj, parentName, false)
	    .then(function(conditionValue) {
	      if (typeof conditionValue !== 'string')
	        throw new TypeError('The condition value for ' + name + ' doesn\'t resolve to a string.');

	      if (conditionValue.indexOf('/') != -1)
	        throw new TypeError('Unabled to interpolate conditional ' + name + (parentName ? ' in ' + parentName : '') + '\n\tThe condition value ' + conditionValue + ' cannot contain a "/" separator.');

	      return name.replace(interpolationRegEx, conditionValue);
	    });
	  }

	  function booleanConditional(name, parentName) {
	    // first we normalize the conditional
	    var booleanIndex = name.lastIndexOf('#?');

	    if (booleanIndex == -1)
	      return Promise.resolve(name);

	    var conditionObj = parseCondition(name.substr(booleanIndex + 2));

	    // in builds, return normalized conditional
	    if (this.builder)
	      return this['normalize'](conditionObj.module, parentName)
	      .then(function(conditionModule) {
	        conditionObj.module = conditionModule;
	        return name.substr(0, booleanIndex) + '#?' + serializeCondition(conditionObj);
	      });

	    return resolveCondition.call(this, conditionObj, parentName, true)
	    .then(function(conditionValue) {
	      return conditionValue ? name.substr(0, booleanIndex) : '@empty';
	    });
	  }

	  // normalizeSync does not parse conditionals at all although it could
	  hook('normalize', function(normalize) {
	    return function(name, parentName, parentAddress) {
	      var loader = this;
	      return booleanConditional.call(loader, name, parentName)
	      .then(function(name) {
	        return normalize.call(loader, name, parentName, parentAddress);
	      })
	      .then(function(normalized) {
	        return interpolateConditional.call(loader, normalized, parentName);
	      });
	    };
	  });
	/*
	 * Alias Extension
	 *
	 * Allows a module to be a plain copy of another module by module name
	 *
	 * SystemJS.meta['mybootstrapalias'] = { alias: 'bootstrap' };
	 *
	 */
	(function() {
	  // aliases
	  hook('fetch', function(fetch) {
	    return function(load) {
	      var alias = load.metadata.alias;
	      var aliasDeps = load.metadata.deps || [];
	      if (alias) {
	        load.metadata.format = 'defined';
	        var entry = createEntry();
	        this.defined[load.name] = entry;
	        entry.declarative = true;
	        entry.deps = aliasDeps.concat([alias]);
	        entry.declare = function(_export) {
	          return {
	            setters: [function(module) {
	              for (var p in module)
	                _export(p, module[p]);
	              if (module.__useDefault)
	                entry.module.exports.__useDefault = true;
	            }],
	            execute: function() {}
	          };
	        };
	        return '';
	      }

	      return fetch.call(this, load);
	    };
	  });
	})();/*
	 * Meta Extension
	 *
	 * Sets default metadata on a load record (load.metadata) from
	 * loader.metadata via SystemJS.meta function.
	 *
	 *
	 * Also provides an inline meta syntax for module meta in source.
	 *
	 * Eg:
	 *
	 * loader.meta({
	 *   'my/module': { deps: ['jquery'] }
	 *   'my/*': { format: 'amd' }
	 * });
	 *
	 * Which in turn populates loader.metadata.
	 *
	 * load.metadata.deps and load.metadata.format will then be set
	 * for 'my/module'
	 *
	 * The same meta could be set with a my/module.js file containing:
	 *
	 * my/module.js
	 *   "format amd";
	 *   "deps[] jquery";
	 *   "globals.some value"
	 *   console.log('this is my/module');
	 *
	 * Configuration meta always takes preference to inline meta.
	 *
	 * Multiple matches in wildcards are supported and ammend the meta.
	 *
	 *
	 * The benefits of the function form is that paths are URL-normalized
	 * supporting say
	 *
	 * loader.meta({ './app': { format: 'cjs' } });
	 *
	 * Instead of needing to set against the absolute URL (https://site.com/app.js)
	 *
	 */

	(function() {

	  hookConstructor(function(constructor) {
	    return function() {
	      this.meta = {};
	      constructor.call(this);
	    };
	  });

	  hook('locate', function(locate) {
	    return function(load) {
	      var meta = this.meta;
	      var name = load.name;

	      // NB for perf, maybe introduce a fast-path wildcard lookup cache here
	      // which is checked first

	      // apply wildcard metas
	      var bestDepth = 0;
	      var wildcardIndex;
	      for (var module in meta) {
	        wildcardIndex = module.indexOf('*');
	        if (wildcardIndex === -1)
	          continue;
	        if (module.substr(0, wildcardIndex) === name.substr(0, wildcardIndex)
	            && module.substr(wildcardIndex + 1) === name.substr(name.length - module.length + wildcardIndex + 1)) {
	          var depth = module.split('/').length;
	          if (depth > bestDepth)
	            bestDepth = depth;
	          extendMeta(load.metadata, meta[module], bestDepth != depth);
	        }
	      }

	      // apply exact meta
	      if (meta[name])
	        extendMeta(load.metadata, meta[name]);

	      return locate.call(this, load);
	    };
	  });

	  // detect any meta header syntax
	  // only set if not already set
	  var metaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/;
	  var metaPartRegEx = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;

	  function setMetaProperty(target, p, value) {
	    var pParts = p.split('.');
	    var curPart;
	    while (pParts.length > 1) {
	      curPart = pParts.shift();
	      target = target[curPart] = target[curPart] || {};
	    }
	    curPart = pParts.shift();
	    if (!(curPart in target))
	      target[curPart] = value;
	  }

	  hook('translate', function(translate) {
	    return function(load) {
	      // NB meta will be post-translate pending transpiler conversion to plugins
	      var meta = load.source.match(metaRegEx);
	      if (meta) {
	        var metaParts = meta[0].match(metaPartRegEx);

	        for (var i = 0; i < metaParts.length; i++) {
	          var curPart = metaParts[i];
	          var len = curPart.length;

	          var firstChar = curPart.substr(0, 1);
	          if (curPart.substr(len - 1, 1) == ';')
	            len--;

	          if (firstChar != '"' && firstChar != "'")
	            continue;

	          var metaString = curPart.substr(1, curPart.length - 3);
	          var metaName = metaString.substr(0, metaString.indexOf(' '));

	          if (metaName) {
	            var metaValue = metaString.substr(metaName.length + 1, metaString.length - metaName.length - 1);

	            if (metaName.substr(metaName.length - 2, 2) == '[]') {
	              metaName = metaName.substr(0, metaName.length - 2);
	              load.metadata[metaName] = load.metadata[metaName] || [];
	              load.metadata[metaName].push(metaValue);
	            }
	            else if (load.metadata[metaName] instanceof Array) {
	              // temporary backwards compat for previous "deps" syntax
	              warn.call(this, 'Module ' + load.name + ' contains deprecated "deps ' + metaValue + '" meta syntax.\nThis should be updated to "deps[] ' + metaValue + '" for pushing to array meta.');
	              load.metadata[metaName].push(metaValue);
	            }
	            else {
	              setMetaProperty(load.metadata, metaName, metaValue);
	            }
	          }
	          else {
	            load.metadata[metaString] = true;
	          }
	        }
	      }

	      return translate.call(this, load);
	    };
	  });
	})();
	/*
	  System bundles

	  Allows a bundle module to be specified which will be dynamically 
	  loaded before trying to load a given module.

	  For example:
	  SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

	  Will result in a load to "mybundle" whenever a load to "jquery"
	  or "bootstrap/js/bootstrap" is made.

	  In this way, the bundle becomes the request that provides the module
	*/

	(function() {
	  // bundles support (just like RequireJS)
	  // bundle name is module name of bundle itself
	  // bundle is array of modules defined by the bundle
	  // when a module in the bundle is requested, the bundle is loaded instead
	  // of the form SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.bundles = {};
	      this._loader.loadedBundles = {};
	    };
	  });

	  // assign bundle metadata for bundle loads
	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      var matched = false;

	      if (!(load.name in loader.defined))
	        for (var b in loader.bundles) {
	          for (var i = 0; i < loader.bundles[b].length; i++) {
	            var curModule = loader.bundles[b][i];

	            if (curModule == load.name) {
	              matched = true;
	              break;
	            }

	            // wildcard in bundles does not include / boundaries
	            if (curModule.indexOf('*') != -1) {
	              var parts = curModule.split('*');
	              if (parts.length != 2) {
	                loader.bundles[b].splice(i--, 1);
	                continue;
	              }
	              
	              if (load.name.substring(0, parts[0].length) == parts[0] &&
	                  load.name.substr(load.name.length - parts[1].length, parts[1].length) == parts[1] &&
	                  load.name.substr(parts[0].length, load.name.length - parts[1].length - parts[0].length).indexOf('/') == -1) {
	                matched = true;
	                break;
	              }
	            }
	          }

	          if (matched)
	            return loader['import'](b)
	            .then(function() {
	              return locate.call(loader, load);
	            });
	        }

	      return locate.call(loader, load);
	    };
	  });
	})();
	/*
	 * Dependency Tree Cache
	 * 
	 * Allows a build to pre-populate a dependency trace tree on the loader of 
	 * the expected dependency tree, to be loaded upfront when requesting the
	 * module, avoinding the n round trips latency of module loading, where 
	 * n is the dependency tree depth.
	 *
	 * eg:
	 * SystemJS.depCache = {
	 *  'app': ['normalized', 'deps'],
	 *  'normalized': ['another'],
	 *  'deps': ['tree']
	 * };
	 * 
	 * SystemJS.import('app') 
	 * // simultaneously starts loading all of:
	 * // 'normalized', 'deps', 'another', 'tree'
	 * // before "app" source is even loaded
	 *
	 */

	(function() {
	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.depCache = {};
	    }
	  });

	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      // load direct deps, in turn will pick up their trace trees
	      var deps = loader.depCache[load.name];
	      if (deps)
	        for (var i = 0; i < deps.length; i++)
	          loader['import'](deps[i], load.name);

	      return locate.call(loader, load);
	    };
	  });
	})();
	  
	System = new SystemJSLoader();

	__global.SystemJS = System;
	System.version = '0.19.18 Standard';
	  // -- exporting --

	  if (true)
	    module.exports = Loader;

	  __global.Reflect = __global.Reflect || {};
	  __global.Reflect.Loader = __global.Reflect.Loader || Loader;
	  __global.Reflect.global = __global.Reflect.global || __global;
	  __global.LoaderPolyfill = Loader;

	  if (!System) {
	    System = new SystemLoader();
	    System.constructor = SystemLoader;
	  }

	  if (true)
	    module.exports = System;

	  __global.System = System;

	})(typeof self != 'undefined' ? self : global);}

	// auto-load Promise and URL polyfills if needed in the browser
	try {
	  var hasURL = typeof URLPolyfill != 'undefined' || new URL('test:///').protocol == 'test:';
	}
	catch(e) {}

	if (typeof Promise === 'undefined' || !hasURL) {
	  // document.write
	  if (typeof document !== 'undefined') {
	    var scripts = document.getElementsByTagName('script');
	    $__curScript = scripts[scripts.length - 1];
	    var curPath = $__curScript.src;
	    var basePath = curPath.substr(0, curPath.lastIndexOf('/') + 1);
	    window.systemJSBootstrap = bootstrap;
	    document.write(
	      '<' + 'script type="text/javascript" src="' + basePath + 'system-polyfills.js">' + '<' + '/script>'
	    );
	  }
	  // importScripts
	  else if (typeof importScripts !== 'undefined') {
	    var basePath = '';
	    try {
	      throw new Error('_');
	    } catch (e) {
	      e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(m, url) {
	        basePath = url.replace(/\/[^\/]*$/, '/');
	      });
	    }
	    importScripts(basePath + 'system-polyfills.js');
	    bootstrap();
	  }
	  else {
	    bootstrap();
	  }
	}
	else {
	  bootstrap();
	}


	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./system": 26,
		"./system-csp-production": 27,
		"./system-csp-production.js": 27,
		"./system-csp-production.src": 29,
		"./system-csp-production.src.js": 29,
		"./system-polyfills": 30,
		"./system-polyfills.js": 30,
		"./system-polyfills.src": 32,
		"./system-polyfills.src.js": 32,
		"./system-register-only": 33,
		"./system-register-only.js": 33,
		"./system-register-only.src": 35,
		"./system-register-only.src.js": 35,
		"./system.js": 26
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 25;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS v0.19.18
	 */
	!function(){function e(){!function(e){function t(e,t){var n;return e instanceof Error?(n=new Error(e.message,e.fileName,e.lineNumber),M?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)):n=e+"\n	"+t,n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},z(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var i=s[0].length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r];return"string"==typeof n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),J.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e]||function(){})}function c(e){J=e(J||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=T.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(U){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&z(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,z(t,"__useDefault",{value:!0}),t}function p(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function h(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&null!==a&&"object"==typeof e[r]?e[r]=p(p({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function g(e){this.warnings&&"undefined"!=typeof console&&console.warn}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function b(){if(X[this.baseURL])return X[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new F(this.baseURL,L);return this.baseURL=e.href,X[this.baseURL]=e}function y(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function x(e){this.set("@system-env",this.newModule({browser:M,node:!!this._nodeRequire,production:e}))}function w(e){var t=e.match(V);return t&&"System.register"==e.substr(t[0].length,15)}function S(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function E(e){var t,n,r,r="~"==e[0],a=e.lastIndexOf("|");return-1!=a?(t=e.substr(a+1),n=e.substr(r,a-r)||"@system-env"):(t=null,n=e.substr(r)),{module:n,prop:t,negate:r}}function _(e){return(e.negate?"~":"")+e.module+(e.prop?"|"+e.prop:"")}function j(e,t,n){return this["import"](e.module,t).then(function(t){return e.prop?t=v(e.prop,t):"object"==typeof t&&t+""=="Module"&&(t=t["default"]),e.negate?!t:t})}function k(e,t){var n=e.match(Y);if(!n)return Promise.resolve(e);var r=E(n[0].substr(2,n[0].length-3));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.replace(Y,"#{"+_(r)+"}")}):j.call(this,r,t,!1).then(function(n){if("string"!=typeof n)throw new TypeError("The condition value for "+e+" doesn't resolve to a string.");if(-1!=n.indexOf("/"))throw new TypeError("Unabled to interpolate conditional "+e+(t?" in "+t:"")+"\n	The condition value "+n+' cannot contain a "/" separator.');return e.replace(Y,n)})}function P(e,t){var n=e.lastIndexOf("#?");if(-1==n)return Promise.resolve(e);var r=E(e.substr(n+2));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.substr(0,n)+"#?"+_(r)}):j.call(this,r,t,!0).then(function(t){return t?e.substr(0,n):"@empty"})}var R="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,M="undefined"!=typeof window&&"undefined"!=typeof document,O="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var z,T=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(z=Object.defineProperty)}catch(e){z=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var L;if("undefined"!=typeof document&&document.getElementsByTagName){if(L=document.baseURI,!L){var I=document.getElementsByTagName("base");L=I[0]&&I[0].href||window.location.href}L=L.split("#")[0].split("?")[0],L=L.substr(0,L.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)L="file://"+(O?"/":"")+process.cwd()+"/",O&&(L=L.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");L=e.location.href}var F=e.URLPolyfill||e.URL;z(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++_+">",r.isDeclarative=!0,E.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)g(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length&&i.linkSets[0].loads[0].name==i.name))return i.linkSets[0].done.then(function(){t(i)});var p=i||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==s?l(r,p):"fetch"==s?u(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function p(e){var t=!1;try{x(e,function(n,r){g(e,n,r),t=!0})}catch(n){g(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:j({}),evaluated:!0}:{module:j({})},t.status="linked",v(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function g(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+' as "'+l.key+'" from '+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==T.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=T.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=T.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function v(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=T.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=T.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function b(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function y(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function x(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=b(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",v(n,o)}}function w(e,t){return t.module.module}function S(){}function E(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var _=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return y(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(S(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(S(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||y(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],w(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||y(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return w(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){z(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]}})})(n[o]);return t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var j=a.prototype.newModule}();var A;i.prototype=a.prototype,o.prototype=new i;var D;if("undefined"!=typeof XMLHttpRequest)D=function(e,t,n,r){function a(){n(s.responseText)}function o(){r(new Error("XHR error"+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e))}var s=new XMLHttpRequest,i=!0,l=!1;if(!("withCredentials"in s)){var u=/^(\w+:)?\/\/([^\/]+)/.exec(e);u&&(i=u[2]===window.location.host,u[1]&&(i&=u[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(s=new XDomainRequest,s.onload=a,s.onerror=o,s.ontimeout=o,s.onprogress=function(){},s.timeout=0,l=!0),s.onreadystatechange=function(){4===s.readyState&&(0==s.status?s.responseText?a():(s.addEventListener("error",o),s.addEventListener("load",a)):200===s.status?a():o())},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),l?setTimeout(function(){s.send()},0):s.send(null)};else if("undefined"!="function"&&"undefined"!=typeof process){var C;D=function(e,t,n,r){if("file:///"!=e.substr(0,8))throw new Error('Unable to fetch "'+e+'". Only file URLs of the form file:/// allowed running in Node.');return C=C||__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),e=O?e.replace(/\//g,"\\").substr(8):e.substr(7),C.readFile(e,function(e,t){if(e)return r(e);var a=t+"";"\ufeff"===a[0]&&(a=a.substr(1)),n(a)})}}else{if("undefined"==typeof self||"undefined"==typeof self.fetch)throw new TypeError("No environment fetch API available.");D=function(e,t,n,r){var a={headers:{Accept:"application/x-es-module, */*"}};t&&("string"==typeof t&&(a.headers.Authorization=t),a.credentials="include"),fetch(e,a).then(function(e){if(e.ok)return e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)}).then(n,r)}}o.prototype.fetch=function(e){return new Promise(function(t,n){D(e.address,void 0,t,n)})};var q=function(){function t(t){var r=this;return Promise.resolve(e["typescript"==r.transpiler?"ts":r.transpiler]||(r.pluginLoader||r)["import"](r.transpiler)).then(function(e){e.__useDefault&&(e=e["default"]);var a;return a=e.Compiler?n:e.createLanguageService?s:o,"(function(__moduleName){"+a.call(r,t,e)+'\n})("'+t.name+'");\n//# sourceURL='+t.address+"!transpiled"})}function n(e,t){var n=this.traceurOptions||{};n.modules="instantiate",n.script=!1,void 0===n.sourceMaps&&(n.sourceMaps="inline"),n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1;var a=new t.Compiler(n);return r(e.source,a,n.filename)}function r(e,t,n){try{return t.compile(e,n)}catch(r){if(r.length)throw r[0];throw r}}function o(e,t){var n=this.babelOptions||{};return n.modules="system",void 0===n.sourceMap&&(n.sourceMap="inline"),n.inputSourceMap=e.metadata.sourceMap,n.filename=e.address,n.code=!0,n.ast=!1,t.transform(e.source,n).code}function s(e,t){var n=this.typescriptOptions||{};return n.target=n.target||t.ScriptTarget.ES5,void 0===n.sourceMap&&(n.sourceMap=!0),n.sourceMap&&n.inlineSourceMap!==!1&&(n.inlineSourceMap=!0),n.module=t.ModuleKind.System,t.transpile(e.source,n,e.address)}return a.prototype.transpiler="traceur",t}();u.prototype=o.prototype,l.prototype=new u,l.prototype.constructor=l,l.prototype.instantiate=function(){};var J,U=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(N){U=!1}var $,B=["main","format","defaultExtension","meta","map","basePath","depCache"];!function(){function n(t,n){0==l++&&(s=e.System),e.System=e.SystemJS=t,i=n}function r(){0==--l&&(e.System=e.SystemJS=s),i=void 0}function a(e){var t=e.source.lastIndexOf("\n"),n="esm"==e.metadata.format||"register"==e.metadata.format||e.metadata.bundle;return(n?"(function(System) {":"")+("cjs"==e.metadata.format?e.source.replace(c,""):e.source)+(n?"\n})(System);":"")+("\n//# sourceURL="!=e.source.substr(t,15)?"\n//# sourceURL="+e.address+(e.metadata.sourceMap?"!transpiled":""):"")+(e.metadata.sourceMap&&u&&"\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(e.metadata.sourceMap)))||"")}function o(o){if(o.metadata.integrity)throw new TypeError("Subresource integrity checking is not supported in Web Workers or Chrome Extensions.");try{n(this,o),new Function(a(o)).call(e),r()}catch(s){throw r(),t(s,"Evaluating "+o.address)}}var s,i,l=0;d("pushRegister_",function(){return function(e){return i?(this.reduceRegister_(i,e),!0):!1}});var u="undefined"!=typeof btoa,c=/^\#\!.*/;if("undefined"!=typeof document&&document.getElementsByTagName){var f,m=document.getElementsByTagName("script");$__curScript=m[m.length-1],$=function(e){if(!this.globalEvaluationScope)return o.call(this,e);f||(f=document.head||document.body||document.documentElement);var s=document.createElement("script");s.text=a(e);var i,l=window.onerror;if(window.onerror=function(n){i=t(n,"Evaluating "+e.address)},n(this,e),e.metadata.integrity&&s.setAttribute("integrity",e.metadata.integrity),e.metadata.nonce&&s.setAttribute("nonce",e.metadata.nonce),f.appendChild(s),f.removeChild(s),r(),window.onerror=l,i)throw i}}else if(true){var p="vm",h=__webpack_require__(25)(p);$=function(e){if(!this.globalEvaluationScope)return o.call(this,e);if(e.metadata.integrity)throw new TypeError("Subresource integrity checking is unavailable in Node.");try{n(this,e),h.runInThisContext(a(e)),r()}catch(s){throw r(),t(s.toString(),"Evaluating "+e.address)}}}else $=o}();var H=/^[^\/]+:\/\//,X={},W=new F(L);c(function(e){return function(){e.call(this),this.baseURL=L.substr(0,L.lastIndexOf("/")+1),this.map={},this.paths={},this.warnings=!1,this.defaultJSExtensions=!1,this.globalEvaluationScope=!0,this.pluginFirst=!1,(R||M&&window.chrome&&window.chrome.extension||M&&navigator.userAgent.match(/^Node\.js/))&&(this.globalEvaluationScope=!1),this.set("@empty",this.newModule({})),x.call(this,!1)}}),"undefined"=="function"||"undefined"==typeof process||process.browser||(l.prototype._nodeRequire=__webpack_require__(25));var Z=["assert","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","https","module","net","os","path","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","vm","zlib"];d("normalize",function(e){return function(e,t){if("."!=e[0]&&"/"!=e[0]&&!e.match(H)){var n=y(this.map,e);n&&(e=this.map[n]+e.substr(n.length))}if("@node/"==e.substr(0,6)&&-1!=Z.indexOf(e.substr(6))){if(!this._nodeRequire)throw new TypeError("Error loading "+e+". Can only load node core modules in Node.");this.set(e,this.newModule(m(this._nodeRequire(e.substr(6)))))}return("."==e[0]||"/"==e[0])&&(e=t?new F(e,t.replace(/#/g,"%05")).href.replace(/%05/g,"#"):new F(e,W).href),this.has(e)?e:e.match(H)?(this.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)&&(e+=".js"),e):(e=s(this.paths,e)||e,this.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)&&(e+=".js"),"."==e[0]||"/"==e[0]?new F(e,W).href:new F(e,b.call(this)).href)}});var G="undefined"!=typeof XMLHttpRequest;d("locate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return G?e.replace(/#/g,"%23"):e})}}),d("fetch",function(){return function(e){return new Promise(function(t,n){D(e.address,e.metadata.authorization,t,n)})}}),d("import",function(e){return function(t,n,r){return n&&n.name&&g.call(this,"SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing "+t+" from "+n.name),e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}}),d("translate",function(e){return function(t){return"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t)}}),d("instantiate",function(e){return function(e){if("json"==e.metadata.format&&!this.builder){var t=e.metadata.entry=S();t.deps=[],t.execute=function(){try{return JSON.parse(e.source)}catch(t){throw new Error("Invalid JSON file "+e.name)}}}}}),l.prototype.env="development",l.prototype.config=function(e){function t(e){for(var t in e)return!0}var n=this;if("warnings"in e&&(n.warnings=e.warnings),e.transpilerRuntime===!1&&(n._loader.loadedTranspilerRuntime=!0),e.baseURL){if(t(n.packages)||t(n.meta)||t(n.depCache)||t(n.bundles)||t(n.packageConfigPaths))throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");n.baseURL=e.baseURL,b.call(n)}if(e.defaultJSExtensions&&(n.defaultJSExtensions=e.defaultJSExtensions,g.call(n,"The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),e.pluginFirst&&(n.pluginFirst=e.pluginFirst),e.production&&x.call(n,!0),e.paths)for(var r in e.paths)n.paths[r]=e.paths[r];if(e.map){var a="";for(var r in e.map){var o=e.map[r];if("string"!=typeof o){a+=(a.length?", ":"")+'"'+r+'"';var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l="";for(var u in n.packages)i.substr(0,u.length)==u&&(!i[u.length]||"/"==i[u.length])&&l.split("/").length<u.split("/").length&&(l=u);l&&n.packages[l].main&&(i=i.substr(0,i.length-n.packages[l].main.length-1));var u=n.packages[i]=n.packages[i]||{};u.map=o}else n.map[r]=o}a&&g.call(n,"The map configuration for "+a+' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "'+r+'": { map: {...} } } }).')}if(e.packageConfigPaths){for(var d=[],c=0;c<e.packageConfigPaths.length;c++){var f=e.packageConfigPaths[c],m=Math.max(f.lastIndexOf("*")+1,f.lastIndexOf("/")),s=n.defaultJSExtensions&&".js"!=f.substr(m-3,3),p=n.decanonicalize(f.substr(0,m));s&&".js"==p.substr(p.length-3,3)&&(p=p.substr(0,p.length-3)),d[c]=p+f.substr(m)}n.packageConfigPaths=d}if(e.bundles)for(var r in e.bundles){for(var v=[],c=0;c<e.bundles[r].length;c++){var s=n.defaultJSExtensions&&".js"!=e.bundles[r][c].substr(e.bundles[r][c].length-3,3),y=n.decanonicalize(e.bundles[r][c]);s&&".js"==y.substr(y.length-3,3)&&(y=y.substr(0,y.length-3)),v.push(y)}n.bundles[r]=v}if(e.packages)for(var r in e.packages){if(r.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"'+r+'" is not a valid package name.');var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),"/"==i[i.length-1]&&(i=i.substr(0,i.length-1)),n.packages[i]=n.packages[i]||{},e.packages[r].modules&&(g.call(n,"Package "+r+' is configured with "modules", which is deprecated as it has been renamed to "meta".'),e.packages[r].meta=e.packages[r].modules,delete e.packages[r].modules);for(var w in e.packages[r])-1==T.call(B,w)&&g.call(n,'"'+w+'" is not a valid package configuration option in package '+r);h(n.packages[i],e.packages[r])}for(var S in e){var o=e[S],E=!1;if("baseURL"!=S&&"map"!=S&&"packages"!=S&&"bundles"!=S&&"paths"!=S&&"warnings"!=S&&"packageConfigPaths"!=S)if("object"!=typeof o||o instanceof Array)n[S]=o;else{n[S]=n[S]||{},("meta"==S||"depCache"==S)&&(E=!0);for(var r in o)if("meta"==S&&"*"==r[0])n[S][r]=o[r];else if(E){var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),n[S][i]=o[r]}else n[S][r]=o[r]}}},function(){function e(e,t){var n,r,a=0;for(var o in e.packages)t.substr(0,o.length)!==o||t.length!==o.length&&"/"!==t[o.length]||(r=o.split("/").length,r>a&&(n=o,a=r));return n}function t(e){var t=e.basePath&&"."!=e.basePath?e.basePath:"";return t&&("./"==t.substr(0,2)&&(t=t.substr(2)),"/"!=t[t.length-1]&&(t+="/")),t}function n(e,t,n,r,a,o){if(!a||"/"==a[a.length-1]||o||t.defaultExtension===!1)return a;if(a.match(Y))return a;var s=!1;if(t.meta&&p(t.meta,a,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?s=!0:void 0}),!s&&e.meta&&p(e.meta,n+"/"+r+a,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?s=!0:void 0}),s)return a;var i="."+(t.defaultExtension||"js");return a.substr(a.length-i.length)!=i?a+i:a}function r(e,r,o,s,i){if(!s){if(!r.main)return o+(e.defaultJSExtensions?".js":"");s="./"==r.main.substr(0,2)?r.main.substr(2):r.main}var l=t(r);if(r.map){var u="./"+s,d=y(r.map,u);if(d||(u="./"+n(e,r,o,l,s,i),u!="./"+s&&(d=y(r.map,u))),d)return a(e,r,o,l,d,u,i)}return o+"/"+l+n(e,r,o,l,s,i)}function a(e,t,r,a,o,s,i){var l=t.map[o];if("string"!=typeof l&&(l=o=s),"."==l)l=r;else if("./"==l.substr(0,2))return r+"/"+a+n(e,t,r,a,l.substr(2)+s.substr(o.length),i);return e.normalizeSync(l+s.substr(o.length),r+"/")}function o(e,r,a,o,s){if(!o){if(!r.main)return Promise.resolve(a+(e.defaultJSExtensions?".js":""));o="./"==r.main.substr(0,2)?r.main.substr(2):r.main}var l,u,d=t(r);return r.map&&(l="./"+o,u=y(r.map,l),u||(l="./"+n(e,r,a,d,o,s),l!="./"+o&&(u=y(r.map,l)))),(u?i(e,r,a,d,u,l,s):Promise.resolve()).then(function(t){return t?Promise.resolve(t):Promise.resolve(a+"/"+d+n(e,r,a,d,o,s))})}function s(e,t,r,a,o,s,i,l){if("."==s)s=r;else if("./"==s.substr(0,2))return Promise.resolve(r+"/"+a+n(e,t,r,a,s.substr(2)+i.substr(o.length),l)).then(function(t){return k.call(e,t,r+"/")});return e.normalize(s+i.substr(o.length),r+"/")}function i(e,t,n,r,a,o,i){var l=t.map[a];return"string"==typeof l?s(e,t,n,r,a,l,o,i):e.builder?Promise.resolve(n+"/#:"+o):e["import"](t.map["@env"]||"@system-env",n).then(function(e){for(var t in l){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return l[t]}}).then(function(l){return l?s(e,t,n,r,a,l,o,i):void 0})}function u(e){var t=e.lastIndexOf("*"),n=Math.max(t+1,e.lastIndexOf("/"));return{length:n,regEx:new RegExp("^("+e.substr(0,n).replace(/\*/g,"[^\\/]+")+")(\\/|$)"),wildcard:-1!=t}}function f(e,t){for(var n,r,a=!1,o=0;o<e.packageConfigPaths.length;o++){var s=e.packageConfigPaths[o],i=b[s]||(b[s]=u(s));if(!(t.length<i.length)){var l=t.match(i.regEx);!l||n&&(a&&i.wildcard||!(n.length<l[1].length))||(n=l[1],a=!i.wildcard,r=n+s.substr(i.length))}}return n?{packageName:n,configPath:r}:void 0}function m(e,n,r){var a=e.pluginLoader||e;return(a.meta[r]=a.meta[r]||{}).format="json",a.load(r).then(function(){pkgConfig=a.get(r);var o=pkgConfig["default"];o.systemjs&&(o=o.systemjs),o.modules&&(o.meta=o.modules,g.call(e,"Package config file "+r+' is configured with "modules", which is deprecated as it has been renamed to "meta".'));for(var s in o)-1==T.call(B,s)&&delete o[s];var i=e.packages[n]=e.packages[n]||{};h(i,o,!0);var l=t(i);if(o.depCache){for(var u in o.depCache){var d;d="./"==u.substr(0,2)?n+"/"+l+u.substr(2):coreResolve.call(e,u),e.depCache[d]=(e.depCache[d]||[]).concat(o.depCache[u])}delete o.depCache}return i})}function p(e,t,n){var r;for(var a in e){var o="./"==a.substr(0,2)?"./":"";if(o&&(a=a.substr(2)),r=a.indexOf("*"),-1!==r&&a.substr(0,r)==t.substr(0,r)&&a.substr(r+1)==t.substr(t.length-a.length+r+1)&&n(a,e[o+a],a.split("/").length))return}var s=e[t]||e["./"+t];s&&n(s,s,0)}c(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths=[]}}),l.prototype.normalizeSync=l.prototype.decanonicalize=l.prototype.normalize,d("decanonicalize",function(t){return function(n,r){var a=t.call(this,n,r);if(!this.defaultJSExtensions)return a;var o=e(this,a),s=this.packages[o],i=s&&s.defaultExtension;return void 0==i&&s&&s.meta&&p(s.meta,a.substr(o),function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?(i=!1,!0):void 0}),(i===!1||i&&".js"!=i)&&".js"!=n.substr(n.length-3,3)&&".js"==a.substr(a.length-3,3)&&(a=a.substr(0,a.length-3)),a}}),d("normalizeSync",function(n){return function(o,s,i){g.call(this,"SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.");var l=this;if(i=i===!0,s)var u=e(l,s)||l.defaultJSExtensions&&".js"==s.substr(s.length-3,3)&&e(l,s.substr(0,s.length-3));var d=u&&l.packages[u];if(d){var c=t(d);c&&s.substr(u.length+1,c.length)==c&&(s=u+s.substr(u.length+c.length))}if(d&&"."!=o[0]){var m=d.map,p=m&&y(m,o);if(p&&"string"==typeof m[p])return a(l,d,u,t(d),p,o,i)}var h=l.defaultJSExtensions&&".js"!=o.substr(o.length-3,3),v=n.call(l,o,s);h&&".js"!=v.substr(v.length-3,3)&&(h=!1),h&&(v=v.substr(0,v.length-3));var b=f(l,v),x=b&&b.packageName||e(l,v);if(!x)return v+(h?".js":"");var w=v.substr(x.length+1);return r(l,l.packages[x]||{},x,w,i)}}),d("normalize",function(n){return function(r,a,s){var l=this;return s=s===!0,Promise.resolve().then(function(){if(a)var n=e(l,a)||l.defaultJSExtensions&&".js"==a.substr(a.length-3,3)&&e(l,a.substr(0,a.length-3));var o=n&&l.packages[n];if(o){var u=t(o);u&&a.substr(n.length+1,u.length)==u&&(a=n+a.substr(n.length+u.length))}if(o&&"./"!=r.substr(0,2)){var d=o.map,c=d&&y(d,r);if(c)return i(l,o,n,u,c,r,s)}return Promise.resolve()}).then(function(t){if(t)return t;var i=l.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),u=n.call(l,r,a);i&&".js"!=u.substr(u.length-3,3)&&(i=!1),i&&(u=u.substr(0,u.length-3));var d=f(l,u),c=d&&d.packageName||e(l,u);if(!c)return Promise.resolve(u+(i?".js":""));var p=l.packages[c],h=p&&(p.configured||!d);return(h?Promise.resolve(p):m(l,c,d.configPath)).then(function(e){var t=u.substr(c.length+1);return o(l,e,c,t,s)})})}});var b={};d("locate",function(n){return function(r){var a=this;return Promise.resolve(n.call(this,r)).then(function(n){var o=e(a,r.name);if(o){var s=a.packages[o],i=t(s),l=r.name.substr(o.length+i.length+1);s.format&&(r.metadata.format=r.metadata.format||s.format);var u={};if(s.meta){var d=0;p(s.meta,l,function(e,t,n){n>d&&(d=n),h(u,t,n&&d>n)}),u.alias&&"./"==u.alias.substr(0,2)&&(u.alias=o+u.alias.substr(1)),u.loader&&"./"==u.loader.substr(0,2)&&(u.loader=o+u.loader.substr(1)),h(r.metadata,u)}}return n})}})}(),function(){function t(){if(o&&"interactive"===o.script.readyState)return o.load;for(var e=0;e<l.length;e++)if("interactive"==l[e].script.readyState)return o=l[e],o.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),s=t;try{importScripts(t.address)}catch(r){s=null,n(r)}s=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s=null,i=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),l=[],u=0,c=[];d("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(s?this.reduceRegister_(s,n):i?this.reduceRegister_(t(),n):u?c.push(n):this.reduceRegister_(null,n),!0)}}),d("fetch",function(t){return function(s){var d=this;return"json"!=s.metadata.format&&s.metadata.scriptLoad&&(M||R)?R?n(d,s):new Promise(function(t,n){function f(e){if(!h.readyState||"loaded"==h.readyState||"complete"==h.readyState){if(u--,s.metadata.entry||c.length){if(!i){for(var r=0;r<c.length;r++)d.reduceRegister_(s,c[r]);c=[]}}else d.reduceRegister_(s);p(),s.metadata.entry||s.metadata.bundle||n(new Error(s.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),
	t("")}}function m(e){p(),n(new Error("Unable to load script "+s.address))}function p(){if(e.System=a,h.detachEvent){h.detachEvent("onreadystatechange",f);for(var t=0;t<l.length;t++)l[t].script==h&&(o&&o.script==h&&(o=null),l.splice(t,1))}else h.removeEventListener("load",f,!1),h.removeEventListener("error",m,!1);r.removeChild(h)}var h=document.createElement("script");h.async=!0,s.metadata.integrity&&h.setAttribute("integrity",s.metadata.integrity),i?(h.attachEvent("onreadystatechange",f),l.push({script:h,load:s})):(h.addEventListener("load",f,!1),h.addEventListener("error",m,!1)),u++,a=e.System,h.src=s.address,r.appendChild(h)}):t.call(this,s)}})}();var V=/^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==T.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<l){if(null!==i.groupIndex&&(r[i.groupIndex].splice(T.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=l}t(i,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var s=!!r.declarative==a.length%2,l=a.length-1;l>=0;l--){for(var u=a[l],d=0;d<u.length;d++){var c=u[d];s?o(c,n):i(c,n)}s=!s}}}function r(){}function a(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new r,importers:[]})}function o(t,n){if(!t.module){var r=n._loader.moduleRecords,s=t.module=a(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(s.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,a=s.importers.length;a>r;r++){var o=s.importers[r];if(!o.locked){var l=T.call(o.dependencies,s);o.setters[l](i)}}return s.locked=!1,t},t.name);if(s.setters=l.setters,s.execute=l.execute,!s.setters||!s.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(s),s.dependencies.push(p)):s.dependencies.push(null);for(var h=t.originalIndices[u],g=0,v=h.length;v>g;++g){var b=h[g];s.setters[b]&&s.setters[b](c)}}}}function s(e,t){var n,r=t.defined[e];if(r)r.declarative?u(e,[],t):r.evaluated||i(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function i(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,l=t.normalizedDeps.length;l>o;o++){var u=t.normalizedDeps[o],d=n.defined[u];d&&i(d,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r],n);throw new Error("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esmExports&&r!==e?t.esModule=m(r):t.esModule={"default":r}}}function u(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==T.call(n,i)&&(r.defined[i]?u(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}l.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=S();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},l.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=S();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},d("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Unexpected anonymous System.register call.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),z(r,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):("register"!=t.metadata.format||t.metadata.authorization||t.metadata.scriptLoad===!1||(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&w(t.source))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof $&&$.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=S(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var s=[],i=0,l=r.deps.length;l>i;i++)s.push(Promise.resolve(a.normalize(r.deps[i],t.name)));return Promise.all(s).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),u(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}(),function(){var t=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,n=/\$traceurRuntime\s*\./,r=/babelHelpers\s*\./;d("translate",function(a){return function(o){var s=this;return a.call(s,o).then(function(a){if("esm"==o.metadata.format||"es6"==o.metadata.format||!o.metadata.format&&s.transpiler!==!1&&a.match(t)){if("es6"==o.metadata.format&&g.call(s,"Module "+o.name+' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".'),o.metadata.format="esm",s.transpiler===!1){if(s.builder)return a;throw new TypeError("Unable to dynamically transpile ES module as SystemJS.transpiler set to false.")}return s._loader.loadedTranspiler=s._loader.loadedTranspiler||!1,s.pluginLoader&&(s.pluginLoader._loader.loadedTranspiler=s._loader.loadedTranspiler||!1),(s._loader.transpilerPromise||(s._loader.transpilerPromise=Promise.resolve(e["typescript"==s.transpiler?"ts":s.transpiler]||(s.pluginLoader||s)["import"](s.transpiler)))).then(function(e){return s._loader.loadedTranspilerRuntime=!0,e.translate?e==o.metadata.loaderModule?o.source:Promise.resolve(e.translate.call(s,o)).then(function(e){return"esm"==o.metadata.format&&!s.builder&&w(e)&&(o.metadata.format="register"),e}):(s.builder&&(o.metadata.originalSource=o.source),q.call(s,o).then(function(e){return o.metadata.sourceMap=void 0,e}))})}if(s.transpiler===!1)return a;if(s._loader.loadedTranspiler!==!1||"traceur"!=s.transpiler&&"typescript"!=s.transpiler&&"babel"!=s.transpiler||o.name!=s.normalizeSync(s.transpiler)||(a.length>100&&!o.metadata.format&&(o.metadata.format="global","traceur"===s.transpiler&&(o.metadata.exports="traceur"),"typescript"===s.transpiler&&(o.metadata.exports="ts")),s._loader.loadedTranspiler=!0),s._loader.loadedTranspilerRuntime===!1&&(o.name==s.normalizeSync("traceur-runtime")||o.name==s.normalizeSync("babel/external-helpers*"))&&(a.length>100&&(o.metadata.format=o.metadata.format||"global"),s._loader.loadedTranspilerRuntime=!0),("register"==o.metadata.format||o.metadata.bundle)&&s._loader.loadedTranspilerRuntime!==!0){if(!e.$traceurRuntime&&o.source.match(n))return s._loader.loadedTranspilerRuntime=s._loader.loadedTranspilerRuntime||!1,s["import"]("traceur-runtime").then(function(){return a});if(!e.babelHelpers&&o.source.match(r))return s._loader.loadedTranspilerRuntime=s._loader.loadedTranspilerRuntime||!1,s["import"]("babel/external-helpers").then(function(){return a})}return a})}})}();var K="undefined"!=typeof self?"self":"global";d("fetch",function(e){return function(t){return t.metadata.exports&&!t.metadata.format&&(t.metadata.format="global"),"global"!=t.metadata.format||t.metadata.authorization||!t.metadata.exports||t.metadata.globals||t.metadata.deps&&0!=t.metadata.deps.length||t.metadata.scriptLoad===!1||(t.metadata.scriptLoad=!0),e.call(this,t)}}),d("instantiate",function(e){return function(t){var n=this;if(t.metadata.format||(t.metadata.format="global"),"global"==t.metadata.format&&!t.metadata.registered){var r=S();t.metadata.entry=r,r.deps=[];for(var a in t.metadata.globals){var o=t.metadata.globals[a];o&&r.deps.push(o)}r.execute=function(e,r,a){var o;if(t.metadata.globals){o={};for(var s in t.metadata.globals)t.metadata.globals[s]&&(o[s]=e(t.metadata.globals[s]))}var i=t.metadata.exports;i&&(t.source+="\n"+K+'["'+i+'"] = '+i+";");var l=n.get("@@global-helpers").prepareGlobal(a.id,i,o);return $.call(n,t),l()}}return e.call(this,t)}}),d("reduceRegister_",function(t){return function(n,r){if(r||!n.metadata.exports)return t.call(this,n,r);n.metadata.format="global";var a=n.metadata.entry=S();a.deps=n.metadata.deps;var o=v(n.metadata.exports,e);a.execute=function(){return o}}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==T.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var i;if(a){i={};for(var l in a)i[l]=e[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=v(n,e);else{var a,l,u={};r(function(e,t){o[e]!==t&&"undefined"!=typeof t&&(u[e]=t,"undefined"!=typeof a?l||a===t||(l=!0):a=t)}),t=l?u:a}if(i)for(var d in i)e[d]=i[d];return e.define=s,t}}}))}}),function(){function t(e){function t(e,t){for(var n=0;n<e.length;n++)if(e[n][0]<t.index&&e[n][1]>t.index)return!0;return!1}r.lastIndex=a.lastIndex=o.lastIndex=0;var n,s=[],i=[],l=[];if(e.length/e.split("\n").length<200){for(;n=o.exec(e);)i.push([n.index,n.index+n[0].length]);for(;n=a.exec(e);)t(i,n)||l.push([n.index,n.index+n[0].length])}for(;n=r.exec(e);)if(!t(i,n)&&!t(l,n)){var u=n[1].substr(1,n[1].length-2);if(u.match(/"|'/))continue;"/"==u[u.length-1]&&(u=u.substr(0,u.length-1)),s.push(u)}return s}var n=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,a=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;d("instantiate",function(a){return function(o){var s=this;if(o.metadata.format||(n.lastIndex=0,r.lastIndex=0,(r.exec(o.source)||n.exec(o.source))&&(o.metadata.format="cjs")),"cjs"==o.metadata.format){var i=o.metadata.deps,l=o.metadata.cjsRequireDetection===!1?[]:t(o.source);for(var u in o.metadata.globals)o.metadata.globals[u]&&l.push(o.metadata.globals[u]);var d=S();o.metadata.entry=d,d.deps=l,d.executingRequire=!0,d.execute=function(t,n,r){function a(e){return"/"==e[e.length-1]&&(e=e.substr(0,e.length-1)),t.apply(this,arguments)}for(var l=0;l<i.length;l++)a(i[l]);var u=e.define;e.define=void 0;var d=s.get("@@cjs-helpers").getPathVars(r.id);e.__cjsWrapper={exports:n,args:[a,n,r,d.filename,d.dirname,e,e]};var c="";if(o.metadata.globals)for(var f in o.metadata.globals)c+="var "+f+' = require("'+o.metadata.globals[f]+'");';o.source="(function(require, exports, module, __filename, __dirname, global, GLOBAL) {"+c+o.source+"\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);",$.call(s,o),e.__cjsWrapper=void 0,e.define=u}}return a.call(s,o)}})}(),c(function(e){return function(){var t=this;if(e.call(t),"undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var n=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(e){var t,r=e.lastIndexOf("!");t=-1!=r?e.substr(0,r):e;var a=t.split("/");return a.pop(),a=a.join("/"),"file:///"==t.substr(0,8)?(t=t.substr(7),a=a.substr(7),O&&(t=t.substr(1),a=a.substr(1))):n&&t.substr(0,n.length)===n&&(t=t.substr(n.length),a=a.substr(n.length)),{filename:t,dirname:a}}}))}}),c(function(t){return function(){function n(e,t){e=e.replace(i,"");var n=e.match(c),r=(n[1].split(",")[t]||"require").replace(f,""),a=m[r]||(m[r]=new RegExp(l+r+u,"g"));a.lastIndex=0;for(var o,s=[];o=a.exec(e);)s.push(o[2]||o[3]);return s}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),i=s.decanonicalize(e,a);o&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l=s.get(i);if(!l)throw new Error('Module not already loaded loading "'+e+'" from "'+a+'".');return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var u=[],d=0;d<e.length;d++)u.push(s["import"](e[d],a));Promise.all(u).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,o){function i(t,n,i){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(s,e,n,a,i.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));i.uri=i.id,i.config=function(){},-1!=d&&f.splice(d,0,i),-1!=u&&f.splice(u,0,n),-1!=l&&(c.toUrl=function(e){var t=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=s.decanonicalize(e,i.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(l,0,c));var p=e.require;e.require=r;var h=o.apply(-1==u?e:n,f);return e.require=p,"undefined"==typeof h&&i&&(h=i.exports),"undefined"!=typeof h?h:void 0}"string"!=typeof t&&(o=a,a=t,t=null),a instanceof Array||(o=a,a=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===a[a.length-1]&&a.pop();var l,u,d;-1!=(l=T.call(a,"require"))&&(a.splice(l,1),t||(a=a.concat(n(o.toString(),l)))),-1!=(u=T.call(a,"exports"))&&a.splice(u,1),-1!=(d=T.call(a,"module"))&&a.splice(d,1);var c=S();c.name=t&&(s.decanonicalize||s.normalize).call(s,t),c.deps=a,c.execute=i,s.pushRegister_({amd:!0,entry:c})}function o(){var t=e.module,n=e.exports,r=e.define;return e.module=void 0,e.exports=void 0,e.define=a,function(){e.define=r,e.module=t,e.exports=n}}var s=this;t.call(this);var i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",u="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",c=/\(([^\)]*)\)/,f=/^\s+|\s+$/g,m={};a.amd={},d("reduceRegister_",function(e){return function(t,n){if(!n||!n.amd)return e.call(this,t,n);var r=t&&t.metadata,a=n.entry;if(r&&(r.format="amd"),a.name)r&&(r.entry||r.bundle?r.entry=void 0:r.entry=a,r.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!r)throw new TypeError("Unexpected anonymous AMD define.");if(r.entry)throw new TypeError("Multiple defines for anonymous module "+t.name);r.entry=a}}}),s.set("@@amd-helpers",s.newModule({createDefine:o,require:r,define:a})),s.amdDefine=a,s.amdRequire=r}}),function(){var e=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;d("fetch",function(e){return function(t){return"amd"!==t.metadata.format||t.metadata.authorization||t.metadata.scriptLoad===!1||(t.metadata.scriptLoad=!0),t.metadata.scriptLoad&&M&&this.get("@@amd-helpers").createDefine(),e.call(this,t)}}),d("instantiate",function(t){return function(n){var r=this;if("amd"==n.metadata.format||!n.metadata.format&&n.source.match(e))if(n.metadata.format="amd",r.builder||r.execute===!1)n.metadata.execute=function(){return n.metadata.builderExecute.apply(this,arguments)};else{var a=this.get("@@amd-helpers").createDefine();try{$.call(r,n)}finally{a()}if(!n.metadata.entry&&!n.metadata.bundle)throw new TypeError("AMD module "+n.name+" did not define")}return t.call(r,n)}})}(),function(){function e(e,t){if(t){var n;if(e.pluginFirst){if(-1!=(n=t.lastIndexOf("!")))return t.substr(n+1)}else if(-1!=(n=t.indexOf("!")))return t.substr(0,n);return t}}function t(e,t){var n,r,a=t.lastIndexOf("!");return-1!=a?(e.pluginFirst?(n=t.substr(a+1),r=t.substr(0,a)):(n=t.substr(0,a),r=t.substr(a+1)||n.substr(n.lastIndexOf(".")+1)),{argument:n,plugin:r}):void 0}function n(e,t,n,r){return r&&".js"==t.substr(t.length-3,3)&&(t=t.substr(0,t.length-3)),e.pluginFirst?n+"!"+t:t+"!"+n}function r(e,t){return e.defaultJSExtensions&&".js"!=t.substr(t.length-3,3)}function a(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);if(!u)return a.call(this,o,s,i);var d=l.normalizeSync(u.argument,s,!0),c=l.normalizeSync(u.plugin,s,!0);return n(l,d,c,r(l,u.argument))}}d("decanonicalize",a),d("normalizeSync",a),d("normalize",function(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);return u?Promise.all([l.normalize(u.argument,s,!0),l.normalize(u.plugin,s,!0)]).then(function(e){return n(l,e[0],e[1],r(l,u.argument))}):a.call(l,o,s,i)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){var n=t.metadata.loader;if(!n)return e;if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch&&"defined"!=t.metadata.format?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=t.metadata.sourceMap;if(n&&"object"==typeof n){var r=t.name.split("!")[0];n.file=r+"!transpiled",n.sources&&1!=n.sources.length||(n.sources=[r]),t.metadata.sourceMap=JSON.stringify(n)}var a=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.translate.call(a,t)).then(function(n){return"string"==typeof n&&(t.source=n),e.call(a,t)}):e.call(a,t)}}),d("instantiate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate&&!n.builder&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t)).then(function(r){return t.metadata.entry=S(),t.metadata.entry.execute=function(){return r},t.metadata.entry.deps=t.metadata.deps,t.metadata.format="defined",e.call(n,t)}):e.call(n,t)}})}();var Y=/#\{[^\}]+\}/;d("normalize",function(e){return function(t,n,r){var a=this;return P.call(a,t,n).then(function(t){return e.call(a,t,n,r)}).then(function(e){return k.call(a,e,n)})}}),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];if(n){t.metadata.format="defined";var a=S();return this.defined[t.name]=a,a.declarative=!0,a.deps=r.concat([n]),a.declare=function(e){return{setters:[function(t){for(var n in t)e(n,t[n]);t.__useDefault&&(a.module.exports.__useDefault=!0)}],execute:function(){}}},""}return e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(o=i),h(t.metadata,r[s],o!=i)}return r[a]&&h(t.metadata,r[a]),e.call(this,t)}});var t=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,n=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,'"'==d||"'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(g.call(this,"Module "+a.name+' contains deprecated "deps '+m+'" meta syntax.\nThis should be updated to "deps[] '+m+'" for pushing to array meta.'),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),d("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var s=n.bundles[a][o];if(s==t.name){r=!0;break}if(-1!=s.indexOf("*")){var i=s.split("*");if(2!=i.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,i[0].length)==i[0]&&t.name.substr(t.name.length-i[1].length,i[1].length)==i[1]&&-1==t.name.substr(i[0].length,t.name.length-i[1].length-i[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a],t.name);return e.call(n,t)}})}(),A=new l,e.SystemJS=A,A.version="0.19.18 Standard","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,A||(A=new o,A.constructor=o),"object"==typeof exports&&(module.exports=A),e.System=A}("undefined"!=typeof self?self:global)}try{var t="undefined"!=typeof URLPolyfill||"test:"==new URL("test:///").protocol}catch(n){}if("undefined"!=typeof Promise&&t)e();else if("undefined"!=typeof document){var r=document.getElementsByTagName("script");$__curScript=r[r.length-1];var a=$__curScript.src,o=a.substr(0,a.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write('<script type="text/javascript" src="'+o+'system-polyfills.js"></script>')}else if("undefined"!=typeof importScripts){var o="";try{throw new Error("_")}catch(n){n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){o=t.replace(/\/[^\/]*$/,"/")})}importScripts(o+"system-polyfills.js"),e()}else e()}();
	//# sourceMappingURL=system.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS v0.19.18
	 */
	!function(){function e(){!function(e){function t(e,t){var n;return e instanceof Error?(n=new Error(e.message,e.fileName,e.lineNumber),_?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)):n=e+"\n	"+t,n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},M(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var i=s[0].length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r];return"string"==typeof n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),A.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e]||function(){})}function c(e){A=e(A||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=I.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(U){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&M(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,M(t,"__useDefault",{value:!0}),t}function p(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function h(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&null!==a&&"object"==typeof e[r]?e[r]=p(p({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function g(e){this.warnings&&"undefined"!=typeof console&&console.warn}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function b(){if(B[this.baseURL])return B[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new D(this.baseURL,L);return this.baseURL=e.href,B[this.baseURL]=e}function y(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function w(e){this.set("@system-env",this.newModule({browser:_,node:!!this._nodeRequire,production:e}))}function x(e){var t=e.match(V);return t&&"System.register"==e.substr(t[0].length,15)}function S(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function E(e){var t,n,r,r="~"==e[0],a=e.lastIndexOf("|");return-1!=a?(t=e.substr(a+1),n=e.substr(r,a-r)||"@system-env"):(t=null,n=e.substr(r)),{module:n,prop:t,negate:r}}function k(e){return(e.negate?"~":"")+e.module+(e.prop?"|"+e.prop:"")}function j(e,t,n){return this["import"](e.module,t).then(function(t){return e.prop?t=v(e.prop,t):"object"==typeof t&&t+""=="Module"&&(t=t["default"]),e.negate?!t:t})}function P(e,t){var n=e.match(Y);if(!n)return Promise.resolve(e);var r=E(n[0].substr(2,n[0].length-3));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.replace(Y,"#{"+k(r)+"}")}):j.call(this,r,t,!1).then(function(n){if("string"!=typeof n)throw new TypeError("The condition value for "+e+" doesn't resolve to a string.");if(-1!=n.indexOf("/"))throw new TypeError("Unabled to interpolate conditional "+e+(t?" in "+t:"")+"\n	The condition value "+n+' cannot contain a "/" separator.');return e.replace(Y,n)})}function O(e,t){var n=e.lastIndexOf("#?");if(-1==n)return Promise.resolve(e);var r=E(e.substr(n+2));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.substr(0,n)+"#?"+k(r)}):j.call(this,r,t,!0).then(function(t){return t?e.substr(0,n):"@empty"})}var R="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,_="undefined"!=typeof window&&"undefined"!=typeof document,z="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var M,I=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(M=Object.defineProperty)}catch(e){M=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var L;if("undefined"!=typeof document&&document.getElementsByTagName){if(L=document.baseURI,!L){var T=document.getElementsByTagName("base");L=T[0]&&T[0].href||window.location.href}L=L.split("#")[0].split("?")[0],L=L.substr(0,L.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)L="file://"+(z?"/":"")+process.cwd()+"/",z&&(L=L.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");L=e.location.href}var D=e.URLPolyfill||e.URL;M(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++k+">",r.isDeclarative=!0,E.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)g(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length&&i.linkSets[0].loads[0].name==i.name))return i.linkSets[0].done.then(function(){t(i)});var p=i||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==s?l(r,p):"fetch"==s?u(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function p(e){var t=!1;try{w(e,function(n,r){g(e,n,r),t=!0})}catch(n){g(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:j({}),evaluated:!0}:{module:j({})},t.status="linked",v(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function g(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+' as "'+l.key+'" from '+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==I.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=I.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=I.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function v(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=I.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=I.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function b(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function y(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function w(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=b(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",v(n,o)}}function x(e,t){return t.module.module}function S(){}function E(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var k=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return y(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(S(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(S(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||y(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],x(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||y(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return x(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){M(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]}})})(n[o]);return t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var j=a.prototype.newModule}();var J;i.prototype=a.prototype,o.prototype=new i;var C;if("undefined"!=typeof XMLHttpRequest)C=function(e,t,n,r){function a(){n(s.responseText)}function o(){r(new Error("XHR error"+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e))}var s=new XMLHttpRequest,i=!0,l=!1;if(!("withCredentials"in s)){var u=/^(\w+:)?\/\/([^\/]+)/.exec(e);u&&(i=u[2]===window.location.host,u[1]&&(i&=u[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(s=new XDomainRequest,s.onload=a,s.onerror=o,s.ontimeout=o,s.onprogress=function(){},s.timeout=0,l=!0),s.onreadystatechange=function(){4===s.readyState&&(0==s.status?s.responseText?a():(s.addEventListener("error",o),s.addEventListener("load",a)):200===s.status?a():o())},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),l?setTimeout(function(){s.send()},0):s.send(null)};else if("undefined"!="function"&&"undefined"!=typeof process){var q;C=function(e,t,n,r){if("file:///"!=e.substr(0,8))throw new Error('Unable to fetch "'+e+'". Only file URLs of the form file:/// allowed running in Node.');return q=q||__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),e=z?e.replace(/\//g,"\\").substr(8):e.substr(7),q.readFile(e,function(e,t){if(e)return r(e);var a=t+"";"\ufeff"===a[0]&&(a=a.substr(1)),n(a)})}}else{if("undefined"==typeof self||"undefined"==typeof self.fetch)throw new TypeError("No environment fetch API available.");C=function(e,t,n,r){var a={headers:{Accept:"application/x-es-module, */*"}};t&&("string"==typeof t&&(a.headers.Authorization=t),a.credentials="include"),fetch(e,a).then(function(e){if(e.ok)return e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)}).then(n,r)}}o.prototype.fetch=function(e){return new Promise(function(t,n){C(e.address,void 0,t,n)})},u.prototype=o.prototype,l.prototype=new u,l.prototype.constructor=l,l.prototype.instantiate=function(){};var A,U=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(N){U=!1}var F=["main","format","defaultExtension","meta","map","basePath","depCache"],$=/^[^\/]+:\/\//,B={},H=new D(L);c(function(e){return function(){e.call(this),this.baseURL=L.substr(0,L.lastIndexOf("/")+1),this.map={},this.paths={},this.warnings=!1,this.defaultJSExtensions=!1,this.globalEvaluationScope=!0,this.pluginFirst=!1,(R||_&&window.chrome&&window.chrome.extension||_&&navigator.userAgent.match(/^Node\.js/))&&(this.globalEvaluationScope=!1),this.set("@empty",this.newModule({})),w.call(this,!1)}}),"undefined"=="function"||"undefined"==typeof process||process.browser||(l.prototype._nodeRequire=__webpack_require__(25));var X=["assert","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","https","module","net","os","path","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","vm","zlib"];d("normalize",function(e){return function(e,t){if("."!=e[0]&&"/"!=e[0]&&!e.match($)){var n=y(this.map,e);n&&(e=this.map[n]+e.substr(n.length))}if("@node/"==e.substr(0,6)&&-1!=X.indexOf(e.substr(6))){if(!this._nodeRequire)throw new TypeError("Error loading "+e+". Can only load node core modules in Node.");this.set(e,this.newModule(m(this._nodeRequire(e.substr(6)))))}return("."==e[0]||"/"==e[0])&&(e=t?new D(e,t.replace(/#/g,"%05")).href.replace(/%05/g,"#"):new D(e,H).href),this.has(e)?e:e.match($)?(this.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)&&(e+=".js"),e):(e=s(this.paths,e)||e,this.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)&&(e+=".js"),"."==e[0]||"/"==e[0]?new D(e,H).href:new D(e,b.call(this)).href)}});var G="undefined"!=typeof XMLHttpRequest;d("locate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return G?e.replace(/#/g,"%23"):e})}}),d("fetch",function(){return function(e){return new Promise(function(t,n){C(e.address,e.metadata.authorization,t,n)})}}),d("import",function(e){return function(t,n,r){return n&&n.name&&g.call(this,"SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing "+t+" from "+n.name),e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}}),d("translate",function(e){return function(t){return"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t)}}),d("instantiate",function(e){return function(e){if("json"==e.metadata.format&&!this.builder){var t=e.metadata.entry=S();t.deps=[],t.execute=function(){try{return JSON.parse(e.source)}catch(t){throw new Error("Invalid JSON file "+e.name)}}}}}),l.prototype.env="development",l.prototype.config=function(e){function t(e){for(var t in e)return!0}var n=this;if("warnings"in e&&(n.warnings=e.warnings),e.transpilerRuntime===!1&&(n._loader.loadedTranspilerRuntime=!0),e.baseURL){if(t(n.packages)||t(n.meta)||t(n.depCache)||t(n.bundles)||t(n.packageConfigPaths))throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");n.baseURL=e.baseURL,b.call(n)}if(e.defaultJSExtensions&&(n.defaultJSExtensions=e.defaultJSExtensions,g.call(n,"The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),e.pluginFirst&&(n.pluginFirst=e.pluginFirst),e.production&&w.call(n,!0),e.paths)for(var r in e.paths)n.paths[r]=e.paths[r];if(e.map){var a="";for(var r in e.map){var o=e.map[r];if("string"!=typeof o){a+=(a.length?", ":"")+'"'+r+'"';var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l="";for(var u in n.packages)i.substr(0,u.length)==u&&(!i[u.length]||"/"==i[u.length])&&l.split("/").length<u.split("/").length&&(l=u);l&&n.packages[l].main&&(i=i.substr(0,i.length-n.packages[l].main.length-1));var u=n.packages[i]=n.packages[i]||{};u.map=o}else n.map[r]=o}a&&g.call(n,"The map configuration for "+a+' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "'+r+'": { map: {...} } } }).')}if(e.packageConfigPaths){for(var d=[],c=0;c<e.packageConfigPaths.length;c++){var f=e.packageConfigPaths[c],m=Math.max(f.lastIndexOf("*")+1,f.lastIndexOf("/")),s=n.defaultJSExtensions&&".js"!=f.substr(m-3,3),p=n.decanonicalize(f.substr(0,m));s&&".js"==p.substr(p.length-3,3)&&(p=p.substr(0,p.length-3)),d[c]=p+f.substr(m)}n.packageConfigPaths=d}if(e.bundles)for(var r in e.bundles){for(var v=[],c=0;c<e.bundles[r].length;c++){var s=n.defaultJSExtensions&&".js"!=e.bundles[r][c].substr(e.bundles[r][c].length-3,3),y=n.decanonicalize(e.bundles[r][c]);s&&".js"==y.substr(y.length-3,3)&&(y=y.substr(0,y.length-3)),v.push(y)}n.bundles[r]=v}if(e.packages)for(var r in e.packages){if(r.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"'+r+'" is not a valid package name.');var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),"/"==i[i.length-1]&&(i=i.substr(0,i.length-1)),n.packages[i]=n.packages[i]||{},e.packages[r].modules&&(g.call(n,"Package "+r+' is configured with "modules", which is deprecated as it has been renamed to "meta".'),e.packages[r].meta=e.packages[r].modules,delete e.packages[r].modules);for(var x in e.packages[r])-1==I.call(F,x)&&g.call(n,'"'+x+'" is not a valid package configuration option in package '+r);h(n.packages[i],e.packages[r])}for(var S in e){var o=e[S],E=!1;if("baseURL"!=S&&"map"!=S&&"packages"!=S&&"bundles"!=S&&"paths"!=S&&"warnings"!=S&&"packageConfigPaths"!=S)if("object"!=typeof o||o instanceof Array)n[S]=o;else{n[S]=n[S]||{},("meta"==S||"depCache"==S)&&(E=!0);for(var r in o)if("meta"==S&&"*"==r[0])n[S][r]=o[r];else if(E){var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),n[S][i]=o[r]}else n[S][r]=o[r]}}},function(){function e(e,t){var n,r,a=0;for(var o in e.packages)t.substr(0,o.length)!==o||t.length!==o.length&&"/"!==t[o.length]||(r=o.split("/").length,r>a&&(n=o,a=r));return n}function t(e){var t=e.basePath&&"."!=e.basePath?e.basePath:"";return t&&("./"==t.substr(0,2)&&(t=t.substr(2)),"/"!=t[t.length-1]&&(t+="/")),t}function n(e,t,n,r,a,o){if(!a||"/"==a[a.length-1]||o||t.defaultExtension===!1)return a;if(a.match(Y))return a;var s=!1;if(t.meta&&p(t.meta,a,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?s=!0:void 0}),!s&&e.meta&&p(e.meta,n+"/"+r+a,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?s=!0:void 0}),s)return a;var i="."+(t.defaultExtension||"js");return a.substr(a.length-i.length)!=i?a+i:a}function r(e,r,o,s,i){if(!s){if(!r.main)return o+(e.defaultJSExtensions?".js":"");s="./"==r.main.substr(0,2)?r.main.substr(2):r.main}var l=t(r);if(r.map){var u="./"+s,d=y(r.map,u);if(d||(u="./"+n(e,r,o,l,s,i),u!="./"+s&&(d=y(r.map,u))),d)return a(e,r,o,l,d,u,i)}return o+"/"+l+n(e,r,o,l,s,i)}function a(e,t,r,a,o,s,i){var l=t.map[o];if("string"!=typeof l&&(l=o=s),"."==l)l=r;else if("./"==l.substr(0,2))return r+"/"+a+n(e,t,r,a,l.substr(2)+s.substr(o.length),i);return e.normalizeSync(l+s.substr(o.length),r+"/")}function o(e,r,a,o,s){if(!o){if(!r.main)return Promise.resolve(a+(e.defaultJSExtensions?".js":""));o="./"==r.main.substr(0,2)?r.main.substr(2):r.main}var l,u,d=t(r);return r.map&&(l="./"+o,u=y(r.map,l),u||(l="./"+n(e,r,a,d,o,s),l!="./"+o&&(u=y(r.map,l)))),(u?i(e,r,a,d,u,l,s):Promise.resolve()).then(function(t){return t?Promise.resolve(t):Promise.resolve(a+"/"+d+n(e,r,a,d,o,s))})}function s(e,t,r,a,o,s,i,l){if("."==s)s=r;else if("./"==s.substr(0,2))return Promise.resolve(r+"/"+a+n(e,t,r,a,s.substr(2)+i.substr(o.length),l)).then(function(t){return P.call(e,t,r+"/")});return e.normalize(s+i.substr(o.length),r+"/")}function i(e,t,n,r,a,o,i){var l=t.map[a];return"string"==typeof l?s(e,t,n,r,a,l,o,i):e.builder?Promise.resolve(n+"/#:"+o):e["import"](t.map["@env"]||"@system-env",n).then(function(e){for(var t in l){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return l[t]}}).then(function(l){return l?s(e,t,n,r,a,l,o,i):void 0})}function u(e){var t=e.lastIndexOf("*"),n=Math.max(t+1,e.lastIndexOf("/"));return{length:n,regEx:new RegExp("^("+e.substr(0,n).replace(/\*/g,"[^\\/]+")+")(\\/|$)"),wildcard:-1!=t}}function f(e,t){for(var n,r,a=!1,o=0;o<e.packageConfigPaths.length;o++){var s=e.packageConfigPaths[o],i=b[s]||(b[s]=u(s));if(!(t.length<i.length)){var l=t.match(i.regEx);!l||n&&(a&&i.wildcard||!(n.length<l[1].length))||(n=l[1],a=!i.wildcard,r=n+s.substr(i.length))}}return n?{packageName:n,configPath:r}:void 0}function m(e,n,r){var a=e.pluginLoader||e;return(a.meta[r]=a.meta[r]||{}).format="json",a.load(r).then(function(){pkgConfig=a.get(r);var o=pkgConfig["default"];o.systemjs&&(o=o.systemjs),o.modules&&(o.meta=o.modules,g.call(e,"Package config file "+r+' is configured with "modules", which is deprecated as it has been renamed to "meta".'));for(var s in o)-1==I.call(F,s)&&delete o[s];var i=e.packages[n]=e.packages[n]||{};h(i,o,!0);var l=t(i);if(o.depCache){for(var u in o.depCache){var d;d="./"==u.substr(0,2)?n+"/"+l+u.substr(2):coreResolve.call(e,u),e.depCache[d]=(e.depCache[d]||[]).concat(o.depCache[u])}delete o.depCache}return i})}function p(e,t,n){var r;for(var a in e){var o="./"==a.substr(0,2)?"./":"";if(o&&(a=a.substr(2)),r=a.indexOf("*"),-1!==r&&a.substr(0,r)==t.substr(0,r)&&a.substr(r+1)==t.substr(t.length-a.length+r+1)&&n(a,e[o+a],a.split("/").length))return}var s=e[t]||e["./"+t];s&&n(s,s,0)}c(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths=[]}}),l.prototype.normalizeSync=l.prototype.decanonicalize=l.prototype.normalize,d("decanonicalize",function(t){return function(n,r){var a=t.call(this,n,r);if(!this.defaultJSExtensions)return a;var o=e(this,a),s=this.packages[o],i=s&&s.defaultExtension;return void 0==i&&s&&s.meta&&p(s.meta,a.substr(o),function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?(i=!1,!0):void 0}),(i===!1||i&&".js"!=i)&&".js"!=n.substr(n.length-3,3)&&".js"==a.substr(a.length-3,3)&&(a=a.substr(0,a.length-3)),a}}),d("normalizeSync",function(n){return function(o,s,i){g.call(this,"SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.");var l=this;if(i=i===!0,s)var u=e(l,s)||l.defaultJSExtensions&&".js"==s.substr(s.length-3,3)&&e(l,s.substr(0,s.length-3));var d=u&&l.packages[u];if(d){var c=t(d);c&&s.substr(u.length+1,c.length)==c&&(s=u+s.substr(u.length+c.length))}if(d&&"."!=o[0]){var m=d.map,p=m&&y(m,o);if(p&&"string"==typeof m[p])return a(l,d,u,t(d),p,o,i)}var h=l.defaultJSExtensions&&".js"!=o.substr(o.length-3,3),v=n.call(l,o,s);h&&".js"!=v.substr(v.length-3,3)&&(h=!1),h&&(v=v.substr(0,v.length-3));var b=f(l,v),w=b&&b.packageName||e(l,v);if(!w)return v+(h?".js":"");var x=v.substr(w.length+1);return r(l,l.packages[w]||{},w,x,i)}}),d("normalize",function(n){return function(r,a,s){var l=this;return s=s===!0,Promise.resolve().then(function(){if(a)var n=e(l,a)||l.defaultJSExtensions&&".js"==a.substr(a.length-3,3)&&e(l,a.substr(0,a.length-3));var o=n&&l.packages[n];if(o){var u=t(o);u&&a.substr(n.length+1,u.length)==u&&(a=n+a.substr(n.length+u.length))}if(o&&"./"!=r.substr(0,2)){var d=o.map,c=d&&y(d,r);if(c)return i(l,o,n,u,c,r,s)}return Promise.resolve()}).then(function(t){if(t)return t;var i=l.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),u=n.call(l,r,a);i&&".js"!=u.substr(u.length-3,3)&&(i=!1),i&&(u=u.substr(0,u.length-3));var d=f(l,u),c=d&&d.packageName||e(l,u);if(!c)return Promise.resolve(u+(i?".js":""));var p=l.packages[c],h=p&&(p.configured||!d);return(h?Promise.resolve(p):m(l,c,d.configPath)).then(function(e){var t=u.substr(c.length+1);return o(l,e,c,t,s)})})}});var b={};d("locate",function(n){return function(r){var a=this;return Promise.resolve(n.call(this,r)).then(function(n){var o=e(a,r.name);if(o){var s=a.packages[o],i=t(s),l=r.name.substr(o.length+i.length+1);s.format&&(r.metadata.format=r.metadata.format||s.format);var u={};if(s.meta){var d=0;p(s.meta,l,function(e,t,n){n>d&&(d=n),h(u,t,n&&d>n)}),u.alias&&"./"==u.alias.substr(0,2)&&(u.alias=o+u.alias.substr(1)),u.loader&&"./"==u.loader.substr(0,2)&&(u.loader=o+u.loader.substr(1)),h(r.metadata,u)}}return n})}})}(),function(){function t(){if(o&&"interactive"===o.script.readyState)return o.load;for(var e=0;e<l.length;e++)if("interactive"==l[e].script.readyState)return o=l[e],o.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),s=t;try{importScripts(t.address)}catch(r){s=null,n(r)}s=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s=null,i=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),l=[],u=0,c=[];d("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(s?this.reduceRegister_(s,n):i?this.reduceRegister_(t(),n):u?c.push(n):this.reduceRegister_(null,n),!0)}}),d("fetch",function(t){return function(s){var d=this;return"json"!=s.metadata.format&&s.metadata.scriptLoad&&(_||R)?R?n(d,s):new Promise(function(t,n){function f(e){if(!h.readyState||"loaded"==h.readyState||"complete"==h.readyState){if(u--,s.metadata.entry||c.length){if(!i){for(var r=0;r<c.length;r++)d.reduceRegister_(s,c[r]);c=[]}}else d.reduceRegister_(s);p(),s.metadata.entry||s.metadata.bundle||n(new Error(s.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function m(e){p(),n(new Error("Unable to load script "+s.address))}function p(){if(e.System=a,h.detachEvent){h.detachEvent("onreadystatechange",f);for(var t=0;t<l.length;t++)l[t].script==h&&(o&&o.script==h&&(o=null),l.splice(t,1))}else h.removeEventListener("load",f,!1),h.removeEventListener("error",m,!1);r.removeChild(h)}var h=document.createElement("script");h.async=!0,s.metadata.integrity&&h.setAttribute("integrity",s.metadata.integrity),i?(h.attachEvent("onreadystatechange",f),l.push({script:h,load:s})):(h.addEventListener("load",f,!1),h.addEventListener("error",m,!1)),u++,a=e.System,h.src=s.address,r.appendChild(h)}):t.call(this,s)}})}();var V=/^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==I.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<l){if(null!==i.groupIndex&&(r[i.groupIndex].splice(I.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=l}t(i,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var s=!!r.declarative==a.length%2,l=a.length-1;l>=0;l--){for(var u=a[l],d=0;d<u.length;d++){var c=u[d];s?o(c,n):i(c,n)}s=!s}}}function r(){}function a(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new r,importers:[]})}function o(t,n){if(!t.module){var r=n._loader.moduleRecords,s=t.module=a(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(s.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,a=s.importers.length;a>r;r++){var o=s.importers[r];if(!o.locked){var l=I.call(o.dependencies,s);o.setters[l](i)}}return s.locked=!1,t},t.name);if(s.setters=l.setters,s.execute=l.execute,!s.setters||!s.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(s),s.dependencies.push(p)):s.dependencies.push(null);for(var h=t.originalIndices[u],g=0,v=h.length;v>g;++g){var b=h[g];s.setters[b]&&s.setters[b](c)}}}}function s(e,t){var n,r=t.defined[e];if(r)r.declarative?u(e,[],t):r.evaluated||i(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function i(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,l=t.normalizedDeps.length;l>o;o++){var u=t.normalizedDeps[o],d=n.defined[u];d&&i(d,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r],n);throw new Error("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esmExports&&r!==e?t.esModule=m(r):t.esModule={"default":r}}}function u(t,n,r){
	var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==I.call(n,i)&&(r.defined[i]?u(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}l.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=S();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},l.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=S();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},d("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Unexpected anonymous System.register call.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),M(r,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):("register"!=t.metadata.format||t.metadata.authorization||t.metadata.scriptLoad===!1||(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&x(t.source))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof __exec&&__exec.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=S(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var s=[],i=0,l=r.deps.length;l>i;i++)s.push(Promise.resolve(a.normalize(r.deps[i],t.name)));return Promise.all(s).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),u(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}(),d("reduceRegister_",function(t){return function(n,r){if(r||!n.metadata.exports)return t.call(this,n,r);n.metadata.format="global";var a=n.metadata.entry=S();a.deps=n.metadata.deps;var o=v(n.metadata.exports,e);a.execute=function(){return o}}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==I.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var i;if(a){i={};for(var l in a)i[l]=e[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=v(n,e);else{var a,l,u={};r(function(e,t){o[e]!==t&&"undefined"!=typeof t&&(u[e]=t,"undefined"!=typeof a?l||a===t||(l=!0):a=t)}),t=l?u:a}if(i)for(var d in i)e[d]=i[d];return e.define=s,t}}}))}}),c(function(e){return function(){var t=this;if(e.call(t),"undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var n=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(e){var t,r=e.lastIndexOf("!");t=-1!=r?e.substr(0,r):e;var a=t.split("/");return a.pop(),a=a.join("/"),"file:///"==t.substr(0,8)?(t=t.substr(7),a=a.substr(7),z&&(t=t.substr(1),a=a.substr(1))):n&&t.substr(0,n.length)===n&&(t=t.substr(n.length),a=a.substr(n.length)),{filename:t,dirname:a}}}))}}),c(function(t){return function(){function n(e,t){e=e.replace(i,"");var n=e.match(c),r=(n[1].split(",")[t]||"require").replace(f,""),a=m[r]||(m[r]=new RegExp(l+r+u,"g"));a.lastIndex=0;for(var o,s=[];o=a.exec(e);)s.push(o[2]||o[3]);return s}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),i=s.decanonicalize(e,a);o&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l=s.get(i);if(!l)throw new Error('Module not already loaded loading "'+e+'" from "'+a+'".');return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var u=[],d=0;d<e.length;d++)u.push(s["import"](e[d],a));Promise.all(u).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,o){function i(t,n,i){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(s,e,n,a,i.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));i.uri=i.id,i.config=function(){},-1!=d&&f.splice(d,0,i),-1!=u&&f.splice(u,0,n),-1!=l&&(c.toUrl=function(e){var t=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=s.decanonicalize(e,i.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(l,0,c));var p=e.require;e.require=r;var h=o.apply(-1==u?e:n,f);return e.require=p,"undefined"==typeof h&&i&&(h=i.exports),"undefined"!=typeof h?h:void 0}"string"!=typeof t&&(o=a,a=t,t=null),a instanceof Array||(o=a,a=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===a[a.length-1]&&a.pop();var l,u,d;-1!=(l=I.call(a,"require"))&&(a.splice(l,1),t||(a=a.concat(n(o.toString(),l)))),-1!=(u=I.call(a,"exports"))&&a.splice(u,1),-1!=(d=I.call(a,"module"))&&a.splice(d,1);var c=S();c.name=t&&(s.decanonicalize||s.normalize).call(s,t),c.deps=a,c.execute=i,s.pushRegister_({amd:!0,entry:c})}function o(){var t=e.module,n=e.exports,r=e.define;return e.module=void 0,e.exports=void 0,e.define=a,function(){e.define=r,e.module=t,e.exports=n}}var s=this;t.call(this);var i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",u="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",c=/\(([^\)]*)\)/,f=/^\s+|\s+$/g,m={};a.amd={},d("reduceRegister_",function(e){return function(t,n){if(!n||!n.amd)return e.call(this,t,n);var r=t&&t.metadata,a=n.entry;if(r&&(r.format="amd"),a.name)r&&(r.entry||r.bundle?r.entry=void 0:r.entry=a,r.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!r)throw new TypeError("Unexpected anonymous AMD define.");if(r.entry)throw new TypeError("Multiple defines for anonymous module "+t.name);r.entry=a}}}),s.set("@@amd-helpers",s.newModule({createDefine:o,require:r,define:a})),s.amdDefine=a,s.amdRequire=r}}),function(){function e(e,t){if(t){var n;if(e.pluginFirst){if(-1!=(n=t.lastIndexOf("!")))return t.substr(n+1)}else if(-1!=(n=t.indexOf("!")))return t.substr(0,n);return t}}function t(e,t){var n,r,a=t.lastIndexOf("!");return-1!=a?(e.pluginFirst?(n=t.substr(a+1),r=t.substr(0,a)):(n=t.substr(0,a),r=t.substr(a+1)||n.substr(n.lastIndexOf(".")+1)),{argument:n,plugin:r}):void 0}function n(e,t,n,r){return r&&".js"==t.substr(t.length-3,3)&&(t=t.substr(0,t.length-3)),e.pluginFirst?n+"!"+t:t+"!"+n}function r(e,t){return e.defaultJSExtensions&&".js"!=t.substr(t.length-3,3)}function a(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);if(!u)return a.call(this,o,s,i);var d=l.normalizeSync(u.argument,s,!0),c=l.normalizeSync(u.plugin,s,!0);return n(l,d,c,r(l,u.argument))}}d("decanonicalize",a),d("normalizeSync",a),d("normalize",function(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);return u?Promise.all([l.normalize(u.argument,s,!0),l.normalize(u.plugin,s,!0)]).then(function(e){return n(l,e[0],e[1],r(l,u.argument))}):a.call(l,o,s,i)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){var n=t.metadata.loader;if(!n)return e;if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch&&"defined"!=t.metadata.format?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=t.metadata.sourceMap;if(n&&"object"==typeof n){var r=t.name.split("!")[0];n.file=r+"!transpiled",n.sources&&1!=n.sources.length||(n.sources=[r]),t.metadata.sourceMap=JSON.stringify(n)}var a=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.translate.call(a,t)).then(function(n){return"string"==typeof n&&(t.source=n),e.call(a,t)}):e.call(a,t)}}),d("instantiate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate&&!n.builder&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t)).then(function(r){return t.metadata.entry=S(),t.metadata.entry.execute=function(){return r},t.metadata.entry.deps=t.metadata.deps,t.metadata.format="defined",e.call(n,t)}):e.call(n,t)}})}();var Y=/#\{[^\}]+\}/;d("normalize",function(e){return function(t,n,r){var a=this;return O.call(a,t,n).then(function(t){return e.call(a,t,n,r)}).then(function(e){return P.call(a,e,n)})}}),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];if(n){t.metadata.format="defined";var a=S();return this.defined[t.name]=a,a.declarative=!0,a.deps=r.concat([n]),a.declare=function(e){return{setters:[function(t){for(var n in t)e(n,t[n]);t.__useDefault&&(a.module.exports.__useDefault=!0)}],execute:function(){}}},""}return e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(o=i),h(t.metadata,r[s],o!=i)}return r[a]&&h(t.metadata,r[a]),e.call(this,t)}});var t=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,n=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,'"'==d||"'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(g.call(this,"Module "+a.name+' contains deprecated "deps '+m+'" meta syntax.\nThis should be updated to "deps[] '+m+'" for pushing to array meta.'),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),d("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var s=n.bundles[a][o];if(s==t.name){r=!0;break}if(-1!=s.indexOf("*")){var i=s.split("*");if(2!=i.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,i[0].length)==i[0]&&t.name.substr(t.name.length-i[1].length,i[1].length)==i[1]&&-1==t.name.substr(i[0].length,t.name.length-i[1].length-i[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a],t.name);return e.call(n,t)}})}(),c(function(e){return function(){e.apply(this,arguments),this.has("@@amd-helpers")&&this.get("@@amd-helpers").createDefine()}}),d("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,e.call(this,t)}}),J=new l,e.SystemJS=J,J.version="0.19.18 CSP","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,J||(J=new o,J.constructor=o),"object"==typeof exports&&(module.exports=J),e.System=J}("undefined"!=typeof self?self:global)}try{var t="undefined"!=typeof URLPolyfill||"test:"==new URL("test:///").protocol}catch(n){}if("undefined"!=typeof Promise&&t)e();else if("undefined"!=typeof document){var r=document.getElementsByTagName("script");$__curScript=r[r.length-1];var a=$__curScript.src,o=a.substr(0,a.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write('<script type="text/javascript" src="'+o+'system-polyfills.js"></script>')}else if("undefined"!=typeof importScripts){var o="";try{throw new Error("_")}catch(n){n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){o=t.replace(/\/[^\/]*$/,"/")})}importScripts(o+"system-polyfills.js"),e()}else e()}();
	//# sourceMappingURL=system-csp-production.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS v0.19.18
	 */
	(function() {
	function bootstrap() {(function(__global) {

	  var isWorker = typeof window == 'undefined' && typeof self != 'undefined' && typeof importScripts != 'undefined';
	  var isBrowser = typeof window != 'undefined' && typeof document != 'undefined';
	  var isWindows = typeof process != 'undefined' && typeof process.platform != 'undefined' && !!process.platform.match(/^win/);

	  if (!__global.console)
	    __global.console = { assert: function() {} };

	  // IE8 support
	  var indexOf = Array.prototype.indexOf || function(item) {
	    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
	      if (this[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  };
	  
	  var defineProperty;
	  (function () {
	    try {
	      if (!!Object.defineProperty({}, 'a', {}))
	        defineProperty = Object.defineProperty;
	    }
	    catch (e) {
	      defineProperty = function(obj, prop, opt) {
	        try {
	          obj[prop] = opt.value || opt.get.call(obj);
	        }
	        catch(e) {}
	      }
	    }
	  })();

	  function addToError(err, msg) {
	    var newErr;
	    if (err instanceof Error) {
	      newErr = new Error(err.message, err.fileName, err.lineNumber);
	      if (isBrowser) {
	        newErr.message = err.message + '\n\t' + msg;
	        newErr.stack = err.stack;
	      }
	      else {
	        // node errors only look correct with the stack modified
	        newErr.message = err.message;
	        newErr.stack = err.stack + '\n\t' + msg;
	      }
	    }
	    else {
	      newErr = err + '\n\t' + msg;
	    }
	      
	    return newErr;
	  }

	  function __eval(source, debugName, context) {
	    try {
	      new Function(source).call(context);
	    }
	    catch(e) {
	      throw addToError(e, 'Evaluating ' + debugName);
	    }
	  }

	  var baseURI;
	  // environent baseURI detection
	  if (typeof document != 'undefined' && document.getElementsByTagName) {
	    baseURI = document.baseURI;

	    if (!baseURI) {
	      var bases = document.getElementsByTagName('base');
	      baseURI = bases[0] && bases[0].href || window.location.href;
	    }

	    // sanitize out the hash and querystring
	    baseURI = baseURI.split('#')[0].split('?')[0];
	    baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
	  }
	  else if (typeof process != 'undefined' && process.cwd) {
	    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
	    if (isWindows)
	      baseURI = baseURI.replace(/\\/g, '/');
	  }
	  else if (typeof location != 'undefined') {
	    baseURI = __global.location.href;
	  }
	  else {
	    throw new TypeError('No environment baseURI');
	  }

	  var URL = __global.URLPolyfill || __global.URL;
	/*
	*********************************************************************************************

	  Dynamic Module Loader Polyfill

	    - Implemented exactly to the former 2014-08-24 ES6 Specification Draft Rev 27, Section 15
	      http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27

	    - Functions are commented with their spec numbers, with spec differences commented.

	    - Spec bugs are commented in this code with links.

	    - Abstract functions have been combined where possible, and their associated functions
	      commented.

	    - Realm implementation is entirely omitted.

	*********************************************************************************************
	*/

	function Module() {}
	// http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag
	defineProperty(Module.prototype, 'toString', {
	  value: function() {
	    return 'Module';
	  }
	});
	function Loader(options) {
	  this._loader = {
	    loaderObj: this,
	    loads: [],
	    modules: {},
	    importPromises: {},
	    moduleRecords: {}
	  };

	  // 26.3.3.6
	  defineProperty(this, 'global', {
	    get: function() {
	      return __global;
	    }
	  });

	  // 26.3.3.13 realm not implemented
	}

	(function() {

	// Some Helpers

	// logs a linkset snapshot for debugging
	/* function snapshot(loader) {
	  console.log('---Snapshot---');
	  for (var i = 0; i < loader.loads.length; i++) {
	    var load = loader.loads[i];
	    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

	    for (var j = 0; j < load.linkSets.length; j++) {
	      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
	    }
	    console.log(linkSetLog);
	  }
	  console.log('');
	}
	function logloads(loads) {
	  var log = '';
	  for (var k = 0; k < loads.length; k++)
	    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
	  return log;
	} */


	/* function checkInvariants() {
	  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

	  var loads = System._loader.loads;
	  var linkSets = [];

	  for (var i = 0; i < loads.length; i++) {
	    var load = loads[i];
	    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

	    for (var j = 0; j < load.linkSets.length; j++) {
	      var linkSet = load.linkSets[j];

	      for (var k = 0; k < linkSet.loads.length; k++)
	        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

	      if (linkSets.indexOf(linkSet) == -1)
	        linkSets.push(linkSet);
	    }
	  }

	  for (var i = 0; i < loads.length; i++) {
	    var load = loads[i];
	    for (var j = 0; j < linkSets.length; j++) {
	      var linkSet = linkSets[j];

	      if (linkSet.loads.indexOf(load) != -1)
	        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

	      if (load.linkSets.indexOf(linkSet) != -1)
	        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
	    }
	  }

	  for (var i = 0; i < linkSets.length; i++) {
	    var linkSet = linkSets[i];
	    for (var j = 0; j < linkSet.loads.length; j++) {
	      var load = linkSet.loads[j];

	      for (var k = 0; k < load.dependencies.length; k++) {
	        var depName = load.dependencies[k].value;
	        var depLoad;
	        for (var l = 0; l < loads.length; l++) {
	          if (loads[l].name != depName)
	            continue;
	          depLoad = loads[l];
	          break;
	        }

	        // loading records are allowed not to have their dependencies yet
	        // if (load.status != 'loading')
	        //  console.assert(depLoad, 'depLoad found');

	        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
	      }
	    }
	  }
	} */

	  // 15.2.3 - Runtime Semantics: Loader State

	  // 15.2.3.11
	  function createLoaderLoad(object) {
	    return {
	      // modules is an object for ES5 implementation
	      modules: {},
	      loads: [],
	      loaderObj: object
	    };
	  }

	  // 15.2.3.2 Load Records and LoadRequest Objects

	  // 15.2.3.2.1
	  function createLoad(name) {
	    return {
	      status: 'loading',
	      name: name,
	      linkSets: [],
	      dependencies: [],
	      metadata: {}
	    };
	  }

	  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

	  // 15.2.4

	  // 15.2.4.1
	  function loadModule(loader, name, options) {
	    return new Promise(asyncStartLoadPartwayThrough({
	      step: options.address ? 'fetch' : 'locate',
	      loader: loader,
	      moduleName: name,
	      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
	      moduleMetadata: options && options.metadata || {},
	      moduleSource: options.source,
	      moduleAddress: options.address
	    }));
	  }

	  // 15.2.4.2
	  function requestLoad(loader, request, refererName, refererAddress) {
	    // 15.2.4.2.1 CallNormalize
	    return new Promise(function(resolve, reject) {
	      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
	    })
	    // 15.2.4.2.2 GetOrCreateLoad
	    .then(function(name) {
	      var load;
	      if (loader.modules[name]) {
	        load = createLoad(name);
	        load.status = 'linked';
	        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
	        load.module = loader.modules[name];
	        return load;
	      }

	      for (var i = 0, l = loader.loads.length; i < l; i++) {
	        load = loader.loads[i];
	        if (load.name != name)
	          continue;
	        console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded');
	        return load;
	      }

	      load = createLoad(name);
	      loader.loads.push(load);

	      proceedToLocate(loader, load);

	      return load;
	    });
	  }

	  // 15.2.4.3
	  function proceedToLocate(loader, load) {
	    proceedToFetch(loader, load,
	      Promise.resolve()
	      // 15.2.4.3.1 CallLocate
	      .then(function() {
	        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
	      })
	    );
	  }

	  // 15.2.4.4
	  function proceedToFetch(loader, load, p) {
	    proceedToTranslate(loader, load,
	      p
	      // 15.2.4.4.1 CallFetch
	      .then(function(address) {
	        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
	        if (load.status != 'loading')
	          return;
	        load.address = address;

	        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
	      })
	    );
	  }

	  var anonCnt = 0;

	  // 15.2.4.5
	  function proceedToTranslate(loader, load, p) {
	    p
	    // 15.2.4.5.1 CallTranslate
	    .then(function(source) {
	      if (load.status != 'loading')
	        return;

	      return Promise.resolve(loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source }))

	      // 15.2.4.5.2 CallInstantiate
	      .then(function(source) {
	        load.source = source;
	        return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
	      })

	      // 15.2.4.5.3 InstantiateSucceeded
	      .then(function(instantiateResult) {
	        if (instantiateResult === undefined) {
	          load.address = load.address || '<Anonymous Module ' + ++anonCnt + '>';

	          // instead of load.kind, use load.isDeclarative
	          load.isDeclarative = true;
	          return transpile.call(loader.loaderObj, load)
	          .then(function(transpiled) {
	            // Hijack System.register to set declare function
	            var curSystem = __global.System;
	            var curRegister = curSystem.register;
	            curSystem.register = function(name, deps, declare) {
	              if (typeof name != 'string') {
	                declare = deps;
	                deps = name;
	              }
	              // store the registered declaration as load.declare
	              // store the deps as load.deps
	              load.declare = declare;
	              load.depsList = deps;
	            }
	            // empty {} context is closest to undefined 'this' we can get
	            __eval(transpiled, load.address, {});
	            curSystem.register = curRegister;
	          });
	        }
	        else if (typeof instantiateResult == 'object') {
	          load.depsList = instantiateResult.deps || [];
	          load.execute = instantiateResult.execute;
	          load.isDeclarative = false;
	        }
	        else
	          throw TypeError('Invalid instantiate return value');
	      })
	      // 15.2.4.6 ProcessLoadDependencies
	      .then(function() {
	        load.dependencies = [];
	        var depsList = load.depsList;

	        var loadPromises = [];
	        for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
	          loadPromises.push(
	            requestLoad(loader, request, load.name, load.address)

	            // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
	            .then(function(depLoad) {

	              // adjusted from spec to maintain dependency order
	              // this is due to the System.register internal implementation needs
	              load.dependencies[index] = {
	                key: request,
	                value: depLoad.name
	              };

	              if (depLoad.status != 'linked') {
	                var linkSets = load.linkSets.concat([]);
	                for (var i = 0, l = linkSets.length; i < l; i++)
	                  addLoadToLinkSet(linkSets[i], depLoad);
	              }

	              // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
	              // snapshot(loader);
	            })
	          );
	        })(depsList[i], i);

	        return Promise.all(loadPromises);
	      })

	      // 15.2.4.6.2 LoadSucceeded
	      .then(function() {
	        // console.log('LoadSucceeded ' + load.name);
	        // snapshot(loader);

	        console.assert(load.status == 'loading', 'is loading');

	        load.status = 'loaded';

	        var linkSets = load.linkSets.concat([]);
	        for (var i = 0, l = linkSets.length; i < l; i++)
	          updateLinkSetOnLoad(linkSets[i], load);
	      });
	    })
	    // 15.2.4.5.4 LoadFailed
	    ['catch'](function(exc) {
	      load.status = 'failed';
	      load.exception = exc;

	      var linkSets = load.linkSets.concat([]);
	      for (var i = 0, l = linkSets.length; i < l; i++) {
	        linkSetFailed(linkSets[i], load, exc);
	      }

	      console.assert(load.linkSets.length == 0, 'linkSets not removed');
	    });
	  }

	  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

	  // 15.2.4.7.1
	  function asyncStartLoadPartwayThrough(stepState) {
	    return function(resolve, reject) {
	      var loader = stepState.loader;
	      var name = stepState.moduleName;
	      var step = stepState.step;

	      if (loader.modules[name])
	        throw new TypeError('"' + name + '" already exists in the module table');

	      // adjusted to pick up existing loads
	      var existingLoad;
	      for (var i = 0, l = loader.loads.length; i < l; i++) {
	        if (loader.loads[i].name == name) {
	          existingLoad = loader.loads[i];

	          if (step == 'translate' && !existingLoad.source) {
	            existingLoad.address = stepState.moduleAddress;
	            proceedToTranslate(loader, existingLoad, Promise.resolve(stepState.moduleSource));
	          }

	          // a primary load -> use that existing linkset if it is for the direct load here
	          // otherwise create a new linkset unit
	          if (existingLoad.linkSets.length && existingLoad.linkSets[0].loads[0].name == existingLoad.name)
	            return existingLoad.linkSets[0].done.then(function() {
	              resolve(existingLoad);
	            });
	        }
	      }

	      var load = existingLoad || createLoad(name);

	      load.metadata = stepState.moduleMetadata;

	      var linkSet = createLinkSet(loader, load);

	      loader.loads.push(load);

	      resolve(linkSet.done);

	      if (step == 'locate')
	        proceedToLocate(loader, load);

	      else if (step == 'fetch')
	        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

	      else {
	        console.assert(step == 'translate', 'translate step');
	        load.address = stepState.moduleAddress;
	        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
	      }
	    }
	  }

	  // Declarative linking functions run through alternative implementation:
	  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
	  // 15.2.5.1.2 LookupExport not implemented
	  // 15.2.5.1.3 LookupModuleDependency not implemented

	  // 15.2.5.2.1
	  function createLinkSet(loader, startingLoad) {
	    var linkSet = {
	      loader: loader,
	      loads: [],
	      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
	      loadingCount: 0
	    };
	    linkSet.done = new Promise(function(resolve, reject) {
	      linkSet.resolve = resolve;
	      linkSet.reject = reject;
	    });
	    addLoadToLinkSet(linkSet, startingLoad);
	    return linkSet;
	  }
	  // 15.2.5.2.2
	  function addLoadToLinkSet(linkSet, load) {
	    if (load.status == 'failed')
	      return;

	    console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded on link set');

	    for (var i = 0, l = linkSet.loads.length; i < l; i++)
	      if (linkSet.loads[i] == load)
	        return;

	    linkSet.loads.push(load);
	    load.linkSets.push(linkSet);

	    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
	    if (load.status != 'loaded') {
	      linkSet.loadingCount++;
	    }

	    var loader = linkSet.loader;

	    for (var i = 0, l = load.dependencies.length; i < l; i++) {
	      if (!load.dependencies[i])
	        continue;

	      var name = load.dependencies[i].value;

	      if (loader.modules[name])
	        continue;

	      for (var j = 0, d = loader.loads.length; j < d; j++) {
	        if (loader.loads[j].name != name)
	          continue;

	        addLoadToLinkSet(linkSet, loader.loads[j]);
	        break;
	      }
	    }
	    // console.log('add to linkset ' + load.name);
	    // snapshot(linkSet.loader);
	  }

	  // linking errors can be generic or load-specific
	  // this is necessary for debugging info
	  function doLink(linkSet) {
	    var error = false;
	    try {
	      link(linkSet, function(load, exc) {
	        linkSetFailed(linkSet, load, exc);
	        error = true;
	      });
	    }
	    catch(e) {
	      linkSetFailed(linkSet, null, e);
	      error = true;
	    }
	    return error;
	  }

	  // 15.2.5.2.3
	  function updateLinkSetOnLoad(linkSet, load) {
	    // console.log('update linkset on load ' + load.name);
	    // snapshot(linkSet.loader);

	    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

	    linkSet.loadingCount--;

	    if (linkSet.loadingCount > 0)
	      return;

	    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
	    var startingLoad = linkSet.startingLoad;

	    // non-executing link variation for loader tracing
	    // on the server. Not in spec.
	    /***/
	    if (linkSet.loader.loaderObj.execute === false) {
	      var loads = [].concat(linkSet.loads);
	      for (var i = 0, l = loads.length; i < l; i++) {
	        var load = loads[i];
	        load.module = !load.isDeclarative ? {
	          module: _newModule({})
	        } : {
	          name: load.name,
	          module: _newModule({}),
	          evaluated: true
	        };
	        load.status = 'linked';
	        finishLoad(linkSet.loader, load);
	      }
	      return linkSet.resolve(startingLoad);
	    }
	    /***/

	    var abrupt = doLink(linkSet);

	    if (abrupt)
	      return;

	    console.assert(linkSet.loads.length == 0, 'loads cleared');

	    linkSet.resolve(startingLoad);
	  }

	  // 15.2.5.2.4
	  function linkSetFailed(linkSet, load, exc) {
	    var loader = linkSet.loader;
	    var requests;

	    checkError: 
	    if (load) {
	      if (linkSet.loads[0].name == load.name) {
	        exc = addToError(exc, 'Error loading ' + load.name);
	      }
	      else {
	        for (var i = 0; i < linkSet.loads.length; i++) {
	          var pLoad = linkSet.loads[i];
	          for (var j = 0; j < pLoad.dependencies.length; j++) {
	            var dep = pLoad.dependencies[j];
	            if (dep.value == load.name) {
	              exc = addToError(exc, 'Error loading ' + load.name + ' as "' + dep.key + '" from ' + pLoad.name);
	              break checkError;
	            }
	          }
	        }
	        exc = addToError(exc, 'Error loading ' + load.name + ' from ' + linkSet.loads[0].name);
	      }
	    }
	    else {
	      exc = addToError(exc, 'Error linking ' + linkSet.loads[0].name);
	    }


	    var loads = linkSet.loads.concat([]);
	    for (var i = 0, l = loads.length; i < l; i++) {
	      var load = loads[i];

	      // store all failed load records
	      loader.loaderObj.failed = loader.loaderObj.failed || [];
	      if (indexOf.call(loader.loaderObj.failed, load) == -1)
	        loader.loaderObj.failed.push(load);

	      var linkIndex = indexOf.call(load.linkSets, linkSet);
	      console.assert(linkIndex != -1, 'link not present');
	      load.linkSets.splice(linkIndex, 1);
	      if (load.linkSets.length == 0) {
	        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
	        if (globalLoadsIndex != -1)
	          linkSet.loader.loads.splice(globalLoadsIndex, 1);
	      }
	    }
	    linkSet.reject(exc);
	  }

	  // 15.2.5.2.5
	  function finishLoad(loader, load) {
	    // add to global trace if tracing
	    if (loader.loaderObj.trace) {
	      if (!loader.loaderObj.loads)
	        loader.loaderObj.loads = {};
	      var depMap = {};
	      load.dependencies.forEach(function(dep) {
	        depMap[dep.key] = dep.value;
	      });
	      loader.loaderObj.loads[load.name] = {
	        name: load.name,
	        deps: load.dependencies.map(function(dep){ return dep.key }),
	        depMap: depMap,
	        address: load.address,
	        metadata: load.metadata,
	        source: load.source,
	        kind: load.isDeclarative ? 'declarative' : 'dynamic'
	      };
	    }
	    // if not anonymous, add to the module table
	    if (load.name) {
	      console.assert(!loader.modules[load.name], 'load not in module table');
	      loader.modules[load.name] = load.module;
	    }
	    var loadIndex = indexOf.call(loader.loads, load);
	    if (loadIndex != -1)
	      loader.loads.splice(loadIndex, 1);
	    for (var i = 0, l = load.linkSets.length; i < l; i++) {
	      loadIndex = indexOf.call(load.linkSets[i].loads, load);
	      if (loadIndex != -1)
	        load.linkSets[i].loads.splice(loadIndex, 1);
	    }
	    load.linkSets.splice(0, load.linkSets.length);
	  }

	  function doDynamicExecute(linkSet, load, linkError) {
	    try {
	      var module = load.execute();
	    }
	    catch(e) {
	      linkError(load, e);
	      return;
	    }
	    if (!module || !(module instanceof Module))
	      linkError(load, new TypeError('Execution must define a Module instance'));
	    else
	      return module;
	  }

	  // 26.3 Loader

	  // 26.3.1.1
	  // defined at top

	  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
	  function createImportPromise(loader, name, promise) {
	    var importPromises = loader._loader.importPromises;
	    return importPromises[name] = promise.then(function(m) {
	      importPromises[name] = undefined;
	      return m;
	    }, function(e) {
	      importPromises[name] = undefined;
	      throw e;
	    });
	  }

	  Loader.prototype = {
	    // 26.3.3.1
	    constructor: Loader,
	    // 26.3.3.2
	    define: function(name, source, options) {
	      // check if already defined
	      if (this._loader.importPromises[name])
	        throw new TypeError('Module is already loading.');
	      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
	        step: 'translate',
	        loader: this._loader,
	        moduleName: name,
	        moduleMetadata: options && options.metadata || {},
	        moduleSource: source,
	        moduleAddress: options && options.address
	      })));
	    },
	    // 26.3.3.3
	    'delete': function(name) {
	      var loader = this._loader;
	      delete loader.importPromises[name];
	      delete loader.moduleRecords[name];
	      return loader.modules[name] ? delete loader.modules[name] : false;
	    },
	    // 26.3.3.4 entries not implemented
	    // 26.3.3.5
	    get: function(key) {
	      if (!this._loader.modules[key])
	        return;
	      doEnsureEvaluated(this._loader.modules[key], [], this);
	      return this._loader.modules[key].module;
	    },
	    // 26.3.3.7
	    has: function(name) {
	      return !!this._loader.modules[name];
	    },
	    // 26.3.3.8
	    'import': function(name, parentName, parentAddress) {
	      if (typeof parentName == 'object')
	        parentName = parentName.name;

	      // run normalize first
	      var loaderObj = this;

	      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
	      return Promise.resolve(loaderObj.normalize(name, parentName))
	      .then(function(name) {
	        var loader = loaderObj._loader;

	        if (loader.modules[name]) {
	          doEnsureEvaluated(loader.modules[name], [], loader._loader);
	          return loader.modules[name].module;
	        }

	        return loader.importPromises[name] || createImportPromise(loaderObj, name,
	          loadModule(loader, name, {})
	          .then(function(load) {
	            delete loader.importPromises[name];
	            return evaluateLoadedModule(loader, load);
	          }));
	      });
	    },
	    // 26.3.3.9 keys not implemented
	    // 26.3.3.10
	    load: function(name) {
	      var loader = this._loader;
	      if (loader.modules[name])
	        return Promise.resolve();
	      return loader.importPromises[name] || createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
	        step: 'locate',
	        loader: loader,
	        moduleName: name,
	        moduleMetadata: {},
	        moduleSource: undefined,
	        moduleAddress: undefined
	      }))
	      .then(function() {
	        delete loader.importPromises[name];
	      }));
	    },
	    // 26.3.3.11
	    module: function(source, options) {
	      var load = createLoad();
	      load.address = options && options.address;
	      var linkSet = createLinkSet(this._loader, load);
	      var sourcePromise = Promise.resolve(source);
	      var loader = this._loader;
	      var p = linkSet.done.then(function() {
	        return evaluateLoadedModule(loader, load);
	      });
	      proceedToTranslate(loader, load, sourcePromise);
	      return p;
	    },
	    // 26.3.3.12
	    newModule: function (obj) {
	      if (typeof obj != 'object')
	        throw new TypeError('Expected object');

	      var m = new Module();

	      var pNames = [];
	      if (Object.getOwnPropertyNames && obj != null)
	        pNames = Object.getOwnPropertyNames(obj);
	      else
	        for (var key in obj)
	          pNames.push(key);

	      for (var i = 0; i < pNames.length; i++) (function(key) {
	        defineProperty(m, key, {
	          configurable: false,
	          enumerable: true,
	          get: function () {
	            return obj[key];
	          }
	        });
	      })(pNames[i]);

	      return m;
	    },
	    // 26.3.3.14
	    set: function(name, module) {
	      if (!(module instanceof Module))
	        throw new TypeError('Loader.set(' + name + ', module) must be a module');
	      this._loader.modules[name] = {
	        module: module
	      };
	    },
	    // 26.3.3.15 values not implemented
	    // 26.3.3.16 @@iterator not implemented
	    // 26.3.3.17 @@toStringTag not implemented

	    // 26.3.3.18.1
	    normalize: function(name, referrerName, referrerAddress) {
	      return name;
	    },
	    // 26.3.3.18.2
	    locate: function(load) {
	      return load.name;
	    },
	    // 26.3.3.18.3
	    fetch: function(load) {
	    },
	    // 26.3.3.18.4
	    translate: function(load) {
	      return load.source;
	    },
	    // 26.3.3.18.5
	    instantiate: function(load) {
	    }
	  };

	  var _newModule = Loader.prototype.newModule;
	/*
	 * ES6 Module Declarative Linking Code - Dev Build Only
	 */
	  function link(linkSet, linkError) {

	    var loader = linkSet.loader;

	    if (!linkSet.loads.length)
	      return;

	    var loads = linkSet.loads.concat([]);

	    for (var i = 0; i < loads.length; i++) {
	      var load = loads[i];

	      var module = doDynamicExecute(linkSet, load, linkError);
	      if (!module)
	        return;
	      load.module = {
	        name: load.name,
	        module: module
	      };
	      load.status = 'linked';

	      finishLoad(loader, load);
	    }
	  }

	  function evaluateLoadedModule(loader, load) {
	    console.assert(load.status == 'linked', 'is linked ' + load.name);
	    return load.module.module;
	  }

	  function doEnsureEvaluated() {}

	  function transpile() {
	    throw new TypeError('ES6 transpilation is only provided in the dev module loader build.');
	  }
	})();/*
	*********************************************************************************************

	  System Loader Implementation

	    - Implemented to https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js

	    - <script type="module"> supported

	*********************************************************************************************
	*/

	var System;

	function SystemLoader() {
	  Loader.call(this);
	  this.paths = {};
	}

	// NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25
	function applyPaths(paths, name) {
	  // most specific (most number of slashes in path) match wins
	  var pathMatch = '', wildcard, maxWildcardPrefixLen = 0;

	  // check to see if we have a paths entry
	  for (var p in paths) {
	    var pathParts = p.split('*');
	    if (pathParts.length > 2)
	      throw new TypeError('Only one wildcard in a path is permitted');

	    // exact path match
	    if (pathParts.length == 1) {
	      if (name == p)
	        return paths[p];
	      
	      // support trailing / in paths rules
	      else if (name.substr(0, p.length - 1) == p.substr(0, p.length - 1) && (name.length < p.length || name[p.length - 1] == p[p.length - 1]) && paths[p][paths[p].length - 1] == '/')
	        return paths[p].substr(0, paths[p].length - 1) + (name.length > p.length ? '/' + name.substr(p.length) : '');
	    }
	    // wildcard path match
	    else {
	      var wildcardPrefixLen = pathParts[0].length;
	      if (wildcardPrefixLen >= maxWildcardPrefixLen &&
	          name.substr(0, pathParts[0].length) == pathParts[0] &&
	          name.substr(name.length - pathParts[1].length) == pathParts[1]) {
	            maxWildcardPrefixLen = wildcardPrefixLen;
	            pathMatch = p;
	            wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
	          }
	    }
	  }

	  var outPath = paths[pathMatch];
	  if (typeof wildcard == 'string')
	    outPath = outPath.replace('*', wildcard);

	  return outPath;
	}

	// inline Object.create-style class extension
	function LoaderProto() {}
	LoaderProto.prototype = Loader.prototype;
	SystemLoader.prototype = new LoaderProto();
	  var fetchTextFromURL;
	  if (typeof XMLHttpRequest != 'undefined') {
	    fetchTextFromURL = function(url, authorization, fulfill, reject) {
	      var xhr = new XMLHttpRequest();
	      var sameDomain = true;
	      var doTimeout = false;
	      if (!('withCredentials' in xhr)) {
	        // check if same domain
	        var domainCheck = /^(\w+:)?\/\/([^\/]+)/.exec(url);
	        if (domainCheck) {
	          sameDomain = domainCheck[2] === window.location.host;
	          if (domainCheck[1])
	            sameDomain &= domainCheck[1] === window.location.protocol;
	        }
	      }
	      if (!sameDomain && typeof XDomainRequest != 'undefined') {
	        xhr = new XDomainRequest();
	        xhr.onload = load;
	        xhr.onerror = error;
	        xhr.ontimeout = error;
	        xhr.onprogress = function() {};
	        xhr.timeout = 0;
	        doTimeout = true;
	      }
	      function load() {
	        fulfill(xhr.responseText);
	      }
	      function error() {
	        reject(new Error('XHR error' + (xhr.status ? ' (' + xhr.status + (xhr.statusText ? ' ' + xhr.statusText  : '') + ')' : '') + ' loading ' + url));
	      }

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) {
	          // in Chrome on file:/// URLs, status is 0
	          if (xhr.status == 0) {
	            if (xhr.responseText) {
	              load();
	            }
	            else {
	              // when responseText is empty, wait for load or error event
	              // to inform if it is a 404 or empty file
	              xhr.addEventListener('error', error);
	              xhr.addEventListener('load', load);
	            }
	          }
	          else if (xhr.status === 200) {
	            load();
	          }
	          else {
	            error();
	          }
	        }
	      };
	      xhr.open("GET", url, true);

	      if (xhr.setRequestHeader) {
	        xhr.setRequestHeader('Accept', 'application/x-es-module, */*');
	        // can set "authorization: true" to enable withCredentials only
	        if (authorization) {
	          if (typeof authorization == 'string')
	            xhr.setRequestHeader('Authorization', authorization);
	          xhr.withCredentials = true;
	        }
	      }

	      if (doTimeout) {
	        setTimeout(function() {
	          xhr.send();
	        }, 0);
	      } else {
	        xhr.send(null);
	      }
	    };
	  }
	  else if ("function" != 'undefined' && typeof process != 'undefined') {
	    var fs;
	    fetchTextFromURL = function(url, authorization, fulfill, reject) {
	      if (url.substr(0, 8) != 'file:///')
	        throw new Error('Unable to fetch "' + url + '". Only file URLs of the form file:/// allowed running in Node.');
	      fs = fs || __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	      if (isWindows)
	        url = url.replace(/\//g, '\\').substr(8);
	      else
	        url = url.substr(7);
	      return fs.readFile(url, function(err, data) {
	        if (err) {
	          return reject(err);
	        }
	        else {
	          // Strip Byte Order Mark out if it's the leading char
	          var dataString = data + '';
	          if (dataString[0] === '\ufeff')
	            dataString = dataString.substr(1);

	          fulfill(dataString);
	        }
	      });
	    };
	  }
	  else if (typeof self != 'undefined' && typeof self.fetch != 'undefined') {
	    fetchTextFromURL = function(url, authorization, fulfill, reject) {
	      var opts = {
	        headers: {'Accept': 'application/x-es-module, */*'}
	      };

	      if (authorization) {
	        if (typeof authorization == 'string')
	          opts.headers['Authorization'] = authorization;
	        opts.credentials = 'include';
	      }

	      fetch(url, opts)
	        .then(function (r) {
	          if (r.ok) {
	            return r.text();
	          } else {
	            throw new Error('Fetch error: ' + r.status + ' ' + r.statusText);
	          }
	        })
	        .then(fulfill, reject);
	    }
	  }
	  else {
	    throw new TypeError('No environment fetch API available.');
	  }

	  SystemLoader.prototype.fetch = function(load) {
	    return new Promise(function(resolve, reject) {
	      fetchTextFromURL(load.address, undefined, resolve, reject);
	    });
	  };
	// SystemJS Loader Class and Extension helpers

	function SystemJSLoader() {
	  SystemLoader.call(this);

	  systemJSConstructor.call(this);
	}

	// inline Object.create-style class extension
	function SystemProto() {};
	SystemProto.prototype = SystemLoader.prototype;
	SystemJSLoader.prototype = new SystemProto();
	SystemJSLoader.prototype.constructor = SystemJSLoader;

	// remove ESML instantiate
	SystemJSLoader.prototype.instantiate = function() {};

	var systemJSConstructor;

	function hook(name, hook) {
	  SystemJSLoader.prototype[name] = hook(SystemJSLoader.prototype[name] || function() {});
	}
	function hookConstructor(hook) {
	  systemJSConstructor = hook(systemJSConstructor || function() {});
	}

	function dedupe(deps) {
	  var newDeps = [];
	  for (var i = 0, l = deps.length; i < l; i++)
	    if (indexOf.call(newDeps, deps[i]) == -1)
	      newDeps.push(deps[i])
	  return newDeps;
	}

	function group(deps) {
	  var names = [];
	  var indices = [];
	  for (var i = 0, l = deps.length; i < l; i++) {
	    var index = indexOf.call(names, deps[i]);
	    if (index === -1) {
	      names.push(deps[i]);
	      indices.push([i]);
	    }
	    else {
	      indices[index].push(i);
	    }
	  }
	  return { names: names, indices: indices };
	}

	var getOwnPropertyDescriptor = true;
	try {
	  Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
	}
	catch(e) {
	  getOwnPropertyDescriptor = false;
	}

	// converts any module.exports object into an object ready for SystemJS.newModule
	function getESModule(exports) {
	  var esModule = {};
	  // don't trigger getters/setters in environments that support them
	  if (typeof exports == 'object' || typeof exports == 'function') {
	    if (getOwnPropertyDescriptor) {
	      var d;
	      for (var p in exports)
	        if (d = Object.getOwnPropertyDescriptor(exports, p))
	          defineProperty(esModule, p, d);
	    }
	    else {
	      var hasOwnProperty = exports && exports.hasOwnProperty;
	      for (var p in exports) {
	        if (!hasOwnProperty || exports.hasOwnProperty(p))
	          esModule[p] = exports[p];
	      }
	    }
	  }
	  esModule['default'] = exports;
	  defineProperty(esModule, '__useDefault', {
	    value: true
	  });
	  return esModule;
	}

	function extend(a, b, prepend) {
	  for (var p in b) {
	    if (!prepend || !(p in a))
	      a[p] = b[p];
	  }
	  return a;
	}

	// package configuration options
	var packageProperties = ['main', 'format', 'defaultExtension', 'meta', 'map', 'basePath', 'depCache'];

	// meta first-level extends where:
	// array + array appends
	// object + object extends
	// other properties replace
	function extendMeta(a, b, prepend) {
	  for (var p in b) {
	    var val = b[p];
	    if (!(p in a))
	      a[p] = val;
	    else if (val instanceof Array && a[p] instanceof Array)
	      a[p] = [].concat(prepend ? val : a[p]).concat(prepend ? a[p] : val);
	    else if (typeof val == 'object' && val !== null && typeof a[p] == 'object')
	      a[p] = extend(extend({}, a[p]), val, prepend);
	    else if (!prepend)
	      a[p] = val;
	  }
	}

	function warn(msg) {
	  if (this.warnings && typeof console != 'undefined' && console.warn)
	    console.warn(msg);
	}var absURLRegEx = /^[^\/]+:\/\//;

	function readMemberExpression(p, value) {
	  var pParts = p.split('.');
	  while (pParts.length)
	    value = value[pParts.shift()];
	  return value;
	}

	var baseURLCache = {};
	function getBaseURLObj() {
	  if (baseURLCache[this.baseURL])
	    return baseURLCache[this.baseURL];

	  // normalize baseURL if not already
	  if (this.baseURL[this.baseURL.length - 1] != '/')
	    this.baseURL += '/';

	  var baseURL = new URL(this.baseURL, baseURI);

	  this.baseURL = baseURL.href;

	  return (baseURLCache[this.baseURL] = baseURL);
	}

	function getMapMatch(map, name) {
	  var bestMatch, bestMatchLength = 0;

	  for (var p in map) {
	    if (name.substr(0, p.length) == p && (name.length == p.length || name[p.length] == '/')) {
	      var curMatchLength = p.split('/').length;
	      if (curMatchLength <= bestMatchLength)
	        continue;
	      bestMatch = p;
	      bestMatchLength = curMatchLength;
	    }
	  }

	  return bestMatch;
	}

	function setProduction(isProduction) {
	  this.set('@system-env', this.newModule({
	    browser: isBrowser,
	    node: !!this._nodeRequire,
	    production: isProduction
	  }));
	}

	var baseURIObj = new URL(baseURI);

	hookConstructor(function(constructor) {
	  return function() {
	    constructor.call(this);

	    // support baseURL
	    this.baseURL = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);

	    // support map and paths
	    this.map = {};
	    this.paths = {};

	    // global behaviour flags
	    this.warnings = false;
	    this.defaultJSExtensions = false;
	    this.globalEvaluationScope = true;
	    this.pluginFirst = false;

	    // by default load ".json" files as json
	    // leading * meta doesn't need normalization
	    // NB add this in next breaking release
	    // this.meta['*.json'] = { format: 'json' };

	    // Default settings for globalEvaluationScope:
	    // Disabled for WebWorker, Chrome Extensions and jsdom
	    if (isWorker 
	        || isBrowser && window.chrome && window.chrome.extension 
	        || isBrowser && navigator.userAgent.match(/^Node\.js/))
	      this.globalEvaluationScope = false;

	    // support the empty module, as a concept
	    this.set('@empty', this.newModule({}));

	    setProduction.call(this, false);
	  };
	});

	// include the node require since we're overriding it
	if ("function" != 'undefined' && typeof process != 'undefined' && !process.browser)
	  SystemJSLoader.prototype._nodeRequire = __webpack_require__(25);

	var nodeCoreModules = ['assert', 'buffer', 'child_process', 'cluster', 'console', 'constants', 
	    'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'module', 'net', 'os', 'path', 
	    'process', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'timers', 
	    'tls', 'tty', 'url', 'util', 'vm', 'zlib'];

	/*
	  Core SystemJS Normalization

	  If a name is relative, we apply URL normalization to the page
	  If a name is an absolute URL, we leave it as-is

	  Plain names (neither of the above) run through the map and paths
	  normalization phases.

	  The paths normalization phase applies last (paths extension), which
	  defines the `decanonicalize` function and normalizes everything into
	  a URL.
	 */
	hook('normalize', function(normalize) {
	  return function(name, parentName) {
	    // first run map config
	    if (name[0] != '.' && name[0] != '/' && !name.match(absURLRegEx)) {
	      var mapMatch = getMapMatch(this.map, name);
	      if (mapMatch)
	        name = this.map[mapMatch] + name.substr(mapMatch.length);
	    }

	    // dynamically load node-core modules when requiring `@node/fs` for example
	    if (name.substr(0, 6) == '@node/' && nodeCoreModules.indexOf(name.substr(6)) != -1) {
	      if (!this._nodeRequire)
	        throw new TypeError('Error loading ' + name + '. Can only load node core modules in Node.');
	      this.set(name, this.newModule(getESModule(this._nodeRequire(name.substr(6)))));
	    }
	    
	    // relative URL-normalization
	    if (name[0] == '.' || name[0] == '/') {
	      if (parentName)
	        name = new URL(name, parentName.replace(/#/g, '%05')).href.replace(/%05/g, '#');
	      else
	        name = new URL(name, baseURIObj).href;
	    }

	    // if the module is in the registry already, use that
	    if (this.has(name))
	      return name;

	    if (name.match(absURLRegEx)) {
	      // defaultJSExtensions backwards compatibility
	      if (this.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js')
	        name += '.js';
	      return name;
	    }

	    // applyPaths implementation provided from ModuleLoader system.js source
	    name = applyPaths(this.paths, name) || name;

	    // defaultJSExtensions backwards compatibility
	    if (this.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js')
	      name += '.js';

	    // ./x, /x -> page-relative
	    if (name[0] == '.' || name[0] == '/')
	      return new URL(name, baseURIObj).href;
	    // x -> baseURL-relative
	    else
	      return new URL(name, getBaseURLObj.call(this)).href;
	  };
	});

	// percent encode just '#' in urls if using HTTP requests
	var httpRequest = typeof XMLHttpRequest != 'undefined';
	hook('locate', function(locate) {
	  return function(load) {
	    return Promise.resolve(locate.call(this, load))
	    .then(function(address) {
	      if (httpRequest)
	        return address.replace(/#/g, '%23');
	      return address;
	    });
	  };
	});

	/*
	 * Fetch with authorization
	 */
	hook('fetch', function() {
	  return function(load) {
	    return new Promise(function(resolve, reject) {
	      fetchTextFromURL(load.address, load.metadata.authorization, resolve, reject);
	    });
	  };
	});

	/*
	  __useDefault
	  
	  When a module object looks like:
	  newModule(
	    __useDefault: true,
	    default: 'some-module'
	  })

	  Then importing that module provides the 'some-module'
	  result directly instead of the full module.

	  Useful for eg module.exports = function() {}
	*/
	hook('import', function(systemImport) {
	  return function(name, parentName, parentAddress) {
	    if (parentName && parentName.name)
	      warn.call(this, 'SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing ' + name + ' from ' + parentName.name);
	    return systemImport.call(this, name, parentName, parentAddress).then(function(module) {
	      return module.__useDefault ? module['default'] : module;
	    });
	  };
	});

	/*
	 * Allow format: 'detect' meta to enable format detection
	 */
	hook('translate', function(systemTranslate) {
	  return function(load) {
	    if (load.metadata.format == 'detect')
	      load.metadata.format = undefined;
	    return systemTranslate.call(this, load);
	  };
	});


	/*
	 * JSON format support
	 *
	 * Supports loading JSON files as a module format itself
	 *
	 * Usage:
	 *
	 * SystemJS.config({
	 *   meta: {
	 *     '*.json': { format: 'json' }
	 *   }
	 * });
	 *
	 * Module is returned as if written:
	 *
	 * export default {JSON}
	 *
	 * No named exports are provided
	 *
	 * Files ending in ".json" are treated as json automatically by SystemJS
	 */
	hook('instantiate', function(instantiate) {
	  return function(load) {
	    if (load.metadata.format == 'json' && !this.builder) {
	      var entry = load.metadata.entry = createEntry();
	      entry.deps = [];
	      entry.execute = function() {
	        try {
	          return JSON.parse(load.source);
	        }
	        catch(e) {
	          throw new Error("Invalid JSON file " + load.name);
	        }
	      };
	    }
	  };
	})

	/*
	 Extend config merging one deep only

	  loader.config({
	    some: 'random',
	    config: 'here',
	    deep: {
	      config: { too: 'too' }
	    }
	  });

	  <=>

	  loader.some = 'random';
	  loader.config = 'here'
	  loader.deep = loader.deep || {};
	  loader.deep.config = { too: 'too' };


	  Normalizes meta and package configs allowing for:

	  SystemJS.config({
	    meta: {
	      './index.js': {}
	    }
	  });

	  To become

	  SystemJS.meta['https://thissite.com/index.js'] = {};

	  For easy normalization canonicalization with latest URL support.

	*/
	SystemJSLoader.prototype.env = 'development';

	SystemJSLoader.prototype.config = function(cfg) {
	  var loader = this;

	  if ('warnings' in cfg)
	    loader.warnings = cfg.warnings;

	  // transpiler deprecation path
	  if (cfg.transpilerRuntime === false)
	    loader._loader.loadedTranspilerRuntime = true;

	  // always configure baseURL first
	  if (cfg.baseURL) {
	    var hasConfig = false;
	    function checkHasConfig(obj) {
	      for (var p in obj)
	        return true;
	    }
	    if (checkHasConfig(loader.packages) || checkHasConfig(loader.meta) || checkHasConfig(loader.depCache) || checkHasConfig(loader.bundles) || checkHasConfig(loader.packageConfigPaths))
	      throw new TypeError('Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.');

	    loader.baseURL = cfg.baseURL;

	    // sanitize baseURL
	    getBaseURLObj.call(loader);
	  }

	  if (cfg.defaultJSExtensions) {
	    loader.defaultJSExtensions = cfg.defaultJSExtensions;
	    warn.call(loader, 'The defaultJSExtensions configuration option is deprecated, use packages configuration instead.');
	  }

	  if (cfg.pluginFirst)
	    loader.pluginFirst = cfg.pluginFirst;

	  if (cfg.production)
	    setProduction.call(loader, true);

	  if (cfg.paths) {
	    for (var p in cfg.paths)
	      loader.paths[p] = cfg.paths[p];
	  }

	  if (cfg.map) {
	    var objMaps = '';
	    for (var p in cfg.map) {
	      var v = cfg.map[p];

	      // object map backwards-compat into packages configuration
	      if (typeof v !== 'string') {
	        objMaps += (objMaps.length ? ', ' : '') + '"' + p + '"';

	        var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
	        var prop = loader.decanonicalize(p);
	        if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
	          prop = prop.substr(0, prop.length - 3);

	        // if a package main, revert it
	        var pkgMatch = '';
	        for (var pkg in loader.packages) {
	          if (prop.substr(0, pkg.length) == pkg 
	              && (!prop[pkg.length] || prop[pkg.length] == '/') 
	              && pkgMatch.split('/').length < pkg.split('/').length)
	            pkgMatch = pkg;
	        }
	        if (pkgMatch && loader.packages[pkgMatch].main)
	          prop = prop.substr(0, prop.length - loader.packages[pkgMatch].main.length - 1);

	        var pkg = loader.packages[prop] = loader.packages[prop] || {};
	        pkg.map = v;
	      }
	      else {
	        loader.map[p] = v;
	      }
	    }
	    if (objMaps)
	      warn.call(loader, 'The map configuration for ' + objMaps + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + p + '": { map: {...} } } }).');
	  }

	  if (cfg.packageConfigPaths) {
	    var packageConfigPaths = [];
	    for (var i = 0; i < cfg.packageConfigPaths.length; i++) {
	      var path = cfg.packageConfigPaths[i];
	      var packageLength = Math.max(path.lastIndexOf('*') + 1, path.lastIndexOf('/'));
	      var defaultJSExtension = loader.defaultJSExtensions && path.substr(packageLength - 3, 3) != '.js';
	      var normalized = loader.decanonicalize(path.substr(0, packageLength));
	      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
	        normalized = normalized.substr(0, normalized.length - 3);
	      packageConfigPaths[i] = normalized + path.substr(packageLength);
	    }
	    loader.packageConfigPaths = packageConfigPaths;
	  }

	  if (cfg.bundles) {
	    for (var p in cfg.bundles) {
	      var bundle = [];
	      for (var i = 0; i < cfg.bundles[p].length; i++) {
	        var defaultJSExtension = loader.defaultJSExtensions && cfg.bundles[p][i].substr(cfg.bundles[p][i].length - 3, 3) != '.js';
	        var normalizedBundleDep = loader.decanonicalize(cfg.bundles[p][i]);
	        if (defaultJSExtension && normalizedBundleDep.substr(normalizedBundleDep.length - 3, 3) == '.js')
	          normalizedBundleDep = normalizedBundleDep.substr(0, normalizedBundleDep.length - 3);
	        bundle.push(normalizedBundleDep);
	      }
	      loader.bundles[p] = bundle;
	    }
	  }

	  if (cfg.packages) {
	    for (var p in cfg.packages) {
	      if (p.match(/^([^\/]+:)?\/\/$/))
	        throw new TypeError('"' + p + '" is not a valid package name.');

	      var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
	      var prop = loader.decanonicalize(p);
	      if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
	        prop = prop.substr(0, prop.length - 3);

	      // allow trailing slash in packages
	      if (prop[prop.length - 1] == '/')
	        prop = prop.substr(0, prop.length - 1);

	      loader.packages[prop] = loader.packages[prop] || {};

	      // meta backwards compatibility
	      if (cfg.packages[p].modules) {
	        warn.call(loader, 'Package ' + p + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
	        cfg.packages[p].meta = cfg.packages[p].modules;
	        delete cfg.packages[p].modules;
	      }

	      for (var q in cfg.packages[p])
	        if (indexOf.call(packageProperties, q) == -1)
	          warn.call(loader, '"' + q + '" is not a valid package configuration option in package ' + p);

	      extendMeta(loader.packages[prop], cfg.packages[p]);
	    }
	  }

	  for (var c in cfg) {
	    var v = cfg[c];
	    var normalizeProp = false;

	    if (c == 'baseURL' || c == 'map' || c == 'packages' || c == 'bundles' || c == 'paths' || c == 'warnings' || c == 'packageConfigPaths')
	      continue;

	    if (typeof v != 'object' || v instanceof Array) {
	      loader[c] = v;
	    }
	    else {
	      loader[c] = loader[c] || {};

	      if (c == 'meta' || c == 'depCache')
	        normalizeProp = true;

	      for (var p in v) {
	        // base-level wildcard meta does not normalize to retain catch-all quality
	        if (c == 'meta' && p[0] == '*') {
	          loader[c][p] = v[p];
	        }
	        else if (normalizeProp) {
	          var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
	          var prop = loader.decanonicalize(p);
	          if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
	            prop = prop.substr(0, prop.length - 3);
	          loader[c][prop] = v[p];
	        }
	        else {
	          loader[c][p] = v[p];
	        }
	      }
	    }
	  }
	};/*
	 * Package Configuration Extension
	 *
	 * Example:
	 *
	 * SystemJS.packages = {
	 *   jquery: {
	 *     basePath: 'lib', // optionally only use a subdirectory within the package
	 *     main: 'index.js', // when not set, package name is requested directly
	 *     format: 'amd',
	 *     defaultExtension: 'ts', // defaults to 'js', can be set to false
	 *     modules: {
	 *       '*.ts': {
	 *         loader: 'typescript'
	 *       },
	 *       'vendor/sizzle.js': {
	 *         format: 'global'
	 *       }
	 *     },
	 *     map: {
	 *        // map internal require('sizzle') to local require('./vendor/sizzle')
	 *        sizzle: './vendor/sizzle.js',
	 *        // map any internal or external require of 'jquery/vendor/another' to 'another/index.js'
	 *        './vendor/another.js': './another/index.js',
	 *        // test.js / test -> lib/test.js
	 *        './test.js': './lib/test.js',
	 *
	 *        // environment-specific map configurations
	 *        './index.js': {
	 *          '~browser': './index-node.js'
	 *        }
	 *     },
	 *     // allows for setting package-prefixed depCache
	 *     // keys are normalized module names relative to the package itself
	 *     depCache: {
	 *       // import 'package/index.js' loads in parallel package/lib/test.js,package/vendor/sizzle.js
	 *       './index.js': ['./test'],
	 *       './test.js': ['external-dep'],
	 *       'external-dep/path.js': ['./another.js']
	 *     }
	 *   }
	 * };
	 *
	 * Then:
	 *   import 'jquery'                       -> jquery/index.js
	 *   import 'jquery/submodule'             -> jquery/submodule.js
	 *   import 'jquery/submodule.ts'          -> jquery/submodule.ts loaded as typescript
	 *   import 'jquery/vendor/another'        -> another/index.js
	 *
	 * Detailed Behaviours
	 * - main can have a leading "./" can be added optionally
	 * - map and defaultExtension are applied to the main
	 * - defaultExtension adds the extension only if the exact extension is not present
	 * - defaultJSExtensions applies after map when defaultExtension is not set
	 * - if a meta value is available for a module, map and defaultExtension are skipped
	 * - like global map, package map also applies to subpaths (sizzle/x, ./vendor/another/sub)
	 * - condition module map is '@env' module in package or '@system-env' globally
	 * - map targets support conditional interpolation ('./x': './x.#{|env}.js')
	 * - internal package map targets cannot use boolean conditionals
	 *
	 * In addition, the following modules properties will be allowed to be package
	 * -relative as well in the package module config:
	 *
	 *   - loader
	 *   - alias
	 *
	 *
	 * Package Configuration Loading
	 *
	 * Not all packages may already have their configuration present in the System config
	 * For these cases, a list of packageConfigPaths can be provided, which when matched against
	 * a request, will first request a ".json" file by the package name to derive the package
	 * configuration from. This allows dynamic loading of non-predetermined code, a key use
	 * case in SystemJS.
	 *
	 * Example:
	 *
	 *   SystemJS.packageConfigPaths = ['packages/test/package.json', 'packages/*.json'];
	 *
	 *   // will first request 'packages/new-package/package.json' for the package config
	 *   // before completing the package request to 'packages/new-package/path'
	 *   SystemJS.import('packages/new-package/path');
	 *
	 *   // will first request 'packages/test/package.json' before the main
	 *   SystemJS.import('packages/test');
	 *
	 * When a package matches packageConfigPaths, it will always send a config request for
	 * the package configuration.
	 * The package name itself is taken to be the match up to and including the last wildcard
	 * or trailing slash.
	 * The most specific package config path will be used.
	 * Any existing package configurations for the package will deeply merge with the
	 * package config, with the existing package configurations taking preference.
	 * To opt-out of the package configuration request for a package that matches
	 * packageConfigPaths, use the { configured: true } package config option.
	 *
	 */
	(function() {

	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.packages = {};
	      this.packageConfigPaths = [];
	    };
	  });

	  function getPackage(loader, normalized) {
	    // use most specific package
	    var curPkg, curPkgLen = 0, pkgLen;
	    for (var p in loader.packages) {
	      if (normalized.substr(0, p.length) === p && (normalized.length === p.length || normalized[p.length] === '/')) {
	        pkgLen = p.split('/').length;
	        if (pkgLen > curPkgLen) {
	          curPkg = p;
	          curPkgLen = pkgLen;
	        }
	      }
	    }
	    return curPkg;
	  }

	  function getBasePath(pkg) {
	    // sanitize basePath
	    var basePath = pkg.basePath && pkg.basePath != '.' ? pkg.basePath : '';
	    if (basePath) {
	      if (basePath.substr(0, 2) == './')
	        basePath = basePath.substr(2);
	      if (basePath[basePath.length - 1] != '/')
	        basePath += '/';
	    }
	    return basePath;
	  }

	  function addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions) {
	    // don't apply extensions to folders or if defaultExtension = false
	    if (!subPath || subPath[subPath.length - 1] == '/' || skipExtensions || pkg.defaultExtension === false)
	      return subPath;

	    // NB are you sure about this?
	    // skip if we have interpolation conditional syntax in subPath?
	    if (subPath.match(interpolationRegEx))
	      return subPath;

	    var metaMatch = false;

	    // exact meta or meta with any content after the last wildcard skips extension
	    if (pkg.meta)
	      getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
	        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
	          return metaMatch = true;
	      });

	    // exact global meta or meta with any content after the last wildcard skips extension
	    if (!metaMatch && loader.meta)
	      getMetaMatches(loader.meta, pkgName + '/' + basePath + subPath, function(metaPattern, matchMeta, matchDepth) {
	        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
	          return metaMatch = true;
	      });

	    if (metaMatch)
	      return subPath;

	    // work out what the defaultExtension is and add if not there already
	    // NB reconsider if default should really be ".js"?
	    var defaultExtension = '.' + (pkg.defaultExtension || 'js');
	    if (subPath.substr(subPath.length - defaultExtension.length) != defaultExtension)
	      return subPath + defaultExtension;
	    else
	      return subPath;
	  }

	  function applyPackageConfigSync(loader, pkg, pkgName, subPath, skipExtensions) {
	    // main
	    if (!subPath) {
	      if (pkg.main)
	        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
	      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
	      else
	        // NB can add a default package main convention here when defaultJSExtensions is deprecated
	        // if it becomes internal to the package then it would no longer be an exit path
	        return pkgName + (loader.defaultJSExtensions ? '.js' : '');
	    }

	    var basePath = getBasePath(pkg);

	    // map config checking without then with extensions
	    if (pkg.map) {
	      var mapPath = './' + subPath;

	      var mapMatch = getMapMatch(pkg.map, mapPath);

	      // we then check map with the default extension adding
	      if (!mapMatch) {
	        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions);
	        if (mapPath != './' + subPath)
	          mapMatch = getMapMatch(pkg.map, mapPath);
	      }
	      if (mapMatch)
	        return doMapSync(loader, pkg, pkgName, basePath, mapMatch, mapPath, skipExtensions);
	    }

	    // normal package resolution
	    return pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions);
	  }

	  function doMapSync(loader, pkg, pkgName, basePath, mapMatch, path, skipExtensions) {
	    var mapped = pkg.map[mapMatch];

	    // ignore conditionals in sync
	    if (typeof mapped != 'string')
	      mapped = mapMatch = path;

	    // package map to main / base-level
	    if (mapped == '.')
	      mapped = pkgName;

	    // internal package map
	    else if (mapped.substr(0, 2) == './')
	      return pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions);
	    
	    // external map reference
	    return loader.normalizeSync(mapped + path.substr(mapMatch.length), pkgName + '/');
	  }

	  function applyPackageConfig(loader, pkg, pkgName, subPath, skipExtensions) {
	    // main
	    if (!subPath) {
	      if (pkg.main)
	        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
	      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
	      else
	        // NB can add a default package main convention here when defaultJSExtensions is deprecated
	        // if it becomes internal to the package then it would no longer be an exit path
	        return Promise.resolve(pkgName + (loader.defaultJSExtensions ? '.js' : ''));
	    }

	    var basePath = getBasePath(pkg);

	    // map config checking without then with extensions
	    var mapPath, mapMatch;

	    if (pkg.map) {
	      mapPath = './' + subPath;
	      mapMatch = getMapMatch(pkg.map, mapPath);

	      // we then check map with the default extension adding
	      if (!mapMatch) {
	        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions);
	        if (mapPath != './' + subPath)
	          mapMatch = getMapMatch(pkg.map, mapPath);
	      }
	    }

	    return (mapMatch ? doMap(loader, pkg, pkgName, basePath, mapMatch, mapPath, skipExtensions) : Promise.resolve())
	    .then(function(mapped) {
	      if (mapped)
	        return Promise.resolve(mapped);

	      // normal package resolution / fallback resolution for no conditional match
	      return Promise.resolve(pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, subPath, skipExtensions));
	    });
	  }

	  function doStringMap(loader, pkg, pkgName, basePath, mapMatch, mapped, path, skipExtensions) {
	    // NB the interpolation cases should strictly skip subsequent interpolation

	    // package map to main / base-level
	    if (mapped == '.')
	      mapped = pkgName;
	    
	    // internal package map
	    else if (mapped.substr(0, 2) == './')
	      return Promise.resolve(pkgName + '/' + basePath + addDefaultExtension(loader, pkg, pkgName, basePath, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions))
	      .then(function(name) {
	        return interpolateConditional.call(loader, name, pkgName + '/');
	      });
	    
	    // external map reference
	    // NB deprecate the use of the second argument here -> should be fully global reference
	    return loader.normalize(mapped + path.substr(mapMatch.length), pkgName + '/');
	  }

	  function doMap(loader, pkg, pkgName, basePath, mapMatch, path, skipExtensions) {
	    var mapped = pkg.map[mapMatch];

	    if (typeof mapped == 'string')
	      return doStringMap(loader, pkg, pkgName, basePath, mapMatch, mapped, path, skipExtensions);

	    // we use a special conditional syntax to allow the builder to handle conditional branch points further
	    if (loader.builder)
	      return Promise.resolve(pkgName + '/#:' + path);

	    // map object -> conditional map
	    return loader['import'](pkg.map['@env'] || '@system-env', pkgName)
	    .then(function(env) {
	      // first map condition to match is used
	      for (var e in mapped) {
	        var negate = e[0] == '~';

	        var value = readMemberExpression(negate ? e.substr(1) : e, env);

	        if (!negate && value || negate && !value)
	          return mapped[e];
	      }
	    })
	    .then(function(mapped) {
	      if (mapped)
	        return doStringMap(loader, pkg, pkgName, basePath, mapMatch, mapped, path, skipExtensions);

	      // no environment match -> fallback to original subPath by returning undefined
	    });
	  }

	  // normalizeSync = decanonicalize + package resolution
	  SystemJSLoader.prototype.normalizeSync = SystemJSLoader.prototype.decanonicalize = SystemJSLoader.prototype.normalize;

	  // decanonicalize must JUST handle package defaultExtension: false case when defaultJSExtensions is set
	  // to be deprecated!
	  hook('decanonicalize', function(decanonicalize) {
	    return function(name, parentName) {
	      var decanonicalized = decanonicalize.call(this, name, parentName);

	      if (!this.defaultJSExtensions)
	        return decanonicalized;
	    
	      var pkgName = getPackage(this, decanonicalized);

	      var pkg = this.packages[pkgName];
	      var defaultExtension = pkg && pkg.defaultExtension;

	      if (defaultExtension == undefined && pkg && pkg.meta)
	        getMetaMatches(pkg.meta, decanonicalized.substr(pkgName), function(metaPattern, matchMeta, matchDepth) {
	          if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1) {
	            defaultExtension = false;
	            return true;
	          }
	        });
	      
	      if ((defaultExtension === false || defaultExtension && defaultExtension != '.js') && name.substr(name.length - 3, 3) != '.js' && decanonicalized.substr(decanonicalized.length - 3, 3) == '.js')
	        decanonicalized = decanonicalized.substr(0, decanonicalized.length - 3);

	      return decanonicalized;
	    };
	  });

	  hook('normalizeSync', function(normalizeSync) {
	    return function(name, parentName, isPlugin) {
	      warn.call(this, 'SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.');

	      var loader = this;
	      isPlugin = isPlugin === true;

	      // apply contextual package map first
	      // (we assume the parent package config has already been loaded)
	      if (parentName)
	        var parentPackageName = getPackage(loader, parentName) ||
	            loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
	            getPackage(loader, parentName.substr(0, parentName.length - 3));

	      var parentPackage = parentPackageName && loader.packages[parentPackageName];

	      // remove any parent basePath from parentName
	      if (parentPackage) {
	        var parentBasePath = getBasePath(parentPackage);
	        if (parentBasePath && parentName.substr(parentPackageName.length + 1, parentBasePath.length) == parentBasePath)
	          parentName = parentPackageName + parentName.substr(parentPackageName.length + parentBasePath.length);
	      }

	      // ignore . since internal maps handled by standard package resolution
	      if (parentPackage && name[0] != '.') {
	        var parentMap = parentPackage.map;
	        var parentMapMatch = parentMap && getMapMatch(parentMap, name);

	        if (parentMapMatch && typeof parentMap[parentMapMatch] == 'string')
	          return doMapSync(loader, parentPackage, parentPackageName, getBasePath(parentPackage), parentMapMatch, name, isPlugin);
	      }

	      var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

	      // apply map, core, paths, contextual package map
	      var normalized = normalizeSync.call(loader, name, parentName);

	      // undo defaultJSExtension
	      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
	        defaultJSExtension = false;
	      if (defaultJSExtension)
	        normalized = normalized.substr(0, normalized.length - 3);

	      var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
	      var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

	      if (!pkgName)
	        return normalized + (defaultJSExtension ? '.js' : '');

	      var subPath = normalized.substr(pkgName.length + 1);

	      return applyPackageConfigSync(loader, loader.packages[pkgName] || {}, pkgName, subPath, isPlugin);
	    };
	  });

	  hook('normalize', function(normalize) {
	    return function(name, parentName, isPlugin) {
	      var loader = this;
	      isPlugin = isPlugin === true;

	      return Promise.resolve()
	      .then(function() {
	        // apply contextual package map first
	        // (we assume the parent package config has already been loaded)
	        if (parentName)
	          var parentPackageName = getPackage(loader, parentName) ||
	              loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
	              getPackage(loader, parentName.substr(0, parentName.length - 3));

	        var parentPackage = parentPackageName && loader.packages[parentPackageName];

	        // remove any parent basePath from parentName
	        if (parentPackage) {
	          var parentBasePath = getBasePath(parentPackage);
	          if (parentBasePath && parentName.substr(parentPackageName.length + 1, parentBasePath.length) == parentBasePath)
	            parentName = parentPackageName + parentName.substr(parentPackageName.length + parentBasePath.length);
	        }

	        // ignore . since internal maps handled by standard package resolution
	        if (parentPackage && name.substr(0, 2) != './') {
	          var parentMap = parentPackage.map;
	          var parentMapMatch = parentMap && getMapMatch(parentMap, name);

	          if (parentMapMatch)
	            return doMap(loader, parentPackage, parentPackageName, parentBasePath, parentMapMatch, name, isPlugin);
	        }

	        return Promise.resolve();
	      })
	      .then(function(mapped) {
	        if (mapped)
	          return mapped;

	        var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

	        // apply map, core, paths, contextual package map
	        var normalized = normalize.call(loader, name, parentName);

	        // undo defaultJSExtension
	        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
	          defaultJSExtension = false;
	        if (defaultJSExtension)
	          normalized = normalized.substr(0, normalized.length - 3);

	        var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
	        var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

	        if (!pkgName)
	          return Promise.resolve(normalized + (defaultJSExtension ? '.js' : ''));

	        var pkg = loader.packages[pkgName];

	        // if package is already configured or not a dynamic config package, use existing package config
	        var isConfigured = pkg && (pkg.configured || !pkgConfigMatch);
	        return (isConfigured ? Promise.resolve(pkg) : loadPackageConfigPath(loader, pkgName, pkgConfigMatch.configPath))
	        .then(function(pkg) {
	          var subPath = normalized.substr(pkgName.length + 1);

	          return applyPackageConfig(loader, pkg, pkgName, subPath, isPlugin);
	        });
	      });
	    };
	  });

	  // check if the given normalized name matches a packageConfigPath
	  // if so, loads the config
	  var packageConfigPaths = {};

	  // data object for quick checks against package paths
	  function createPkgConfigPathObj(path) {
	    var lastWildcard = path.lastIndexOf('*');
	    var length = Math.max(lastWildcard + 1, path.lastIndexOf('/'));
	    return {
	      length: length,
	      // NB handle regex control character escapes or simply create a test function here
	      regEx: new RegExp('^(' + path.substr(0, length).replace(/\*/g, '[^\\/]+') + ')(\\/|$)'),
	      wildcard: lastWildcard != -1
	    };
	  }

	  // most specific match wins
	  function getPackageConfigMatch(loader, normalized) {
	    var pkgName, exactMatch = false, configPath;
	    for (var i = 0; i < loader.packageConfigPaths.length; i++) {
	      var packageConfigPath = loader.packageConfigPaths[i];
	      var p = packageConfigPaths[packageConfigPath] || (packageConfigPaths[packageConfigPath] = createPkgConfigPathObj(packageConfigPath));
	      if (normalized.length < p.length)
	        continue;
	      var match = normalized.match(p.regEx);
	      if (match && (!pkgName || (!(exactMatch && p.wildcard) && pkgName.length < match[1].length))) {
	        pkgName = match[1];
	        exactMatch = !p.wildcard;
	        configPath = pkgName + packageConfigPath.substr(p.length);
	      }
	    }

	    if (!pkgName)
	      return;

	    return {
	      packageName: pkgName,
	      configPath: configPath
	    };
	  }

	  function loadPackageConfigPath(loader, pkgName, pkgConfigPath) {
	    var configLoader = loader.pluginLoader || loader;

	    // NB remove this when json is default
	    (configLoader.meta[pkgConfigPath] = configLoader.meta[pkgConfigPath] || {}).format = 'json';

	    return configLoader.load(pkgConfigPath)
	    .then(function() {
	      pkgConfig = configLoader.get(pkgConfigPath);

	      var cfg = pkgConfig['default'];

	      // support "systemjs" prefixing
	      if (cfg.systemjs)
	        cfg = cfg.systemjs;

	      // modules backwards compatibility
	      if (cfg.modules) {
	        cfg.meta = cfg.modules;
	        warn.call(loader, 'Package config file ' + pkgConfigPath + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
	      }

	      // remove any non-system properties if generic config file (eg package.json)
	      for (var p in cfg) {
	        if (indexOf.call(packageProperties, p) == -1)
	          delete cfg[p];
	      }

	      // deeply-merge (to first level) config with any existing package config
	      var pkg = loader.packages[pkgName] = loader.packages[pkgName] || {};
	      extendMeta(pkg, cfg, true);

	      // support external depCache
	      var basePath = getBasePath(pkg);
	      if (cfg.depCache) {
	        for (var d in cfg.depCache) {
	          var dNormalized;

	          if (d.substr(0, 2) == './')
	            dNormalized = pkgName + '/' + basePath + d.substr(2);
	          else
	            dNormalized = coreResolve.call(loader, d);
	          loader.depCache[dNormalized] = (loader.depCache[dNormalized] || []).concat(cfg.depCache[d]);
	        }
	        delete cfg.depCache;
	      }

	      return pkg;
	    });
	  }

	  function getMetaMatches(pkgMeta, subPath, matchFn) {
	    // wildcard meta
	    var meta = {};
	    var wildcardIndex;
	    for (var module in pkgMeta) {
	      // allow meta to start with ./ for flexibility
	      var dotRel = module.substr(0, 2) == './' ? './' : '';
	      if (dotRel)
	        module = module.substr(2);

	      wildcardIndex = module.indexOf('*');
	      if (wildcardIndex === -1)
	        continue;

	      if (module.substr(0, wildcardIndex) == subPath.substr(0, wildcardIndex)
	          && module.substr(wildcardIndex + 1) == subPath.substr(subPath.length - module.length + wildcardIndex + 1)) {
	        // alow match function to return true for an exit path
	        if (matchFn(module, pkgMeta[dotRel + module], module.split('/').length))
	          return;
	      }
	    }
	    // exact meta
	    var exactMeta = pkgMeta[subPath] || pkgMeta['./' + subPath];
	    if (exactMeta)
	      matchFn(exactMeta, exactMeta, 0);
	  }

	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      return Promise.resolve(locate.call(this, load))
	      .then(function(address) {
	        var pkgName = getPackage(loader, load.name);
	        if (pkgName) {
	          var pkg = loader.packages[pkgName];
	          var basePath = getBasePath(pkg);
	          var subPath = load.name.substr(pkgName.length + basePath.length + 1);

	          // format
	          if (pkg.format)
	            load.metadata.format = load.metadata.format || pkg.format;

	          var meta = {};
	          if (pkg.meta) {
	            var bestDepth = 0;

	            // NB support a main shorthand in meta here?
	            getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
	              if (matchDepth > bestDepth)
	                bestDepth = matchDepth;
	              extendMeta(meta, matchMeta, matchDepth && bestDepth > matchDepth);
	            });

	            // allow alias and loader to be package-relative
	            if (meta.alias && meta.alias.substr(0, 2) == './')
	              meta.alias = pkgName + meta.alias.substr(1);
	            if (meta.loader && meta.loader.substr(0, 2) == './')
	              meta.loader = pkgName + meta.loader.substr(1);
	            extendMeta(load.metadata, meta);
	          }
	        }

	        return address;
	      });
	    };
	  });

	})();
	/*
	 * Script tag fetch
	 *
	 * When load.metadata.scriptLoad is true, we load via script tag injection.
	 */
	(function() {

	  if (typeof document != 'undefined')
	    var head = document.getElementsByTagName('head')[0];

	  var curSystem;

	  // if doing worker executing, this is set to the load record being executed
	  var workerLoad = null;
	  
	  // interactive mode handling method courtesy RequireJS
	  var ieEvents = head && (function() {
	    var s = document.createElement('script');
	    var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
	    return s.attachEvent && !(s.attachEvent.toString && s.attachEvent.toString().indexOf('[native code') < 0) && !isOpera;
	  })();

	  // IE interactive-only part
	  // we store loading scripts array as { script: <script>, load: {...} }
	  var interactiveLoadingScripts = [];
	  var interactiveScript;
	  function getInteractiveScriptLoad() {
	    if (interactiveScript && interactiveScript.script.readyState === 'interactive')
	      return interactiveScript.load;

	    for (var i = 0; i < interactiveLoadingScripts.length; i++)
	      if (interactiveLoadingScripts[i].script.readyState == 'interactive') {
	        interactiveScript = interactiveLoadingScripts[i];
	        return interactiveScript.load;
	      }
	  }
	  
	  // System.register, System.registerDynamic, AMD define pipeline
	  // this is called by the above methods when they execute
	  // we then run the reduceRegister_ collection function either immediately
	  // if we are in IE and know the currently executing script (interactive)
	  // or later if we need to wait for the synchronous load callback to know the script
	  var loadingCnt = 0;
	  var registerQueue = [];
	  hook('pushRegister_', function(pushRegister) {
	    return function(register) {
	      // if using eval-execution then skip
	      if (pushRegister.call(this, register))
	        return false;

	      // if using worker execution, then we're done
	      if (workerLoad)
	        this.reduceRegister_(workerLoad, register);

	      // detect if we know the currently executing load (IE)
	      // if so, immediately call reduceRegister
	      else if (ieEvents)
	        this.reduceRegister_(getInteractiveScriptLoad(), register);

	      // otherwise, add to our execution queue
	      // to call reduceRegister on sync script load event
	      else if (loadingCnt)
	        registerQueue.push(register);

	      // if we're not currently loading anything though
	      // then do the reduction against a null load
	      // (out of band named define or named register)
	      // note even in non-script environments, this catch is used
	      else
	        this.reduceRegister_(null, register);

	      return true;
	    };
	  });

	  function webWorkerImport(loader, load) {
	    return new Promise(function(resolve, reject) {
	      if (load.metadata.integrity)
	        reject(new Error('Subresource integrity checking is not supported in web workers.'));

	      workerLoad = load;
	      try {
	        importScripts(load.address);
	      }
	      catch(e) {
	        workerLoad = null;
	        reject(e);
	      }
	      workerLoad = null;

	      // if nothing registered, then something went wrong
	      if (!load.metadata.entry)
	        reject(new Error(load.address + ' did not call System.register or AMD define'));

	      resolve('');
	    });
	  }

	  // override fetch to use script injection
	  hook('fetch', function(fetch) {
	    return function(load) {
	      var loader = this;

	      if (load.metadata.format == 'json' || !load.metadata.scriptLoad || (!isBrowser && !isWorker))
	        return fetch.call(this, load);

	      if (isWorker)
	        return webWorkerImport(loader, load);

	      return new Promise(function(resolve, reject) {
	        var s = document.createElement('script');
	        
	        s.async = true;
	        
	        if (load.metadata.integrity)
	          s.setAttribute('integrity', load.metadata.integrity);

	        if (ieEvents) {
	          s.attachEvent('onreadystatechange', complete);
	          interactiveLoadingScripts.push({
	            script: s,
	            load: load
	          });
	        }
	        else {
	          s.addEventListener('load', complete, false);
	          s.addEventListener('error', error, false);
	        }

	        loadingCnt++;

	        curSystem = __global.System;

	        s.src = load.address;
	        head.appendChild(s);

	        function complete(evt) {
	          if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
	            return;

	          loadingCnt--;

	          // complete call is sync on execution finish
	          // (in ie already done reductions)
	          if (!load.metadata.entry && !registerQueue.length) {
	            loader.reduceRegister_(load);
	          }
	          else if (!ieEvents) {
	            for (var i = 0; i < registerQueue.length; i++)
	              loader.reduceRegister_(load, registerQueue[i]);
	            registerQueue = [];
	          }

	          cleanup();

	          // if nothing registered, then something went wrong
	          if (!load.metadata.entry && !load.metadata.bundle)
	            reject(new Error(load.name + ' did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.'));

	          resolve('');
	        }

	        function error(evt) {
	          cleanup();
	          reject(new Error('Unable to load script ' + load.address));
	        }

	        function cleanup() {
	          __global.System = curSystem;

	          if (s.detachEvent) {
	            s.detachEvent('onreadystatechange', complete);
	            for (var i = 0; i < interactiveLoadingScripts.length; i++)
	              if (interactiveLoadingScripts[i].script == s) {
	                if (interactiveScript && interactiveScript.script == s)
	                  interactiveScript = null;
	                interactiveLoadingScripts.splice(i, 1);
	              }
	          }
	          else {
	            s.removeEventListener('load', complete, false);
	            s.removeEventListener('error', error, false);
	          }

	          head.removeChild(s);
	        }
	      });
	    };
	  });
	})();
	/*
	 * Instantiate registry extension
	 *
	 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
	 *
	 * - Creates the loader.register function
	 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
	 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
	 *     for handling dynamic modules alongside register-transformed ES6 modules
	 *
	 *
	 * The code here replicates the ES6 linking groups algorithm to ensure that
	 * circular ES6 compiled into System.register can work alongside circular AMD 
	 * and CommonJS, identically to the actual ES6 loader.
	 *
	 */


	/*
	 * Registry side table entries in loader.defined
	 * Registry Entry Contains:
	 *    - name
	 *    - deps 
	 *    - declare for declarative modules
	 *    - execute for dynamic modules, different to declarative execute on module
	 *    - executingRequire indicates require drives execution for circularity of dynamic modules
	 *    - declarative optional boolean indicating which of the above
	 *
	 * Can preload modules directly on SystemJS.defined['my/module'] = { deps, execute, executingRequire }
	 *
	 * Then the entry gets populated with derived information during processing:
	 *    - normalizedDeps derived from deps, created in instantiate
	 *    - groupIndex used by group linking algorithm
	 *    - evaluated indicating whether evaluation has happend
	 *    - module the module record object, containing:
	 *      - exports actual module exports
	 *
	 *    For dynamic we track the es module with:
	 *    - esModule actual es module value
	 *    - esmExports whether to extend the esModule with named exports
	 *      
	 *    Then for declarative only we track dynamic bindings with the 'module' records:
	 *      - name
	 *      - exports
	 *      - setters declarative setter functions
	 *      - dependencies, module records of dependencies
	 *      - importers, module records of dependents
	 *
	 * After linked and evaluated, entries are removed, declarative module records remain in separate
	 * module binding table
	 *
	 */

	var leadingCommentAndMetaRegEx = /^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
	function detectRegisterFormat(source) {
	  var leadingCommentAndMeta = source.match(leadingCommentAndMetaRegEx);
	  return leadingCommentAndMeta && source.substr(leadingCommentAndMeta[0].length, 15) == 'System.register';
	}

	function createEntry() {
	  return {
	    name: null,
	    deps: null,
	    originalIndices: null,
	    declare: null,
	    execute: null,
	    executingRequire: false,
	    declarative: false,
	    normalizedDeps: null,
	    groupIndex: null,
	    evaluated: false,
	    module: null,
	    esModule: null,
	    esmExports: false
	  };
	}

	(function() {

	  /*
	   * There are two variations of System.register:
	   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
	   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
	   *
	   * 2. System.registerDynamic for dynamic modules (3-4 params) - System.registerDynamic([name, ]deps, executingRequire, execute)
	   * the true or false statement 
	   *
	   * this extension implements the linking algorithm for the two variations identical to the spec
	   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
	   *
	   */
	  SystemJSLoader.prototype.register = function(name, deps, declare) {
	    if (typeof name != 'string') {
	      declare = deps;
	      deps = name;
	      name = null;
	    }

	    // dynamic backwards-compatibility
	    // can be deprecated eventually
	    if (typeof declare == 'boolean')
	      return this.registerDynamic.apply(this, arguments);

	    var entry = createEntry();
	    // ideally wouldn't apply map config to bundle names but 
	    // dependencies go through map regardless so we can't restrict
	    // could reconsider in shift to new spec
	    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
	    entry.declarative = true;
	    entry.deps = deps;
	    entry.declare = declare;

	    this.pushRegister_({
	      amd: false,
	      entry: entry
	    });
	  };
	  SystemJSLoader.prototype.registerDynamic = function(name, deps, declare, execute) {
	    if (typeof name != 'string') {
	      execute = declare;
	      declare = deps;
	      deps = name;
	      name = null;
	    }

	    // dynamic
	    var entry = createEntry();
	    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
	    entry.deps = deps;
	    entry.execute = execute;
	    entry.executingRequire = declare;

	    this.pushRegister_({
	      amd: false,
	      entry: entry
	    });
	  };
	  hook('reduceRegister_', function() {
	    return function(load, register) {
	      if (!register)
	        return;

	      var entry = register.entry;
	      var curMeta = load && load.metadata;

	      // named register
	      if (entry.name) {
	        if (!(entry.name in this.defined))
	          this.defined[entry.name] = entry;

	        if (curMeta)
	          curMeta.bundle = true;
	      }
	      // anonymous register
	      if (!entry.name || load && entry.name == load.name) {
	        if (!curMeta)
	          throw new TypeError('Unexpected anonymous System.register call.');
	        if (curMeta.entry) {
	          if (curMeta.format == 'register')
	            throw new Error('Multiple anonymous System.register calls in module ' + load.name + '. If loading a bundle, ensure all the System.register calls are named.');
	          else
	            throw new Error('Module ' + load.name + ' interpreted as ' + curMeta.format + ' module format, but called System.register.');
	        }
	        if (!curMeta.format)
	          curMeta.format = 'register';
	        curMeta.entry = entry;
	      }
	    };
	  });

	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);

	      this.defined = {};
	      this._loader.moduleRecords = {};
	    };
	  });

	  function buildGroups(entry, loader, groups) {
	    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

	    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
	      return;

	    groups[entry.groupIndex].push(entry);

	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      var depEntry = loader.defined[depName];
	      
	      // not in the registry means already linked / ES6
	      if (!depEntry || depEntry.evaluated)
	        continue;
	      
	      // now we know the entry is in our unlinked linkage group
	      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

	      // the group index of an entry is always the maximum
	      if (depEntry.groupIndex === null || depEntry.groupIndex < depGroupIndex) {
	        
	        // if already in a group, remove from the old group
	        if (depEntry.groupIndex !== null) {
	          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

	          // if the old group is empty, then we have a mixed depndency cycle
	          if (groups[depEntry.groupIndex].length == 0)
	            throw new Error("Mixed dependency cycle detected");
	        }

	        depEntry.groupIndex = depGroupIndex;
	      }

	      buildGroups(depEntry, loader, groups);
	    }
	  }

	  function link(name, loader) {
	    var startEntry = loader.defined[name];

	    // skip if already linked
	    if (startEntry.module)
	      return;

	    startEntry.groupIndex = 0;

	    var groups = [];

	    buildGroups(startEntry, loader, groups);

	    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
	    for (var i = groups.length - 1; i >= 0; i--) {
	      var group = groups[i];
	      for (var j = 0; j < group.length; j++) {
	        var entry = group[j];

	        // link each group
	        if (curGroupDeclarative)
	          linkDeclarativeModule(entry, loader);
	        else
	          linkDynamicModule(entry, loader);
	      }
	      curGroupDeclarative = !curGroupDeclarative; 
	    }
	  }

	  // module binding records
	  function Module() {}
	  defineProperty(Module, 'toString', {
	    value: function() {
	      return 'Module';
	    }
	  });

	  function getOrCreateModuleRecord(name, moduleRecords) {
	    return moduleRecords[name] || (moduleRecords[name] = {
	      name: name,
	      dependencies: [],
	      exports: new Module(), // start from an empty module and extend
	      importers: []
	    });
	  }

	  function linkDeclarativeModule(entry, loader) {
	    // only link if already not already started linking (stops at circular)
	    if (entry.module)
	      return;

	    var moduleRecords = loader._loader.moduleRecords;
	    var module = entry.module = getOrCreateModuleRecord(entry.name, moduleRecords);
	    var exports = entry.module.exports;

	    var declaration = entry.declare.call(__global, function(name, value) {
	      module.locked = true;

	      if (typeof name == 'object') {
	        for (var p in name)
	          exports[p] = name[p];
	      }
	      else {
	        exports[name] = value;
	      }

	      for (var i = 0, l = module.importers.length; i < l; i++) {
	        var importerModule = module.importers[i];
	        if (!importerModule.locked) {
	          var importerIndex = indexOf.call(importerModule.dependencies, module);
	          importerModule.setters[importerIndex](exports);
	        }
	      }

	      module.locked = false;
	      return value;
	    }, entry.name);
	    
	    module.setters = declaration.setters;
	    module.execute = declaration.execute;

	    if (!module.setters || !module.execute) {
	      throw new TypeError('Invalid System.register form for ' + entry.name);
	    }

	    // now link all the module dependencies
	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      var depEntry = loader.defined[depName];
	      var depModule = moduleRecords[depName];

	      // work out how to set depExports based on scenarios...
	      var depExports;

	      if (depModule) {
	        depExports = depModule.exports;
	      }
	      // dynamic, already linked in our registry
	      else if (depEntry && !depEntry.declarative) {
	        depExports = depEntry.esModule;
	      }
	      // in the loader registry
	      else if (!depEntry) {
	        depExports = loader.get(depName);
	      }
	      // we have an entry -> link
	      else {
	        linkDeclarativeModule(depEntry, loader);
	        depModule = depEntry.module;
	        depExports = depModule.exports;
	      }

	      // only declarative modules have dynamic bindings
	      if (depModule && depModule.importers) {
	        depModule.importers.push(module);
	        module.dependencies.push(depModule);
	      }
	      else {
	        module.dependencies.push(null);
	      }
	      
	      // run setters for all entries with the matching dependency name
	      var originalIndices = entry.originalIndices[i];
	      for (var j = 0, len = originalIndices.length; j < len; ++j) {
	        var index = originalIndices[j];
	        if (module.setters[index]) {
	          module.setters[index](depExports);
	        }
	      }
	    }
	  }

	  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
	  function getModule(name, loader) {
	    var exports;
	    var entry = loader.defined[name];

	    if (!entry) {
	      exports = loader.get(name);
	      if (!exports)
	        throw new Error('Unable to load dependency ' + name + '.');
	    }

	    else {
	      if (entry.declarative)
	        ensureEvaluated(name, [], loader);
	    
	      else if (!entry.evaluated)
	        linkDynamicModule(entry, loader);

	      exports = entry.module.exports;
	    }

	    if ((!entry || entry.declarative) && exports && exports.__useDefault)
	      return exports['default'];
	    
	    return exports;
	  }

	  function linkDynamicModule(entry, loader) {
	    if (entry.module)
	      return;

	    var exports = {};

	    var module = entry.module = { exports: exports, id: entry.name };

	    // AMD requires execute the tree first
	    if (!entry.executingRequire) {
	      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	        var depName = entry.normalizedDeps[i];
	        // we know we only need to link dynamic due to linking algorithm
	        var depEntry = loader.defined[depName];
	        if (depEntry)
	          linkDynamicModule(depEntry, loader);
	      }
	    }

	    // now execute
	    entry.evaluated = true;
	    var output = entry.execute.call(__global, function(name) {
	      for (var i = 0, l = entry.deps.length; i < l; i++) {
	        if (entry.deps[i] != name)
	          continue;
	        return getModule(entry.normalizedDeps[i], loader);
	      }
	      throw new Error('Module ' + name + ' not declared as a dependency.');
	    }, exports, module);
	    
	    if (output)
	      module.exports = output;

	    // create the esModule object, which allows ES6 named imports of dynamics
	    exports = module.exports;

	    // __esModule flag treats as already-named
	    if (exports && exports.__esModule)
	      entry.esModule = exports;
	    // set module as 'default' export, then fake named exports by iterating properties
	    else if (entry.esmExports && exports !== __global)
	      entry.esModule = getESModule(exports);
	    // just use the 'default' export
	    else
	      entry.esModule = { 'default': exports };
	  }

	  /*
	   * Given a module, and the list of modules for this current branch,
	   *  ensure that each of the dependencies of this module is evaluated
	   *  (unless one is a circular dependency already in the list of seen
	   *  modules, in which case we execute it)
	   *
	   * Then we evaluate the module itself depth-first left to right 
	   * execution to match ES6 modules
	   */
	  function ensureEvaluated(moduleName, seen, loader) {
	    var entry = loader.defined[moduleName];

	    // if already seen, that means it's an already-evaluated non circular dependency
	    if (!entry || entry.evaluated || !entry.declarative)
	      return;

	    // this only applies to declarative modules which late-execute

	    seen.push(moduleName);

	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      if (indexOf.call(seen, depName) == -1) {
	        if (!loader.defined[depName])
	          loader.get(depName);
	        else
	          ensureEvaluated(depName, seen, loader);
	      }
	    }

	    if (entry.evaluated)
	      return;

	    entry.evaluated = true;
	    entry.module.execute.call(__global);
	  }

	  // override the delete method to also clear the register caches
	  hook('delete', function(del) {
	    return function(name) {
	      delete this._loader.moduleRecords[name];
	      delete this.defined[name];
	      return del.call(this, name);
	    };
	  });

	  hook('fetch', function(fetch) {
	    return function(load) {
	      if (this.defined[load.name]) {
	        load.metadata.format = 'defined';
	        return '';
	      }
	      
	      if (load.metadata.format == 'register' && !load.metadata.authorization && load.metadata.scriptLoad !== false)
	        load.metadata.scriptLoad = true;

	      load.metadata.deps = load.metadata.deps || [];
	      
	      return fetch.call(this, load);
	    };
	  });

	  hook('translate', function(translate) {
	    // we run the meta detection here (register is after meta)
	    return function(load) {
	      load.metadata.deps = load.metadata.deps || [];
	      return Promise.resolve(translate.call(this, load)).then(function(source) {
	        // run detection for register format
	        if (load.metadata.format == 'register' || !load.metadata.format && detectRegisterFormat(load.source))
	          load.metadata.format = 'register';
	        return source;
	      });
	    };
	  });

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      if (load.metadata.format == 'detect')
	        load.metadata.format = undefined;

	      // assumes previous instantiate is sync
	      // (core json support)
	      instantiate.call(this, load);

	      var loader = this;

	      var entry;

	      // first we check if this module has already been defined in the registry
	      if (loader.defined[load.name]) {
	        entry = loader.defined[load.name];
	        // don't support deps for ES modules
	        if (!entry.declarative)
	          entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // picked up already by an anonymous System.register script injection
	      // or via the dynamic formats
	      else if (load.metadata.entry) {
	        entry = load.metadata.entry;
	        entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // Contains System.register calls
	      // (dont run bundles in the builder)
	      else if (!(loader.builder && load.metadata.bundle) 
	          && (load.metadata.format == 'register' || load.metadata.format == 'esm' || load.metadata.format == 'es6')) {
	        
	        if (typeof __exec != 'undefined')
	          __exec.call(loader, load);

	        if (!load.metadata.entry && !load.metadata.bundle)
	          throw new Error(load.name + ' detected as ' + load.metadata.format + ' but didn\'t execute.');

	        entry = load.metadata.entry;

	        // support metadata deps for System.register
	        if (entry && load.metadata.deps)
	          entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // named bundles are just an empty module
	      if (!entry) {
	        entry = createEntry();
	        entry.deps = load.metadata.deps;
	        entry.execute = function() {};
	      }

	      // place this module onto defined for circular references
	      loader.defined[load.name] = entry;
	      
	      var grouped = group(entry.deps);
	      
	      entry.deps = grouped.names;
	      entry.originalIndices = grouped.indices;
	      entry.name = load.name;
	      entry.esmExports = load.metadata.esmExports !== false;

	      // first, normalize all dependencies
	      var normalizePromises = [];
	      for (var i = 0, l = entry.deps.length; i < l; i++)
	        normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

	      return Promise.all(normalizePromises).then(function(normalizedDeps) {

	        entry.normalizedDeps = normalizedDeps;

	        return {
	          deps: entry.deps,
	          execute: function() {
	            // recursively ensure that the module and all its 
	            // dependencies are linked (with dependency group handling)
	            link(load.name, loader);

	            // now handle dependency execution in correct order
	            ensureEvaluated(load.name, [], loader);

	            // remove from the registry
	            loader.defined[load.name] = undefined;

	            // return the defined module object
	            return loader.newModule(entry.declarative ? entry.module.exports : entry.esModule);
	          }
	        };
	      });
	    };
	  });
	})();
	hook('reduceRegister_', function(reduceRegister) {
	  return function(load, register) {
	    if (register || !load.metadata.exports)
	      return reduceRegister.call(this, load, register);

	    load.metadata.format = 'global';
	    var entry = load.metadata.entry = createEntry();
	    entry.deps = load.metadata.deps;
	    var globalValue = readMemberExpression(load.metadata.exports, __global);
	    entry.execute = function() {
	      return globalValue;
	    };
	  };
	});

	hookConstructor(function(constructor) {
	  return function() {
	    var loader = this;
	    constructor.call(loader);

	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    // bare minimum ignores for IE8
	    var ignoredGlobalProps = ['_g', 'sessionStorage', 'localStorage', 'clipboardData', 'frames', 'frameElement', 'external', 
	      'mozAnimationStartTime', 'webkitStorageInfo', 'webkitIndexedDB', 'mozInnerScreenY', 'mozInnerScreenX'];

	    var globalSnapshot;

	    function forEachGlobal(callback) {
	      if (Object.keys)
	        Object.keys(__global).forEach(callback);
	      else
	        for (var g in __global) {
	          if (!hasOwnProperty.call(__global, g))
	            continue;
	          callback(g);
	        }
	    }

	    function forEachGlobalValue(callback) {
	      forEachGlobal(function(globalName) {
	        if (indexOf.call(ignoredGlobalProps, globalName) != -1)
	          return;
	        try {
	          var value = __global[globalName];
	        }
	        catch (e) {
	          ignoredGlobalProps.push(globalName);
	        }
	        callback(globalName, value);
	      });
	    }

	    loader.set('@@global-helpers', loader.newModule({
	      prepareGlobal: function(moduleName, exportName, globals) {
	        // disable module detection
	        var curDefine = __global.define;
	        
	        __global.define = undefined;
	        __global.exports = undefined;
	        if (__global.module && __global.module.exports)
	          __global.module = undefined;

	        // set globals
	        var oldGlobals;
	        if (globals) {
	          oldGlobals = {};
	          for (var g in globals) {
	            oldGlobals[g] = __global[g];
	            __global[g] = globals[g];
	          }
	        }

	        // store a complete copy of the global object in order to detect changes
	        if (!exportName) {
	          globalSnapshot = {};

	          forEachGlobalValue(function(name, value) {
	            globalSnapshot[name] = value;
	          });
	        }

	        // return function to retrieve global
	        return function() {
	          var globalValue;

	          if (exportName) {
	            globalValue = readMemberExpression(exportName, __global);
	          }
	          else {
	            var singleGlobal;
	            var multipleExports;
	            var exports = {};

	            forEachGlobalValue(function(name, value) {
	              if (globalSnapshot[name] === value)
	                return;
	              if (typeof value == 'undefined')
	                return;
	              exports[name] = value;

	              if (typeof singleGlobal != 'undefined') {
	                if (!multipleExports && singleGlobal !== value)
	                  multipleExports = true;
	              }
	              else {
	                singleGlobal = value;
	              }
	            });
	            globalValue = multipleExports ? exports : singleGlobal;
	          }

	          // revert globals
	          if (oldGlobals) {
	            for (var g in oldGlobals)
	              __global[g] = oldGlobals[g];
	          }
	          __global.define = curDefine;

	          return globalValue;
	        };
	      }
	    }));
	  };
	});
	hookConstructor(function(constructor) {
	  return function() {
	    var loader = this;
	    constructor.call(loader);

	    if (typeof window != 'undefined' && typeof document != 'undefined' && window.location)
	      var windowOrigin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

	    loader.set('@@cjs-helpers', loader.newModule({
	      getPathVars: function(moduleId) {
	        // remove any plugin syntax
	        var pluginIndex = moduleId.lastIndexOf('!');
	        var filename;
	        if (pluginIndex != -1)
	          filename = moduleId.substr(0, pluginIndex);
	        else
	          filename = moduleId;

	        var dirname = filename.split('/');
	        dirname.pop();
	        dirname = dirname.join('/');

	        if (filename.substr(0, 8) == 'file:///') {
	          filename = filename.substr(7);
	          dirname = dirname.substr(7);

	          // on windows remove leading '/'
	          if (isWindows) {
	            filename = filename.substr(1);
	            dirname = dirname.substr(1);
	          }
	        }
	        else if (windowOrigin && filename.substr(0, windowOrigin.length) === windowOrigin) {
	          filename = filename.substr(windowOrigin.length);
	          dirname = dirname.substr(windowOrigin.length);
	        }

	        return {
	          filename: filename,
	          dirname: dirname
	        };
	      }
	    }))
	  };
	});/*
	 * AMD Helper function module
	 * Separated into its own file as this is the part needed for full AMD support in SFX builds
	 * NB since implementations have now diverged this can be merged back with amd.js
	 */
	hookConstructor(function(constructor) {
	  return function() {
	    var loader = this;
	    constructor.call(this);

	    var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;
	    var cjsRequirePre = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])";
	    var cjsRequirePost = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)";
	    var fnBracketRegEx = /\(([^\)]*)\)/;
	    var wsRegEx = /^\s+|\s+$/g;
	    
	    var requireRegExs = {};

	    function getCJSDeps(source, requireIndex) {

	      // remove comments
	      source = source.replace(commentRegEx, '');

	      // determine the require alias
	      var params = source.match(fnBracketRegEx);
	      var requireAlias = (params[1].split(',')[requireIndex] || 'require').replace(wsRegEx, '');

	      // find or generate the regex for this requireAlias
	      var requireRegEx = requireRegExs[requireAlias] || (requireRegExs[requireAlias] = new RegExp(cjsRequirePre + requireAlias + cjsRequirePost, 'g'));

	      requireRegEx.lastIndex = 0;

	      var deps = [];

	      var match;
	      while (match = requireRegEx.exec(source))
	        deps.push(match[2] || match[3]);

	      return deps;
	    }

	    /*
	      AMD-compatible require
	      To copy RequireJS, set window.require = window.requirejs = loader.amdRequire
	    */
	    function require(names, callback, errback, referer) {
	      // in amd, first arg can be a config object... we just ignore
	      if (typeof names == 'object' && !(names instanceof Array))
	        return require.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));

	      // amd require
	      if (typeof names == 'string' && typeof callback == 'function')
	        names = [names];
	      if (names instanceof Array) {
	        var dynamicRequires = [];
	        for (var i = 0; i < names.length; i++)
	          dynamicRequires.push(loader['import'](names[i], referer));
	        Promise.all(dynamicRequires).then(function(modules) {
	          if (callback)
	            callback.apply(null, modules);
	        }, errback);
	      }

	      // commonjs require
	      else if (typeof names == 'string') {
	        var defaultJSExtension = loader.defaultJSExtensions && names.substr(names.length - 3, 3) != '.js';
	        var normalized = loader.decanonicalize(names, referer);
	        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
	          normalized = normalized.substr(0, normalized.length - 3);
	        var module = loader.get(normalized);
	        if (!module)
	          throw new Error('Module not already loaded loading "' + names + '" from "' + referer + '".');
	        return module.__useDefault ? module['default'] : module;
	      }

	      else
	        throw new TypeError('Invalid require');
	    }

	    function define(name, deps, factory) {
	      if (typeof name != 'string') {
	        factory = deps;
	        deps = name;
	        name = null;
	      }
	      if (!(deps instanceof Array)) {
	        factory = deps;
	        deps = ['require', 'exports', 'module'].splice(0, factory.length);
	      }

	      if (typeof factory != 'function')
	        factory = (function(factory) {
	          return function() { return factory; }
	        })(factory);

	      // in IE8, a trailing comma becomes a trailing undefined entry
	      if (deps[deps.length - 1] === undefined)
	        deps.pop();

	      // remove system dependencies
	      var requireIndex, exportsIndex, moduleIndex;
	      
	      if ((requireIndex = indexOf.call(deps, 'require')) != -1) {
	        
	        deps.splice(requireIndex, 1);

	        // only trace cjs requires for non-named
	        // named defines assume the trace has already been done
	        if (!name)
	          deps = deps.concat(getCJSDeps(factory.toString(), requireIndex));
	      }

	      if ((exportsIndex = indexOf.call(deps, 'exports')) != -1)
	        deps.splice(exportsIndex, 1);
	      
	      if ((moduleIndex = indexOf.call(deps, 'module')) != -1)
	        deps.splice(moduleIndex, 1);

	      function execute(req, exports, module) {
	        var depValues = [];
	        for (var i = 0; i < deps.length; i++)
	          depValues.push(req(deps[i]));

	        module.uri = module.id;

	        module.config = function() {};

	        // add back in system dependencies
	        if (moduleIndex != -1)
	          depValues.splice(moduleIndex, 0, module);
	        
	        if (exportsIndex != -1)
	          depValues.splice(exportsIndex, 0, exports);
	        
	        if (requireIndex != -1) {
	          function contextualRequire(names, callback, errback) {
	            if (typeof names == 'string' && typeof callback != 'function')
	              return req(names);
	            return require.call(loader, names, callback, errback, module.id);
	          }
	          contextualRequire.toUrl = function(name) {
	            // normalize without defaultJSExtensions
	            var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';
	            var url = loader.decanonicalize(name, module.id);
	            if (defaultJSExtension && url.substr(url.length - 3, 3) == '.js')
	              url = url.substr(0, url.length - 3);
	            return url;
	          };
	          depValues.splice(requireIndex, 0, contextualRequire);
	        }

	        // set global require to AMD require
	        var curRequire = __global.require;
	        __global.require = require;

	        var output = factory.apply(exportsIndex == -1 ? __global : exports, depValues);

	        __global.require = curRequire;

	        if (typeof output == 'undefined' && module)
	          output = module.exports;

	        if (typeof output != 'undefined')
	          return output;
	      }

	      var entry = createEntry();
	      entry.name = name && (loader.decanonicalize || loader.normalize).call(loader, name);
	      entry.deps = deps;
	      entry.execute = execute;

	      loader.pushRegister_({
	        amd: true,
	        entry: entry
	      });
	    }
	    define.amd = {};

	    // reduction function to attach defines to a load record
	    hook('reduceRegister_', function(reduceRegister) {
	      return function(load, register) {
	        // only handle AMD registers here
	        if (!register || !register.amd)
	          return reduceRegister.call(this, load, register);

	        var curMeta = load && load.metadata;
	        var entry = register.entry;

	        if (curMeta)
	          curMeta.format = 'amd';

	        // anonymous define
	        if (!entry.name) {
	          if (!curMeta)
	            throw new TypeError('Unexpected anonymous AMD define.');

	          // already defined anonymously -> throw
	          if (curMeta.entry)
	            throw new TypeError('Multiple defines for anonymous module ' + load.name);
	          
	          curMeta.entry = entry;
	        }
	        // named define
	        else {
	          // if we don't have any other defines, 
	          // then let this be an anonymous define
	          // this is just to support single modules of the form:
	          // define('jquery')
	          // still loading anonymously
	          // because it is done widely enough to be useful
	          // as soon as there is more than one define, this gets removed though
	          if (curMeta) {
	            if (!curMeta.entry && !curMeta.bundle)
	              curMeta.entry = entry;
	            else
	              curMeta.entry = undefined;

	            // note this is now a bundle
	            curMeta.bundle = true;
	          }

	          // define the module through the register registry
	          if (!(entry.name in this.defined))
	            this.defined[entry.name] = entry;
	        }
	      };
	    });

	    // adds define as a global (potentially just temporarily)
	    function createDefine() {
	      // ensure no NodeJS environment detection
	      var oldModule = __global.module;
	      var oldExports = __global.exports;
	      var oldDefine = __global.define;

	      __global.module = undefined;
	      __global.exports = undefined;
	      __global.define = define;

	      return function() {
	        __global.define = oldDefine;
	        __global.module = oldModule;
	        __global.exports = oldExports;
	      };
	    }

	    loader.set('@@amd-helpers', loader.newModule({
	      createDefine: createDefine,
	      require: require,
	      define: define
	    }));
	    loader.amdDefine = define;
	    loader.amdRequire = require;
	  };
	});/*
	  SystemJS Loader Plugin Support

	  Supports plugin loader syntax with "!", or via metadata.loader

	  The plugin name is loaded as a module itself, and can override standard loader hooks
	  for the plugin resource. See the plugin section of the systemjs readme.
	*/

	(function() {
	  function getParentName(loader, parentName) {
	    // if parent is a plugin, normalize against the parent plugin argument only
	    if (parentName) {
	      var parentPluginIndex;
	      if (loader.pluginFirst) {
	        if ((parentPluginIndex = parentName.lastIndexOf('!')) != -1)
	          return parentName.substr(parentPluginIndex + 1);
	      }
	      else {
	        if ((parentPluginIndex = parentName.indexOf('!')) != -1)
	          return parentName.substr(0, parentPluginIndex);
	      }

	      return parentName;
	    }
	  }

	  function parsePlugin(loader, name) {
	    var argumentName;
	    var pluginName;

	    var pluginIndex = name.lastIndexOf('!');

	    if (pluginIndex == -1)
	      return;

	    if (loader.pluginFirst) {
	      argumentName = name.substr(pluginIndex + 1);
	      pluginName = name.substr(0, pluginIndex);
	    }
	    else {
	      argumentName = name.substr(0, pluginIndex);
	      pluginName = name.substr(pluginIndex + 1) || argumentName.substr(argumentName.lastIndexOf('.') + 1);
	    }

	    return {
	      argument: argumentName,
	      plugin: pluginName
	    };
	  }

	  // put name back together after parts have been normalized
	  function combinePluginParts(loader, argumentName, pluginName, defaultExtension) {
	    if (defaultExtension && argumentName.substr(argumentName.length - 3, 3) == '.js')
	      argumentName = argumentName.substr(0, argumentName.length - 3);

	    if (loader.pluginFirst) {
	      return pluginName + '!' + argumentName;
	    }
	    else {
	      return argumentName + '!' + pluginName;
	    }
	  }

	  // note if normalize will add a default js extension
	  // if so, remove for backwards compat
	  // this is strange and sucks, but will be deprecated
	  function checkDefaultExtension(loader, arg) {
	    return loader.defaultJSExtensions && arg.substr(arg.length - 3, 3) != '.js'; 
	  }

	  function createNormalizeSync(normalizeSync) {
	    return function(name, parentName, isPlugin) {
	      var loader = this;
	      
	      parentName = getParentName(this, parentName);
	      var parsed = parsePlugin(loader, name);

	      if (!parsed)
	        return normalizeSync.call(this, name, parentName, isPlugin);

	      // if this is a plugin, normalize the plugin name and the argument
	      var argumentName = loader.normalizeSync(parsed.argument, parentName, true);
	      var pluginName = loader.normalizeSync(parsed.plugin, parentName, true);
	      return combinePluginParts(loader, argumentName, pluginName, checkDefaultExtension(loader, parsed.argument));
	    };
	  }
	  
	  hook('decanonicalize', createNormalizeSync);
	  hook('normalizeSync', createNormalizeSync);

	  hook('normalize', function(normalize) {
	    return function(name, parentName, isPlugin) {
	      var loader = this;

	      parentName = getParentName(this, parentName);

	      var parsed = parsePlugin(loader, name);

	      if (!parsed)
	        return normalize.call(loader, name, parentName, isPlugin);

	      return Promise.all([
	        loader.normalize(parsed.argument, parentName, true),
	        loader.normalize(parsed.plugin, parentName, true)
	      ])
	      .then(function(normalized) {
	        return combinePluginParts(loader, normalized[0], normalized[1], checkDefaultExtension(loader, parsed.argument));
	      });
	    }
	  });

	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;

	      var name = load.name;

	      // plugin syntax
	      var pluginSyntaxIndex;
	      if (loader.pluginFirst) {
	        if ((pluginSyntaxIndex = name.indexOf('!')) != -1) {
	          load.metadata.loader = name.substr(0, pluginSyntaxIndex);
	          load.name = name.substr(pluginSyntaxIndex + 1);
	        }
	      }
	      else {
	        if ((pluginSyntaxIndex = name.lastIndexOf('!')) != -1) {
	          load.metadata.loader = name.substr(pluginSyntaxIndex + 1);
	          load.name = name.substr(0, pluginSyntaxIndex);
	        }
	      }

	      return locate.call(loader, load)
	      .then(function(address) {
	        var plugin = load.metadata.loader;

	        if (!plugin)
	          return address;

	        // only fetch the plugin itself if this name isn't defined
	        if (loader.defined && loader.defined[name])
	          return address;

	        var pluginLoader = loader.pluginLoader || loader;

	        // load the plugin module and run standard locate
	        return pluginLoader['import'](plugin)
	        .then(function(loaderModule) {
	          // store the plugin module itself on the metadata
	          load.metadata.loaderModule = loaderModule;

	          load.address = address;
	          if (loaderModule.locate)
	            return loaderModule.locate.call(loader, load);

	          return address;
	        });
	      });
	    };
	  });

	  hook('fetch', function(fetch) {
	    return function(load) {
	      var loader = this;
	      if (load.metadata.loaderModule && load.metadata.loaderModule.fetch && load.metadata.format != 'defined') {
	        load.metadata.scriptLoad = false;
	        return load.metadata.loaderModule.fetch.call(loader, load, function(load) {
	          return fetch.call(loader, load);
	        });
	      }
	      else {
	        return fetch.call(loader, load);
	      }
	    };
	  });

	  hook('translate', function(translate) {
	    return function(load) {

	      /*
	       * Source map sanitization for load.metadata.sourceMap
	       * Used to set browser and build-level source maps for
	       * translated sources in a general way.
	       *
	       * This isn't plugin-specific, but can't go anywhere else for now
	       * As it is post-translate
	       */
	      var sourceMap = load.metadata.sourceMap;

	      // if an object not a JSON string do sanitizing
	      if (sourceMap && typeof sourceMap == 'object') {
	        var originalName = load.name.split('!')[0];
	        
	        // force set the filename of the original file
	        sourceMap.file = originalName + '!transpiled';

	        // force set the sources list if only one source
	        if (!sourceMap.sources || sourceMap.sources.length == 1)
	          sourceMap.sources = [originalName];
	        load.metadata.sourceMap = JSON.stringify(sourceMap);
	      }

	      var loader = this;
	      if (load.metadata.loaderModule && load.metadata.loaderModule.translate && load.metadata.format != 'defined') {
	        return Promise.resolve(load.metadata.loaderModule.translate.call(loader, load)).then(function(result) {
	          // NB we should probably enforce a string output
	          if (typeof result == 'string')
	            load.source = result;
	          return translate.call(loader, load);
	        });
	      }
	      else {
	        return translate.call(loader, load);
	      }
	    };
	  });

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      var loader = this;

	      if (load.metadata.loaderModule && load.metadata.loaderModule.instantiate && !loader.builder && load.metadata.format != 'defined')
	        return Promise.resolve(load.metadata.loaderModule.instantiate.call(loader, load)).then(function(result) {
	          load.metadata.entry = createEntry();
	          load.metadata.entry.execute = function() {
	            return result;
	          }
	          load.metadata.entry.deps = load.metadata.deps;
	          load.metadata.format = 'defined';
	          return instantiate.call(loader, load);
	        });
	      else
	        return instantiate.call(loader, load);
	    };
	  });

	})();/*
	 * Conditions Extension
	 *
	 *   Allows a condition module to alter the resolution of an import via syntax:
	 *
	 *     import $ from 'jquery/#{browser}';
	 *
	 *   Will first load the module 'browser' via `SystemJS.import('browser')` and 
	 *   take the default export of that module.
	 *   If the default export is not a string, an error is thrown.
	 * 
	 *   We then substitute the string into the require to get the conditional resolution
	 *   enabling environment-specific variations like:
	 * 
	 *     import $ from 'jquery/ie'
	 *     import $ from 'jquery/firefox'
	 *     import $ from 'jquery/chrome'
	 *     import $ from 'jquery/safari'
	 *
	 *   It can be useful for a condition module to define multiple conditions.
	 *   This can be done via the `|` modifier to specify an export member expression:
	 *
	 *     import 'jquery/#{./browser.js|grade.version}'
	 *
	 *   Where the `grade` export `version` member in the `browser.js` module  is substituted.
	 *
	 *
	 * Boolean Conditionals
	 *
	 *   For polyfill modules, that are used as imports but have no module value,
	 *   a binary conditional allows a module not to be loaded at all if not needed:
	 *
	 *     import 'es5-shim#?./conditions.js|needs-es5shim'
	 *
	 *   These conditions can also be negated via:
	 *     
	 *     import 'es5-shim#?~./conditions.js|es6'
	 *
	 */

	  function parseCondition(condition) {
	    var conditionExport, conditionModule, negation;

	    var negation = condition[0] == '~';
	    var conditionExportIndex = condition.lastIndexOf('|');
	    if (conditionExportIndex != -1) {
	      conditionExport = condition.substr(conditionExportIndex + 1);
	      conditionModule = condition.substr(negation, conditionExportIndex - negation) || '@system-env';
	    }
	    else {
	      conditionExport = null;
	      conditionModule = condition.substr(negation);
	    }

	    return {
	      module: conditionModule,
	      prop: conditionExport,
	      negate: negation
	    };
	  }

	  function serializeCondition(conditionObj) {
	    return (conditionObj.negate ? '~' : '') + conditionObj.module + (conditionObj.prop ? '|' + conditionObj.prop : '');
	  }

	  function resolveCondition(conditionObj, parentName, bool) {
	    return this['import'](conditionObj.module, parentName)
	    .then(function(m) {
	      if (conditionObj.prop)
	        m = readMemberExpression(conditionObj.prop, m);
	      else if (typeof m == 'object' && m + '' == 'Module')
	        m = m['default'];

	      return conditionObj.negate ? !m : m;
	    });
	  }

	  var interpolationRegEx = /#\{[^\}]+\}/;
	  function interpolateConditional(name, parentName) {
	    // first we normalize the conditional
	    var conditionalMatch = name.match(interpolationRegEx);

	    if (!conditionalMatch)
	      return Promise.resolve(name);

	    var conditionObj = parseCondition(conditionalMatch[0].substr(2, conditionalMatch[0].length - 3));

	    // in builds, return normalized conditional
	    if (this.builder)
	      return this['normalize'](conditionObj.module, parentName)
	      .then(function(conditionModule) {
	        conditionObj.module = conditionModule;
	        return name.replace(interpolationRegEx, '#{' + serializeCondition(conditionObj) + '}');
	      });

	    return resolveCondition.call(this, conditionObj, parentName, false)
	    .then(function(conditionValue) {
	      if (typeof conditionValue !== 'string')
	        throw new TypeError('The condition value for ' + name + ' doesn\'t resolve to a string.');

	      if (conditionValue.indexOf('/') != -1)
	        throw new TypeError('Unabled to interpolate conditional ' + name + (parentName ? ' in ' + parentName : '') + '\n\tThe condition value ' + conditionValue + ' cannot contain a "/" separator.');

	      return name.replace(interpolationRegEx, conditionValue);
	    });
	  }

	  function booleanConditional(name, parentName) {
	    // first we normalize the conditional
	    var booleanIndex = name.lastIndexOf('#?');

	    if (booleanIndex == -1)
	      return Promise.resolve(name);

	    var conditionObj = parseCondition(name.substr(booleanIndex + 2));

	    // in builds, return normalized conditional
	    if (this.builder)
	      return this['normalize'](conditionObj.module, parentName)
	      .then(function(conditionModule) {
	        conditionObj.module = conditionModule;
	        return name.substr(0, booleanIndex) + '#?' + serializeCondition(conditionObj);
	      });

	    return resolveCondition.call(this, conditionObj, parentName, true)
	    .then(function(conditionValue) {
	      return conditionValue ? name.substr(0, booleanIndex) : '@empty';
	    });
	  }

	  // normalizeSync does not parse conditionals at all although it could
	  hook('normalize', function(normalize) {
	    return function(name, parentName, parentAddress) {
	      var loader = this;
	      return booleanConditional.call(loader, name, parentName)
	      .then(function(name) {
	        return normalize.call(loader, name, parentName, parentAddress);
	      })
	      .then(function(normalized) {
	        return interpolateConditional.call(loader, normalized, parentName);
	      });
	    };
	  });
	/*
	 * Alias Extension
	 *
	 * Allows a module to be a plain copy of another module by module name
	 *
	 * SystemJS.meta['mybootstrapalias'] = { alias: 'bootstrap' };
	 *
	 */
	(function() {
	  // aliases
	  hook('fetch', function(fetch) {
	    return function(load) {
	      var alias = load.metadata.alias;
	      var aliasDeps = load.metadata.deps || [];
	      if (alias) {
	        load.metadata.format = 'defined';
	        var entry = createEntry();
	        this.defined[load.name] = entry;
	        entry.declarative = true;
	        entry.deps = aliasDeps.concat([alias]);
	        entry.declare = function(_export) {
	          return {
	            setters: [function(module) {
	              for (var p in module)
	                _export(p, module[p]);
	              if (module.__useDefault)
	                entry.module.exports.__useDefault = true;
	            }],
	            execute: function() {}
	          };
	        };
	        return '';
	      }

	      return fetch.call(this, load);
	    };
	  });
	})();/*
	 * Meta Extension
	 *
	 * Sets default metadata on a load record (load.metadata) from
	 * loader.metadata via SystemJS.meta function.
	 *
	 *
	 * Also provides an inline meta syntax for module meta in source.
	 *
	 * Eg:
	 *
	 * loader.meta({
	 *   'my/module': { deps: ['jquery'] }
	 *   'my/*': { format: 'amd' }
	 * });
	 *
	 * Which in turn populates loader.metadata.
	 *
	 * load.metadata.deps and load.metadata.format will then be set
	 * for 'my/module'
	 *
	 * The same meta could be set with a my/module.js file containing:
	 *
	 * my/module.js
	 *   "format amd";
	 *   "deps[] jquery";
	 *   "globals.some value"
	 *   console.log('this is my/module');
	 *
	 * Configuration meta always takes preference to inline meta.
	 *
	 * Multiple matches in wildcards are supported and ammend the meta.
	 *
	 *
	 * The benefits of the function form is that paths are URL-normalized
	 * supporting say
	 *
	 * loader.meta({ './app': { format: 'cjs' } });
	 *
	 * Instead of needing to set against the absolute URL (https://site.com/app.js)
	 *
	 */

	(function() {

	  hookConstructor(function(constructor) {
	    return function() {
	      this.meta = {};
	      constructor.call(this);
	    };
	  });

	  hook('locate', function(locate) {
	    return function(load) {
	      var meta = this.meta;
	      var name = load.name;

	      // NB for perf, maybe introduce a fast-path wildcard lookup cache here
	      // which is checked first

	      // apply wildcard metas
	      var bestDepth = 0;
	      var wildcardIndex;
	      for (var module in meta) {
	        wildcardIndex = module.indexOf('*');
	        if (wildcardIndex === -1)
	          continue;
	        if (module.substr(0, wildcardIndex) === name.substr(0, wildcardIndex)
	            && module.substr(wildcardIndex + 1) === name.substr(name.length - module.length + wildcardIndex + 1)) {
	          var depth = module.split('/').length;
	          if (depth > bestDepth)
	            bestDepth = depth;
	          extendMeta(load.metadata, meta[module], bestDepth != depth);
	        }
	      }

	      // apply exact meta
	      if (meta[name])
	        extendMeta(load.metadata, meta[name]);

	      return locate.call(this, load);
	    };
	  });

	  // detect any meta header syntax
	  // only set if not already set
	  var metaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/;
	  var metaPartRegEx = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;

	  function setMetaProperty(target, p, value) {
	    var pParts = p.split('.');
	    var curPart;
	    while (pParts.length > 1) {
	      curPart = pParts.shift();
	      target = target[curPart] = target[curPart] || {};
	    }
	    curPart = pParts.shift();
	    if (!(curPart in target))
	      target[curPart] = value;
	  }

	  hook('translate', function(translate) {
	    return function(load) {
	      // NB meta will be post-translate pending transpiler conversion to plugins
	      var meta = load.source.match(metaRegEx);
	      if (meta) {
	        var metaParts = meta[0].match(metaPartRegEx);

	        for (var i = 0; i < metaParts.length; i++) {
	          var curPart = metaParts[i];
	          var len = curPart.length;

	          var firstChar = curPart.substr(0, 1);
	          if (curPart.substr(len - 1, 1) == ';')
	            len--;

	          if (firstChar != '"' && firstChar != "'")
	            continue;

	          var metaString = curPart.substr(1, curPart.length - 3);
	          var metaName = metaString.substr(0, metaString.indexOf(' '));

	          if (metaName) {
	            var metaValue = metaString.substr(metaName.length + 1, metaString.length - metaName.length - 1);

	            if (metaName.substr(metaName.length - 2, 2) == '[]') {
	              metaName = metaName.substr(0, metaName.length - 2);
	              load.metadata[metaName] = load.metadata[metaName] || [];
	              load.metadata[metaName].push(metaValue);
	            }
	            else if (load.metadata[metaName] instanceof Array) {
	              // temporary backwards compat for previous "deps" syntax
	              warn.call(this, 'Module ' + load.name + ' contains deprecated "deps ' + metaValue + '" meta syntax.\nThis should be updated to "deps[] ' + metaValue + '" for pushing to array meta.');
	              load.metadata[metaName].push(metaValue);
	            }
	            else {
	              setMetaProperty(load.metadata, metaName, metaValue);
	            }
	          }
	          else {
	            load.metadata[metaString] = true;
	          }
	        }
	      }

	      return translate.call(this, load);
	    };
	  });
	})();
	/*
	  System bundles

	  Allows a bundle module to be specified which will be dynamically 
	  loaded before trying to load a given module.

	  For example:
	  SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

	  Will result in a load to "mybundle" whenever a load to "jquery"
	  or "bootstrap/js/bootstrap" is made.

	  In this way, the bundle becomes the request that provides the module
	*/

	(function() {
	  // bundles support (just like RequireJS)
	  // bundle name is module name of bundle itself
	  // bundle is array of modules defined by the bundle
	  // when a module in the bundle is requested, the bundle is loaded instead
	  // of the form SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.bundles = {};
	      this._loader.loadedBundles = {};
	    };
	  });

	  // assign bundle metadata for bundle loads
	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      var matched = false;

	      if (!(load.name in loader.defined))
	        for (var b in loader.bundles) {
	          for (var i = 0; i < loader.bundles[b].length; i++) {
	            var curModule = loader.bundles[b][i];

	            if (curModule == load.name) {
	              matched = true;
	              break;
	            }

	            // wildcard in bundles does not include / boundaries
	            if (curModule.indexOf('*') != -1) {
	              var parts = curModule.split('*');
	              if (parts.length != 2) {
	                loader.bundles[b].splice(i--, 1);
	                continue;
	              }
	              
	              if (load.name.substring(0, parts[0].length) == parts[0] &&
	                  load.name.substr(load.name.length - parts[1].length, parts[1].length) == parts[1] &&
	                  load.name.substr(parts[0].length, load.name.length - parts[1].length - parts[0].length).indexOf('/') == -1) {
	                matched = true;
	                break;
	              }
	            }
	          }

	          if (matched)
	            return loader['import'](b)
	            .then(function() {
	              return locate.call(loader, load);
	            });
	        }

	      return locate.call(loader, load);
	    };
	  });
	})();
	/*
	 * Dependency Tree Cache
	 * 
	 * Allows a build to pre-populate a dependency trace tree on the loader of 
	 * the expected dependency tree, to be loaded upfront when requesting the
	 * module, avoinding the n round trips latency of module loading, where 
	 * n is the dependency tree depth.
	 *
	 * eg:
	 * SystemJS.depCache = {
	 *  'app': ['normalized', 'deps'],
	 *  'normalized': ['another'],
	 *  'deps': ['tree']
	 * };
	 * 
	 * SystemJS.import('app') 
	 * // simultaneously starts loading all of:
	 * // 'normalized', 'deps', 'another', 'tree'
	 * // before "app" source is even loaded
	 *
	 */

	(function() {
	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.depCache = {};
	    }
	  });

	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      // load direct deps, in turn will pick up their trace trees
	      var deps = loader.depCache[load.name];
	      if (deps)
	        for (var i = 0; i < deps.length; i++)
	          loader['import'](deps[i], load.name);

	      return locate.call(loader, load);
	    };
	  });
	})();
	  
	/*
	 * Script-only addition used for production loader
	 *
	 */
	hookConstructor(function(constructor) {
	  return function() {
	    constructor.apply(this, arguments);

	    // prepare amd define
	    if (this.has('@@amd-helpers'))
	      this.get('@@amd-helpers').createDefine();
	  };
	});

	hook('fetch', function(fetch) {
	  return function(load) {
	    load.metadata.scriptLoad = true;
	    return fetch.call(this, load);
	  };
	});System = new SystemJSLoader();

	__global.SystemJS = System;
	System.version = '0.19.18 CSP';
	  // -- exporting --

	  if (true)
	    module.exports = Loader;

	  __global.Reflect = __global.Reflect || {};
	  __global.Reflect.Loader = __global.Reflect.Loader || Loader;
	  __global.Reflect.global = __global.Reflect.global || __global;
	  __global.LoaderPolyfill = Loader;

	  if (!System) {
	    System = new SystemLoader();
	    System.constructor = SystemLoader;
	  }

	  if (true)
	    module.exports = System;

	  __global.System = System;

	})(typeof self != 'undefined' ? self : global);}

	// auto-load Promise and URL polyfills if needed in the browser
	try {
	  var hasURL = typeof URLPolyfill != 'undefined' || new URL('test:///').protocol == 'test:';
	}
	catch(e) {}

	if (typeof Promise === 'undefined' || !hasURL) {
	  // document.write
	  if (typeof document !== 'undefined') {
	    var scripts = document.getElementsByTagName('script');
	    $__curScript = scripts[scripts.length - 1];
	    var curPath = $__curScript.src;
	    var basePath = curPath.substr(0, curPath.lastIndexOf('/') + 1);
	    window.systemJSBootstrap = bootstrap;
	    document.write(
	      '<' + 'script type="text/javascript" src="' + basePath + 'system-polyfills.js">' + '<' + '/script>'
	    );
	  }
	  // importScripts
	  else if (typeof importScripts !== 'undefined') {
	    var basePath = '';
	    try {
	      throw new Error('_');
	    } catch (e) {
	      e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(m, url) {
	        basePath = url.replace(/\/[^\/]*$/, '/');
	      });
	    }
	    importScripts(basePath + 'system-polyfills.js');
	    bootstrap();
	  }
	  else {
	    bootstrap();
	  }
	}
	else {
	  bootstrap();
	}


	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS Polyfills for URL and Promise providing IE8+ Support
	 */
	!function(t){!function(t){function e(t,n){if("string"!=typeof t)throw new TypeError("URL must be a string");var o=String(t).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!o)throw new RangeError;var r=o[1]||"",i=o[2]||"",u=o[3]||"",c=o[4]||"",s=o[5]||"",f=o[6]||"",a=o[7]||"",h=o[8]||"",p=o[9]||"";if(void 0!==n){var l=n instanceof e?n:new e(n),d=""===r&&""===c&&""===i;d&&""===a&&""===h&&(h=l.search),d&&"/"!==a.charAt(0)&&(a=""!==a?(""===l.host&&""===l.username||""!==l.pathname?"":"/")+l.pathname.slice(0,l.pathname.lastIndexOf("/")+1)+a:l.pathname);var y=[];a.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(t){"/.."===t?y.pop():y.push(t)}),a=y.join("").replace(/^\//,"/"===a.charAt(0)?"/":""),d&&(f=l.port,s=l.hostname,c=l.host,u=l.password,i=l.username),""===r&&(r=l.protocol)}"file:"==r&&(a=a.replace(/\\/g,"/")),this.origin=r+(""!==r||""!==c?"//":"")+c,this.href=r+(""!==r||""!==c?"//":"")+(""!==i?i+(""!==u?":"+u:"")+"@":"")+c+a+h+p,this.protocol=r,this.username=i,this.password=u,this.host=c,this.hostname=s,this.port=f,this.pathname=a,this.search=h,this.hash=p}t.URLPolyfill=e}("undefined"!=typeof self?self:global),!function(e){ true?module.exports=e():"function"==typeof t&&t.amd?t(e):"undefined"!=typeof window?window.Promise=e():"undefined"!=typeof global?global.Promise=e():"undefined"!=typeof self&&(self.Promise=e())}(function(){var t;return function e(t,n,o){function r(u,c){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!c&&s)return require(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=n[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return r(n?n:e)},f,f.exports,e,t,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(t,e,n){var o=t("../lib/decorators/unhandledRejection"),r=o(t("../lib/Promise"));e.exports="undefined"!=typeof global?global.Promise=r:"undefined"!=typeof self?self.Promise=r:r},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":4}],2:[function(e,n,o){!function(t){"use strict";t(function(t){var e=t("./makePromise"),n=t("./Scheduler"),o=t("./env").asap;return e({scheduler:new n(o)})})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{"./Scheduler":3,"./env":5,"./makePromise":7}],3:[function(e,n,o){!function(t){"use strict";t(function(){function t(t){this._async=t,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0;var e=this;this.drain=function(){e._drain()}}return t.prototype.enqueue=function(t){this._queue[this._queueLen++]=t,this.run()},t.prototype.afterQueue=function(t){this._afterQueue[this._afterQueueLen++]=t,this.run()},t.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},t.prototype._drain=function(){for(var t=0;t<this._queueLen;++t)this._queue[t].run(),this._queue[t]=void 0;for(this._queueLen=0,this._running=!1,t=0;t<this._afterQueueLen;++t)this._afterQueue[t].run(),this._afterQueue[t]=void 0;this._afterQueueLen=0},t})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}],4:[function(e,n,o){!function(t){"use strict";t(function(t){function e(t){throw t}function n(){}var o=t("../env").setTimer,r=t("../format");return function(t){function i(t){t.handled||(l.push(t),a("Potentially unhandled rejection ["+t.id+"] "+r.formatError(t.value)))}function u(t){var e=l.indexOf(t);e>=0&&(l.splice(e,1),h("Handled previous rejection ["+t.id+"] "+r.formatObject(t.value)))}function c(t,e){p.push(t,e),null===d&&(d=o(s,0))}function s(){for(d=null;p.length>0;)p.shift()(p.shift())}var f,a=n,h=n;"undefined"!=typeof console&&(f=console,a="undefined"!=typeof f.error?function(t){f.error(t)}:function(t){f.log(t)},h="undefined"!=typeof f.info?function(t){f.info(t)}:function(t){f.log(t)}),t.onPotentiallyUnhandledRejection=function(t){c(i,t)},t.onPotentiallyUnhandledRejectionHandled=function(t){c(u,t)},t.onFatalRejection=function(t){c(e,t.value)};var p=[],l=[],d=null;return t}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{"../env":5,"../format":6}],5:[function(e,n,o){!function(t){"use strict";t(function(t){function e(){return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)}function n(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function o(t){function e(){var t=n;n=void 0,t()}var n,o=document.createTextNode(""),r=new t(e);r.observe(o,{characterData:!0});var i=0;return function(t){n=t,o.data=i^=1}}var r,i="undefined"!=typeof setTimeout&&setTimeout,u=function(t,e){return setTimeout(t,e)},c=function(t){return clearTimeout(t)},s=function(t){return i(t,0)};if(e())s=function(t){return process.nextTick(t)};else if(r=n())s=o(r);else if(!i){var f=t,a=f("vertx");u=function(t,e){return a.setTimer(e,t)},c=a.cancelTimer,s=a.runOnLoop||a.runOnContext}return{setTimer:u,clearTimer:c,asap:s}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{}],6:[function(e,n,o){!function(t){"use strict";t(function(){function t(t){var n="object"==typeof t&&null!==t&&(t.stack||t.message)?t.stack||t.message:e(t);return t instanceof Error?n:n+" (WARNING: non-Error used)"}function e(t){var e=String(t);return"[object Object]"===e&&"undefined"!=typeof JSON&&(e=n(t,e)),e}function n(t,e){try{return JSON.stringify(t)}catch(n){return e}}return{formatError:t,formatObject:e,tryStringify:n}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}],7:[function(e,n,o){!function(t){"use strict";t(function(){return function(t){function e(t,e){this._handler=t===j?e:n(t)}function n(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}function o(t){r.notify(t)}var r=new b;try{t(e,n,o)}catch(i){n(i)}return r}function o(t){return U(t)?t:new e(j,new g(v(t)))}function r(t){return new e(j,new g(new q(t)))}function i(){return Z}function u(){return new e(j,new b)}function c(t,e){var n=new b(t.receiver,t.join().context);return new e(j,n)}function s(t){return a(z,null,t)}function f(t,e){return a(J,t,e)}function a(t,n,o){function r(e,r,u){u.resolved||h(o,i,e,t(n,r,e),u)}function i(t,e,n){a[t]=e,0===--f&&n.become(new R(a))}for(var u,c="function"==typeof n?r:i,s=new b,f=o.length>>>0,a=new Array(f),p=0;p<o.length&&!s.resolved;++p)u=o[p],void 0!==u||p in o?h(o,c,p,u,s):--f;return 0===f&&s.become(new R(a)),new e(j,s)}function h(t,e,n,o,r){if(k(o)){var i=m(o),u=i.state();0===u?i.fold(e,n,void 0,r):u>0?e(n,i.value,r):(r.become(i),p(t,n+1,i))}else e(n,o,r)}function p(t,e,n){for(var o=e;o<t.length;++o)l(v(t[o]),n)}function l(t,e){if(t!==e){var n=t.state();0===n?t.visit(t,void 0,t._unreport):0>n&&t._unreport()}}function d(t){return"object"!=typeof t||null===t?r(new TypeError("non-iterable passed to race()")):0===t.length?i():1===t.length?o(t[0]):y(t)}function y(t){var n,o,r,i=new b;for(n=0;n<t.length;++n)if(o=t[n],void 0!==o||n in t){if(r=v(o),0!==r.state()){i.become(r),p(t,n+1,r);break}r.visit(i,i.resolve,i.reject)}return new e(j,i)}function v(t){return U(t)?t._handler.join():k(t)?w(t):new R(t)}function m(t){return U(t)?t._handler.join():w(t)}function w(t){try{var e=t.then;return"function"==typeof e?new x(e,t):new R(t)}catch(n){return new q(n)}}function j(){}function _(){}function b(t,n){e.createContext(this,n),this.consumers=void 0,this.receiver=t,this.handler=void 0,this.resolved=!1}function g(t){this.handler=t}function x(t,e){b.call(this),K.enqueue(new L(t,e,this))}function R(t){e.createContext(this),this.value=t}function q(t){e.createContext(this),this.id=++X,this.value=t,this.handled=!1,this.reported=!1,this._report()}function P(t,e){this.rejection=t,this.context=e}function C(t){this.rejection=t}function O(){return new q(new TypeError("Promise cycle"))}function T(t,e){this.continuation=t,this.handler=e}function E(t,e){this.handler=e,this.value=t}function L(t,e,n){this._then=t,this.thenable=e,this.resolver=n}function Q(t,e,n,o,r){try{t.call(e,n,o,r)}catch(i){o(i)}}function S(t,e,n,o){this.f=t,this.z=e,this.c=n,this.to=o,this.resolver=V,this.receiver=this}function U(t){return t instanceof e}function k(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function H(t,n,o,r){return"function"!=typeof t?r.become(n):(e.enterContext(n),M(t,n.value,o,r),void e.exitContext())}function N(t,n,o,r,i){return"function"!=typeof t?i.become(o):(e.enterContext(o),$(t,n,o.value,r,i),void e.exitContext())}function A(t,n,o,r,i){return"function"!=typeof t?i.notify(n):(e.enterContext(o),F(t,n,r,i),void e.exitContext())}function J(t,e,n){try{return t(e,n)}catch(o){return r(o)}}function M(t,e,n,o){try{o.become(v(t.call(n,e)))}catch(r){o.become(new q(r))}}function $(t,e,n,o,r){try{t.call(o,e,n,r)}catch(i){r.become(new q(i))}}function F(t,e,n,o){try{o.notify(t.call(n,e))}catch(r){o.notify(r)}}function W(t,e){e.prototype=G(t.prototype),e.prototype.constructor=e}function z(t,e){return e}function B(){}function I(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.emit?function(t,e){return"unhandledRejection"===t?process.emit(t,e.value,e):process.emit(t,e)}:"undefined"!=typeof self&&"function"==typeof CustomEvent?function(t,e,n){var o=!1;try{var r=new n("unhandledRejection");o=r instanceof n}catch(i){}return o?function(t,o){var r=new n(t,{detail:{reason:o.value,key:o},bubbles:!1,cancelable:!0});return!e.dispatchEvent(r)}:t}(B,self,CustomEvent):B}var K=t.scheduler,D=I(),G=Object.create||function(t){function e(){}return e.prototype=t,new e};e.resolve=o,e.reject=r,e.never=i,e._defer=u,e._handler=v,e.prototype.then=function(t,e,n){var o=this._handler,r=o.join().state();if("function"!=typeof t&&r>0||"function"!=typeof e&&0>r)return new this.constructor(j,o);var i=this._beget(),u=i._handler;return o.chain(u,o.receiver,t,e,n),i},e.prototype["catch"]=function(t){return this.then(void 0,t)},e.prototype._beget=function(){return c(this._handler,this.constructor)},e.all=s,e.race=d,e._traverse=f,e._visitRemaining=p,j.prototype.when=j.prototype.become=j.prototype.notify=j.prototype.fail=j.prototype._unreport=j.prototype._report=B,j.prototype._state=0,j.prototype.state=function(){return this._state},j.prototype.join=function(){for(var t=this;void 0!==t.handler;)t=t.handler;return t},j.prototype.chain=function(t,e,n,o,r){this.when({resolver:t,receiver:e,fulfilled:n,rejected:o,progress:r})},j.prototype.visit=function(t,e,n,o){this.chain(V,t,e,n,o)},j.prototype.fold=function(t,e,n,o){this.when(new S(t,e,n,o))},W(j,_),_.prototype.become=function(t){t.fail()};var V=new _;W(j,b),b.prototype._state=0,b.prototype.resolve=function(t){this.become(v(t))},b.prototype.reject=function(t){this.resolved||this.become(new q(t))},b.prototype.join=function(){if(!this.resolved)return this;for(var t=this;void 0!==t.handler;)if(t=t.handler,t===this)return this.handler=O();return t},b.prototype.run=function(){var t=this.consumers,e=this.handler;this.handler=this.handler.join(),this.consumers=void 0;for(var n=0;n<t.length;++n)e.when(t[n])},b.prototype.become=function(t){this.resolved||(this.resolved=!0,this.handler=t,void 0!==this.consumers&&K.enqueue(this),void 0!==this.context&&t._report(this.context))},b.prototype.when=function(t){this.resolved?K.enqueue(new T(t,this.handler)):void 0===this.consumers?this.consumers=[t]:this.consumers.push(t)},b.prototype.notify=function(t){this.resolved||K.enqueue(new E(t,this))},b.prototype.fail=function(t){var e="undefined"==typeof t?this.context:t;this.resolved&&this.handler.join().fail(e)},b.prototype._report=function(t){this.resolved&&this.handler.join()._report(t)},b.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},W(j,g),g.prototype.when=function(t){K.enqueue(new T(t,this))},g.prototype._report=function(t){this.join()._report(t)},g.prototype._unreport=function(){this.join()._unreport()},W(b,x),W(j,R),R.prototype._state=1,R.prototype.fold=function(t,e,n,o){N(t,e,this,n,o)},R.prototype.when=function(t){H(t.fulfilled,this,t.receiver,t.resolver)};var X=0;W(j,q),q.prototype._state=-1,q.prototype.fold=function(t,e,n,o){o.become(this)},q.prototype.when=function(t){"function"==typeof t.rejected&&this._unreport(),H(t.rejected,this,t.receiver,t.resolver)},q.prototype._report=function(t){K.afterQueue(new P(this,t))},q.prototype._unreport=function(){this.handled||(this.handled=!0,K.afterQueue(new C(this)))},q.prototype.fail=function(t){this.reported=!0,D("unhandledRejection",this),e.onFatalRejection(this,void 0===t?this.context:t)},P.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,D("unhandledRejection",this.rejection)||e.onPotentiallyUnhandledRejection(this.rejection,this.context))},C.prototype.run=function(){this.rejection.reported&&(D("rejectionHandled",this.rejection)||e.onPotentiallyUnhandledRejectionHandled(this.rejection))},e.createContext=e.enterContext=e.exitContext=e.onPotentiallyUnhandledRejection=e.onPotentiallyUnhandledRejectionHandled=e.onFatalRejection=B;var Y=new j,Z=new e(j,Y);return T.prototype.run=function(){this.handler.join().when(this.continuation)},E.prototype.run=function(){var t=this.handler.consumers;if(void 0!==t)for(var e,n=0;n<t.length;++n)e=t[n],A(e.progress,this.value,this.handler,e.receiver,e.resolver)},L.prototype.run=function(){function t(t){o.resolve(t)}function e(t){o.reject(t)}function n(t){o.notify(t)}var o=this.resolver;Q(this._then,this.thenable,t,e,n)},S.prototype.fulfilled=function(t){this.f.call(this.c,this.z,t,this.to)},S.prototype.rejected=function(t){this.to.reject(t)},S.prototype.progress=function(t){this.to.notify(t)},e}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}]},{},[1])(1)}),"undefined"!=typeof systemJSBootstrap&&systemJSBootstrap()}();
	//# sourceMappingURL=system-polyfills.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS Polyfills for URL and Promise providing IE8+ Support
	 */
	(function(define) {

	// from https://gist.github.com/Yaffle/1088850
	(function(global) {
	function URLPolyfill(url, baseURL) {
	  if (typeof url != 'string')
	    throw new TypeError('URL must be a string');
	  var m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
	  if (!m) {
	    throw new RangeError();
	  }
	  var protocol = m[1] || "";
	  var username = m[2] || "";
	  var password = m[3] || "";
	  var host = m[4] || "";
	  var hostname = m[5] || "";
	  var port = m[6] || "";
	  var pathname = m[7] || "";
	  var search = m[8] || "";
	  var hash = m[9] || "";
	  if (baseURL !== undefined) {
	    var base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
	    var flag = protocol === "" && host === "" && username === "";
	    if (flag && pathname === "" && search === "") {
	      search = base.search;
	    }
	    if (flag && pathname.charAt(0) !== "/") {
	      pathname = (pathname !== "" ? (((base.host !== "" || base.username !== "") && base.pathname === "" ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname) : base.pathname);
	    }
	    // dot segments removal
	    var output = [];
	    pathname.replace(/^(\.\.?(\/|$))+/, "")
	      .replace(/\/(\.(\/|$))+/g, "/")
	      .replace(/\/\.\.$/, "/../")
	      .replace(/\/?[^\/]*/g, function (p) {
	        if (p === "/..") {
	          output.pop();
	        } else {
	          output.push(p);
	        }
	      });
	    pathname = output.join("").replace(/^\//, pathname.charAt(0) === "/" ? "/" : "");
	    if (flag) {
	      port = base.port;
	      hostname = base.hostname;
	      host = base.host;
	      password = base.password;
	      username = base.username;
	    }
	    if (protocol === "") {
	      protocol = base.protocol;
	    }
	  }

	  // convert windows file URLs to use /
	  if (protocol == 'file:')
	    pathname = pathname.replace(/\\/g, '/');

	  this.origin = protocol + (protocol !== "" || host !== "" ? "//" : "") + host;
	  this.href = protocol + (protocol !== "" || host !== "" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
	  this.protocol = protocol;
	  this.username = username;
	  this.password = password;
	  this.host = host;
	  this.hostname = hostname;
	  this.port = port;
	  this.pathname = pathname;
	  this.search = search;
	  this.hash = hash;
	}
	global.URLPolyfill = URLPolyfill;
	})(typeof self != 'undefined' ? self : global);!function(e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.Promise=e():"undefined"!=typeof global?global.Promise=e():"undefined"!=typeof self&&(self.Promise=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	/**
	 * ES6 global Promise shim
	 */
	var unhandledRejections = require('../lib/decorators/unhandledRejection');
	var PromiseConstructor = unhandledRejections(require('../lib/Promise'));

	module.exports = typeof global != 'undefined' ? (global.Promise = PromiseConstructor)
		           : typeof self   != 'undefined' ? (self.Promise   = PromiseConstructor)
		           : PromiseConstructor;

	},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":4}],2:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	define(function (require) {

		var makePromise = require('./makePromise');
		var Scheduler = require('./Scheduler');
		var async = require('./env').asap;

		return makePromise({
			scheduler: new Scheduler(async)
		});

	});
	})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

	},{"./Scheduler":3,"./env":5,"./makePromise":7}],3:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	define(function() {

		// Credit to Twisol (https://github.com/Twisol) for suggesting
		// this type of extensible queue + trampoline approach for next-tick conflation.

		/**
		 * Async task scheduler
		 * @param {function} async function to schedule a single async function
		 * @constructor
		 */
		function Scheduler(async) {
			this._async = async;
			this._running = false;

			this._queue = this;
			this._queueLen = 0;
			this._afterQueue = {};
			this._afterQueueLen = 0;

			var self = this;
			this.drain = function() {
				self._drain();
			};
		}

		/**
		 * Enqueue a task
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.enqueue = function(task) {
			this._queue[this._queueLen++] = task;
			this.run();
		};

		/**
		 * Enqueue a task to run after the main task queue
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.afterQueue = function(task) {
			this._afterQueue[this._afterQueueLen++] = task;
			this.run();
		};

		Scheduler.prototype.run = function() {
			if (!this._running) {
				this._running = true;
				this._async(this.drain);
			}
		};

		/**
		 * Drain the handler queue entirely, and then the after queue
		 */
		Scheduler.prototype._drain = function() {
			var i = 0;
			for (; i < this._queueLen; ++i) {
				this._queue[i].run();
				this._queue[i] = void 0;
			}

			this._queueLen = 0;
			this._running = false;

			for (i = 0; i < this._afterQueueLen; ++i) {
				this._afterQueue[i].run();
				this._afterQueue[i] = void 0;
			}

			this._afterQueueLen = 0;
		};

		return Scheduler;

	});
	}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

	},{}],4:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	define(function(require) {

		var setTimer = require('../env').setTimer;
		var format = require('../format');

		return function unhandledRejection(Promise) {

			var logError = noop;
			var logInfo = noop;
			var localConsole;

			if(typeof console !== 'undefined') {
				// Alias console to prevent things like uglify's drop_console option from
				// removing console.log/error. Unhandled rejections fall into the same
				// category as uncaught exceptions, and build tools shouldn't silence them.
				localConsole = console;
				logError = typeof localConsole.error !== 'undefined'
					? function (e) { localConsole.error(e); }
					: function (e) { localConsole.log(e); };

				logInfo = typeof localConsole.info !== 'undefined'
					? function (e) { localConsole.info(e); }
					: function (e) { localConsole.log(e); };
			}

			Promise.onPotentiallyUnhandledRejection = function(rejection) {
				enqueue(report, rejection);
			};

			Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
				enqueue(unreport, rejection);
			};

			Promise.onFatalRejection = function(rejection) {
				enqueue(throwit, rejection.value);
			};

			var tasks = [];
			var reported = [];
			var running = null;

			function report(r) {
				if(!r.handled) {
					reported.push(r);
					logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
				}
			}

			function unreport(r) {
				var i = reported.indexOf(r);
				if(i >= 0) {
					reported.splice(i, 1);
					logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
				}
			}

			function enqueue(f, x) {
				tasks.push(f, x);
				if(running === null) {
					running = setTimer(flush, 0);
				}
			}

			function flush() {
				running = null;
				while(tasks.length > 0) {
					tasks.shift()(tasks.shift());
				}
			}

			return Promise;
		};

		function throwit(e) {
			throw e;
		}

		function noop() {}

	});
	}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

	},{"../env":5,"../format":6}],5:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
	(function(define) { 'use strict';
	define(function(require) {
		/*jshint maxcomplexity:6*/

		// Sniff "best" async scheduling option
		// Prefer process.nextTick or MutationObserver, then check for
		// setTimeout, and finally vertx, since its the only env that doesn't
		// have setTimeout

		var MutationObs;
		var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

		// Default env
		var setTimer = function(f, ms) { return setTimeout(f, ms); };
		var clearTimer = function(t) { return clearTimeout(t); };
		var asap = function (f) { return capturedSetTimeout(f, 0); };

		// Detect specific env
		if (isNode()) { // Node
			asap = function (f) { return process.nextTick(f); };

		} else if (MutationObs = hasMutationObserver()) { // Modern browser
			asap = initMutationObserver(MutationObs);

		} else if (!capturedSetTimeout) { // vert.x
			var vertxRequire = require;
			var vertx = vertxRequire('vertx');
			setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
			clearTimer = vertx.cancelTimer;
			asap = vertx.runOnLoop || vertx.runOnContext;
		}

		return {
			setTimer: setTimer,
			clearTimer: clearTimer,
			asap: asap
		};

		function isNode () {
			return typeof process !== 'undefined' &&
				Object.prototype.toString.call(process) === '[object process]';
		}

		function hasMutationObserver () {
			return (typeof MutationObserver === 'function' && MutationObserver) ||
				(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
		}

		function initMutationObserver(MutationObserver) {
			var scheduled;
			var node = document.createTextNode('');
			var o = new MutationObserver(run);
			o.observe(node, { characterData: true });

			function run() {
				var f = scheduled;
				scheduled = void 0;
				f();
			}

			var i = 0;
			return function (f) {
				scheduled = f;
				node.data = (i ^= 1);
			};
		}
	});
	}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

	},{}],6:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	define(function() {

		return {
			formatError: formatError,
			formatObject: formatObject,
			tryStringify: tryStringify
		};

		/**
		 * Format an error into a string.  If e is an Error and has a stack property,
		 * it's returned.  Otherwise, e is formatted using formatObject, with a
		 * warning added about e not being a proper Error.
		 * @param {*} e
		 * @returns {String} formatted string, suitable for output to developers
		 */
		function formatError(e) {
			var s = typeof e === 'object' && e !== null && (e.stack || e.message) ? e.stack || e.message : formatObject(e);
			return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
		}

		/**
		 * Format an object, detecting "plain" objects and running them through
		 * JSON.stringify if possible.
		 * @param {Object} o
		 * @returns {string}
		 */
		function formatObject(o) {
			var s = String(o);
			if(s === '[object Object]' && typeof JSON !== 'undefined') {
				s = tryStringify(o, s);
			}
			return s;
		}

		/**
		 * Try to return the result of JSON.stringify(x).  If that fails, return
		 * defaultValue
		 * @param {*} x
		 * @param {*} defaultValue
		 * @returns {String|*} JSON.stringify(x) or defaultValue
		 */
		function tryStringify(x, defaultValue) {
			try {
				return JSON.stringify(x);
			} catch(e) {
				return defaultValue;
			}
		}

	});
	}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

	},{}],7:[function(require,module,exports){
	/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	define(function() {

		return function makePromise(environment) {

			var tasks = environment.scheduler;
			var emitRejection = initEmitRejection();

			var objectCreate = Object.create ||
				function(proto) {
					function Child() {}
					Child.prototype = proto;
					return new Child();
				};

			/**
			 * Create a promise whose fate is determined by resolver
			 * @constructor
			 * @returns {Promise} promise
			 * @name Promise
			 */
			function Promise(resolver, handler) {
				this._handler = resolver === Handler ? handler : init(resolver);
			}

			/**
			 * Run the supplied resolver
			 * @param resolver
			 * @returns {Pending}
			 */
			function init(resolver) {
				var handler = new Pending();

				try {
					resolver(promiseResolve, promiseReject, promiseNotify);
				} catch (e) {
					promiseReject(e);
				}

				return handler;

				/**
				 * Transition from pre-resolution state to post-resolution state, notifying
				 * all listeners of the ultimate fulfillment or rejection
				 * @param {*} x resolution value
				 */
				function promiseResolve (x) {
					handler.resolve(x);
				}
				/**
				 * Reject this promise with reason, which will be used verbatim
				 * @param {Error|*} reason rejection reason, strongly suggested
				 *   to be an Error type
				 */
				function promiseReject (reason) {
					handler.reject(reason);
				}

				/**
				 * @deprecated
				 * Issue a progress event, notifying all progress listeners
				 * @param {*} x progress event payload to pass to all listeners
				 */
				function promiseNotify (x) {
					handler.notify(x);
				}
			}

			// Creation

			Promise.resolve = resolve;
			Promise.reject = reject;
			Promise.never = never;

			Promise._defer = defer;
			Promise._handler = getHandler;

			/**
			 * Returns a trusted promise. If x is already a trusted promise, it is
			 * returned, otherwise returns a new trusted Promise which follows x.
			 * @param  {*} x
			 * @return {Promise} promise
			 */
			function resolve(x) {
				return isPromise(x) ? x
					: new Promise(Handler, new Async(getHandler(x)));
			}

			/**
			 * Return a reject promise with x as its reason (x is used verbatim)
			 * @param {*} x
			 * @returns {Promise} rejected promise
			 */
			function reject(x) {
				return new Promise(Handler, new Async(new Rejected(x)));
			}

			/**
			 * Return a promise that remains pending forever
			 * @returns {Promise} forever-pending promise.
			 */
			function never() {
				return foreverPendingPromise; // Should be frozen
			}

			/**
			 * Creates an internal {promise, resolver} pair
			 * @private
			 * @returns {Promise}
			 */
			function defer() {
				return new Promise(Handler, new Pending());
			}

			// Transformation and flow control

			/**
			 * Transform this promise's fulfillment value, returning a new Promise
			 * for the transformed result.  If the promise cannot be fulfilled, onRejected
			 * is called with the reason.  onProgress *may* be called with updates toward
			 * this promise's fulfillment.
			 * @param {function=} onFulfilled fulfillment handler
			 * @param {function=} onRejected rejection handler
			 * @param {function=} onProgress @deprecated progress handler
			 * @return {Promise} new promise
			 */
			Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
				var parent = this._handler;
				var state = parent.join().state();

				if ((typeof onFulfilled !== 'function' && state > 0) ||
					(typeof onRejected !== 'function' && state < 0)) {
					// Short circuit: value will not change, simply share handler
					return new this.constructor(Handler, parent);
				}

				var p = this._beget();
				var child = p._handler;

				parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

				return p;
			};

			/**
			 * If this promise cannot be fulfilled due to an error, call onRejected to
			 * handle the error. Shortcut for .then(undefined, onRejected)
			 * @param {function?} onRejected
			 * @return {Promise}
			 */
			Promise.prototype['catch'] = function(onRejected) {
				return this.then(void 0, onRejected);
			};

			/**
			 * Creates a new, pending promise of the same type as this promise
			 * @private
			 * @returns {Promise}
			 */
			Promise.prototype._beget = function() {
				return begetFrom(this._handler, this.constructor);
			};

			function begetFrom(parent, Promise) {
				var child = new Pending(parent.receiver, parent.join().context);
				return new Promise(Handler, child);
			}

			// Array combinators

			Promise.all = all;
			Promise.race = race;
			Promise._traverse = traverse;

			/**
			 * Return a promise that will fulfill when all promises in the
			 * input array have fulfilled, or will reject when one of the
			 * promises rejects.
			 * @param {array} promises array of promises
			 * @returns {Promise} promise for array of fulfillment values
			 */
			function all(promises) {
				return traverseWith(snd, null, promises);
			}

			/**
			 * Array<Promise<X>> -> Promise<Array<f(X)>>
			 * @private
			 * @param {function} f function to apply to each promise's value
			 * @param {Array} promises array of promises
			 * @returns {Promise} promise for transformed values
			 */
			function traverse(f, promises) {
				return traverseWith(tryCatch2, f, promises);
			}

			function traverseWith(tryMap, f, promises) {
				var handler = typeof f === 'function' ? mapAt : settleAt;

				var resolver = new Pending();
				var pending = promises.length >>> 0;
				var results = new Array(pending);

				for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
					x = promises[i];

					if (x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}

					traverseAt(promises, handler, i, x, resolver);
				}

				if(pending === 0) {
					resolver.become(new Fulfilled(results));
				}

				return new Promise(Handler, resolver);

				function mapAt(i, x, resolver) {
					if(!resolver.resolved) {
						traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
					}
				}

				function settleAt(i, x, resolver) {
					results[i] = x;
					if(--pending === 0) {
						resolver.become(new Fulfilled(results));
					}
				}
			}

			function traverseAt(promises, handler, i, x, resolver) {
				if (maybeThenable(x)) {
					var h = getHandlerMaybeThenable(x);
					var s = h.state();

					if (s === 0) {
						h.fold(handler, i, void 0, resolver);
					} else if (s > 0) {
						handler(i, h.value, resolver);
					} else {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
					}
				} else {
					handler(i, x, resolver);
				}
			}

			Promise._visitRemaining = visitRemaining;
			function visitRemaining(promises, start, handler) {
				for(var i=start; i<promises.length; ++i) {
					markAsHandled(getHandler(promises[i]), handler);
				}
			}

			function markAsHandled(h, handler) {
				if(h === handler) {
					return;
				}

				var s = h.state();
				if(s === 0) {
					h.visit(h, void 0, h._unreport);
				} else if(s < 0) {
					h._unreport();
				}
			}

			/**
			 * Fulfill-reject competitive race. Return a promise that will settle
			 * to the same state as the earliest input promise to settle.
			 *
			 * WARNING: The ES6 Promise spec requires that race()ing an empty array
			 * must return a promise that is pending forever.  This implementation
			 * returns a singleton forever-pending promise, the same singleton that is
			 * returned by Promise.never(), thus can be checked with ===
			 *
			 * @param {array} promises array of promises to race
			 * @returns {Promise} if input is non-empty, a promise that will settle
			 * to the same outcome as the earliest input promise to settle. if empty
			 * is empty, returns a promise that will never settle.
			 */
			function race(promises) {
				if(typeof promises !== 'object' || promises === null) {
					return reject(new TypeError('non-iterable passed to race()'));
				}

				// Sigh, race([]) is untestable unless we return *something*
				// that is recognizable without calling .then() on it.
				return promises.length === 0 ? never()
					 : promises.length === 1 ? resolve(promises[0])
					 : runRace(promises);
			}

			function runRace(promises) {
				var resolver = new Pending();
				var i, x, h;
				for(i=0; i<promises.length; ++i) {
					x = promises[i];
					if (x === void 0 && !(i in promises)) {
						continue;
					}

					h = getHandler(x);
					if(h.state() !== 0) {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
						break;
					} else {
						h.visit(resolver, resolver.resolve, resolver.reject);
					}
				}
				return new Promise(Handler, resolver);
			}

			// Promise internals
			// Below this, everything is @private

			/**
			 * Get an appropriate handler for x, without checking for cycles
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandler(x) {
				if(isPromise(x)) {
					return x._handler.join();
				}
				return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
			}

			/**
			 * Get a handler for thenable x.
			 * NOTE: You must only call this if maybeThenable(x) == true
			 * @param {object|function|Promise} x
			 * @returns {object} handler
			 */
			function getHandlerMaybeThenable(x) {
				return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
			}

			/**
			 * Get a handler for potentially untrusted thenable x
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandlerUntrusted(x) {
				try {
					var untrustedThen = x.then;
					return typeof untrustedThen === 'function'
						? new Thenable(untrustedThen, x)
						: new Fulfilled(x);
				} catch(e) {
					return new Rejected(e);
				}
			}

			/**
			 * Handler for a promise that is pending forever
			 * @constructor
			 */
			function Handler() {}

			Handler.prototype.when
				= Handler.prototype.become
				= Handler.prototype.notify // deprecated
				= Handler.prototype.fail
				= Handler.prototype._unreport
				= Handler.prototype._report
				= noop;

			Handler.prototype._state = 0;

			Handler.prototype.state = function() {
				return this._state;
			};

			/**
			 * Recursively collapse handler chain to find the handler
			 * nearest to the fully resolved value.
			 * @returns {object} handler nearest the fully resolved value
			 */
			Handler.prototype.join = function() {
				var h = this;
				while(h.handler !== void 0) {
					h = h.handler;
				}
				return h;
			};

			Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
				this.when({
					resolver: to,
					receiver: receiver,
					fulfilled: fulfilled,
					rejected: rejected,
					progress: progress
				});
			};

			Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
				this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
			};

			Handler.prototype.fold = function(f, z, c, to) {
				this.when(new Fold(f, z, c, to));
			};

			/**
			 * Handler that invokes fail() on any handler it becomes
			 * @constructor
			 */
			function FailIfRejected() {}

			inherit(Handler, FailIfRejected);

			FailIfRejected.prototype.become = function(h) {
				h.fail();
			};

			var failIfRejected = new FailIfRejected();

			/**
			 * Handler that manages a queue of consumers waiting on a pending promise
			 * @constructor
			 */
			function Pending(receiver, inheritedContext) {
				Promise.createContext(this, inheritedContext);

				this.consumers = void 0;
				this.receiver = receiver;
				this.handler = void 0;
				this.resolved = false;
			}

			inherit(Handler, Pending);

			Pending.prototype._state = 0;

			Pending.prototype.resolve = function(x) {
				this.become(getHandler(x));
			};

			Pending.prototype.reject = function(x) {
				if(this.resolved) {
					return;
				}

				this.become(new Rejected(x));
			};

			Pending.prototype.join = function() {
				if (!this.resolved) {
					return this;
				}

				var h = this;

				while (h.handler !== void 0) {
					h = h.handler;
					if (h === this) {
						return this.handler = cycle();
					}
				}

				return h;
			};

			Pending.prototype.run = function() {
				var q = this.consumers;
				var handler = this.handler;
				this.handler = this.handler.join();
				this.consumers = void 0;

				for (var i = 0; i < q.length; ++i) {
					handler.when(q[i]);
				}
			};

			Pending.prototype.become = function(handler) {
				if(this.resolved) {
					return;
				}

				this.resolved = true;
				this.handler = handler;
				if(this.consumers !== void 0) {
					tasks.enqueue(this);
				}

				if(this.context !== void 0) {
					handler._report(this.context);
				}
			};

			Pending.prototype.when = function(continuation) {
				if(this.resolved) {
					tasks.enqueue(new ContinuationTask(continuation, this.handler));
				} else {
					if(this.consumers === void 0) {
						this.consumers = [continuation];
					} else {
						this.consumers.push(continuation);
					}
				}
			};

			/**
			 * @deprecated
			 */
			Pending.prototype.notify = function(x) {
				if(!this.resolved) {
					tasks.enqueue(new ProgressTask(x, this));
				}
			};

			Pending.prototype.fail = function(context) {
				var c = typeof context === 'undefined' ? this.context : context;
				this.resolved && this.handler.join().fail(c);
			};

			Pending.prototype._report = function(context) {
				this.resolved && this.handler.join()._report(context);
			};

			Pending.prototype._unreport = function() {
				this.resolved && this.handler.join()._unreport();
			};

			/**
			 * Wrap another handler and force it into a future stack
			 * @param {object} handler
			 * @constructor
			 */
			function Async(handler) {
				this.handler = handler;
			}

			inherit(Handler, Async);

			Async.prototype.when = function(continuation) {
				tasks.enqueue(new ContinuationTask(continuation, this));
			};

			Async.prototype._report = function(context) {
				this.join()._report(context);
			};

			Async.prototype._unreport = function() {
				this.join()._unreport();
			};

			/**
			 * Handler that wraps an untrusted thenable and assimilates it in a future stack
			 * @param {function} then
			 * @param {{then: function}} thenable
			 * @constructor
			 */
			function Thenable(then, thenable) {
				Pending.call(this);
				tasks.enqueue(new AssimilateTask(then, thenable, this));
			}

			inherit(Pending, Thenable);

			/**
			 * Handler for a fulfilled promise
			 * @param {*} x fulfillment value
			 * @constructor
			 */
			function Fulfilled(x) {
				Promise.createContext(this);
				this.value = x;
			}

			inherit(Handler, Fulfilled);

			Fulfilled.prototype._state = 1;

			Fulfilled.prototype.fold = function(f, z, c, to) {
				runContinuation3(f, z, this, c, to);
			};

			Fulfilled.prototype.when = function(cont) {
				runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
			};

			var errorId = 0;

			/**
			 * Handler for a rejected promise
			 * @param {*} x rejection reason
			 * @constructor
			 */
			function Rejected(x) {
				Promise.createContext(this);

				this.id = ++errorId;
				this.value = x;
				this.handled = false;
				this.reported = false;

				this._report();
			}

			inherit(Handler, Rejected);

			Rejected.prototype._state = -1;

			Rejected.prototype.fold = function(f, z, c, to) {
				to.become(this);
			};

			Rejected.prototype.when = function(cont) {
				if(typeof cont.rejected === 'function') {
					this._unreport();
				}
				runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
			};

			Rejected.prototype._report = function(context) {
				tasks.afterQueue(new ReportTask(this, context));
			};

			Rejected.prototype._unreport = function() {
				if(this.handled) {
					return;
				}
				this.handled = true;
				tasks.afterQueue(new UnreportTask(this));
			};

			Rejected.prototype.fail = function(context) {
				this.reported = true;
				emitRejection('unhandledRejection', this);
				Promise.onFatalRejection(this, context === void 0 ? this.context : context);
			};

			function ReportTask(rejection, context) {
				this.rejection = rejection;
				this.context = context;
			}

			ReportTask.prototype.run = function() {
				if(!this.rejection.handled && !this.rejection.reported) {
					this.rejection.reported = true;
					emitRejection('unhandledRejection', this.rejection) ||
						Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
				}
			};

			function UnreportTask(rejection) {
				this.rejection = rejection;
			}

			UnreportTask.prototype.run = function() {
				if(this.rejection.reported) {
					emitRejection('rejectionHandled', this.rejection) ||
						Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
				}
			};

			// Unhandled rejection hooks
			// By default, everything is a noop

			Promise.createContext
				= Promise.enterContext
				= Promise.exitContext
				= Promise.onPotentiallyUnhandledRejection
				= Promise.onPotentiallyUnhandledRejectionHandled
				= Promise.onFatalRejection
				= noop;

			// Errors and singletons

			var foreverPendingHandler = new Handler();
			var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

			function cycle() {
				return new Rejected(new TypeError('Promise cycle'));
			}

			// Task runners

			/**
			 * Run a single consumer
			 * @constructor
			 */
			function ContinuationTask(continuation, handler) {
				this.continuation = continuation;
				this.handler = handler;
			}

			ContinuationTask.prototype.run = function() {
				this.handler.join().when(this.continuation);
			};

			/**
			 * Run a queue of progress handlers
			 * @constructor
			 */
			function ProgressTask(value, handler) {
				this.handler = handler;
				this.value = value;
			}

			ProgressTask.prototype.run = function() {
				var q = this.handler.consumers;
				if(q === void 0) {
					return;
				}

				for (var c, i = 0; i < q.length; ++i) {
					c = q[i];
					runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
				}
			};

			/**
			 * Assimilate a thenable, sending it's value to resolver
			 * @param {function} then
			 * @param {object|function} thenable
			 * @param {object} resolver
			 * @constructor
			 */
			function AssimilateTask(then, thenable, resolver) {
				this._then = then;
				this.thenable = thenable;
				this.resolver = resolver;
			}

			AssimilateTask.prototype.run = function() {
				var h = this.resolver;
				tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

				function _resolve(x) { h.resolve(x); }
				function _reject(x)  { h.reject(x); }
				function _notify(x)  { h.notify(x); }
			};

			function tryAssimilate(then, thenable, resolve, reject, notify) {
				try {
					then.call(thenable, resolve, reject, notify);
				} catch (e) {
					reject(e);
				}
			}

			/**
			 * Fold a handler value with z
			 * @constructor
			 */
			function Fold(f, z, c, to) {
				this.f = f; this.z = z; this.c = c; this.to = to;
				this.resolver = failIfRejected;
				this.receiver = this;
			}

			Fold.prototype.fulfilled = function(x) {
				this.f.call(this.c, this.z, x, this.to);
			};

			Fold.prototype.rejected = function(x) {
				this.to.reject(x);
			};

			Fold.prototype.progress = function(x) {
				this.to.notify(x);
			};

			// Other helpers

			/**
			 * @param {*} x
			 * @returns {boolean} true iff x is a trusted Promise
			 */
			function isPromise(x) {
				return x instanceof Promise;
			}

			/**
			 * Test just enough to rule out primitives, in order to take faster
			 * paths in some code
			 * @param {*} x
			 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
			 */
			function maybeThenable(x) {
				return (typeof x === 'object' || typeof x === 'function') && x !== null;
			}

			function runContinuation1(f, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}

				Promise.enterContext(h);
				tryCatchReject(f, h.value, receiver, next);
				Promise.exitContext();
			}

			function runContinuation3(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}

				Promise.enterContext(h);
				tryCatchReject3(f, x, h.value, receiver, next);
				Promise.exitContext();
			}

			/**
			 * @deprecated
			 */
			function runNotify(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.notify(x);
				}

				Promise.enterContext(h);
				tryCatchReturn(f, x, receiver, next);
				Promise.exitContext();
			}

			function tryCatch2(f, a, b) {
				try {
					return f(a, b);
				} catch(e) {
					return reject(e);
				}
			}

			/**
			 * Return f.call(thisArg, x), or if it throws return a rejected promise for
			 * the thrown exception
			 */
			function tryCatchReject(f, x, thisArg, next) {
				try {
					next.become(getHandler(f.call(thisArg, x)));
				} catch(e) {
					next.become(new Rejected(e));
				}
			}

			/**
			 * Same as above, but includes the extra argument parameter.
			 */
			function tryCatchReject3(f, x, y, thisArg, next) {
				try {
					f.call(thisArg, x, y, next);
				} catch(e) {
					next.become(new Rejected(e));
				}
			}

			/**
			 * @deprecated
			 * Return f.call(thisArg, x), or if it throws, *return* the exception
			 */
			function tryCatchReturn(f, x, thisArg, next) {
				try {
					next.notify(f.call(thisArg, x));
				} catch(e) {
					next.notify(e);
				}
			}

			function inherit(Parent, Child) {
				Child.prototype = objectCreate(Parent.prototype);
				Child.prototype.constructor = Child;
			}

			function snd(x, y) {
				return y;
			}

			function noop() {}

			function initEmitRejection() {
				/*global process, self, CustomEvent*/
				if(typeof process !== 'undefined' && process !== null
					&& typeof process.emit === 'function') {
					// Returning falsy here means to call the default
					// onPotentiallyUnhandledRejection API.  This is safe even in
					// browserify since process.emit always returns falsy in browserify:
					// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
					return function(type, rejection) {
						return type === 'unhandledRejection'
							? process.emit(type, rejection.value, rejection)
							: process.emit(type, rejection);
					};
				} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
					return (function(noop, self, CustomEvent) {
						var hasCustomEvent = false;
						try {
							var ev = new CustomEvent('unhandledRejection');
							hasCustomEvent = ev instanceof CustomEvent;
						} catch (e) {}

						return !hasCustomEvent ? noop : function(type, rejection) {
							var ev = new CustomEvent(type, {
								detail: {
									reason: rejection.value,
									key: rejection
								},
								bubbles: false,
								cancelable: true
							});

							return !self.dispatchEvent(ev);
						};
					}(noop, self, CustomEvent));
				}

				return noop;
			}

			return Promise;
		};
	});
	}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

	},{}]},{},[1])
	(1)
	});
	;if (typeof systemJSBootstrap !== 'undefined')
	  systemJSBootstrap();})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS v0.19.18
	 */
	!function(e){function t(e,t){var n;return e instanceof Error?(n=new Error(e.message,e.fileName,e.lineNumber),g?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)):n=e+"\n	"+t,n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},b(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function i(e,t){var n,r="",a=0;for(var o in e){var i=o.split("*");if(i.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==i.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var d=i[0].length;d>=a&&t.substr(0,i[0].length)==i[0]&&t.substr(t.length-i[1].length)==i[1]&&(a=d,r=o,n=t.substr(i[0].length,t.length-i[1].length-i[0].length))}}var s=e[r];return"string"==typeof n&&(s=s.replace("*",n)),s}function d(){}function s(){o.call(this),P.call(this)}function l(){}function u(e,t){s.prototype[e]=t(s.prototype[e]||function(){})}function c(e){P=e(P||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=w.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(O){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&b(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,b(t,"__useDefault",{value:!0}),t}function p(e){var t=e.match(R);return t&&"System.register"==e.substr(t[0].length,15)}function h(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}var v="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,g="undefined"!=typeof window&&"undefined"!=typeof document,y="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var b,w=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(b=Object.defineProperty)}catch(e){b=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var x;if("undefined"!=typeof document&&document.getElementsByTagName){if(x=document.baseURI,!x){var E=document.getElementsByTagName("base");x=E[0]&&E[0].href||window.location.href}x=x.split("#")[0].split("?")[0],x=x.substr(0,x.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)x="file://"+(y?"/":"")+process.cwd()+"/",y&&(x=x.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");x=e.location.href}var S=e.URLPolyfill||e.URL;b(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function i(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function d(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),s(e,n),n})}function s(e,t){l(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function l(e,t,n){u(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function u(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++P+">",r.isDeclarative=!0,k.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(d(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,i=n.length;i>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)v(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,i=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var d,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(d=r.loads[c],"translate"!=i||d.source||(d.address=e.moduleAddress,u(r,d,Promise.resolve(e.moduleSource))),d.linkSets.length&&d.linkSets[0].loads[0].name==d.name))return d.linkSets[0].done.then(function(){t(d)});var p=d||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==i?s(r,p):"fetch"==i?l(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,u(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var i=0,d=a.loads.length;d>i;i++)if(a.loads[i].name==o){m(e,a.loads[i]);break}}}}function p(e){var t=!1;try{E(e,function(n,r){v(e,n,r),t=!0})}catch(n){v(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:O({}),evaluated:!0}:{module:O({})},t.status="linked",g(e.loader,t)}return e.resolve(n)}var i=p(e);i||e.resolve(n)}}function v(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var i=e.loads[o],d=0;d<i.dependencies.length;d++){var s=i.dependencies[d];if(s.value==n.name){r=t(r,"Error loading "+n.name+' as "'+s.key+'" from '+i.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var l=e.loads.concat([]),o=0,u=l.length;u>o;o++){var n=l[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==w.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=w.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=w.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function g(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=w.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=w.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function x(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function E(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],i=y(e,o,t);if(!i)return;o.module={name:o.name,module:i},o.status="linked",g(n,o)}}function S(e,t){return t.module.module}function _(){}function k(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var P=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return x(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(_(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(_(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||x(r,e,i(t,e,{}).then(function(n){return delete t.importPromises[e],S(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||x(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),i=this._loader,d=r.done.then(function(){return S(i,n)});return u(i,n,a),d},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){b(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]}})})(n[o]);return t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var O=a.prototype.newModule}();var _;d.prototype=a.prototype,o.prototype=new d;var k=/^([^\/]+:\/\/|\/)/;o.prototype.normalize=function(e,t,n){return e=e.match(k)||"."==e[0]?new S(e,t||x).href:new S(i(this.paths,e)||e,x).href},o.prototype.locate=function(e){return e.name},o.prototype.instantiate=function(t){var r=this;return Promise.resolve(r.normalize(r.transpiler)).then(function(a){return t.address===a?{deps:[],execute:function(){var a=e.System,o=e.Reflect.Loader;return n("(function(require,exports,module){"+t.source+"})();",t.address,e),e.System=a,e.Reflect.Loader=o,r.newModule({"default":e[r.transpiler],__useDefault:!0})}}:void 0})},l.prototype=o.prototype,s.prototype=new l,s.prototype.constructor=s,s.prototype.instantiate=function(){};var P,O=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(j){O=!1}!function(){function t(){if(o&&"interactive"===o.script.readyState)return o.load;for(var e=0;e<s.length;e++)if("interactive"==s[e].script.readyState)return o=s[e],o.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),i=t;try{importScripts(t.address)}catch(r){i=null,n(r)}i=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,i=null,d=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),s=[],l=0,c=[];u("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(i?this.reduceRegister_(i,n):d?this.reduceRegister_(t(),n):l?c.push(n):this.reduceRegister_(null,n),!0)}}),u("fetch",function(t){return function(i){var u=this;return"json"!=i.metadata.format&&i.metadata.scriptLoad&&(g||v)?v?n(u,i):new Promise(function(t,n){function f(e){if(!h.readyState||"loaded"==h.readyState||"complete"==h.readyState){if(l--,i.metadata.entry||c.length){if(!d){for(var r=0;r<c.length;r++)u.reduceRegister_(i,c[r]);c=[]}}else u.reduceRegister_(i);p(),i.metadata.entry||i.metadata.bundle||n(new Error(i.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function m(e){p(),n(new Error("Unable to load script "+i.address))}function p(){if(e.System=a,h.detachEvent){h.detachEvent("onreadystatechange",f);for(var t=0;t<s.length;t++)s[t].script==h&&(o&&o.script==h&&(o=null),s.splice(t,1))}else h.removeEventListener("load",f,!1),h.removeEventListener("error",m,!1);r.removeChild(h)}var h=document.createElement("script");h.async=!0,i.metadata.integrity&&h.setAttribute("integrity",i.metadata.integrity),d?(h.attachEvent("onreadystatechange",f),s.push({script:h,load:i})):(h.addEventListener("load",f,!1),h.addEventListener("error",m,!1)),l++,a=e.System,h.src=i.address,r.appendChild(h)}):t.call(this,i)}})}();var R=/^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==w.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var i=e.normalizedDeps[a],d=n.defined[i];if(d&&!d.evaluated){var s=e.groupIndex+(d.declarative!=e.declarative);if(null===d.groupIndex||d.groupIndex<s){if(null!==d.groupIndex&&(r[d.groupIndex].splice(w.call(r[d.groupIndex],d),1),0==r[d.groupIndex].length))throw new Error("Mixed dependency cycle detected");d.groupIndex=s}t(d,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var i=!!r.declarative==a.length%2,s=a.length-1;s>=0;s--){for(var l=a[s],u=0;u<l.length;u++){var c=l[u];i?o(c,n):d(c,n)}i=!i}}}function r(){}function a(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new r,importers:[]})}function o(t,n){if(!t.module){var r=n._loader.moduleRecords,i=t.module=a(t.name,r),d=t.module.exports,s=t.declare.call(e,function(e,t){if(i.locked=!0,"object"==typeof e)for(var n in e)d[n]=e[n];else d[e]=t;for(var r=0,a=i.importers.length;a>r;r++){var o=i.importers[r];if(!o.locked){var s=w.call(o.dependencies,i);o.setters[s](d)}}return i.locked=!1,t},t.name);if(i.setters=s.setters,i.execute=s.execute,!i.setters||!i.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var l=0,u=t.normalizedDeps.length;u>l;l++){var c,f=t.normalizedDeps[l],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(i),i.dependencies.push(p)):i.dependencies.push(null);for(var h=t.originalIndices[l],v=0,g=h.length;g>v;++v){var y=h[v];i.setters[y]&&i.setters[y](c)}}}}function i(e,t){var n,r=t.defined[e];if(r)r.declarative?l(e,[],t):r.evaluated||d(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function d(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,s=t.normalizedDeps.length;s>o;o++){var l=t.normalizedDeps[o],u=n.defined[l];u&&d(u,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return i(t.normalizedDeps[r],n);throw new Error("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esmExports&&r!==e?t.esModule=m(r):t.esModule={"default":r}}}function l(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,i=a.normalizedDeps.length;i>o;o++){var d=a.normalizedDeps[o];-1==w.call(n,d)&&(r.defined[d]?l(d,n,r):r.get(d))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}s.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=h();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},s.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=h();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},u("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Unexpected anonymous System.register call.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),b(r,"toString",{value:function(){return"Module"}}),u("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),u("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):("register"!=t.metadata.format||t.metadata.authorization||t.metadata.scriptLoad===!1||(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),u("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&p(t.source))&&(t.metadata.format="register"),e})}}),u("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof __exec&&__exec.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=h(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var i=[],d=0,s=r.deps.length;s>d;d++)i.push(Promise.resolve(a.normalize(r.deps[d],t.name)));return Promise.all(i).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),l(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),u("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var i=n.bundles[a][o];if(i==t.name){r=!0;break}if(-1!=i.indexOf("*")){var d=i.split("*");if(2!=d.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,d[0].length)==d[0]&&t.name.substr(t.name.length-d[1].length,d[1].length)==d[1]&&-1==t.name.substr(d[0].length,t.name.length-d[1].length-d[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),c(function(e){return function(){e.apply(this,arguments),this.has("@@amd-helpers")&&this.get("@@amd-helpers").createDefine()}}),u("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,e.call(this,t)}}),_=new s,e.SystemJS=_,_.version="0.19.18 Register Only","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,_||(_=new o,_.constructor=o),"object"==typeof exports&&(module.exports=_),e.System=_}("undefined"!=typeof self?self:global);
	//# sourceMappingURL=system-register-only.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * SystemJS v0.19.18
	 */
	(function(__global) {

	  var isWorker = typeof window == 'undefined' && typeof self != 'undefined' && typeof importScripts != 'undefined';
	  var isBrowser = typeof window != 'undefined' && typeof document != 'undefined';
	  var isWindows = typeof process != 'undefined' && typeof process.platform != 'undefined' && !!process.platform.match(/^win/);

	  if (!__global.console)
	    __global.console = { assert: function() {} };

	  // IE8 support
	  var indexOf = Array.prototype.indexOf || function(item) {
	    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
	      if (this[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  };
	  
	  var defineProperty;
	  (function () {
	    try {
	      if (!!Object.defineProperty({}, 'a', {}))
	        defineProperty = Object.defineProperty;
	    }
	    catch (e) {
	      defineProperty = function(obj, prop, opt) {
	        try {
	          obj[prop] = opt.value || opt.get.call(obj);
	        }
	        catch(e) {}
	      }
	    }
	  })();

	  function addToError(err, msg) {
	    var newErr;
	    if (err instanceof Error) {
	      newErr = new Error(err.message, err.fileName, err.lineNumber);
	      if (isBrowser) {
	        newErr.message = err.message + '\n\t' + msg;
	        newErr.stack = err.stack;
	      }
	      else {
	        // node errors only look correct with the stack modified
	        newErr.message = err.message;
	        newErr.stack = err.stack + '\n\t' + msg;
	      }
	    }
	    else {
	      newErr = err + '\n\t' + msg;
	    }
	      
	    return newErr;
	  }

	  function __eval(source, debugName, context) {
	    try {
	      new Function(source).call(context);
	    }
	    catch(e) {
	      throw addToError(e, 'Evaluating ' + debugName);
	    }
	  }

	  var baseURI;
	  // environent baseURI detection
	  if (typeof document != 'undefined' && document.getElementsByTagName) {
	    baseURI = document.baseURI;

	    if (!baseURI) {
	      var bases = document.getElementsByTagName('base');
	      baseURI = bases[0] && bases[0].href || window.location.href;
	    }

	    // sanitize out the hash and querystring
	    baseURI = baseURI.split('#')[0].split('?')[0];
	    baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
	  }
	  else if (typeof process != 'undefined' && process.cwd) {
	    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
	    if (isWindows)
	      baseURI = baseURI.replace(/\\/g, '/');
	  }
	  else if (typeof location != 'undefined') {
	    baseURI = __global.location.href;
	  }
	  else {
	    throw new TypeError('No environment baseURI');
	  }

	  var URL = __global.URLPolyfill || __global.URL;
	/*
	*********************************************************************************************

	  Dynamic Module Loader Polyfill

	    - Implemented exactly to the former 2014-08-24 ES6 Specification Draft Rev 27, Section 15
	      http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27

	    - Functions are commented with their spec numbers, with spec differences commented.

	    - Spec bugs are commented in this code with links.

	    - Abstract functions have been combined where possible, and their associated functions
	      commented.

	    - Realm implementation is entirely omitted.

	*********************************************************************************************
	*/

	function Module() {}
	// http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag
	defineProperty(Module.prototype, 'toString', {
	  value: function() {
	    return 'Module';
	  }
	});
	function Loader(options) {
	  this._loader = {
	    loaderObj: this,
	    loads: [],
	    modules: {},
	    importPromises: {},
	    moduleRecords: {}
	  };

	  // 26.3.3.6
	  defineProperty(this, 'global', {
	    get: function() {
	      return __global;
	    }
	  });

	  // 26.3.3.13 realm not implemented
	}

	(function() {

	// Some Helpers

	// logs a linkset snapshot for debugging
	/* function snapshot(loader) {
	  console.log('---Snapshot---');
	  for (var i = 0; i < loader.loads.length; i++) {
	    var load = loader.loads[i];
	    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

	    for (var j = 0; j < load.linkSets.length; j++) {
	      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
	    }
	    console.log(linkSetLog);
	  }
	  console.log('');
	}
	function logloads(loads) {
	  var log = '';
	  for (var k = 0; k < loads.length; k++)
	    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
	  return log;
	} */


	/* function checkInvariants() {
	  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

	  var loads = System._loader.loads;
	  var linkSets = [];

	  for (var i = 0; i < loads.length; i++) {
	    var load = loads[i];
	    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

	    for (var j = 0; j < load.linkSets.length; j++) {
	      var linkSet = load.linkSets[j];

	      for (var k = 0; k < linkSet.loads.length; k++)
	        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

	      if (linkSets.indexOf(linkSet) == -1)
	        linkSets.push(linkSet);
	    }
	  }

	  for (var i = 0; i < loads.length; i++) {
	    var load = loads[i];
	    for (var j = 0; j < linkSets.length; j++) {
	      var linkSet = linkSets[j];

	      if (linkSet.loads.indexOf(load) != -1)
	        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

	      if (load.linkSets.indexOf(linkSet) != -1)
	        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
	    }
	  }

	  for (var i = 0; i < linkSets.length; i++) {
	    var linkSet = linkSets[i];
	    for (var j = 0; j < linkSet.loads.length; j++) {
	      var load = linkSet.loads[j];

	      for (var k = 0; k < load.dependencies.length; k++) {
	        var depName = load.dependencies[k].value;
	        var depLoad;
	        for (var l = 0; l < loads.length; l++) {
	          if (loads[l].name != depName)
	            continue;
	          depLoad = loads[l];
	          break;
	        }

	        // loading records are allowed not to have their dependencies yet
	        // if (load.status != 'loading')
	        //  console.assert(depLoad, 'depLoad found');

	        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
	      }
	    }
	  }
	} */

	  // 15.2.3 - Runtime Semantics: Loader State

	  // 15.2.3.11
	  function createLoaderLoad(object) {
	    return {
	      // modules is an object for ES5 implementation
	      modules: {},
	      loads: [],
	      loaderObj: object
	    };
	  }

	  // 15.2.3.2 Load Records and LoadRequest Objects

	  // 15.2.3.2.1
	  function createLoad(name) {
	    return {
	      status: 'loading',
	      name: name,
	      linkSets: [],
	      dependencies: [],
	      metadata: {}
	    };
	  }

	  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

	  // 15.2.4

	  // 15.2.4.1
	  function loadModule(loader, name, options) {
	    return new Promise(asyncStartLoadPartwayThrough({
	      step: options.address ? 'fetch' : 'locate',
	      loader: loader,
	      moduleName: name,
	      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
	      moduleMetadata: options && options.metadata || {},
	      moduleSource: options.source,
	      moduleAddress: options.address
	    }));
	  }

	  // 15.2.4.2
	  function requestLoad(loader, request, refererName, refererAddress) {
	    // 15.2.4.2.1 CallNormalize
	    return new Promise(function(resolve, reject) {
	      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
	    })
	    // 15.2.4.2.2 GetOrCreateLoad
	    .then(function(name) {
	      var load;
	      if (loader.modules[name]) {
	        load = createLoad(name);
	        load.status = 'linked';
	        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
	        load.module = loader.modules[name];
	        return load;
	      }

	      for (var i = 0, l = loader.loads.length; i < l; i++) {
	        load = loader.loads[i];
	        if (load.name != name)
	          continue;
	        console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded');
	        return load;
	      }

	      load = createLoad(name);
	      loader.loads.push(load);

	      proceedToLocate(loader, load);

	      return load;
	    });
	  }

	  // 15.2.4.3
	  function proceedToLocate(loader, load) {
	    proceedToFetch(loader, load,
	      Promise.resolve()
	      // 15.2.4.3.1 CallLocate
	      .then(function() {
	        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
	      })
	    );
	  }

	  // 15.2.4.4
	  function proceedToFetch(loader, load, p) {
	    proceedToTranslate(loader, load,
	      p
	      // 15.2.4.4.1 CallFetch
	      .then(function(address) {
	        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
	        if (load.status != 'loading')
	          return;
	        load.address = address;

	        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
	      })
	    );
	  }

	  var anonCnt = 0;

	  // 15.2.4.5
	  function proceedToTranslate(loader, load, p) {
	    p
	    // 15.2.4.5.1 CallTranslate
	    .then(function(source) {
	      if (load.status != 'loading')
	        return;

	      return Promise.resolve(loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source }))

	      // 15.2.4.5.2 CallInstantiate
	      .then(function(source) {
	        load.source = source;
	        return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
	      })

	      // 15.2.4.5.3 InstantiateSucceeded
	      .then(function(instantiateResult) {
	        if (instantiateResult === undefined) {
	          load.address = load.address || '<Anonymous Module ' + ++anonCnt + '>';

	          // instead of load.kind, use load.isDeclarative
	          load.isDeclarative = true;
	          return transpile.call(loader.loaderObj, load)
	          .then(function(transpiled) {
	            // Hijack System.register to set declare function
	            var curSystem = __global.System;
	            var curRegister = curSystem.register;
	            curSystem.register = function(name, deps, declare) {
	              if (typeof name != 'string') {
	                declare = deps;
	                deps = name;
	              }
	              // store the registered declaration as load.declare
	              // store the deps as load.deps
	              load.declare = declare;
	              load.depsList = deps;
	            }
	            // empty {} context is closest to undefined 'this' we can get
	            __eval(transpiled, load.address, {});
	            curSystem.register = curRegister;
	          });
	        }
	        else if (typeof instantiateResult == 'object') {
	          load.depsList = instantiateResult.deps || [];
	          load.execute = instantiateResult.execute;
	          load.isDeclarative = false;
	        }
	        else
	          throw TypeError('Invalid instantiate return value');
	      })
	      // 15.2.4.6 ProcessLoadDependencies
	      .then(function() {
	        load.dependencies = [];
	        var depsList = load.depsList;

	        var loadPromises = [];
	        for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
	          loadPromises.push(
	            requestLoad(loader, request, load.name, load.address)

	            // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
	            .then(function(depLoad) {

	              // adjusted from spec to maintain dependency order
	              // this is due to the System.register internal implementation needs
	              load.dependencies[index] = {
	                key: request,
	                value: depLoad.name
	              };

	              if (depLoad.status != 'linked') {
	                var linkSets = load.linkSets.concat([]);
	                for (var i = 0, l = linkSets.length; i < l; i++)
	                  addLoadToLinkSet(linkSets[i], depLoad);
	              }

	              // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
	              // snapshot(loader);
	            })
	          );
	        })(depsList[i], i);

	        return Promise.all(loadPromises);
	      })

	      // 15.2.4.6.2 LoadSucceeded
	      .then(function() {
	        // console.log('LoadSucceeded ' + load.name);
	        // snapshot(loader);

	        console.assert(load.status == 'loading', 'is loading');

	        load.status = 'loaded';

	        var linkSets = load.linkSets.concat([]);
	        for (var i = 0, l = linkSets.length; i < l; i++)
	          updateLinkSetOnLoad(linkSets[i], load);
	      });
	    })
	    // 15.2.4.5.4 LoadFailed
	    ['catch'](function(exc) {
	      load.status = 'failed';
	      load.exception = exc;

	      var linkSets = load.linkSets.concat([]);
	      for (var i = 0, l = linkSets.length; i < l; i++) {
	        linkSetFailed(linkSets[i], load, exc);
	      }

	      console.assert(load.linkSets.length == 0, 'linkSets not removed');
	    });
	  }

	  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

	  // 15.2.4.7.1
	  function asyncStartLoadPartwayThrough(stepState) {
	    return function(resolve, reject) {
	      var loader = stepState.loader;
	      var name = stepState.moduleName;
	      var step = stepState.step;

	      if (loader.modules[name])
	        throw new TypeError('"' + name + '" already exists in the module table');

	      // adjusted to pick up existing loads
	      var existingLoad;
	      for (var i = 0, l = loader.loads.length; i < l; i++) {
	        if (loader.loads[i].name == name) {
	          existingLoad = loader.loads[i];

	          if (step == 'translate' && !existingLoad.source) {
	            existingLoad.address = stepState.moduleAddress;
	            proceedToTranslate(loader, existingLoad, Promise.resolve(stepState.moduleSource));
	          }

	          // a primary load -> use that existing linkset if it is for the direct load here
	          // otherwise create a new linkset unit
	          if (existingLoad.linkSets.length && existingLoad.linkSets[0].loads[0].name == existingLoad.name)
	            return existingLoad.linkSets[0].done.then(function() {
	              resolve(existingLoad);
	            });
	        }
	      }

	      var load = existingLoad || createLoad(name);

	      load.metadata = stepState.moduleMetadata;

	      var linkSet = createLinkSet(loader, load);

	      loader.loads.push(load);

	      resolve(linkSet.done);

	      if (step == 'locate')
	        proceedToLocate(loader, load);

	      else if (step == 'fetch')
	        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

	      else {
	        console.assert(step == 'translate', 'translate step');
	        load.address = stepState.moduleAddress;
	        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
	      }
	    }
	  }

	  // Declarative linking functions run through alternative implementation:
	  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
	  // 15.2.5.1.2 LookupExport not implemented
	  // 15.2.5.1.3 LookupModuleDependency not implemented

	  // 15.2.5.2.1
	  function createLinkSet(loader, startingLoad) {
	    var linkSet = {
	      loader: loader,
	      loads: [],
	      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
	      loadingCount: 0
	    };
	    linkSet.done = new Promise(function(resolve, reject) {
	      linkSet.resolve = resolve;
	      linkSet.reject = reject;
	    });
	    addLoadToLinkSet(linkSet, startingLoad);
	    return linkSet;
	  }
	  // 15.2.5.2.2
	  function addLoadToLinkSet(linkSet, load) {
	    if (load.status == 'failed')
	      return;

	    console.assert(load.status == 'loading' || load.status == 'loaded', 'loading or loaded on link set');

	    for (var i = 0, l = linkSet.loads.length; i < l; i++)
	      if (linkSet.loads[i] == load)
	        return;

	    linkSet.loads.push(load);
	    load.linkSets.push(linkSet);

	    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
	    if (load.status != 'loaded') {
	      linkSet.loadingCount++;
	    }

	    var loader = linkSet.loader;

	    for (var i = 0, l = load.dependencies.length; i < l; i++) {
	      if (!load.dependencies[i])
	        continue;

	      var name = load.dependencies[i].value;

	      if (loader.modules[name])
	        continue;

	      for (var j = 0, d = loader.loads.length; j < d; j++) {
	        if (loader.loads[j].name != name)
	          continue;

	        addLoadToLinkSet(linkSet, loader.loads[j]);
	        break;
	      }
	    }
	    // console.log('add to linkset ' + load.name);
	    // snapshot(linkSet.loader);
	  }

	  // linking errors can be generic or load-specific
	  // this is necessary for debugging info
	  function doLink(linkSet) {
	    var error = false;
	    try {
	      link(linkSet, function(load, exc) {
	        linkSetFailed(linkSet, load, exc);
	        error = true;
	      });
	    }
	    catch(e) {
	      linkSetFailed(linkSet, null, e);
	      error = true;
	    }
	    return error;
	  }

	  // 15.2.5.2.3
	  function updateLinkSetOnLoad(linkSet, load) {
	    // console.log('update linkset on load ' + load.name);
	    // snapshot(linkSet.loader);

	    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

	    linkSet.loadingCount--;

	    if (linkSet.loadingCount > 0)
	      return;

	    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
	    var startingLoad = linkSet.startingLoad;

	    // non-executing link variation for loader tracing
	    // on the server. Not in spec.
	    /***/
	    if (linkSet.loader.loaderObj.execute === false) {
	      var loads = [].concat(linkSet.loads);
	      for (var i = 0, l = loads.length; i < l; i++) {
	        var load = loads[i];
	        load.module = !load.isDeclarative ? {
	          module: _newModule({})
	        } : {
	          name: load.name,
	          module: _newModule({}),
	          evaluated: true
	        };
	        load.status = 'linked';
	        finishLoad(linkSet.loader, load);
	      }
	      return linkSet.resolve(startingLoad);
	    }
	    /***/

	    var abrupt = doLink(linkSet);

	    if (abrupt)
	      return;

	    console.assert(linkSet.loads.length == 0, 'loads cleared');

	    linkSet.resolve(startingLoad);
	  }

	  // 15.2.5.2.4
	  function linkSetFailed(linkSet, load, exc) {
	    var loader = linkSet.loader;
	    var requests;

	    checkError: 
	    if (load) {
	      if (linkSet.loads[0].name == load.name) {
	        exc = addToError(exc, 'Error loading ' + load.name);
	      }
	      else {
	        for (var i = 0; i < linkSet.loads.length; i++) {
	          var pLoad = linkSet.loads[i];
	          for (var j = 0; j < pLoad.dependencies.length; j++) {
	            var dep = pLoad.dependencies[j];
	            if (dep.value == load.name) {
	              exc = addToError(exc, 'Error loading ' + load.name + ' as "' + dep.key + '" from ' + pLoad.name);
	              break checkError;
	            }
	          }
	        }
	        exc = addToError(exc, 'Error loading ' + load.name + ' from ' + linkSet.loads[0].name);
	      }
	    }
	    else {
	      exc = addToError(exc, 'Error linking ' + linkSet.loads[0].name);
	    }


	    var loads = linkSet.loads.concat([]);
	    for (var i = 0, l = loads.length; i < l; i++) {
	      var load = loads[i];

	      // store all failed load records
	      loader.loaderObj.failed = loader.loaderObj.failed || [];
	      if (indexOf.call(loader.loaderObj.failed, load) == -1)
	        loader.loaderObj.failed.push(load);

	      var linkIndex = indexOf.call(load.linkSets, linkSet);
	      console.assert(linkIndex != -1, 'link not present');
	      load.linkSets.splice(linkIndex, 1);
	      if (load.linkSets.length == 0) {
	        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
	        if (globalLoadsIndex != -1)
	          linkSet.loader.loads.splice(globalLoadsIndex, 1);
	      }
	    }
	    linkSet.reject(exc);
	  }

	  // 15.2.5.2.5
	  function finishLoad(loader, load) {
	    // add to global trace if tracing
	    if (loader.loaderObj.trace) {
	      if (!loader.loaderObj.loads)
	        loader.loaderObj.loads = {};
	      var depMap = {};
	      load.dependencies.forEach(function(dep) {
	        depMap[dep.key] = dep.value;
	      });
	      loader.loaderObj.loads[load.name] = {
	        name: load.name,
	        deps: load.dependencies.map(function(dep){ return dep.key }),
	        depMap: depMap,
	        address: load.address,
	        metadata: load.metadata,
	        source: load.source,
	        kind: load.isDeclarative ? 'declarative' : 'dynamic'
	      };
	    }
	    // if not anonymous, add to the module table
	    if (load.name) {
	      console.assert(!loader.modules[load.name], 'load not in module table');
	      loader.modules[load.name] = load.module;
	    }
	    var loadIndex = indexOf.call(loader.loads, load);
	    if (loadIndex != -1)
	      loader.loads.splice(loadIndex, 1);
	    for (var i = 0, l = load.linkSets.length; i < l; i++) {
	      loadIndex = indexOf.call(load.linkSets[i].loads, load);
	      if (loadIndex != -1)
	        load.linkSets[i].loads.splice(loadIndex, 1);
	    }
	    load.linkSets.splice(0, load.linkSets.length);
	  }

	  function doDynamicExecute(linkSet, load, linkError) {
	    try {
	      var module = load.execute();
	    }
	    catch(e) {
	      linkError(load, e);
	      return;
	    }
	    if (!module || !(module instanceof Module))
	      linkError(load, new TypeError('Execution must define a Module instance'));
	    else
	      return module;
	  }

	  // 26.3 Loader

	  // 26.3.1.1
	  // defined at top

	  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
	  function createImportPromise(loader, name, promise) {
	    var importPromises = loader._loader.importPromises;
	    return importPromises[name] = promise.then(function(m) {
	      importPromises[name] = undefined;
	      return m;
	    }, function(e) {
	      importPromises[name] = undefined;
	      throw e;
	    });
	  }

	  Loader.prototype = {
	    // 26.3.3.1
	    constructor: Loader,
	    // 26.3.3.2
	    define: function(name, source, options) {
	      // check if already defined
	      if (this._loader.importPromises[name])
	        throw new TypeError('Module is already loading.');
	      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
	        step: 'translate',
	        loader: this._loader,
	        moduleName: name,
	        moduleMetadata: options && options.metadata || {},
	        moduleSource: source,
	        moduleAddress: options && options.address
	      })));
	    },
	    // 26.3.3.3
	    'delete': function(name) {
	      var loader = this._loader;
	      delete loader.importPromises[name];
	      delete loader.moduleRecords[name];
	      return loader.modules[name] ? delete loader.modules[name] : false;
	    },
	    // 26.3.3.4 entries not implemented
	    // 26.3.3.5
	    get: function(key) {
	      if (!this._loader.modules[key])
	        return;
	      doEnsureEvaluated(this._loader.modules[key], [], this);
	      return this._loader.modules[key].module;
	    },
	    // 26.3.3.7
	    has: function(name) {
	      return !!this._loader.modules[name];
	    },
	    // 26.3.3.8
	    'import': function(name, parentName, parentAddress) {
	      if (typeof parentName == 'object')
	        parentName = parentName.name;

	      // run normalize first
	      var loaderObj = this;

	      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
	      return Promise.resolve(loaderObj.normalize(name, parentName))
	      .then(function(name) {
	        var loader = loaderObj._loader;

	        if (loader.modules[name]) {
	          doEnsureEvaluated(loader.modules[name], [], loader._loader);
	          return loader.modules[name].module;
	        }

	        return loader.importPromises[name] || createImportPromise(loaderObj, name,
	          loadModule(loader, name, {})
	          .then(function(load) {
	            delete loader.importPromises[name];
	            return evaluateLoadedModule(loader, load);
	          }));
	      });
	    },
	    // 26.3.3.9 keys not implemented
	    // 26.3.3.10
	    load: function(name) {
	      var loader = this._loader;
	      if (loader.modules[name])
	        return Promise.resolve();
	      return loader.importPromises[name] || createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
	        step: 'locate',
	        loader: loader,
	        moduleName: name,
	        moduleMetadata: {},
	        moduleSource: undefined,
	        moduleAddress: undefined
	      }))
	      .then(function() {
	        delete loader.importPromises[name];
	      }));
	    },
	    // 26.3.3.11
	    module: function(source, options) {
	      var load = createLoad();
	      load.address = options && options.address;
	      var linkSet = createLinkSet(this._loader, load);
	      var sourcePromise = Promise.resolve(source);
	      var loader = this._loader;
	      var p = linkSet.done.then(function() {
	        return evaluateLoadedModule(loader, load);
	      });
	      proceedToTranslate(loader, load, sourcePromise);
	      return p;
	    },
	    // 26.3.3.12
	    newModule: function (obj) {
	      if (typeof obj != 'object')
	        throw new TypeError('Expected object');

	      var m = new Module();

	      var pNames = [];
	      if (Object.getOwnPropertyNames && obj != null)
	        pNames = Object.getOwnPropertyNames(obj);
	      else
	        for (var key in obj)
	          pNames.push(key);

	      for (var i = 0; i < pNames.length; i++) (function(key) {
	        defineProperty(m, key, {
	          configurable: false,
	          enumerable: true,
	          get: function () {
	            return obj[key];
	          }
	        });
	      })(pNames[i]);

	      return m;
	    },
	    // 26.3.3.14
	    set: function(name, module) {
	      if (!(module instanceof Module))
	        throw new TypeError('Loader.set(' + name + ', module) must be a module');
	      this._loader.modules[name] = {
	        module: module
	      };
	    },
	    // 26.3.3.15 values not implemented
	    // 26.3.3.16 @@iterator not implemented
	    // 26.3.3.17 @@toStringTag not implemented

	    // 26.3.3.18.1
	    normalize: function(name, referrerName, referrerAddress) {
	      return name;
	    },
	    // 26.3.3.18.2
	    locate: function(load) {
	      return load.name;
	    },
	    // 26.3.3.18.3
	    fetch: function(load) {
	    },
	    // 26.3.3.18.4
	    translate: function(load) {
	      return load.source;
	    },
	    // 26.3.3.18.5
	    instantiate: function(load) {
	    }
	  };

	  var _newModule = Loader.prototype.newModule;
	/*
	 * ES6 Module Declarative Linking Code - Dev Build Only
	 */
	  function link(linkSet, linkError) {

	    var loader = linkSet.loader;

	    if (!linkSet.loads.length)
	      return;

	    var loads = linkSet.loads.concat([]);

	    for (var i = 0; i < loads.length; i++) {
	      var load = loads[i];

	      var module = doDynamicExecute(linkSet, load, linkError);
	      if (!module)
	        return;
	      load.module = {
	        name: load.name,
	        module: module
	      };
	      load.status = 'linked';

	      finishLoad(loader, load);
	    }
	  }

	  function evaluateLoadedModule(loader, load) {
	    console.assert(load.status == 'linked', 'is linked ' + load.name);
	    return load.module.module;
	  }

	  function doEnsureEvaluated() {}

	  function transpile() {
	    throw new TypeError('ES6 transpilation is only provided in the dev module loader build.');
	  }
	})();/*
	*********************************************************************************************

	  System Loader Implementation

	    - Implemented to https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js

	    - <script type="module"> supported

	*********************************************************************************************
	*/

	var System;

	function SystemLoader() {
	  Loader.call(this);
	  this.paths = {};
	}

	// NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25
	function applyPaths(paths, name) {
	  // most specific (most number of slashes in path) match wins
	  var pathMatch = '', wildcard, maxWildcardPrefixLen = 0;

	  // check to see if we have a paths entry
	  for (var p in paths) {
	    var pathParts = p.split('*');
	    if (pathParts.length > 2)
	      throw new TypeError('Only one wildcard in a path is permitted');

	    // exact path match
	    if (pathParts.length == 1) {
	      if (name == p)
	        return paths[p];
	      
	      // support trailing / in paths rules
	      else if (name.substr(0, p.length - 1) == p.substr(0, p.length - 1) && (name.length < p.length || name[p.length - 1] == p[p.length - 1]) && paths[p][paths[p].length - 1] == '/')
	        return paths[p].substr(0, paths[p].length - 1) + (name.length > p.length ? '/' + name.substr(p.length) : '');
	    }
	    // wildcard path match
	    else {
	      var wildcardPrefixLen = pathParts[0].length;
	      if (wildcardPrefixLen >= maxWildcardPrefixLen &&
	          name.substr(0, pathParts[0].length) == pathParts[0] &&
	          name.substr(name.length - pathParts[1].length) == pathParts[1]) {
	            maxWildcardPrefixLen = wildcardPrefixLen;
	            pathMatch = p;
	            wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
	          }
	    }
	  }

	  var outPath = paths[pathMatch];
	  if (typeof wildcard == 'string')
	    outPath = outPath.replace('*', wildcard);

	  return outPath;
	}

	// inline Object.create-style class extension
	function LoaderProto() {}
	LoaderProto.prototype = Loader.prototype;
	SystemLoader.prototype = new LoaderProto();
	var absURLRegEx = /^([^\/]+:\/\/|\/)/;

	// Normalization with module names as absolute URLs
	SystemLoader.prototype.normalize = function(name, parentName, parentAddress) {
	  // NB does `import 'file.js'` import relative to the parent name or baseURL?
	  //    have assumed that it is baseURL-relative here, but spec may well align with URLs to be the latter
	  //    safe option for users is to always use "./file.js" for relative

	  // not absolute or relative -> apply paths (what will be sites)
	  if (!name.match(absURLRegEx) && name[0] != '.')
	    name = new URL(applyPaths(this.paths, name) || name, baseURI).href;
	  // apply parent-relative normalization, parentAddress is already normalized
	  else
	    name = new URL(name, parentName || baseURI).href;

	  return name;
	};

	SystemLoader.prototype.locate = function(load) {
	  return load.name;
	};


	// ensure the transpiler is loaded correctly
	SystemLoader.prototype.instantiate = function(load) {
	  var self = this;
	  return Promise.resolve(self.normalize(self.transpiler))
	  .then(function(transpilerNormalized) {
	    // load transpiler as a global (avoiding System clobbering)
	    if (load.address === transpilerNormalized) {
	      return {
	        deps: [],
	        execute: function() {
	          var curSystem = __global.System;
	          var curLoader = __global.Reflect.Loader;
	          // ensure not detected as CommonJS
	          __eval('(function(require,exports,module){' + load.source + '})();', load.address, __global);
	          __global.System = curSystem;
	          __global.Reflect.Loader = curLoader;
	          return self.newModule({ 'default': __global[self.transpiler], __useDefault: true });
	        }
	      };
	    }
	  });
	};// SystemJS Loader Class and Extension helpers

	function SystemJSLoader() {
	  SystemLoader.call(this);

	  systemJSConstructor.call(this);
	}

	// inline Object.create-style class extension
	function SystemProto() {};
	SystemProto.prototype = SystemLoader.prototype;
	SystemJSLoader.prototype = new SystemProto();
	SystemJSLoader.prototype.constructor = SystemJSLoader;

	// remove ESML instantiate
	SystemJSLoader.prototype.instantiate = function() {};

	var systemJSConstructor;

	function hook(name, hook) {
	  SystemJSLoader.prototype[name] = hook(SystemJSLoader.prototype[name] || function() {});
	}
	function hookConstructor(hook) {
	  systemJSConstructor = hook(systemJSConstructor || function() {});
	}

	function dedupe(deps) {
	  var newDeps = [];
	  for (var i = 0, l = deps.length; i < l; i++)
	    if (indexOf.call(newDeps, deps[i]) == -1)
	      newDeps.push(deps[i])
	  return newDeps;
	}

	function group(deps) {
	  var names = [];
	  var indices = [];
	  for (var i = 0, l = deps.length; i < l; i++) {
	    var index = indexOf.call(names, deps[i]);
	    if (index === -1) {
	      names.push(deps[i]);
	      indices.push([i]);
	    }
	    else {
	      indices[index].push(i);
	    }
	  }
	  return { names: names, indices: indices };
	}

	var getOwnPropertyDescriptor = true;
	try {
	  Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
	}
	catch(e) {
	  getOwnPropertyDescriptor = false;
	}

	// converts any module.exports object into an object ready for SystemJS.newModule
	function getESModule(exports) {
	  var esModule = {};
	  // don't trigger getters/setters in environments that support them
	  if (typeof exports == 'object' || typeof exports == 'function') {
	    if (getOwnPropertyDescriptor) {
	      var d;
	      for (var p in exports)
	        if (d = Object.getOwnPropertyDescriptor(exports, p))
	          defineProperty(esModule, p, d);
	    }
	    else {
	      var hasOwnProperty = exports && exports.hasOwnProperty;
	      for (var p in exports) {
	        if (!hasOwnProperty || exports.hasOwnProperty(p))
	          esModule[p] = exports[p];
	      }
	    }
	  }
	  esModule['default'] = exports;
	  defineProperty(esModule, '__useDefault', {
	    value: true
	  });
	  return esModule;
	}

	function extend(a, b, prepend) {
	  for (var p in b) {
	    if (!prepend || !(p in a))
	      a[p] = b[p];
	  }
	  return a;
	}

	// package configuration options
	var packageProperties = ['main', 'format', 'defaultExtension', 'meta', 'map', 'basePath', 'depCache'];

	// meta first-level extends where:
	// array + array appends
	// object + object extends
	// other properties replace
	function extendMeta(a, b, prepend) {
	  for (var p in b) {
	    var val = b[p];
	    if (!(p in a))
	      a[p] = val;
	    else if (val instanceof Array && a[p] instanceof Array)
	      a[p] = [].concat(prepend ? val : a[p]).concat(prepend ? a[p] : val);
	    else if (typeof val == 'object' && val !== null && typeof a[p] == 'object')
	      a[p] = extend(extend({}, a[p]), val, prepend);
	    else if (!prepend)
	      a[p] = val;
	  }
	}

	function warn(msg) {
	  if (this.warnings && typeof console != 'undefined' && console.warn)
	    console.warn(msg);
	}/*
	 * Script tag fetch
	 *
	 * When load.metadata.scriptLoad is true, we load via script tag injection.
	 */
	(function() {

	  if (typeof document != 'undefined')
	    var head = document.getElementsByTagName('head')[0];

	  var curSystem;

	  // if doing worker executing, this is set to the load record being executed
	  var workerLoad = null;
	  
	  // interactive mode handling method courtesy RequireJS
	  var ieEvents = head && (function() {
	    var s = document.createElement('script');
	    var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
	    return s.attachEvent && !(s.attachEvent.toString && s.attachEvent.toString().indexOf('[native code') < 0) && !isOpera;
	  })();

	  // IE interactive-only part
	  // we store loading scripts array as { script: <script>, load: {...} }
	  var interactiveLoadingScripts = [];
	  var interactiveScript;
	  function getInteractiveScriptLoad() {
	    if (interactiveScript && interactiveScript.script.readyState === 'interactive')
	      return interactiveScript.load;

	    for (var i = 0; i < interactiveLoadingScripts.length; i++)
	      if (interactiveLoadingScripts[i].script.readyState == 'interactive') {
	        interactiveScript = interactiveLoadingScripts[i];
	        return interactiveScript.load;
	      }
	  }
	  
	  // System.register, System.registerDynamic, AMD define pipeline
	  // this is called by the above methods when they execute
	  // we then run the reduceRegister_ collection function either immediately
	  // if we are in IE and know the currently executing script (interactive)
	  // or later if we need to wait for the synchronous load callback to know the script
	  var loadingCnt = 0;
	  var registerQueue = [];
	  hook('pushRegister_', function(pushRegister) {
	    return function(register) {
	      // if using eval-execution then skip
	      if (pushRegister.call(this, register))
	        return false;

	      // if using worker execution, then we're done
	      if (workerLoad)
	        this.reduceRegister_(workerLoad, register);

	      // detect if we know the currently executing load (IE)
	      // if so, immediately call reduceRegister
	      else if (ieEvents)
	        this.reduceRegister_(getInteractiveScriptLoad(), register);

	      // otherwise, add to our execution queue
	      // to call reduceRegister on sync script load event
	      else if (loadingCnt)
	        registerQueue.push(register);

	      // if we're not currently loading anything though
	      // then do the reduction against a null load
	      // (out of band named define or named register)
	      // note even in non-script environments, this catch is used
	      else
	        this.reduceRegister_(null, register);

	      return true;
	    };
	  });

	  function webWorkerImport(loader, load) {
	    return new Promise(function(resolve, reject) {
	      if (load.metadata.integrity)
	        reject(new Error('Subresource integrity checking is not supported in web workers.'));

	      workerLoad = load;
	      try {
	        importScripts(load.address);
	      }
	      catch(e) {
	        workerLoad = null;
	        reject(e);
	      }
	      workerLoad = null;

	      // if nothing registered, then something went wrong
	      if (!load.metadata.entry)
	        reject(new Error(load.address + ' did not call System.register or AMD define'));

	      resolve('');
	    });
	  }

	  // override fetch to use script injection
	  hook('fetch', function(fetch) {
	    return function(load) {
	      var loader = this;

	      if (load.metadata.format == 'json' || !load.metadata.scriptLoad || (!isBrowser && !isWorker))
	        return fetch.call(this, load);

	      if (isWorker)
	        return webWorkerImport(loader, load);

	      return new Promise(function(resolve, reject) {
	        var s = document.createElement('script');
	        
	        s.async = true;
	        
	        if (load.metadata.integrity)
	          s.setAttribute('integrity', load.metadata.integrity);

	        if (ieEvents) {
	          s.attachEvent('onreadystatechange', complete);
	          interactiveLoadingScripts.push({
	            script: s,
	            load: load
	          });
	        }
	        else {
	          s.addEventListener('load', complete, false);
	          s.addEventListener('error', error, false);
	        }

	        loadingCnt++;

	        curSystem = __global.System;

	        s.src = load.address;
	        head.appendChild(s);

	        function complete(evt) {
	          if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
	            return;

	          loadingCnt--;

	          // complete call is sync on execution finish
	          // (in ie already done reductions)
	          if (!load.metadata.entry && !registerQueue.length) {
	            loader.reduceRegister_(load);
	          }
	          else if (!ieEvents) {
	            for (var i = 0; i < registerQueue.length; i++)
	              loader.reduceRegister_(load, registerQueue[i]);
	            registerQueue = [];
	          }

	          cleanup();

	          // if nothing registered, then something went wrong
	          if (!load.metadata.entry && !load.metadata.bundle)
	            reject(new Error(load.name + ' did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.'));

	          resolve('');
	        }

	        function error(evt) {
	          cleanup();
	          reject(new Error('Unable to load script ' + load.address));
	        }

	        function cleanup() {
	          __global.System = curSystem;

	          if (s.detachEvent) {
	            s.detachEvent('onreadystatechange', complete);
	            for (var i = 0; i < interactiveLoadingScripts.length; i++)
	              if (interactiveLoadingScripts[i].script == s) {
	                if (interactiveScript && interactiveScript.script == s)
	                  interactiveScript = null;
	                interactiveLoadingScripts.splice(i, 1);
	              }
	          }
	          else {
	            s.removeEventListener('load', complete, false);
	            s.removeEventListener('error', error, false);
	          }

	          head.removeChild(s);
	        }
	      });
	    };
	  });
	})();
	/*
	 * Instantiate registry extension
	 *
	 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
	 *
	 * - Creates the loader.register function
	 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
	 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
	 *     for handling dynamic modules alongside register-transformed ES6 modules
	 *
	 *
	 * The code here replicates the ES6 linking groups algorithm to ensure that
	 * circular ES6 compiled into System.register can work alongside circular AMD 
	 * and CommonJS, identically to the actual ES6 loader.
	 *
	 */


	/*
	 * Registry side table entries in loader.defined
	 * Registry Entry Contains:
	 *    - name
	 *    - deps 
	 *    - declare for declarative modules
	 *    - execute for dynamic modules, different to declarative execute on module
	 *    - executingRequire indicates require drives execution for circularity of dynamic modules
	 *    - declarative optional boolean indicating which of the above
	 *
	 * Can preload modules directly on SystemJS.defined['my/module'] = { deps, execute, executingRequire }
	 *
	 * Then the entry gets populated with derived information during processing:
	 *    - normalizedDeps derived from deps, created in instantiate
	 *    - groupIndex used by group linking algorithm
	 *    - evaluated indicating whether evaluation has happend
	 *    - module the module record object, containing:
	 *      - exports actual module exports
	 *
	 *    For dynamic we track the es module with:
	 *    - esModule actual es module value
	 *    - esmExports whether to extend the esModule with named exports
	 *      
	 *    Then for declarative only we track dynamic bindings with the 'module' records:
	 *      - name
	 *      - exports
	 *      - setters declarative setter functions
	 *      - dependencies, module records of dependencies
	 *      - importers, module records of dependents
	 *
	 * After linked and evaluated, entries are removed, declarative module records remain in separate
	 * module binding table
	 *
	 */

	var leadingCommentAndMetaRegEx = /^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
	function detectRegisterFormat(source) {
	  var leadingCommentAndMeta = source.match(leadingCommentAndMetaRegEx);
	  return leadingCommentAndMeta && source.substr(leadingCommentAndMeta[0].length, 15) == 'System.register';
	}

	function createEntry() {
	  return {
	    name: null,
	    deps: null,
	    originalIndices: null,
	    declare: null,
	    execute: null,
	    executingRequire: false,
	    declarative: false,
	    normalizedDeps: null,
	    groupIndex: null,
	    evaluated: false,
	    module: null,
	    esModule: null,
	    esmExports: false
	  };
	}

	(function() {

	  /*
	   * There are two variations of System.register:
	   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
	   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
	   *
	   * 2. System.registerDynamic for dynamic modules (3-4 params) - System.registerDynamic([name, ]deps, executingRequire, execute)
	   * the true or false statement 
	   *
	   * this extension implements the linking algorithm for the two variations identical to the spec
	   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
	   *
	   */
	  SystemJSLoader.prototype.register = function(name, deps, declare) {
	    if (typeof name != 'string') {
	      declare = deps;
	      deps = name;
	      name = null;
	    }

	    // dynamic backwards-compatibility
	    // can be deprecated eventually
	    if (typeof declare == 'boolean')
	      return this.registerDynamic.apply(this, arguments);

	    var entry = createEntry();
	    // ideally wouldn't apply map config to bundle names but 
	    // dependencies go through map regardless so we can't restrict
	    // could reconsider in shift to new spec
	    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
	    entry.declarative = true;
	    entry.deps = deps;
	    entry.declare = declare;

	    this.pushRegister_({
	      amd: false,
	      entry: entry
	    });
	  };
	  SystemJSLoader.prototype.registerDynamic = function(name, deps, declare, execute) {
	    if (typeof name != 'string') {
	      execute = declare;
	      declare = deps;
	      deps = name;
	      name = null;
	    }

	    // dynamic
	    var entry = createEntry();
	    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
	    entry.deps = deps;
	    entry.execute = execute;
	    entry.executingRequire = declare;

	    this.pushRegister_({
	      amd: false,
	      entry: entry
	    });
	  };
	  hook('reduceRegister_', function() {
	    return function(load, register) {
	      if (!register)
	        return;

	      var entry = register.entry;
	      var curMeta = load && load.metadata;

	      // named register
	      if (entry.name) {
	        if (!(entry.name in this.defined))
	          this.defined[entry.name] = entry;

	        if (curMeta)
	          curMeta.bundle = true;
	      }
	      // anonymous register
	      if (!entry.name || load && entry.name == load.name) {
	        if (!curMeta)
	          throw new TypeError('Unexpected anonymous System.register call.');
	        if (curMeta.entry) {
	          if (curMeta.format == 'register')
	            throw new Error('Multiple anonymous System.register calls in module ' + load.name + '. If loading a bundle, ensure all the System.register calls are named.');
	          else
	            throw new Error('Module ' + load.name + ' interpreted as ' + curMeta.format + ' module format, but called System.register.');
	        }
	        if (!curMeta.format)
	          curMeta.format = 'register';
	        curMeta.entry = entry;
	      }
	    };
	  });

	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);

	      this.defined = {};
	      this._loader.moduleRecords = {};
	    };
	  });

	  function buildGroups(entry, loader, groups) {
	    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

	    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
	      return;

	    groups[entry.groupIndex].push(entry);

	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      var depEntry = loader.defined[depName];
	      
	      // not in the registry means already linked / ES6
	      if (!depEntry || depEntry.evaluated)
	        continue;
	      
	      // now we know the entry is in our unlinked linkage group
	      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

	      // the group index of an entry is always the maximum
	      if (depEntry.groupIndex === null || depEntry.groupIndex < depGroupIndex) {
	        
	        // if already in a group, remove from the old group
	        if (depEntry.groupIndex !== null) {
	          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

	          // if the old group is empty, then we have a mixed depndency cycle
	          if (groups[depEntry.groupIndex].length == 0)
	            throw new Error("Mixed dependency cycle detected");
	        }

	        depEntry.groupIndex = depGroupIndex;
	      }

	      buildGroups(depEntry, loader, groups);
	    }
	  }

	  function link(name, loader) {
	    var startEntry = loader.defined[name];

	    // skip if already linked
	    if (startEntry.module)
	      return;

	    startEntry.groupIndex = 0;

	    var groups = [];

	    buildGroups(startEntry, loader, groups);

	    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
	    for (var i = groups.length - 1; i >= 0; i--) {
	      var group = groups[i];
	      for (var j = 0; j < group.length; j++) {
	        var entry = group[j];

	        // link each group
	        if (curGroupDeclarative)
	          linkDeclarativeModule(entry, loader);
	        else
	          linkDynamicModule(entry, loader);
	      }
	      curGroupDeclarative = !curGroupDeclarative; 
	    }
	  }

	  // module binding records
	  function Module() {}
	  defineProperty(Module, 'toString', {
	    value: function() {
	      return 'Module';
	    }
	  });

	  function getOrCreateModuleRecord(name, moduleRecords) {
	    return moduleRecords[name] || (moduleRecords[name] = {
	      name: name,
	      dependencies: [],
	      exports: new Module(), // start from an empty module and extend
	      importers: []
	    });
	  }

	  function linkDeclarativeModule(entry, loader) {
	    // only link if already not already started linking (stops at circular)
	    if (entry.module)
	      return;

	    var moduleRecords = loader._loader.moduleRecords;
	    var module = entry.module = getOrCreateModuleRecord(entry.name, moduleRecords);
	    var exports = entry.module.exports;

	    var declaration = entry.declare.call(__global, function(name, value) {
	      module.locked = true;

	      if (typeof name == 'object') {
	        for (var p in name)
	          exports[p] = name[p];
	      }
	      else {
	        exports[name] = value;
	      }

	      for (var i = 0, l = module.importers.length; i < l; i++) {
	        var importerModule = module.importers[i];
	        if (!importerModule.locked) {
	          var importerIndex = indexOf.call(importerModule.dependencies, module);
	          importerModule.setters[importerIndex](exports);
	        }
	      }

	      module.locked = false;
	      return value;
	    }, entry.name);
	    
	    module.setters = declaration.setters;
	    module.execute = declaration.execute;

	    if (!module.setters || !module.execute) {
	      throw new TypeError('Invalid System.register form for ' + entry.name);
	    }

	    // now link all the module dependencies
	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      var depEntry = loader.defined[depName];
	      var depModule = moduleRecords[depName];

	      // work out how to set depExports based on scenarios...
	      var depExports;

	      if (depModule) {
	        depExports = depModule.exports;
	      }
	      // dynamic, already linked in our registry
	      else if (depEntry && !depEntry.declarative) {
	        depExports = depEntry.esModule;
	      }
	      // in the loader registry
	      else if (!depEntry) {
	        depExports = loader.get(depName);
	      }
	      // we have an entry -> link
	      else {
	        linkDeclarativeModule(depEntry, loader);
	        depModule = depEntry.module;
	        depExports = depModule.exports;
	      }

	      // only declarative modules have dynamic bindings
	      if (depModule && depModule.importers) {
	        depModule.importers.push(module);
	        module.dependencies.push(depModule);
	      }
	      else {
	        module.dependencies.push(null);
	      }
	      
	      // run setters for all entries with the matching dependency name
	      var originalIndices = entry.originalIndices[i];
	      for (var j = 0, len = originalIndices.length; j < len; ++j) {
	        var index = originalIndices[j];
	        if (module.setters[index]) {
	          module.setters[index](depExports);
	        }
	      }
	    }
	  }

	  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
	  function getModule(name, loader) {
	    var exports;
	    var entry = loader.defined[name];

	    if (!entry) {
	      exports = loader.get(name);
	      if (!exports)
	        throw new Error('Unable to load dependency ' + name + '.');
	    }

	    else {
	      if (entry.declarative)
	        ensureEvaluated(name, [], loader);
	    
	      else if (!entry.evaluated)
	        linkDynamicModule(entry, loader);

	      exports = entry.module.exports;
	    }

	    if ((!entry || entry.declarative) && exports && exports.__useDefault)
	      return exports['default'];
	    
	    return exports;
	  }

	  function linkDynamicModule(entry, loader) {
	    if (entry.module)
	      return;

	    var exports = {};

	    var module = entry.module = { exports: exports, id: entry.name };

	    // AMD requires execute the tree first
	    if (!entry.executingRequire) {
	      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	        var depName = entry.normalizedDeps[i];
	        // we know we only need to link dynamic due to linking algorithm
	        var depEntry = loader.defined[depName];
	        if (depEntry)
	          linkDynamicModule(depEntry, loader);
	      }
	    }

	    // now execute
	    entry.evaluated = true;
	    var output = entry.execute.call(__global, function(name) {
	      for (var i = 0, l = entry.deps.length; i < l; i++) {
	        if (entry.deps[i] != name)
	          continue;
	        return getModule(entry.normalizedDeps[i], loader);
	      }
	      throw new Error('Module ' + name + ' not declared as a dependency.');
	    }, exports, module);
	    
	    if (output)
	      module.exports = output;

	    // create the esModule object, which allows ES6 named imports of dynamics
	    exports = module.exports;

	    // __esModule flag treats as already-named
	    if (exports && exports.__esModule)
	      entry.esModule = exports;
	    // set module as 'default' export, then fake named exports by iterating properties
	    else if (entry.esmExports && exports !== __global)
	      entry.esModule = getESModule(exports);
	    // just use the 'default' export
	    else
	      entry.esModule = { 'default': exports };
	  }

	  /*
	   * Given a module, and the list of modules for this current branch,
	   *  ensure that each of the dependencies of this module is evaluated
	   *  (unless one is a circular dependency already in the list of seen
	   *  modules, in which case we execute it)
	   *
	   * Then we evaluate the module itself depth-first left to right 
	   * execution to match ES6 modules
	   */
	  function ensureEvaluated(moduleName, seen, loader) {
	    var entry = loader.defined[moduleName];

	    // if already seen, that means it's an already-evaluated non circular dependency
	    if (!entry || entry.evaluated || !entry.declarative)
	      return;

	    // this only applies to declarative modules which late-execute

	    seen.push(moduleName);

	    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
	      var depName = entry.normalizedDeps[i];
	      if (indexOf.call(seen, depName) == -1) {
	        if (!loader.defined[depName])
	          loader.get(depName);
	        else
	          ensureEvaluated(depName, seen, loader);
	      }
	    }

	    if (entry.evaluated)
	      return;

	    entry.evaluated = true;
	    entry.module.execute.call(__global);
	  }

	  // override the delete method to also clear the register caches
	  hook('delete', function(del) {
	    return function(name) {
	      delete this._loader.moduleRecords[name];
	      delete this.defined[name];
	      return del.call(this, name);
	    };
	  });

	  hook('fetch', function(fetch) {
	    return function(load) {
	      if (this.defined[load.name]) {
	        load.metadata.format = 'defined';
	        return '';
	      }
	      
	      if (load.metadata.format == 'register' && !load.metadata.authorization && load.metadata.scriptLoad !== false)
	        load.metadata.scriptLoad = true;

	      load.metadata.deps = load.metadata.deps || [];
	      
	      return fetch.call(this, load);
	    };
	  });

	  hook('translate', function(translate) {
	    // we run the meta detection here (register is after meta)
	    return function(load) {
	      load.metadata.deps = load.metadata.deps || [];
	      return Promise.resolve(translate.call(this, load)).then(function(source) {
	        // run detection for register format
	        if (load.metadata.format == 'register' || !load.metadata.format && detectRegisterFormat(load.source))
	          load.metadata.format = 'register';
	        return source;
	      });
	    };
	  });

	  hook('instantiate', function(instantiate) {
	    return function(load) {
	      if (load.metadata.format == 'detect')
	        load.metadata.format = undefined;

	      // assumes previous instantiate is sync
	      // (core json support)
	      instantiate.call(this, load);

	      var loader = this;

	      var entry;

	      // first we check if this module has already been defined in the registry
	      if (loader.defined[load.name]) {
	        entry = loader.defined[load.name];
	        // don't support deps for ES modules
	        if (!entry.declarative)
	          entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // picked up already by an anonymous System.register script injection
	      // or via the dynamic formats
	      else if (load.metadata.entry) {
	        entry = load.metadata.entry;
	        entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // Contains System.register calls
	      // (dont run bundles in the builder)
	      else if (!(loader.builder && load.metadata.bundle) 
	          && (load.metadata.format == 'register' || load.metadata.format == 'esm' || load.metadata.format == 'es6')) {
	        
	        if (typeof __exec != 'undefined')
	          __exec.call(loader, load);

	        if (!load.metadata.entry && !load.metadata.bundle)
	          throw new Error(load.name + ' detected as ' + load.metadata.format + ' but didn\'t execute.');

	        entry = load.metadata.entry;

	        // support metadata deps for System.register
	        if (entry && load.metadata.deps)
	          entry.deps = entry.deps.concat(load.metadata.deps);
	      }

	      // named bundles are just an empty module
	      if (!entry) {
	        entry = createEntry();
	        entry.deps = load.metadata.deps;
	        entry.execute = function() {};
	      }

	      // place this module onto defined for circular references
	      loader.defined[load.name] = entry;
	      
	      var grouped = group(entry.deps);
	      
	      entry.deps = grouped.names;
	      entry.originalIndices = grouped.indices;
	      entry.name = load.name;
	      entry.esmExports = load.metadata.esmExports !== false;

	      // first, normalize all dependencies
	      var normalizePromises = [];
	      for (var i = 0, l = entry.deps.length; i < l; i++)
	        normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

	      return Promise.all(normalizePromises).then(function(normalizedDeps) {

	        entry.normalizedDeps = normalizedDeps;

	        return {
	          deps: entry.deps,
	          execute: function() {
	            // recursively ensure that the module and all its 
	            // dependencies are linked (with dependency group handling)
	            link(load.name, loader);

	            // now handle dependency execution in correct order
	            ensureEvaluated(load.name, [], loader);

	            // remove from the registry
	            loader.defined[load.name] = undefined;

	            // return the defined module object
	            return loader.newModule(entry.declarative ? entry.module.exports : entry.esModule);
	          }
	        };
	      });
	    };
	  });
	})();
	/*
	  System bundles

	  Allows a bundle module to be specified which will be dynamically 
	  loaded before trying to load a given module.

	  For example:
	  SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

	  Will result in a load to "mybundle" whenever a load to "jquery"
	  or "bootstrap/js/bootstrap" is made.

	  In this way, the bundle becomes the request that provides the module
	*/

	(function() {
	  // bundles support (just like RequireJS)
	  // bundle name is module name of bundle itself
	  // bundle is array of modules defined by the bundle
	  // when a module in the bundle is requested, the bundle is loaded instead
	  // of the form SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
	  hookConstructor(function(constructor) {
	    return function() {
	      constructor.call(this);
	      this.bundles = {};
	      this._loader.loadedBundles = {};
	    };
	  });

	  // assign bundle metadata for bundle loads
	  hook('locate', function(locate) {
	    return function(load) {
	      var loader = this;
	      var matched = false;

	      if (!(load.name in loader.defined))
	        for (var b in loader.bundles) {
	          for (var i = 0; i < loader.bundles[b].length; i++) {
	            var curModule = loader.bundles[b][i];

	            if (curModule == load.name) {
	              matched = true;
	              break;
	            }

	            // wildcard in bundles does not include / boundaries
	            if (curModule.indexOf('*') != -1) {
	              var parts = curModule.split('*');
	              if (parts.length != 2) {
	                loader.bundles[b].splice(i--, 1);
	                continue;
	              }
	              
	              if (load.name.substring(0, parts[0].length) == parts[0] &&
	                  load.name.substr(load.name.length - parts[1].length, parts[1].length) == parts[1] &&
	                  load.name.substr(parts[0].length, load.name.length - parts[1].length - parts[0].length).indexOf('/') == -1) {
	                matched = true;
	                break;
	              }
	            }
	          }

	          if (matched)
	            return loader['import'](b)
	            .then(function() {
	              return locate.call(loader, load);
	            });
	        }

	      return locate.call(loader, load);
	    };
	  });
	})();
	/*
	 * Script-only addition used for production loader
	 *
	 */
	hookConstructor(function(constructor) {
	  return function() {
	    constructor.apply(this, arguments);

	    // prepare amd define
	    if (this.has('@@amd-helpers'))
	      this.get('@@amd-helpers').createDefine();
	  };
	});

	hook('fetch', function(fetch) {
	  return function(load) {
	    load.metadata.scriptLoad = true;
	    return fetch.call(this, load);
	  };
	});System = new SystemJSLoader();

	__global.SystemJS = System;
	System.version = '0.19.18 Register Only';
	  // -- exporting --

	  if (true)
	    module.exports = Loader;

	  __global.Reflect = __global.Reflect || {};
	  __global.Reflect.Loader = __global.Reflect.Loader || Loader;
	  __global.Reflect.global = __global.Reflect.global || __global;
	  __global.LoaderPolyfill = Loader;

	  if (!System) {
	    System = new SystemLoader();
	    System.constructor = SystemLoader;
	  }

	  if (true)
	    module.exports = System;

	  __global.System = System;

	})(typeof self != 'undefined' ? self : global);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ }
/******/ ]);