import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={ {
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "violet",
          drawerActiveTintColor: "purple",
          drawerStyle: { backgroundColor: "#f1f1f1" }
        } }
      >
        <Drawer.Screen
          name="Welcome"
          component={ WelcomeScreen }
          options={ {
            drawerLabel: "Welcome Screen",
            drawerIcon: ( { color, size } ) => <Ionicons name="home" color={ color } size={size} />
          } }
        />
        <Drawer.Screen name="User" component={ UserScreen } options={{drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} /> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
