import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
    height: 70,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontFamily: "Mulish-Bold",
    fontSize: 18,
    color: "white",
  },
  content: {
    flex: 1,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: "white",
  },
  subTitle: {
    color: "white",
    fontFamily: "Mulish-Medium",
    fontSize: 16,
  },
});
