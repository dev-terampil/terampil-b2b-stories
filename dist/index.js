"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
    } catch (e) {
      no(e);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x) => obj[k](x);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw") throw v;
        return v;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x = obj[k](v);
          if (!(x instanceof Object)) __typeError("Object expected");
          resolve(x);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
    throw x;
  }, "return" in obj && method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// node_modules/delayed-stream/lib/delayed_stream.js
var require_delayed_stream = __commonJS({
  "node_modules/delayed-stream/lib/delayed_stream.js"(exports, module) {
    "use strict";
    var Stream = __require("stream").Stream;
    var util3 = __require("util");
    module.exports = DelayedStream;
    function DelayedStream() {
      this.source = null;
      this.dataSize = 0;
      this.maxDataSize = 1024 * 1024;
      this.pauseStream = true;
      this._maxDataSizeExceeded = false;
      this._released = false;
      this._bufferedEvents = [];
    }
    util3.inherits(DelayedStream, Stream);
    DelayedStream.create = function(source, options) {
      var delayedStream = new this();
      options = options || {};
      for (var option in options) {
        delayedStream[option] = options[option];
      }
      delayedStream.source = source;
      var realEmit = source.emit;
      source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
      };
      source.on("error", function() {
      });
      if (delayedStream.pauseStream) {
        source.pause();
      }
      return delayedStream;
    };
    Object.defineProperty(DelayedStream.prototype, "readable", {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.source.readable;
      }
    });
    DelayedStream.prototype.setEncoding = function() {
      return this.source.setEncoding.apply(this.source, arguments);
    };
    DelayedStream.prototype.resume = function() {
      if (!this._released) {
        this.release();
      }
      this.source.resume();
    };
    DelayedStream.prototype.pause = function() {
      this.source.pause();
    };
    DelayedStream.prototype.release = function() {
      this._released = true;
      this._bufferedEvents.forEach(function(args) {
        this.emit.apply(this, args);
      }.bind(this));
      this._bufferedEvents = [];
    };
    DelayedStream.prototype.pipe = function() {
      var r = Stream.prototype.pipe.apply(this, arguments);
      this.resume();
      return r;
    };
    DelayedStream.prototype._handleEmit = function(args) {
      if (this._released) {
        this.emit.apply(this, args);
        return;
      }
      if (args[0] === "data") {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
      }
      this._bufferedEvents.push(args);
    };
    DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
      if (this._maxDataSizeExceeded) {
        return;
      }
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      this._maxDataSizeExceeded = true;
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this.emit("error", new Error(message));
    };
  }
});

// node_modules/combined-stream/lib/combined_stream.js
var require_combined_stream = __commonJS({
  "node_modules/combined-stream/lib/combined_stream.js"(exports, module) {
    "use strict";
    var util3 = __require("util");
    var Stream = __require("stream").Stream;
    var DelayedStream = require_delayed_stream();
    module.exports = CombinedStream;
    function CombinedStream() {
      this.writable = false;
      this.readable = true;
      this.dataSize = 0;
      this.maxDataSize = 2 * 1024 * 1024;
      this.pauseStreams = true;
      this._released = false;
      this._streams = [];
      this._currentStream = null;
      this._insideLoop = false;
      this._pendingNext = false;
    }
    util3.inherits(CombinedStream, Stream);
    CombinedStream.create = function(options) {
      var combinedStream = new this();
      options = options || {};
      for (var option in options) {
        combinedStream[option] = options[option];
      }
      return combinedStream;
    };
    CombinedStream.isStreamLike = function(stream4) {
      return typeof stream4 !== "function" && typeof stream4 !== "string" && typeof stream4 !== "boolean" && typeof stream4 !== "number" && !Buffer.isBuffer(stream4);
    };
    CombinedStream.prototype.append = function(stream4) {
      var isStreamLike = CombinedStream.isStreamLike(stream4);
      if (isStreamLike) {
        if (!(stream4 instanceof DelayedStream)) {
          var newStream = DelayedStream.create(stream4, {
            maxDataSize: Infinity,
            pauseStream: this.pauseStreams
          });
          stream4.on("data", this._checkDataSize.bind(this));
          stream4 = newStream;
        }
        this._handleErrors(stream4);
        if (this.pauseStreams) {
          stream4.pause();
        }
      }
      this._streams.push(stream4);
      return this;
    };
    CombinedStream.prototype.pipe = function(dest, options) {
      Stream.prototype.pipe.call(this, dest, options);
      this.resume();
      return dest;
    };
    CombinedStream.prototype._getNext = function() {
      this._currentStream = null;
      if (this._insideLoop) {
        this._pendingNext = true;
        return;
      }
      this._insideLoop = true;
      try {
        do {
          this._pendingNext = false;
          this._realGetNext();
        } while (this._pendingNext);
      } finally {
        this._insideLoop = false;
      }
    };
    CombinedStream.prototype._realGetNext = function() {
      var stream4 = this._streams.shift();
      if (typeof stream4 == "undefined") {
        this.end();
        return;
      }
      if (typeof stream4 !== "function") {
        this._pipeNext(stream4);
        return;
      }
      var getStream = stream4;
      getStream(function(stream5) {
        var isStreamLike = CombinedStream.isStreamLike(stream5);
        if (isStreamLike) {
          stream5.on("data", this._checkDataSize.bind(this));
          this._handleErrors(stream5);
        }
        this._pipeNext(stream5);
      }.bind(this));
    };
    CombinedStream.prototype._pipeNext = function(stream4) {
      this._currentStream = stream4;
      var isStreamLike = CombinedStream.isStreamLike(stream4);
      if (isStreamLike) {
        stream4.on("end", this._getNext.bind(this));
        stream4.pipe(this, { end: false });
        return;
      }
      var value = stream4;
      this.write(value);
      this._getNext();
    };
    CombinedStream.prototype._handleErrors = function(stream4) {
      var self2 = this;
      stream4.on("error", function(err) {
        self2._emitError(err);
      });
    };
    CombinedStream.prototype.write = function(data) {
      this.emit("data", data);
    };
    CombinedStream.prototype.pause = function() {
      if (!this.pauseStreams) {
        return;
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
      this.emit("pause");
    };
    CombinedStream.prototype.resume = function() {
      if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
      this.emit("resume");
    };
    CombinedStream.prototype.end = function() {
      this._reset();
      this.emit("end");
    };
    CombinedStream.prototype.destroy = function() {
      this._reset();
      this.emit("close");
    };
    CombinedStream.prototype._reset = function() {
      this.writable = false;
      this._streams = [];
      this._currentStream = null;
    };
    CombinedStream.prototype._checkDataSize = function() {
      this._updateDataSize();
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this._emitError(new Error(message));
    };
    CombinedStream.prototype._updateDataSize = function() {
      this.dataSize = 0;
      var self2 = this;
      this._streams.forEach(function(stream4) {
        if (!stream4.dataSize) {
          return;
        }
        self2.dataSize += stream4.dataSize;
      });
      if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
      }
    };
    CombinedStream.prototype._emitError = function(err) {
      this._reset();
      this.emit("error", err);
    };
  }
});

// node_modules/mime-db/db.json
var require_db = __commonJS({
  "node_modules/mime-db/db.json"(exports, module) {
    module.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: true
      },
      "application/3gpphal+json": {
        source: "iana",
        compressible: true
      },
      "application/3gpphalforms+json": {
        source: "iana",
        compressible: true
      },
      "application/a2l": {
        source: "iana"
      },
      "application/ace+cbor": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: true
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/at+jwt": {
        source: "iana"
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: true
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: true
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: false
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/calendar+json": {
        source: "iana",
        compressible: true
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/captive+json": {
        source: "iana",
        compressible: true
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: true
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: true
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: true
      },
      "application/cfw": {
        source: "iana"
      },
      "application/city+json": {
        source: "iana",
        compressible: true
      },
      "application/clr": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: true
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: true
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: true
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cpl"]
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: true
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/csvm+json": {
        source: "iana",
        compressible: true
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: true
      },
      "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpd"]
      },
      "application/dash-patch+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpp"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: true
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: true
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: true
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: ["es", "ecma"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: false
      },
      "application/edifact": {
        source: "iana",
        compressible: false
      },
      "application/efi": {
        source: "iana"
      },
      "application/elm+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/elm+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: true
      },
      "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: true
      },
      "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: true
      },
      "application/express": {
        source: "iana",
        extensions: ["exp"]
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fido.trusted-apps+json": {
        compressible: true
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: false
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: true
      },
      "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: true
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: true
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: true
      },
      "application/jrd+json": {
        source: "iana",
        compressible: true
      },
      "application/jscalendar+json": {
        source: "iana",
        compressible: true
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: true
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: true
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: true
      },
      "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: false
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: true
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpf"]
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: true
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/missing-blocks+cbor-seq": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: true
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: true
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msword": {
        source: "iana",
        compressible: false,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: true
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: true
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/oauth-authz-req+jwt": {
        source: "iana"
      },
      "application/oblivious-dns-message": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: true
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/opc-nodeset+xml": {
        source: "iana",
        compressible: true
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p21": {
        source: "iana"
      },
      "application/p21+zip": {
        source: "iana",
        compressible: false
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana",
        extensions: ["asc"]
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+xml": {
        source: "iana",
        compressible: true
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.cyn": {
        source: "iana",
        charset: "7-BIT"
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: false
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: true
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: true,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: true
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: true
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: true
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: true
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/sarif+json": {
        source: "iana",
        compressible: true
      },
      "application/sarif-external-properties+json": {
        source: "iana",
        compressible: true
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: true
      },
      "application/scim+json": {
        source: "iana",
        compressible: true
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: true
      },
      "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: true
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: true
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: true
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: true
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: true
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: ["srx"]
      },
      "application/spdx+json": {
        source: "iana",
        compressible: true
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: true
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: true
      },
      "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: true
      },
      "application/taxii+json": {
        source: "iana",
        compressible: true
      },
      "application/td+json": {
        source: "iana",
        compressible: true
      },
      "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: true
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/token-introspection+jwt": {
        source: "iana"
      },
      "application/toml": {
        compressible: true,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana",
        extensions: ["trig"]
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ubjson": {
        compressible: false,
        extensions: ["ubj"]
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["td"]
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vcard+json": {
        source: "iana",
        compressible: true
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: true
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.5gnas": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gtpc": {
        source: "iana"
      },
      "application/vnd.3gpp.interworking-data": {
        source: "iana"
      },
      "application/vnd.3gpp.lpp": {
        source: "iana"
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ngap": {
        source: "iana"
      },
      "application/vnd.3gpp.pfcp": {
        source: "iana"
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.s1ap": {
        source: "iana"
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.cmoca-cmresource": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-cmtable": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.age": {
        source: "iana",
        extensions: ["age"]
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.arrow.file": {
        source: "iana"
      },
      "application/vnd.apache.arrow.stream": {
        source: "iana"
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["key"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: false,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.cryptomator.encrypted": {
        source: "iana"
      },
      "application/vnd.cryptomator.vault": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.cyclonedx+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cyclonedx+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.d3m-dataset": {
        source: "iana"
      },
      "application/vnd.d3m-problem": {
        source: "iana"
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dbf": {
        source: "iana",
        extensions: ["dbf"]
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.eclipse.ditto+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eu.kasparian.car+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.familysearch.gedcom+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujifilm.fb.docuworks": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.binder": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.jfi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.slides": {
        source: "iana"
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: false,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: false,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: false,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hl7cda+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hl7v2+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: ["mvt"]
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.maxar.archive.3tz+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-outlook": {
        compressible: false,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.nacamar.ybrid+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nebumind.line": {
        source: "iana"
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+cbor": {
        source: "iana"
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osm"]
      },
      "application/vnd.opentimestamps.ots": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana",
        extensions: ["rar"]
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.resilient.logic": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.seis+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.sycle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.syft+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veritone.aion+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.dpp": {
        source: "iana"
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: true
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wif"]
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: true
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: false,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: false
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: true,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-iwork-keynote-sffkey": {
        extensions: ["key"]
      },
      "application/x-iwork-numbers-sffnumbers": {
        extensions: ["numbers"]
      },
      "application/x-iwork-pages-sffpages": {
        extensions: ["pages"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: true
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: false
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: true,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: true,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: true,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: true,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: true,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: false,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: true,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: true,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: true,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: true,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: true
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: true
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: true
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xsl", "xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: false,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana",
        extensions: ["amr"]
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: false
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: false,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["oga", "ogg", "spx", "opus"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/scip": {
        source: "iana"
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sofa": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/tsvcis": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: false
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: false
      },
      "audio/vorbis": {
        source: "iana",
        compressible: false
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: true,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: false,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana",
        extensions: ["avci"]
      },
      "image/avcs": {
        source: "iana",
        extensions: ["avcs"]
      },
      "image/avif": {
        source: "iana",
        compressible: false,
        extensions: ["avif"]
      },
      "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: false,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/ktx2": {
        source: "iana",
        extensions: ["ktx2"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: false
      },
      "image/png": {
        source: "iana",
        compressible: false,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        compressible: true,
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.pco.b16": {
        source: "iana",
        extensions: ["b16"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: false
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: [
          "disposition-notification"
        ]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: false
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: true
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: false
      },
      "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/e57": {
        source: "iana"
      },
      "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: false,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/step": {
        source: "iana"
      },
      "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: ["stpx"]
      },
      "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpz"]
      },
      "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpxz"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: true
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.pytha.pyox": {
        source: "iana"
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.sap.vds": {
        source: "iana",
        extensions: ["vds"]
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: false
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: false
      },
      "multipart/form-data": {
        source: "iana",
        compressible: false
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: false
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: false
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: true
      },
      "text/cmd": {
        compressible: true
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/cql": {
        source: "iana"
      },
      "text/cql-expression": {
        source: "iana"
      },
      "text/cql-identifier": {
        source: "iana"
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: true,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/fhirpath": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/gff3": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: true,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: true
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: true,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: true,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: true,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: true,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shaclc": {
        source: "iana"
      },
      "text/shex": {
        source: "iana",
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/spdx": {
        source: "iana",
        extensions: ["spdx"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: ["ged"]
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hans": {
        source: "iana"
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: true
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: true
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: true,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: true,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: true,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: true,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        compressible: true,
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/av1": {
        source: "iana"
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/ffv1": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana",
        extensions: ["m4s"]
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/jxsv": {
        source: "iana"
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/scip": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/vp9": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: false,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: true
      },
      "x-shader/x-vertex": {
        compressible: true
      }
    };
  }
});

// node_modules/mime-db/index.js
var require_mime_db = __commonJS({
  "node_modules/mime-db/index.js"(exports, module) {
    "use strict";
    module.exports = require_db();
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports) {
    "use strict";
    var db = require_mime_db();
    var extname = __require("path").extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = /* @__PURE__ */ Object.create(null);
    exports.lookup = lookup;
    exports.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports.extensions, exports.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports.charset(mime);
        if (charset2) mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    function lookup(path) {
      if (!path || typeof path !== "string") {
        return false;
      }
      var extension2 = extname("x." + path).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports.types[extension2] || false;
    }
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      });
    }
  }
});

// node_modules/asynckit/lib/defer.js
var require_defer = __commonJS({
  "node_modules/asynckit/lib/defer.js"(exports, module) {
    "use strict";
    module.exports = defer;
    function defer(fn) {
      var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
      if (nextTick) {
        nextTick(fn);
      } else {
        setTimeout(fn, 0);
      }
    }
  }
});

// node_modules/asynckit/lib/async.js
var require_async = __commonJS({
  "node_modules/asynckit/lib/async.js"(exports, module) {
    "use strict";
    var defer = require_defer();
    module.exports = async;
    function async(callback) {
      var isAsync = false;
      defer(function() {
        isAsync = true;
      });
      return function async_callback(err, result) {
        if (isAsync) {
          callback(err, result);
        } else {
          defer(function nextTick_callback() {
            callback(err, result);
          });
        }
      };
    }
  }
});

// node_modules/asynckit/lib/abort.js
var require_abort = __commonJS({
  "node_modules/asynckit/lib/abort.js"(exports, module) {
    "use strict";
    module.exports = abort;
    function abort(state) {
      Object.keys(state.jobs).forEach(clean.bind(state));
      state.jobs = {};
    }
    function clean(key) {
      if (typeof this.jobs[key] == "function") {
        this.jobs[key]();
      }
    }
  }
});

// node_modules/asynckit/lib/iterate.js
var require_iterate = __commonJS({
  "node_modules/asynckit/lib/iterate.js"(exports, module) {
    "use strict";
    var async = require_async();
    var abort = require_abort();
    module.exports = iterate;
    function iterate(list, iterator, state, callback) {
      var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
      state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        if (!(key in state.jobs)) {
          return;
        }
        delete state.jobs[key];
        if (error) {
          abort(state);
        } else {
          state.results[key] = output;
        }
        callback(error, state.results);
      });
    }
    function runJob(iterator, key, item, callback) {
      var aborter;
      if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
      } else {
        aborter = iterator(item, key, async(callback));
      }
      return aborter;
    }
  }
});

// node_modules/asynckit/lib/state.js
var require_state = __commonJS({
  "node_modules/asynckit/lib/state.js"(exports, module) {
    "use strict";
    module.exports = state;
    function state(list, sortMethod) {
      var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
      };
      if (sortMethod) {
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
          return sortMethod(list[a], list[b]);
        });
      }
      return initState;
    }
  }
});

// node_modules/asynckit/lib/terminator.js
var require_terminator = __commonJS({
  "node_modules/asynckit/lib/terminator.js"(exports, module) {
    "use strict";
    var abort = require_abort();
    var async = require_async();
    module.exports = terminator;
    function terminator(callback) {
      if (!Object.keys(this.jobs).length) {
        return;
      }
      this.index = this.size;
      abort(this);
      async(callback)(null, this.results);
    }
  }
});

// node_modules/asynckit/parallel.js
var require_parallel = __commonJS({
  "node_modules/asynckit/parallel.js"(exports, module) {
    "use strict";
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module.exports = parallel;
    function parallel(list, iterator, callback) {
      var state = initState(list);
      while (state.index < (state["keyedList"] || list).length) {
        iterate(list, iterator, state, function(error, result) {
          if (error) {
            callback(error, result);
            return;
          }
          if (Object.keys(state.jobs).length === 0) {
            callback(null, state.results);
            return;
          }
        });
        state.index++;
      }
      return terminator.bind(state, callback);
    }
  }
});

// node_modules/asynckit/serialOrdered.js
var require_serialOrdered = __commonJS({
  "node_modules/asynckit/serialOrdered.js"(exports, module) {
    "use strict";
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module.exports = serialOrdered;
    module.exports.ascending = ascending;
    module.exports.descending = descending;
    function serialOrdered(list, iterator, sortMethod, callback) {
      var state = initState(list, sortMethod);
      iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
          callback(error, result);
          return;
        }
        state.index++;
        if (state.index < (state["keyedList"] || list).length) {
          iterate(list, iterator, state, iteratorHandler);
          return;
        }
        callback(null, state.results);
      });
      return terminator.bind(state, callback);
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    function descending(a, b) {
      return -1 * ascending(a, b);
    }
  }
});

// node_modules/asynckit/serial.js
var require_serial = __commonJS({
  "node_modules/asynckit/serial.js"(exports, module) {
    "use strict";
    var serialOrdered = require_serialOrdered();
    module.exports = serial;
    function serial(list, iterator, callback) {
      return serialOrdered(list, iterator, null, callback);
    }
  }
});

// node_modules/asynckit/index.js
var require_asynckit = __commonJS({
  "node_modules/asynckit/index.js"(exports, module) {
    "use strict";
    module.exports = {
      parallel: require_parallel(),
      serial: require_serial(),
      serialOrdered: require_serialOrdered()
    };
  }
});

// node_modules/form-data/lib/populate.js
var require_populate = __commonJS({
  "node_modules/form-data/lib/populate.js"(exports, module) {
    "use strict";
    module.exports = function(dst, src) {
      Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop];
      });
      return dst;
    };
  }
});

// node_modules/form-data/lib/form_data.js
var require_form_data = __commonJS({
  "node_modules/form-data/lib/form_data.js"(exports, module) {
    "use strict";
    var CombinedStream = require_combined_stream();
    var util3 = __require("util");
    var path = __require("path");
    var http2 = __require("http");
    var https2 = __require("https");
    var parseUrl = __require("url").parse;
    var fs = __require("fs");
    var Stream = __require("stream").Stream;
    var mime = require_mime_types();
    var asynckit = require_asynckit();
    var populate = require_populate();
    module.exports = FormData3;
    util3.inherits(FormData3, CombinedStream);
    function FormData3(options) {
      if (!(this instanceof FormData3)) {
        return new FormData3(options);
      }
      this._overheadLength = 0;
      this._valueLength = 0;
      this._valuesToMeasure = [];
      CombinedStream.call(this);
      options = options || {};
      for (var option in options) {
        this[option] = options[option];
      }
    }
    FormData3.LINE_BREAK = "\r\n";
    FormData3.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    FormData3.prototype.append = function(field, value, options) {
      options = options || {};
      if (typeof options == "string") {
        options = { filename: options };
      }
      var append2 = CombinedStream.prototype.append.bind(this);
      if (typeof value == "number") {
        value = "" + value;
      }
      if (Array.isArray(value)) {
        this._error(new Error("Arrays are not supported."));
        return;
      }
      var header = this._multiPartHeader(field, value, options);
      var footer = this._multiPartFooter();
      append2(header);
      append2(value);
      append2(footer);
      this._trackLength(header, value, options);
    };
    FormData3.prototype._trackLength = function(header, value, options) {
      var valueLength = 0;
      if (options.knownLength != null) {
        valueLength += +options.knownLength;
      } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
      } else if (typeof value === "string") {
        valueLength = Buffer.byteLength(value);
      }
      this._valueLength += valueLength;
      this._overheadLength += Buffer.byteLength(header) + FormData3.LINE_BREAK.length;
      if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion")) && !(value instanceof Stream)) {
        return;
      }
      if (!options.knownLength) {
        this._valuesToMeasure.push(value);
      }
    };
    FormData3.prototype._lengthRetriever = function(value, callback) {
      if (value.hasOwnProperty("fd")) {
        if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
          callback(null, value.end + 1 - (value.start ? value.start : 0));
        } else {
          fs.stat(value.path, function(err, stat) {
            var fileSize;
            if (err) {
              callback(err);
              return;
            }
            fileSize = stat.size - (value.start ? value.start : 0);
            callback(null, fileSize);
          });
        }
      } else if (value.hasOwnProperty("httpVersion")) {
        callback(null, +value.headers["content-length"]);
      } else if (value.hasOwnProperty("httpModule")) {
        value.on("response", function(response) {
          value.pause();
          callback(null, +response.headers["content-length"]);
        });
        value.resume();
      } else {
        callback("Unknown stream");
      }
    };
    FormData3.prototype._multiPartHeader = function(field, value, options) {
      if (typeof options.header == "string") {
        return options.header;
      }
      var contentDisposition = this._getContentDisposition(value, options);
      var contentType = this._getContentType(value, options);
      var contents = "";
      var headers = {
        // add custom disposition as third element or keep it two elements if not
        "Content-Disposition": ["form-data", 'name="' + field + '"'].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        "Content-Type": [].concat(contentType || [])
      };
      if (typeof options.header == "object") {
        populate(headers, options.header);
      }
      var header;
      for (var prop in headers) {
        if (!headers.hasOwnProperty(prop)) continue;
        header = headers[prop];
        if (header == null) {
          continue;
        }
        if (!Array.isArray(header)) {
          header = [header];
        }
        if (header.length) {
          contents += prop + ": " + header.join("; ") + FormData3.LINE_BREAK;
        }
      }
      return "--" + this.getBoundary() + FormData3.LINE_BREAK + contents + FormData3.LINE_BREAK;
    };
    FormData3.prototype._getContentDisposition = function(value, options) {
      var filename, contentDisposition;
      if (typeof options.filepath === "string") {
        filename = path.normalize(options.filepath).replace(/\\/g, "/");
      } else if (options.filename || value.name || value.path) {
        filename = path.basename(options.filename || value.name || value.path);
      } else if (value.readable && value.hasOwnProperty("httpVersion")) {
        filename = path.basename(value.client._httpMessage.path || "");
      }
      if (filename) {
        contentDisposition = 'filename="' + filename + '"';
      }
      return contentDisposition;
    };
    FormData3.prototype._getContentType = function(value, options) {
      var contentType = options.contentType;
      if (!contentType && value.name) {
        contentType = mime.lookup(value.name);
      }
      if (!contentType && value.path) {
        contentType = mime.lookup(value.path);
      }
      if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
        contentType = value.headers["content-type"];
      }
      if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
      }
      if (!contentType && typeof value == "object") {
        contentType = FormData3.DEFAULT_CONTENT_TYPE;
      }
      return contentType;
    };
    FormData3.prototype._multiPartFooter = function() {
      return function(next) {
        var footer = FormData3.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
          footer += this._lastBoundary();
        }
        next(footer);
      }.bind(this);
    };
    FormData3.prototype._lastBoundary = function() {
      return "--" + this.getBoundary() + "--" + FormData3.LINE_BREAK;
    };
    FormData3.prototype.getHeaders = function(userHeaders) {
      var header;
      var formHeaders = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
      for (header in userHeaders) {
        if (userHeaders.hasOwnProperty(header)) {
          formHeaders[header.toLowerCase()] = userHeaders[header];
        }
      }
      return formHeaders;
    };
    FormData3.prototype.setBoundary = function(boundary) {
      this._boundary = boundary;
    };
    FormData3.prototype.getBoundary = function() {
      if (!this._boundary) {
        this._generateBoundary();
      }
      return this._boundary;
    };
    FormData3.prototype.getBuffer = function() {
      var dataBuffer = new Buffer.alloc(0);
      var boundary = this.getBoundary();
      for (var i = 0, len = this._streams.length; i < len; i++) {
        if (typeof this._streams[i] !== "function") {
          if (Buffer.isBuffer(this._streams[i])) {
            dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
          } else {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
          }
          if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData3.LINE_BREAK)]);
          }
        }
      }
      return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
    };
    FormData3.prototype._generateBoundary = function() {
      var boundary = "--------------------------";
      for (var i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
      }
      this._boundary = boundary;
    };
    FormData3.prototype.getLengthSync = function() {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this.hasKnownLength()) {
        this._error(new Error("Cannot calculate proper length in synchronous way."));
      }
      return knownLength;
    };
    FormData3.prototype.hasKnownLength = function() {
      var hasKnownLength = true;
      if (this._valuesToMeasure.length) {
        hasKnownLength = false;
      }
      return hasKnownLength;
    };
    FormData3.prototype.getLength = function(cb) {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
      }
      asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
          cb(err);
          return;
        }
        values.forEach(function(length) {
          knownLength += length;
        });
        cb(null, knownLength);
      });
    };
    FormData3.prototype.submit = function(params, cb) {
      var request, options, defaults2 = { method: "post" };
      if (typeof params == "string") {
        params = parseUrl(params);
        options = populate({
          port: params.port,
          path: params.pathname,
          host: params.hostname,
          protocol: params.protocol
        }, defaults2);
      } else {
        options = populate(params, defaults2);
        if (!options.port) {
          options.port = options.protocol == "https:" ? 443 : 80;
        }
      }
      options.headers = this.getHeaders(params.headers);
      if (options.protocol == "https:") {
        request = https2.request(options);
      } else {
        request = http2.request(options);
      }
      this.getLength(function(err, length) {
        if (err && err !== "Unknown stream") {
          this._error(err);
          return;
        }
        if (length) {
          request.setHeader("Content-Length", length);
        }
        this.pipe(request);
        if (cb) {
          var onResponse;
          var callback = function(error, responce) {
            request.removeListener("error", callback);
            request.removeListener("response", onResponse);
            return cb.call(this, error, responce);
          };
          onResponse = callback.bind(this, null);
          request.on("error", callback);
          request.on("response", onResponse);
        }
      }.bind(this));
      return request;
    };
    FormData3.prototype._error = function(err) {
      if (!this.error) {
        this.error = err;
        this.pause();
        this.emit("error", err);
      }
    };
    FormData3.prototype.toString = function() {
      return "[object FormData]";
    };
  }
});

// node_modules/proxy-from-env/index.js
var require_proxy_from_env = __commonJS({
  "node_modules/proxy-from-env/index.js"(exports) {
    "use strict";
    var parseUrl = __require("url").parse;
    var DEFAULT_PORTS = {
      ftp: 21,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var stringEndsWith = String.prototype.endsWith || function(s) {
      return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
    };
    function getProxyForUrl(url2) {
      var parsedUrl = typeof url2 === "string" ? parseUrl(url2) : url2 || {};
      var proto = parsedUrl.protocol;
      var hostname = parsedUrl.host;
      var port = parsedUrl.port;
      if (typeof hostname !== "string" || !hostname || typeof proto !== "string") {
        return "";
      }
      proto = proto.split(":", 1)[0];
      hostname = hostname.replace(/:\d*$/, "");
      port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
      if (!shouldProxy(hostname, port)) {
        return "";
      }
      var proxy = getEnv("npm_config_" + proto + "_proxy") || getEnv(proto + "_proxy") || getEnv("npm_config_proxy") || getEnv("all_proxy");
      if (proxy && proxy.indexOf("://") === -1) {
        proxy = proto + "://" + proxy;
      }
      return proxy;
    }
    function shouldProxy(hostname, port) {
      var NO_PROXY = (getEnv("npm_config_no_proxy") || getEnv("no_proxy")).toLowerCase();
      if (!NO_PROXY) {
        return true;
      }
      if (NO_PROXY === "*") {
        return false;
      }
      return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
          return true;
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
          return true;
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
          return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === "*") {
          parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        return !stringEndsWith.call(hostname, parsedProxyHostname);
      });
    }
    function getEnv(key) {
      return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || "";
    }
    exports.getProxyForUrl = getProxyForUrl;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    "use strict";
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend2;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend2(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    "use strict";
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    module.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var tty = __require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream4) {
      const level = supportsColor(stream4, stream4 && stream4.isTTY);
      return translateLevel(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module) {
    "use strict";
    var tty = __require("tty");
    var util3 = __require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util3.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_2, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util3.formatWithOptions(exports.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util3.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util3.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module) {
    "use strict";
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module) {
    "use strict";
    var debug;
    module.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
        }
        if (typeof debug !== "function") {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module) {
    "use strict";
    var url2 = __require("url");
    var URL2 = url2.URL;
    var http2 = __require("http");
    var https2 = __require("https");
    var Writable = __require("stream").Writable;
    var assert = __require("assert");
    var debug = require_debug();
    (function detectUnsupportedEnvironment() {
      var looksLikeNode = typeof process !== "undefined";
      var looksLikeBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      var looksLikeV8 = isFunction2(Error.captureStackTrace);
      if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
      }
    })();
    var useNativeURL = false;
    try {
      assert(new URL2(""));
    } catch (error) {
      useNativeURL = error.code === "ERR_INVALID_URL";
    }
    var preservedUrlFields = [
      "auth",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "hash"
    ];
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = /* @__PURE__ */ Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var InvalidUrlError = createErrorType(
      "ERR_INVALID_URL",
      "Invalid URL",
      TypeError
    );
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      "Redirected request failed"
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded",
      RedirectionError
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );
    var destroy = Writable.prototype.destroy || noop2;
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        try {
          self2._processResponse(response);
        } catch (cause) {
          self2.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({ cause }));
        }
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      destroyRequest(this._currentRequest);
      this._currentRequest.abort();
      this.emit("abort");
    };
    RedirectableRequest.prototype.destroy = function(error) {
      destroyRequest(this._currentRequest, error);
      destroy.call(this, error);
      return this;
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!isString2(data) && !isBuffer2(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (isFunction2(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (isFunction2(data)) {
        callback = data;
        data = encoding = null;
      } else if (isFunction2(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
          self2._timeout = null;
        }
        self2.removeListener("abort", clearTimer);
        self2.removeListener("error", clearTimer);
        self2.removeListener("response", clearTimer);
        self2.removeListener("close", clearTimer);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!self2.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      this.on("close", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
      }
      if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      request._redirectable = this;
      for (var event of events) {
        request.on(event, eventHandlers[event]);
      }
      this._currentUrl = /^\//.test(this._options.path) ? url2.format(this._options) : (
        // When making a request to a proxy, […]
        // a client MUST send the target URI in absolute-form […].
        this._options.path
      );
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          if (request === self2._currentRequest) {
            if (error) {
              self2.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
        return;
      }
      destroyRequest(this._currentRequest);
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
      }
      var requestHeaders;
      var beforeRedirect = this._options.beforeRedirect;
      if (beforeRedirect) {
        requestHeaders = Object.assign({
          // The Host header was set by nativeProtocol.request
          Host: response.req.getHeader("host")
        }, this._options.headers);
      }
      var method = this._options.method;
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
      var currentUrlParts = parseUrl(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url2.format(Object.assign(currentUrlParts, { host: currentHost }));
      var redirectUrl = resolveUrl(location, currentUrl);
      debug("redirecting to", redirectUrl.href);
      this._isRedirect = true;
      spreadUrlObject(redirectUrl, this._options);
      if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
      }
      if (isFunction2(beforeRedirect)) {
        var responseDetails = {
          headers: response.headers,
          statusCode
        };
        var requestDetails = {
          url: currentUrl,
          method,
          headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
      }
      this._performRequest();
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (isURL(input)) {
            input = spreadUrlObject(input);
          } else if (isString2(input)) {
            input = spreadUrlObject(parseUrl(input));
          } else {
            callback = options;
            options = validateUrl(input);
            input = { protocol };
          }
          if (isFunction2(options)) {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          if (!isString2(options.host) && !isString2(options.hostname)) {
            options.hostname = "::1";
          }
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports2;
    }
    function noop2() {
    }
    function parseUrl(input) {
      var parsed;
      if (useNativeURL) {
        parsed = new URL2(input);
      } else {
        parsed = validateUrl(url2.parse(input));
        if (!isString2(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
      }
      return parsed;
    }
    function resolveUrl(relative, base) {
      return useNativeURL ? new URL2(relative, base) : parseUrl(url2.resolve(base, relative));
    }
    function validateUrl(input) {
      if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({ input: input.href || input });
      }
      if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({ input: input.href || input });
      }
      return input;
    }
    function spreadUrlObject(urlObject, target) {
      var spread3 = target || {};
      for (var key of preservedUrlFields) {
        spread3[key] = urlObject[key];
      }
      if (spread3.hostname.startsWith("[")) {
        spread3.hostname = spread3.hostname.slice(1, -1);
      }
      if (spread3.port !== "") {
        spread3.port = Number(spread3.port);
      }
      spread3.path = spread3.search ? spread3.pathname + spread3.search : spread3.pathname;
      return spread3;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    function createErrorType(code, message, baseClass) {
      function CustomError(properties) {
        if (isFunction2(Error.captureStackTrace)) {
          Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
      }
      CustomError.prototype = new (baseClass || Error)();
      Object.defineProperties(CustomError.prototype, {
        constructor: {
          value: CustomError,
          enumerable: false
        },
        name: {
          value: "Error [" + code + "]",
          enumerable: false
        }
      });
      return CustomError;
    }
    function destroyRequest(request, error) {
      for (var event of events) {
        request.removeListener(event, eventHandlers[event]);
      }
      request.on("error", noop2);
      request.destroy(error);
    }
    function isSubdomain(subdomain, domain) {
      assert(isString2(subdomain) && isString2(domain));
      var dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }
    function isString2(value) {
      return typeof value === "string" || value instanceof String;
    }
    function isFunction2(value) {
      return typeof value === "function";
    }
    function isBuffer2(value) {
      return typeof value === "object" && "length" in value;
    }
    function isURL(value) {
      return URL2 && value instanceof URL2;
    }
    module.exports = wrap({ http: http2, https: https2 });
    module.exports.wrap = wrap;
  }
});

// src/utility.tsx
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
var Utility;
((Utility2) => {
  function formatNumber(n) {
    const delimiter = ",";
    const separator = ".";
    const n_normalized = String(+String(n).replace(/[^\d\.]+/g, ""));
    const [value, precision] = n_normalized.split(".");
    const value_str = _lodash2.default.chunk(String(value).split("").reverse(), 3).map((x) => x.reverse().join("")).reverse().join(separator);
    return value_str + (precision ? delimiter + String(precision) : "");
  }
  Utility2.formatNumber = formatNumber;
  function formatRp(n) {
    return `Rp ${formatNumber(n)}`;
  }
  Utility2.formatRp = formatRp;
  function generateRandomColorHex() {
    return "#" + (Math.random() * 16777215 << 0).toString(16).padStart(6, "0");
  }
  Utility2.generateRandomColorHex = generateRandomColorHex;
  function simpleNumber(num) {
    if (num >= 1e12) {
      return `${+(num / 1e12).toFixed(2)}T`;
    }
    if (num >= 1e9) {
      return `${+(num / 1e9).toFixed(2)}M`;
    }
    if (num >= 1e6) {
      return `${+(num / 1e6).toFixed(2)}K`;
    }
    return `${+(num / 1e3).toFixed(2)}`;
  }
  Utility2.simpleNumber = simpleNumber;
})(Utility || (Utility = exports.Utility = {}));

// src/layout/right-nav/AgendaCard.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
function AgendaCard(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-[4px] p-[8px_12px] rounded-[12px] bg-[#F9FBFD] border border-[1.5px] border-zinc-200` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `${props.colorClass || ""} text-[10px] p-[2px_8px] rounded-full font-bold` }, props.priority), /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[20px] h-[20px] object-contain`,
      src: "https://dashboard.terampil.biz/icons2/three-dots.svg"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `font-bold` }, props.title), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-[4px]` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[12px] h-[12px] object-contain`,
      src: "https://dashboard.terampil.biz/icons2/calendar.svg"
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[11px] text-zinc-500` }, props.datetime)));
}

// src/layout/right-nav/SideOKRCard.tsx

function SideOKRCard(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-[4px] p-[8px_12px] rounded-[12px] bg-[#F9FBFD] border border-[1.5px] border-zinc-200` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px] font-bold` }, props.title), props.badge), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-zinc-500 py-[6px]` }, props.description), /* @__PURE__ */ _react2.default.createElement("div", { className: `bg-blue-100 h-[5px] overflow-hidden rounded-full` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: props.value
      },
      className: `bg-blue-500 h-full rounded-full`
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", null, (+props.value).toFixed(2), "%"), /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      onClick: () => props.onSubmit && props.onSubmit(),
      className: `flex items-center justify-center border border-[1.5px] border-[#13639E] text-[#13639E] rounded-[6px] py-[4px] gap-[4px]`
    },
    /* @__PURE__ */ _react2.default.createElement(
      "img",
      {
        className: `w-[15px] h-[15px] object-contain`,
        src: "https://dashboard.terampil.biz/icons2/attachment.svg"
      }
    ),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[13px] font-bold` }, "Submit Progress")
  ));
}

// src/new-design/NDNavbar.tsx

var _lucidereact = require('lucide-react');
function NDNavbar() {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: "flex items-center justify-between px-6 py-3 bg-white border-b border-b-[#EAEFF5]" }, /* @__PURE__ */ _react2.default.createElement("div", { className: "text-lg font-semibold text-gray-900 font-['Poppins']" }, "B2B Platform"), /* @__PURE__ */ _react2.default.createElement("div", { className: "flex items-center w-[400px] px-4 py-2 bg-[#F9FAFB] rounded-full" }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.Search, { className: "text-gray-400 w-5 h-5" }), /* @__PURE__ */ _react2.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Ask Terampil Intelligence",
      className: "font-['Poppins'] ml-2 w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 text-[12px] font-light"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ _react2.default.createElement("button", { className: "relative p-[10px] bg-[#F1F9FF] rounded-[10px]" }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.ClipboardList, { className: "text-[#0066B9] w-5 h-5" })), /* @__PURE__ */ _react2.default.createElement("button", { className: "relative p-[10px] bg-[#F1F9FF] rounded-[10px]" }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.Bell, { className: "text-[#0066B9] w-5 h-5" }), /* @__PURE__ */ _react2.default.createElement("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })), /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      src: "https://upload.jaknot.com/2023/12/images/products/817815/original/masker-gas-respirator-full-face-6002cn-6800.jpg",
      alt: "Avatar",
      className: "w-8 h-8 rounded-full object-cover"
    }
  )));
}

// src/new-design/NDNavbarOnboarding.tsx


// src/new-design/b64-images/CloseOutlineSVG.ts
var CloseOutlineSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzMyIgaGVpZ2h0PSIzMyIgcng9IjExLjUiIHN0cm9rZT0iI0VBRUZGNSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTExXzI4ODApIj4KPHBhdGggZD0iTTEyLjE1OCAxMy40NDkyQzExLjgwMTUgMTMuMDkyNyAxMS44MDE1IDEyLjUxNDYgMTIuMTU4IDEyLjE1OEMxMi41MTQ2IDExLjgwMTUgMTMuMDkyNyAxMS44MDE1IDEzLjQ0OTIgMTIuMTU4TDIxLjg0MiAyMC41NTA4QzIyLjE5ODUgMjAuOTA3MyAyMi4xOTg1IDIxLjQ4NTQgMjEuODQyIDIxLjg0MkMyMS40ODU0IDIyLjE5ODUgMjAuOTA3MyAyMi4xOTg1IDIwLjU1MDggMjEuODQyTDEyLjE1OCAxMy40NDkyWiIgZmlsbD0iIzEyMUQyNiIvPgo8cGF0aCBkPSJNMjAuNTUwOCAxMi4xNThDMjAuOTA3MyAxMS44MDE1IDIxLjQ4NTQgMTEuODAxNSAyMS44NDIgMTIuMTU4QzIyLjE5ODUgMTIuNTE0NiAyMi4xOTg1IDEzLjA5MjcgMjEuODQyIDEzLjQ0OTJMMTMuNDQ5MiAyMS44NDJDMTMuMDkyNyAyMi4xOTg1IDEyLjUxNDYgMjIuMTk4NSAxMi4xNTggMjEuODQyQzExLjgwMTUgMjEuNDg1NCAxMS44MDE1IDIwLjkwNzMgMTIuMTU4IDIwLjU1MDhMMjAuNTUwOCAxMi4xNThaIiBmaWxsPSIjMTIxRDI2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTExXzI4ODAiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMSAxMSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

// src/new-design/b64-images/LogoSingleSVG.ts
var LogoSingleSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCAzMiA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjI4ODYgMS4yODY3NEMyMS4wOTAzIC0wLjI3ODE0OCAxOC40NTQgLTAuMzg4NjQxIDE2Ljc3NjMgMC44MDgwNzNDMTIuMTYzMiA0LjA5ODggOC44Njc0OSA2LjMxMjgxIDUuMjcyNTYgMTAuMTQyMkMxLjIyODI3IDE0LjQ1MDIgMCAxOC4wNDAzIDAgMjMuNTQ1QzAgMjYuMTc3NyAxLjM5ODA4IDMwLjk5MjUgNC4zMTM5MiAzNC4wNzU4QzUuNjIyMDIgMzUuNTMxOCA3LjQyOTU0IDM1LjMzMjMgOC4xNDg1MSAzNC43OTM4QzguOTY2MDcgMzQuMTgxNSA4LjkyMDkzIDMyLjQ1MzggOC4xNDg1MyAzMS42ODI1QzYuMTA3ODggMjkuNjQ0NiA1LjUxMzAxIDI4LjcxNjMgNC43OTMyNCAyNi40MTcxQzQuMTczNzIgMjIuOTg2MSA0LjIyNzY5IDIxLjU4OTkgNC43OTMyNCAxOS43MTU2QzUuNzY3NjYgMTcuMDIzMyA2LjU2MjI2IDE1LjYzOTEgOC42Mjc4MyAxMy40OTI5QzExLjc4MDQgMTAuMTQyNiAxMy43NjYyIDguNDUyNzUgMTcuNDk1MyA1LjU5NDhDMTguNDg4NyA0LjY4Nzk3IDE5LjIyMjMgNC41NTMwOCAxOS44OTE5IDUuNTk0OEMyMS44MDkzIDcuOTg4MTcgMjMuNzI2NiAxMS4wOTk1IDI1Ljg4MzUgMTUuNDA3NkMyNy44MDA4IDE4Ljk5NzYgMjguNTE5OCAyNC4wMjM3IDI1Ljg4MzUgMjguMzMxOEMyMi45NTQzIDMzLjExODUgMTkuODkxOSAzNS4wMzMyIDE1LjA5ODcgMzUuMDMzMkMxNC45MTg5IDMzLjAzMTggMTUuOTY0MSAyOS45NjIgMTcuNDk1MyAyNC4wMjM3QzE3LjgzNyAyMi42OTg2IDE4LjEwMTQgMjIuOTIwMyAyMS4wOTAzIDIzLjc4NDRDMjIuMjg4NiAyNC4xMzA4IDIzLjU4MjcgMjMuMzA1NyAyMy45NjYyIDIyLjM0ODNDMjQuMzQ5NyAyMS4zOTEgMjMuNzI2NSAxOS45NTUgMjIuNTI4MiAxOS43MTU2TDExLjk4MzEgMTcuNTYxNkMxMC4wNjU4IDE3LjMyMjMgOS4xMDcxNiAxOC4wNDAzIDguODY3NDkgMTkuMjM3QzguNjI3ODMgMjAuNDMzNyA5LjM0NjgyIDIxLjQ4MjQgOS44MjYxNCAyMS42MzAzQzEwLjU0ODQgMjEuODUzMyAxMC44NjEgMjIuMDEyIDExLjk4MzEgMjIuMTA5QzEzLjEwNTIgMjIuMjA2IDEzLjQ5NTggMjIuNDMwNSAxMy4xODE0IDIzLjU0NUMxMS45MjExIDI3LjcyNTkgMTEuMzU1IDMwLjAyODMgMTAuNTQ1MiAzNC4wNzU4QzkuNzUwMzEgMzguMzc3OCA5LjM0Njg2IDQyLjQ1MjYgOS41ODY1IDQ1LjA4NTNDOS42NzM2NSA0Ni4wNDI3IDEwLjU0NTEgNDcgMTEuNzQzNCA0N0MxMi45NDE3IDQ3IDEzLjY2MDcgNDYuMjgyIDEzLjkwMDQgNDUuMDg1M0MxNC4yODM5IDQzLjE3MDYgMTQuNjE5NCA0MS45NzM5IDE0LjYxOTQgMzkuMzQxMkMxOS42NTIzIDM5LjM0MTIgMjMuNDg2OSAzNy41ODI4IDI2LjM2MjggMzUuMDMzMUMyOS4zODE2IDMyLjM1NjkgMzAuNDgwMyAzMC41NzM3IDMxLjM5NTcgMjYuODk1N0MzMS44MzYgMjUuMTI2OCAzMi4zNzIxIDIxLjkzNjUgMzEuNjM1NCAxOC43NTgzQzMwLjE5NzQgMTIuMjk2MiAyNS40MDQyIDUuMzU1NDcgMjIuMjg4NiAxLjI4Njc0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzExMV8yODgzKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExMV8yODgzIiB4MT0iMTYiIHkxPSIwIiB4Mj0iMTYiIHkyPSI0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDFDRkJFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNjZCOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=";

// src/new-design/b64-images/CheckSVG.ts
var CheckSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiMwMDY2QjkiLz4KPHBhdGggZD0iTTEwLjMzMTMgMTUuODY4MUMxMC43Nzg4IDE1LjQxMjcgMTEuNTExMiAxNS40MDU5IDExLjk2NzEgMTUuODUyOUwxNS4xMzc0IDE4Ljk2MTRDMTUuNTkzMyAxOS40MDg1IDE1LjYwMDEgMjAuMTQgMTUuMTUyNiAyMC41OTU0QzE0LjcwNSAyMS4wNTA4IDEzLjk3MjcgMjEuMDU3NiAxMy41MTY3IDIwLjYxMDVMMTAuMzQ2NCAxNy41MDJDOS44OTA1MSAxNy4wNTUgOS44ODM3MiAxNi4zMjM1IDEwLjMzMTMgMTUuODY4MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMy41ODM1IDIwLjY2OUMxMy4xMDE5IDIwLjI1NjUgMTMuMDQ2MiAxOS41MzIxIDEzLjQ1OTIgMTkuMDUxTDE5Ljk3OTIgMTEuNDU1M0MyMC4zOTIxIDEwLjk3NDIgMjEuMTE3MyAxMC45MTg2IDIxLjU5OSAxMS4zMzFDMjIuMDgwNiAxMS43NDM1IDIyLjEzNjMgMTIuNDY3OSAyMS43MjMzIDEyLjk0OUwxNS4yMDMzIDIwLjU0NDdDMTQuNzkwNCAyMS4wMjU4IDE0LjA2NTIgMjEuMDgxNCAxMy41ODM1IDIwLjY2OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";

// src/new-design/NDNavbarOnboarding.tsx
function NDNavbarOnboarding(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-b border-b-[#EAEFF5]" }, /* @__PURE__ */ _react2.default.createElement("div", { className: "text-lg font-semibold text-gray-900 font-['Poppins'] flex items-center gap-4" }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      onClick: props.onClose,
      className: `w-[30px] h-[30px] object-contain cursor-pointer`,
      src: CloseOutlineSVG
    }
  ), /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[40px] h-[40px] object-contain`,
      src: LogoSingleSVG
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `h-[28px] w-[2px] bg-[#EAEFF5]` }), /* @__PURE__ */ _react2.default.createElement("span", null, "Onboard")), /* @__PURE__ */ _react2.default.createElement("div", { className: "flex items-center gap-8 font-[Poppins]" }, [
    ["Templates", "/onboarding/templates", props.activeIndex >= 1, props.activeIndex >= 2],
    ["Setup Company Data", "/onboarding/setup-company-data", props.activeIndex >= 2, props.activeIndex >= 3],
    ["Setup OKRs", "/onboarding/setup-okrs", props.activeIndex >= 3, props.activeIndex >= 4]
  ].map(([label, url2, active, show_check], i) => /* @__PURE__ */ _react2.default.createElement(
    "a",
    {
      href: show_check ? url2 : void 0,
      key: i,
      className: `flex items-center gap-3`
    },
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-center text-[14px] min-w-[28px] min-h-[28px] w-[28px] h-[28px] rounded-full border border-px ${active ? "border-[#0066B9] text-[#0066B9]" : "border-[#B8CADF] text-[#B8CADF]"}` }, show_check ? /* @__PURE__ */ _react2.default.createElement("img", { src: CheckSVG, className: `w-full h-full` }) : i + 1),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `${active ? "text-[#121D26]" : "text-[#B8CADF]"} font-medium text-[14px]` }, label)
  ))), /* @__PURE__ */ _react2.default.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ _react2.default.createElement("select", { className: `border border-[1.5px] border-[#8DA6C4] rounded-[10px] bg-transparent text-[14px] font-medium p-[8px_19px] font-[Poppins] text-[#121D26]` }, /* @__PURE__ */ _react2.default.createElement("option", null, "English"), /* @__PURE__ */ _react2.default.createElement("option", null, "Indonesia"))));
}

// src/new-design/NDSidebar.tsx

function NDSidebar(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: "w-16 h-screen bg-white flex flex-col items-center py-2 space-y-6 border-r border-r-[#EAEFF5]" }, /* @__PURE__ */ _react2.default.createElement("div", null, /* @__PURE__ */ _react2.default.createElement("img", { src: "https://dashboard.terampil.biz/icons2/logo.png", alt: "Logo", className: "h-10 w-auto" })), /* @__PURE__ */ _react2.default.createElement("div", { className: "mt-4 flex flex-col space-y-3 mt-4" }, /* @__PURE__ */ _react2.default.createElement(SidebarIcon, { onHover: () => props.onHover("dashboard"), icon: Dashboard_svg, active: props.active == "dashboard" }), /* @__PURE__ */ _react2.default.createElement(SidebarIcon, { onHover: () => props.onHover("organization"), icon: Organizations_svg, active: props.active == "organization" }), /* @__PURE__ */ _react2.default.createElement(SidebarIcon, { onHover: () => props.onHover("okr"), icon: OKRs_svg, active: props.active == "okr" }), /* @__PURE__ */ _react2.default.createElement(SidebarIcon, { onHover: () => props.onHover("training-event"), icon: TrainingEvent_svg, active: props.active == "training-event" }), /* @__PURE__ */ _react2.default.createElement(SidebarIcon, { onHover: () => props.onHover("library"), icon: Library_svg, active: props.active == "library" }), /* @__PURE__ */ _react2.default.createElement(SidebarIcon, { onHover: () => props.onHover("training-budget"), icon: TrainingBudget_svg, active: props.active == "training-budget" })));
}
var SidebarIcon = ({ icon, active, onHover }) => /* @__PURE__ */ _react2.default.createElement(
  "div",
  {
    onMouseOver: () => onHover(),
    className: `p-[9px] cursor-pointer rounded-xl ${active ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`
  },
  /* @__PURE__ */ _react2.default.createElement("img", { className: `w-[20px] h-[20px] object-contain`, src: icon })
);
var Dashboard_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc3XzUzNzQpIj4KPHJlY3QgeD0iMC43IiB5PSIwLjciIHdpZHRoPSI3LjgxODc1IiBoZWlnaHQ9IjE4LjYiIHJ4PSIyLjMiIGZpbGw9IndoaXRlIiBzdHJva2U9IiM4OTk0QTEiIHN0cm9rZS13aWR0aD0iMS40Ii8+CjxyZWN0IHg9IjExLjQ4MTIiIHk9IjguOTgxMjUiIHdpZHRoPSI3LjgxODc1IiBoZWlnaHQ9IjEwLjMxODgiIHJ4PSIyLjMiIGZpbGw9IndoaXRlIiBzdHJva2U9IiM4OTk0QTEiIHN0cm9rZS13aWR0aD0iMS40Ii8+CjxyZWN0IHg9IjExLjQ4MTIiIHk9IjAuNyIgd2lkdGg9IjcuODE4NzUiIGhlaWdodD0iNS4zMTg3NSIgcng9IjIuMyIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzg5OTRBMSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83N181Mzc0Ij4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
var Organizations_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc3XzUzNzcpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjA3MjcgMi4zNDM4N0M1LjE0MzUyIDIuODAxNjQgNC44NTA3NSAzLjA2ODI0IDQuNDE5NTIgMy4xNDMyM0MzLjMyOTgyIDMuMzMyMzggMi41MzkyNCA0LjQ4NDk5IDIuNTM5MjQgNS42NTQ2MUMyLjU0MTM1IDYuODI5ODIgMy4zNzEwNCA4LjAwNTk0IDQuNDY5MTkgOC4xNjgyM0M0LjkwMzU5IDguMjMyMDMgNS4yMDQ4MiA4LjQ5MDc5IDUuMTQ0NTcgOC45NTA4MUM1LjA4ODU2IDkuMzcwNTIgNC43NDkyOCA5LjM4NDMzIDQuMzYwMzMgOS4zODQzM0M0LjMyNDQgOS4zODQzMyA0LjI4NzA0IDkuMzg0MTMgNC4yNTA0MSA5LjM3NjQ5QzIuODU2ODMgOS4wODU4NSAxLjM3MTY2IDcuNjYzNjcgMS4zNjc0MyA1LjY1Njg1QzEuMzY3NDMgMy42NTg5OSAyLjQ2MzkzIDIuMzQzODcgNC4xNjE2MyAxLjk0MTY4QzQuNjA2NiAxLjg2NzgxIDUuMDAwODMgMS44ODgzMyA1LjA3MjcgMi4zNDM4N1oiIGZpbGw9IiM4OTk0QTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC45MjczIDIuMzQzODdDMTQuODU2NSAyLjgwMTY0IDE1LjE0OTMgMy4wNjgyNCAxNS41ODA1IDMuMTQzMjNDMTYuNjcwMiAzLjMzMjM4IDE3LjQ2MDggNC40ODQ5OSAxNy40NjA4IDUuNjU0NjFDMTcuNDU4NiA2LjgyOTgyIDE2LjYyOSA4LjAwNTk0IDE1LjUzMDggOC4xNjgyM0MxNS4wOTY0IDguMjMyMDMgMTQuNzk1MiA4LjQ5MDc5IDE0Ljg1NTQgOC45NTA4MUMxNC45MTE0IDkuMzcwNTIgMTUuMjUwNyA5LjM4NDMzIDE1LjYzOTcgOS4zODQzM0MxNS42NzU2IDkuMzg0MzMgMTUuNzEzIDkuMzg0MTMgMTUuNzQ5NiA5LjM3NjQ5QzE3LjE0MzIgOS4wODU4NSAxOC42MjgzIDcuNjYzNjcgMTguNjMyNiA1LjY1Njg1QzE4LjYzMjYgMy42NTg5OSAxNy41MzYxIDIuMzQzODcgMTUuODM4NCAxLjk0MTY4QzE1LjM5MzQgMS44Njc4MSAxNC45OTkyIDEuODg4MzMgMTQuOTI3MyAyLjM0Mzg3WiIgZmlsbD0iIzg5OTRBMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNDEyMzIgMTIuOTUyMUMzLjQ3Njc5IDEzLjQxMjEgMy4xMDAxNCAxMy41ODU4IDIuNjY3ODYgMTMuNjU1MkMxLjUwNzM1IDEzLjgzODcgMC45NDc0MTYgMTQuMzU4MyAwLjk0NzQxNiAxNC44NDg1QzAuOTQ3NDE2IDE1LjAwMTggMC45NTc1OTcgMTUuNzAyIDEuNjc1MjUgMTUuOTkxOUMyLjA4NDI4IDE2LjE1NjUgMi41MTQxIDE2LjM4NiAyLjM1NzY3IDE2LjgxOTFDMi4yMzcxOCAxNy4xNTM4IDEuNzUwMzMgMTcuMDk5IDEuNDQwMTMgMTYuOTk1NkMwLjg3MzU5NCAxNi44MDY3IC01LjY1MDY0ZS0wNiAxNi4wNDE4IDAgMTQuODQ4NUM1LjY1MDY5ZS0wNiAxMy42NTUyIDAuOTc0MDgyIDEyLjk3NDggMi4zNTc2NyAxMi42ODMyQzIuNzk0MTggMTIuNjI1IDMuMzQ2NzkgMTIuNDkzMiAzLjQxMjMyIDEyLjk1MjFaIiBmaWxsPSIjODk5NEExIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNTg3NyAxMi45NTIxQzE2LjUyMzIgMTMuNDEyMSAxNi44OTk5IDEzLjU4NTggMTcuMzMyMSAxMy42NTUyQzE4LjQ5MjYgMTMuODM4NyAxOS4wNTI2IDE0LjM1ODMgMTkuMDUyNiAxNC44NDg1QzE5LjA1MjYgMTUuMDAxOCAxOS4wNDI0IDE1LjcwMiAxOC4zMjQ3IDE1Ljk5MTlDMTcuOTE1NyAxNi4xNTY1IDE3LjQ4NTkgMTYuMzg2IDE3LjY0MjMgMTYuODE5MUMxNy43NjI4IDE3LjE1MzggMTguMjQ5NyAxNy4wOTkgMTguNTU5OSAxNi45OTU2QzE5LjEyNjQgMTYuODA2NyAyMCAxNi4wNDE4IDIwIDE0Ljg0ODVDMjAgMTMuNjU1MiAxOS4wMjU5IDEyLjk3NDggMTcuNjQyMyAxMi42ODMyQzE3LjIwNTggMTIuNjI1IDE2LjY1MzIgMTIuNDkzMiAxNi41ODc3IDEyLjk1MjFaIiBmaWxsPSIjODk5NEExIi8+CjxwYXRoIGQ9Ik0xNC4xMDY0IDUuNzE0NDFDMTQuMTA2NCA4LjIwNDkgMTIuMjI4NiAxMC4xNDI5IDEwLjAwODggMTAuMTQyOUM3Ljc4ODk4IDEwLjE0MjkgNS45MTExOCA4LjIwNDkgNS45MTExOCA1LjcxNDQxQzUuOTExMTggMy4yMjM5MyA3Ljc4ODk4IDEuMjg1OTQgMTAuMDA4OCAxLjI4NTk0QzEyLjIyODYgMS4yODU5NCAxNC4xMDY0IDMuMjIzOTMgMTQuMTA2NCA1LjcxNDQxWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzg5OTRBMSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KPHBhdGggZD0iTTE2LjM4MTIgMTUuODI2NUMxNi4zODEyIDE2LjI0NzcgMTYuMzEzOCAxNi42MDU4IDE2LjE2NDMgMTYuOTExOUMxNi4wMTggMTcuMjExNCAxNS43NzM3IDE3LjUwMTIgMTUuMzU0NiAxNy43NjE3QzE0LjQ4NDQgMTguMzAyNSAxMi44ODA3IDE4LjcwNDEgMTAuMDA4OSAxOC43MDQxQzcuMTM2OTggMTguNzA0MSA1LjUzMzI3IDE4LjMwMjUgNC42NjMxIDE3Ljc2MTdDNC4yNDM5OCAxNy41MDEyIDMuOTk5NzEgMTcuMjExNCAzLjg1MzQgMTYuOTExOUMzLjcwMzg5IDE2LjYwNTggMy42MzY1MiAxNi4yNDc3IDMuNjM2NTIgMTUuODI2NUMzLjYzNjUyIDE1LjA2MSAzLjkwOTYxIDE0LjQwNTggNC43NTU0NyAxMy44OTY2QzUuNjY2NjYgMTMuMzQ4IDcuMjc5OSAxMi45NDkgMTAuMDA4OSAxMi45NDlDMTIuNzA0OSAxMi45NDkgMTQuMzIwMiAxMy4zNDc0IDE1LjI0MDkgMTMuODk3N0MxNi4wOTk4IDE0LjQxMTEgMTYuMzgxMiAxNS4wNjk3IDE2LjM4MTIgMTUuODI2NVoiIGZpbGw9IndoaXRlIiBzdHJva2U9IiM4OTk0QTEiIHN0cm9rZS13aWR0aD0iMS40Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzdfNTM3NyI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
var OKRs_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc3XzUzODApIj4KPHBhdGggZD0iTTAuNzY5Mjg3IDExLjRDMC43NjkyODcgMTAuNjI2OCAxLjM5NjA5IDEwIDIuMTY5MjkgMTBINS41MjMxM0M2LjI5NjMzIDEwIDYuOTIzMTMgMTAuNjI2OCA2LjkyMzEzIDExLjRWMTkuMjMwOEgwLjc2OTI4N1YxMS40WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzAwNjZCOSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KPHBhdGggZD0iTTYuOTIzMSA2LjAxNTIzQzYuOTIzMSA1LjI0MjA0IDcuNTQ5OSA0LjYxNTIzIDguMzIzMSA0LjYxNTIzSDExLjY3NjlDMTIuNDUwMSA0LjYxNTIzIDEzLjA3NjkgNS4yNDIwNCAxMy4wNzY5IDYuMDE1MjNWMTkuMjMwNkg2LjkyMzFWNi4wMTUyM1oiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwMDY2QjkiIHN0cm9rZS13aWR0aD0iMS40Ii8+CjxwYXRoIGQ9Ik0xMy4wNzcgMi4xNjk1M0MxMy4wNzcgMS4zOTYzMyAxMy43MDM4IDAuNzY5NTMxIDE0LjQ3NyAwLjc2OTUzMUgxNy44MzA5QzE4LjYwNDEgMC43Njk1MzEgMTkuMjMwOSAxLjM5NjMzIDE5LjIzMDkgMi4xNjk1M1YxOS4yMzExSDEzLjA3N1YyLjE2OTUzWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzAwNjZCOSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83N181MzgwIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
var TrainingEvent_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4wMjI2IDJIMTYuMDIyMVYwSDE0LjAyMTNWMkg2LjAxNzhWMEg0LjAxNjkzVjJIMy4wMTY0OUMxLjkxNjAyIDIgMS4wMTU2MiAyLjkgMS4wMTU2MiA0VjE4QzEuMDE1NjIgMTkuMSAxLjkxNjAyIDIwIDMuMDE2NDkgMjBIMTcuMDIyNkMxOC4xMjMgMjAgMTkuMDIzNCAxOS4xIDE5LjAyMzQgMThWNEMxOS4wMjM0IDIuOSAxOC4xMjMgMiAxNy4wMjI2IDJaTTE3LjUgMTcuNUMxNy41IDE4LjA1MjMgMTcuMDUyMyAxOC41IDE2LjUgMTguNUgzLjVDMi45NDc3MiAxOC41IDIuNSAxOC4wNTIzIDIuNSAxNy41VjcuNUgxNy41VjE3LjVaTTIuNSA2VjQuNUMyLjUgMy45NDc3MiAyLjk0NzcyIDMuNSAzLjUgMy41SDE2LjVDMTcuMDUyMyAzLjUgMTcuNSAzLjk0NzcyIDE3LjUgNC41VjZIMi41WiIgZmlsbD0iIzg5OTRBMSIvPgo8cGF0aCBkPSJNOS4wNTcyMSAxNS43ODEyQzguODAxMyAxNS43ODEyIDguNTQ1MzkgMTUuNjgzNSA4LjM1MDIgMTUuNDg3OEw2LjQ2NDc1IDEzLjU5ODlDNi4wNzQyNSAxMy4yMDc3IDYuMDc0MjUgMTIuNTczNSA2LjQ2NDc1IDEyLjE4MjNDNi44NTUxOSAxMS43OTExIDcuNDg4MzQgMTEuNzkxMSA3Ljg3ODg0IDEyLjE4MjNMOS4wNTcyOCAxMy4zNjI4TDEyLjEyMTIgMTAuMjkzNEMxMi41MTE2IDkuOTAyMiAxMy4xNDQ3IDkuOTAyMiAxMy41MzUyIDEwLjI5MzRDMTMuOTI1OCAxMC42ODQ2IDEzLjkyNTggMTEuMzE4OSAxMy41MzUyIDExLjcxMDFMOS43NjQzNSAxNS40ODc4QzkuNTY5MDQgMTUuNjgzNSA5LjMxMzEyIDE1Ljc4MTIgOS4wNTcyMSAxNS43ODEyWiIgZmlsbD0iIzg5OTRBMSIvPgo8L3N2Zz4K";
var Library_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc3XzUzODYpIj4KPHBhdGggZD0iTTQuNzg0NTMgMTkuM0gxLjExOTc3QzAuOTQ4NTIxIDE5LjMgMC43IDE5LjExNjEgMC43IDE4Ljc4NDVWMS4yMTU0OEMwLjcgMC44ODM5MjggMC45NDg1MjEgMC43IDEuMTE5NzcgMC43SDQuNzg0NTNDNC45NTU4MiAwLjcgNS4yMDQzNiAwLjg4Mzk4IDUuMjA0MzYgMS4yMTU0OFYxOC43ODQ1QzUuMjA0MzYgMTkuMTE2IDQuOTU1ODIgMTkuMyA0Ljc4NDUzIDE5LjNaIiBzdHJva2U9IiM4OTk0QTEiIHN0cm9rZS13aWR0aD0iMS40Ii8+CjxyZWN0IHg9IjIuMjkwMDQiIHk9IjE0Ljg1ODQiIHdpZHRoPSIxLjI1IiBoZWlnaHQ9IjIuMTE0MjEiIHJ4PSIwLjYyNSIgZmlsbD0iIzg5OTRBMSIvPgo8cGF0aCBkPSJNOS44NjIwMyAxOS4zSDYuMTM3OTFDNS45NDY1OSAxOS4zIDUuNyAxOS4xMDUxIDUuNyAxOC43ODQ1VjEuMjE1NDhDNS43IDAuODk0ODg3IDUuOTQ2NTkgMC43IDYuMTM3OTEgMC43SDkuODYyMDNDMTAuMDUzNCAwLjcgMTAuMyAwLjg5NDkzOSAxMC4zIDEuMjE1NDhWMTguNzg0NUMxMC4zIDE5LjEwNTEgMTAuMDUzNCAxOS4zIDkuODYyMDMgMTkuM1oiIHN0cm9rZT0iIzg5OTRBMSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KPHJlY3QgeD0iNy4yNjAwMSIgeT0iMTQuODA0NyIgd2lkdGg9IjEuMjUiIGhlaWdodD0iMi4wNTU5MiIgcng9IjAuNjI1IiBmaWxsPSIjODk5NEExIi8+CjxwYXRoIGQ9Ik0xOC44NTQ3IDE4LjMwMzNMMTguODU0NiAxOC4zMDMzTDE4Ljg1MyAxOC4yOTA0TDE2LjY5MjkgMS4xNDY5MkwxNi42OTI5IDEuMTQ2OTNMMTYuNjkxOSAxLjEzODgxQzE2LjY3NTkgMC45OTg3NjUgMTYuNjA0MiAwLjg3ODE0NSAxNi41MDk5IDAuNzk4OTIyQzE2LjQwOTIgMC43MTQyNTYgMTYuMzMzOSAwLjcxNDk4NSAxNi4zMjIxIDAuNzE3MDA5TDE2LjMxMDIgMC43MTkwNDNMMTYuMjk4MyAwLjcyMDY2OUwxMi41OTk4IDEuMjI1NDhDMTIuNTk5OCAxLjIyNTQ4IDEyLjU5OTggMS4yMjU0OCAxMi41OTk4IDEuMjI1NDhDMTIuNTA4NyAxLjIzNzkxIDEyLjQwNDYgMS4yOTYyNCAxMi4zMjIxIDEuNDA4MzNDMTIuMjM2NSAxLjUyNDYzIDEyLjIxNzIgMS42NDAxNCAxMi4yMjY0IDEuNzAzNzZMMTIuMjI2NSAxLjcwMzc0TDEyLjIyODIgMS43MTY2NUwxNC4zODgzIDE4Ljg2MDFMMTQuMzk1NSAxOC45MTc5TDE0LjM5MzIgMTguOTc2MkMxNC4zODkyIDE5LjA3MjYgMTQuNDA1OCAxOS4xMjk5IDE0LjQxOTQgMTkuMTYwN0MxNC40MzI2IDE5LjE5MDcgMTQuNDUgMTkuMjExOCAxNC40NzIyIDE5LjIyOUMxNC41MjA2IDE5LjI2NjYgMTQuNjI2MSAxOS4zMDc3IDE0Ljc4MjggMTkuMjg2M0wxOC40ODEzIDE4Ljc4MTVDMTguNTcyNSAxOC43NjkxIDE4LjY3NjUgMTguNzEwNyAxOC43NTkgMTguNTk4N0MxOC44NDQ2IDE4LjQ4MjQgMTguODYzOSAxOC4zNjY5IDE4Ljg1NDcgMTguMzAzM1oiIHN0cm9rZT0iIzg5OTRBMSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KPHJlY3QgeD0iMTUuNTkiIHk9IjE0Ljg3NyIgd2lkdGg9IjEuMjUiIGhlaWdodD0iMS45NTMxMyIgcng9IjAuNjI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOC45OSAxNS41OSAxNC44NzcpIiBmaWxsPSIjODk5NEExIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzdfNTM4NiI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
var TrainingBudget_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjI4NTcgOS40NjQ1OVY3LjEyMjRDMTkuMjgzOSA2LjY4MDY0IDE5LjE0NTcgNi4yNTAyMyAxOC44ODk5IDUuODkwMDdDMTguNjM0MiA1LjUyOTkgMTguMjczNSA1LjI1NzU2IDE3Ljg1NzEgNS4xMTAzMVYzLjkwNzA2QzE3Ljg1NzEgMy4yNDM4MSAxNy41OTM4IDIuNjA3NzIgMTcuMTI0OSAyLjEzODcyQzE2LjY1NjEgMS42Njk3MyAxNi4wMjAyIDEuNDA2MjUgMTUuMzU3MSAxLjQwNjI1SDIuNUMxLjgzNjk2IDEuNDA2MjUgMS4yMDEwNyAxLjY2OTczIDAuNzMyMjMzIDIuMTM4NzJDMC4yNjMzOTIgMi42MDc3MiAwIDMuMjQzODEgMCAzLjkwNzA2VjE0Ljk4MjFDMC4wMDExMzQxOCAxNS45MjkzIDAuMzc3NzczIDE2LjgzNzMgMS4wNDczIDE3LjUwN0MxLjcxNjgzIDE4LjE3NjggMi42MjQ1OCAxOC41NTM2IDMuNTcxNDMgMTguNTU0N0gxNS43MTQzQzE2LjY2MTEgMTguNTUzNiAxNy41Njg5IDE4LjE3NjggMTguMjM4NCAxNy41MDdDMTguOTA3OSAxNi44MzczIDE5LjI4NDYgMTUuOTI5MyAxOS4yODU3IDE0Ljk4MjFWMTQuMDY4OUMxOS41MDIyIDEzLjk0NDUgMTkuNjgyMSAxMy43NjUzIDE5LjgwNzUgMTMuNTQ5NEMxOS45MzI5IDEzLjMzMzQgMTkuOTk5MiAxMy4wODgzIDIwIDEyLjgzODVWMTAuNjk1QzE5Ljk5OTIgMTAuNDQ1MyAxOS45MzI5IDEwLjIwMDEgMTkuODA3NSA5Ljk4NDE1QzE5LjY4MjEgOS43NjgyIDE5LjUwMjIgOS41ODkwMSAxOS4yODU3IDkuNDY0NTlaTTE4LjU3MTQgMTAuNjk1VjEyLjgzODVIMTQuNjQyOUMxNC4zNTg3IDEyLjgzODUgMTQuMDg2MiAxMi43MjU2IDEzLjg4NTIgMTIuNTI0NkMxMy42ODQzIDEyLjMyMzYgMTMuNTcxNCAxMi4wNTEgMTMuNTcxNCAxMS43NjY4QzEzLjU3MTQgMTEuNDgyNSAxMy42ODQzIDExLjIwOTkgMTMuODg1MiAxMS4wMDg5QzE0LjA4NjIgMTAuODA3OSAxNC4zNTg3IDEwLjY5NSAxNC42NDI5IDEwLjY5NUgxOC41NzE0Wk0yLjUgMi44MzUyOUgxNS4zNTcxQzE1LjY0MTMgMi44MzUyOSAxNS45MTM4IDIuOTQ4MjEgMTYuMTE0OCAzLjE0OTJDMTYuMzE1NyAzLjM1MDIgMTYuNDI4NiAzLjYyMjgxIDE2LjQyODYgMy45MDcwNlY0Ljk3ODg0SDIuNUMyLjIxNTg0IDQuOTc4ODQgMS45NDMzMiA0Ljg2NTkyIDEuNzQyMzkgNC42NjQ5M0MxLjU0MTQ1IDQuNDYzOTMgMS40Mjg1NyA0LjE5MTMyIDEuNDI4NTcgMy45MDcwNkMxLjQyODU3IDMuNjIyODEgMS41NDE0NSAzLjM1MDIgMS43NDIzOSAzLjE0OTJDMS45NDMzMiAyLjk0ODIxIDIuMjE1ODQgMi44MzUyOSAyLjUgMi44MzUyOVpNMTUuNzE0MyAxNy4xMjU3SDMuNTcxNDNDMy4wMDMxMSAxNy4xMjU3IDIuNDU4MDYgMTYuODk5OCAyLjA1NjIgMTYuNDk3OEMxLjY1NDM0IDE2LjA5NTggMS40Mjg1NyAxNS41NTA2IDEuNDI4NTcgMTQuOTgyMVY2LjE1NzA4QzEuNzYyMzcgNi4zMjAwNyAyLjEyODU3IDYuNDA1NzkgMi41IDYuNDA3ODhIMTcuMTQyOUMxNy4zMzIzIDYuNDA3ODggMTcuNTE0IDYuNDgzMTYgMTcuNjQ3OSA2LjYxNzE2QzE3Ljc4MTkgNi43NTExNSAxNy44NTcxIDYuOTMyODkgMTcuODU3MSA3LjEyMjRWOS4yNjU5NUgxNC42NDI5QzEzLjk3OTggOS4yNjU5NSAxMy4zNDM5IDkuNTI5NDMgMTIuODc1MSA5Ljk5ODQyQzEyLjQwNjIgMTAuNDY3NCAxMi4xNDI5IDExLjEwMzUgMTIuMTQyOSAxMS43NjY4QzEyLjE0MjkgMTIuNDMgMTIuNDA2MiAxMy4wNjYxIDEyLjg3NTEgMTMuNTM1MUMxMy4zNDM5IDE0LjAwNDEgMTMuOTc5OCAxNC4yNjc2IDE0LjY0MjkgMTQuMjY3NkgxNy44NTcxVjE0Ljk4MjFDMTcuODU3MSAxNS41NTA2IDE3LjYzMTQgMTYuMDk1OCAxNy4yMjk1IDE2LjQ5NzhDMTYuODI3NyAxNi44OTk4IDE2LjI4MjYgMTcuMTI1NyAxNS43MTQzIDE3LjEyNTdaIiBmaWxsPSIjODk5NEExIi8+Cjwvc3ZnPgo=";

// src/new-design/NDTemplate.tsx


// src/new-design/NDInnerSidebar.tsx


function NDInnerSidebar(props) {
  const title = (() => {
    switch (props.active) {
      case "dashboard":
        return "Dashboard";
      case "organization":
        return "Organization";
      case "okr":
        return "OKR Progress";
      case "training-event":
        return "Training Event";
      case "library":
        return "Library";
      case "training-budget":
        return "Training Budget";
    }
  })();
  const list_submenu = (() => {
    switch (props.active) {
      case "dashboard":
        return [
          ["Dashboard", "/dashboard", false, null],
          ["Executive Summary", "/executive-summary", false, null],
          ["Indonesia Map", "/indonesia-map", false, null]
        ];
      case "organization":
        return [
          ["Organization Structure", "/org-structure", false, null],
          ["Job Profile", "/profile", false, null],
          ["Employee", "/employee", false, null],
          ["Meeting Schedule", "/meeting-schedule", false, null]
        ];
      case "okr":
        return [
          ["Group OKR", "/group-okr", false, null],
          ["Company Level", "/okr/company", true, null],
          ["Division Level", "/", false, [
            ["Sales", "/", true],
            ["Finance & Accounting", "/", false],
            ["Operation", "/", false],
            ["Marketing", "/", false],
            ["Legal & Compliance", "/", false],
            ["Information Technology", "/", false],
            ["Human Resources", "/", false],
            ["Public Relations", "/", false]
          ]],
          ["Employee Level", "/okr/employee", false, null]
        ];
      case "training-event":
        return [
          ["Knowledge & Training", "/knowledge-training", false, null],
          ["Competency Dictionary", "/competency-dictionary", false, null],
          ["Pre-Made OKRs", "/pre-made-okr", false, null]
        ];
      case "library":
        return [];
      case "training-budget":
        return [];
    }
  })();
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-4 w-[200px]` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      className: `border-l-transparent text-[#8DA6C4] p-[0px_7px] cursor-pointer border-l border-l-[5px]  rounded-[5px] font-[Poppins] text-[15px] pr-[12px] mb-4`
    },
    title
  ), list_submenu.map(([label, href, active, submenu], i) => /* @__PURE__ */ _react2.default.createElement("div", { key: i }, submenu == null && /* @__PURE__ */ _react2.default.createElement(
    "a",
    {
      href,
      className: `${active ? "border-l-[#0066B9] text-[#0066B9] bg-[#E7F2FB] p-[10px_7px] font-medium" : "border-l-transparent text-[#8DA6C4] p-[0px_7px]"} cursor-pointer border-l border-l-[5px] rounded-[5px] font-[Poppins] text-[13px] block w-[200px]`
    },
    label
  ), Array.isArray(submenu) && /* @__PURE__ */ _react2.default.createElement(
    SubMenuListView,
    {
      label,
      data: submenu
    }
  ))));
}
function SubMenuListView(props) {
  const [open, setOpen] = _react.useState.call(void 0, false);
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col border-t border-b border-t-[2px] border-b-[2px] border-[#E5F0F7] py-2` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      onClick: () => setOpen(!open),
      className: `flex items-center justify-between ${props.active ? "border-l-[#0066B9] text-[#0066B9] bg-[#E7F2FB] p-[10px_7px] font-medium mb-3" : "border-l-transparent text-[#8DA6C4] p-[10px_7px]"} font-medium cursor-pointer border-l border-l-[5px] rounded-[5px] font-[Poppins] text-[13px] w-[200px]`
    },
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, props.label),
    /* @__PURE__ */ _react2.default.createElement(_lucidereact.ChevronDownIcon, { size: 18, className: `${open ? "rotate-180" : ""} transition transition-transform` })
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `transition transition-all overflow-hidden ${open ? "max-h-[200px]" : "max-h-0"}` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col` }, props.data.map(([label, href, active], i) => /* @__PURE__ */ _react2.default.createElement(
    "a",
    {
      href,
      className: `p-[0px_12px] text-[13px] text-[#8DA6C4] py-1`,
      key: i
    },
    label
  )))));
}

// src/new-design/NDTemplate.tsx
function NDTemplate(props) {
  var _a, _b;
  const nav_ref = _react.useRef.call(void 0, null);
  const second_sticky = _react.useRef.call(void 0, null);
  const [is_collapse, setIsCollapse] = _react.useState.call(void 0, false);
  const [hover_sidebar, setHoverSidebar] = _react.useState.call(void 0, props.active);
  _react.useLayoutEffect.call(void 0, () => {
    if (nav_ref && nav_ref.current) {
      const { height } = nav_ref.current.getBoundingClientRect();
      second_sticky.current.style.top = `${height}px`;
      second_sticky.current.style.height = `${window.innerHeight - height}px`;
    }
  }, []);
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `sticky top-0 left-0 z-[999]` }, /* @__PURE__ */ _react2.default.createElement(
    NDSidebar,
    {
      onHover: setHoverSidebar,
      active: hover_sidebar
    }
  ))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col relative` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      ref: nav_ref,
      className: `sticky top-0  z-[998]`
    },
    /* @__PURE__ */ _react2.default.createElement(NDNavbar, null)
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `relative` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      ref: second_sticky,
      style: {
        marginLeft: is_collapse ? -((_b = (_a = second_sticky.current) == null ? void 0 : _a.clientWidth) != null ? _b : 0) : 0
      },
      className: `p-2 py-6 sticky top-0 bg-[#F8FCFF] h-full border border-[#EAEFF5] flex flex-col gap-4 transition transition-all`
    },
    /* @__PURE__ */ _react2.default.createElement(NDInnerSidebar, { active: hover_sidebar }),
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        onClick: () => setIsCollapse(!is_collapse),
        className: `absolute right-0 ${is_collapse ? "mr-[-30px]" : "mr-[-15px]"} top-[18px] cursor-pointer z-[9999] transition transition-all`
      },
      /* @__PURE__ */ _react2.default.createElement(
        "img",
        {
          className: `min-w-[30px] min-h-[30px] w-[30px] h-[30px] object-contain`,
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiByeD0iOCIgZmlsbD0iI0U3RjJGQiIvPgo8cmVjdCB3aWR0aD0iMTAuOTM3NSIgaGVpZ2h0PSIyLjQ2MDk0IiByeD0iMS4yMzA0NyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjEgOC42MTMyOCkiIGZpbGw9IiMwMDY2QjkiLz4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjIuNDYwOTQiIHJ4PSIxLjIzMDQ3IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyMSAxMi43Njk1KSIgZmlsbD0iIzAwNjZCOSIvPgo8cmVjdCB3aWR0aD0iOC4yMDMxMiIgaGVpZ2h0PSIyLjQ2MDk0IiByeD0iMS4yMzA0NyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjEgMTYuOTI1OCkiIGZpbGw9IiMwMDY2QjkiLz4KPC9zdmc+Cg=="
        }
      )
    )
  )), /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      onMouseOverCapture: () => {
        if (hover_sidebar !== props.active) {
          setHoverSidebar(props.active);
        }
      },
      className: `flex-1 w-0`
    },
    props.children
  ))));
}

// src/new-design/NDTemplateOnboarding.tsx

function NDTemplateOnboarding(props) {
  const is_height_screen_full = Boolean(props.stickyRightChildren);
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: `flex bg-[#FAFDFF] min-h-screen ${is_height_screen_full ? "h-screen overflow-hidden" : ""} ${props.className || ""}`
    }),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col relative` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `sticky top-0  z-[998]` }, /* @__PURE__ */ _react2.default.createElement(NDNavbarOnboarding, __spreadValues({}, props.navbar))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-1 h-0` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 w-0 overflow-auto` }, props.children), is_height_screen_full && /* @__PURE__ */ _react2.default.createElement("div", { className: `sticky right-0 h-full` }, props.stickyRightChildren)))
  );
}

// src/new-design/NDDashboard.tsx


// src/new-design/new-dashboard/NDBMainSummary.tsx

function NDBMainSummary(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex rounded-full border border-[2px] border-[#EAEFF5]` }, [
    ["Performance Progress", "80%", true],
    ["Learning Progress", "80%", false]
  ].map(([label, progress, active], i) => /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      key: i,
      className: `${active ? "bg-[#2C9CF7] text-white font-medium" : "text-[#8DA6C4]"} text-[14px] rounded-full m-[-1px] flex-1 p-[13px_28px] flex flex-col gap-[8px]`
    },
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", null, label), /* @__PURE__ */ _react2.default.createElement("div", null, progress)),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `h-2 rounded-full ${active ? "bg-[#1780D6]" : "bg-[#E5EDF6]"}` }, /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        style: {
          width: progress
        },
        className: `${active ? "bg-white" : "bg-[#CDD9E7]"} rounded-full h-full`
      }
    ))
  )));
}

// src/new-design/new-dashboard/NDBMainStatus.tsx


function NDBMainStatus(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex flex-col gap-8 bg-gradient-to-r from-[#0066B9] to-[#46A4F0] rounded-[20px] p-7 text-white` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `absolute top-0 right-0 w-full h-[65%] object-contain object-right`,
      src: Effect_png
    }
  ), /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `absolute top-[8%] right-[7%] h-[70%] object-contain object-right`,
      src: Ch_Happy_png
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-4 items-start z-[99]` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.CheckCircle, { className: `text-[#57FCA4] mt-4`, size: 40 }), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-2 items-start` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[27px] font-medium` }, "You company is running well!"), /* @__PURE__ */ _react2.default.createElement("div", null, "Most OKRs are on track, but some departments need slight improvements."), /* @__PURE__ */ _react2.default.createElement("button", { className: `bg-[#1D90EE] text-white border border-[2px] border-white text-[14px] p-[8px_12px] rounded-[8px] mt-6` }, "Generate Insight More"))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-4 z-[99]` }, [
    [
      /* @__PURE__ */ _react2.default.createElement(_lucidereact.CheckCircle, { className: `text-[#01CFBE] mt-4`, size: 26 }),
      "Overall Completion Rate",
      "80% OKRs are on track this quarter.",
      "#FFFFFF",
      "#6CBBFB",
      "#121D26",
      "#8DA6C4",
      "#0066B9"
    ],
    [
      /* @__PURE__ */ _react2.default.createElement(_lucidereact.StarIcon, { className: `text-[#0066B9] mt-4`, size: 26 }),
      "Best Performing Teams",
      "IT & Marketing teams exceeded their targets.",
      "#FFFFFF",
      "#6CBBFB",
      "#121D26",
      "#8DA6C4",
      "#0066B9"
    ],
    [
      /* @__PURE__ */ _react2.default.createElement(_lucidereact.ShieldAlertIcon, { className: `text-[#FFF] mt-4`, size: 26 }),
      "At-Risk Departments",
      "2 out of 10 departments need attention.",
      "#FF4343",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF"
    ]
  ].map(([
    icon,
    label,
    desc,
    bg_color,
    border_color,
    text_color_1,
    text_color_2,
    text_color_3
  ], i) => /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        backgroundColor: bg_color,
        borderColor: border_color
      },
      className: `flex-1 flex gap-2 border border-[2px] p-[12px_18px] rounded-[12px]`,
      key: i
    },
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex mt-[-12px]` }, icon),
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        className: `flex flex-col gap-1`
      },
      /* @__PURE__ */ _react2.default.createElement(
        "div",
        {
          className: `font-medium`,
          style: {
            color: text_color_1
          }
        },
        label
      ),
      /* @__PURE__ */ _react2.default.createElement(
        "div",
        {
          className: `text-[13px]`,
          style: {
            color: text_color_2
          }
        },
        desc
      ),
      /* @__PURE__ */ _react2.default.createElement(
        "div",
        {
          style: {
            color: text_color_3
          },
          className: `underline text-[13px] mt-2`
        },
        "See detail"
      )
    )
  ))));
}
var Effect_png = "data:image/png;base64,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";
var Ch_Happy_png = "data:image/png;base64,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";

// src/new-design/new-dashboard/NDBOKRTable.tsx



// src/new-design/new-dashboard/NDBOKRTableRow.tsx


function NDBOKRTableRow(props) {
  const [open, setOpen] = _react.useState.call(void 0, false);
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col border-t border-t-[2px] border-t-[#EAEFF5]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center p-4 gap-3 text-[#121D26] bg-white font-medium text-[14px]` }, open && /* @__PURE__ */ _react2.default.createElement("div", { className: `w-px bg-[#0066B9] top-[50%] left-[28px] h-[50%] absolute` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1.5] flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      onClick: () => setOpen(!open),
      className: `bg-white z-[2] cursor-pointer`
    },
    /* @__PURE__ */ _react2.default.createElement(_lucidereact.ChevronDownCircleIcon, { size: 24, className: `text-[#0066B9] rounded-full ${open ? "rotate-180" : ""}  transition transition-transform` })
  ), /* @__PURE__ */ _react2.default.createElement("div", null, "OB-123")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Accelerate the path to profitability"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Head Office"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3] flex gap-4 items-center` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `h-3 rounded-full bg-[#EDF1F4] flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: "80%"
      },
      className: `bg-[#0066B9] rounded-full h-full`
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9]` }, "80%")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Feb 2025 - Mar 2026"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3]` }, "OKR on-track"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Status"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Action")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col ${open ? "max-h-[999px]" : "max-h-[0px]"} overflow-y-hidden transition transition-all` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col bg-[#F0F5F9] border-t border-t-[2px] border-t-[#EAEFF5]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center p-4 py-2 gap-3 text-[#121D26] text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-px bg-[#0066B9] top-0 left-[28px] h-full absolute` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1.5] flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `z-[2] w-[24px] h-[24px] flex items-center ml-[12px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-[24px] h-px bg-[#0066B9]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `min-w-[6px] min-h-[6px] w-[6px] h-[6px] bg-[#0066B9] rounded-[3px]` })), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#A1AFC0]` }, "KR-1")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Accelerate the path to profitability"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Head Office"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3] flex gap-4 items-center` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `h-3 rounded-full bg-[#EDF1F4] flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: "80%"
      },
      className: `bg-[#0066B9] rounded-full h-full`
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9]` }, "80%")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Feb 2025 - Mar 2026"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3]` }, "OKR on-track"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Status"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Action"))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col bg-[#F0F5F9] border-t border-t-[2px] border-t-[#EAEFF5]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center p-4 py-2 gap-3 text-[#121D26] text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-px bg-[#0066B9] top-0 left-[28px] h-full absolute` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1.5] flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `z-[2] w-[24px] h-[24px] flex items-center ml-[12px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-[24px] h-px bg-[#0066B9]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `min-w-[6px] min-h-[6px] w-[6px] h-[6px] bg-[#0066B9] rounded-[3px]` })), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#A1AFC0]` }, "KR-2")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Accelerate the path to profitability"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Head Office"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3] flex gap-4 items-center` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `h-3 rounded-full bg-[#EDF1F4] flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: "80%"
      },
      className: `bg-[#0066B9] rounded-full h-full`
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9]` }, "80%")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Feb 2025 - Mar 2026"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3]` }, "OKR on-track"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Status"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Action"))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col bg-[#F0F5F9] border-t border-t-[2px] border-t-[#EAEFF5]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center p-4 py-2 gap-3 text-[#121D26] text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-px bg-[#0066B9] top-0 left-[28px] h-[50%] absolute` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1.5] flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `z-[2] w-[24px] h-[24px] flex items-center ml-[12px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-[24px] h-px bg-[#0066B9]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `min-w-[6px] min-h-[6px] w-[6px] h-[6px] bg-[#0066B9] rounded-[3px]` })), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#A1AFC0]` }, "KR-3")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Accelerate the path to profitability"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Head Office"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3] flex gap-4 items-center` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `h-3 rounded-full bg-[#EDF1F4] flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: "80%"
      },
      className: `bg-[#0066B9] rounded-full h-full`
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9]` }, "80%")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Feb 2025 - Mar 2026"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3]` }, "OKR on-track"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Status"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Action")))));
}

// src/new-design/new-dashboard/NDBOKRTable.tsx
function NDBOKRTable(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col bg-[#E7F3FD] rounded-[12px] overflow-hidden border border-[2px] border-[#EAEFF5] overflow-x-auto` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center p-4 gap-3 text-[#538AB9] font-medium text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1.5] flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.ChevronDownIcon, { size: 24, className: `bg-[#D3E5F4] rounded-full p-[3px]` }), /* @__PURE__ */ _react2.default.createElement("div", null, "ID")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "OKR Name"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "PIC or Team"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3]` }, "Progress & Result"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[2]` }, "Timeline"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[3]` }, "Early Warning System"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Status"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1]` }, "Action")), /* @__PURE__ */ _react2.default.createElement(NDBOKRTableRow, null), /* @__PURE__ */ _react2.default.createElement(NDBOKRTableRow, null), /* @__PURE__ */ _react2.default.createElement(NDBOKRTableRow, null), /* @__PURE__ */ _react2.default.createElement(NDBOKRTableRow, null));
}

// src/new-design/new-dashboard/NDBCardDoughnut.tsx


// src/new-design/new-dashboard/NDBDoughnutChart.tsx

function NDBDoughnutChart(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const stroke_ratio = (_a = props.strokeRatio) != null ? _a : 0.5;
  const inner_radius_1 = props.r - props.stroke * stroke_ratio;
  const inner_radius_2 = props.r - props.stroke;
  const linear_gd_id = "idx";
  let d1_bg = (_b = props.d1BackgroundColor) != null ? _b : "#CCC";
  let d2_bg_g1 = (_c = props.d2BackgroundColorG1) != null ? _c : "#01E400";
  let d2_bg_g2 = (_d = props.d2BackgroundColorG1) != null ? _d : "#FEFF01";
  if (props.blue) {
    d1_bg = (_e = props.d1BackgroundColor) != null ? _e : "#C6E5FF";
    d2_bg_g1 = (_f = props.d2BackgroundColorG1) != null ? _f : "#0066B9";
    d2_bg_g2 = (_g = props.d2BackgroundColorG1) != null ? _g : "#01CFBE";
  }
  if (props.yellow) {
    d1_bg = (_h = props.d1BackgroundColor) != null ? _h : "#FFF6DD";
    d2_bg_g1 = (_i = props.d2BackgroundColorG1) != null ? _i : "#FFCA43";
    d2_bg_g2 = (_j = props.d2BackgroundColorG1) != null ? _j : "#FCE9B9";
  }
  if (props.red) {
    d1_bg = (_k = props.d1BackgroundColor) != null ? _k : "#FFEFEF";
    d2_bg_g1 = (_l = props.d2BackgroundColorG1) != null ? _l : "#FF4343";
    d2_bg_g2 = (_m = props.d2BackgroundColorG1) != null ? _m : "#FFE2E2";
  }
  const c = 2 * Math.PI * inner_radius_2;
  const value_a = props.value * c;
  const value_b = c - value_a;
  return /* @__PURE__ */ _react2.default.createElement("svg", { width: props.r * 2, height: props.r * 2, viewBox: `0 0 ${props.r * 2} ${props.r * 2}` }, /* @__PURE__ */ _react2.default.createElement(
    "circle",
    {
      cx: props.r,
      cy: props.r,
      r: inner_radius_1,
      fill: "none",
      stroke: d1_bg,
      "stroke-width": props.stroke * stroke_ratio * 2
    }
  ), /* @__PURE__ */ _react2.default.createElement("linearGradient", { id: linear_gd_id, x1: "0", y1: "0", x2: "1", y2: "1" }, /* @__PURE__ */ _react2.default.createElement("stop", { offset: "0%", "stop-color": d2_bg_g1 }), /* @__PURE__ */ _react2.default.createElement("stop", { offset: "100%", "stop-color": d2_bg_g2 })), /* @__PURE__ */ _react2.default.createElement(
    "circle",
    {
      cx: props.r,
      cy: props.r,
      r: inner_radius_2,
      fill: "none",
      stroke: `url(#${linear_gd_id})`,
      "stroke-width": props.stroke * 2,
      "stroke-linecap": "round",
      "stroke-dasharray": [value_a, value_b].join(" "),
      transform: `rotate(-90 ${props.r} ${props.r})`
    }
  ));
}

// src/new-design/new-dashboard/NDBCardDoughnut.tsx

function NDBCardDoughnut(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col font-[Poppins] border border-[2px] border-[#F1F5F9] rounded-[8px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-3 p-[14px_20px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `font-medium` }, props.title), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-4 items-end` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-center` }, /* @__PURE__ */ _react2.default.createElement(
    NDBDoughnutChart,
    {
      value: props.value,
      r: 68,
      stroke: 12,
      strokeRatio: 0.6,
      blue: props.mode === "blue",
      yellow: props.mode === "yellow",
      red: props.mode === "red"
    }
  ), props.mode === "blue" && /* @__PURE__ */ _react2.default.createElement("div", { className: `absolute text-[#0066B9] font-semibold text-[30px]` }, (props.value * 100).toFixed(0), "%"), props.mode === "yellow" && /* @__PURE__ */ _react2.default.createElement("div", { className: `absolute text-[#FFCA43] font-semibold text-[30px]` }, (props.value * 100).toFixed(0), "%"), props.mode === "red" && /* @__PURE__ */ _react2.default.createElement("div", { className: `absolute text-[#FF4343] font-semibold text-[30px]` }, (props.value * 100).toFixed(0), "%"))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-[1px] mb-2` }, props.mode == "blue" && /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-2 items-center text-[#00E05C] text-[15px]` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.TrendingUpIcon, { size: 18 }), (0.2 * 100).toFixed(0), "%"), props.mode == "yellow" && /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-2 items-center text-[#FFCA43] text-[15px]` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.TrendingDownIcon, { size: 18 }), (0.2 * 100).toFixed(0), "%"), props.mode == "red" && /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-2 items-center text-[#FF4343] text-[15px]` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.TrendingDownIcon, { size: 18 }), (0.2 * 100).toFixed(0), "%"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[13px]` }, "from"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[13px]` }, "Q1 2023")))), /* @__PURE__ */ _react2.default.createElement("div", { className: `border-t border-t-[2px] border-t-[#F1F5F9] p-[12px_20px] flex items-center gap-2 text-[12px] h-[55px]` }, props.mode === "blue" && /* @__PURE__ */ _react2.default.createElement(_lucidereact.SquareCheckBigIcon, { className: `text-[#00E05C]`, size: 20 }), props.mode === "yellow" && /* @__PURE__ */ _react2.default.createElement(_lucidereact.AlertTriangleIcon, { className: `text-[#FFCA43]`, size: 20 }), props.mode === "red" && /* @__PURE__ */ _react2.default.createElement(_lucidereact.AlertTriangleIcon, { className: `text-[#FF4343]`, size: 20 }), props.mode === "blue" && /* @__PURE__ */ _react2.default.createElement("div", { className: "text-[#121D26]" }, "Good"), props.mode === "yellow" && /* @__PURE__ */ _react2.default.createElement("div", { className: "text-[#121D26]" }, "The risk is moderate and this trend is likely to continue."), props.mode === "red" && /* @__PURE__ */ _react2.default.createElement("div", { className: "text-[#FF4343]" }, "Risk of missing target by 12% if trend continues.")));
}

// src/new-design/new-dashboard/NDBInsight.tsx


function NDBInsight(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-4 border border-[2px] border-[#6CBBFB] rounded-[10px] p-[18px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-[2] gap-2` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.LightbulbIcon, { className: `text-[#0066B9]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `font-medium` }, "Insight")), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9]` }, "Refresh Insight")), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px]` }, "Operational efficiency remains stable with 82% employee productivity and 76% customer retention. Revenue growth outpaced forecast by 8% this quarter, while sales targets have achieved 91% completion.", /* @__PURE__ */ _react2.default.createElement("br", null), /* @__PURE__ */ _react2.default.createElement("br", null), /* @__PURE__ */ _react2.default.createElement("span", { className: `text-[#121D26]` }, "Recommended:"), " Focus push on underperforming regions to meet 100% target projection."));
}

// src/new-design/new-dashboard/NDB9BoxQuandrantWithSummary.tsx



// src/new-design/new-dashboard/NDB9BoxQuandrant.tsx


function NDB9BoxQuandrant(props) {
  const [active, setActive] = _react.useState.call(void 0, "Specialists");
  const data = [
    [
      "Specialists",
      "High performance, Low potential",
      "6%",
      "300 Employee",
      "#12BFA0"
    ],
    [
      "Key Experts",
      "High Performance, Moderate Potential",
      "15%",
      "750 Employee",
      "#14A2D5"
    ],
    [
      "Future Leaders",
      "High performance, High potential",
      "8%",
      "400 Employee",
      "#0854C8"
    ],
    [
      "Routine Players",
      "Moderate performance, Low potential",
      "13%",
      "650 Employee",
      "#E5A524"
    ],
    [
      "Core Team",
      "Moderate performance, Moderate potential",
      "35%",
      "1.750 Employee",
      "#10B133"
    ],
    [
      "Hidden Gems",
      "Moderate performance, High potential",
      "5%",
      "250 Employee",
      "#889096"
    ],
    [
      "Underperformers",
      "Low performance, Low potential",
      "3%",
      "150 Employee",
      "#D21C1C"
    ],
    [
      "Fixable Risks",
      "Low performance, Moderate potential",
      "4%",
      "200 Employee",
      "#FC445C"
    ],
    [
      "Mystery Talent",
      "Low performance, High potential",
      "3%",
      "150 Employee",
      "#F0308D"
    ]
  ];
  const active_data = data.find((d) => d[0] === active);
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-2` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-[1.3] flex gap-4` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `self-start mt-10`,
      src: PotentialLine_svg
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-4` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `grid grid-cols-3 gap-0` }, data.map(([label, description, values, footer, color], i) => /* @__PURE__ */ _react2.default.createElement(
    BoxQuadrant,
    {
      key: i,
      color,
      label,
      description,
      values,
      footer,
      active: label === active,
      onClick: () => setActive(label)
    }
  ))), /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `self-center`,
      src: PerformanceLine_svg
    }
  ))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col gap-4 border border-[2px] border-[#EAEFF5] rounded-[10px] p-[24px_18px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-[2] gap-2` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.LightbulbIcon, { className: `text-[#0066B9]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `font-medium` }, "Insight")), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] text-[14px]` }, "Refresh Insight")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-0` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        color: active_data == null ? void 0 : active_data[4]
      },
      className: `font-medium text-[18px]`
    },
    active_data == null ? void 0 : active_data[0]
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[13px]` }, "Moderate Performance, Low Potential")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-0 items-end` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        color: active_data == null ? void 0 : active_data[4]
      },
      className: `font-medium text-[36px]`
    },
    "30%"
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[13px] mt-[-5px]` }, "650 Employee"))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px]` }, "Descriptions"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, "Employees with exceptional performance and high leadership potential, ready to be promoted to strategic positions within 1-2 years.")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px]` }, "Demographics:"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("ul", { className: `list-disc ml-6 leading-[2]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Level: 70% Staff, 30% Supervisor."), /* @__PURE__ */ _react2.default.createElement("li", null, "Job Profile: 50% Customer Service, 30% Admin."), /* @__PURE__ */ _react2.default.createElement("li", null, "Region: 60% Asia, 30% Europe."), /* @__PURE__ */ _react2.default.createElement("li", null, "Gender: 70% Female.")))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px]` }, "Performance & Behavioral Insights:"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("ul", { className: `list-disc ml-6 leading-[2]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Task Completion: 52% (often errors in complex tasks)."), /* @__PURE__ */ _react2.default.createElement("li", null, "Competency Gap: 3.5/5 (especially in problem-solving)."), /* @__PURE__ */ _react2.default.createElement("li", null, 'Self-Review: 60% blame "unclear processes".')))), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] text-[14px]` }, "Recommendations:"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, /* @__PURE__ */ _react2.default.createElement("ul", { className: `list-disc ml-6 leading-[2]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Performance Improvement Plan (PIP) with a target of 65% task completion in 3 months."), /* @__PURE__ */ _react2.default.createElement("li", null, "Root Cause Analysis training for the Customer Service team."))))));
}
function BoxQuadrant(props) {
  function lightenColor(hex, amount) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r += Math.round((255 - r) * amount);
    g += Math.round((255 - g) * amount);
    b += Math.round((255 - b) * amount);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  }
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      onClick: props.onClick,
      style: {
        backgroundColor: props.color
      },
      className: `${props.active ? "shadow-[0px_1px_10px_1px_rgba(0,0,0,.5)] scale-[100%]" : "scale-[92%] hover:scale-[96%]"} cursor-pointer transition transition-all flex flex-col gap-[1px] border border-[3px] border-white p-[16px_20px] text-white rounded-[12px]`
    },
    /* @__PURE__ */ _react2.default.createElement("div", { className: `font-medium` }, props.label),
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        style: {
          color: lightenColor(props.color, 0.6)
        },
        className: `text-[12px] leading-[1.6]`
      },
      props.description
    ),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[36px] font-medium leading-[1] mt-4` }, props.values),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[11px]` }, props.footer)
  );
}
var PerformanceLine_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAyIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgNDAyIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDAyIDEyTDM4MiAwLjQ1Mjk5NFYyMy41NDdMNDAyIDEyWk0yIDEwQzAuODk1NDE2IDEwIDAgMTAuODk1NCAwIDEyQzAgMTMuMTA0NiAwLjg5NTQxNiAxNCAyIDE0VjEwWk0zODQgMTBIMlYxNEgzODRWMTBaIiBmaWxsPSIjMDA2NkI5Ii8+CjxwYXRoIGQ9Ik0xNTEuNjQ2IDI3LjI4OEMxNTEuNjQ2IDI3Ljg4NTMgMTUxLjUwMiAyOC40NDUzIDE1MS4yMTQgMjguOTY4QzE1MC45MzcgMjkuNDkwNyAxNTAuNDk0IDI5LjkxMiAxNDkuODg2IDMwLjIzMkMxNDkuMjg5IDMwLjU1MiAxNDguNTMyIDMwLjcxMiAxNDcuNjE0IDMwLjcxMkgxNDUuNzQyVjM1SDE0My41MDJWMjMuODMySDE0Ny42MTRDMTQ4LjQ3OCAyMy44MzIgMTQ5LjIxNCAyMy45ODEzIDE0OS44MjIgMjQuMjhDMTUwLjQzIDI0LjU3ODcgMTUwLjg4NCAyNC45ODkzIDE1MS4xODIgMjUuNTEyQzE1MS40OTIgMjYuMDM0NyAxNTEuNjQ2IDI2LjYyNjcgMTUxLjY0NiAyNy4yODhaTTE0Ny41MTggMjguOTA0QzE0OC4xMzcgMjguOTA0IDE0OC41OTYgMjguNzY1MyAxNDguODk0IDI4LjQ4OEMxNDkuMTkzIDI4LjIgMTQ5LjM0MiAyNy44IDE0OS4zNDIgMjcuMjg4QzE0OS4zNDIgMjYuMiAxNDguNzM0IDI1LjY1NiAxNDcuNTE4IDI1LjY1NkgxNDUuNzQyVjI4LjkwNEgxNDcuNTE4Wk0xNTUuNDc3IDI1LjY0VjI4LjQ0SDE1OS4yMzdWMzAuMjE2SDE1NS40NzdWMzMuMTc2SDE1OS43MTdWMzVIMTUzLjIzN1YyMy44MTZIMTU5LjcxN1YyNS42NEgxNTUuNDc3Wk0xNjcuNTEyIDM1TDE2NS4wNDggMzAuNjQ4SDE2My45OTJWMzVIMTYxLjc1MlYyMy44MzJIMTY1Ljk0NEMxNjYuODA4IDIzLjgzMiAxNjcuNTQ0IDIzLjk4NjcgMTY4LjE1MiAyNC4yOTZDMTY4Ljc2IDI0LjU5NDcgMTY5LjIxNCAyNS4wMDUzIDE2OS41MTIgMjUuNTI4QzE2OS44MjIgMjYuMDQgMTY5Ljk3NiAyNi42MTYgMTY5Ljk3NiAyNy4yNTZDMTY5Ljk3NiAyNy45OTIgMTY5Ljc2MyAyOC42NTg3IDE2OS4zMzYgMjkuMjU2QzE2OC45MSAyOS44NDI3IDE2OC4yNzUgMzAuMjQ4IDE2Ny40MzIgMzAuNDcyTDE3MC4xMDQgMzVIMTY3LjUxMlpNMTYzLjk5MiAyOC45NjhIMTY1Ljg2NEMxNjYuNDcyIDI4Ljk2OCAxNjYuOTI2IDI4LjgyNCAxNjcuMjI0IDI4LjUzNkMxNjcuNTIzIDI4LjIzNzMgMTY3LjY3MiAyNy44MjY3IDE2Ny42NzIgMjcuMzA0QzE2Ny42NzIgMjYuNzkyIDE2Ny41MjMgMjYuMzk3MyAxNjcuMjI0IDI2LjEyQzE2Ni45MjYgMjUuODMyIDE2Ni40NzIgMjUuNjg4IDE2NS44NjQgMjUuNjg4SDE2My45OTJWMjguOTY4Wk0xNzguODk4IDIzLjgzMlYyNS42NEgxNzQuMjQyVjI4LjUwNEgxNzcuODFWMzAuMjhIMTc0LjI0MlYzNUgxNzIuMDAyVjIzLjgzMkgxNzguODk4Wk0xODUuNjcxIDM1LjExMkMxODQuNjI1IDM1LjExMiAxODMuNjY1IDM0Ljg2NjcgMTgyLjc5MSAzNC4zNzZDMTgxLjkxNiAzMy44ODUzIDE4MS4yMjMgMzMuMjA4IDE4MC43MTEgMzIuMzQ0QzE4MC4xOTkgMzEuNDY5MyAxNzkuOTQzIDMwLjQ4MjcgMTc5Ljk0MyAyOS4zODRDMTc5Ljk0MyAyOC4yOTYgMTgwLjE5OSAyNy4zMiAxODAuNzExIDI2LjQ1NkMxODEuMjIzIDI1LjU4MTMgMTgxLjkxNiAyNC44OTg3IDE4Mi43OTEgMjQuNDA4QzE4My42NjUgMjMuOTE3MyAxODQuNjI1IDIzLjY3MiAxODUuNjcxIDIzLjY3MkMxODYuNzI3IDIzLjY3MiAxODcuNjg3IDIzLjkxNzMgMTg4LjU1MSAyNC40MDhDMTg5LjQyNSAyNC44OTg3IDE5MC4xMTMgMjUuNTgxMyAxOTAuNjE1IDI2LjQ1NkMxOTEuMTI3IDI3LjMyIDE5MS4zODMgMjguMjk2IDE5MS4zODMgMjkuMzg0QzE5MS4zODMgMzAuNDgyNyAxOTEuMTI3IDMxLjQ2OTMgMTkwLjYxNSAzMi4zNDRDMTkwLjExMyAzMy4yMDggMTg5LjQyNSAzMy44ODUzIDE4OC41NTEgMzQuMzc2QzE4Ny42NzYgMzQuODY2NyAxODYuNzE2IDM1LjExMiAxODUuNjcxIDM1LjExMlpNMTg1LjY3MSAzMy4xMTJDMTg2LjM0MyAzMy4xMTIgMTg2LjkzNSAzMi45NjI3IDE4Ny40NDcgMzIuNjY0QzE4Ny45NTkgMzIuMzU0NyAxODguMzU5IDMxLjkxNzMgMTg4LjY0NyAzMS4zNTJDMTg4LjkzNSAzMC43ODY3IDE4OS4wNzkgMzAuMTMwNyAxODkuMDc5IDI5LjM4NEMxODkuMDc5IDI4LjYzNzMgMTg4LjkzNSAyNy45ODY3IDE4OC42NDcgMjcuNDMyQzE4OC4zNTkgMjYuODY2NyAxODcuOTU5IDI2LjQzNDcgMTg3LjQ0NyAyNi4xMzZDMTg2LjkzNSAyNS44MzczIDE4Ni4zNDMgMjUuNjg4IDE4NS42NzEgMjUuNjg4QzE4NC45OTkgMjUuNjg4IDE4NC40MDEgMjUuODM3MyAxODMuODc5IDI2LjEzNkMxODMuMzY3IDI2LjQzNDcgMTgyLjk2NyAyNi44NjY3IDE4Mi42NzkgMjcuNDMyQzE4Mi4zOTEgMjcuOTg2NyAxODIuMjQ3IDI4LjYzNzMgMTgyLjI0NyAyOS4zODRDMTgyLjI0NyAzMC4xMzA3IDE4Mi4zOTEgMzAuNzg2NyAxODIuNjc5IDMxLjM1MkMxODIuOTY3IDMxLjkxNzMgMTgzLjM2NyAzMi4zNTQ3IDE4My44NzkgMzIuNjY0QzE4NC40MDEgMzIuOTYyNyAxODQuOTk5IDMzLjExMiAxODUuNjcxIDMzLjExMlpNMTk4LjgwOSAzNUwxOTYuMzQ1IDMwLjY0OEgxOTUuMjg5VjM1SDE5My4wNDlWMjMuODMySDE5Ny4yNDFDMTk4LjEwNSAyMy44MzIgMTk4Ljg0MSAyMy45ODY3IDE5OS40NDkgMjQuMjk2QzIwMC4wNTcgMjQuNTk0NyAyMDAuNTExIDI1LjAwNTMgMjAwLjgwOSAyNS41MjhDMjAxLjExOSAyNi4wNCAyMDEuMjczIDI2LjYxNiAyMDEuMjczIDI3LjI1NkMyMDEuMjczIDI3Ljk5MiAyMDEuMDYgMjguNjU4NyAyMDAuNjMzIDI5LjI1NkMyMDAuMjA3IDI5Ljg0MjcgMTk5LjU3MiAzMC4yNDggMTk4LjcyOSAzMC40NzJMMjAxLjQwMSAzNUgxOTguODA5Wk0xOTUuMjg5IDI4Ljk2OEgxOTcuMTYxQzE5Ny43NjkgMjguOTY4IDE5OC4yMjMgMjguODI0IDE5OC41MjEgMjguNTM2QzE5OC44MiAyOC4yMzczIDE5OC45NjkgMjcuODI2NyAxOTguOTY5IDI3LjMwNEMxOTguOTY5IDI2Ljc5MiAxOTguODIgMjYuMzk3MyAxOTguNTIxIDI2LjEyQzE5OC4yMjMgMjUuODMyIDE5Ny43NjkgMjUuNjg4IDE5Ny4xNjEgMjUuNjg4SDE5NS4yODlWMjguOTY4Wk0yMTUuNDc1IDIzLjgzMlYzNUgyMTMuMjM1VjI3LjczNkwyMTAuMjQzIDM1SDIwOC41NDdMMjA1LjUzOSAyNy43MzZWMzVIMjAzLjI5OVYyMy44MzJIMjA1Ljg0M0wyMDkuMzk1IDMyLjEzNkwyMTIuOTQ3IDIzLjgzMkgyMTUuNDc1Wk0yMjQuNTM4IDMyLjg3MkgyMjAuMDlMMjE5LjM1NCAzNUgyMTcuMDAyTDIyMS4wMTggMjMuODE2SDIyMy42MjZMMjI3LjY0MiAzNUgyMjUuMjc0TDIyNC41MzggMzIuODcyWk0yMjMuOTMgMzEuMDhMMjIyLjMxNCAyNi40MDhMMjIwLjY5OCAzMS4wOEgyMjMuOTNaTTIzOC42OTUgMzVIMjM2LjQ1NUwyMzEuMzgzIDI3LjMzNlYzNUgyMjkuMTQzVjIzLjgxNkgyMzEuMzgzTDIzNi40NTUgMzEuNDk2VjIzLjgxNkgyMzguNjk1VjM1Wk0yNDAuMzY1IDI5LjRDMjQwLjM2NSAyOC4zMDEzIDI0MC42MSAyNy4zMiAyNDEuMTAxIDI2LjQ1NkMyNDEuNjAyIDI1LjU4MTMgMjQyLjI3OSAyNC45MDQgMjQzLjEzMyAyNC40MjRDMjQzLjk5NyAyMy45MzMzIDI0NC45NjIgMjMuNjg4IDI0Ni4wMjkgMjMuNjg4QzI0Ny4yNzcgMjMuNjg4IDI0OC4zNyAyNC4wMDggMjQ5LjMwOSAyNC42NDhDMjUwLjI0NyAyNS4yODggMjUwLjkwMyAyNi4xNzMzIDI1MS4yNzcgMjcuMzA0SDI0OC43MDFDMjQ4LjQ0NSAyNi43NzA3IDI0OC4wODIgMjYuMzcwNyAyNDcuNjEzIDI2LjEwNEMyNDcuMTU0IDI1LjgzNzMgMjQ2LjYyMSAyNS43MDQgMjQ2LjAxMyAyNS43MDRDMjQ1LjM2MiAyNS43MDQgMjQ0Ljc4MSAyNS44NTg3IDI0NC4yNjkgMjYuMTY4QzI0My43NjcgMjYuNDY2NyAyNDMuMzczIDI2Ljg5MzMgMjQzLjA4NSAyNy40NDhDMjQyLjgwNyAyOC4wMDI3IDI0Mi42NjkgMjguNjUzMyAyNDIuNjY5IDI5LjRDMjQyLjY2OSAzMC4xMzYgMjQyLjgwNyAzMC43ODY3IDI0My4wODUgMzEuMzUyQzI0My4zNzMgMzEuOTA2NyAyNDMuNzY3IDMyLjMzODcgMjQ0LjI2OSAzMi42NDhDMjQ0Ljc4MSAzMi45NDY3IDI0NS4zNjIgMzMuMDk2IDI0Ni4wMTMgMzMuMDk2QzI0Ni42MjEgMzMuMDk2IDI0Ny4xNTQgMzIuOTYyNyAyNDcuNjEzIDMyLjY5NkMyNDguMDgyIDMyLjQxODcgMjQ4LjQ0NSAzMi4wMTMzIDI0OC43MDEgMzEuNDhIMjUxLjI3N0MyNTAuOTAzIDMyLjYyMTMgMjUwLjI0NyAzMy41MTIgMjQ5LjMwOSAzNC4xNTJDMjQ4LjM4MSAzNC43ODEzIDI0Ny4yODcgMzUuMDk2IDI0Ni4wMjkgMzUuMDk2QzI0NC45NjIgMzUuMDk2IDI0My45OTcgMzQuODU2IDI0My4xMzMgMzQuMzc2QzI0Mi4yNzkgMzMuODg1MyAyNDEuNjAyIDMzLjIwOCAyNDEuMTAxIDMyLjM0NEMyNDAuNjEgMzEuNDggMjQwLjM2NSAzMC40OTg3IDI0MC4zNjUgMjkuNFpNMjU1LjQzIDI1LjY0VjI4LjQ0SDI1OS4xOVYzMC4yMTZIMjU1LjQzVjMzLjE3NkgyNTkuNjdWMzVIMjUzLjE5VjIzLjgxNkgyNTkuNjdWMjUuNjRIMjU1LjQzWiIgZmlsbD0iIzAwNjZCOSIvPgo8L3N2Zz4K";
var PotentialLine_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNDAyIiB2aWV3Qm94PSIwIDAgMzggNDAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjYgMEwxNC40NTMgMjBIMzcuNTQ3TDI2IDBaTTI0IDQwMEMyNCA0MDEuMTA1IDI0Ljg5NTQgNDAyIDI2IDQwMkMyNy4xMDQ2IDQwMiAyOCA0MDEuMTA1IDI4IDQwMEgyNFpNMjQgMThWNDAwSDI4VjE4SDI0WiIgZmlsbD0iIzAwNjZCOSIvPgo8cGF0aCBkPSJNNS4yODggMjMyLjRDNS44ODUzMyAyMzIuNCA2LjQ0NTMzIDIzMi41NDQgNi45NjggMjMyLjgzMkM3LjQ5MDY3IDIzMy4xMSA3LjkxMiAyMzMuNTUyIDguMjMyIDIzNC4xNkM4LjU1MiAyMzQuNzU4IDguNzEyIDIzNS41MTUgOC43MTIgMjM2LjQzMlYyMzguMzA0SDEzVjI0MC41NDRIMS44MzJWMjM2LjQzMkMxLjgzMiAyMzUuNTY4IDEuOTgxMzMgMjM0LjgzMiAyLjI4IDIzNC4yMjRDMi41Nzg2NyAyMzMuNjE2IDIuOTg5MzMgMjMzLjE2MyAzLjUxMiAyMzIuODY0QzQuMDM0NjcgMjMyLjU1NSA0LjYyNjY3IDIzMi40IDUuMjg4IDIzMi40Wk02LjkwNCAyMzYuNTI4QzYuOTA0IDIzNS45MSA2Ljc2NTMzIDIzNS40NTEgNi40ODggMjM1LjE1MkM2LjIgMjM0Ljg1NCA1LjggMjM0LjcwNCA1LjI4OCAyMzQuNzA0QzQuMiAyMzQuNzA0IDMuNjU2IDIzNS4zMTIgMy42NTYgMjM2LjUyOFYyMzguMzA0SDYuOTA0VjIzNi41MjhaTTEzLjExMiAyMjUuNjI2QzEzLjExMiAyMjYuNjcxIDEyLjg2NjcgMjI3LjYzMSAxMi4zNzYgMjI4LjUwNkMxMS44ODUzIDIyOS4zODEgMTEuMjA4IDIzMC4wNzQgMTAuMzQ0IDIzMC41ODZDOS40NjkzMyAyMzEuMDk4IDguNDgyNjcgMjMxLjM1NCA3LjM4NCAyMzEuMzU0QzYuMjk2IDIzMS4zNTQgNS4zMiAyMzEuMDk4IDQuNDU2IDIzMC41ODZDMy41ODEzMyAyMzAuMDc0IDIuODk4NjcgMjI5LjM4MSAyLjQwOCAyMjguNTA2QzEuOTE3MzMgMjI3LjYzMSAxLjY3MiAyMjYuNjcxIDEuNjcyIDIyNS42MjZDMS42NzIgMjI0LjU3IDEuOTE3MzMgMjIzLjYxIDIuNDA4IDIyMi43NDZDMi44OTg2NyAyMjEuODcxIDMuNTgxMzMgMjIxLjE4MyA0LjQ1NiAyMjAuNjgyQzUuMzIgMjIwLjE3IDYuMjk2IDIxOS45MTQgNy4zODQgMjE5LjkxNEM4LjQ4MjY3IDIxOS45MTQgOS40NjkzMyAyMjAuMTcgMTAuMzQ0IDIyMC42ODJDMTEuMjA4IDIyMS4xODMgMTEuODg1MyAyMjEuODcxIDEyLjM3NiAyMjIuNzQ2QzEyLjg2NjcgMjIzLjYyMSAxMy4xMTIgMjI0LjU4MSAxMy4xMTIgMjI1LjYyNlpNMTEuMTEyIDIyNS42MjZDMTEuMTEyIDIyNC45NTQgMTAuOTYyNyAyMjQuMzYyIDEwLjY2NCAyMjMuODVDMTAuMzU0NyAyMjMuMzM4IDkuOTE3MzMgMjIyLjkzOCA5LjM1MiAyMjIuNjVDOC43ODY2NyAyMjIuMzYyIDguMTMwNjcgMjIyLjIxOCA3LjM4NCAyMjIuMjE4QzYuNjM3MzMgMjIyLjIxOCA1Ljk4NjY3IDIyMi4zNjIgNS40MzIgMjIyLjY1QzQuODY2NjcgMjIyLjkzOCA0LjQzNDY3IDIyMy4zMzggNC4xMzYgMjIzLjg1QzMuODM3MzMgMjI0LjM2MiAzLjY4OCAyMjQuOTU0IDMuNjg4IDIyNS42MjZDMy42ODggMjI2LjI5OCAzLjgzNzMzIDIyNi44OTUgNC4xMzYgMjI3LjQxOEM0LjQzNDY3IDIyNy45MyA0Ljg2NjY3IDIyOC4zMyA1LjQzMiAyMjguNjE4QzUuOTg2NjcgMjI4LjkwNiA2LjYzNzMzIDIyOS4wNSA3LjM4NCAyMjkuMDVDOC4xMzA2NyAyMjkuMDUgOC43ODY2NyAyMjguOTA2IDkuMzUyIDIyOC42MThDOS45MTczMyAyMjguMzMgMTAuMzU0NyAyMjcuOTMgMTAuNjY0IDIyNy40MThDMTAuOTYyNyAyMjYuODk1IDExLjExMiAyMjYuMjk4IDExLjExMiAyMjUuNjI2Wk0xLjgzMiAyMTAuNjQ4SDMuNjRWMjEzLjYyNEgxM1YyMTUuODY0SDMuNjRWMjE4Ljg0SDEuODMyVjIxMC42NDhaTTMuNjQgMjA2Ljc3M0g2LjQ0VjIwMy4wMTNIOC4yMTZWMjA2Ljc3M0gxMS4xNzZWMjAyLjUzM0gxM1YyMDkuMDEzSDEuODE2VjIwMi41MzNIMy42NFYyMDYuNzczWk0xMyAxOTAuOTQ2VjE5My4xODZMNS4zMzYgMTk4LjI1OEgxM1YyMDAuNDk4SDEuODE2VjE5OC4yNThMOS40OTYgMTkzLjE4NkgxLjgxNlYxOTAuOTQ2SDEzWk0xLjgzMiAxODEuMTMySDMuNjRWMTg0LjEwOEgxM1YxODYuMzQ4SDMuNjRWMTg5LjMyNEgxLjgzMlYxODEuMTMyWk0xLjgzMiAxNzcuMjU4SDEzVjE3OS40OThIMS44MzJWMTc3LjI1OFpNMTAuODcyIDE2OC4xOTZWMTcyLjY0NEwxMyAxNzMuMzhWMTc1LjczMkwxLjgxNiAxNzEuNzE2VjE2OS4xMDhMMTMgMTY1LjA5MlYxNjcuNDZMMTAuODcyIDE2OC4xOTZaTTkuMDggMTY4LjgwNEw0LjQwOCAxNzAuNDJMOS4wOCAxNzIuMDM2VjE2OC44MDRaTTExLjIyNCAxNjEuMzUxVjE1Ny42NzFIMTNWMTYzLjU5MUgxLjgzMlYxNjEuMzUxSDExLjIyNFoiIGZpbGw9IiMwMDY2QjkiLz4KPC9zdmc+Cg==";

// src/new-design/new-dashboard/NDB9BoxQuandrantWithSummary.tsx
function NDB9BoxQuandrantWithSummary(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col border border-[2px] border-[#EAEFF5] rounded-[10px] ` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col gap-4 p-[24px_18px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-[2] gap-2` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.LightbulbIcon, { className: `text-[#0066B9]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `font-medium` }, "Overall Insight for Performance Quadrant")), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] text-[14px]` }, "Refresh Insight")), /* @__PURE__ */ _react2.default.createElement("ul", { className: `text-[14px] list-disc ml-6 leading-[1.7]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Gender Gap:", /* @__PURE__ */ _react2.default.createElement("ul", { className: `text-[14px] list-disc ml-6 leading-[1.7] text-[#8DA6C4]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Hanya 30% perempuan di kuadran High Potential \u2192 perlu audit bias dalam penilaian potensi."))), /* @__PURE__ */ _react2.default.createElement("li", null, "Regional Disparity:", /* @__PURE__ */ _react2.default.createElement("ul", { className: `text-[14px] list-disc ml-6 leading-[1.7] text-[#8DA6C4]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Kinerja tertinggi di Asia, tetapi turnover tinggi di kategori Underperformers."))), /* @__PURE__ */ _react2.default.createElement("li", null, "Age Correlation:", /* @__PURE__ */ _react2.default.createElement("ul", { className: `text-[14px] list-disc ml-6 leading-[1.7] text-[#8DA6C4]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "Karyawan 45+ tahun dominan di kuadran Low Potential \u2192 butuh program reskilling khusus."))), /* @__PURE__ */ _react2.default.createElement("li", null, "Automated Survey Trigger:", /* @__PURE__ */ _react2.default.createElement("ul", { className: `text-[14px] list-disc ml-6 leading-[1.7] text-[#8DA6C4]` }, /* @__PURE__ */ _react2.default.createElement("li", null, "65% karyawan di kuadran 7-9 menerima survei otomatis \u2192 40% respons mengungkap masalah sistem/tim."))))), /* @__PURE__ */ _react2.default.createElement("hr", { className: `border-t-[2px] border-t-[#EAEFF5]` }), /* @__PURE__ */ _react2.default.createElement("div", { className: `p-[24px_18px] flex flex-col gap-6` }, /* @__PURE__ */ _react2.default.createElement(NDB9BoxQuandrant, null), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1 ml-[64px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px]` }, "*Reference by:"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, "\u201CThe Leadership Pipeline (Charan, Drotter, Noel) & Workforce Analytics (Jac Fitz-enz)\u201D"))));
}

// src/new-design/new-dashboard/NDBFinancialCard.tsx


function NDBFinancialCard(props) {
  let main_color = "#2F9DF6";
  switch (props.mainColor) {
    case "blue":
      main_color = "#2F9DF6";
      break;
    case "green":
      main_color = "#2FF688";
      break;
    case "yellow":
      main_color = "#EBC52F";
      break;
  }
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-[2px] border-[#F1F5F9] rounded-[8px] flex-1 flex flex-col` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `p-[12px_15px] flex flex-col gap-2 flex-1` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, props.label), /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        color: main_color
      },
      className: `text-[20px] font-medium mt-2`
    },
    props.value
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[12px]` }, /* @__PURE__ */ _react2.default.createElement("span", { className: `text-[#8DA6C4]` }, props.sublabel, ":"), " ", props.subvalue), props.miniInfoType === "value" && /* @__PURE__ */ _react2.default.createElement("div", { className: `bg-[#E4FFF0] text-[#00E05C] text-[12px] p-[2px_9px] rounded-[6px]` }, props.miniInfoValue), props.miniInfoType === "change" && /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-2 text-[12px]` }, /* @__PURE__ */ _react2.default.createElement(_lucidereact.TrendingUpIcon, { className: `text-[#00E05C]`, size: 16 }), /* @__PURE__ */ _react2.default.createElement("span", { className: `text-[#00E05C]` }, props.miniInfoValue), /* @__PURE__ */ _react2.default.createElement("span", { className: `text-[#8DA6C4]` }, "from before")))), /* @__PURE__ */ _react2.default.createElement("div", { className: `p-[12px_15px] border-t border-t-[2px] border-t-[#F1F5F9] bg-[#F9FAFB] flex items-center gap-2 text-[12px]` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[16px] object-contain`,
      src: Forecast_svg
    }
  ), "Forecast: ", props.forecast));
}
var Forecast_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExMV83MTMzKSI+CjxwYXRoIGQ9Ik0xNS45OTk5IDExLjE1NjNWNy41NjI1NEMxNS45OTk5IDcuMjE3MzUgMTUuNzIwMSA2LjkzNzU0IDE1LjM3NDkgNi45Mzc1NEMxNS4wMjk3IDYuOTM3NTQgMTQuNzQ5OSA3LjIxNzM1IDE0Ljc0OTkgNy41NjI1NFYxMS4xNTYzQzE0Ljc0OTkgMTIuNTM0OCAxNC4yNTM0IDEzLjAzMTMgMTIuODc0OSAxMy4wMzEzSDMuMTI0OThDMS44MjgxMiAxMy4wMzEzIDEuMjQ5OTkgMTIuNTM0OCAxLjI0OTk5IDExLjE1NjNWNC44NDM4QzEuMjQ5OTkgMy40NjUzMSAxLjc0NjQ5IDIuOTY4ODIgMy4xMjQ5OCAyLjk2ODgySDkuMjE4N0M5LjU2Mzg5IDIuOTY4ODIgOS44NDM3IDIuNjg5IDkuODQzNyAyLjM0MzgyQzkuODQzNyAxLjk5ODYzIDkuNTYzODkgMS43MTg4MiA5LjIxODcgMS43MTg4MkgzLjEyNDk4QzEuMDU3MjQgMS43MTg4MiAwIDIuNzc2MDYgMCA0Ljg0MzhWMTEuMTU2M0MwIDEzLjIyNCAxLjA1NzI0IDE0LjI4MTIgMy4xMjQ5OCAxNC4yODEySDEyLjg3NDlDMTQuOTQyNyAxNC4yODEyIDE1Ljk5OTkgMTMuMjI0IDE1Ljk5OTkgMTEuMTU2M1oiIGZpbGw9IiNBMUFGQzAiLz4KPHBhdGggZD0iTTEuMjQ5ODggNS40Mzc1SDkuMjE4NjNDOS41NjM4MSA1LjQzNzUgOS44NDM2MyA1LjcxNzMyIDkuODQzNjMgNi4wNjI1QzkuODQzNjMgNi40MDc2OCA5LjU2MzgxIDYuNjg3NSA5LjIxODYzIDYuNjg3NUgxLjI0OTg4VjUuNDM3NVoiIGZpbGw9IiNBMUFGQzAiLz4KPHBhdGggZD0iTTE1LjY4NDQgMy43MTg3NUgxNC41MjgyVjIuNTYyNUMxNC41MjgyIDIuMDk2NTIgMTQuNTU2NyAxLjcxODc1IDEzLjk5NjkgMS43MTg3NUMxMy40OTk3IDEuNzE4NzUgMTMuNDY1NyAyLjA5NjUyIDEzLjQ2NTcgMi41NjI1VjMuNzE4NzVIMTIuMzA5NEMxMS44NDM1IDMuNzE4NzUgMTEuNDY1NyAzLjc1Mjc3IDExLjQ2NTcgNC4yNUMxMS40NjU3IDQuNzc4NDggMTEuODQzNSA0Ljc4MTI1IDEyLjMwOTQgNC43ODEyNUgxMy40NjU3VjUuOTM3NUMxMy40NjU3IDYuNDAzNDcgMTMuNDM3MiA2Ljc4MTI1IDEzLjk5NjkgNi43ODEyNUMxNC41NTY3IDYuNzgxMjUgMTQuNTI4MiA2LjQwMzQ3IDE0LjUyODIgNS45Mzc1VjQuNzgxMjVIMTUuNjg0NEMxNi4xNTA0IDQuNzgxMjUgMTYuNTI4MiA0Ljc0NzIzIDE2LjUyODIgNC4yNUMxNi41MjgyIDMuNzg0MDIgMTYuMTUwNCAzLjcxODc1IDE1LjY4NDQgMy43MTg3NVoiIGZpbGw9IiNBMUFGQzAiLz4KPHJlY3QgeD0iMi4xODc1IiB5PSIxMC4xMjUiIHdpZHRoPSI0LjA2MjUiIGhlaWdodD0iMC45Mzc1IiByeD0iMC40Njg3NSIgZmlsbD0iI0ExQUZDMCIvPgo8cmVjdCB4PSI2Ljg3NSIgeT0iMTAuMTI1IiB3aWR0aD0iNi42ODc1IiBoZWlnaHQ9IjAuOTM3NSIgcng9IjAuNDY4NzUiIGZpbGw9IiNBMUFGQzAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTFfNzEzMyI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

// src/new-design/new-dashboard/NDBSalesFunnel.tsx


// src/new-design/new-dashboard/NDBCardContainer.tsx

function NDBCardContainer(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-2 border border-[2px] border-[#F1F5F9] rounded-[8px] p-[10px_14px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[13px] font-medium` }, "Sales Funnel"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[12px]` }, "Des 2024")), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-3` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `rounded-[5px] p-2 bg-[#F9FAFB]` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[14px] object-contain`,
      src: Filter_svg
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", null, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[11px] object-contain`,
      src: ExpandIn_svg
    }
  )))), props.children);
}
var Filter_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQ1NzggMi4yNUgzLjUxMDk0QzIuNjA3MTcgMi4yNSAyLjE1NTI4IDIuMjUgMS44NzQ1MiAyLjUxMzM1QzEuNTkzNzUgMi43NzY3IDEuNTkzNzUgMy4yMDA1NSAxLjU5Mzc1IDQuMDQ4MjVWNC40ODg5N0MxLjU5Mzc1IDUuMTUyMDMgMS41OTM3NSA1LjQ4MzU3IDEuNzU5NjUgNS43NTg0QzEuOTI1NTUgNi4wMzMyNCAyLjIyODY0IDYuMjAzODEgMi44MzQ4MiA2LjU0NDk2TDQuNjk2NDIgNy41OTI2NEM1LjEwMzE0IDcuODIxNDkgNS4zMDY0OSA3LjkzNTk3IDUuNDUyMSA4LjA2MjM1QzUuNzU1MzIgOC4zMjU1IDUuOTQxOTggOC42MzQ3MyA2LjAyNjU3IDkuMDE0MDNDNi4wNjcxOSA5LjE5NjEyIDYuMDY3MTkgOS40MDkyNSA2LjA2NzE5IDkuODM1NDVWMTEuNTQxQzYuMDY3MTkgMTIuMTIyMSA2LjA2NzE5IDEyLjQxMjYgNi4yMjgxOCAxMi42MzkxQzYuMzg5MTggMTIuODY1NiA2LjY3NTEyIDEyLjk3NzQgNy4yNDcwMyAxMy4yMDA5QzguNDQ3NTcgMTMuNjcwMSA5LjA0Nzg0IDEzLjkwNDcgOS40NzQ3MyAxMy42Mzc4QzkuOTAxNTYgMTMuMzcwOSA5LjkwMTU2IDEyLjc2MDkgOS45MDE1NiAxMS41NDFWOS44MzU0NUM5LjkwMTU2IDkuNDA5MjUgOS45MDE1NiA5LjE5NjEyIDkuOTQyMjEgOS4wMTQwM0MxMC4wMjY4IDguNjM0NzMgMTAuMjEzNCA4LjMyNTUgMTAuNTE2NyA4LjA2MjM1QzEwLjY2MjIgNy45MzU5NyAxMC44NjU2IDcuODIxNDkgMTEuMjcyNCA3LjU5MjY0TDEzLjEzMzkgNi41NDQ5NkMxMy43NDAxIDYuMjAzODEgMTQuMDQzMiA2LjAzMzI0IDE0LjIwOTEgNS43NTg0QzE0LjM3NSA1LjQ4MzU3IDE0LjM3NSA1LjE1MjAzIDE0LjM3NSA0LjQ4ODk3VjQuMDQ4MjVDMTQuMzc1IDMuMjAwNTUgMTQuMzc1IDIuNzc2NyAxNC4wOTQzIDIuNTEzMzVDMTMuODEzNSAyLjI1IDEzLjM2MTYgMi4yNSAxMi40NTc4IDIuMjVaIiBzdHJva2U9IiNBMUFGQzAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K";
var ExpandIn_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExMV84NjIyKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMTExMSAwSDEzLjIyMjJDMTMuNjUxOCAwIDE0IDAuMzQ4MjI3IDE0IDAuNzc3Nzc4VjMuODg4ODlDMTQgNC4zMTg0NCAxMy42NTE4IDQuNjY2NjcgMTMuMjIyMiA0LjY2NjY3QzEyLjc5MjcgNC42NjY2NyAxMi40NDQ0IDQuMzE4NDQgMTIuNDQ0NCAzLjg4ODg5VjIuNjU1NUw5Ljg4MzMgNS4yMTY2NEM5LjU3OTU4IDUuNTIwMzYgOS4wODcwOSA1LjUyMDM2IDguNzgzMzcgNS4yMTY2NEM4LjQ3OTY0IDQuOTEyOSA4LjQ3OTY0IDQuNDIwNDQgOC43ODMzNyA0LjExNjY5TDExLjM0NDUgMS41NTU1NkgxMC4xMTExQzkuNjgxNTQgMS41NTU1NiA5LjMzMzMzIDEuMjA3MzMgOS4zMzMzMyAwLjc3Nzc3OEM5LjMzMzMzIDAuMzQ4MjI3IDkuNjgxNTQgMCAxMC4xMTExIDBaTTUuMjE2NjQgOC43ODMzN0M1LjUyMDM2IDkuMDg3MDkgNS41MjAzNiA5LjU3OTU4IDUuMjE2NjQgOS44ODMzTDIuNjU1NSAxMi40NDQ0SDMuODg4ODlDNC4zMTg0NCAxMi40NDQ0IDQuNjY2NjcgMTIuNzkyNyA0LjY2NjY3IDEzLjIyMjJDNC42NjY2NyAxMy42NTE4IDQuMzE4NDQgMTQgMy44ODg4OSAxNEgwLjc3Nzc3OEMwLjM0ODIyNyAxNCAwIDEzLjY1MTggMCAxMy4yMjIyVjEwLjExMTFDMCA5LjY4MTU0IDAuMzQ4MjI3IDkuMzMzMzMgMC43Nzc3NzggOS4zMzMzM0MxLjIwNzMzIDkuMzMzMzMgMS41NTU1NiA5LjY4MTU0IDEuNTU1NTYgMTAuMTExMVYxMS4zNDQ1TDQuMTE2NjkgOC43ODMzN0M0LjQyMDQ0IDguNDc5NjQgNC45MTI5IDguNDc5NjQgNS4yMTY2NCA4Ljc4MzM3WiIgZmlsbD0iIzhEQTZDNCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzExMV84NjIyIj4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

// src/new-design/new-dashboard/NDBSalesFunnel.tsx
function NDBSalesFunnel(props) {
  return /* @__PURE__ */ _react2.default.createElement(
    NDBCardContainer,
    {
      title: "Regional Summary",
      monthYear: "Des 2024"
    },
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col relative` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex` }, [
      ["Leads", "2000", "100%"],
      ["Interest", "1500", "75%"],
      ["Consideration", "825", "55%"],
      ["Intent", "330", "40%"],
      ["Evaluation", "82", "25%"],
      ["Conversion", "16", "16.5%"]
    ].map(([label, value, percent], i) => /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        className: `flex-1 flex flex-col gap-1 pl-[16px]`,
        key: i
      },
      /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[12px] text-[#8DA6C4]` }, label),
      /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] font-medium text-[24px]` }, value),
      /* @__PURE__ */ _react2.default.createElement(
        "div",
        {
          style: {
            marginTop: `${40 + i * 7}px`
          },
          className: `text-[#121D26] pl-[50%] z-[99]`
        },
        percent
      ),
      /* @__PURE__ */ _react2.default.createElement("div", { className: `absolute ml-[-16px] h-full w-[2px] bg-[#F1F5F9]` })
    ))), /* @__PURE__ */ _react2.default.createElement(
      "img",
      {
        className: `w-full object-contain mt-[-48px]`,
        src: Funnel_svg
      }
    )),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-8 text-[13px] mt-4` }, /* @__PURE__ */ _react2.default.createElement("div", null, /* @__PURE__ */ _react2.default.createElement("span", { className: `text-[#8DA6C4]` }, "\u2022 Existing Customer:"), " 120"), /* @__PURE__ */ _react2.default.createElement("div", null, /* @__PURE__ */ _react2.default.createElement("span", { className: `text-[#8DA6C4]` }, "\u2022 New Customer:"), " 120"))
  );
}
var Funnel_svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3MiIgaGVpZ2h0PSIxNzMiIHZpZXdCb3g9IjAgMCAxMjcyIDE3MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTczVjBDMzU0Ljg1MiA1NyA3NzQuNDkzIDU1IDEyNzIgNTVWMTE3LjVDNzc1LjA4OCAxMTcuNSAzNjcuMzM1IDExOC41IDAgMTczWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzExMV84NjI0KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExMV84NjI0IiB4MT0iMCIgeTE9Ijg2LjUiIHgyPSIxMjcyIiB5Mj0iODYuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNDZBN0Y2Ii8+CjxzdG9wIG9mZnNldD0iMC41MDE1NjUiIHN0b3AtY29sb3I9IiNDNkUzRkIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZENjQyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";

// src/new-design/NDDashboard.tsx
function NDDashboard(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `p-[18px_32px] flex flex-col gap-6 font-[Poppins]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[20px] font-medium` }, "Company-Level Progress"), /* @__PURE__ */ _react2.default.createElement(NDBMainSummary, null), /* @__PURE__ */ _react2.default.createElement(NDBMainStatus, null), /* @__PURE__ */ _react2.default.createElement(NDBOKRTable, null), /* @__PURE__ */ _react2.default.createElement("hr", null), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[20px] font-medium` }, "Division Performace Overview"), /* @__PURE__ */ _react2.default.createElement("div", { className: `grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Finance & Accounting",
      value: 0.7,
      mode: "blue"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Sales",
      value: 0.5,
      mode: "yellow"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Operation",
      value: 0.2,
      mode: "red"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Marketing",
      value: 0.1,
      mode: "red"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Legal & Compliance",
      value: 0.7,
      mode: "blue"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Human Resources",
      value: 0.9,
      mode: "blue"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Information Tech",
      value: 0.8,
      mode: "blue"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, /* @__PURE__ */ _react2.default.createElement(
    NDBCardDoughnut,
    {
      title: "Public Relations",
      value: 0.4,
      mode: "yellow"
    }
  ))), /* @__PURE__ */ _react2.default.createElement(NDBInsight, null), /* @__PURE__ */ _react2.default.createElement("hr", null), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[20px] font-medium` }, "Financial Performace"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex gap-4` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col` }, /* @__PURE__ */ _react2.default.createElement(
    NDBFinancialCard,
    {
      mainColor: "blue",
      miniInfoType: "value",
      label: "Revenue",
      value: "Rp 120 Miliar",
      sublabel: "Target",
      subvalue: "3 Miliar",
      miniInfoValue: "70%",
      forecast: "Rp 3.2 Miliar"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col` }, /* @__PURE__ */ _react2.default.createElement(
    NDBFinancialCard,
    {
      mainColor: "green",
      miniInfoType: "change",
      label: "Operating Cost",
      value: "Rp 85 Miliar",
      sublabel: "Profit Margin",
      subvalue: "40.5%",
      miniInfoValue: "5.2%",
      forecast: "Rp 1.25 Miliar"
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col` }, /* @__PURE__ */ _react2.default.createElement(
    NDBFinancialCard,
    {
      mainColor: "yellow",
      miniInfoType: "change",
      label: "EBITDA",
      value: "Rp 35 Miliar",
      sublabel: "Margin",
      subvalue: "40.4%",
      miniInfoValue: "5.2%",
      forecast: "Rp 890 Juta"
    }
  ))), /* @__PURE__ */ _react2.default.createElement(NDBInsight, null), /* @__PURE__ */ _react2.default.createElement("hr", null), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[20px] font-medium` }, "Sales Performance"), /* @__PURE__ */ _react2.default.createElement(NDBSalesFunnel, null), /* @__PURE__ */ _react2.default.createElement(NDBInsight, null), /* @__PURE__ */ _react2.default.createElement("hr", null), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[20px] font-medium` }, "Customer Insights"), /* @__PURE__ */ _react2.default.createElement("hr", null), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[20px] font-medium` }, "9 Box Performance Quadrant"), /* @__PURE__ */ _react2.default.createElement(NDB9BoxQuandrantWithSummary, null), /* @__PURE__ */ _react2.default.createElement("br", null), /* @__PURE__ */ _react2.default.createElement("br", null));
}

// src/new-design/auth-pages/LoginPage.tsx


// src/new-design/b64-images/LogoPNG.ts
var LogoPNG = "data:image/png;base64,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";

// src/new-design/general/Label.tsx

function Label(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-2` }, props.label && /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px]` }, props.label), props.children);
}

// src/new-design/general/InputText.tsx


// src/new-design/b64-images/MailSVG.ts
var MailSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljk5OTkgNi4xNTIzMlY5LjQ5MjE0QzE3Ljk5OTkgOS44ODA0OCAxNy42ODUxIDEwLjE5NTMgMTcuMjk2OCAxMC4xOTUzQzE2LjkwODQgMTAuMTk1MyAxNi41OTM3IDkuODgwNDggMTYuNTkzNyA5LjQ5MjE0VjYuMTUyMzJDMTYuNTkzNyA0LjYwMTUyIDE1LjMzMiAzLjMzOTg0IDEzLjc4MTIgMy4zMzk4NEg0LjIxODczQzIuNjY3OTIgMy4zMzk4NCAxLjQwNjI0IDQuNjAxNTIgMS40MDYyNCA2LjE1MjMyVjExLjg0NzZDMS40MDYyNCAxMy4zOTg0IDIuNjY3OTIgMTQuNjYwMSA0LjIxODczIDE0LjY2MDFIOC42MTMyM0M5LjAwMTU2IDE0LjY2MDEgOS4zMTYzNSAxNC45NzQ5IDkuMzE2MzUgMTUuMzYzMkM5LjMxNjM1IDE1Ljc1MTUgOS4wMDE1NiAxNi4wNjYzIDguNjEzMjMgMTYuMDY2M0g0LjIxODczQzEuODkyNTIgMTYuMDY2MyAwIDE0LjE3MzggMCAxMS44NDc2VjYuMTUyMzJDMCAzLjgyNjExIDEuODkyNTIgMS45MzM1OSA0LjIxODczIDEuOTMzNTlIMTMuNzgxMkMxNi4xMDc0IDEuOTMzNTkgMTcuOTk5OSAzLjgyNjA4IDE3Ljk5OTkgNi4xNTIzMlpNMTQuOTQ1OSA3LjY5NTY3QzE1LjI1NDcgNy40NjAxMiAxNS4zMTQgNy4wMTg5MiAxNS4wNzg1IDYuNzEwMThDMTQuODQyOSA2LjQwMTQ3IDE0LjQwMTcgNi4zNDIxMyAxNC4wOTMgNi41Nzc2NEwxMC43MDU2IDkuMTYxOTlDOS43MDEzNSA5LjkyNzk0IDguMjk4NTUgOS45Mjc5NCA3LjI5NDMyIDkuMTYxOTlMMy45NDIwMSA2LjYwNTEzQzMuNjMzMjQgNi4zNjk2MiAzLjE5MjAzIDYuNDI5IDIuOTU2NTUgNi43Mzc3N0MyLjcyMTA0IDcuMDQ2NTUgMi43ODA0NiA3LjQ4Nzc2IDMuMDg5MiA3LjcyMzIzTDYuNDQxNSAxMC4yODAxQzcuMTk0NjggMTAuODU0NSA4LjA5NzI4IDExLjE0MTggOC45OTk5MSAxMS4xNDE4QzkuOTAyNTQgMTEuMTQxOCAxMC44MDUyIDEwLjg1NDUgMTEuNTU4NSAxMC4yOEwxNC45NDU5IDcuNjk1NjdaIiBmaWxsPSIjOERBNkM0Ii8+CjxwYXRoIGQ9Ik0wIDExLjg0NzZWOC41MDc3N0MwIDguMTE5NDQgMC4zMTQ3ODcgNy44MDQ2NSAwLjcwMzEyMSA3LjgwNDY1QzEuMDkxNDUgNy44MDQ2NSAxLjQwNjI0IDguMTE5NDQgMS40MDYyNCA4LjUwNzc3TDEuNDA2MjQgMTEuODQ3NkMxLjQwNjI0IDEzLjM5ODQgMi42Njc5MiAxNC42NjAxIDQuMjE4NzMgMTQuNjYwMUgxMy43ODEyQzE1LjMzMiAxNC42NjAxIDE2LjU5MzcgMTMuMzk4NCAxNi41OTM3IDExLjg0NzZWNi4xNTIzMkMxNi41OTM3IDQuNjAxNTIgMTUuMzMyIDMuMzM5ODQgMTMuNzgxMiAzLjMzOTg0SDkuMzg2NjZDOC45OTgzMyAzLjMzOTg0IDguNjgzNTQgMy4wMjUwNSA4LjY4MzU0IDIuNjM2NzFDOC42ODM1NCAyLjI0ODM4IDguOTk4MzMgMS45MzM1OSA5LjM4NjY2IDEuOTMzNTlMMTMuNzgxMiAxLjkzMzU5QzE2LjEwNzQgMS45MzM1OSAxNy45OTk5IDMuODI2MDggMTcuOTk5OSA2LjE1MjMyVjExLjg0NzZDMTcuOTk5OSAxNC4xNzM4IDE2LjEwNzQgMTYuMDY2MyAxMy43ODEyIDE2LjA2NjNINC4yMTg3M0MxLjg5MjUyIDE2LjA2NjMgMCAxNC4xNzM4IDAgMTEuODQ3NloiIGZpbGw9IiM4REE2QzQiLz4KPC9zdmc+Cg==";

// src/new-design/b64-images/PasswordSVG.ts
var PasswordSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDIzMjMgMTcuOTY0OEM0LjkzODczIDE3Ljk2NDggMS42NTIzNCAxNC42ODY3IDEuNjUyMzQgMTAuNjEyNVY4LjQ1ODNDMS42NTIzNCA2LjkxMjkgMi45MTk5NSA1LjY5NTMxIDQuNDIyMjkgNS42OTUzMUgxMy41NzcyQzE1LjEyNjUgNS42OTUzMSAxNi4zNDcyIDYuOTU5NzMgMTYuMzQ3MiA4LjQ1ODNWMTAuNjEyNUMxNi4zOTQxIDE0LjYzOTkgMTMuMDYwOCAxNy45NjQ4IDkuMDIzMjMgMTcuOTY0OFpNNC40MjIyOSA3LjE1NDNDMy43NDQxNCA3LjE1NDMgMy4xNjQwNiA3LjY5OTIyIDMuMTY0MDYgOC40MTE0N1YxMC41NjU3QzMuMTY0MDYgMTQuMTI0OCA2LjAyOTMgMTYuNTQxIDkuMDIzMjMgMTYuNTQxQzEyLjAxNzIgMTYuNTQxIDE0LjgwMDggMTQuMTI0OCAxNC44MDA4IDEwLjU2NTdWOC40MTE0N0MxNC44MDA4IDcuNzE2OCAxNC4yNzM0IDcuMTU0MyAxMy41NzcyIDcuMTU0M0g0LjQyMjI5WiIgZmlsbD0iIzhEQTZDNCIvPgo8cGF0aCBkPSJNMTMuMDk1NyA2LjU3NDIyQzEyLjY3MzggNi41NzQyMiAxMi4yNjk1IDYuMjIzMTYgMTIuMjY5NSA1Ljk0MTQxVjQuMjE4NzVDMTIuMjY5NSAyLjcwNzAzIDExLjE2MjEgMS40NTg5OCA5LjAxNzU4IDEuNDU4OThDNi44NzMwNSAxLjQ1ODk4IDUuNzMwNDcgMi43NzczNCA1LjczMDQ3IDQuMjE4NzVWNS45NDE0MUM1LjczMDQ3IDYuMjIzMTYgNS4zOTY0OCA2LjU3NDIyIDQuOTkyMTkgNi41NzQyMkM0LjU4Nzg5IDYuNTc0MjIgNC4yMTg3NSA2LjIyMzE2IDQuMjE4NzUgNS45NDE0MVY0LjIxODc1QzQuMjE4NzUgMS41ODkwNiA2LjcxNDg0IDAgOS4wMTc1OCAwQzExLjQ2MDkgMCAxMy44MTY0IDEuNTg5MDYgMTMuODE2NCA0LjIxODc1VjUuOTQxNDFDMTMuODE2NCA2LjE3NjIgMTMuNSA2LjU3NDIyIDEzLjA5NTcgNi41NzQyMloiIGZpbGw9IiM4REE2QzQiLz4KPHBhdGggZD0iTTkuMDE3NTggMTMuNDI5N0M4LjczMjgxIDEzLjQyOTcgOC41NDI5NyAxMy4yNDAzIDguNTQyOTcgMTIuOTU2M1YxMC4zNTIzQzguNTQyOTcgMTAuMDY4MyA4LjczMjgxIDkuODc4OTEgOS4wMTc1OCA5Ljg3ODkxQzkuMzAyMzQgOS44Nzg5MSA5LjQ5MjE5IDEwLjA2ODMgOS40OTIxOSAxMC4zNTIzVjEyLjk1NjNDOS40OTIxOSAxMy4yNDAzIDkuMjU0ODggMTMuNDI5NyA5LjAxNzU4IDEzLjQyOTdaIiBmaWxsPSIjOERBNkM0Ii8+Cjwvc3ZnPgo=";

// src/new-design/b64-images/UserSVG.ts
var UserSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljk4Mjk2IDExLjE2NDRMOS4xMDM5NyAxMS4xNjQ1TDkuMzc0NjYgMTEuMTY1NEMxMS40NDM3IDExLjE3OSAxNi4xNzE5IDExLjM4ODEgMTYuMTcxOSAxNC41OTM5QzE2LjE3MTkgMTcuNzc4NyAxMS42MDg1IDE3Ljk4NjUgOS40MDY5MSAxOEw4LjU5MTI0IDE4QzYuNTIyMTIgMTcuOTg2NCAxLjc5Mjk3IDE3Ljc3NzYgMS43OTI5NyAxNC41NzU3QzEuNzkyOTcgMTEuMzg2OSA2LjUyMjEyIDExLjE3ODkgOC41OTEyNCAxMS4xNjU0TDguODYxOTUgMTEuMTY0NUM4LjkwMzk0IDExLjE2NDQgOC45NDQzMSAxMS4xNjQ0IDguOTgyOTYgMTEuMTY0NFpNOC45ODI5NiAxMi43NzI1QzYuNDM2NjEgMTIuNzcyNSAzLjQwMDUxIDEzLjA4NTYgMy40MDA1MSAxNC41NzU3QzMuNDAwNTEgMTYuMDMyMiA2LjI1NTQgMTYuMzcyNyA4Ljc1MDIyIDE2LjM5Mkw4Ljk4Mjk2IDE2LjM5MjlDMTEuNTI5MyAxNi4zOTI5IDE0LjU2NDMgMTYuMDgwOSAxNC41NjQzIDE0LjU5MzlDMTQuNTY0MyAxMy4wODg4IDExLjUyOTMgMTIuNzcyNSA4Ljk4Mjk2IDEyLjc3MjVaTTguOTgyOTYgMEMxMS42ODM2IDAgMTMuODc5NSAyLjE5NzcyIDEzLjg3OTUgNC44OTgyNEMxMy44Nzk1IDcuNTk4NzUgMTEuNjgzNiA5Ljc5NjQ4IDguOTgyOTYgOS43OTY0OEg4Ljk1NDAyQzcuNjQ2NTYgOS43OTIxOSA2LjQyMTYxIDkuMjc5NzQgNS41MDQyNCA4LjM1MzQ5QzQuNTg0NzMgNy40MjgzIDQuMDgyMSA2LjE5OTcyIDQuMDg3NDIgNC44OTUwMkM0LjA4NzQyIDIuMTk3NzIgNi4yODMzNiAwIDguOTgyOTYgMFpNOC45ODI5NiAxLjYwODA5QzcuMTY5NjUgMS42MDgwOSA1LjY5NDk4IDMuMDg0MzEgNS42OTQ5OCA0Ljg5ODI0QzUuNjkxNzkgNS43NzczMyA2LjAyODMgNi41OTk2IDYuNjQ0NTIgNy4yMjAzMkM3LjI2MDc1IDcuODQxMDQgOC4wOTAzNCA4LjE4ODE5IDguOTY0ODQgOC4xOTE0MUMxMC43NzgxIDguMTkxNDEgMTIuMjcyIDYuNzEzMjMgMTIuMjcyIDQuODk4MjRDMTIuMjcyIDMuMDg0MzEgMTAuNzk2MyAxLjYwODA5IDguOTgyOTYgMS42MDgwOVoiIGZpbGw9IiM4REE2QzQiLz4KPC9zdmc+Cg==";

// src/new-design/general/InputIconType.ts
function getIcon(type) {
  switch (type) {
    case "user":
      return UserSVG;
    case "email":
      return MailSVG;
    case "password":
      return PasswordSVG;
  }
}

// src/new-design/general/InputText.tsx
function InputText(props) {
  let version = "v1";
  if (props.v2) {
    version = "v2";
  }
  let icon = props.icon ? getIcon(props.icon) : null;
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center` }, version == "v1" && /* @__PURE__ */ _react2.default.createElement(
    "input",
    __spreadProps(__spreadValues({}, props), {
      className: `border border-[1.5px] text-[13px] bg-[#F9FAFB] border-[#EAEFF5] w-full p-[12px_12px] rounded-[12px] ${icon ? "pl-[48px]" : ""} ${props.className || ""}`
    })
  ), version == "v2" && /* @__PURE__ */ _react2.default.createElement(
    "input",
    __spreadProps(__spreadValues({}, props), {
      className: `border border-[1.5px] text-[13px] placeholder-[#8DA6C4] border-[#8DA6C4] p-[12px_12px] rounded-[12px] ${icon ? "pl-[48px]" : ""} ${props.className || ""}`
    })
  ), icon && /* @__PURE__ */ _react2.default.createElement("img", { src: icon, className: `absolute w-[17px] h-[17px] ml-[18px] object-contain` }));
}

// src/new-design/general/Button.tsx

function Button(props) {
  if (props.smaller) {
    return /* @__PURE__ */ _react2.default.createElement(
      "button",
      __spreadProps(__spreadValues({}, props), {
        className: `relative border border-px border-[#0066B9] text-white bg-[#0066B9] rounded-[10px] text-[13px] p-[8px_28px] font-[Poppins] ${props.className || ""}`
      }),
      props.children,
      props.loading && /* @__PURE__ */ _react2.default.createElement("div", { className: `absolute bg-white flex items-center justify-center w-full h-full left-0 top-0 bg-[#FFFD] rounded-full` }, /* @__PURE__ */ _react2.default.createElement("div", { className: "tloading" }))
    );
  }
  return /* @__PURE__ */ _react2.default.createElement(
    "button",
    __spreadProps(__spreadValues({}, props), {
      className: `bg-[#0066B9] text-white rounded-full p-[10px_20px] text-[18px] font-semibold relative ${props.className || ""}`
    }),
    props.children,
    props.loading && /* @__PURE__ */ _react2.default.createElement("div", { className: `absolute bg-white flex items-center justify-center w-full h-full left-0 top-0 bg-[#FFFD] rounded-full` }, /* @__PURE__ */ _react2.default.createElement("div", { className: "tloading" }))
  );
}

// src/new-design/auth-pages/LoginPage.tsx
function LoginPage(props) {
  const [data, setData] = _react.useState.call(void 0, {
    company_code: "",
    email: "",
    password: ""
  });
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex font-[Poppins] h-screen` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `object-contain h-full`,
      src: "https://res.cloudinary.com/dtcgdxy2r/image/upload/v1745385427/Item_Left_slyxfu.png"
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col justify-center px-[13%] gap-5 overflow-auto` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `h-[42px] object-contain object-left`,
      src: LogoPNG
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[36px] font-semibold my-6` }, "Login"), /* @__PURE__ */ _react2.default.createElement(Label, { label: `Company Code` }, /* @__PURE__ */ _react2.default.createElement(
    InputText,
    {
      value: data.company_code,
      onChange: (e) => setData(__spreadProps(__spreadValues({}, data), { company_code: e.target.value })),
      placeholder: "Input Company Code",
      className: `w-full`,
      icon: "user",
      onKeyUp: (e) => e.key === "Enter" && props.onSubmit(data)
    }
  )), /* @__PURE__ */ _react2.default.createElement(Label, { label: `Email` }, /* @__PURE__ */ _react2.default.createElement(
    InputText,
    {
      value: data.email,
      onChange: (e) => setData(__spreadProps(__spreadValues({}, data), { email: e.target.value })),
      placeholder: "Input Email",
      className: `w-full`,
      type: "email",
      icon: "email",
      onKeyUp: (e) => e.key === "Enter" && props.onSubmit(data)
    }
  )), /* @__PURE__ */ _react2.default.createElement(Label, { label: `Password` }, /* @__PURE__ */ _react2.default.createElement(
    InputText,
    {
      value: data.password,
      onChange: (e) => setData(__spreadProps(__spreadValues({}, data), { password: e.target.value })),
      placeholder: "Input Password",
      className: `w-full`,
      type: "password",
      icon: "password",
      onKeyUp: (e) => e.key === "Enter" && props.onSubmit(data)
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex justify-between` }, props.error && /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#EE1D52] text-[14px]` }, props.error), props.forgotPasswordURL && /* @__PURE__ */ _react2.default.createElement(
    "a",
    {
      href: props.forgotPasswordURL,
      className: `text-[#A1AFC0] text-[15px]`
    },
    "Forgot password?"
  )), /* @__PURE__ */ _react2.default.createElement(
    Button,
    {
      loading: props.loading,
      onClick: () => props.onSubmit(data)
    },
    "Login"
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] text-[14px] text-center mt-4` }, "@2025 - Powered by Terampil Business")));
}

// src/new-design/general/DashboardInformationSummary.tsx


// src/new-design/b64-images/DashboardIS1SVG.ts
var DashboardIS1SVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjYiIGZpbGw9IiMwMDY2QjkiLz4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMSAxMSkiIGZpbGw9IiMwMDY2QjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxOC41QzE2IDE1LjczODYgMTguMjM4NiAxMy41IDIxIDEzLjVIMjguNVYxOC41QzI4LjUgMjEuMjYxNCAzMC43Mzg2IDIzLjUgMzMuNSAyMy41SDM2VjMzLjVDMzYgMzYuMjYxNCAzMy43NjE0IDM4LjUgMzEgMzguNUgyMUMxOC4yMzg2IDM4LjUgMTYgMzYuMjYxNCAxNiAzMy41VjE4LjVaTTIxIDI0Ljc1QzIwLjMwOTYgMjQuNzUgMTkuNzUgMjUuMzA5NiAxOS43NSAyNkMxOS43NSAyNi42OTA0IDIwLjMwOTYgMjcuMjUgMjEgMjcuMjVIMjMuNUMyNC4xOTA0IDI3LjI1IDI0Ljc1IDI2LjY5MDQgMjQuNzUgMjZDMjQuNzUgMjUuMzA5NiAyNC4xOTA0IDI0Ljc1IDIzLjUgMjQuNzVIMjFaTTIxIDI5Ljc1QzIwLjMwOTYgMjkuNzUgMTkuNzUgMzAuMzA5NiAxOS43NSAzMUMxOS43NSAzMS42OTA0IDIwLjMwOTYgMzIuMjUgMjEgMzIuMjVIMjZDMjYuNjkwNCAzMi4yNSAyNy4yNSAzMS42OTA0IDI3LjI1IDMxQzI3LjI1IDMwLjMwOTYgMjYuNjkwNCAyOS43NSAyNiAyOS43NUgyMVpNMzEuODUyMiAxNi4yNDg1TDMxLjY4ODYgMTguNzAzNkMzMS42MzgzIDE5LjQ1ODIgMzIuMjY0MyAyMC4wODQzIDMzLjAxODkgMjAuMDM0TDM1LjQ3NDEgMTkuODcwM0MzNi41NDU2IDE5Ljc5ODkgMzcuMDM0MiAxOC40OTg2IDM2LjI3NDggMTcuNzM5MkwzMy45ODM0IDE1LjQ0NzhDMzMuMjI0IDE0LjY4ODQgMzEuOTIzNyAxNS4xNzY5IDMxLjg1MjIgMTYuMjQ4NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";

// src/new-design/b64-images/DashboardIS2SVG.ts
var DashboardIS2SVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjYiIGZpbGw9IiMwMERGQzAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS43ODI3IDE3LjU4MTdMMjcuNjU3OSAxOC4xNzA5QzI3LjAyNzcgMTguMjYwOSAyNi41MTI5IDE4LjU2MTMgMjYuMTQ1MiAxOC45NzY0TDE2LjUyMDkgMjguNjAwN0MxNS41NDQ2IDI5LjU3NyAxNS41NDQ2IDMxLjE1OTkgMTYuNTIwOSAzMi4xMzYyTDIwLjA1NjUgMzUuNjcxOEMyMS4wMzI4IDM2LjY0ODEgMjIuNjE1NyAzNi42NDgxIDIzLjU5MiAzNS42NzE4TDMzLjIxNjMgMjYuMDQ3NUMzMy42MzE0IDI1LjY3OTggMzMuOTMxOCAyNS4xNjUgMzQuMDIxOCAyNC41MzQ4TDM0LjYxMTEgMjAuNDFDMzQuODQ2OCAxOC43NjAyIDMzLjQzMjUgMTcuMzQ1OSAzMS43ODI3IDE3LjU4MTdaTTI4Ljg5NTMgMjMuMjk3NEMyOS4zODM0IDIzLjc4NTUgMzAuMTc0OSAyMy43ODU2IDMwLjY2MzEgMjMuMjk3NEMzMS4xNTEyIDIyLjgwOTIgMzEuMTUxMiAyMi4wMTc4IDMwLjY2MzEgMjEuNTI5NkMzMC4xNzQ5IDIxLjA0MTUgMjkuMzgzNSAyMS4wNDE1IDI4Ljg5NTMgMjEuNTI5NkMyOC40MDcxIDIyLjAxNzggMjguNDA3MiAyMi44MDkzIDI4Ljg5NTMgMjMuMjk3NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";

// src/new-design/b64-images/DashboardISBG1SVG.ts
var DashboardISBG1SVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQzIiBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDM0MyAxODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNDMiIGhlaWdodD0iMTg1IiByeD0iMTYiIGZpbGw9IiNFOEY1RkYiLz4KPHBhdGggZD0iTTMyNyAxODVDMzM2IDE4NSAzNDMgMTc3LjUgMzQzIDE2OVY4NUMzMzQuNSA3NyAzMjUuMDQxIDczLjM2OTggMzExIDcxLjVDMjkyLjAyMSA2OS4xNjAyIDI3NiA3MiAyNjguNSA3OC41QzI2Mi43MzEgODMuNSAyNDkuNSA5Mi41IDI0MiA4Ni41QzIyNiA3NS41IDIwMy4yMzkgNjkuODg2MyAxODIgNjlDMTczLjUgNjkgMTY2LjE2NCA3Mi41MTI1IDE1Ny41IDc4LjVDMTU0LjUgODAuNTczMiAxNDYgODAuNSAxNDIuNSA3OC41QzEzNS45MDUgNzQuMjExNyAxMzIuMTgzIDczLjE3MTIgMTI1LjUgNzNDMTE0LjI4NSA3My44MjcxIDEwNS43MzYgNzguODk2IDg1LjUgOThDODEgMTAyIDcxLjUgMTAyLjUgNjcuNSA5OEM1MS45Njg5IDgwLjUyNzYgMjYuNSA3Ny41IDAgNzcuOTk5OFYxNjlDMCAxNzggNy41IDE4NSAxNiAxODVIMzI3WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zNiIvPgo8L3N2Zz4K";

// src/new-design/b64-images/DashboardISBG2SVG.ts
var DashboardISBG2SVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQzIiBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDM0MyAxODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNDMiIGhlaWdodD0iMTg1IiByeD0iMTYiIGZpbGw9IiNEOEZCRjYiLz4KPHBhdGggZD0iTTM0MyAxNjkuMDM3Vjc3LjI1MzNDMzQwLjUgNzAuOTk5OSAzMjYuNSA2OC40OTk5IDMyMC41IDY4LjQ5OTlDMzIwLjUgNjguNDk5OSAyOTEgNjUuNDk5OSAyODMuNSA3Ny4yNTMzQzI3NiA4OS4wMDY3IDI1MC41IDEwNi4xOTEgMjQzLjUgOTYuOTk5OUMyMjYuMTYyIDc0LjIzNDggMjE2LjUxNyA2OS42NTA1IDE5OS41IDY4Ljk5OTlDMTg0IDY4Ljk5OTkgMTY4LjI4IDcxLjc2ODggMTU5LjUgNzcuMjUzM0MxNDkuNSA4My41IDE0NS42OCA4OCAxMzkgMTAzLjE0NUMxMzUuNTM2IDExMSAxMjIuNSAxMDkuNDc3IDEyMCAxMDMuMTQ1QzExMy42MjUgODYuOTk5OSAxMDcuNSA3OC4yNTExIDkyLjUgNzguMjUxMUM3Ny41IDc4LjI1MTEgNjguODk4MSA5Mi42OTU2IDU0LjUgMTA1LjE4OEM0OSAxMTAuMTc2IDQyLjUgMTExLjAwNyAzOSAxMDUuMTg4QzMxLjUgOTIuNzE3MSAxMCA3Ni4yNTU4IDAgNzUuMjU4MlYxNjkuMDM3QzAgMTc4LjAxNiA3LjUgMTg1IDE2IDE4NUgzMjdDMzM2LjUgMTg1IDM0MyAxNzcuNTE4IDM0MyAxNjkuMDM3WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zNiIvPgo8L3N2Zz4K";

// src/common/ProgressValue.tsx

function ProgressValue(props) {
  const normalized_value = Math.round(Math.max(0, Math.min(100, props.value || 0)));
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: props.style1,
      className: `bg-blue-100 h-[5px] overflow-hidden rounded-full ${props.class1}`
    },
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        style: __spreadValues({
          width: `${normalized_value}%`
        }, props.style2),
        className: `bg-blue-500 h-full rounded-full ${props.class2}`
      }
    )
  );
}

// src/new-design/general/DashboardInformationSummary.tsx
function DashboardInformationSummary(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 flex flex-col gap-1 font-[Poppins]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `font-medium text-[18px]` }, "Information Summary"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px]` }, "Summary information data"), /* @__PURE__ */ _react2.default.createElement("div", { className: `rounded-[12px] flex gap-3 p-4 rounded-[16px] border border-[1.5px] border-gray-100 mt-2` }, [
    [
      DashboardIS1SVG,
      DashboardISBG1SVG,
      "Performance Progress",
      0.2,
      0.1,
      "On Track",
      "#0066B9"
    ],
    [
      DashboardIS2SVG,
      DashboardISBG2SVG,
      "Development Plan",
      0.4,
      0.1,
      "On Track",
      "#00DFC0"
    ]
  ].map(([icon, bg, title, progress, change_value, change_label, color]) => /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1 relative rounded-[12px] overflow-hidden` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `absolute w-full h-full object-cover z-1`,
      src: bg
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex flex-col gap-5 z-[2] p-[18px_14px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `w-[48px] h-[48px] object-contain`,
      src: icon
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `font-semibold text-[21px]` }, title)), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-1` }, /* @__PURE__ */ _react2.default.createElement("div", { style: { color }, className: `font-semibold text-[13px]` }, Math.round(+progress * 100), " %"), /* @__PURE__ */ _react2.default.createElement(
    ProgressValue,
    {
      style1: { background: "#D5E6F3" },
      style2: { background: color },
      value: +progress * 100
    }
  )), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-2` }, /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: { color },
      className: `p-[2px_6px] text-[14px]`
    },
    +change_value >= 0 ? "+" : "-",
    Math.round(+change_value * 100),
    "%"
  ), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[12px]` }, "than previous record")), /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      className: `text-[13px] font-medium`,
      style: { color }
    },
    change_label
  )))))));
}

// src/new-design/general/EmployeeFormCard.tsx

function EmployeeFormCard(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex ` });
}

// src/new-design/general/GeneralFormCard.tsx


// src/new-design/b64-images/CloseSVG.ts
var CloseSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNzM3MDYgMy42NzM4NEMxLjIwMjIzIDMuMTM5MDEgMS4yMDIyMyAyLjI3MTg5IDEuNzM3MDYgMS43MzcwNkMyLjI3MTg5IDEuMjAyMjMgMy4xMzkwMSAxLjIwMjIzIDMuNjczODQgMS43MzcwNkwxNi4yNjI5IDE0LjMyNjJDMTYuNzk3OCAxNC44NjEgMTYuNzk3OCAxNS43MjgxIDE2LjI2MjkgMTYuMjYyOUMxNS43MjgxIDE2Ljc5NzggMTQuODYxIDE2Ljc5NzggMTQuMzI2MiAxNi4yNjI5TDEuNzM3MDYgMy42NzM4NFoiIGZpbGw9IiNBMUFGQzAiLz4KPHBhdGggZD0iTTE0LjMyNjIgMS43MzcwNkMxNC44NjEgMS4yMDIyMyAxNS43MjgxIDEuMjAyMjMgMTYuMjYyOSAxLjczNzA2QzE2Ljc5NzggMi4yNzE4OSAxNi43OTc4IDMuMTM5MDEgMTYuMjYyOSAzLjY3Mzg0TDMuNjczODUgMTYuMjYyOUMzLjEzOTAyIDE2Ljc5NzggMi4yNzE4OSAxNi43OTc4IDEuNzM3MDYgMTYuMjYyOUMxLjIwMjIzIDE1LjcyODEgMS4yMDIyMyAxNC44NjEgMS43MzcwNiAxNC4zMjYyTDE0LjMyNjIgMS43MzcwNloiIGZpbGw9IiNBMUFGQzAiLz4KPC9zdmc+Cg==";

// src/new-design/general/GeneralFormCard.tsx
function GeneralFormCard(props) {
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: `bg-white flex flex-col font-[Poppins] rounded-[20px] overflow-hidden shadow-[0px_1px_25px_1px_rgba(0,0,0,.1)] ${props.className || ""}`
    }),
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex justify-between bg-[#F9FAFB] p-[12px_20px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `flex-1` }, "Edit Data Employee"), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-[12px]` }, /* @__PURE__ */ _react2.default.createElement(
      "img",
      {
        onClick: props.onCancel,
        className: `w-[16px] h-[16px] object-contain cursor-pointer`,
        src: CloseSVG
      }
    ))),
    props.children,
    /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-end gap-[12px] bg-[#F9FAFB] p-[12px_20px]` }, /* @__PURE__ */ _react2.default.createElement(
      "button",
      {
        onClick: props.onCancel,
        className: `outline-none bg-transparent rounded-[8px] text-[14px] p-[8px_24px] text-[#A1AFC0]`
      },
      "Cancel"
    ), /* @__PURE__ */ _react2.default.createElement(
      "button",
      {
        onClick: props.onSave,
        className: `outline-none bg-[#0066B9] text-white rounded-[8px] text-[14px] p-[8px_24px]`
      },
      "Save"
    ))
  );
}

// src/new-design/general/GeneralTab.tsx

function GeneralTab(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex overflow-x-auto font-[Poppins] border-b border-b-px border-b-[#EAEFF5]` }, props.tabs.map((tab, i) => {
    const active = props.active == tab;
    return /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        onClick: () => props.onTabChange(tab),
        className: `flex flex-col flex-1 cursor-pointer`
      },
      /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] text-center p-[16px] ${active ? "text-[#0066B9] font-medium" : "text-[#8DA6C4]"}` }, tab),
      /* @__PURE__ */ _react2.default.createElement("div", { className: active ? "bg-[#0066B9] h-[3px]" : "bg-transparent h-[3px]" })
    );
  }));
}

// src/new-design/general/InputTextarea.tsx

function InputTextarea(props) {
  let version = "v1";
  if (props.v2) {
    version = "v2";
  }
  let icon = props.icon ? getIcon(props.icon) : null;
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center` }, /* @__PURE__ */ _react2.default.createElement(
    "textarea",
    __spreadProps(__spreadValues({
      rows: 3
    }, props), {
      className: `border border-[1.5px] text-[13px] bg-[#F9FAFB] border-[#EAEFF5] w-full p-[12px_12px] rounded-[12px] ${icon ? "pl-[48px]" : ""} ${props.className || ""}`
    })
  ), icon && /* @__PURE__ */ _react2.default.createElement("img", { src: icon, className: `absolute w-[17px] h-[17px] ml-[18px] object-contain` }));
}

// src/new-design/general/Popup.tsx


function _Popup(props, ref) {
  const [show, setShow] = _react.useState.call(void 0, false);
  _react.useImperativeHandle.call(void 0, ref, () => ({
    open() {
      setShow(true);
    },
    close() {
      setShow(false);
    }
  }), []);
  if (!show) {
    return /* @__PURE__ */ _react2.default.createElement(_react2.default.Fragment, null);
  }
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      onMouseUp: (e) => setShow(false),
      className: `fixed top-0 left-0 w-screen h-screen z-[9999] bg-[#0005] p-[12px] flex flex-col`
    },
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      __spreadProps(__spreadValues({}, props), {
        className: `fade-in-down ${props.className || ""}`,
        onMouseUp: (e) => e.stopPropagation()
      }),
      props.children
    )
  );
}
var Popup = _react.forwardRef.call(void 0, _Popup);

// src/new-design/general/TableActions.tsx


// src/new-design/b64-images/EditSVG.ts
var EditSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExMV8xMTkyMikiPgo8cGF0aCBkPSJNMTguMzIwMyAxMC4zMzJDMTguMzIwMyAxNi44ODg4IDE2LjMwNzQgMTguOTA2MyA5Ljc2NTYyIDE4LjkwNjNDMy4yMjM4MSAxOC45MDYzIDEuMjEwOTQgMTYuODg4OCAxLjIxMDk0IDEwLjMzMkMxLjIxMDk0IDMuNzc1MjggMy4yMjM4MSAxLjc1NzgxIDkuNzY1NjIgMS43NTc4MSIgc3Ryb2tlPSIjOERBNkM0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguMTQ3OCA0LjUxMDQyTDEwLjg4MiAxMS43NzUyQzEwLjE1ODQgMTIuNDk4NiA4LjAxMDY0IDEyLjgzMzYgNy41MzA4MSAxMi4zNTM5QzcuMDUwOTkgMTEuODc0MSA3LjM3ODQ5IDkuNzI2NyA4LjEwMjAzIDkuMDAzMjdMMTUuMzc1NSAxLjczMDlDMTUuNTU0OSAxLjUzNTIzIDE1Ljc3MiAxLjM3Nzk1IDE2LjAxMzkgMS4yNjg1MkMxNi4yNTU3IDEuMTU5MSAxNi41MTczIDEuMDk5NzcgMTYuNzgyNyAxLjA5NDE4QzE3LjA0OCAxLjA4ODYgMTcuMzExOSAxLjEzNjg0IDE3LjU1ODEgMS4yMzU5OUMxNy44MDQzIDEuMzM1MTUgMTguMDI4IDEuNDgzMTkgMTguMjE1NCAxLjY3MTEyQzE4LjQwMjggMS44NTkwNiAxOC41NTAzIDIuMDgzMDIgMTguNjQ4NyAyLjMyOTQ5QzE4Ljc0NzIgMi41NzU5NyAxOC43OTQ4IDIuODM5ODMgMTguNzg4NSAzLjEwNTE4QzE4Ljc4MjIgMy4zNzA1MyAxOC43MjIxIDMuNjMxODcgMTguNjEyIDMuODczMzhDMTguNTAxOSA0LjExNDg5IDE4LjM0NCA0LjMzMTYxIDE4LjE0NzggNC41MTA0MloiIHN0cm9rZT0iIzhEQTZDNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTFfMTE5MjIiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

// src/new-design/b64-images/TrashSVG.ts
var TrashSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjgzNjkgNC44MDQ2OUgxOC4yNzczQzE4LjM1MDggNC44MDQ2NCAxOC40MjE0IDQuNzc1MzcgMTguNDczNCA0LjcyMzMxQzE4LjUyNTQgNC42NzEyNSAxOC41NTQ2IDQuNjAwNjYgMTguNTU0NyA0LjUyNzA0QzE4LjU1NDcgNC4yODk0IDE4LjUwOCA0LjA1NDA4IDE4LjQxNzEgMy44MzQ1M0MxOC4zMjYzIDMuNjE0OTcgMTguMTkzMSAzLjQxNTQ4IDE4LjAyNTIgMy4yNDc0NUMxNy44NTczIDMuMDc5NDEgMTcuNjU3OSAyLjk0NjEyIDE3LjQzODUgMi44NTUyQzE3LjIxOTIgMi43NjQyNyAxNi45ODQgMi43MTc0OSAxNi43NDY2IDIuNzE3NTJIMTMuOTkzNVYxLjk3Nzc2QzEzLjk5MjkgMS40NTM0MSAxMy43ODQ1IDAuOTUwNyAxMy40MTQgMC41Nzk5MjVDMTMuMDQzNSAwLjIwOTE1MSAxMi41NDEyIDAuMDAwNTkwNTQ3IDEyLjAxNzIgMEg3Ljk0MzczQzcuNDE5NzggMC4wMDA1OTIyODkgNi45MTc0NiAwLjIwOTE1MyA2LjU0Njk3IDAuNTc5OTI3QzYuMTc2NDggMC45NTA3MDEgNS45NjgwOCAxLjQ1MzQxIDUuOTY3NDkgMS45Nzc3NlYyLjcxNzUySDMuMjE0MzdDMi45NzY5MiAyLjcxNzQ5IDIuNzQxNzggMi43NjQyNyAyLjUyMjQgMi44NTUyQzIuMzAzMDEgMi45NDYxMiAyLjEwMzY4IDMuMDc5NDEgMS45MzU3NyAzLjI0NzQ1QzEuNzY3ODcgMy40MTU0OCAxLjYzNDY4IDMuNjE0OTcgMS41NDM4MyAzLjgzNDUzQzEuNDUyOTcgNC4wNTQwOCAxLjQwNjIyIDQuMjg5NCAxLjQwNjI1IDQuNTI3MDRDMS40MDYzIDQuNjAwNjYgMS40MzU1NSA0LjY3MTI1IDEuNDg3NTcgNC43MjMzMUMxLjUzOTU4IDQuNzc1MzcgMS42MTAxMiA0LjgwNDY0IDEuNjgzNjkgNC44MDQ2OVpNOC40MjY0MyAxLjI0NDY0SDExLjUzNDVDMTEuODU2OCAxLjI0NDY0IDEyLjE2NTkgMS4zNzI3OCAxMi4zOTM4IDEuNjAwODZDMTIuNjIxNyAxLjgyODk0IDEyLjc0OTggMi4xMzgyOSAxMi43NDk4IDIuNDYwODRWMi43MTc1Mkg3LjIxMTE3VjIuNDYwODRDNy4yMTExNyAyLjEzODI5IDcuMzM5MiAxLjgyODk0IDcuNTY3MTEgMS42MDA4NkM3Ljc5NTAyIDEuMzcyNzggOC4xMDQxMiAxLjI0NDY0IDguNDI2NDMgMS4yNDQ2NFoiIGZpbGw9IiNGRjQzNDMiLz4KPHBhdGggZD0iTTE3LjU1NDcgNi45NzY1NlY3LjIwMjE1QzE3LjU1MzQgNy4yMDc2NiAxNy41NTIzIDcuMjEzNTYgMTcuNTUwOCA3LjIxOTczQzE3LjUzMTIgNy4zMDA2IDE3LjUwMDkgNy40MTkzNyAxNy40NjE5IDcuNTcyMjdDMTcuMzg0MiA3Ljg3Njk2IDE3LjI3MzIgOC4zMDYzOSAxNy4xMzg3IDguODE5MzRDMTYuODY5NyA5Ljg0NDg2IDE2LjUxMDYgMTEuMTk4NiAxNi4xNTE0IDEyLjU0ODhDMTUuNzkyMiAxMy44OTkgMTUuNDMyNSAxNS4yNDQ5IDE1LjE2MzEgMTYuMjUyOUMxNS4wMjg0IDE2Ljc1NjkgMTQuOTE2NSAxNy4xNzcxIDE0LjgzNzkgMTcuNDcwN0MxNC43OTg3IDE3LjYxNzEgMTQuNzY3MSAxNy43MzIgMTQuNzQ2MSAxNy44MTA1QzE0LjczNTYgMTcuODQ5NiAxNC43MjgxIDE3Ljg4MDEgMTQuNzIyNyAxNy45MDA0QzE0LjcxOTkgMTcuOTEwNSAxNC43MTcyIDE3LjkxODcgMTQuNzE1OCAxNy45MjM4QzE0LjcxNTIgMTcuOTI2MyAxNC43MTUyIDE3LjkyODQgMTQuNzE0OCAxNy45Mjk3TDE0LjcxMzkgMTcuOTMwN1YxNy45MzE2QzE0LjcwNjIgMTcuOTYwMyAxNC42OTk0IDE3Ljk4OTMgMTQuNjk0MyAxOC4wMTg2TDE0LjY4MzYgMTguMTA2NEMxNC42NjU3IDE4LjMxOTcgMTQuNTc4MyAxOC41MjAyIDE0LjQzNjUgMTguNjc3N0wxNC4zNzIxIDE4Ljc0MzJDMTQuMTkyNSAxOC45MDg0IDEzLjk1NzUgMTguOTk5OSAxMy43MTM5IDE5SDYuMjQ3MDdMNi4xNTYyNSAxOC45OTYxQzUuOTQ1NjMgMTguOTc2MiA1Ljc0NjAxIDE4Ljg4NzggNS41ODg4NyAxOC43NDMyQzUuNDA5MTkgMTguNTc3OCA1LjI5NzgzIDE4LjM1MDMgNS4yNzczNCAxOC4xMDY0QzUuMjc0ODcgMTguMDc3IDUuMjcxNjcgMTguMDQ3NiA1LjI2NjYgMTguMDE4Nkw1LjI0NzA3IDE3LjkzMTZWMTcuOTMwN0w1LjI0NjA5IDE3LjkyOTdDNS4yNDU3NiAxNy45Mjg0IDUuMjQ1NzggMTcuOTI2MyA1LjI0NTEyIDE3LjkyMzhDNS4yNDM3NCAxNy45MTg3IDUuMjQxIDE3LjkxMDUgNS4yMzgyOCAxNy45MDA0QzUuMjMyODUgMTcuODgwMSA1LjIyNTMgMTcuODQ5NiA1LjIxNDg0IDE3LjgxMDVDNS4xOTM4MSAxNy43MzIgNS4xNjIyNCAxNy42MTcxIDUuMTIzMDUgMTcuNDcwN0M1LjA0NDQ2IDE3LjE3NzEgNC45MzI1OCAxNi43NTY5IDQuNzk3ODUgMTYuMjUyOUM0LjUyODQgMTUuMjQ0OSA0LjE2ODc2IDEzLjg5OSAzLjgwOTU3IDEyLjU0ODhDMy40NTAzNyAxMS4xOTg2IDMuMDkxMjggOS44NDQ4NiAyLjgyMjI3IDguODE5MzRDMi42ODc3MSA4LjMwNjM5IDIuNTc2NzggNy44NzY5NiAyLjQ5OTAyIDcuNTcyMjdDMi40NjAwMSA3LjQxOTM3IDIuNDI5NzMgNy4zMDA2IDIuNDEwMTYgNy4yMTk3M0MyLjQwODY2IDcuMjEzNTYgMi40MDc1NyA3LjIwNzY2IDIuNDA2MjUgNy4yMDIxNVY2Ljk3NjU2SDE3LjU1NDdaIiBzdHJva2U9IiNGRjQzNDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";

// src/new-design/general/TableActions.tsx
function TableActions(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-3` }, /* @__PURE__ */ _react2.default.createElement("img", { className: `w-4 object-contain`, src: EditSVG }), /* @__PURE__ */ _react2.default.createElement("img", { className: `w-4 object-contain`, src: TrashSVG }));
}

// src/new-design/general/TablePagination.tsx


// src/new-design/b64-images/ChevronRightSVG.ts
var ChevronRightSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTRMMTIgMTBMOCA2IiBzdHJva2U9IiMxMjFEMjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";

// src/new-design/b64-images/DoubleChevronRightSVG.ts
var DoubleChevronRightSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTRMOSAxMEw1IDYiIHN0cm9rZT0iIzEyMUQyNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExIDE0TDE1IDEwTDExIDYiIHN0cm9rZT0iIzEyMUQyNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";

// src/new-design/general/TablePagination.tsx
function TablePagination(props) {
  const max_page = Math.ceil(props.total / props.limit);
  const page_number = Math.round(props.offset / props.limit) + 1;
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-center text-[14px] relative font-[Poppins]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `z-[2] flex items-center gap-3` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#EAEFF5] p-2 rounded-[12px] rotate-180` }, /* @__PURE__ */ _react2.default.createElement("img", { className: `w-6 object-contain`, src: DoubleChevronRightSVG })), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#EAEFF5] p-2 rounded-[12px] rotate-180` }, /* @__PURE__ */ _react2.default.createElement("img", { className: `w-6 object-contain`, src: ChevronRightSVG })), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#0066B9] bg-[#0066B9] text-white text-center p-[8px_16px] rounded-[12px]` }, "1"), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#F9FAFB] bg-[#F9FAFB] text-[#8DA6C4] text-center p-[8px_16px] rounded-[12px]` }, "2"), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#F9FAFB] bg-[#F9FAFB] text-[#8DA6C4] text-center p-[8px_16px] rounded-[12px]` }, "3"), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#F9FAFB] bg-[#F9FAFB] text-[#8DA6C4] text-center p-[8px_16px] rounded-[12px]` }, "4"), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#F9FAFB] bg-[#F9FAFB] text-[#8DA6C4] text-center p-[8px_16px] rounded-[12px]` }, "5"), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#EAEFF5] p-2 rounded-[12px]` }, /* @__PURE__ */ _react2.default.createElement("img", { className: `w-6 object-contain`, src: ChevronRightSVG })), /* @__PURE__ */ _react2.default.createElement("div", { className: `border border-px border-[#EAEFF5] p-2 rounded-[12px]` }, /* @__PURE__ */ _react2.default.createElement("img", { className: `w-6 object-contain`, src: DoubleChevronRightSVG }))), /* @__PURE__ */ _react2.default.createElement("div", { className: `w-full absolute flex items-center justify-between z-1 text-[#8DA6C4]` }, /* @__PURE__ */ _react2.default.createElement("div", null, "Showing ", /* @__PURE__ */ _react2.default.createElement("b", null, "10"), " of 100 data"), /* @__PURE__ */ _react2.default.createElement("div", null, "Page 1 from 10")));
}

// src/new-design/general/TableSearchFilter.tsx


// src/new-design/b64-images/SearchSVG.ts
var SearchSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExMV8xMTgwNCkiPgo8cGF0aCBkPSJNNy42OTMzNiAxQzExLjM5OTUgMS4wMDAwOSAxNC4zODY3IDMuOTcxNTYgMTQuMzg2NyA3LjYxNTIzQzE0LjM4NjYgMTEuMjU4OCAxMS4zOTk0IDE0LjIyOTQgNy42OTMzNiAxNC4yMjk1QzMuOTg3MjQgMTQuMjI5NSAxLjAwMDE1IDExLjI1ODggMSA3LjYxNTIzQzEgMy45NzE1MSAzLjk4NzE1IDEgNy42OTMzNiAxWiIgc3Ryb2tlPSIjQTFBRkMwIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3Qgd2lkdGg9IjUuMzcyNjQiIGhlaWdodD0iMi4yMDc5MyIgcng9IjEuMTAzOTciIHRyYW5zZm9ybT0ibWF0cml4KDAuNzEwNzExIDAuNzAzNDg0IC0wLjcxMDcxMSAwLjcwMzQ4NCAxNC4xODE2IDEyLjY2OCkiIGZpbGw9IiNBMUFGQzAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTFfMTE4MDQiPgo8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

// src/new-design/general/TableSearchFilter.tsx
function TableSearchFilter(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center justify-between` }, /* @__PURE__ */ _react2.default.createElement("div", null, props.leftItem), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-4` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `relative flex items-center` }, /* @__PURE__ */ _react2.default.createElement(
    "img",
    {
      className: `absolute left-[16px] h-[16px] object-contain`,
      src: SearchSVG
    }
  ), /* @__PURE__ */ _react2.default.createElement(
    "input",
    {
      className: `pl-[42px] outline-none bg-[#F9FAFB] p-[12px_16px] text-[13px] font-[Poppins] rounded-[12px]`,
      placeholder: "Search id or name title",
      type: "text"
    }
  ))));
}

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require_form_data(), 1);
var FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (FormData_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params) {
    return url2;
  }
  const _encode = options && options.encode || encode2;
  if (utils_default.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var _url = require('url'); var _url2 = _interopRequireDefault(_url);
var URLSearchParams_default = _url2.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob !== "undefined" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  navigator: () => _navigator,
  origin: () => origin
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";

// node_modules/axios/lib/platform/index.js
var platform_default = __spreadValues(__spreadValues({}, utils_exports), node_default);

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value)) return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else if (utils_default.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = __toESM(require_proxy_from_env(), 1);
var import_follow_redirects = __toESM(require_follow_redirects(), 1);
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _https = require('https'); var _https2 = _interopRequireDefault(_https);
var _util = require('util'); var _util2 = _interopRequireDefault(_util);
var _zlib = require('zlib'); var _zlib2 = _interopRequireDefault(_zlib);

// node_modules/axios/lib/env/data.js
var VERSION = "1.7.9";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform_default.classes.Blob;
  const protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob) {
    asBlob = true;
  }
  if (protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    const match = DATA_URL_PATTERN.exec(uri);
    if (!match) {
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    }
    const mime = match[1];
    const isBase64 = match[2];
    const body = match[3];
    const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      }
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var _stream = require('stream'); var _stream2 = _interopRequireDefault(_stream);

// node_modules/axios/lib/helpers/AxiosTransformStream.js

var kInternals = Symbol("internals");
var AxiosTransformStream = class extends _stream2.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils_default.isUndefined(source[prop]);
    });
    super({
      readableHighWaterMark: options.chunkSize
    });
    const internals = this[kInternals] = {
      timeWindow: options.timeWindow,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (event) => {
      if (event === "progress") {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });
  }
  _read(size) {
    const internals = this[kInternals];
    if (internals.onReadCallback) {
      internals.onReadCallback();
    }
    return super._read(size);
  }
  _transform(chunk, encoding, callback) {
    const internals = this[kInternals];
    const maxRate = internals.maxRate;
    const readableHighWaterMark = this.readableHighWaterMark;
    const timeWindow = internals.timeWindow;
    const divider = 1e3 / timeWindow;
    const bytesThreshold = maxRate / divider;
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    const pushChunk = (_chunk, _callback) => {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;
      internals.isCaptured && this.emit("progress", internals.bytesSeen);
      if (this.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    };
    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;
      if (maxRate) {
        const now = Date.now();
        if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }
        bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0) {
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }
        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }
      if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }
      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }
      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }
};
var AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var _events = require('events');

// node_modules/axios/lib/helpers/formDataToStream.js



// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol;
var readBlob = function(blob) {
  return __asyncGenerator(this, null, function* () {
    if (blob.stream) {
      yield* __yieldStar(blob.stream());
    } else if (blob.arrayBuffer) {
      yield yield new __await(blob.arrayBuffer());
    } else if (blob[asyncIterator]) {
      yield* __yieldStar(blob[asyncIterator]());
    } else {
      yield blob;
    }
  });
};
var readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_";
var textEncoder = typeof TextEncoder === "function" ? new TextEncoder() : new _util2.default.TextEncoder();
var CRLF = "\r\n";
var CRLF_BYTES = textEncoder.encode(CRLF);
var CRLF_BYTES_COUNT = 2;
var FormDataPart = class {
  constructor(name, value) {
    const { escapeName } = this.constructor;
    const isStringValue = utils_default.isString(value);
    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
    }
    this.headers = textEncoder.encode(headers + CRLF);
    this.contentLength = isStringValue ? value.byteLength : value.size;
    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
    this.name = name;
    this.value = value;
  }
  encode() {
    return __asyncGenerator(this, null, function* () {
      yield this.headers;
      const { value } = this;
      if (utils_default.isTypedArray(value)) {
        yield value;
      } else {
        yield* __yieldStar(readBlob_default(value));
      }
      yield CRLF_BYTES;
    });
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
};
var formDataToStream = (form, headersHandler, options) => {
  const {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form)) {
    throw TypeError("FormData instance required");
  }
  if (boundary.length < 1 || boundary.length > 70) {
    throw Error("boundary must be 10-70 characters long");
  }
  const boundaryBytes = textEncoder.encode("--" + boundary + CRLF);
  const footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF);
  let contentLength = footerBytes.byteLength;
  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });
  contentLength += boundaryBytes.byteLength * parts.length;
  contentLength = utils_default.toFiniteNumber(contentLength);
  const computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  if (Number.isFinite(contentLength)) {
    computedHeaders["Content-Length"] = contentLength;
  }
  headersHandler && headersHandler(computedHeaders);
  return _stream.Readable.from(function() {
    return __asyncGenerator(this, null, function* () {
      for (const part of parts) {
        yield boundaryBytes;
        yield* __yieldStar(part.encode());
      }
      yield footerBytes;
    });
  }());
};
var formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js

var ZlibHeaderTransformStream = class extends _stream2.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;
      if (chunk[0] !== 120) {
        const header = Buffer.alloc(2);
        header[0] = 120;
        header[1] = 156;
        this.push(header, encoding);
      }
    }
    this.__transform(chunk, encoding, callback);
  }
};
var ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => {
  return utils_default.isAsyncFn(fn) ? function(...args) {
    const cb = args.pop();
    fn.apply(this, args).then((value) => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};
var callbackify_default = callbackify;

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return throttle_default((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
var progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: _zlib2.default.constants.Z_SYNC_FLUSH,
  finishFlush: _zlib2.default.constants.Z_SYNC_FLUSH
};
var brotliOptions = {
  flush: _zlib2.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: _zlib2.default.constants.BROTLI_OPERATION_FLUSH
};
var isBrotliSupported = utils_default.isFunction(_zlib2.default.createBrotliDecompress);
var { http: httpFollow, https: httpsFollow } = import_follow_redirects.default;
var isHttps = /https:?/;
var supportedProtocols = platform_default.protocols.map((protocol) => {
  return protocol + ":";
});
var flushOnFinish = (stream4, [throttled, flush]) => {
  stream4.on("end", flush).on("error", flush);
  return throttled;
};
function dispatchBeforeRedirect(options, responseDetails) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options, responseDetails);
  }
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = import_proxy_from_env.default.getProxyForUrl(location);
    if (proxyUrl) {
      proxy = new URL(proxyUrl);
    }
  }
  if (proxy) {
    if (proxy.username) {
      proxy.auth = (proxy.username || "") + ":" + (proxy.password || "");
    }
    if (proxy.auth) {
      if (proxy.auth.username || proxy.auth.password) {
        proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || "");
      }
      const base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    const proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost;
    options.host = proxyHost;
    options.port = proxy.port;
    options.path = location;
    if (proxy.protocol) {
      options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`;
    }
  }
  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process !== "undefined" && utils_default.kindOf(process) === "process";
var wrapAsync = (asyncExecutor) => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;
    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };
    const _resolve = (value) => {
      done(value);
      resolve(value);
    };
    const _reject = (reason) => {
      done(reason, true);
      reject(reason);
    };
    asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
  });
};
var resolveFamily = ({ address, family }) => {
  if (!utils_default.isString(address)) {
    throw TypeError("address must be a string");
  }
  return {
    address,
    family: family || (address.indexOf(".") < 0 ? 6 : 4)
  };
};
var buildAddressEntry = (address, family) => resolveFamily(utils_default.isObject(address) ? address : { address, family });
var http_default = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(function dispatchHttpRequest(resolve, reject, onDone) {
    return __async(this, null, function* () {
      let { data, lookup, family } = config;
      const { responseType, responseEncoding } = config;
      const method = config.method.toUpperCase();
      let isDone;
      let rejected = false;
      let req;
      if (lookup) {
        const _lookup = callbackify_default(lookup, (value) => utils_default.isArray(value) ? value : [value]);
        lookup = (hostname, opt, cb) => {
          _lookup(hostname, opt, (err, arg0, arg1) => {
            if (err) {
              return cb(err);
            }
            const addresses = utils_default.isArray(arg0) ? arg0.map((addr) => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
            opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
          });
        };
      }
      const emitter = new (0, _events.EventEmitter)();
      const onFinished = () => {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(abort);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", abort);
        }
        emitter.removeAllListeners();
      };
      onDone((value, isRejected) => {
        isDone = true;
        if (isRejected) {
          rejected = true;
          onFinished();
        }
      });
      function abort(reason) {
        emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
      }
      emitter.once("abort", reject);
      if (config.cancelToken || config.signal) {
        config.cancelToken && config.cancelToken.subscribe(abort);
        if (config.signal) {
          config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort);
        }
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      const parsed = new URL(fullPath, platform_default.hasBrowserEnv ? platform_default.origin : void 0);
      const protocol = parsed.protocol || supportedProtocols[0];
      if (protocol === "data:") {
        let convertedData;
        if (method !== "GET") {
          return settle(resolve, reject, {
            status: 405,
            statusText: "method not allowed",
            headers: {},
            config
          });
        }
        try {
          convertedData = fromDataURI(config.url, responseType === "blob", {
            Blob: config.env && config.env.Blob
          });
        } catch (err) {
          throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
        }
        if (responseType === "text") {
          convertedData = convertedData.toString(responseEncoding);
          if (!responseEncoding || responseEncoding === "utf8") {
            convertedData = utils_default.stripBOM(convertedData);
          }
        } else if (responseType === "stream") {
          convertedData = _stream2.default.Readable.from(convertedData);
        }
        return settle(resolve, reject, {
          data: convertedData,
          status: 200,
          statusText: "OK",
          headers: new AxiosHeaders_default(),
          config
        });
      }
      if (supportedProtocols.indexOf(protocol) === -1) {
        return reject(new AxiosError_default(
          "Unsupported protocol " + protocol,
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
      }
      const headers = AxiosHeaders_default.from(config.headers).normalize();
      headers.set("User-Agent", "axios/" + VERSION, false);
      const { onUploadProgress, onDownloadProgress } = config;
      const maxRate = config.maxRate;
      let maxUploadRate = void 0;
      let maxDownloadRate = void 0;
      if (utils_default.isSpecCompliantForm(data)) {
        const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
        data = formDataToStream_default(data, (formHeaders) => {
          headers.set(formHeaders);
        }, {
          tag: `axios-${VERSION}-boundary`,
          boundary: userBoundary && userBoundary[1] || void 0
        });
      } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
        headers.set(data.getHeaders());
        if (!headers.hasContentLength()) {
          try {
            const knownLength = yield _util2.default.promisify(data.getLength).call(data);
            Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
          } catch (e) {
          }
        }
      } else if (utils_default.isBlob(data) || utils_default.isFile(data)) {
        data.size && headers.setContentType(data.type || "application/octet-stream");
        headers.setContentLength(data.size || 0);
        data = _stream2.default.Readable.from(readBlob_default(data));
      } else if (data && !utils_default.isStream(data)) {
        if (Buffer.isBuffer(data)) {
        } else if (utils_default.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils_default.isString(data)) {
          data = Buffer.from(data, "utf-8");
        } else {
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
        }
        headers.setContentLength(data.length, false);
        if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
          return reject(new AxiosError_default(
            "Request body larger than maxBodyLength limit",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
        }
      }
      const contentLength = utils_default.toFiniteNumber(headers.getContentLength());
      if (utils_default.isArray(maxRate)) {
        maxUploadRate = maxRate[0];
        maxDownloadRate = maxRate[1];
      } else {
        maxUploadRate = maxDownloadRate = maxRate;
      }
      if (data && (onUploadProgress || maxUploadRate)) {
        if (!utils_default.isStream(data)) {
          data = _stream2.default.Readable.from(data, { objectMode: false });
        }
        data = _stream2.default.pipeline([data, new AxiosTransformStream_default({
          maxRate: utils_default.toFiniteNumber(maxUploadRate)
        })], utils_default.noop);
        onUploadProgress && data.on("progress", flushOnFinish(
          data,
          progressEventDecorator(
            contentLength,
            progressEventReducer(asyncDecorator(onUploadProgress), false, 3)
          )
        ));
      }
      let auth = void 0;
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password || "";
        auth = username + ":" + password;
      }
      if (!auth && parsed.username) {
        const urlUsername = parsed.username;
        const urlPassword = parsed.password;
        auth = urlUsername + ":" + urlPassword;
      }
      auth && headers.delete("authorization");
      let path;
      try {
        path = buildURL(
          parsed.pathname + parsed.search,
          config.params,
          config.paramsSerializer
        ).replace(/^\?/, "");
      } catch (err) {
        const customErr = new Error(err.message);
        customErr.config = config;
        customErr.url = config.url;
        customErr.exists = true;
        return reject(customErr);
      }
      headers.set(
        "Accept-Encoding",
        "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
        false
      );
      const options = {
        path,
        method,
        headers: headers.toJSON(),
        agents: { http: config.httpAgent, https: config.httpsAgent },
        auth,
        protocol,
        family,
        beforeRedirect: dispatchBeforeRedirect,
        beforeRedirects: {}
      };
      !utils_default.isUndefined(lookup) && (options.lookup = lookup);
      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname.startsWith("[") ? parsed.hostname.slice(1, -1) : parsed.hostname;
        options.port = parsed.port;
        setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
      }
      let transport;
      const isHttpsRequest = isHttps.test(options.protocol);
      options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsRequest ? _https2.default : _http2.default;
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        if (config.beforeRedirect) {
          options.beforeRedirects.config = config.beforeRedirect;
        }
        transport = isHttpsRequest ? httpsFollow : httpFollow;
      }
      if (config.maxBodyLength > -1) {
        options.maxBodyLength = config.maxBodyLength;
      } else {
        options.maxBodyLength = Infinity;
      }
      if (config.insecureHTTPParser) {
        options.insecureHTTPParser = config.insecureHTTPParser;
      }
      req = transport.request(options, function handleResponse(res) {
        if (req.destroyed) return;
        const streams = [res];
        const responseLength = +res.headers["content-length"];
        if (onDownloadProgress || maxDownloadRate) {
          const transformStream = new AxiosTransformStream_default({
            maxRate: utils_default.toFiniteNumber(maxDownloadRate)
          });
          onDownloadProgress && transformStream.on("progress", flushOnFinish(
            transformStream,
            progressEventDecorator(
              responseLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true, 3)
            )
          ));
          streams.push(transformStream);
        }
        let responseStream = res;
        const lastRequest = res.req || req;
        if (config.decompress !== false && res.headers["content-encoding"]) {
          if (method === "HEAD" || res.statusCode === 204) {
            delete res.headers["content-encoding"];
          }
          switch ((res.headers["content-encoding"] || "").toLowerCase()) {
            /*eslint default-case:0*/
            case "gzip":
            case "x-gzip":
            case "compress":
            case "x-compress":
              streams.push(_zlib2.default.createUnzip(zlibOptions));
              delete res.headers["content-encoding"];
              break;
            case "deflate":
              streams.push(new ZlibHeaderTransformStream_default());
              streams.push(_zlib2.default.createUnzip(zlibOptions));
              delete res.headers["content-encoding"];
              break;
            case "br":
              if (isBrotliSupported) {
                streams.push(_zlib2.default.createBrotliDecompress(brotliOptions));
                delete res.headers["content-encoding"];
              }
          }
        }
        responseStream = streams.length > 1 ? _stream2.default.pipeline(streams, utils_default.noop) : streams[0];
        const offListeners = _stream2.default.finished(responseStream, () => {
          offListeners();
          onFinished();
        });
        const response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: new AxiosHeaders_default(res.headers),
          config,
          request: lastRequest
        };
        if (responseType === "stream") {
          response.data = responseStream;
          settle(resolve, reject, response);
        } else {
          const responseBuffer = [];
          let totalResponseBytes = 0;
          responseStream.on("data", function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            totalResponseBytes += chunk.length;
            if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
              rejected = true;
              responseStream.destroy();
              reject(new AxiosError_default(
                "maxContentLength size of " + config.maxContentLength + " exceeded",
                AxiosError_default.ERR_BAD_RESPONSE,
                config,
                lastRequest
              ));
            }
          });
          responseStream.on("aborted", function handlerStreamAborted() {
            if (rejected) {
              return;
            }
            const err = new AxiosError_default(
              "stream has been aborted",
              AxiosError_default.ERR_BAD_RESPONSE,
              config,
              lastRequest
            );
            responseStream.destroy(err);
            reject(err);
          });
          responseStream.on("error", function handleStreamError(err) {
            if (req.destroyed) return;
            reject(AxiosError_default.from(err, null, config, lastRequest));
          });
          responseStream.on("end", function handleStreamEnd() {
            try {
              let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
              if (responseType !== "arraybuffer") {
                responseData = responseData.toString(responseEncoding);
                if (!responseEncoding || responseEncoding === "utf8") {
                  responseData = utils_default.stripBOM(responseData);
                }
              }
              response.data = responseData;
            } catch (err) {
              return reject(AxiosError_default.from(err, null, config, response.request, response));
            }
            settle(resolve, reject, response);
          });
        }
        emitter.once("abort", (err) => {
          if (!responseStream.destroyed) {
            responseStream.emit("error", err);
            responseStream.destroy();
          }
        });
      });
      emitter.once("abort", (err) => {
        reject(err);
        req.destroy(err);
      });
      req.on("error", function handleRequestError(err) {
        reject(AxiosError_default.from(err, null, config, req));
      });
      req.on("socket", function handleRequestSocket(socket) {
        socket.setKeepAlive(true, 1e3 * 60);
      });
      if (config.timeout) {
        const timeout = parseInt(config.timeout, 10);
        if (Number.isNaN(timeout)) {
          reject(new AxiosError_default(
            "error trying to parse `config.timeout` to int",
            AxiosError_default.ERR_BAD_OPTION_VALUE,
            config,
            req
          ));
          return;
        }
        req.setTimeout(timeout, function handleRequestTimeout() {
          if (isDone) return;
          let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          const transitional2 = config.transitional || transitional_default;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError_default(
            timeoutErrorMessage,
            transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
            config,
            req
          ));
          abort();
        });
      }
      if (utils_default.isStream(data)) {
        let ended = false;
        let errored = false;
        data.on("end", () => {
          ended = true;
        });
        data.once("error", (err) => {
          errored = true;
          req.destroy(err);
        });
        data.on("close", () => {
          if (!ended && !errored) {
            abort(new CanceledError_default("Request stream has been aborted", config, req));
          }
        });
        data.pipe(req);
      } else {
        req.end(data);
      }
    });
  });
};

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url2) => {
  url2 = new URL(url2, platform_default.origin);
  return origin2.protocol === url2.protocol && origin2.host === url2.host && (isMSIE || origin2.port === url2.port);
})(
  new URL(platform_default.origin),
  platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
) : () => true;

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils_default.isString(path) && cookie.push("path=" + path);
      utils_default.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? __spreadValues({}, thing) : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/resolveConfig.js
var resolveConfig_default = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders_default.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils_default.isFormData(data)) {
    if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform_default.hasStandardBrowserEnv) {
    withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};

// node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig_default(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitional_default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/helpers/composeSignals.js
var composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils_default.asap(unsubscribe);
    return signal;
  }
};
var composeSignals_default = composeSignals;

// node_modules/axios/lib/helpers/trackStream.js
var streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
var readBytes = function(iterable, chunkSize) {
  return __asyncGenerator(this, null, function* () {
    try {
      for (var iter = __forAwait(readStream(iterable)), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
        const chunk = temp.value;
        yield* __yieldStar(streamChunk(chunk, chunkSize));
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield new __await(temp.call(iter)));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
};
var readStream = function(stream4) {
  return __asyncGenerator(this, null, function* () {
    if (stream4[Symbol.asyncIterator]) {
      yield* __yieldStar(stream4);
      return;
    }
    const reader = stream4.getReader();
    try {
      for (; ; ) {
        const { done, value } = yield new __await(reader.read());
        if (done) {
          break;
        }
        yield value;
      }
    } finally {
      yield new __await(reader.cancel());
    }
  });
};
var trackStream = (stream4, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream4, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    pull(controller) {
      return __async(this, null, function* () {
        try {
          const { done: done2, value } = yield iterator.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      });
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

// node_modules/axios/lib/adapters/fetch.js
var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : (str) => __async(void 0, null, function* () {
  return new Uint8Array(yield new Response(str).arrayBuffer());
}));
var test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
var supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform_default.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
var resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_2, config) => {
      throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
var getBodyLength = (body) => __async(void 0, null, function* () {
  if (body == null) {
    return 0;
  }
  if (utils_default.isBlob(body)) {
    return body.size;
  }
  if (utils_default.isSpecCompliantForm(body)) {
    const _request = new Request(platform_default.origin, {
      method: "POST",
      body
    });
    return (yield _request.arrayBuffer()).byteLength;
  }
  if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils_default.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils_default.isString(body)) {
    return (yield encodeText(body)).byteLength;
  }
});
var resolveBodyLength = (headers, body) => __async(void 0, null, function* () {
  const length = utils_default.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
});
var fetch_default = isFetchSupported && ((config) => __async(void 0, null, function* () {
  let {
    url: url2,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig_default(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = yield resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url2, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils_default.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url2, __spreadProps(__spreadValues({}, fetchOptions), {
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    }));
    let response = yield fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = yield resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return yield new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders_default.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError_default.from(err, err && err.code, config, request);
  }
}));

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default,
  fetch: fetch_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    return __async(this, null, function* () {
      try {
        return yield this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy = {};
          Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    });
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    validator_default.assertOptions(config, {
      baseUrl: validators2.spelling("baseURL"),
      withXsrfToken: validators2.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class _CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new _CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// src/new-design/general/TaskListAutogenerated.tsx

function TaskListAutogenerated(props) {
  const [list_task, setListTask] = _react.useState.call(void 0, []);
  const [loading, setLoading] = _react.useState.call(void 0, false);
  const [message, setMessage] = _react.useState.call(void 0, "Maintain zero data breach incidents");
  function send() {
    return __async(this, null, function* () {
      if (!message.trim() || loading) {
        return;
      }
      setLoading(true);
      try {
        const res_chat = yield axios_default.post(`/ask-task-recommendation`, { message }, {
          baseURL: "http://localhost:5008",
          headers: { authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.Mjc.OfZrterxyfM9JWL1jhnLk7UnxaJdk4-X_p_HxK6xY1c" },
          responseType: "stream",
          adapter: "fetch"
        });
        const decoder = new TextDecoder();
        let result = "";
        try {
          for (var iter = __forAwait(res_chat.data), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
            const chunk = temp.value;
            const chunk_message = decoder.decode(chunk);
            result += String(chunk_message);
            setListTask(result.split(/\n+/).map((x) => x.trim()));
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield temp.call(iter));
          } finally {
            if (error)
              throw error[0];
          }
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    });
  }
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-[12px]` }, /* @__PURE__ */ _react2.default.createElement("div", null, "Objective Task Generator Sample"), /* @__PURE__ */ _react2.default.createElement(
    "textarea",
    {
      className: `bg-slate-100 outline-none p-[4px_12px] rounded-[8px]`,
      placeholder: "Enter objective title",
      value: message,
      onChange: (e) => {
        var _a;
        return setMessage((_a = e.target.value) != null ? _a : "");
      }
    }
  ), /* @__PURE__ */ _react2.default.createElement("div", null, "List Task"), list_task.map((task, i) => /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      key: i,
      className: `flex items-center gap-2`
    },
    /* @__PURE__ */ _react2.default.createElement("input", { type: "checkbox" }),
    /* @__PURE__ */ _react2.default.createElement(
      "input",
      {
        className: `p-[4px_12px] bg-gray-100 outline-none rounded-[8px] flex-1`,
        value: task,
        onChange: (e) => setListTask([
          ...list_task.slice(0, i),
          e.target.value,
          ...list_task.slice(i + 1)
        ])
      }
    )
  )), /* @__PURE__ */ _react2.default.createElement(
    "button",
    {
      className: `bg-slate-500 text-white p-[8px] rounded-[4px]`,
      onClick: () => send()
    },
    loading ? "Loading..." : "Generate"
  ));
}

// src/new-design/general/VerticalStep.tsx

function VerticalStep(props) {
  const list_item = [
    [
      "Location",
      "List data location"
    ],
    [
      "Organization Structure",
      "Detail organizations structure"
    ],
    [
      "Job Profile",
      "List data job profile"
    ],
    [
      "Employee",
      "List data employee"
    ]
  ];
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-[2px] font-[Poppins]` }, list_item.map(([label, desc], i) => {
    const is_latest = i == list_item.length - 1;
    const is_image = i < props.activeIndex - 1;
    const is_active_index = i == props.activeIndex - 1;
    return /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        key: i,
        className: `flex flex-col gap-[2px]`
      },
      /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-[8px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `w-[32px] h-[32px] flex items-center justify-center rounded-full border border-px border-[#0066B9] text-[#0066B9] font-medium` }, is_image ? /* @__PURE__ */ _react2.default.createElement("img", { src: CheckSVG, className: `w-full h-full` }) : String(i + 1)), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-[0px]` }, /* @__PURE__ */ _react2.default.createElement("div", { className: `${is_active_index ? "text-[#121D26]" : "text-[#8DA6C4]"} font-medium` }, label), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4]` }, desc))),
      !is_latest && /* @__PURE__ */ _react2.default.createElement("div", { className: `${is_image ? "bg-[#0066B9]" : "bg-transparent"} h-[32px] w-[2px] ml-[15px] my-[-4px]` })
    );
  }));
}

// src/new-design/general/WelcomeModal.tsx


// src/new-design/b64-images/CharacterPNG.ts
var CharacterPNG = "data:image/png;base64,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";

// src/new-design/general/WelcomeModal.tsx
function WelcomeModal(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col p-[40px_24px] rounded-[12px] bg-white shadow-[0px_1px_25px_1px_rgba(0,0,0,.1)] w-[380px] font-[Poppins] items-center gap-4 text-center` }, /* @__PURE__ */ _react2.default.createElement("img", { className: `h-[130px] object-contain`, src: CharacterPNG }), /* @__PURE__ */ _react2.default.createElement("div", { className: `font-bold mt-5` }, "Welcome to B2B Platform"), /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[14px] text-[#8DA6C4] px-5` }, "Let's start with a few simple steps to understand this system."), /* @__PURE__ */ _react2.default.createElement("div", { className: `flex items-center gap-4 mt-12` }, /* @__PURE__ */ _react2.default.createElement("button", { className: `border border-px border-[#8DA6C4] text-[#8DA6C4] rounded-[10px] text-[13px] p-[8px_15px] font-[Poppins]` }, "Skip, Explore Later"), /* @__PURE__ */ _react2.default.createElement("button", { className: `border border-px border-[#0066B9] text-white bg-[#0066B9] rounded-[10px] text-[13px] p-[8px_15px] font-[Poppins]` }, "Start Onboard")));
}

// src/new-design/onboarding/CompanyTemplate.tsx

function CompanyTemplate(props) {
  return /* @__PURE__ */ _react2.default.createElement("div", { className: `flex flex-col gap-12 px-[10%]` }, /* @__PURE__ */ _react2.default.createElement("select", { className: `bg-white border border-[1.5px] border-[#EAEFF5] rounded-[10px] bg-transparent text-[14px] font-medium p-[8px_19px] font-[Poppins] text-[#121D26] mx-5` }, /* @__PURE__ */ _react2.default.createElement("option", { disabled: true }, "Search"), /* @__PURE__ */ _react2.default.createElement("option", null, "Services & Utilities"), /* @__PURE__ */ _react2.default.createElement("option", null, "Industry & Manufacturing"), /* @__PURE__ */ _react2.default.createElement("option", null, "Retail & E-Commerce"), /* @__PURE__ */ _react2.default.createElement("option", null, "Energy & Natural Resources"), /* @__PURE__ */ _react2.default.createElement("option", null, "Healthcare & Biotechnology"), /* @__PURE__ */ _react2.default.createElement("option", null, "Transportation & Logistics"), /* @__PURE__ */ _react2.default.createElement("option", null, "IT, Telecommunications & Media"), /* @__PURE__ */ _react2.default.createElement("option", null, "Finance & Insurance"), /* @__PURE__ */ _react2.default.createElement("option", null, "Education & Research"), /* @__PURE__ */ _react2.default.createElement("option", null, "Construction & Real Estate")), /* @__PURE__ */ _react2.default.createElement("div", { className: `grid grid-cols-3 gap-4` }, [
    [
      "IT Consultant",
      "Technology solutions, digital transformation, cybersecurity, system integration, AI, cloud computing, etc."
    ],
    [
      "Software Development",
      "Focus on telecommunications services, internet networks, digital connectivity, and more."
    ],
    [
      "Provider Seluler",
      "Company specializing in application, system, and software development for internal needs."
    ],
    [
      "Cybersecurity & Cloud Services",
      "Operating in cybersecurity, cloud computing, and data management."
    ],
    [
      "Media Digital & Streaming",
      "Operating in media services, online news platforms, video streaming, and digital content."
    ],
    [
      "Title",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    ]
  ].map(([label, description], i) => {
    const is_active = i == 0;
    return /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        key: i,
        className: `bg-white rounded-[16px] p-[12px_18px] flex flex-col gap-[6px] border border-px ${is_active ? "border-[#0066B9]" : "border-[#EAEFF5]"}`
      },
      /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#121D26] font-medium` }, label),
      /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#8DA6C4] text-[14px] flex-1` }, description),
      /* @__PURE__ */ _react2.default.createElement("div", { className: `text-[#0066B9] font-medium self-center mt-2` }, "Use Template")
    );
  })));
}



























exports.AgendaCard = AgendaCard; exports.Button = Button; exports.CompanyTemplate = CompanyTemplate; exports.DashboardInformationSummary = DashboardInformationSummary; exports.EmployeeFormCard = EmployeeFormCard; exports.GeneralFormCard = GeneralFormCard; exports.GeneralTab = GeneralTab; exports.InputText = InputText; exports.InputTextarea = InputTextarea; exports.Label = Label; exports.LoginPage = LoginPage; exports.NDDashboard = NDDashboard; exports.NDNavbar = NDNavbar; exports.NDNavbarOnboarding = NDNavbarOnboarding; exports.NDSidebar = NDSidebar; exports.NDTemplate = NDTemplate; exports.NDTemplateOnboarding = NDTemplateOnboarding; exports.Popup = Popup; exports.SideOKRCard = SideOKRCard; exports.TableActions = TableActions; exports.TablePagination = TablePagination; exports.TableSearchFilter = TableSearchFilter; exports.TaskListAutogenerated = TaskListAutogenerated; exports.Utility = Utility; exports.VerticalStep = VerticalStep; exports.WelcomeModal = WelcomeModal;
/*! Bundled license information:

mime-db/index.js:
  (*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

mime-types/index.js:
  (*!
   * mime-types
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map