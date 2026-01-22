import { StyleSheet, View, Text } from "react-native";
import { styles } from "../styles/MainStyles";

interface TopBarProps {
    darkMode: boolean;
}

export default function TopBar({ darkMode }: TopBarProps) {
    return (
        <View style={[styles.topbar, (darkMode ? (styles.topbarDark) : (styles.topbarLight))]}>
            <Text style={[styles.topbarheader, (darkMode ? (styles.topbarheaderDark) : (styles.topbarheaderLight))]}>My Portfolio</Text>
        </View>
    )
};