import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import axios from "axios";

export default class Listpersons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
    axios.get("https://reqres.in/api/users?page=1").then((Response) => {
      this.setState({
        persons: Response.data.data,
      });
    });
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.avatar }} style={styles.image} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.first_name} {item.last_name}
              </Text>
            </View>
            <View style={styles.emailContainer}>
              <Text style={styles.emailTxt}>{item.email}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          extraData={this.state}
          data={this.state.persons}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  image: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
});
