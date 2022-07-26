import React from "react";
import { StyleSheet, Pressable} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

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
                size={26}
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
