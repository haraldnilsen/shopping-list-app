import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MMKVInstance } from "react-native-mmkv-storage";

export type RootDrawerParamList = {
  Home: { localStorage: MMKVInstance };
  Lists: { localStorage: MMKVInstance };
};

export type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  "Home"
>;

export type ListsScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  "Lists"
>;
