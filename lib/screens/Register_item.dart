<<<<<<< HEAD:lib/screens/second.dart
import 'dart:convert';
import 'dart:typed_data';
=======
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d:lib/screens/Register_item.dart
import 'package:Maintanence/data/items.dart';
import 'package:Maintanence/datastructure/item.dart';
import 'package:intl/intl.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';
<<<<<<< HEAD:lib/screens/second.dart
import 'package:qrscan/qrscan.dart' as scanner;
import 'package:http/http.dart' as http;
=======

import 'GenerateScreen.dart';

>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d:lib/screens/Register_item.dart

String serialno='1234';
class Register_item extends StatefulWidget {
  @override
  _Register_itemState createState() => _Register_itemState();
}

class _Register_itemState extends State<Register_item> {
    String Itemname='';
  
  String Maintenance='';

<<<<<<< HEAD:lib/screens/second.dart
  var image;
  Uint8List bytes = Uint8List(200);
  Future _generateBarCode() async {
    Uint8List result = await scanner.generateBarCode(serialno);
    this.setState(() => this.bytes = result);
  }

=======
  //var image;
  // Uint8List bytes = Uint8List(200);
  // Future _generateBarCode() async {
  //   Uint8List result = await scanner.generateBarCode(serialno);
  //   this.setState(() => this.bytes = result);
  // }
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d:lib/screens/Register_item.dart
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
<<<<<<< HEAD:lib/screens/second.dart
                        RaisedButton(
                          child: Text("Generate Barcode"),
                          onPressed: () {
                            _generateBarCode();
                            uploaddata();
                          },
                        ),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: RaisedButton(
                            child: Text("get barcode"),
                            onPressed: () {
                              print(bytes);
                              //image=MemoryImage(bytes);
                              _settingModalBottomSheet(context, bytes);
                            },
                          ),
                        ),
                      ],
=======
                        RaisedButton ( child: Text("Generate Barcode"),
                      onPressed: (){
                       // _generateBarCode();
                       
                        // print(bytes);
                        Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => GenerateScreen(serialno)),
                            );
                        // MaterialPageRoute(
                        //   builder: (context) => GenerateScreen(serialno),
                        // );
                          uploaddata();
                              //image=MemoryImage(bytes);
                            //  _settingModalBottomSheet(context,bytes);
                      },),
                       ],
>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d:lib/screens/Register_item.dart
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: RaisedButton(
                      child: Text("Add"),
                      onPressed: () {
                       
                      },
                    ),
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
<<<<<<< HEAD:lib/screens/second.dart

  void _settingModalBottomSheet(context, Uint8List bytes) {
    showModalBottomSheet(
        context: context,
        builder: (BuildContext bc) {
          return Padding(
            padding: const EdgeInsets.all(20.0),
            child: Container(
                height: 150.0,
                child: Image.memory(
                  bytes,
                  scale: 1.0,
                )),
          );
        });
  }
}
=======
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


>>>>>>> 1904cb9c084afeb1ff2b60d6703c34a5c49d111d:lib/screens/Register_item.dart
