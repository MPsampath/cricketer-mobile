import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export type MatchSummary = {
  id: string;
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
};

export function MatchListItem({
  match,
  onPress,
}: {
  match: MatchSummary;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="mb-3 flex-row items-center rounded-2xl bg-white p-4 shadow-sm"
    >
      <View className="flex-1">
        <Text className="text-base font-bold text-slate-900">
          {match.teamA} <Text className="text-slate-400">vs</Text> {match.teamB}
        </Text>
        <Text className="mt-1 text-xs text-slate-500">{match.date}</Text>
        <Text className="mt-0.5 text-xs text-slate-500">{match.venue}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
}
