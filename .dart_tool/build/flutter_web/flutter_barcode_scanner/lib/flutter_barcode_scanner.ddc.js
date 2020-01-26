define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const flutter_barcode_scanner = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: flutter_barcode_scanner.ScanMode.prototype,
        [_name$]: "ScanMode.QR",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: flutter_barcode_scanner.ScanMode.prototype,
        [_name$]: "ScanMode.BARCODE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: flutter_barcode_scanner.ScanMode.prototype,
        [_name$]: "ScanMode.DEFAULT",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], flutter_barcode_scanner.ScanMode);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C6 || CT.C6
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C5 || CT.C5,
        [MethodChannel_name]: "flutter_barcode_scanner"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: platform_channel.EventChannel.prototype,
        [EventChannel__binaryMessenger]: null,
        [EventChannel_codec]: C5 || CT.C5,
        [EventChannel_name]: "flutter_barcode_scanner_receiver"
      });
    }
  });
  const _name$ = dart.privateName(flutter_barcode_scanner, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  flutter_barcode_scanner.ScanMode = class ScanMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flutter_barcode_scanner.ScanMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flutter_barcode_scanner.ScanMode.prototype;
  dart.addTypeTests(flutter_barcode_scanner.ScanMode);
  dart.setLibraryUri(flutter_barcode_scanner.ScanMode, "package:flutter_barcode_scanner/flutter_barcode_scanner.dart");
  dart.setFieldSignature(flutter_barcode_scanner.ScanMode, () => ({
    __proto__: dart.getFields(flutter_barcode_scanner.ScanMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(flutter_barcode_scanner.ScanMode, ['toString']);
  flutter_barcode_scanner.ScanMode.QR = C0 || CT.C0;
  flutter_barcode_scanner.ScanMode.BARCODE = C1 || CT.C1;
  flutter_barcode_scanner.ScanMode.DEFAULT = C2 || CT.C2;
  flutter_barcode_scanner.ScanMode.values = C3 || CT.C3;
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C6;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C5;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C4;
  const EventChannel__binaryMessenger = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  const EventChannel_codec = dart.privateName(platform_channel, "EventChannel.codec");
  const EventChannel_name = dart.privateName(platform_channel, "EventChannel.name");
  let C7;
  flutter_barcode_scanner.FlutterBarcodeScanner = class FlutterBarcodeScanner extends core.Object {
    static scanBarcode(lineColor, cancelButtonText, isShowFlashIcon, scanMode) {
      return async.async(core.String, function* scanBarcode() {
        if (null == cancelButtonText || cancelButtonText[$isEmpty]) cancelButtonText = "Cancel";
        if (scanMode == null) {
          scanMode = flutter_barcode_scanner.ScanMode.QR;
        }
        let params = new (IdentityMapOfString$dynamic()).from(["lineColor", lineColor, "cancelButtonText", cancelButtonText, "isShowFlashIcon", isShowFlashIcon, "isContinuousScan", false, "scanMode", scanMode.index]);
        let barcodeResult = (yield flutter_barcode_scanner.FlutterBarcodeScanner._channel.invokeMethod(core.String, "scanBarcode", params));
        if (null == barcodeResult) {
          barcodeResult = "";
        }
        return barcodeResult;
      });
    }
    static getBarcodeStreamReceiver(lineColor, cancelButtonText, isShowFlashIcon, scanMode) {
      if (null == cancelButtonText || cancelButtonText[$isEmpty]) cancelButtonText = "Cancel";
      if (scanMode == null) {
        scanMode = flutter_barcode_scanner.ScanMode.QR;
      }
      let params = new (IdentityMapOfString$dynamic()).from(["lineColor", lineColor, "cancelButtonText", cancelButtonText, "isShowFlashIcon", isShowFlashIcon, "isContinuousScan", true, "scanMode", scanMode.index]);
      flutter_barcode_scanner.FlutterBarcodeScanner._channel.invokeMethod(dart.dynamic, "scanBarcode", params);
      if (flutter_barcode_scanner.FlutterBarcodeScanner._onBarcodeReceiver == null) {
        flutter_barcode_scanner.FlutterBarcodeScanner._onBarcodeReceiver = flutter_barcode_scanner.FlutterBarcodeScanner._eventChannel.receiveBroadcastStream();
      }
      return flutter_barcode_scanner.FlutterBarcodeScanner._onBarcodeReceiver;
    }
  };
  (flutter_barcode_scanner.FlutterBarcodeScanner.new = function() {
    ;
  }).prototype = flutter_barcode_scanner.FlutterBarcodeScanner.prototype;
  dart.addTypeTests(flutter_barcode_scanner.FlutterBarcodeScanner);
  dart.setLibraryUri(flutter_barcode_scanner.FlutterBarcodeScanner, "package:flutter_barcode_scanner/flutter_barcode_scanner.dart");
  dart.defineLazy(flutter_barcode_scanner.FlutterBarcodeScanner, {
    /*flutter_barcode_scanner.FlutterBarcodeScanner._channel*/get _channel() {
      return C4 || CT.C4;
    },
    /*flutter_barcode_scanner.FlutterBarcodeScanner._eventChannel*/get _eventChannel() {
      return C7 || CT.C7;
    },
    /*flutter_barcode_scanner.FlutterBarcodeScanner._onBarcodeReceiver*/get _onBarcodeReceiver() {
      return null;
    },
    set _onBarcodeReceiver(_) {}
  });
  dart.trackLibraries("packages/flutter_barcode_scanner/flutter_barcode_scanner", {
    "package:flutter_barcode_scanner/flutter_barcode_scanner.dart": flutter_barcode_scanner
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_barcode_scanner.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKqC;;0DAAhC;;;;EAAgC;;;;;;;;;;;;;;;;;;;;;;;;;uBAiBM,WAAkB,kBAClD,iBAA0B;AADF;AAE/B,YAAI,AAAK,QAAG,gBAAgB,IAAI,AAAiB,gBAAD,YAC9C,AAA2B,mBAAR;AAErB,YAAI,AAAS,QAAD,IAAI;AACQ,UAAtB,WAAoB;;AAIlB,qBAA0B,0CAC5B,aAAa,SAAS,EACtB,oBAAoB,gBAAgB,EACpC,mBAAmB,eAAe,EAClC,oBAAoB,OACpB,YAAY,AAAS,QAAD;AAIf,6BAAgB,MAAM,AAAS,iFAAa,eAAe,MAAM;AACxE,YAAI,AAAK,QAAG,aAAa;AACL,UAAlB,gBAAgB;;AAElB,cAAO,cAAa;MACtB;;oCAK8C,WACnC,kBAAuB,iBAA0B;AAC1D,UAAI,AAAK,QAAG,gBAAgB,IAAI,AAAiB,gBAAD,YAC9C,AAA2B,mBAAR;AAErB,UAAI,AAAS,QAAD,IAAI;AACQ,QAAtB,WAAoB;;AAIlB,mBAA0B,0CAC5B,aAAa,SAAS,EACtB,oBAAoB,gBAAgB,EACpC,mBAAmB,eAAe,EAClC,oBAAoB,MACpB,YAAY,AAAS,QAAD;AAKsB,MAA5C,AAAS,kFAAa,eAAe,MAAM;AAC3C,UAAI,AAAmB,oEAAG;AACmC,QAA3D,mEAAqB,AAAc;;AAErC,YAAO;IACT;;;;EACF;;;;MAnE6B,sDAAQ;;;MAGT,2DAAa;;;MAGzB,gEAAkB","file":"flutter_barcode_scanner.ddc.js"}');
  // Exports:
  return {
    flutter_barcode_scanner: flutter_barcode_scanner
  };
});

//# sourceMappingURL=flutter_barcode_scanner.ddc.js.map
