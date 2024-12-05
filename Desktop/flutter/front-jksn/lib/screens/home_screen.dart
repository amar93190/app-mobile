import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Accueil'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Center(
                child: Image.network(
                  'https://yourimageurl.com/jksn.jpg', // Remplacez par l'URL réelle de l'image
                  height: 200,
                ),
              ),
              SizedBox(height: 16),
              Text(
                'JKSN',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              Text(
                'Originaire de la Seine-Saint-Denis, JKSN est un rappeur français qui s\'est rapidement fait un nom dans le paysage musical grâce à ses punchlines percutantes et ses morceaux authentiques. Depuis son premier EP "CRACK", il ne cesse de gagner en popularité avec des titres comme "Christian Dior" et "Seine-Saint-Denis".',
                style: TextStyle(
                  fontSize: 16,
                ),
              ),
              SizedBox(height: 16),
              Text(
                'Discographie',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              Text(
                '• "CRACK" (EP, 2023)\n• "Christian Dior" (Single, 2023)\n• "Seine-Saint-Denis" (Single, 2024)',
                style: TextStyle(
                  fontSize: 16,
                ),
              ),
              SizedBox(height: 16),
              Text(
                'Suivez JKSN sur les réseaux sociaux :',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  IconButton(
                    icon: Icon(Icons.facebook),
                    onPressed: () {
                      _launchURL(
                          'https://facebook.com/jksn'); // Remplacez par le vrai lien
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.camera_alt),
                    onPressed: () {
                      _launchURL(
                          'https://instagram.com/jksn'); // Remplacez par le vrai lien
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.music_note),
                    onPressed: () {
                      _launchURL(
                          'https://spotify.com/jksn'); // Remplacez par le vrai lien
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.video_library),
                    onPressed: () {
                      _launchURL(
                          'https://youtube.com/jksn'); // Remplacez par le vrai lien
                    },
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}
