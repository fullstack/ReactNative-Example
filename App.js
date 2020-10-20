import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import DavidScreen from "./src/screens/DavidScreen";
import DRScreen from "./src/screens/DRScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import IncrementScreen from "./src/screens/IncrementScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorConfigScreen from "./src/screens/ColorConfigScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    David: DavidScreen,
    DR: DRScreen,
    List: ListScreen,
    Images: ImageScreen,
    Incrementor: IncrementScreen,
    Color: ColorScreen,
    ColorConfig: ColorConfigScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
