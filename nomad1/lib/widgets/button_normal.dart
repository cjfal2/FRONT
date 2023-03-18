// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

class ButtonNormal extends StatelessWidget {
  final String text;
  final Color bgColor;
  final Color textColor;

  const ButtonNormal({
    Key? key,
    required this.text,
    required this.bgColor,
    required this.textColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            color: bgColor, borderRadius: BorderRadius.circular(45)),
        child: Padding(
          padding: EdgeInsets.symmetric(
            vertical: 20,
            horizontal: 50,
          ),
          child: Text(
            text,
            style: TextStyle(
              fontSize: 20,
              color: textColor,
            ),
          ),
        ));
  }
}
