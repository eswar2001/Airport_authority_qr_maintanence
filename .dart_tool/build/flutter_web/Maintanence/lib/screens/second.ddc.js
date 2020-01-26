define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/intl/intl', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/datetime_picker_formfield/datetime_picker_formfield', 'packages/flutter/src/rendering/animated_size', 'packages/Maintanence/widgets/Buttons'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__intl__intl, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__datetime_picker_formfield__datetime_picker_formfield, packages__flutter__src__rendering__animated_size, packages__Maintanence__widgets__Buttons) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const intl = packages__intl__intl.intl;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const date_picker = packages__flutter__material.src__material__date_picker;
  const time_picker = packages__flutter__material.src__material__time_picker;
  const time$ = packages__flutter__material.src__material__time;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const text_field = packages__flutter__material.src__material__text_field;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const datetime_picker_formfield = packages__datetime_picker_formfield__datetime_picker_formfield.datetime_picker_formfield;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const Buttons = packages__Maintanence__widgets__Buttons.widgets__Buttons;
  const second = Object.create(dart.library);
  let FutureOfDateTime = () => (FutureOfDateTime = dart.constFn(async.Future$(core.DateTime)))();
  let BuildContextAndDateTimeToFutureOfDateTime = () => (BuildContextAndDateTimeToFutureOfDateTime = dart.constFn(dart.fnType(FutureOfDateTime(), [framework.BuildContext, core.DateTime])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let DateTimeTovoid = () => (DateTimeTovoid = dart.constFn(dart.fnType(dart.void, [core.DateTime])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 19,
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
        [_Location_column]: 18,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 19,
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
        [_Location_column]: 17,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 27,
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
        [_Location_column]: 19,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 34,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 34,
        [_Location_line]: 30,
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
        [_Location_column]: 19,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onShowPicker",
        [_Location_column]: 23,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "format",
        [_Location_column]: 23,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 34,
        [_Location_line]: 57,
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
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onShowPicker",
        [_Location_column]: 23,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "format",
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 32,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 32,
        [EdgeInsets_left]: 32
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 50,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onpressed",
        [_Location_column]: 70,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 88,
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
        [_Location_column]: 28,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 32
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/second.dart"
      });
    }
  });
  second.Second = class Second extends framework.StatefulWidget {
    createState() {
      return new second._SecondState.new();
    }
  };
  (second.Second.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    second.Second.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = second.Second.prototype;
  dart.addTypeTests(second.Second);
  dart.setMethodSignature(second.Second, () => ({
    __proto__: dart.getMethods(second.Second.__proto__),
    createState: dart.fnType(second._SecondState, [])
  }));
  dart.setLibraryUri(second.Second, "package:Maintanence/screens/second.dart");
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
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C19;
  let C20;
  let C16;
  let C15;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C32;
  let C33;
  let C29;
  let C28;
  let C36;
  let C37;
  let C35;
  let C34;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C38;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C52;
  let C51;
  let C56;
  let C55;
  let C54;
  let C59;
  let C58;
  let C57;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  second._SecondState = class _SecondState extends framework.State$(second.Second) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Inventory Management", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new scrollbar.Scrollbar.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 22.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new second.BuiltTextfield.new("Item Name", {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new second.BuiltTextfield.new("S/N no", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 10.0, horizontal: 32.0}), child: new datetime_picker_formfield.DateTimeField.new({onShowPicker: dart.fn((context, currentValue) => async.async(core.DateTime, function*() {
                        let t0, t0$;
                        let date = (yield date_picker.showDatePicker({context: context, firstDate: new core.DateTime.new(1900), initialDate: (t0 = currentValue, t0 == null ? new core.DateTime.now() : t0), lastDate: new core.DateTime.new(2100)}));
                        if (date != null) {
                          let time = (yield time_picker.showTimePicker({context: context, initialTime: new time$.TimeOfDay.fromDateTime((t0$ = currentValue, t0$ == null ? new core.DateTime.now() : t0$))}));
                          return datetime_picker_formfield.DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      }), BuildContextAndDateTimeToFutureOfDateTime()), format: this.dateFormat, decoration: new input_decorator.InputDecoration.new({labelText: "Date of Installation", border: new input_border.OutlineInputBorder.new()}), onChanged: dart.fn(dt => this.setState(dart.fn(() => this.date = dt, VoidToDateTime())), DateTimeTovoid()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new second.BuiltTextfield.new("Maintainence Frequency", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 10.0, horizontal: 32.0}), child: new datetime_picker_formfield.DateTimeField.new({onShowPicker: dart.fn((context, currentValue) => async.async(core.DateTime, function*() {
                        let t0, t0$;
                        let date = (yield date_picker.showDatePicker({context: context, firstDate: new core.DateTime.new(1900), initialDate: (t0 = currentValue, t0 == null ? new core.DateTime.now() : t0), lastDate: new core.DateTime.new(2100)}));
                        if (date != null) {
                          let time = (yield time_picker.showTimePicker({context: context, initialTime: new time$.TimeOfDay.fromDateTime((t0$ = currentValue, t0$ == null ? new core.DateTime.now() : t0$))}));
                          return datetime_picker_formfield.DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      }), BuildContextAndDateTimeToFutureOfDateTime()), format: this.dateFormat, decoration: new input_decorator.InputDecoration.new({labelText: "Date of Replacement", border: new input_border.OutlineInputBorder.new()}), onChanged: dart.fn(dt => this.setState(dart.fn(() => this.date = dt, VoidToDateTime())), DateTimeTovoid()), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.Padding.new({padding: C38 || CT.C38, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([new Buttons.Buttons.new({name: "Get QR Code", onpressed: dart.fn(() => {
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63});
    }
  };
  (second._SecondState.new = function() {
    this.dateFormat = new intl.DateFormat.new("EEEE, MMMM d, yyyy 'at' h:mma");
    this.date = null;
    second._SecondState.__proto__.new.call(this);
    ;
  }).prototype = second._SecondState.prototype;
  dart.addTypeTests(second._SecondState);
  dart.setMethodSignature(second._SecondState, () => ({
    __proto__: dart.getMethods(second._SecondState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(second._SecondState, "package:Maintanence/screens/second.dart");
  dart.setFieldSignature(second._SecondState, () => ({
    __proto__: dart.getFields(second._SecondState.__proto__),
    dateFormat: dart.finalFieldType(intl.DateFormat),
    date: dart.fieldType(core.DateTime)
  }));
  let C67;
  let C70;
  let C69;
  let C68;
  let C73;
  let C74;
  let C72;
  let C71;
  const label$ = dart.privateName(second, "BuiltTextfield.label");
  second.BuiltTextfield = class BuiltTextfield extends framework.StatelessWidget {
    get label() {
      return this[label$];
    }
    set label(value) {
      this[label$] = value;
    }
    build(context) {
      return new basic.Padding.new({padding: C67 || CT.C67, child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({labelText: this.label, border: new input_border.OutlineInputBorder.new()}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
    }
  };
  (second.BuiltTextfield.new = function(label, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[label$] = label;
    second.BuiltTextfield.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = second.BuiltTextfield.prototype;
  dart.addTypeTests(second.BuiltTextfield);
  dart.setMethodSignature(second.BuiltTextfield, () => ({
    __proto__: dart.getMethods(second.BuiltTextfield.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(second.BuiltTextfield, "package:Maintanence/screens/second.dart");
  dart.setFieldSignature(second.BuiltTextfield, () => ({
    __proto__: dart.getFields(second.BuiltTextfield.__proto__),
    label: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/Maintanence/screens/second", {
    "package:Maintanence/screens/second.dart": second
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["second.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQgC;IAAc;;;;;;EAC9C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,oCACK,+BACC,kBAAK,6IAER,oCACG,+DACE,oCACE,gCACa,sBAChB,gCACU,6DAEV,8BAAe,qEACf,8BAAe,oEACf,gCACsB,gDAAoB,kBAAiB,eAClD,+DACS,SAAC,SAAS;;AAChB,oCAAO,MAAM,qCACN,OAAO,aACL,sBAAS,qBACM,KAAb,YAAY,QAAZ,OAAyB,yCAC5B,sBAAS;AACvB,4BAAI,IAAI,IAAI;AACJ,sCAAO,MAAM,qCACR,OAAO,eAEN,kCAA0B,MAAb,YAAY,SAAZ,OAAyB;AAElD,gCAAqB,iDAAQ,IAAI,EAAE,IAAI;;AAEvC,gCAAO,aAAY;;sBAEtB,0DACO,6BACI,oDAA2B,gCAC7B,wDACC,QAAC,MAAO,cAAS,cAAM,YAAO,EAAE,2JAG/C,8BAAe,oFACf,gCACsB,gDAAoB,kBAAiB,eAClD,+DACS,SAAC,SAAS;;AAChB,oCAAO,MAAM,qCACN,OAAO,aACL,sBAAS,qBACM,KAAb,YAAY,QAAZ,OAAyB,yCAC5B,sBAAS;AACvB,4BAAI,IAAI,IAAI;AACJ,sCAAO,MAAM,qCACR,OAAO,eAEN,kCAA0B,MAAb,YAAY,SAAZ,OAAyB;AAElD,gCAAqB,iDAAQ,IAAI,EAAE,IAAI;;AAEvC,gCAAO,aAAY;;sBAEtB,0DACO,6BACI,oDAA2B,+BAC7B,wDACC,QAAC,MAAO,cAAS,cAAM,YAAO,EAAE,2JAG/C,sDAES,sCACgC,sCACnB,sBAAC,+BAAc,0BAAyB;;IAS9E;;;IApFM,kBAAa,wBAAW;IACrB;;;EAqFX;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;UAEmB;AACxB,YAAO,uDAEE,0CACO,oDAA2B,oBAC7B;IAGhB;;wCAXoB;;;AAApB;;EAA0B","file":"second.ddc.js"}');
  // Exports:
  return {
    screens__second: second
  };
});

//# sourceMappingURL=second.ddc.js.map
