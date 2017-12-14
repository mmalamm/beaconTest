import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  AppRegistry,
  Image,
  View,
  DeviceEventEmitter
} from "react-native";

import Beacons from "react-native-beacons-manager";
import { regions, beaconsRegistry } from "./beacons/index";
import {
  filterWithRegistryData,
  mergeWithRegistryData,
  sortByAccuracy
} from "./beacons";

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { region: null, beacons: [] };
  }
  componentWillMount() {
    Beacons.requestWhenInUseAuthorization();
    Beacons.startRangingBeaconsInRegion(regions[0]);
    Beacons.startUpdatingLocation();
  }
  componentDidMount() {
    this.beaconsDidRange = DeviceEventEmitter.addListener(
      "beaconsDidRange",
      ({ beacons }) => {
        this.setState({ beacons });
      }
    );
  }
  renderRow = item => {
    const bgColor = (i => ({ backgroundColor: i.color }))(item);
    return (
      <View key={`${item.uuid}-${item.major}-${item.minor}`} style={styles.row}>
        <View style={bgColor}>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: item.imgUrl }}
          />
          <Text>{item.name}</Text>
          <Text style={styles.smallText}>
            UUID: {item.uuid ? item.uuid : "NA"}
          </Text>
          <Text style={styles.smallText}>
            Major: {item.major ? item.major : "NA"}
          </Text>
          <Text style={styles.smallText}>
            Minor: {item.minor ? item.minor : "NA"}
          </Text>
          <Text style={styles.smallText}>
            RSSI: {item.rssi ? item.rssi : "NA"}
          </Text>
          <Text style={styles.smallText}>
            Proximity: {item.proximity ? item.proximity : "NA"}
          </Text>
          <Text style={styles.smallText}>
            Distance: {item.accuracy ? item.accuracy.toFixed(2) : "NA"}m
          </Text>
        </View>
      </View>
    );
  };
  render() {
    const { beacons } = this.state;
    let nearOnes = beacons.filter(
      b => b.proximity === "near" || b.proximity === "immediate"
    );
    return (
      <View style={styles.container}>
        {nearOnes
          .filter(filterWithRegistryData)
          .sort(sortByAccuracy)
          .map(mergeWithRegistryData)
          .map(this.renderRow)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  btleConnectionStatus: {
    fontSize: 20,
    paddingTop: 20
  },
  headline: {
    fontSize: 20,
    paddingTop: 20
  },
  row: {
    padding: 8,
    paddingBottom: 16
  },
  smallText: {
    fontSize: 11
  }
});
