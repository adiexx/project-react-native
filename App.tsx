import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, TouchableOpacity, Text, Alert, StyleSheet, StatusBar} from 'react-native';



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
  
      <Text style={styles.buttonconfText}>conf</Text>
      </TouchableOpacity>
    <View style={styles.container}>

     
      
      <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
        <Text style={styles.buttonText}>SOS</Text>
      </TouchableOpacity>
  
      {showConfirmation && (

        <View style={styles.confirmatioprinc}>

          <View style={styles.confirmationContainer2}>
          <Text style={styles.conftext}>Tem certeza?</Text>
          </View>
          
          <View style={styles.confirmationContainer1}>
          <TouchableOpacity style={styles.confirmationButton} onPress={() => handleConfirmationResponse(true)}>
            <Text style={styles.confirmationButtonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.confirmationButton, styles.secondButton]} onPress={() => handleConfirmationResponse(false)}>
            <Text style={styles.confirmationButtonText}>Não</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonconfText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  confirmationContainer1: {

    paddingHorizontal: 100,
    paddingVertical: 50,
    borderRadius: 10,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmatioprinc: {
    backgroundColor: 'green',
    paddingVertical: 75,
    borderRadius: 10,
    width: 200,
    height: 180,
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
    marginBottom: 10,
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
    marginLeft: 10,
  },
  buttonconf: {
    zIndex: 1,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',


  }
});

export default ConfirmationButton;

