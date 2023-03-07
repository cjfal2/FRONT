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
        leading: Icon(Icons.api),
        actions: [Icon(Icons.star), Icon(Icons.message)], // 우측 아이콘들
        backgroundColor: Color.fromARGB(255, 79, 202, 255),
      ),
      body: SizedBox(
          child: IconButton(
        onPressed: () {},
        icon: Icon(Icons.adb_sharp, color: Color.fromARGB(255, 249, 110, 110)),
      )),
    ));
  }
}
      // body: Align(
      //   alignment: Alignment.topCenter,
      //   child: Container(
      //       width: 50,
      //       height: 50,
      
      //       // margin: EdgeInsets.all(20), // 마진주기(4방향다)
      //       margin: EdgeInsets.fromLTRB(0, 5, 10, 20), // 마진주기(4방향 각각)
      //       padding: EdgeInsets.all(20), // 패딩주기
      //       // 자잘한 디자인들은 decoration 이용
      //       decoration: BoxDecoration(
      //         border: Border.all(color: Colors.black),
      //         color: Colors.brown
      //       ),
      //       child: Text("패딩 테스트")),
      // ),

        // home: Scaffold(
        //     appBar: AppBar(
        //       title: Text("앱바"),
        //       backgroundColor: Color.fromARGB(255, 79, 202, 255),
        //     ),
        //     body: Text("바디"),
        //     bottomNavigationBar: BottomAppBar(
        //         // ignore: avoid_unnecessary_containers
        //         child: SizedBox(
        //           height: 70,
        //           child: Row(
        //             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        //             children: [
        //               Icon(Icons.phone),
        //               Icon(Icons.message),
        //               Icon(Icons.contact_page),
        //             ]
        //           ),
        //         ),
            
        //     )));