define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const service = Object.create(dart.library);
<<<<<<< HEAD
=======
  const $_get = dartx._get;
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  const CT = Object.create(null);
  const id$ = dart.privateName(service, "ServiceData.id");
  const remarks$ = dart.privateName(service, "ServiceData.remarks");
  const date$ = dart.privateName(service, "ServiceData.date");
  const cost$ = dart.privateName(service, "ServiceData.cost");
  service.ServiceData = class ServiceData extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
<<<<<<< HEAD
      this[id$] = value;
=======
      super.id = value;
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
    }
    get remarks() {
      return this[remarks$];
    }
    set remarks(value) {
<<<<<<< HEAD
      this[remarks$] = value;
=======
      super.remarks = value;
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
    }
    get date() {
      return this[date$];
    }
    set date(value) {
<<<<<<< HEAD
      this[date$] = value;
=======
      super.date = value;
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
    }
    get cost() {
      return this[cost$];
    }
    set cost(value) {
<<<<<<< HEAD
      this[cost$] = value;
=======
      super.cost = value;
    }
    static fromJson(json) {
      return new service.ServiceData.new({id: core.String._check(json[$_get]("id")), remarks: core.String._check(json[$_get]("remarks")), date: core.DateTime._check(json[$_get]("date")), cost: core.int._check(json[$_get]("cost"))});
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
    }
  };
  (service.ServiceData.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let remarks = opts && 'remarks' in opts ? opts.remarks : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let cost = opts && 'cost' in opts ? opts.cost : null;
    this[id$] = id;
    this[remarks$] = remarks;
    this[date$] = date;
    this[cost$] = cost;
    ;
  }).prototype = service.ServiceData.prototype;
  dart.addTypeTests(service.ServiceData);
  dart.setLibraryUri(service.ServiceData, "package:Maintanence/datastructure/service.dart");
  dart.setFieldSignature(service.ServiceData, () => ({
    __proto__: dart.getFields(service.ServiceData.__proto__),
<<<<<<< HEAD
    id: dart.fieldType(core.String),
    remarks: dart.fieldType(core.String),
    date: dart.fieldType(core.DateTime),
    cost: dart.fieldType(core.int)
=======
    id: dart.finalFieldType(core.String),
    remarks: dart.finalFieldType(core.String),
    date: dart.finalFieldType(core.DateTime),
    cost: dart.finalFieldType(core.int)
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  }));
  dart.trackLibraries("packages/Maintanence/datastructure/service", {
    "package:Maintanence/datastructure/service.dart": service
  }, {
<<<<<<< HEAD
  }, '{"version":3,"sourceRoot":"","sources":["service.dart"],"names":[],"mappings":";;;;;;;;;;;;IAIS;;;;;;IACA;;;;;;IACE;;;;;;IACL;;;;;;;;QAJc;QAAQ;QAAa;QAAU;IAA/B;IAAQ;IAAa;IAAU;;EAAM","file":"service.ddc.js"}');
=======
  }, '{"version":3,"sourceRoot":"","sources":["service.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAIe;;;;;;IACA;;;;;;IACE;;;;;;IACL;;;;;;oBAGwC;AAChD,YAAO,qDACD,AAAI,IAAA,QAAC,oCACA,AAAI,IAAA,QAAC,wCACR,AAAI,IAAA,QAAC,gCACL,AAAI,IAAA,QAAC;IAEf;;;QAdkB;QAAQ;QAAa;QAAU;IAA/B;IAAQ;IAAa;IAAU;;EAAM","file":"service.ddc.js"}');
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
  // Exports:
  return {
    datastructure__service: service
  };
});

//# sourceMappingURL=service.ddc.js.map
