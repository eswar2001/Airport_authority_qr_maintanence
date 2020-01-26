define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const Buttons = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 9,
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
        [_Location_column]: 14,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/widgets/Buttons.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 10,
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
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/widgets/Buttons.dart"
      });
    }
  });
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
  const name$ = dart.privateName(Buttons, "Buttons.name");
  const onpressed$ = dart.privateName(Buttons, "Buttons.onpressed");
  Buttons.Buttons = class Buttons extends framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get onpressed() {
      return this[onpressed$];
    }
    set onpressed(value) {
      this[onpressed$] = value;
    }
    build(context) {
      return new raised_button.RaisedButton.new({child: new text.Text.new(this.name, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: VoidTovoid()._check(this.onpressed), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (Buttons.Buttons.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let onpressed = opts && 'onpressed' in opts ? opts.onpressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[onpressed$] = onpressed;
    Buttons.Buttons.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Buttons.Buttons.prototype;
  dart.addTypeTests(Buttons.Buttons);
  dart.setMethodSignature(Buttons.Buttons, () => ({
    __proto__: dart.getMethods(Buttons.Buttons.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Buttons.Buttons, "package:Maintanence/widgets/Buttons.dart");
  dart.setFieldSignature(Buttons.Buttons, () => ({
    __proto__: dart.getFields(Buttons.Buttons.__proto__),
    name: dart.fieldType(core.String),
    onpressed: dart.fieldType(core.Function)
  }));
  dart.trackLibraries("packages/Maintanence/widgets/Buttons", {
    "package:Maintanence/widgets/Buttons.dart": Buttons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Buttons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGS;;;;;;IACE;;;;;;UAEiB;AACxB,YAAO,4CACE,kBAAK,kGACF;IAEd;;;QATwB;QAAoB;;IAApB;IAAoB;AAA5C;;EAAuD","file":"Buttons.ddc.js"}');
  // Exports:
  return {
    widgets__Buttons: Buttons
  };
});

//# sourceMappingURL=Buttons.ddc.js.map
