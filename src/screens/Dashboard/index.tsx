import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dashboard: React.FC = () => (
  <View style={styles.container}>
    <Text>Dashboard</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Dashboard;
