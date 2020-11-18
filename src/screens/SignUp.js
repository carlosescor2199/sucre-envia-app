import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import InputText from '../components/inputs/InputText';
import GenericButton from '../components/buttons/GenericButton';

import background from '../assets/images/backgrounds/background-login.png';
import { ScrollView } from 'react-native-gesture-handler';

const SignUp = ({ navigation }) => {
  const [values, setValues] = useState({
    cellphone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeText = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = () => {
    navigation.navigate('PhoneConfirm');
  };

  const toLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <ImageBackground source={background} style={styles.image}>
          <View style={styles.containerLogo}>
            <Image
              source={require('../assets/images/logo/logo-sucre-envia.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.boxForm}>
            <Text style={styles.title}>Registrate</Text>
            <InputText
              placeholder="Número de Célular"
              value={values.cellphone}
              handleChangeText={(value) => handleChangeText(value, 'cellphone')}
              password={false}
              margin={{
                top: '5%',
                left: 10,
                right: 10,
                bottom: 0,
              }}
            />
            <InputText
              placeholder="Correo electrónico"
              value={values.email}
              handleChangeText={(value) => handleChangeText(value, 'email')}
              password={false}
              margin={{
                top: '5%',
                left: 10,
                right: 10,
                bottom: 0,
              }}
            />
            <InputText
              placeholder="Contraseña"
              value={values.password}
              handleChangeText={(value) => handleChangeText(value, 'password')}
              password={true}
              margin={{
                top: '5%',
                left: 10,
                right: 10,
                bottom: 0,
              }}
            />
            <InputText
              placeholder="Confirmar Contraseña"
              value={values.confirmPassword}
              handleChangeText={(value) =>
                handleChangeText(value, 'confirmPassword')
              }
              password={true}
              margin={{
                top: '5%',
                left: 10,
                right: 10,
                bottom: 0,
              }}
            />
            <GenericButton
              onPress={onSubmit}
              title="Registrarse"
              bgColor="#0A5004"
              borColor="#2FB623"
              textColor="#2FB623"
              width="80%"
              margin={{
                top: '5%',
                left: 10,
                right: 10,
                bottom: 0,
              }}
            />
            <Text style={styles.textToRegister}>
              ¿Ya tienes una cuenta?{' '}
              <Text onPress={() => toLogin()} style={styles.LinkToRegister}>
                Inicia Sesión
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  containerLogo: {
    width: '100%',
    height: '15%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  logo: {
    width: '100%',
    height: 100,
    marginTop: 20,
  },
  boxForm: {
    height: '62%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '42%',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: '#0A5004',
  },
  textToRegister: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    marginTop: 10,
  },
  LinkToRegister: {
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    color: '#13ACDC',
  },
});

export default SignUp;
