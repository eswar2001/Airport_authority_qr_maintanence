import 'package:Maintanence/screens/QRScanner.dart';
import 'package:Maintanence/screens/ServiceList.dart';
import 'package:Maintanence/screens/addservice.dart';
import 'package:Maintanence/screens/home.dart';
import 'package:Maintanence/screens/screen3.dart';
import 'package:Maintanence/screens/second.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Airport Authority',
      initialRoute: '/home',
      routes: {
        '/home' :(context) => Home(),
        '/second':(context)=>Second(),
      '/maintenance':(context)=>QRScanner(),
        '/screen3':(context)=>Screen3(),
        '/servicelist':(context)=>ServiceList(),
        '/addservice':(context)=>AddService()
      },
    );
  }
}

