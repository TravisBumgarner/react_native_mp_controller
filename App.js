/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import axios from 'axios';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      esp2866_ip: 'http://192.168.1.105',
      blink_count: '5',
      response: '',
    };
  }

  handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    const {
      esp2866_ip,
      blink_count,
    } = this.state;

      axios.post(esp2866_ip, {'blink_count': parseInt(blink_count, 10)} ).then(response => this.setState({response})).catch(response => this.setState({response}));
  }

  render() {
    const {
      esp2866_ip,
      blink_count,
      response,
    } = this.state;

    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="esp2866 ip"
          onChangeText={(esp2866_ip) => this.setState({esp2866_ip})}
          value={esp2866_ip}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Blink Count"
          onChangeText={(blink_count) => this.setState({blink_count})}
          value={blink_count}
        />
        <Button
          title='PRESS ME!'
          onPress={ this.handleSubmit }
        />
      </View>
    );
  }
}
