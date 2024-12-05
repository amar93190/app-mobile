import 'package:flutter/material.dart';

const textTitre = TextStyle(
  fontSize: 20,
  color: Colors.green,
  fontWeight: FontWeight.bold,
);

ThemeData myTheme = ThemeData(
  fontFamily: 'Teko',
  textTheme: const TextTheme(
    bodyMedium: TextStyle(
      fontSize: 18,
      color: Colors.black,
    ),
  ),
  primarySwatch: Colors.blue,
  scaffoldBackgroundColor: Colors.amber,
);
