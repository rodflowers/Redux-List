import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeArea } from "../utils/safe-area.utils";
import { TextInput, Button } from "react-native-paper";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../redux/actions/list.action";
import { Spacer } from "../utils/spacer.utils";

export const HomeScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const listRedux = useSelector((state) => state.listReducer);
  const { loading, error, itemList } = listRedux;

  const handleClick = () => {
    dispatch(addToList(text));
    setText("");
  };

  return (
    <SafeArea>
      <InputView>
        <TextInput
          mode="outlined"
          label="Add to list"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </InputView>
      <ButtonView>
        <Button mode="contained" onPress={() => handleClick()}>
          Agregar Item
        </Button>
        <Spacer position="bottom" size="large" />
        <Button mode="text" onPress={() => navigation.navigate("List")}>
          Ir a lista
        </Button>
      </ButtonView>
    </SafeArea>
  );
};

const InputView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ButtonView = styled(View)`
  padding: ${(props) => props.theme.space[5]};
`;
