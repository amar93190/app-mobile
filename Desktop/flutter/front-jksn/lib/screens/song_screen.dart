// lib/screen/list.dart

import 'package:flutter/material.dart';
import '../style.dart';

class SongScreen extends StatelessWidget {
  const GridScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text("Grid", style: textTitre),
          const SizedBox(height: 20),
          //
          GridView.count(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            crossAxisCount: 3,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
            children: [
              Image.asset('mathieu_fight.gif'),
              Image.asset('mathieu_fight.gif'),
              Image.asset('mathieu_fight.gif'),
              Image.asset('mathieu_fight.gif'),
              Image.asset('mathieu_fight.gif'),
              Image.asset('mathieu_fight.gif'),
            ],
          ),
        ],
      ),
    );
  }
}
