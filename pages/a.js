// HomePage.js
import React from 'react';
import { View, Button } from 'react-native';

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title="Go to Second Page"
          onPress={() => navigate('Second')}
        />
      </View>
    );
  }
}

export default HomePage;
