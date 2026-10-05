import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../constants/theme';
import CharactersScreen from '../screens/CharactersScreen';
import HomeScreen from '../screens/HomeScreen';
import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{ title: 'Información del estudiante' }}
        />
        <Stack.Screen
          name={ROUTES.CHARACTERS}
          component={CharactersScreen}
          options={{ title: 'Personajes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}