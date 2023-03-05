import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        // 여기다 코드짜기
        // home: Image.asset('dotori.jpg')
        // home: Center(
        //   child: Container(width: 50, height: 50, color: Colors.blue,)
        // )
        home: Scaffold(
            appBar: AppBar(
              title: Text("앱바"),
              backgroundColor: Color.fromARGB(255, 79, 202, 255),
            ),
            body: Text("바디"),
            bottomNavigationBar: BottomAppBar(
                height: 70,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Icon(Icons.phone),
                    Icon(Icons.message),
                    Icon(Icons.contact_page),
                  ]
                ),
            
            )));
  }
}
