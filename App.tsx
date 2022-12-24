import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type GoalModel = {
  id: string;
  value: string;
};

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [listOfGoals, setListofGoals] = useState<GoalModel[]>([]);

  const onEnteredGoal = (goal: string) => {
    setEnteredGoal(goal);
  };

  const onAddGoalPressed = () => {
    if (enteredGoal.length != 0) {
      setListofGoals((oldGoals) => [
        ...oldGoals,
        { id: Math.random().toString(), value: enteredGoal },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalAddView}>
        <TextInput style={styles.textInput} onChangeText={onEnteredGoal} />
        <View style={styles.addButton}>
          <Button title="Add Goal" color="#841584" onPress={onAddGoalPressed} />
        </View>
      </View>
      <View style={styles.goalsView}>
        <FlatList
          data={listOfGoals}
          renderItem={(item) => (
            <View style={styles.goalItem}>
              <Text>{item.item.value}</Text>
            </View>
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
    backgroundColor: "#fff",
    marginBottom: 100,
  },
  goalAddView: {
    marginTop: 16,
    flexDirection: "row",
    alignContent: "space-between",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  addButton: {
    marginLeft: 8,
  },
  goalsView: {
    marginTop: 16,
  },
  goalItem: {
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8,
  },
});
