import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  // state for the toggle on and off value
  // setting the initial value of the calculator as white
  const [darkTheme, setDarkTheme] = useState(false);

  // state for the result
  const [result, setResult] = useState("");

  // defining the colors for the background of the application
  const colors = {
    dark: "#000000",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };

  // declaring a function which will give color
  const getColor = (light: any, dark: any) => (darkTheme ? dark : light);

  // declaring getBtnColor for button colors
  const getBtnColor = (type: any) => {
    if (type === "top") {
      return "#35FBD6";
    } else if (type == "right") {
      return "#EB6363";
    } else {
      return getColor(colors.dark, colors.light);
    }
  };

  // logic part for the calculator
  const calculate = (title: any) => {
    // when title is clear
    if (title == "C") {
      setResult("");
    }
    // when the title is of delete
    else if (title == "DL") {
      // starting as well as ending index
      setResult(result.substring(0, result.length - 1));
    }
    // when title is equal
    else if (title == "=") {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
      /*

        Suppose result is a string containing a mathematical expression: "10 / 3".

eval("10 / 3") evaluates to approximately 3.3333333333333335.
.toFixed(3) formats this to "3.333".
Number("3.333") converts this to the number 3.333.
.toString() converts the number back to a string, "3.333".
So, ans will be the string "3.333".

      */
    }
    // else condition
    else {
      setResult(result + title);
    }
  };

  // component for buttons
  const Buttons = ({ title, type }: any) => {
    return (
      <TouchableOpacity
        onPress={() => calculate(title)}
        style={{
          // flex: 1
          padding: 10,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: getColor(colors.light1, colors.dark2),
          height: 70,
          width: 70,
          margin: 15,
          marginTop: 30,
          marginVertical: 30
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: getBtnColor(type),
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 35,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: "center",
      }}
    >
      {/* for the toggle button */}
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        // changing the toggle icon color
        thumbColor={getColor(colors.dark, colors.light)}
        // toggle bg color
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <StatusBar style="auto" />
      {/* for results */}
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          marginTop: 150,
          paddingBottom: 10,
        }}
      >
        {result}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: getColor(colors.light1, colors.dark1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Buttons title="C" type="top" />
        <Buttons title="DL" type="top" />
        <Buttons title="/" type="top" />
        <Buttons title="%" type="top" />
        <Buttons title="7" type="number" />
        <Buttons title="8" type="number" />
        <Buttons title="9" type="number" />
        <Buttons title="*" type="right" />
        <Buttons title="4" type="number" />
        <Buttons title="5" type="number" />
        <Buttons title="6" type="number" />
        <Buttons title="-" type="right" />
        <Buttons title="1" type="number" />
        <Buttons title="2" type="number" />
        <Buttons title="3" type="number" />
        <Buttons title="+" type="right" />
        <Buttons title="00" type="number" />
        <Buttons title="0" type="number" />
        <Buttons title="." type="number" />
        <Buttons title="=" type="right" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});