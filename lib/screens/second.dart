import 'package:Maintanence/widgets/Buttons.dart';
import 'package:flutter/material.dart';
class Second extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Inventory Management'),
      ),
      body: Scrollbar(
        child: SingleChildScrollView(
          child: Container(
            child: Column(
              children: <Widget>[
                buildRow('Item Name:'),
                buildRow('S/N no:'),
                buildRow('Date of Installation:'),
                buildRow('Maintainence Frequency:'),
                buildRow('Date of Replacement:'),
                Padding(
                  padding: const EdgeInsets.all(32.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: <Widget>[Buttons(name: 'Get QR Code',onpressed: (){},)],
                  ),
                )
              ],
            ),
          ),
        ),
      )
    );
  }

  Padding buildRow(String textname) {
    return Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                Text(
                    textname,
                  style: TextStyle(
                    fontSize: 22.0,
                  ),
                ),
                SizedBox(
                  width: 30.0,
                ),
                Expanded(child: TextField(autofocus: true)),
              ],
            ),
          );
  }
}
