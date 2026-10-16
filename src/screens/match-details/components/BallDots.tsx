import { Text, View } from "react-native";

export type BallOutcome = "0" | "1" | "2" | "3" | "4" | "6" | "W" | "nb" | "wd";

const BALL_STYLES: Record<BallOutcome, { bg: string; text: string }> = {
  "0": { bg: "bg-gray-200", text: "text-slate-600" },
  "1": { bg: "bg-gray-200", text: "text-slate-600" },
  "2": { bg: "bg-gray-200", text: "text-slate-600" },
  "3": { bg: "bg-gray-200", text: "text-slate-600" },
  "4": { bg: "bg-yellow-500", text: "text-slate-900" },
  "6": { bg: "bg-green-500", text: "text-white" },
  W: { bg: "bg-red-600", text: "text-white" },
  nb: { bg: "bg-orange-400", text: "text-white" },
  wd: { bg: "bg-orange-400", text: "text-white" },
};

export function BallDots({ balls }: { balls: BallOutcome[] }) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {balls.map((ball, index) => {
        const style = BALL_STYLES[ball];
        return (
          <View
            key={`${ball}-${index}`}
            className={`h-8 w-8 items-center justify-center rounded-full ${style.bg}`}
          >
            <Text className={`text-xs font-bold ${style.text}`}>{ball}</Text>
          </View>
        );
      })}
    </View>
  );
}
