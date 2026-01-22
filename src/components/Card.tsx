import { StyleSheet, View, Text, Pressable } from "react-native";
import { styles } from '../styles/MainStyles';
import { ViewStyle } from "react-native/types_generated/index";

interface CardProps {
    darkMode: boolean;
    text: string;
    onPress?: () => void;
    italic?: boolean
}

export default function Card({ darkMode, text, onPress, italic }: CardProps) {
    return (
        <Pressable style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]} onPress={onPress}>
            <Text style={[styles.cardText, (darkMode ? (styles.textDark) : (styles.textLight)), (italic ? (styles.italic) : ({}))]}>{text}</Text>
        </Pressable>
    )
}