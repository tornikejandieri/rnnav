import { StyleSheet, Text, View, Button } from "react-native"

const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Text>Review Details screen</Text>
      <Button title='back to home' onPress={pressHandler} />
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
