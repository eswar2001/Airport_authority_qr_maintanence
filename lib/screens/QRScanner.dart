import 'package:qrscan/qrscan.dart' as scanner;
import 'package:flutter/material.dart';

class QRScanner extends StatefulWidget {
  @override
  _QRScannerState createState() => _QRScannerState();
}

class _QRScannerState extends State<QRScanner> {
  String barcode;
  Future _scanPhoto() async {
    String barcode = await scanner.scanPhoto();
    setState(() => this.barcode = barcode);
  }
  Future _scan() async {
    String barcode = await scanner.scan();
    setState(() => this.barcode = barcode);
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
                _scan();
              },),
              Text(
                  'OR',
              style:TextStyle(fontSize: 30.0,fontWeight: FontWeight.bold),),
           Padding(
              padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
               child: TextField(
                 onChanged: (value){
                   barcode=value;
                 },
                 decoration: InputDecoration(labelText: 'Enter Manually',
                  border: OutlineInputBorder(),),
        ),
           ),
              RaisedButton(child:Text('Get Details'),
                onPressed: (){
                  print(barcode);
                },),
            ],
          )
        ),

      ),
    );
  }
}
