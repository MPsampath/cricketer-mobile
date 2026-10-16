import "@/global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme,StatusBar } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <StatusBar animated={true} barStyle={colorScheme === 'dark' ? "light-content" : "dark-content"} />
      <AnimatedSplashOverlay />
      
      <Stack>

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen 
          name="matches/[id]" 
          options={{ 
            headerShown: false, 
            presentation: 'card',
            title: 'Match Details',
            
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}