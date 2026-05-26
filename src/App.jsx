import "./App.css";
import Button from "./components/Button";
import btnClasses from "./components/Button.module.css";

function App() {
  return (
    <section className="section">
      <Button customClassName={btnClasses.button} caption="Fetch Random Image" />
    </section>
  );
}

export default App;
