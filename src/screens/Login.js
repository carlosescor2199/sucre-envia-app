import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';

import InputText from '../components/inputs/InputText';
import GenericButton from '../components/buttons/GenericButton';

import background from '../assets/images/backgrounds/background-login.png';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({ navigation, login }) => {
  const [values, setValues] = useState({
    cellphone: '',
    password: '',
  });

  const handleChangeText = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async () => {
    const url =
      'https://cxkwj7n40b.execute-api.us-east-2.amazonaws.com/dev/api/v1/login/signin';
    const res = await axios.post(url, {
      celPhone: values.cellphone,
      password: values.password,
    });
    if (res.data.token) {
      const token = res.data.token;
      Alert.alert(token);
    } else {
      Alert.alert(res.data.message);
    }
  };

  const toRegister = () => {
    navigation.navigate('SignUp');
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
            <Text style={styles.title}>Iniciar Sesión</Text>
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
            <GenericButton
              onPress={onSubmit}
              title="Iniciar Sesión"
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
              ¿No tienes una cuenta?{' '}
              <Text onPress={() => toRegister()} style={styles.LinkToRegister}>
                Registrate
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
    height: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '78%',
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

export default Login;
