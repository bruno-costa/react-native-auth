import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const SignIn: React.FC = () => {
  const disabled = false;
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={() => 0} disabled={disabled} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignIn;
