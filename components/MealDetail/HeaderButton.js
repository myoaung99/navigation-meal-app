import React from "react";
import { StyleSheet, Pressable, Dimensions} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const deviceWidth = Dimensions.get('window').width;

function HeaderButton({onPress, icon, color}) {
    return (
        <Pressable
            style={({pressed}) =>
                pressed && styles.pressed
            }
            onPress={onPress}
        >
            <Ionicons
                iconStyles={{padding: 10}}
                name={icon}
                size={deviceWidth < 350 ? 20 : 26}
                color={color}
            />
        </Pressable>
    );
}

export default HeaderButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
});
