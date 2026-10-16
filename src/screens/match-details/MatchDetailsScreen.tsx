import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BallDots, type BallOutcome } from "./components/BallDots";
import {
  BatterStatsTable,
  BowlerStatsRow,
  type BatterStat,
  type BowlerStat,
} from "./components/BatterStatsTable";

type DetailsTab = "scorecard" | "commentary";

const BATTERS: BatterStat[] = [
  { name: "R. Sharma", runs: 68, balls: 42, isOnStrike: true },
  { name: "S. Iyer", runs: 24, balls: 19 },
];

const BOWLER: BowlerStat = {
  name: "J. Bumrah",
  overs: "3.2",
  maidens: 0,
  runs: 22,
  wickets: 1,
};

const RECENT_BALLS: BallOutcome[] = ["1", "4", "W", "0", "6", "nb"];

export default function MatchDetailsScreen() {
  const [activeTab, setActiveTab] = useState<DetailsTab>("scorecard");

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mx-5 mt-4 rounded-2xl bg-slate-900 p-5 shadow-md">
          <View className="flex-row items-center justify-between">
            <View className="items-center">
              <Text className="text-3xl">🏏</Text>
              <Text className="mt-1 text-sm font-semibold text-white">
                Mumbai Titans
              </Text>
            </View>
            <View className="items-center px-2">
              <Text className="text-2xl font-extrabold text-white">
                186/4
              </Text>
              <Text className="mt-1 text-xs text-slate-300">14.3 overs</Text>
            </View>
            <View className="items-center">
              <Text className="text-3xl">🏏</Text>
              <Text className="mt-1 text-sm font-semibold text-white">
                Delhi Chargers
              </Text>
            </View>
          </View>
          <View className="mt-4 items-center rounded-lg bg-slate-800 py-2">
            <Text className="text-xs font-medium text-slate-300">
              Mumbai Titans won the toss and chose to bat
            </Text>
          </View>
        </View>

        <View className="mx-5 mt-5 flex-row rounded-xl bg-gray-200 p-1">
          {(["scorecard", "commentary"] as DetailsTab[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              activeOpacity={0.85}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center rounded-lg py-2 ${
                activeTab === tab ? "bg-white shadow-sm" : ""
              }`}
            >
              <Text
                className={`text-sm font-semibold capitalize ${
                  activeTab === tab ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === "scorecard" ? (
          <View className="mx-5 mt-5">
            <Text className="mb-2 text-sm font-bold text-slate-900">
              Batters
            </Text>
            <BatterStatsTable batters={BATTERS} />

            <Text className="mb-2 mt-5 text-sm font-bold text-slate-900">
              Current Bowler
            </Text>
            <BowlerStatsRow bowler={BOWLER} />

            <Text className="mb-2 mt-5 text-sm font-bold text-slate-900">
              This Over
            </Text>
            <BallDots balls={RECENT_BALLS} />
          </View>
        ) : (
          <View className="mx-5 mt-5 rounded-xl bg-white p-4 shadow-sm">
            <Text className="text-sm text-slate-500">
              14.3 — R. Sharma hits it through covers for FOUR!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
