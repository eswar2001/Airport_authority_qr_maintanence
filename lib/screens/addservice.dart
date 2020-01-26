import 'package:Maintanence/data/items.dart';
import 'package:Maintanence/datastructure/item.dart';
import 'package:Maintanence/screens/QRScanner.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class AddService extends StatefulWidget {
  @override
  _AddServiceState createState() => _AddServiceState();
}

class _AddServiceState extends State<AddService> {


   final dateFormat = DateFormat("EEEE, MMMM d, yyyy 'at' h:mma");
  int i;
  String id;
  String remarks;
  DateTime date;
  int cost;
   String barcode;
   static List<Item> availableitems;
   void initState() {
     availableitems=Items.items;
     barcode=QRScanner.barcode;
     for( i=0;i<availableitems.length;i++)
     {
       if(QRScanner.barcode==availableitems[i].serialno)
         break;
     }
     super.initState();
   }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Add service'),
        ),
        body: Scrollbar(
          child: SingleChildScrollView(
            child: Container(
              child: Column(
                children: <Widget>[
                  SizedBox(
                    height: 22.0,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                    child: TextField(
                      onChanged:(val)=>id=val,
                      decoration: InputDecoration(labelText: 'Product id',
                        border: OutlineInputBorder(),),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                    child: TextField(
                      onChanged:(val)=>remarks=val,
                      decoration: InputDecoration(labelText:'Remarks',
                        border: OutlineInputBorder(),),
                    ),
                  ),
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
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                    child: TextField(
                      onChanged:(val)=>cost=val as int,
                      decoration: InputDecoration(labelText: 'Cost',
                        border: OutlineInputBorder(),),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: <Widget>[
                        RaisedButton ( child: Text("Add Record"),
                          onPressed: (){
                         //   Items.items[i].services.add(ServiceData(id: id,remarks: remarks,date: date,cost: cost));
                            Navigator.pushNamed(context, '/home');
                          },),
                      ],
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
