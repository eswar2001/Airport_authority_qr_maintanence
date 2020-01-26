define(['dart_sdk', 'packages/Maintanence/data structure/service'], function(dart_sdk, packages__Maintanence__data$32structure__service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const service = packages__Maintanence__data$32structure__service.data$32structure__service;
  const services = Object.create(dart.library);
  let JSArrayOfServiceData = () => (JSArrayOfServiceData = dart.constFn(_interceptors.JSArray$(service.ServiceData)))();
  const CT = Object.create(null);
  const servicelist = dart.privateName(services, "Services.servicelist");
  services.Services = class Services extends core.Object {
    get servicelist() {
      return this[servicelist];
    }
    set servicelist(value) {
      this[servicelist] = value;
    }
    getServices() {
      return this.servicelist;
    }
  };
  (services.Services.new = function() {
    this[servicelist] = JSArrayOfServiceData().of([new service.ServiceData.new({id: 1111, remarks: "Remarksjdfttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt", date: new core.DateTime.now(), cost: 250}), new service.ServiceData.new({id: 22342, remarks: "Remarks", date: new core.DateTime.now()}), new service.ServiceData.new({id: 3245, remarks: "Remarks", date: new core.DateTime.now()}), new service.ServiceData.new({id: 4234, remarks: "Remarks", date: new core.DateTime.now()}), new service.ServiceData.new({id: 4234, remarks: "Remarks", date: new core.DateTime.now()})]);
    ;
  }).prototype = services.Services.prototype;
  dart.addTypeTests(services.Services);
  dart.setMethodSignature(services.Services, () => ({
    __proto__: dart.getMethods(services.Services.__proto__),
    getServices: dart.fnType(core.List$(service.ServiceData), [])
  }));
  dart.setLibraryUri(services.Services, "package:Maintanence/data/services.dart");
  dart.setFieldSignature(services.Services, () => ({
    __proto__: dart.getFields(services.Services.__proto__),
    servicelist: dart.fieldType(core.List$(service.ServiceData))
  }));
  dart.trackLibraries("packages/Maintanence/data/services", {
    "package:Maintanence/data/services.dart": services
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["services.dart"],"names":[],"mappings":";;;;;;;;;;;;IAIoB;;;;;;;AAShB,YAAO;IACT;;;IAVkB,oBAAa,2BAC7B,iCAAgB,eAAgB,iFAAyF,+BAAY,OACrI,iCAAgB,gBAAiB,iBAAyB,2BAC1D,iCAAgB,eAAgB,iBAAyB,2BACzD,iCAAgB,eAAgB,iBAAyB,2BACzD,iCAAgB,eAAgB,iBAAyB;;EAO7D","file":"services.ddc.js"}');
  // Exports:
  return {
    data__services: services
  };
});

//# sourceMappingURL=services.ddc.js.map
