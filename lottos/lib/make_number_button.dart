import 'package:flutter/material.dart';

class MakeNumberButton extends StatelessWidget {
  final double size;
  final int number;
  MakeNumberButton({
    super.key,
    required this.size,
    required this.number,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 2),
      alignment: Alignment.center,
      height: size,
      width: size,
      decoration: BoxDecoration(
        border: Border.all(color: Colors.black),
        borderRadius: BorderRadius.circular(1000),
      ),
      child: Text(number.toString(), style: TextStyle(fontSize: 20)),
    );
  }
}
