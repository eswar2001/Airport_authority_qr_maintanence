import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:Maintanence/data/items.dart';
import 'package:Maintanence/datastructure/item.dart';
import 'package:intl/intl.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';
import 'package:http/http.dart' as http;
import 'GenerateScreen.dart';

String serialno = '1234';

class Register_item extends StatefulWidget {
  @override
  _Register_itemState createState() => _Register_itemState();
}

class _Register_itemState extends State<Register_item> {
 

  static String Itemname = '';

  static String Maintenance = '';

  //var image;
  // Uint8List bytes = Uint8List(200);
  // Future _generateBarCode() async {
  //   Uint8List result = await scanner.generateBarCode(serialno);
  //   this.setState(() => this.bytes = result);
  // }
  final dateFormat = DateFormat("EEEE, MMMM d, yyyy 'at' h:mma");
  static DateTime dateofinstal;
  static DateTime dateofreplacement;
  change(Item i)
  {
    i.itemname=Itemname;
    i.serialno=serialno;
    i.dateofinstallation=dateofinstal;
    i.Maintainencefreq=Maintenance;
    i.dateofreplacement=dateofreplacement;
  }
  String toJson(Item i) {
    Map<String, dynamic> map() => {
          'itemname': i.itemname,
          'serialno': i.serialno,
          'dateofinstallation': i.dateofinstallation.toString(),
          'Maintainencefreq': i.Maintainencefreq,
          'dateofreplacement': i.dateofreplacement.toString()
        };

    String result = jsonEncode(map());
    return result;
  }
  
  Item obj=new Item(Itemname, serialno, dateofinstal, Maintenance, dateofreplacement);
Register_item r=new Register_item();
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
                    padding: const EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 32.0),
                    child: TextField(
                      onChanged: (val) => Itemname = val,
                      decoration: InputDecoration(
                        labelText: 'Item Name',
                        border: OutlineInputBorder(),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 32.0),
                    child: TextField(
                      onChanged: (val) => serialno = val,
                      decoration: InputDecoration(
                        labelText: 'S/N no',
                        border: OutlineInputBorder(),
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsets.symmetric(vertical: 10.0, horizontal: 32.0),
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
                            initialTime: TimeOfDay.fromDateTime(
                                currentValue ?? DateTime.now()),
                          );
                          return DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      },
                      format: dateFormat,
                      decoration: InputDecoration(
                        labelText: 'Date of Installation',
                        border: OutlineInputBorder(),
                      ),
                      onChanged: (dt) => setState(() => dateofinstal = dt),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 32.0),
                    child: TextField(
                      onChanged: (val) => Maintenance = val,
                      decoration: InputDecoration(
                        labelText: 'Mainatenece Frequency',
                        border: OutlineInputBorder(),
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsets.symmetric(vertical: 10.0, horizontal: 32.0),
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
                            initialTime: TimeOfDay.fromDateTime(
                                currentValue ?? DateTime.now()),
                          );
                          return DateTimeField.combine(date, time);
                        } else {
                          return currentValue;
                        }
                      },
                      format: dateFormat,
                      decoration: InputDecoration(
                        labelText: 'Date of Replacement',
                        border: OutlineInputBorder(),
                      ),
                      onChanged: (dt) => setState(() => dateofreplacement = dt),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: <Widget>[
                        RaisedButton(
                          child: Text("Generate Barcode"),
                          onPressed: () {
                            // _generateBarCode();

                            // print(bytes);
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      GenerateScreen(serialno)),
                            );
                            // MaterialPageRoute(
                            //   builder: (context) => GenerateScreen(serialno),
                            // );
                            uploaddata();

                            //image=MemoryImage(bytes);
                            //  _settingModalBottomSheet(context,bytes);
                          },
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: RaisedButton(
                        child: Text("Add"),
                        onPressed: () {
                          uploaddata();
                          change(obj);
                          print(Itemname);
                          print(serialno);
                          print(dateofinstal);
                          print(Maintenance);
                          print(dateofreplacement);
                          
                          http
                              .put(
                                  'https://baymax-408db.firebaseio.com/Airport/$serialno.json',
                                  body: toJson(obj))
                              .then((http.Response response) {
                            print(toJson(obj));
                            // print('i should be executed before am i waiting');
                          }).catchError((error) {
                            print('There is an error');
                            return false;
                          });
                        }),
                  ),
                ],
              ),
            ),
          ),
        ));
  }

  void uploaddata() {
    Items.items.add(
        Item(Itemname, serialno, dateofinstal, Maintenance, dateofreplacement));
  }
  // void _settingModalBottomSheet(context,Uint8List bytes){
  //   showModalBottomSheet(
  //       context: context,
  //       builder: (BuildContext bc){
  //         return Padding(
  //           padding: const EdgeInsets.all(20.0),
  //           child: Container(
  //             height: 150.0,
  //             child: Image.memory(bytes,scale: 1.0,)

  //           ),
  //         );
  //       }
  //   );
  // }

}
