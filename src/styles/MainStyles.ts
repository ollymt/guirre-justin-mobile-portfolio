import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },

  scrollContainerLight: {
    backgroundColor: '#fff',
  },

  scrollContainerDark: {
    backgroundColor: "#000",
  },

  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '100%',
    padding: 10,
    gap: 10,
    borderRadius: 6,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 5,

    // ios shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  cardLight: {
    backgroundColor: '#B0E0E6',
    shadowColor: "#000",
  },

  cardDark: {
    backgroundColor: "#16373C",
    shadowColor: "#fff",
  },

  blankCard: {
    padding: 0,
  },

  blankCardLight: {
    shadowColor: "#000",
  },

  blankCardDark: {
    shadowColor: "#fff",
  },

  workImg: {
    width: "100%",
    aspectRatio: 1.778,
    borderRadius: 6,
  },

  profileInfo: {
    marginTop: 20,
    backgroundColor: "transparent",
    shadowOpacity: 0,
    width: '100%',
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  topbar: {
    height: 90,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,

    // ios shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    opacity: 0.9,
  },

  topbarLight: {
    backgroundColor: "#eee",
    shadowColor: "#000",
  },

  topbarDark: {
    backgroundColor: "#222",
    shadowColor: "#fff",
  },

  topbarheader: {
    color: "white",
    fontWeight: "bold",
    padding: 60,
    fontSize: 18,
  },

  topbarheaderLight: {
    color: "#111",
  },

  topbarheaderDark: {
    color: "#eee",
  },

  innerContent: {
    width: "100%",
    paddingHorizontal: 20, // this is your left/right padding
    alignItems: "center",
  },

  pfp: {
    height: 200,
    width: 200,
    aspectRatio: 1,
    borderRadius: "100%",
  },

  myName: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 20,
  },

  infoCont: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 40,
  },

  infoContHeader: {
    fontSize: 20,
    fontWeight: 700,
  },

  ig: {
    padding: 0,
    backgroundColor: "transparent",
    height: 55,
    width: "100%",
  },

  igBg: {
    width: "100%",
    flex: 1,
    paddingTop: 11,
    borderRadius: 6,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  igLabel: {
    color: "white",
    fontWeight: "bold",
  },

  textLight: {
    color: "#000",
  },

  textDark: {
    color: "#fff",
  }
});
