import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '@/screens/AboutScreen';
import { ApplyScreen } from '@/screens/ApplyScreen';
import { ContactScreen } from '@/screens/ContactScreen';
import { DonateScreen } from '@/screens/DonateScreen';
import { GetHelpScreen } from '@/screens/GetHelpScreen';
import { GlobalOperationsScreen } from '@/screens/GlobalOperationsScreen';
import { HomeScreen } from '@/screens/HomeScreen';
import { NewsScreen } from '@/screens/NewsScreen';
import { colors } from '@/theme/colors';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  WhatWeDo: undefined;
  GetHelp: undefined;
  Apply: undefined;
  GlobalOperations: undefined;
  Donate: undefined;
  News: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: '#FFFFFF',
    border: colors.border,
    text: colors.text,
    primary: colors.primary,
  },
};

export function AppNavigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: colors.text,
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Askunai Ha'ir" }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
        <Stack.Screen name="WhatWeDo" component={AboutScreen} options={{ title: 'What We Do' }} />
        <Stack.Screen name="GetHelp" component={GetHelpScreen} options={{ title: 'Get Help' }} />
        <Stack.Screen name="Apply" component={ApplyScreen} options={{ title: 'Volunteer Application' }} />
        <Stack.Screen name="GlobalOperations" component={GlobalOperationsScreen} options={{ title: 'Global Operations' }} />
        <Stack.Screen name="Donate" component={DonateScreen} options={{ title: 'Donate' }} />
        <Stack.Screen name="News" component={NewsScreen} options={{ title: 'News' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
