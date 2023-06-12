import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, Image, TouchableOpacity, Text, Alert, StyleSheet, StatusBar} from 'react-native';


const ConfirmationButton: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleConfirmation = () => {
    setShowConfirmation(true);
  };
  function conf() {
    Alert.alert('* tela de configuração *');
  }

  const handleConfirmationResponse = (response: boolean) => {
    setShowConfirmation(false);
    if (response) {
      // Ação a ser executada quando a resposta for "sim"
      Alert.alert('Ação Confirmada!');
    } else {
      // Ação a ser executada quando a resposta for "não"
      Alert.alert('Ação cancelada!');
    }
  };

  return (
    
    
    <View style={styles.container1}>
     
    <TouchableOpacity style={styles.buttonconf} onPress={conf}>
  
      <Image style={styles.imageconf}
      source={{uri:'https://img.icons8.com/ios-filled/50/settings.png' }} />
   
      </TouchableOpacity>
    <View style={styles.container}>

     
      
      <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
        <Text style={styles.buttonText}>SOS</Text>
      </TouchableOpacity>
  
      {showConfirmation && (

        <View style={styles.confirmatioprinc}>

          <View style={styles.confirmationContainer2}>
          <Text style={styles.conftext}>TEM CERTEZA?</Text>
          </View>
          
          <View style={styles.confirmationContainer1}>
          <TouchableOpacity style={styles.confirmationButton} onPress={() => handleConfirmationResponse(true)}>
            <Text style={styles.confirmationButtonText}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.confirmationButton, styles.secondButton]} onPress={() => handleConfirmationResponse(false)}>
            <Text style={styles.confirmationButtonText}>NÃO</Text>
          </TouchableOpacity>
          
          </View>
        </View>
      )}



    </View>
    </View>
  
  );

};



const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    marginTop: 10,
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    zIndex: 0,
    marginTop: 10,
    position: 'relative',
    flex: 1,
    
  },
 
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  conftext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
  },
  buttonconfText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  confirmationContainer1: {

    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationContainer2: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmatioprinc: {
    backgroundColor: 'white',
    paddingVertical: 75,
    borderRadius: 10,
    width: 250,
    height: 200,
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  confirmationButton: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  confirmationButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  secondButton: {
    marginLeft: 18,
  },
  buttonconf: {
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageconf: { 
    width: 30,
    height: 30,
  }
});

export default ConfirmationButton;

