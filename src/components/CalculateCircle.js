import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class CircleCircumferenceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: '',
      circumference: '',
    };
  }

  calculateCircumference = () => {
    const { radius } = this.state;
    if (radius !== '') {
      const circumference = 2 * Math.PI * parseFloat(radius);
      this.setState({ circumference: circumference.toFixed(2) });
    }
  };

  render() {
    const { radius, circumference } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de Circunferência</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor do raio"
          value={radius}
          onChangeText={(text) => this.setState({ radius: text })}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.calculateCircumference}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {circumference !== '' && (
          <Text style={styles.result}>
            Circunferência: {circumference}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
    },
    input: {
      width: 250,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'black',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    result: {
      color: 'black',
      marginTop: 20,
      fontSize: 26,
    },
  });

export default CircleCircumferenceCalculator;
