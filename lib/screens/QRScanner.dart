import 'package:Maintanence/data/items.dart';
import 'package:http/http.dart' as http;
import 'package:Maintanence/datastructure/item.dart';
import 'package:qrscan/qrscan.dart' as scanner;
import 'package:flutter/material.dart';

class QRScanner extends StatefulWidget {
  static String barcode="";
  @override
  _QRScannerState createState() => _QRScannerState();
}

class _QRScannerState extends State<QRScanner> {
  static List<Item> availableitems;
  Future _scan() async {
    String barcode = await scanner.scan();
    setState(() {
      QRScanner.barcode = barcode;
      for(int i=0;i<availableitems.length;i++)
      {
        if(QRScanner.barcode==availableitems[i].serialno)
          Navigator.pushNamed(context, '/screen3',);
      }
    });
  }
   @override
  void initState() {
     availableitems=Items.items;
    // print(availableitems);
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('QR Code'),),
      body: Container(
        child: Center(
          child:Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(child:Text('Scan QR Code'),
              onPressed: (){
                setState(() {
                  _scan();
                });

              },),
              Text(
                  'OR',
              style:TextStyle(fontSize: 30.0,fontWeight: FontWeight.bold),),
           Padding(
              padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
               child: TextField(
                 onChanged: (value){
                   QRScanner.barcode=value;
                 },
                 decoration: InputDecoration(labelText: 'Enter Manually',
                  border: OutlineInputBorder(),),
        ),
           ),


              RaisedButton(child:Text('Get Details'),
                onPressed: (){
                  for(int i=0;i<availableitems.length;i++)
                  {
                    if(QRScanner.barcode==availableitems[i].serialno)
                      Navigator.pushNamed(context, '/screen3');
                  }
                  print(QRScanner.barcode);
                },
                ),
            ],
          )
        ),

      ),
    );
  }
}
