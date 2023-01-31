import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import RandomNumber from './RandomNumber';

class Game extends React.Component<any, any> {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };
  state: any = {
    selectedNumbers: [],
  };
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  isNumberSelected = (numberIndex: any) => {
    return this.state.selectedNumbers.indexOf(numberIndex) >= 0;
  };

  selectNumber = (numberIndex: number) => {
    this.setState((prevState: any) => ({
      selectedNumbers: [...prevState.selectedNumbers, numberIndex],
    }));
  };

  gameStatus = () => {
    // constSumSelected =
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isDisabled={this.isNumberSelected(index)}
              onPress={this.selectNumber}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 100,
  },
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});
export default Game;
