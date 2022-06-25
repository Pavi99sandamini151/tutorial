import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyles } from '../styles/global';



const NavigatorToHome = props => {
    props.navigation.navigate('Home');
}
//Home component
const Contact = props => {


    return (
      <View style={globalStyles.container}>
        <Button title='Go to Home' onPress={()=> NavigatorToHome(props)} />
      </View>
    );
  }

export default Contact;