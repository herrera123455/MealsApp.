import { View, Pressable, Text, StyleSheet, Platform} from "react-native"

function CategoryGridTile({title, color, onPress}){
    return (
        <view style={[Styles.girdItem, { backgroundColor: color}]}>
            <Pressable android_ripple={{color: '#ccc'}}
             style={({ pressed}) => [StyleSheet.button, pressed
                onPress={onPress}>
                <View style={Styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                </Pressable>
                </view>
    )

}