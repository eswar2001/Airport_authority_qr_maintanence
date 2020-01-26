import 'dart:convert';

import 'package:Maintanence/datastructure/service.dart';
import 'package:intl/intl.dart';

class Item {
  Item(this.itemname, this.serialno, this.dateofinstallation,
      this.Maintainencefreq, this.dateofreplacement);
  String itemname;
  String serialno;
  DateTime dateofinstallation;
  String Maintainencefreq;
  DateTime dateofreplacement;
  List<ServiceData> services;
  void addService(ServiceData newservice) {
    services.add(newservice);
  }

  List<ServiceData> getServices() {
    return services;
  }
<<<<<<< HEAD
  
 
}
=======

static String toJson(Item i) {
   Map<String, dynamic> map() => {
        'itemname': i.itemname,
        'serialno': i.serialno,
        'dateofinstallation': i.dateofinstallation,
        'Maintainencefreq': i.Maintainencefreq,
        'dateofreplacement': i.dateofreplacement
      };

    String result = jsonEncode(map());
    return result;
  }
  
}
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d
