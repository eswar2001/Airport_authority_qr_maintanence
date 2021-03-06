import 'package:Maintanence/data/services.dart';
import 'package:Maintanence/datastructure/service.dart';
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
//  List<ServiceData> services;
//  String barcode;
//  List<Item> availableitems;
//  availableitems=Items.items;
//  barcode=QRScanner.barcode;
//  for(int i=0;i<availableitems.length;i++)
//  {
//    if(QRScanner.barcode==availableitems[i].serialno) {
//      services=availableitems[i].services;
//      break;
//    }
 // }
//  if(services.length!=null) {
    return ListView.builder(
      itemCount: services.length,
      itemBuilder: (context, index) {
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
          child: Card(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('product id :${services[index].id}',
                    style: TextStyle(
                        fontSize: 20.0, fontWeight: FontWeight.bold),),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    children: <Widget>[
                      Text('complaint : ',
                        style: TextStyle(
                            fontSize: 20.0, fontWeight: FontWeight.bold),),
                      Expanded(
                        child: Text('${services[index].remarks}',
                            style: TextStyle(fontSize: 16.0)),
                      )
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Date :${services[index].date}',
                    style: TextStyle(fontSize: 20.0),),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Cost :${services[index].cost}',
                    style: TextStyle(fontSize: 20.0),),
                )

              ],
            ),
          ),
        );
      },
    );
  }
//  else{
//    return Center(
//      child: Text('No Services Found'),
//    );
//  }
