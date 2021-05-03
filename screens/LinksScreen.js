import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
    };
  }

  onClickListener = (viewId) => {
    if (this.state.name == "" && this.state.job == "") {
      Alert.alert(
        "Atención",
        "Por favor Revisar que todos los campos esten llenos"
      );
    } else {
      axios.post("https://reqres.in/api/users", this.state).then((r) => {
        Alert.alert(
          "Result",
          "Name: " +
            r.data.name +
            ", " +
            "Job: " +
            r.data.job +
            ", " +
            "CreatedAT: " +
            r.data.createdAt
        );
      });
    }
  };

  render() {
    const { name, job } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Nombre"
            underlineColorAndroid="transparent"
            value={name}
            onChangeText={(name) => this.setState({ name })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png",
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Rol"
            underlineColorAndroid="transparent"
            value={job}
            onChangeText={(job) => this.setState({ job })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/color/48/000000/flyer-distributor-male.png",
            }}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener()}
        >
          <Text style={styles.loginText}>Registro</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = "center";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnByRegister: {
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  textByRegister: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
