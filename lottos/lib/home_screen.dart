import 'package:flutter/material.dart';
import 'package:lottos/get_button.dart';
import 'package:lottos/make_number_button.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: Text("로또번호 생성기"),
        centerTitle: true,
      ),
      body: Container(
        child: Column(
          children: [
            GetButton(size: size.width / 3),
            SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                for (num i = 1; i < 7; i++)
                  MakeNumberButton(
                    size: size.width / 7,
                    number: 1,
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
