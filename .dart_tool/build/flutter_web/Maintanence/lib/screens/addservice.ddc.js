define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/intl/intl', 'packages/Maintanence/data/items', 'packages/Maintanence/screens/QRScanner', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/datetime_picker_formfield/datetime_picker_formfield', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__intl__intl, packages__Maintanence__data__items, packages__Maintanence__screens__QRScanner, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__datetime_picker_formfield__datetime_picker_formfield, packages__flutter__src__rendering__animated_size) {
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
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const intl = packages__intl__intl.intl;
  const items = packages__Maintanence__data__items.data__items;
  const QRScanner = packages__Maintanence__screens__QRScanner.screens__QRScanner;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const date_picker = packages__flutter__material.src__material__date_picker;
  const time_picker = packages__flutter__material.src__material__time_picker;
  const time$ = packages__flutter__material.src__material__time;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const datetime_picker_formfield = packages__datetime_picker_formfield__datetime_picker_formfield.datetime_picker_formfield;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const addservice = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let FutureOfDateTime = () => (FutureOfDateTime = dart.constFn(async.Future$(core.DateTime)))();
  let BuildContextAndDateTimeToFutureOfDateTime = () => (BuildContextAndDateTimeToFutureOfDateTime = dart.constFn(dart.fnType(FutureOfDateTime(), [framework.BuildContext, core.DateTime])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let DateTimeTovoid = () => (DateTimeTovoid = dart.constFn(dart.fnType(dart.void, [core.DateTime])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
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
        [_Location_line]: 39,
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
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 39,
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
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 47,
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
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 32
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 61,
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
        [_Location_column]: 28,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 59,
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
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onShowPicker",
        [_Location_column]: 23,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "format",
        [_Location_column]: 23,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 32,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 32,
        [EdgeInsets_left]: 32
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 52,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 40,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 27,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 45,
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
        [_Location_column]: 22,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/screens/addservice.dart"
      });
    }
  });
  addservice.AddService = class AddService extends framework.StatefulWidget {
    createState() {
      return new addservice._AddServiceState.new();
    }
  };
  (addservice.AddService.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    addservice.AddService.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = addservice.AddService.prototype;
  dart.addTypeTests(addservice.AddService);
  dart.setMethodSignature(addservice.AddService, () => ({
    __proto__: dart.getMethods(addservice.AddService.__proto__),
    createState: dart.fnType(addservice._AddServiceState, [])
  }));
  dart.setLibraryUri(addservice.AddService, "package:Maintanence/screens/addservice.dart");
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
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C30;
  let C31;
  let C27;
  let C26;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C43;
  let C41;
  let C40;
  let C44;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C61;
  let C60;
  let C65;
  let C64;
  let C63;
  let C68;
  let C67;
  let C66;
  let C71;
  let C70;
  let C69;
  let C74;
  let C75;
  let C73;
  let C72;
  addservice._AddServiceState = class _AddServiceState extends framework.State$(addservice.AddService) {
    initState() {
      addservice._AddServiceState.availableitems = items.Items.items;
      this.barcode = QRScanner.QRScanner.barcode;
      for (let t0 = this.i = 0; dart.notNull(this.i) < dart.notNull(addservice._AddServiceState.availableitems[$length]); this.i = dart.notNull(this.i) + 1) {
        if (QRScanner.QRScanner.barcode == addservice._AddServiceState.availableitems[$_get](this.i).serialno) break;
      }
      super.initState();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Add service", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new scrollbar.Scrollbar.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 22.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new basic.Padding.new({padding: C9 || CT.C9, child: new text_field.TextField.new({onChanged: dart.fn(val => this.id = val, StringToString()), decoration: new input_decorator.InputDecoration.new({labelText: "Product id", border: new input_border.OutlineInputBorder.new()}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.Padding.new({padding: C9 || CT.C9, child: new text_field.TextField.new({onChanged: dart.fn(val => this.remarks = val, StringToString()), decoration: new input_decorator.InputDecoration.new({labelText: "Remarks", border: new input_border.OutlineInputBorder.new()}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 10.0, horizontal: 32.0}), child: new datetime_picker_formfield.DateTimeField.new({onShowPicker: dart.fn((context, currentValue) => async.async(core.DateTime, function*() {
                        let t1, t1$;
                        let date = (yield date_picker.showDatePicker({context: context, firstDate: new core.DateTime.new(1900), initialDate: (t1 = currentValue, t1 == null ? new core.DateTime.now() : t1), lastDate: new core.DateTime.new(2100)}));
                        if (date != null) {
                          let time = (yield time_picker.showTimePicker({context: context, initialTime: new time$.TimeOfDay.fromDateTime((t1$ = currentValue, t1$ == null ? new core.DateTime.now() : t1$))}));
                          return datetime_picker_formfield.DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      }), BuildContextAndDateTimeToFutureOfDateTime()), format: this.dateFormat, decoration: new input_decorator.InputDecoration.new({labelText: "Date of Installation", border: new input_border.OutlineInputBorder.new()}), onChanged: dart.fn(dt => this.setState(dart.fn(() => this.date = dt, VoidToDateTime())), DateTimeTovoid()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new basic.Padding.new({padding: C9 || CT.C9, child: new text_field.TextField.new({onChanged: dart.fn(val => this.cost = core.int.as(val), StringToint()), decoration: new input_decorator.InputDecoration.new({labelText: "Cost", border: new input_border.OutlineInputBorder.new()}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new basic.Padding.new({padding: C44 || CT.C44, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: new text.Text.new("Add Record", {$creationLocationd_0dea112b090073317d4: C45 || CT.C45}), onPressed: dart.fn(() => {
                            navigator.Navigator.pushNamed(core.Object, context, "/home");
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56})]), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
    }
  };
  (addservice._AddServiceState.new = function() {
    this.dateFormat = new intl.DateFormat.new("EEEE, MMMM d, yyyy 'at' h:mma");
    this.i = null;
    this.id = null;
    this.remarks = null;
    this.date = null;
    this.cost = null;
    this.barcode = null;
    addservice._AddServiceState.__proto__.new.call(this);
    ;
  }).prototype = addservice._AddServiceState.prototype;
  dart.addTypeTests(addservice._AddServiceState);
  dart.setMethodSignature(addservice._AddServiceState, () => ({
    __proto__: dart.getMethods(addservice._AddServiceState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(addservice._AddServiceState, "package:Maintanence/screens/addservice.dart");
  dart.setFieldSignature(addservice._AddServiceState, () => ({
    __proto__: dart.getFields(addservice._AddServiceState.__proto__),
    dateFormat: dart.finalFieldType(intl.DateFormat),
    i: dart.fieldType(core.int),
    id: dart.fieldType(core.String),
    remarks: dart.fieldType(core.String),
    date: dart.fieldType(core.DateTime),
    cost: dart.fieldType(core.int),
    barcode: dart.fieldType(core.String)
  }));
  dart.defineLazy(addservice._AddServiceState, {
    /*addservice._AddServiceState.availableitems*/get availableitems() {
      return null;
    },
    set availableitems(_) {}
  });
  dart.trackLibraries("packages/Maintanence/screens/addservice", {
    "package:Maintanence/screens/addservice.dart": addservice
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["addservice.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAc+B,MAA1B,6CAAqB;AACI,MAAzB,eAAkB;AAClB,oBAAK,SAAE,GAAG,aAAD,uBAAE,AAAe,sDAAO,SAAC,aAAD,UAAC;AAEhC,YAAa,AAAO,+BAAE,AAAc,AAAI,kDAAH,kBACnC;;AAEa,MAAX;IACR;UAEyB;AACxB,YAAO,oCACK,+BACC,kBAAK,oIAER,oCACG,+DACE,oCACE,gCACa,sBAChB,gCACU,6DAEV,oDAES,yCACK,QAAC,OAAM,UAAG,GAAG,iCACX,oDAA2B,sBAC7B,+JAGd,oDAES,yCACK,QAAC,OAAM,eAAQ,GAAG,iCAChB,oDAA0B,mBAC5B,+JAGd,gCACsB,gDAAoB,kBAAiB,eAClD,+DACS,SAAC,SAAS;;AAChB,oCAAO,MAAM,qCACN,OAAO,aACL,sBAAS,qBACM,KAAb,YAAY,QAAZ,OAAyB,yCAC5B,sBAAS;AACvB,4BAAI,IAAI,IAAI;AACJ,sCAAO,MAAM,qCACR,OAAO,eAEN,kCAA0B,MAAb,YAAY,SAAZ,OAAyB;AAElD,gCAAqB,iDAAQ,IAAI,EAAE,IAAI;;AAEvC,gCAAO,aAAY;;sBAEtB,0DACO,6BACI,oDAA2B,gCAC7B,wDACC,QAAC,MAAO,cAAS,cAAM,YAAO,EAAE,2JAG/C,oDAES,yCACK,QAAC,OAAM,YAAS,YAAJ,GAAG,+BACb,oDAA2B,gBAC7B,+JAGd,sDAES,sCACgC,sCACnB,sBAChB,2CAAsB,kBAAK,mFACd;AAE4B,4BAA3B,2CAAU,OAAO,EAAE;;IAWvD;;;IArGO,kBAAa,wBAAW;IAC3B;IACG;IACA;IACE;IACL;IACI;;;EAgGV;;;;;;;;;;;;;;;;;;MA/FqB,0CAAc","file":"addservice.ddc.js"}');
  // Exports:
  return {
    screens__addservice: addservice
  };
});

//# sourceMappingURL=addservice.ddc.js.map
