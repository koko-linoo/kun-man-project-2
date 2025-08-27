import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function SapaSelect() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View>
        <Text>စပါးအမျိုးအစား</Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <TextInput
            readOnly
            placeholderTextColor="#aaa"
            id="fee"
            keyboardType="number-pad"
            style={styles.input}
            placeholder="ဆန်အမျိုးအစား ထည့်သွင်းရန်"
          />
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <Text style={styles.title}>Bottom Sheet Content</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  input: {
    borderRadius: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    width: "100%",
  },
  sheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  closeBtn: { color: "blue", marginTop: 10 },
});
