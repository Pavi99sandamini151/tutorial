import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



const NavigatorToHome = props => {
    props.navigation.navigate('Home');
}
//Home component
const About = props => {


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Go to Home' onPress={()=> NavigatorToHome(props)} />
      </View>
    );
  }

export default About;