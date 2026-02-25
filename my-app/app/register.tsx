import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'expo-router';
import { authStyles } from '../styles/auth.styles';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    if (formData.password !== formData.confirmPassword) {
      console.log('Les mots de passe ne correspondent pas');
      return;
    }
    console.log('Données d\'inscription:', formData);
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
          />

          <Input
            label="Nom"
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            placeholder="Entrez votre nom de famille"
          />

          <Input
            label="Pseudo"
            value={formData.username}
            onChangeText={(text) => setFormData({ ...formData, username: text })}
            placeholder="Choisissez un pseudo unique"
            autoCapitalize="none"
          />

          <Input
            label="Date de naissance"
            value={formData.birthDate}
            onChangeText={(text) => {
              let formattedDate = text.replace(/\D/g, '');
              if (formattedDate.length > 2) {
                formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2);
              }
              if (formattedDate.length > 5) {
                formattedDate = formattedDate.slice(0, 5) + '/' + formattedDate.slice(5, 8);
              }
              formattedDate = formattedDate.slice(0, 10);
              setFormData({ ...formData, birthDate: formattedDate });
            }}
            placeholder="JJ/MM/AAAA (ex: 15/03/1990)"
            keyboardType="numeric"
          />

          <Input
            label="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder="exemple@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Mot de passe"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            placeholder="8 caractères minimum avec chiffres et lettres"
            secureTextEntry
          />

          <Input
            label="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            placeholder="Retapez votre mot de passe"
            secureTextEntry
          />

          <Button 
            title="S'inscrire"
            onPress={handleRegister}
            style={authStyles.button}
            textStyle={authStyles.buttonText}
          />

          <Link href="/login" asChild>
            <TouchableOpacity style={authStyles.linkContainer}>
              <Text style={authStyles.linkText}>
                Déjà un compte ? Connectez-vous
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 