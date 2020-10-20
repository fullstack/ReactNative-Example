import React from "react";
import { Text, View, Button } from "react-native";

class IncrementScreen extends React.Component {
  state = { counter: 0, counterText: "Start Counter text, --> "};

  render() {
    return (
      <View>
        <Button
          title="Increment"
          onPress={() => this.setState({ 
            counter: this.state.counter + 1, 
            counterText: this.state.counterText + " - Increment Buttone Pushed"         
          })}
        />
        <Text>Current: {this.state.counter}</Text>
        <Text>CounterText: {this.state.counterText}</Text>
        <Button
          title="Decrement"
          onPress={() => this.setState({ counter: this.state.counter - 1, 
            counterText: this.state.counterText + " - Decrement Buttone Pushed" 
          })}
        />
      </View>
    );
  }
}

export default IncrementScreen;
