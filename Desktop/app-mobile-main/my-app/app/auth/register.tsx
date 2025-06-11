import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { authStyles } from '../../styles/auth';

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    console.log('Données d\'inscription:', formData);
    router.replace('/auth/login');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLoginPress = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    router.push('/auth/login');
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={authStyles.header}>
          <Text style={authStyles.title}>Créer un compte</Text>
          <Text style={authStyles.subtitle}>Rejoignez-nous en quelques étapes</Text>
        </View>

        <View style={authStyles.form}>
          <Input
            label="Prénom"
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            placeholder="Entrez votre prénom"
            editable={!isSubmitting}
          />

          <Input
            label="Nom"
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            placeholder="Entrez votre nom de famille"
            editable={!isSubmitting}
          />

          <Input
            label="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder="exemple@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isSubmitting}
          />

          <Input
            label="Mot de passe"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            placeholder="8 caractères minimum"
            secureTextEntry
            editable={!isSubmitting}
          />

          <Input
            label="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            placeholder="Retapez votre mot de passe"
            secureTextEntry
            editable={!isSubmitting}
          />

          <Button 
            title="S'inscrire"
            onPress={handleRegister}
            style={authStyles.button}
            textStyle={authStyles.buttonText}
            disabled={isSubmitting}
          />

          <TouchableOpacity 
            style={[authStyles.linkContainer, isSubmitting && { opacity: 0.7 }]}
            onPress={handleLoginPress}
            disabled={isSubmitting}
          >
            <Text style={authStyles.linkText}>
              Déjà un compte ? Connectez-vous
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 