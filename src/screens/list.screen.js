import React from "react";
import styled from "styled-components";
import { Spacer } from "../utils/spacer.utils";
import { View, Text, FlatList } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { List } from "react-native-paper";
import { deleteItemList } from "../redux/actions/list.action";

export const ListScreen = () => {
  const dispatch = useDispatch();
  const listRedux = useSelector((state) => state.listReducer);
  const { loading, error, itemList } = listRedux;

  const handleClick = (key) => {
    dispatch(deleteItemList(key));
  };

  return (
    <View>
      <FlatList_
        data={itemList}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={(data) => {
          return (
            <List.Item
              title={data.item.name}
              right={(props) => (
                <Icon
                  name="delete"
                  size={24}
                  onPress={() => handleClick(data.item.key)}
                />
              )}
            />
          );
        }}
      />
    </View>
  );
};

const FlatList_ = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
`;
