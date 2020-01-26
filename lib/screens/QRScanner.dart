import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:flutter/material.dart';

class QRScanner extends StatefulWidget {
  @override
  _QRScannerState createState() => _QRScannerState();
}

class _QRScannerState extends State<QRScanner> {
  String barcode;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child:Column(
          children: <Widget>[
            RaisedButton(child:Text('Scan QR Code'),
            onPressed: (){},),
            Text()
          ],
        )
      ),

    );
  }
}
