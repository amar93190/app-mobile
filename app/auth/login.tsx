import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { authStyles } from '../../styles/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    console.log('Email:', email, 'Password:', password);
    router.replace('/home');
    
    // Réinitialiser isSubmitting après un court délai
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleRegisterPress = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    router.push('/auth/register');
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
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
          editable={!isSubmitting}
        />
        
        <Input 
          label="Mot de passe" 
          value={password} 
          onChangeText={setPassword} 
          placeholder="Votre mot de passe" 
          secureTextEntry 
          editable={!isSubmitting}
        />

        <Button 
          title="Se connecter"
          onPress={handleLogin}
          style={authStyles.button}
          textStyle={authStyles.buttonText}
          disabled={isSubmitting}
        />

        <TouchableOpacity 
          style={[authStyles.linkContainer, isSubmitting && { opacity: 0.7 }]}
          onPress={handleRegisterPress}
          disabled={isSubmitting}
        >
          <Text style={authStyles.linkText}>
            Pas encore de compte ? Inscrivez-vous
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
