import { StyleSheet, Text, View, Button } from "react-native"

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails")
  }

  return (
    <View style={styles.container}>
      <Text>home screen</Text>
      <Button title='go to review dets' onPress={pressHandler} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
