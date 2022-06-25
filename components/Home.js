import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyles } from '../styles/global';



const NavigatorToAbout = props => {
    props.navigation.navigate('About');
}
const NavigatorToContact = props => {
  props.navigation.navigate('Contact');
}
//Home component
const Home = props => {
    return (
      <View style={globalStyles.container}>
        <Text>Monash Library</Text>


        <Button title='About Us' onPress={()=> NavigatorToAbout(props)} />
        <Button title='Contact Us' onPress={()=> NavigatorToContact(props)} />
      </View>
    );
  }

export default Home;