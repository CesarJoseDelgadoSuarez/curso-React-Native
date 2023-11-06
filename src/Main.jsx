import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import MovieList from "./pages/Movies/MovieList";
import TranslationComponent from "./pages/Translation/TranslationComponent";
import HomeScreen from "./pages/Home";
import { StyleSheet, View, StatusBar } from "react-native";


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
      component={MovieList}
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
    {/* Agrega más pestañas según sea necesario */}
  </Tab.Navigator>
);

// <MovieList />
const Main = (props) => (
  <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor="transparent" />
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </View>
);

export default Main;
