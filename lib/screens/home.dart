import 'package:Maintanence/widgets/Buttons.dart';
import 'package:flutter/material.dart';
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Inventory Management'),
      ),
      body: SafeArea(
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Buttons(name: 'New',onpressed: (){
                Navigator.pushNamed(context, '/second');
              },),
              Buttons(name: 'Maintainence',onpressed: (){
                Navigator.pushNamed(context, '/maintainance');
              },)
            ],
          ),
        ),
      ),
    );
  }
}
