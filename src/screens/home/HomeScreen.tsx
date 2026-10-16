import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LiveMatchCard, type LiveMatch } from "./components/LiveMatchCard";
import {
  TournamentBanner,
  type Tournament,
} from "./components/TournamentBanner";

const LIVE_MATCHES: LiveMatch[] = [
  {
    id: "m1",
    teamAName: "Mumbai Titans",
    teamAFlag: "🏏",
    teamAScore: "186/4",
    teamBName: "Delhi Chargers",
    teamBFlag: "🏏",
    teamBScore: "92/2",
    overs: "14.3",
  },
  {
    id: "m2",
    teamAName: "Chennai Kings",
    teamAFlag: "🏏",
    teamAScore: "210/6",
    teamBName: "Bangalore Royals",
    teamBFlag: "🏏",
    teamBScore: "64/1",
    overs: "8.2",
  },
];

const TOURNAMENTS: Tournament[] = [
  {
    id: "t1",
    name: "Premier Cricket League 2026",
    dateRange: "Oct 1 – Nov 15",
    teamsCount: 12,
    color: "bg-yellow-500",
  },
  {
    id: "t2",
    name: "City Corporate Cup",
    dateRange: "Oct 10 – Oct 28",
    teamsCount: 8,
    color: "bg-red-600",
  },
  {
    id: "t3",
    name: "Weekend Warriors League",
    dateRange: "Oct 18 – Dec 6",
    teamsCount: 16,
    color: "bg-green-900",
  },
];

export default function HomeScreen() {

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-slate-900" edges={["top"]}>
      <View className="flex-row items-center justify-between bg-slate-900 px-5 py-4">
        <View className="flex-row items-center">
          <View className="h-9 w-9 items-center justify-center rounded-lg bg-yellow-500">
            <Text className="text-base font-extrabold text-slate-900">C</Text>
          </View>
          <Text className="ml-2 text-lg font-bold text-white">Cricketer</Text>
        </View>
        <View className="h-9 w-9 items-center justify-center rounded-full bg-slate-700">
          <Text className="text-sm font-semibold text-white">PS</Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-5 px-5">
          <Text className="text-lg font-bold text-slate-900">
            Live Matches
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3 pl-5"
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {LIVE_MATCHES.map((match) => (
            <LiveMatchCard key={match.id} match={match} />
          ))}
        </ScrollView>

        <View className="mt-7 px-5">
          <Text className="text-lg font-bold text-slate-900">
            Active Tournaments
          </Text>
          <View className="mt-3">
            {TOURNAMENTS.map((tournament) => (
              <TournamentBanner key={tournament.id} tournament={tournament} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
