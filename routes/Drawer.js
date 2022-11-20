import { createDrawerNavigator } from "react-navigation-drawer"
import { NavigationContainer } from "@react-navigation/native"

// stacks
import HomeStack from "./HomeStack"
import AboutStack from "./AboutStack"

const { Navigator, Screen } = createDrawerNavigator()

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName='Home'>
    <Screen name='Home' component={HomeStack} />
    <Screen name='About' component={AboutStack} />
  </Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
)

export default AppNavigator
