import 'dart:typed_data';
import 'package:Maintanence/data/items.dart';
import 'package:Maintanence/datastructure/item.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';
import 'package:qrscan/qrscan.dart' as scanner;



class Second extends StatefulWidget {
  @override
  _SecondState createState() => _SecondState();
}

class _SecondState extends State<Second> {
  String Itemname;
  String serialno;
  String Maintenance;

  var image;
  Uint8List bytes = Uint8List(200);
  Future _generateBarCode() async {
    Uint8List result = await scanner.generateBarCode(serialno);
    this.setState(() => this.bytes = result);
  }
  final dateFormat = DateFormat("EEEE, MMMM d, yyyy 'at' h:mma");
  DateTime dateofinstal;
  DateTime dateofreplacement;
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
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                  child: TextField(
                    onChanged:(val)=>Itemname=val,
                    decoration: InputDecoration(labelText: 'Item Name',
                      border: OutlineInputBorder(),),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                  child: TextField(
                    onChanged:(val)=>serialno=val,
                    decoration: InputDecoration(labelText:'S/N no',
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
                      onChanged: (dt) => setState(() => dateofinstal = dt),
                    ),
                  ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 32.0),
                  child: TextField(
                    onChanged:(val)=>Maintenance=val,
                    decoration: InputDecoration(labelText: 'Mainatenece Frequency',
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
                      decoration: InputDecoration(labelText: 'Date of Replacement',
                        border: OutlineInputBorder(),),
                      onChanged: (dt) => setState(() => dateofreplacement = dt),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: <Widget>[
                        RaisedButton ( child: Text("Generate Barcode"),
                      onPressed: (){
                        _generateBarCode();
                        uploaddata();
                      },),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: RaisedButton ( child: Text("get barcode"),
                            onPressed: (){
                              print(bytes);
                              //image=MemoryImage(bytes);
                              _settingModalBottomSheet(context,bytes);
                            },),
                        ),

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
  void uploaddata(){
    Items.items.add(Item(Itemname,serialno,dateofinstal,Maintenance,dateofreplacement));
  }
  void _settingModalBottomSheet(context,Uint8List bytes){
    showModalBottomSheet(
        context: context,
        builder: (BuildContext bc){
          return Padding(
            padding: const EdgeInsets.all(20.0),
            child: Container(
              height: 150.0,
              child: Image.memory(bytes,scale: 1.0,)

            ),
          );
        }
    );
  }

}

