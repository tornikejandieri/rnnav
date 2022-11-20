import { StyleSheet, Text, View, Button } from "react-native"

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
