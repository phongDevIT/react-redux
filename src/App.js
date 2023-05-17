import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./ius/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlide";
function App() {
    // const globalOptions = useSelector((state) => state.global);
    // console.log("globalOptions: ", globalOptions);
    // const dispatch = useDispatch();
    // const handleToggleDarkMode = () => {
    //     dispatch(toggleDarkMode(true));
    // };
    return (
        <div>
            {/* <Counter count={count} setCounter={setCounter}></Counter> */}
            {/* <Counter></Counter> */}
            <Card></Card>
            {/* <button
                className="p-5 border border-blue-400 rounded-lg m-5"
                onClick={handleToggleDarkMode}
            >
                dark mode
            </button> */}
        </div>
    );
}

export default App;
