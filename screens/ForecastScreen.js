import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, View } from 'react-native';

const AnimatedWidthHeight = (props) => {
    const scaleAnimate = useRef(new Animated.Value(100)).current;
    useEffect (() => {
        Animated.timing(scaleAnimate, {
            toValue: 200,
            duration: 2000,
            useNativeDriver: false,
        }).start();
    }, [scaleAnimate]);
    const animationStyle = {
        width: scaleAnimate,
        height: scaleAnimate,
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    };
    return (
        <View style={styles.container}>
                <Animated.Text style={[animationStyle]}>{props.children}</Animated.Text>
        </View>
    );
}

export default function ForecastScreen({ navigation, route }) {
    let text = route.params.text;

    return (
        <View style={styles.container}>
            <AnimatedWidthHeight >{text}</AnimatedWidthHeight>
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
    }
});

