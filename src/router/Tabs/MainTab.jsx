import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TranslationComponent from "../../pages/Translation/TranslationComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../../pages/Home";
import MovieStack from "../Stacks/HomeStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Inicio"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Peliculas"
      component={MovieStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="film" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Traduccion"
      component={TranslationComponent}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="language" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
