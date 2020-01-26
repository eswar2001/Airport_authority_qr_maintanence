import 'package:Maintanence/data/items.dart';
import 'package:Maintanence/datastructure/item.dart';
import 'package:Maintanence/screens/QRScanner.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Screen3 extends StatefulWidget {
  @override
  _Screen3State createState() => _Screen3State();
}

class _Screen3State extends State<Screen3> {
  String barcode;
  static List<Item> availableitems;
  @override
  void initState() {
    availableitems=Items.items;
     barcode=QRScanner.barcode;
     for(int i=0;i<availableitems.length;i++)
     {
       if(QRScanner.barcode==availableitems[i].serialno)
         break;
     }
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Serial no:$barcode'),),
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                child: Text('Add Sevice'),
                onPressed: (){
                  Navigator.pushNamed(context, '/addservice');
                },
              ),
              RaisedButton(
                child: Text('Older services'),
                onPressed: (){
                  Navigator.pushNamed(context,'/servicelist');
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
