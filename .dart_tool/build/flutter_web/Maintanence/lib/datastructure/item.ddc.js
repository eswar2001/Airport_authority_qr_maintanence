define(['dart_sdk', 'packages/Maintanence/datastructure/service'], function(dart_sdk, packages__Maintanence__datastructure__service) {
  'use strict';
  const core = dart_sdk.core;
<<<<<<< HEAD
=======
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const service = packages__Maintanence__datastructure__service.datastructure__service;
  const item = Object.create(dart.library);
  const $add = dartx.add;
<<<<<<< HEAD
=======
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidToMapOfString$dynamic = () => (VoidToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [])))();
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  const CT = Object.create(null);
  const itemname$ = dart.privateName(item, "Item.itemname");
  const serialno$ = dart.privateName(item, "Item.serialno");
  const dateofinstallation$ = dart.privateName(item, "Item.dateofinstallation");
  const Maintainencefreq$ = dart.privateName(item, "Item.Maintainencefreq");
  const dateofreplacement$ = dart.privateName(item, "Item.dateofreplacement");
  const services = dart.privateName(item, "Item.services");
  item.Item = class Item extends core.Object {
    get itemname() {
      return this[itemname$];
    }
    set itemname(value) {
      this[itemname$] = value;
    }
    get serialno() {
      return this[serialno$];
    }
    set serialno(value) {
      this[serialno$] = value;
    }
    get dateofinstallation() {
      return this[dateofinstallation$];
    }
    set dateofinstallation(value) {
      this[dateofinstallation$] = value;
    }
    get Maintainencefreq() {
      return this[Maintainencefreq$];
    }
    set Maintainencefreq(value) {
      this[Maintainencefreq$] = value;
    }
    get dateofreplacement() {
      return this[dateofreplacement$];
    }
    set dateofreplacement(value) {
      this[dateofreplacement$] = value;
    }
    get services() {
      return this[services];
    }
    set services(value) {
      this[services] = value;
    }
    addService(newservice) {
      this.services[$add](newservice);
    }
    getServices() {
      return this.services;
    }
<<<<<<< HEAD
=======
    static toJson(i) {
      function map() {
        return new (IdentityMapOfString$dynamic()).from(["itemname", i.itemname, "serialno", i.serialno, "dateofinstallation", i.dateofinstallation, "Maintainencefreq", i.Maintainencefreq, "dateofreplacement", i.dateofreplacement]);
      }
      dart.fn(map, VoidToMapOfString$dynamic());
      let result = convert.jsonEncode(map());
      return result;
    }
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  };
  (item.Item.new = function(itemname, serialno, dateofinstallation, Maintainencefreq, dateofreplacement) {
    this[services] = null;
    this[itemname$] = itemname;
    this[serialno$] = serialno;
    this[dateofinstallation$] = dateofinstallation;
    this[Maintainencefreq$] = Maintainencefreq;
    this[dateofreplacement$] = dateofreplacement;
    ;
  }).prototype = item.Item.prototype;
  dart.addTypeTests(item.Item);
  dart.setMethodSignature(item.Item, () => ({
    __proto__: dart.getMethods(item.Item.__proto__),
    addService: dart.fnType(dart.void, [service.ServiceData]),
    getServices: dart.fnType(core.List$(service.ServiceData), [])
  }));
  dart.setLibraryUri(item.Item, "package:Maintanence/datastructure/item.dart");
  dart.setFieldSignature(item.Item, () => ({
    __proto__: dart.getFields(item.Item.__proto__),
    itemname: dart.fieldType(core.String),
    serialno: dart.fieldType(core.String),
    dateofinstallation: dart.fieldType(core.DateTime),
    Maintainencefreq: dart.fieldType(core.String),
    dateofreplacement: dart.fieldType(core.DateTime),
    services: dart.fieldType(core.List$(service.ServiceData))
  }));
  dart.trackLibraries("packages/Maintanence/datastructure/item", {
    "package:Maintanence/datastructure/item.dart": item
  }, {
<<<<<<< HEAD
  }, '{"version":3,"sourceRoot":"","sources":["item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAMS;;;;;;IACA;;;;;;IACE;;;;;;IACF;;;;;;IACE;;;;;;IACS;;;;;;eACU;AACF,MAAxB,AAAS,oBAAI,UAAU;IACzB;;AAGE,YAAO;IACT;;4BAbU,UAAc,UAAc,oBAAwB,kBAAsB;IAMlE;IANR;IAAc;IAAc;IAAwB;IAAsB;;EAAkB","file":"item.ddc.js"}');
=======
  }, '{"version":3,"sourceRoot":"","sources":["item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAQS;;;;;;IACA;;;;;;IACE;;;;;;IACF;;;;;;IACE;;;;;;IACS;;;;;;eACU;AACF,MAAxB,AAAS,oBAAI,UAAU;IACzB;;AAGE,YAAO;IACT;kBAEwB;AACvB,eAAqB;AAAS,yDACzB,YAAY,AAAE,CAAD,WACb,YAAY,AAAE,CAAD,WACb,sBAAsB,AAAE,CAAD,qBACvB,oBAAoB,AAAE,CAAD,mBACrB,qBAAqB,AAAE,CAAD;;;AAGnB,mBAAS,mBAAW,AAAG,GAAA;AAC9B,YAAO,OAAM;IACf;;4BA3BU,UAAe,UAAe,oBAC/B,kBAAuB;IAMd;IAPR;IAAe;IAAe;IAC/B;IAAuB;;EAAkB","file":"item.ddc.js"}');
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  // Exports:
  return {
    datastructure__item: item
  };
});

//# sourceMappingURL=item.ddc.js.map
