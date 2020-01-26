define(['dart_sdk', 'packages/flutter/material', 'packages/Maintanence/screens/home', 'packages/flutter/src/widgets/actions', 'packages/Maintanence/screens/second', 'packages/Maintanence/screens/QRScanner', 'packages/Maintanence/screens/screen3', 'packages/Maintanence/screens/ServiceList', 'packages/Maintanence/screens/addservice'], function(dart_sdk, packages__flutter__material, packages__Maintanence__screens__home, packages__flutter__src__widgets__actions, packages__Maintanence__screens__second, packages__Maintanence__screens__QRScanner, packages__Maintanence__screens__screen3, packages__Maintanence__screens__ServiceList, packages__Maintanence__screens__addservice) {
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
  const QRScanner = packages__Maintanence__screens__QRScanner.screens__QRScanner;
  const screen3 = packages__Maintanence__screens__screen3.screens__screen3;
  const ServiceList = packages__Maintanence__screens__ServiceList.screens__ServiceList;
  const addservice = packages__Maintanence__screens__addservice.screens__addservice;
  const main = Object.create(dart.library);
  let BuildContextToHome = () => (BuildContextToHome = dart.constFn(dart.fnType(home.Home, [framework.BuildContext])))();
  let BuildContextToSecond = () => (BuildContextToSecond = dart.constFn(dart.fnType(second.Second, [framework.BuildContext])))();
  let BuildContextToQRScanner = () => (BuildContextToQRScanner = dart.constFn(dart.fnType(QRScanner.QRScanner, [framework.BuildContext])))();
  let BuildContextToScreen3 = () => (BuildContextToScreen3 = dart.constFn(dart.fnType(screen3.Screen3, [framework.BuildContext])))();
  let BuildContextToServiceList = () => (BuildContextToServiceList = dart.constFn(dart.fnType(ServiceList.ServiceList, [framework.BuildContext])))();
  let BuildContextToAddService = () => (BuildContextToAddService = dart.constFn(dart.fnType(addservice.AddService, [framework.BuildContext])))();
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
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialRoute",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routes",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/Maintanence/main.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 9,
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
  let C4;
  let C5;
  let C6;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Airport Authority", initialRoute: "/home", routes: new (IdentityMapOfString$BuildContextToWidget()).from(["/home", dart.fn(context => new home.Home.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToHome()), "/second", dart.fn(context => new second.Second.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextToSecond()), "/maintenance", dart.fn(context => new QRScanner.QRScanner.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), BuildContextToQRScanner()), "/screen3", dart.fn(context => new screen3.Screen3.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextToScreen3()), "/servicelist", dart.fn(context => new ServiceList.ServiceList.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), BuildContextToServiceList()), "/addservice", dart.fn(context => new addservice.AddService.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextToAddService())]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
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
  let C12;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C12 || CT.C12}));
  };
  dart.trackLibraries("packages/Maintanence/main", {
    "package:Maintanence/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AACxB,YAAO,iCACE,mCACO,iBACN,uDACN,SAAS,QAAC,WAAY,iGACtB,WAAU,QAAC,WAAU,uGACvB,gBAAe,QAAC,WAAU,gHACxB,YAAW,QAAC,WAAU,0GACtB,gBAAe,QAAC,WAAU,sHAC1B,eAAc,QAAC,WAAU;IAG/B;;;;;;EACF;;;;;;;;;AAnBe,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
