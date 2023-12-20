import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ImageButton from '../components/ImageButton';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.title}>Hello!</Text>
                {'\n'}
                <Text>How is your internal weather today?</Text>
            </Text>
            <ImageButton
                onPress={() => Alert.alert("Happy to know you are well! \n When the Lambo?")}
                imageStyle={styles.image}
                source={require('../assets/sunny.png')} />
            <ImageButton
                onPress={() => Alert.alert('Need to laugh? \n How do you get $1,000 in crypto? \n Invest $2,000.\n{From UpJoke}')}
                imageStyle={styles.image}
                source={require('../assets/cloudy.png')} />
            <ImageButton
                onPress={() => Alert.alert('Oh! FOMO go away!!!!')}
                imageStyle={styles.image}
                source={require('../assets/rainy.png')} />
            <ImageButton
                onPress={() => Alert.alert('No storm, not even the one in your life, can last forever. Cryptosis will not last')}
                imageStyle={styles.image}
                source={require('../assets/stormy.png')} />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5741D9',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    baseText: {
        color: '#fff',
        fontSize: 20
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    button: {
        width: 120,
        margin: 24,
    },
    image: {
        width: 100,
        height: 100,
        padding: 12,
        marginTop: 24
    }
});
