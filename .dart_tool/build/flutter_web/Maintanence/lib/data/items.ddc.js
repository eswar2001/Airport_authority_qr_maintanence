define(['dart_sdk', 'packages/Maintanence/datastructure/item'], function(dart_sdk, packages__Maintanence__datastructure__item) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const item = packages__Maintanence__datastructure__item.datastructure__item;
  const items = Object.create(dart.library);
  let JSArrayOfItem = () => (JSArrayOfItem = dart.constFn(_interceptors.JSArray$(item.Item)))();
  const CT = Object.create(null);
  items.Items = class Items extends core.Object {};
  (items.Items.new = function() {
    ;
  }).prototype = items.Items.prototype;
  dart.addTypeTests(items.Items);
  dart.setLibraryUri(items.Items, "package:Maintanence/data/items.dart");
  dart.defineLazy(items.Items, {
    /*items.Items.items*/get items() {
      return JSArrayOfItem().of([]);
    },
    set items(_) {}
  });
  dart.trackLibraries("packages/Maintanence/data/items", {
    "package:Maintanence/data/items.dart": items
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["items.dart"],"names":[],"mappings":";;;;;;;;;;;;;EAIA;;;;MADmB,iBAAK;YAAC","file":"items.ddc.js"}');
  // Exports:
  return {
    data__items: items
  };
});

//# sourceMappingURL=items.ddc.js.map
