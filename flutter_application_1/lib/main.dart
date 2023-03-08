// ignore_for_file: avoid_unnecessary_containers

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(),
            body: ListView(
              // controller: ScrollController(), // 스크롤 위치 감시
              children: [
                CostumWidget(),
                CostumWidget(),
                CostumWidget(),
                CostumWidget(),
                CostumWidget(),
                CostumWidget(),
                CostumWidget(),
              ],
            )));
  }
}

// 커스텀 위젯
class CostumWidget extends StatelessWidget {
  const CostumWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 300,
      child: Text('안녕1'),
    );
  }
}

// 또 다른 커스텀
var a = SizedBox(
  child: Text("안녕2"),
);








// class MyApp extends StatelessWidget {
//   const MyApp({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//         home: Scaffold(
//       appBar: AppBar(
//         title:
//             Text("역삼동", style: TextStyle(color: Color.fromARGB(255, 0, 0, 0))),
//         actions: [
//           IconButton(
//             onPressed: () {},
//             icon: Icon(Icons.search, color: Color.fromARGB(255, 0, 0, 0)),
//           ),
//           IconButton(
//             onPressed: () {},
//             icon: Icon(Icons.menu, color: Color.fromARGB(255, 0, 0, 0)),
//           ),
//           IconButton(
//             onPressed: () {},
//             icon:
//                 Icon(Icons.notifications, color: Color.fromARGB(255, 0, 0, 0)),
//           ),
//         ],
//         backgroundColor: Color.fromARGB(255, 238, 238, 238),
//       ),
//       body: Container(
//         height: 150,
//         padding: EdgeInsets.all(10),
//         child: Row(
//           children: [
//             Image.asset("dotori.jpg", width: 130, height: 130,),
//             SizedBox(
//               width: 300,
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   Text("도토리팝니다"),
//                   Text("수원어딘가"),
//                   Text("10억원"),
//                   Row(
//                     mainAxisAlignment: MainAxisAlignment.end,
//                     children: [
//                       Icon(Icons.favorite),
//                       Text("4")
//                     ],)
//                 ],
//               ),
//             )
//           ],
//         ),

//       )
//     ));
//   }
// }








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