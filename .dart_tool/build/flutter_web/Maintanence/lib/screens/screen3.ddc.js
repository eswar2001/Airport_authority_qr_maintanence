define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/Maintanence/data/items', 'packages/Maintanence/screens/QRScanner', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__Maintanence__data__items, packages__Maintanence__screens__QRScanner, packages__flutter__material, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const items = packages__Maintanence__data__items.data__items;
  const QRScanner = packages__Maintanence__screens__QRScanner.screens__QRScanner;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const screen3 = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 54,
        [_Location_line]: 29,
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
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 29,
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
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 37,
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
        [_Location_column]: 24,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 38,
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
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 32,
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
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/screen3.dart"
      });
    }
  });
  screen3.Screen3 = class Screen3 extends framework.StatefulWidget {
    createState() {
      return new screen3._Screen3State.new();
    }
  };
  (screen3.Screen3.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    screen3.Screen3.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = screen3.Screen3.prototype;
  dart.addTypeTests(screen3.Screen3);
  dart.setMethodSignature(screen3.Screen3, () => ({
    __proto__: dart.getMethods(screen3.Screen3.__proto__),
    createState: dart.fnType(screen3._Screen3State, [])
  }));
  dart.setLibraryUri(screen3.Screen3, "package:Maintanence/screens/screen3.dart");
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
  let C14;
  let C13;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C26;
  let C25;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C32;
  let C31;
  screen3._Screen3State = class _Screen3State extends framework.State$(screen3.Screen3) {
    initState() {
      screen3._Screen3State.availableitems = items.Items.items;
      this.barcode = QRScanner.QRScanner.barcode;
      for (let i = 0; i < dart.notNull(screen3._Screen3State.availableitems[$length]); i = i + 1) {
        if (QRScanner.QRScanner.barcode == screen3._Screen3State.availableitems[$_get](i).serialno) break;
      }
      super.initState();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Serial no:" + dart.str(this.barcode), {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new container.Container.new({child: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: new text.Text.new("Add Sevice", {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), onPressed: dart.fn(() => {
                    navigator.Navigator.pushNamed(core.Object, context, "/addservice");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new raised_button.RaisedButton.new({child: new text.Text.new("Older services", {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), onPressed: dart.fn(() => {
                    navigator.Navigator.pushNamed(core.Object, context, "/servicelist");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
  };
  (screen3._Screen3State.new = function() {
    this.barcode = null;
    screen3._Screen3State.__proto__.new.call(this);
    ;
  }).prototype = screen3._Screen3State.prototype;
  dart.addTypeTests(screen3._Screen3State);
  dart.setMethodSignature(screen3._Screen3State, () => ({
    __proto__: dart.getMethods(screen3._Screen3State.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(screen3._Screen3State, "package:Maintanence/screens/screen3.dart");
  dart.setFieldSignature(screen3._Screen3State, () => ({
    __proto__: dart.getFields(screen3._Screen3State.__proto__),
    barcode: dart.fieldType(core.String)
  }));
  dart.defineLazy(screen3._Screen3State, {
    /*screen3._Screen3State.availableitems*/get availableitems() {
      return null;
    },
    set availableitems(_) {}
  });
  dart.trackLibraries("packages/Maintanence/screens/screen3", {
    "package:Maintanence/screens/screen3.dart": screen3
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["screen3.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQiC;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAO8B,MAA1B,uCAAqB;AACK,MAAzB,eAAkB;AAClB,eAAQ,IAAE,GAAE,AAAC,CAAA,gBAAC,AAAe,gDAAO,IAAA,AAAC,CAAA;AAEnC,YAAa,AAAO,+BAAE,AAAc,AAAI,4CAAH,CAAC,YACpC;;AAEY,MAAX;IACR;UAE0B;AACxB,YAAO,oCACG,+BAAc,kBAAK,AAAoB,wBAAR,oIACjC,oCACG,6BACE,yCACgC,mDACE,0CACrB,sBAChB,2CACS,kBAAK,iFACD;AACkC,oBAAjC,2CAAU,OAAO,EAAE;2FAGjC,2CACS,kBAAK,uFACD;AACkC,oBAAjC,2CAAU,OAAO,EAAC;;IAQ5C;;;IAxCO;;;EAyCT;;;;;;;;;;;;MAxCoB,oCAAc","file":"screen3.ddc.js"}');
  // Exports:
  return {
    screens__screen3: screen3
  };
});

//# sourceMappingURL=screen3.ddc.js.map
