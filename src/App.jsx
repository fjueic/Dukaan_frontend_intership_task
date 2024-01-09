import "./App.css";
import Menu from "./components/Menu";
import DashBoard from "./components/DashBoard";
function App() {
    return (
        <>
            <div
                className="flex flex-row h-screen w-screen
            "
            >
                {/* menu */}
                <Menu />
                <DashBoard />
            </div>
        </>
    );
}

export default App;
