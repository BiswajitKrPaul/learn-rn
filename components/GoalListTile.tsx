import { View, Text, StyleSheet, Pressable } from "react-native";

type GoalListTileProps = {
  text: string;
  id: string;
  onGoalRemove: (id: string) => void;
};

function GoalListTile(props: GoalListTileProps) {
  return (
    <Pressable onPress={() => props.onGoalRemove(props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalListTile;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#841584",
  },
  goalText: {
    color: "white",
    fontWeight: "500",
  },
});
