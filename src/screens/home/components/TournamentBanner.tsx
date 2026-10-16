import { Text, TouchableOpacity, View } from "react-native";

export type Tournament = {
  id: string;
  name: string;
  dateRange: string;
  teamsCount: number;
  color: string;
};

export function TournamentBanner({ tournament }: { tournament: Tournament }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="mb-3 flex-row items-center overflow-hidden rounded-2xl bg-slate-900  shadow-sm"
    >
      <View className={`h-full w-2 self-stretch ${tournament.color}`} />
      <View className="flex-1 px-4 py-4">
        <Text className="text-base font-bold text-slate-300">
          {tournament.name}
        </Text>
        <Text className="mt-1 text-xs text-slate-300">
          {tournament.dateRange} · {tournament.teamsCount} teams
        </Text>
      </View>
      <View className="mr-4 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1">
        <Text className="text-xs font-semibold text-slate-700">Active</Text>
      </View>
    </TouchableOpacity>
  );
}
