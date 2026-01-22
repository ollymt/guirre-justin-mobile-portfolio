import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable, Linking, ImageBackground } from 'react-native';
import { styles } from './src/styles/MainStyles';
import { useState } from 'react';

const works = [
  { id: "1", imgLink: "https://drive.google.com/uc?export=view&id=1Gbs_kBP2FJFZ7K4O6Lah2BAM1DbrrZgh", name: "Curbside"},
  { id: "2", imgLink: "https://drive.google.com/uc?export=view&id=18gfP5j8BSMCLU_gQ_gCF1PbPdwNTMJUZ", name: "SpeakUp"},
  { id: "3", imgLink: "https://drive.google.com/uc?export=view&id=11ZKA6_sLvsHZctbF8WPAGVLftV8-4RMr", name: "whisk"},
  { id: "4", imgLink: "https://drive.google.com/uc?export=view&id=17lT0Wp_IsoNjZnJUKag0O3kfZIK_WzV1", name: "24radio"},
]

export default function App() {
  const [ darkMode, setDarkMode ] = useState(false)
  
  return (
    <ScrollView style={[styles.scrollContainer, (darkMode ? (styles.scrollContainerDark) : (styles.scrollContainerLight))]}
                contentContainerStyle={styles.scrollContent}
                stickyHeaderIndices={[0]}
    >
      <View style={[styles.topbar, (darkMode ? (styles.topbarDark) : (styles.topbarLight))]}>
        <Text style={[styles.topbarheader, (darkMode ? (styles.topbarheaderDark) : (styles.topbarheaderLight))]}>My Portfolio</Text>
      </View>
      <View style={styles.innerContent}>

        <View style={[styles.card, styles.profileInfo]}>
          <Image source={{
            uri: (darkMode ? ("https://drive.google.com/uc?export=view&id=13O4DjtZB6HCiB5dzawZa5UklHrQWeONT") : ("https://drive.google.com/uc?export=view&id=1inHu4Sat6HM9793yZFQdU3ixcHU6coOX")),
          }} style={styles.pfp}/>
          <Text style={[styles.myName, (darkMode ? (styles.textDark) : (styles.textLight))]}>Justin Guirre</Text>
        </View>

        <View style={styles.infoCont}>
          <Text style={[styles.infoContHeader, (darkMode ? (styles.textDark) : (styles.textLight))]}>Bio</Text>

          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>"Where your nightmares end..."</Text>
          </View>

        </View>

        <View style={styles.infoCont}>
          <Text style={[styles.infoContHeader, (darkMode ? (styles.textDark) : (styles.textLight))]}>Skills</Text>

          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Good at critical thinking</Text>
          </View>
          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Good at problem solving</Text>
          </View>
          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Good at self-learning</Text>
          </View>
          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Has good attention to detail</Text>
          </View>
          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Good at curating spotify playlists</Text>
          </View>
          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Knows basic programming (html, css, js, python)</Text>
          </View>
          <View style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Always curious</Text>
          </View>
        </View>

        <View style={styles.infoCont}>
          <Text style={[styles.infoContHeader, (darkMode ? (styles.textDark) : (styles.textLight))]}>Contact Info</Text>

          <Pressable style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]} onPress={() => Linking.openURL("mailto:justin_chase_guirre@dlsl.edu.ph")}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Email: justin_chase_guirre@dlsl.edu.ph</Text>
          </Pressable>
          <Pressable style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]} onPress={() => Linking.openURL("https://github.com/ollymt")}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Github: ollymt</Text>
          </Pressable>
          <Pressable style={[styles.card, styles.ig]} onPress={() => Linking.openURL("https://www.instagram.com/ollymt67")}>
            <ImageBackground source={{
              uri: "https://i.ytimg.com/vi/8j9szxn-68c/maxresdefault.jpg",
            }} style={styles.igBg} imageStyle={{ borderRadius: 6, }} resizeMode='cover'>
              <Text style={styles.igLabel}>Instagram: @ollymt67</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View style={styles.infoCont}>
          <Text style={[styles.infoContHeader, (darkMode ? (styles.textDark) : (styles.textLight))]}>Works</Text>

          <FlatList
            data={works}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[ styles.card, styles.blankCard, (darkMode ? (styles.blankCardDark) : (styles.blankCardLight)) ]}>
                <Image source={{
                  uri: item.imgLink,
                }} style={styles.workImg}/>
              </View>
            )}
            style={{
              overflow: "visible",
            }}
          />
        </View>

        <View style={styles.infoCont}>
          <Text style={[styles.infoContHeader, (darkMode ? (styles.textDark) : (styles.textLight))]}>Settings</Text>

          <Pressable style={[styles.card, (darkMode ? (styles.cardDark) : (styles.cardLight))]} onPress={() => setDarkMode(!darkMode)}>
            <Text style={(darkMode ? (styles.textDark) : (styles.textLight))}>Toggle Theme</Text>
          </Pressable>
        </View>

      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
