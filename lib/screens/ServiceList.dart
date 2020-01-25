import 'package:Maintanence/data%20structure/service.dart';
import 'package:Maintanence/data%20structure/services.dart';
import 'package:flutter/material.dart';



class ServiceList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
        appBar: AppBar(title: Text('Service History')),
        body: BodyLayout(),
      );
  }
}


class BodyLayout extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _myListView(context);
  }
}

Widget _myListView(BuildContext context) {
  List<ServiceData> services = Services().servicelist;
  return ListView.builder(
    itemCount: services.length,
    itemBuilder: (context, index) {
      return Card(
        child: ListTile(
          leading: Text(services[index].id.toString()),
          title: Text(services[index].remarks),
          subtitle: Text(services[index].date.toIso8601String()),
          trailing: Text(services[index].cost.toString()),
        ),
      );
    },
  );
}