import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import MovieList from "./pages/Movies/MovieList";
import TranslationComponent from "./pages/Translation/TranslationComponent";
import HomeScreen from "./pages/Home";

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Inicio"
//       component={HomeScreen}
//       options={{ headerShown: false }}
//     />
//     {/* <Stack.Screen name="Peliculas" component={MovieList} /> */}
//     {/* <Stack.Screen name="Traduccion" component={TranslationComponent} /> */}
//   </Stack.Navigator>
// );

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
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default Main;
