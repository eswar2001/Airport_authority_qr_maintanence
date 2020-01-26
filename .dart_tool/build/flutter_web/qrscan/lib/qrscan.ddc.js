define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const qrscan = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let IdentityMapOfString$Uint8List = () => (IdentityMapOfString$Uint8List = dart.constFn(_js_helper.IdentityMap$(core.String, typed_data.Uint8List)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "qr_scan"
      });
    }
  });
  qrscan.scan = function scan() {
    return async.async(core.String, function* scan() {
      return yield qrscan._channel.invokeMethod(core.String, "scan");
    });
  };
  qrscan.scanPhoto = function scanPhoto() {
    return async.async(core.String, function* scanPhoto() {
      return yield qrscan._channel.invokeMethod(core.String, "scan_photo");
    });
  };
  qrscan.scanPath = function scanPath(path) {
    return async.async(core.String, function* scanPath() {
      if (!(path != null && path[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/qrscan/qrscan.dart", 20, 10, "path != null && path.isNotEmpty");
      return yield qrscan._channel.invokeMethod(core.String, "scan_path", new (IdentityMapOfString$String()).from(["path", path]));
    });
  };
  qrscan.scanBytes = function scanBytes(uint8list) {
    return async.async(core.String, function* scanBytes() {
      if (!(uint8list != null && dart.test(uint8list[$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/qrscan/qrscan.dart", 26, 10, "uint8list != null && uint8list.isNotEmpty");
      return yield qrscan._channel.invokeMethod(core.String, "scan_bytes", new (IdentityMapOfString$Uint8List()).from(["bytes", uint8list]));
    });
  };
  qrscan.generateBarCode = function generateBarCode(code) {
    return async.async(typed_data.Uint8List, function* generateBarCode() {
      if (!(code != null && code[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/qrscan/qrscan.dart", 32, 10, "code != null && code.isNotEmpty");
      return yield qrscan._channel.invokeMethod(typed_data.Uint8List, "generate_barcode", new (IdentityMapOfString$String()).from(["code", code]));
    });
  };
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  dart.defineLazy(qrscan, {
    /*qrscan.CameraAccessDenied*/get CameraAccessDenied() {
      return "PERMISSION_NOT_GRANTED";
    },
    /*qrscan._channel*/get _channel() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/qrscan/qrscan", {
    "package:qrscan/qrscan.dart": qrscan
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["qrscan.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYmB;AAAY,mBAAM,AAAS,0CAAa;IAAO;;;AAG1C;AAAY,mBAAM,AAAS,0CAAa;IAAa;;sCAG9C;AAAR;AACrB,YAAO,AAAa,IAAT,IAAI,QAAQ,AAAK,IAAD;AAC3B,YAAO,OAAM,AAAS,0CAAa,aAAa,yCAAC,QAAQ,IAAI;IAC/D;;wCAGmC;AAAX;AACtB,YAAO,AAAkB,SAAT,IAAI,kBAAQ,AAAU,SAAD;AACrC,YAAO,OAAM,AAAS,0CAAa,cAAc,4CAAC,SAAS,SAAS;IACtE;;oDAGyC;AAAR;AAC/B,YAAO,AAAa,IAAT,IAAI,QAAQ,AAAK,IAAD;AAC3B,YAAO,OAAM,AAAS,mDAAa,oBAAoB,yCAAC,QAAQ,IAAI;IACtE;;;;;;;;;;MA3BM,yBAAkB;;;MAGJ,eAAQ","file":"qrscan.ddc.js"}');
  // Exports:
  return {
    qrscan: qrscan
  };
});

//# sourceMappingURL=qrscan.ddc.js.map
