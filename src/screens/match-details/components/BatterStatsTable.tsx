import { Text, View } from "react-native";

export type BatterStat = {
  name: string;
  runs: number;
  balls: number;
  isOnStrike?: boolean;
};

export type BowlerStat = {
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
};

export function BatterStatsTable({ batters }: { batters: BatterStat[] }) {
  return (
    <View className="overflow-hidden rounded-xl bg-white  shadow-sm">
      <View className="flex-row bg-gray-100 px-4 py-2">
        <Text className="flex-1 text-xs font-semibold text-slate-500">
          Batter
        </Text>
        <Text className="w-14 text-right text-xs font-semibold text-slate-500">
          R
        </Text>
        <Text className="w-14 text-right text-xs font-semibold text-slate-500">
          B
        </Text>
      </View>
      {batters.map((batter) => (
        <View
          key={batter.name}
          className="flex-row items-center border-t border-gray-100 px-4 py-3"
        >
          <Text className="flex-1 text-sm font-medium text-slate-900">
            {batter.name}
            {batter.isOnStrike ? " *" : ""}
          </Text>
          <Text className="w-14 text-right text-sm font-bold text-slate-900">
            {batter.runs}
          </Text>
          <Text className="w-14 text-right text-sm text-slate-500">
            {batter.balls}
          </Text>
        </View>
      ))}
    </View>
  );
}

export function BowlerStatsRow({ bowler }: { bowler: BowlerStat }) {
  return (
    <View className="flex-row items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
      <Text className="text-sm font-medium text-slate-900">
        {bowler.name}
      </Text>
      <Text className="text-sm text-slate-500">
        {bowler.overs} ov · {bowler.maidens} m · {bowler.runs} r ·{" "}
        <Text className="font-bold text-red-600">{bowler.wickets}w</Text>
      </Text>
    </View>
  );
}
