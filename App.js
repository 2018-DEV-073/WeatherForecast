import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ForecastScreen from './screens/ForecastScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: "Welcome" }} />
        <Stack.Screen
          name='Forecast'
          component={ForecastScreen}
          options={{ title: "This your weather" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;