import { Image, Pressable } from 'react-native';

export default function ImageButton({ onPress, imageStyle, source }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                return { opacity: pressed ? 0.5 : 1 }
            }}>
            <Image style={imageStyle} source={source}/>
        </Pressable>
    );
}

