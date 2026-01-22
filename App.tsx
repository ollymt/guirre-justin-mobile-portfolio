import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable, Linking, ImageBackground } from 'react-native';
import { styles } from './src/styles/MainStyles';
import { useState } from 'react';
import TopBar from './src/components/TopBar';
import Card from './src/components/Card';
import Section from './src/components/Section';
import ImgCard from './src/components/ImgCard';

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
      <View style={{width: "100%"}}>
        <TopBar darkMode={darkMode} />
      </View>
      <View style={styles.innerContent}>

        <View style={[styles.card, styles.profileInfo]}>
          <Image source={{
            uri: (darkMode ? ("https://drive.google.com/uc?export=view&id=13O4DjtZB6HCiB5dzawZa5UklHrQWeONT") : ("https://drive.google.com/uc?export=view&id=1inHu4Sat6HM9793yZFQdU3ixcHU6coOX")),
          }} style={styles.pfp}/>
          <Text style={[styles.myName, styles.cardText, (darkMode ? (styles.textDark) : (styles.textLight))]}>Justin Guirre</Text>
        </View>

        <Section darkMode={darkMode} sectionLabel='Bio' children={
          <Card text='"Where your nightmares end..."' darkMode={darkMode} italic={true}/>
        } />

        <Section darkMode={darkMode} sectionLabel='Skills' children={
          <>
            <Card text='Good at critical thinking' darkMode={darkMode} />
            <Card text='Good at problem solving' darkMode={darkMode} />
            <Card text='Good at self-learning' darkMode={darkMode} />
            <Card text='Has good attention to detail' darkMode={darkMode} />
            <Card text='Good at curating spotify playlists' darkMode={darkMode} />
            <Card text='Knows basic programming (html, css, js, python)' darkMode={darkMode} />
            <Card text='Always curious' darkMode={darkMode} />
          </>
        } />

        <Section darkMode={darkMode} sectionLabel='Contact Info' children={
          <>
            <Card text='Email: justin_chase_guirre@dlsl.edu.ph' onPress={() => Linking.openURL("mailto:justin_chase_guirre@dlsl.edu.ph")} darkMode={darkMode}/>

            <Card text='Github: ollymt' onPress={() => Linking.openURL("https://github.com/ollymt")} darkMode={darkMode} />

            <Pressable style={[styles.card, styles.ig]} onPress={() => Linking.openURL("https://www.instagram.com/ollymt67")}>
              <ImageBackground source={{
                uri: "https://i.ytimg.com/vi/8j9szxn-68c/maxresdefault.jpg",
              }} style={styles.igBg} imageStyle={{ borderRadius: 6, }} resizeMode='cover'>

                <Text style={[styles.igLabel]}>Instagram: @ollymt67</Text>
              </ImageBackground>
          </Pressable>

          </>
        } />

        <Section darkMode={darkMode} sectionLabel='Works' children={
          <FlatList
            data={works}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

              <ImgCard darkMode={darkMode} item={item} />

            )}
            style={{
              overflow: "visible",
            }}
          />
        } />

        <Section darkMode={darkMode} sectionLabel='Settings' children={
          <>
            <Card text='Toggle Theme' onPress={() => setDarkMode(!darkMode)} darkMode={!darkMode}/>
         </>
        } />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
