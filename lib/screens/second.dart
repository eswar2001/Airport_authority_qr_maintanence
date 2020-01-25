import 'package:Maintanence/widgets/Buttons.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';


class Second extends StatefulWidget {
  @override
  _SecondState createState() => _SecondState();
}

class _SecondState extends State<Second> {
  final dateFormat = DateFormat("EEEE, MMMM d, yyyy 'at' h:mma");
  DateTime date;
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
                  SizedBox(
                    height: 22.0,
                  ),
                  BuiltTextfield('Item Name'),
                  BuiltTextfield('S/N no'),
                  Padding(
                    padding: EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                    child: DateTimeField(
                      onShowPicker: (context, currentValue) async {
                        final date = await showDatePicker(
                            context: context,
                            firstDate: DateTime(1900),
                            initialDate: currentValue ?? DateTime.now(),
                            lastDate: DateTime(2100));
                        if (date != null) {
                          final time = await showTimePicker(
                            context: context,
                            initialTime:
                            TimeOfDay.fromDateTime(currentValue ?? DateTime.now()),
                          );
                          return DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      },
                      format: dateFormat,
                      decoration: InputDecoration(labelText: 'Date of Installation',
                        border: OutlineInputBorder(),),
                      onChanged: (dt) => setState(() => date = dt),
                    ),
                  ),
                  BuiltTextfield('Maintainence Frequency'),
                  Padding(
                    padding: EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                    child: DateTimeField(
                      onShowPicker: (context, currentValue) async {
                        final date = await showDatePicker(
                            context: context,
                            firstDate: DateTime(1900),
                            initialDate: currentValue ?? DateTime.now(),
                            lastDate: DateTime(2100));
                        if (date != null) {
                          final time = await showTimePicker(
                            context: context,
                            initialTime:
                            TimeOfDay.fromDateTime(currentValue ?? DateTime.now()),
                          );
                          return DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      },
                      format: dateFormat,
                      decoration: InputDecoration(labelText: 'Date of Replacement',
                        border: OutlineInputBorder(),),
                      onChanged: (dt) => setState(() => date = dt),
                    ),
                  ),
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

}

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
