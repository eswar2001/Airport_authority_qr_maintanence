define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/qrscan/qrscan', 'packages/Maintanence/data/items', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__qrscan__qrscan, packages__Maintanence__data__items, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const qrscan = packages__qrscan__qrscan.qrscan;
  const items = packages__Maintanence__data__items.data__items;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const QRScanner = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 34,
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
        [_Location_column]: 29,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 32
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 18,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 18,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/QRScanner.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
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
  dart.defineLazy(QRScanner.QRScanner, {
    /*QRScanner.QRScanner.barcode*/get barcode() {
      return "";
    },
    set barcode(_) {}
  });
  const _scan = dart.privateName(QRScanner, "_scan");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C17;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C27;
  let C26;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C44;
  let C43;
  QRScanner._QRScannerState = class _QRScannerState extends framework.State$(QRScanner.QRScanner) {
    [_scan]() {
      return async.async(dart.dynamic, (function* _scan() {
        let barcode = (yield qrscan.scan());
        this.setState(dart.fn(() => {
          QRScanner.QRScanner.barcode = barcode;
          for (let i = 0; i < dart.notNull(QRScanner._QRScannerState.availableitems[$length]); i = i + 1) {
            if (QRScanner.QRScanner.barcode == QRScanner._QRScannerState.availableitems[$_get](i).serialno) navigator.Navigator.pushNamed(core.Object, this.context, "/screen3");
          }
        }, VoidToNull()));
      }).bind(this));
    }
    initState() {
      QRScanner._QRScannerState.availableitems = items.Items.items;
      super.initState();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("QR Code", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new container.Container.new({child: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: new text.Text.new("Scan QR Code", {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), onPressed: dart.fn(() => {
                    this.setState(dart.fn(() => {
                      this[_scan]();
                    }, VoidToNull()));
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new text.Text.new("OR", {style: new text_style.TextStyle.new({fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new basic.Padding.new({padding: C17 || CT.C17, child: new text_field.TextField.new({onChanged: dart.fn(value => {
                      QRScanner.QRScanner.barcode = value;
                    }, StringToNull()), decoration: new input_decorator.InputDecoration.new({labelText: "Enter Manually", border: new input_border.OutlineInputBorder.new()}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new raised_button.RaisedButton.new({child: new text.Text.new("Get Details", {$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), onPressed: dart.fn(() => {
                    for (let i = 0; i < dart.notNull(QRScanner._QRScannerState.availableitems[$length]); i = i + 1) {
                      if (QRScanner.QRScanner.barcode == QRScanner._QRScannerState.availableitems[$_get](i).serialno) navigator.Navigator.pushNamed(core.Object, context, "/screen3");
                    }
                    core.print(QRScanner.QRScanner.barcode);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29})]), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43});
    }
  };
  (QRScanner._QRScannerState.new = function() {
    QRScanner._QRScannerState.__proto__.new.call(this);
    ;
  }).prototype = QRScanner._QRScannerState.prototype;
  dart.addTypeTests(QRScanner._QRScannerState);
  dart.setMethodSignature(QRScanner._QRScannerState, () => ({
    __proto__: dart.getMethods(QRScanner._QRScannerState.__proto__),
    [_scan]: dart.fnType(async.Future, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(QRScanner._QRScannerState, "package:Maintanence/screens/QRScanner.dart");
  dart.defineLazy(QRScanner._QRScannerState, {
    /*QRScanner._QRScannerState.availableitems*/get availableitems() {
      return null;
    },
    set availableitems(_) {}
  });
  dart.trackLibraries("packages/Maintanence/screens/QRScanner", {
    "package:Maintanence/screens/QRScanner.dart": QRScanner
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["QRScanner.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQmC;IAAiB;;;;;;EACpD;;;;;;;;MAHgB,2BAAO;YAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOV;AACH,uBAAU,MAAM;AAQrB,QAPF,cAAS;AACoB,UAAjB,8BAAU,OAAO;AAC3B,mBAAQ,IAAE,GAAE,AAAC,CAAA,gBAAC,AAAe,oDAAO,IAAA,AAAC,CAAA;AAEnC,gBAAa,AAAO,+BAAE,AAAc,AAAI,gDAAH,CAAC,YAC1B,AAA+B,2CAArB,cAAS;;;MAGrC;;;AAG6B,MAA1B,2CAAqB;AAEL,MAAX;IACR;UAE0B;AACxB,YAAO,oCACG,+BAAc,kBAAK,gIACrB,oCACG,6BACC,yCACiC,yCACnB,sBAChB,2CAAmB,kBAAK,mFACb;AAGP,oBAFF,cAAS;AACA,sBAAP;;2FAIJ,kBACI,cACE,wCAAoB,kBAA4B,+EACzD,sDAEW,yCACM,QAAC;AACa,sBAAb,8BAAQ,KAAK;oDAEb,oDAA2B,0BAC9B,+JAKZ,2CAAmB,kBAAK,oFACX;AACT,6BAAQ,IAAE,GAAE,AAAC,CAAA,gBAAC,AAAe,oDAAO,IAAA,AAAC,CAAA;AAEnC,0BAAa,AAAO,+BAAE,AAAc,AAAI,gDAAH,CAAC,YAC1B,AAA8B,2CAApB,OAAO,EAAE;;AAET,oBAAxB,WAAgB;;IAQhC;;;;;EACF;;;;;;;;;MAjEoB,wCAAc","file":"QRScanner.ddc.js"}');
  // Exports:
  return {
    screens__QRScanner: QRScanner
  };
});

//# sourceMappingURL=QRScanner.ddc.js.map
