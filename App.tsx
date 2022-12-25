import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalListTile from "./components/GoalListTile";

type GoalModel = {
  id: string;
  value: string;
};

export default function App() {
  const [listOfGoals, setListofGoals] = useState<GoalModel[]>([]);

  const onAddGoalPressed = (enteredGoal: string) => {
    if (enteredGoal.length != 0) {
      setListofGoals((oldGoals) => [
        ...oldGoals,
        { id: Math.random().toString(), value: enteredGoal },
      ]);
    }
  };

  const onGoalRemove = (id: string) => {
    setListofGoals((oldGoalList) => {
      return oldGoalList.filter((goal) => goal.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onGoalAdd={onAddGoalPressed} />
      <View style={styles.goalsView}>
        <FlatList
          data={listOfGoals}
          renderItem={(item) => (
            <GoalListTile
              text={item.item.value}
              id={item.item.id}
              onGoalRemove={onGoalRemove}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    marginBottom: 100,
  },
  goalsView: {
    marginTop: 16,
  },
});
