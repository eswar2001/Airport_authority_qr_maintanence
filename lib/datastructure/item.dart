import 'package:Maintanence/datastructure/service.dart';
import 'package:intl/intl.dart';

class Item{

  Item(this.itemname,this.serialno,this.dateofinstallation,this.Maintainencefreq,this.dateofreplacement);
  String itemname;
  String serialno;
  DateTime dateofinstallation;
  String Maintainencefreq;
  DateTime dateofreplacement;
  List<ServiceData> services;
  void addService(ServiceData newservice){
    services.add(newservice);
  }
  List<ServiceData> getServices()
  {
    return services;
  }
  
 
}