import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const ConfirmationButton: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationResponse = (response: boolean) => {
    setShowConfirmation(false);
    if (response) {
      // Ação a ser executada quando a resposta for "sim"
      Alert.alert('Ação confirmada!');
    } else {
      // Ação a ser executada quando a resposta for "não"
      Alert.alert('Ação cancelada!');
    }
  };

  return (


    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
        <Text style={styles.buttonText}>SOS</Text>
      </TouchableOpacity>

      {showConfirmation && (

        <View style={styles.confirmationContainer}>
          <TouchableOpacity style={styles.confirmationButton} onPress={() => handleConfirmationResponse(true)}>
            <Text style={styles.confirmationButtonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.confirmationButton, styles.secondButton]} onPress={() => handleConfirmationResponse(false)}>
            <Text style={styles.confirmationButtonText}>Não</Text>
          </TouchableOpacity>
        </View>
      )}
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
 
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  confirmationContainer: {
    zIndex: 0,
    flexDirection: 'row',
    marginTop: 20,
  },
  confirmationButton: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  confirmationButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  secondButton: {
    marginLeft: 10,
  },
});

export default ConfirmationButton;
