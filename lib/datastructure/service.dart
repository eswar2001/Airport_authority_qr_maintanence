import 'package:intl/intl.dart';

class ServiceData{
  ServiceData({this.id,this.remarks,this.date,this.cost});
  final String id;
  final String remarks;
  final DateTime date;
  final int cost;

  
  factory ServiceData.fromJson(Map<String, dynamic> json) {
    return ServiceData(
      id: json['id'],
      remarks: json['remarks'],
      date: json['date'],
      cost: json['cost']
    );
  }
}