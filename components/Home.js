import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



const NavigatorToAbout = props => {
    props.navigation.navigate('About');
}
//Home component
const Home = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Go to About' onPress={()=> NavigatorToAbout(props)} />
      </View>
    );
  }

export default Home;