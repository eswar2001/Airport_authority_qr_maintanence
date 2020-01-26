define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_barcode_scanner/flutter_barcode_scanner', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_barcode_scanner__flutter_barcode_scanner, packages__flutter__material, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const flutter_barcode_scanner = packages__flutter_barcode_scanner__flutter_barcode_scanner.flutter_barcode_scanner;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const QRScanner = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 32
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 18,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    }
  });
  QRScanner.QRScanner = class QRScanner$ extends framework.StatefulWidget {
    createState() {
      return new QRScanner._QRScannerState.new();
    }
  };
  (QRScanner.QRScanner.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    QRScanner.QRScanner.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = QRScanner.QRScanner.prototype;
  dart.addTypeTests(QRScanner.QRScanner);
  dart.setMethodSignature(QRScanner.QRScanner, () => ({
    __proto__: dart.getMethods(QRScanner.QRScanner.__proto__),
    createState: dart.fnType(QRScanner._QRScannerState, [])
  }));
  dart.setLibraryUri(QRScanner.QRScanner, "package:Maintanence/screens/QRScanner.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C8;
  let C7;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C11;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C20;
  let C19;
  let C24;
  let C23;
  let C22;
  let C27;
  let C26;
  let C25;
  QRScanner._QRScannerState = class _QRScannerState extends framework.State$(QRScanner.QRScanner) {
    scanBarcodeNormal() {
      return async.async(dart.dynamic, (function* scanBarcodeNormal() {
        let barcodeScanRes = null;
        barcodeScanRes = (yield flutter_barcode_scanner.FlutterBarcodeScanner.scanBarcode("#ff6666", "Cancel", true, flutter_barcode_scanner.ScanMode.QR));
        core.print(barcodeScanRes);
        this.setState(dart.fn(() => {
          this.barcode = barcodeScanRes;
        }, VoidToNull()));
      }).bind(this));
    }
    build(context) {
      return new container.Container.new({child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: new text.Text.new("Scan QR Code", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => {
                  this.scanBarcodeNormal();
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new text.Text.new("OR", {style: new text_style.TextStyle.new({fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Padding.new({padding: C11 || CT.C11, child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Enter Manually", border: new input_border.OutlineInputBorder.new()}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
  };
  (QRScanner._QRScannerState.new = function() {
    this.barcode = null;
    QRScanner._QRScannerState.__proto__.new.call(this);
    ;
  }).prototype = QRScanner._QRScannerState.prototype;
  dart.addTypeTests(QRScanner._QRScannerState);
  dart.setMethodSignature(QRScanner._QRScannerState, () => ({
    __proto__: dart.getMethods(QRScanner._QRScannerState.__proto__),
    scanBarcodeNormal: dart.fnType(async.Future, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(QRScanner._QRScannerState, "package:Maintanence/screens/QRScanner.dart");
  dart.setFieldSignature(QRScanner._QRScannerState, () => ({
    __proto__: dart.getFields(QRScanner._QRScannerState.__proto__),
    barcode: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/Maintanence/screens/QRScanner", {
    "package:Maintanence/screens/QRScanner.dart": QRScanner
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["QRScanner.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAK0B;AACf;AAGoC,QAD3C,kBAAiB,MAA4B,0DACzC,WAAW,UAAU,MAAe;AACnB,QAArB,WAAM,cAAc;AAGlB,QAFF,cAAS;AACiB,UAAxB,eAAU,cAAc;;MAE5B;;UAE0B;AACxB,YAAO,qCACE,6BACC,gCACc,sBAChB,2CAAmB,kBAAK,mFACb;AACU,kBAAnB;yFAEF,kBACI,cACE,wCAAoB,kBAA4B,6EACvD,sDAEW,0CACO,oDAA2B,0BAC9B;IAQxB;;;IArCO;;;EAsCT","file":"QRScanner.ddc.js"}');
  // Exports:
  return {
    screens__QRScanner: QRScanner
  };
});

//# sourceMappingURL=QRScanner.ddc.js.map
