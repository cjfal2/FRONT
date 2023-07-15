import 'package:flutter/material.dart';

class GetButton extends StatelessWidget {
  final double size;
  const GetButton({super.key, required this.size});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size / 3,
      decoration: BoxDecoration(
        border: Border.all(color: Colors.black),
      ),
      child: Text("번호생성하기"),
    );
  }
}
