import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class RandomNumber extends React.Component<any, any> {
  static propTypes = {
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.props.onPress(this.props.id);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 50,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: 'green',
  },
});
export default RandomNumber;
