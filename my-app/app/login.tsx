import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'expo-router';
import { authStyles } from '../styles/auth.styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <View style={authStyles.header}>
        <Text style={authStyles.title}>Bienvenue</Text>
        <Text style={authStyles.subtitle}>Connectez-vous pour continuer</Text>
      </View>

      <View style={authStyles.form}>
        <Input 
          label="Email" 
          value={email} 
          onChangeText={setEmail} 
          placeholder="exemple@email.com" 
          keyboardType="email-address" 
          autoCapitalize="none"
        />
        
        <Input 
          label="Mot de passe" 
          value={password} 
          onChangeText={setPassword} 
          placeholder="Votre mot de passe" 
          secureTextEntry 
        />

        <Button 
          title="Se connecter"
          onPress={handleLogin}
          style={authStyles.button}
          textStyle={authStyles.buttonText}
        />

        <Link href="/register" asChild>
          <TouchableOpacity style={authStyles.linkContainer}>
            <Text style={authStyles.linkText}>
              Pas encore de compte ? Inscrivez-vous
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
