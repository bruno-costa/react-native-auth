import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AuthStore from '@/stores/auth';

const Dashboard: React.FC = () => {
  const authStore = AuthStore.useStore();

  const signOutHandler = () => {
    authStore.commit('signOut');
  };

  return (
    <View style={styles.container}>
      <Text>Nome: {authStore.get.user.name}</Text>
      <Text>Email: {authStore.get.user.email}</Text>
      <Button title="Sign Out" onPress={signOutHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Dashboard;
