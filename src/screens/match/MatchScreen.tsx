import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  MatchListItem,
  type MatchSummary,
} from "./components/MatchListItem";

const MATCHES: MatchSummary[] = [
  {
    id: "1",
    teamA: "Mumbai Titans",
    teamB: "Delhi Chargers",
    date: "Oct 8, 2026 · 2:00 PM",
    venue: "Wankhede Stadium, Mumbai",
  },
  {
    id: "2",
    teamA: "Chennai Kings",
    teamB: "Bangalore Royals",
    date: "Oct 9, 2026 · 7:30 PM",
    venue: "Chepauk Stadium, Chennai",
  },
  {
    id: "3",
    teamA: "Kolkata Riders",
    teamB: "Punjab Strikers",
    date: "Oct 11, 2026 · 3:30 PM",
    venue: "Eden Gardens, Kolkata",
  },
  {
    id: "4",
    teamA: "Rajasthan Royals",
    teamB: "Hyderabad Sunrisers",
    date: "Oct 12, 2026 · 7:00 PM",
    venue: "Sawai Mansingh Stadium, Jaipur",
  },
];

export default function MatchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filteredMatches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return MATCHES;
    return MATCHES.filter(
      (match) =>
        match.teamA.toLowerCase().includes(normalized) ||
        match.teamB.toLowerCase().includes(normalized) ||
        match.venue.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-slate-900" edges={["top"]}>
      <View className="px-5 pt-4">
        <Text className="text-xl font-bold text-slate-900">Match Center</Text>

        <TouchableOpacity
          activeOpacity={0.85}
          className="mt-4 flex-row items-center justify-center rounded-2xl bg-yellow-500 py-3.5 shadow-sm"
        >
          <Ionicons name="add" size={20} color="#1e293b" />
          <Text className="ml-1 text-base font-bold text-slate-900">
            Create Match
          </Text>
        </TouchableOpacity>

        <View className="mt-4 flex-row items-center rounded-xl bg-white px-3 py-2.5 shadow-sm">
          <Ionicons name="search" size={18} color="#94a3b8" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search by team or venue"
            placeholderTextColor="#94a3b8"
            className="ml-2 flex-1 text-sm text-slate-900"
          />
        </View>
      </View>

      <FlatList
        data={filteredMatches}
        keyExtractor={(match) => match.id}
        renderItem={({ item }) => (
          <MatchListItem
            match={item}
            onPress={() => router.push(`/matches/${item.id}`)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="mt-10 text-center text-sm text-slate-400">
            No matches found.
          </Text>
        }
      />
    </SafeAreaView>
  );
}
