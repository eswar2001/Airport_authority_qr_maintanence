import 'package:Maintanence/datastructure/service.dart';
//import 'package:flutter/material.dart';

class Services{
  List<ServiceData> servicelist =[
    ServiceData(id: 001,remarks: 'Remarksjdfttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',date: DateTime.now(),cost: 250),
    ServiceData(id: 002,remarks: 'Remarks',date: DateTime.now()),
    ServiceData(id: 003,remarks: 'Remarks',date: DateTime.now()),
    ServiceData(id: 004,remarks: 'Remarks',date: DateTime.now()),
  ];

  List<ServiceData> getServices(){
    return servicelist;
  }

}