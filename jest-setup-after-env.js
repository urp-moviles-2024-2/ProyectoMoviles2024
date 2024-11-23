import '@testing-library/jest-native/extend-expect';

jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  
  return {
    Ionicons: ({ testID }) => <Text testID={testID}>MockIcon</Text>,
  };
});