import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

type GoalInputProps = {
  onGoalAdd: (enteredGoal: string) => void;
};

function GoalInput(props: GoalInputProps) {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const onEnteredGoal = (goal: string) => {
    setEnteredGoal(goal);
  };

  const onAddGoalHandler = () => {
    props.onGoalAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.goalAddView}>
      <TextInput
        style={styles.textInput}
        onChangeText={onEnteredGoal}
        placeholder="Enter your goal here..."
        value={enteredGoal}
      />
      <View style={styles.addButton}>
        <Button title="Add Goal" color="#841584" onPress={onAddGoalHandler} />
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
