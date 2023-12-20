import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ForecastScreen({navigation, route}) {
    let text = route.params.text;
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.baseText}>{text}</Text>
            </Text>
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
