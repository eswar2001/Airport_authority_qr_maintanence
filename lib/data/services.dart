import 'package:Maintanence/datastructure/service.dart';
//import 'package:flutter/material.dart';

class Services{
  List<ServiceData> servicelist =[
    ServiceData(id: 001111,remarks: 'Remarksjdfttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',date: DateTime.now(),cost: 250),
    ServiceData(id: 0022342,remarks: 'Remarks',date: DateTime.now()),
    ServiceData(id: 003245,remarks: 'Remarks',date: DateTime.now()),
    ServiceData(id: 004234,remarks: 'Remarks',date: DateTime.now()),
    ServiceData(id: 004234,remarks: 'Remarks',date: DateTime.now()),
  ];

  List<ServiceData> getServices(){
    return servicelist;
  }

}