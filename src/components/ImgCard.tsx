import { StyleSheet, View, Text, Pressable, Image, ImageSourcePropType } from "react-native";
import { styles } from '../styles/MainStyles';

interface ImgCard {
    darkMode: boolean;
    item: {
        id: string;
        imgLinkLight: ImageSourcePropType;
        imgLinkDark: ImageSourcePropType;
    };
}

export default function ImgCard({ item, darkMode }: ImgCard) {
    return (
        <View style={[ styles.card, styles.blankCard, (darkMode ? (styles.blankCardDark) : (styles.blankCardLight)) ]}>
            <Image source={(darkMode ? (item.imgLinkDark) : (item.imgLinkLight))} style={styles.workImg}/>
        </View>
    )
}