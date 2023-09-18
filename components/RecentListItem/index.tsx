import React, { useEffect } from "react";

import { RecentListItemContainer } from "./styles";
import { Text } from "react-native";

interface RecentListProps {
  listKey?: string;
  earlierShoppingList?: string[];
}

const RecentListItem: React.FC<RecentListProps> = ({
  listKey,
  earlierShoppingList,
}) => {
  useEffect(() => {}, []);

  return (
    <RecentListItemContainer>
      <Text>Test</Text>
    </RecentListItemContainer>
  );
};

export default RecentListItem;
