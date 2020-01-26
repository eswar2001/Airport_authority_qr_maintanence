define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const service = Object.create(dart.library);
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
      this[id$] = value;
    }
    get remarks() {
      return this[remarks$];
    }
    set remarks(value) {
      this[remarks$] = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      this[date$] = value;
    }
    get cost() {
      return this[cost$];
    }
    set cost(value) {
      this[cost$] = value;
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
  dart.setLibraryUri(service.ServiceData, "package:Maintanence/data%20structure/service.dart");
  dart.setFieldSignature(service.ServiceData, () => ({
    __proto__: dart.getFields(service.ServiceData.__proto__),
    id: dart.fieldType(core.int),
    remarks: dart.fieldType(core.String),
    date: dart.fieldType(core.DateTime),
    cost: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/Maintanence/data%20structure/service", {
    "package:Maintanence/data%20structure/service.dart": service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service.dart"],"names":[],"mappings":";;;;;;;;;;;;IAIM;;;;;;IACG;;;;;;IACE;;;;;;IACL;;;;;;;;QAJc;QAAQ;QAAa;QAAU;IAA/B;IAAQ;IAAa;IAAU;;EAAM","file":"service.ddc.js"}');
  // Exports:
  return {
    data$32structure__service: service
  };
});

//# sourceMappingURL=service.ddc.js.map
