import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import useState from '@/hooks/useState';
import * as authService from '@/services/auth';
import AuthStore from '@/stores/auth';

const SignIn: React.FC = () => {
  const authStore = AuthStore.useStore();
  const disabled = useState(false);

  const signInHandler = () => {
    disabled.set(true);
    authService.signIn().then((resp) => {
      authStore.commit('signIn', {
        token: resp.token,
        name: resp.user.name,
        email: resp.user.email,
      });
      disabled.set(false);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Sign In"
        onPress={signInHandler}
        disabled={disabled.value}
      />
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
