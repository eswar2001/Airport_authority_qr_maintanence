import 'package:flutter/material.dart';

class BuiltTextfield extends StatelessWidget {

  BuiltTextfield(this.label);
  String label;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
      child: TextField(
        decoration: InputDecoration(labelText: label,
          border: OutlineInputBorder(),),
      ),
    );
  }
}
