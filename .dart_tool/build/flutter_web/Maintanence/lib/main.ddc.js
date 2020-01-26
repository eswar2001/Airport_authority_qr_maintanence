define(['dart_sdk', 'packages/flutter/material', 'packages/Maintanence/screens/home', 'packages/flutter/src/widgets/actions', 'packages/Maintanence/screens/second', 'packages/Maintanence/screens/ServiceList'], function(dart_sdk, packages__flutter__material, packages__Maintanence__screens__home, packages__flutter__src__widgets__actions, packages__Maintanence__screens__second, packages__Maintanence__screens__ServiceList) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const home = packages__Maintanence__screens__home.screens__home;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const second = packages__Maintanence__screens__second.screens__second;
  const ServiceList = packages__Maintanence__screens__ServiceList.screens__ServiceList;
  const main = Object.create(dart.library);
  let BuildContextToHome = () => (BuildContextToHome = dart.constFn(dart.fnType(home.Home, [framework.BuildContext])))();
  let BuildContextToSecond = () => (BuildContextToSecond = dart.constFn(dart.fnType(second.Second, [framework.BuildContext])))();
  let BuildContextToServiceList = () => (BuildContextToServiceList = dart.constFn(dart.fnType(ServiceList.ServiceList, [framework.BuildContext])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let IdentityMapOfString$BuildContextToWidget = () => (IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, BuildContextToWidget())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialRoute",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routes",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 6,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C3;
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Airport Authority", initialRoute: "/home", routes: new (IdentityMapOfString$BuildContextToWidget()).from(["/home", dart.fn(context => new home.Home.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToHome()), "/second", dart.fn(context => new second.Second.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextToSecond()), "/maintainance", dart.fn(context => new ServiceList.ServiceList.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), BuildContextToServiceList())]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:Maintanence/main.dart");
  let C9;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}));
  };
  dart.trackLibraries("packages/Maintanence/main", {
    "package:Maintanence/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,iCACE,mCACO,iBACN,uDACN,SAAS,QAAC,WAAY,iGACtB,WAAU,QAAC,WAAU,uGACrB,iBAAgB,QAAC,WAAU;IAGjC;;;;;;EACF;;;;;;;;;AAhBe,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
