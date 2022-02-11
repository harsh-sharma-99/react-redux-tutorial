import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/cakeContainer/index";
import HookCakeContainer from "./components/hookCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import store from "./redux/store";
import NewCakeContainer from "./components/newCakeConatiner/index";
import ItemContainer from "./components/itemContainer/index";
import UserInfo from "./components/userContainer.js/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserInfo />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
