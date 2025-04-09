import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Stepone() {
  const { total } = useLocalSearchParams<{ total: string }>();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const [addressError, setAddressError] = useState<string>("");
  const [addressTouched, setAddressTouched] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [phoneError, setPhoneError] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const [postalError, setPostalError] = useState("");
  const [postalTouched, setPostalTouched] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 30}
      >
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.personal}>Personal Information</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
          />
          <Text style={styles.contact}>Contact Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={() => setEmailTouched(true)}
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => {
              handleChange("email", text);
              if (text.trim() === "") {
                setEmailError("");
              } else if (!text.endsWith("@gmail.com")) {
                setEmailError("Email must end with @gmail.com");
              } else {
                setEmailError("");
              }
            }}
          />
          {emailTouched && emailError !== "" && (
            <Text
              style={{
                color: "red",
                fontFamily: "Markazi",
                fontSize: 20,
                textAlign: "center",
                marginTop: -20,
                marginBottom: 10,
              }}
            >
              {emailError}
            </Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="number-pad"
            onFocus={() => setPhoneTouched(true)}
            value={formData.phone}
            onChangeText={(text) => {
              handleChange("phone", text);
              if (text.trim() === "") {
                setPhoneError("");
              } else if (text.length < 10 || text.length > 13) {
                setPhoneError("Phone number must be 10 to 13 digits");
              } else {
                setPhoneError("");
              }
            }}
          />
          {phoneTouched && phoneError !== "" && (
            <Text
              style={{
                color: "red",
                fontFamily: "Markazi",
                fontSize: 20,
                textAlign: "center",
                marginTop: -20,
                marginBottom: 10,
              }}
            >
              {phoneError}
            </Text>
          )}
          <TextInput
            style={[styles.input, { height: 110 }]}
            placeholder="Address"
            multiline
            value={formData.address}
            onFocus={() => setAddressTouched(true)}
            onChangeText={(text) => {
              handleChange("address", text);
              if (text.trim().length === 0) {
                setAddressError("");
              } else if (text.length < 30) {
                setAddressError("Address must be at least 30 characters long.");
              } else {
                setAddressError("");
              }
            }}
          />
          {addressTouched && addressError !== "" && (
            <Text
              style={{
                color: "red",
                fontFamily: "Markazi",
                fontSize: 20,
                textAlign: "center",
                marginTop: -20,
                marginBottom: 10,
              }}
            >
              {addressError}
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="City"
            value={formData.city}
            onChangeText={(text) => handleChange("city", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            keyboardType="number-pad"
            inputMode="numeric"
            maxLength={5}
            onFocus={() => setPostalTouched(true)}
            value={formData.postal}
            onChangeText={(text) => {
              handleChange("postal", text);
              if (text.trim() === "") {
                setPostalError("");
              } else if (text.length !== 5) {
                setPostalError("Postal code must be exactly 5 digits");
              } else {
                setPostalError("");
              }
            }}
          />
          {postalTouched && postalError !== "" && (
            <Text
              style={{
                color: "red",
                fontFamily: "Markazi",
                fontSize: 20,
                textAlign: "center",
                marginTop: -20,
                marginBottom: 10,
              }}
            >
              {postalError}
            </Text>
          )}
          <TouchableOpacity
            style={styles.done}
            onPress={() => {
              const isFormCompleted = Object.values(formData).every(
                (value) => value.trim() !== ""
              );

              const isValid =
                emailError === "" &&
                phoneError === "" &&
                addressError === "" &&
                postalError === "";

              if (!isFormCompleted) {
                Alert.alert(
                  "Incomplete Form",
                  "Please fill in all fields before continuing."
                );
                return;
              }

              if (!isValid) {
                Alert.alert(
                  "Invalid Input",
                  "Please make sure all inputs are valid before continuing."
                );
                return;
              }

              router.push({
                pathname: "/paymentdetail",
                params: { total },
              });
            }}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  personal: {
    fontFamily: "MarkaziSemiBold",
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#EDEFEE",
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 22,
    fontFamily: "MarkaziMedium",
    paddingLeft: 20,
  },
  contact: {
    fontFamily: "MarkaziSemiBold",
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  done: {
    backgroundColor: "#F4CE14",
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },
  doneText: {
    fontFamily: "MarkaziSemiBold",
    color: "#000000",
    fontSize: 25,
  },
});
