import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

export default function TabLayout() {
  // Grab the current theme from NativeWind
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hides the default top header so you can build custom Tailwind headers per screen
        
        // Active color: Yellow in dark mode, Navy Blue in light mode
        tabBarActiveTintColor: isDark ? "#fbbf24" : "#1e293b", 
        // Inactive color: Darker gray in dark mode, lighter gray in light mode
        tabBarInactiveTintColor: isDark ? "#64748b" : "#94a3b8",
        
        tabBarStyle: {
          backgroundColor: isDark ? "#0f172a" : "#ffffff", // Navy Blue or White background
          borderTopColor: isDark ? "#1e293b" : "#e5e7eb",
          height: 64,
          paddingBottom: 10,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="(home)" // Maps to app/(tabs)/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="matches" // Maps to app/(tabs)/matches.tsx
        options={{
          title: 'Match',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'baseball' : 'baseball-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tournaments" // Maps to app/(tabs)/tournaments.tsx
        options={{
          title: 'Tournament',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'trophy' : 'trophy-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teams" // Maps to app/(tabs)/teams.tsx
        options={{
          title: 'Teams',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people' : 'people-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile" // Maps to app/(tabs)/profile.tsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}