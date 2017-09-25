// import a library to help create a component
import React from 'react';
// import { Text } from 'react-native';
import { Text, View } from 'react-native';//////view is used to get the view deminsions
// create a component
const Header = (props) => { ///////////adding prop as an argument
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
////make component available to other parts of the App
export { Header };
