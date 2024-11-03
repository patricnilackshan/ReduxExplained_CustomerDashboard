import CustomerAdd from "./components/CustomerAdd";
import CustomerView from "./components/CustomerView";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#b1b1b1",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <h1>Redux Customer Example</h1>
      </div>
      <div
        style={{
          backgroundColor: "lightblue",
          display: "flex",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span
          style={{
            backgroundColor: "#e1e1e1",
            padding: "1%",
            border: "2px black solid",
            borderRadius: "8",
          }}
        >
          <CustomerAdd />
        </span>
        <CustomerView />
      </div>
    </div>
  );
}

export default App;
