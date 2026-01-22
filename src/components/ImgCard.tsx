import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { styles } from '../styles/MainStyles';

interface ImgCard {
    darkMode: boolean;
    item: {
        id: string;
        imgLink: string;
    };
}

export default function ImgCard({ item, darkMode }: ImgCard) {
    return (
        <View style={[ styles.card, styles.blankCard, (darkMode ? (styles.blankCardDark) : (styles.blankCardLight)) ]}>
            <Image source={{
                uri: item.imgLink,
            }} style={styles.workImg}/>
        </View>
    )
}