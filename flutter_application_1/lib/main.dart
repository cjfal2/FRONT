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
        title:
            Text("역삼동", style: TextStyle(color: Color.fromARGB(255, 0, 0, 0))),
        actions: [
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.search, color: Color.fromARGB(255, 0, 0, 0)),
          ),
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.menu, color: Color.fromARGB(255, 0, 0, 0)),
          ),
          IconButton(
            onPressed: () {},
            icon:
                Icon(Icons.notifications, color: Color.fromARGB(255, 0, 0, 0)),
          ),
        ],
        backgroundColor: Color.fromARGB(255, 238, 238, 238),
      ),
      body: Row(
        children: [
          Flexible(
              flex: 3,
              child: Container(
                color: Color.fromRGBO(255, 61, 61, 0),
              )),
          Flexible(
              flex: 7,
              child: Container(
                color: Color.fromRGBO(42, 223, 255, 0),
              )),
        ],
      ),
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