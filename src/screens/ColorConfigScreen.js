import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INITIAL = 0;
const COLOR_INCREMENT = 15;
const INITIAL_STATE = {
  red: COLOR_INITIAL,
  green: COLOR_INITIAL,
  blue: COLOR_INITIAL
};

const constrain = x => {
  if (x < 0) return 0;
  if (x > 255) return 255;
  return x;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, red: constrain(state.red + action.payload) };
    case "GREEN":
      return { ...state, green: constrain(state.green + action.payload) };
    case "BLUE":
      return { ...state, blue: constrain(state.blue + action.payload) };
    default:
      return state;
  }
};

const ColoredSquare = ({ color }) => {
  return (
    <View style={{ height: 200, width: 300, backgroundColor: color }}></View>
  );
};

const ColorConfig = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        handleIncrease={() =>
          dispatch({ type: "RED", payload: COLOR_INCREMENT })
        }
        handleDecrease={() =>
          dispatch({ type: "RED", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        handleIncrease={() =>
          dispatch({ type: "GREEN", payload: COLOR_INCREMENT })
        }
        handleDecrease={() =>
          dispatch({ type: "GREEN", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        handleIncrease={() =>
          dispatch({ type: "BLUE", payload: COLOR_INCREMENT })
        }
        handleDecrease={() =>
          dispatch({ type: "BLUE", payload: -1 * COLOR_INCREMENT })
        }
      />
      <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
      <ColoredSquare color={`rgb(${red}, ${green}, ${blue})`} />
    </View>
  );
};
const styled = StyleSheet.create({});

export default ColorConfig;
