import React from 'react';
import { Text } from 'react-native';

export default function MockIonicons({ name, size, color, testID }) {
  return <Text testID={testID}>{name}</Text>;
}