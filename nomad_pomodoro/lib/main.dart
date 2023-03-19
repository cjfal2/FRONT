import 'package:flutter/material.dart';
import 'package:nomad_pomodoro/screens/home_screen.dart';

void main() {
  runApp(const PomodoroApp());
}

class PomodoroApp extends StatefulWidget {
  const PomodoroApp({super.key});

  @override
  State createState() => _PomodoroAppState();
}

class _PomodoroAppState extends State {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        textTheme: const TextTheme(
          displayLarge: TextStyle(
            color: Color(0xFF232B55),
          ),
        ),
        cardColor: const Color(0xFFF4EDDB),
        scaffoldBackgroundColor: const Color(0xFFE7626C),
      ),
      home: const HomeScreen(),
    );
  }
}
