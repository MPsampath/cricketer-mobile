import { Text, View } from "react-native";

export type LiveMatch = {
  id: string;
  teamAName: string;
  teamAFlag: string;
  teamAScore: string;
  teamBName: string;
  teamBFlag: string;
  teamBScore: string;
  overs: string;
};

export function LiveMatchCard({ match }: { match: LiveMatch }) {
  return (
    <View className="mr-4 w-64 rounded-2xl bg-slate-900 dark:bg-slate-800 p-4 shadow-md">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center rounded-full bg-red-600 px-2 py-0.5">
          <View className="mr-1 h-1.5 w-1.5 rounded-full bg-white" />
          <Text className="text-[10px] font-bold tracking-wide text-white">
            LIVE
          </Text>
        </View>
        <Text className="text-xs font-medium text-slate-300">
          {match.overs} ov
        </Text>
      </View>

      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-2xl">{match.teamAFlag}</Text>
        <Text className="flex-1 px-2 text-sm font-semibold text-white">
          {match.teamAName}
        </Text>
        <Text className="text-base font-bold text-white">
          {match.teamAScore}
        </Text>
      </View>

      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-2xl">{match.teamBFlag}</Text>
        <Text className="flex-1 px-2 text-sm font-semibold text-white">
          {match.teamBName}
        </Text>
        <Text className="text-base font-bold text-white">
          {match.teamBScore}
        </Text>
      </View>
    </View>
  );
}
