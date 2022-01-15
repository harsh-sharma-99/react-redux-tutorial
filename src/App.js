import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/cakeContainer/index";
import HookCakeContainer from "./components/hookCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;