import { DrawerNavigationProp } from "@react-navigation/drawer";

export type RootDrawerParamList = {
  Home: undefined;
  Lists: undefined;
};

export type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  "Home"
>;

export type ListsScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  "Lists"
>;
