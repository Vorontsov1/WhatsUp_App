import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    fontFamily: "Mulish-Bold",
    color: "black",
  },
  time: {
    fontFamily: "Mulish-ExtraBold",
    fontSize: 13,
    alignSelf: "flex-end",
    color: "white",
  },
    cloudIcon: {
        position: "absolute",
        left: -8,
        bottom: -6,
  },
});