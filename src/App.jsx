import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-semibold mb-4">Quiz App</h1>

        <Routes />
      </div>
    </>
  );
}

export default App;
