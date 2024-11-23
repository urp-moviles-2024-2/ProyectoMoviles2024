import React from "react";
import { View, StyleSheet} from "react-native";
import Footer from "../components/footer";

export default function ScreenWithFooter({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Footer navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});