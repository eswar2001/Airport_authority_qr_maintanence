import 'package:flutter/material.dart';
class Buttons extends StatelessWidget {
  Buttons({@required this.name,@required this.onpressed});
  String name;
  Function onpressed;
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text(name),
      onPressed:onpressed,
    );
  }
}