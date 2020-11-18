import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';

import InputText from '../components/inputs/InputText';
import GenericButton from '../components/buttons/GenericButton';

import background from '../assets/images/backgrounds/background-login.png';
import { ScrollView } from 'react-native-gesture-handler';

const PhoneConfirm = ({ navigation }) => {
  const [values, setValues] = useState({
    cellphone: '',
    password: '',
  });

  const handleChangeText = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = () => {
    Alert.alert(values.cellphone);
    Alert.alert(values.password);
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
            <Text style={styles.title}>Confirmar Célular</Text>
            <InputText
              placeholder="Código de Verificación"
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
            <GenericButton
              onPress={onSubmit}
              title="Confirmar"
              bgColor="#0A5004"
              borColor="#2FB623"
              textColor="#2FB623"
              width="80%"
              margin={{
                top: '5%',
                left: 10,
                right: 10,
                bottom: 20,
              }}
            />
            <Text onPress={() => toRegister()} style={styles.LinkToRegister}>
              Cambiar mi número de célular
            </Text>
            <Text style={styles.textToRegister}>
              ¿No recibiste SMS?{' '}
              <Text onPress={() => toRegister()} style={styles.LinkToRegister}>
                Enviar otro código
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
    height: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '42%',
    marginBottom: '54%',
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
    fontSize: 18,
    color: '#13ACDC',
  },
});

export default PhoneConfirm;
