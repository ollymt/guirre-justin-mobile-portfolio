import { StyleSheet, View, Text } from "react-native";
import { styles } from '../styles/MainStyles';
import Card from "./Card";

interface SectionProps {
    sectionLabel: string;
    darkMode: boolean;
    children: React.ReactNode;
}

export default function Section({sectionLabel, children, darkMode}: SectionProps) {
    return (
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, (darkMode ? (styles.textDark) : (styles.textLight))]}>{sectionLabel}</Text>
          {children}
        </View>
    )
};