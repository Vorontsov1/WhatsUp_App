import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,

    height: 70,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "white",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontFamily: "Mulish-Bold",
    fontSize: 18,
    color: "white",
  },
  subTitle: {
    color: "white",
    fontFamily: "Mulish-Medium",
    fontSize: 16,
  },
});
