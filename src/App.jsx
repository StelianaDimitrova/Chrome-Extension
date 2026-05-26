import "./App.css";
import Button from "./components/Button";
import btnClasses from "./components/Button.module.css";
import ImageCard from "./components/ImageCard";

function App() {
  const timestamp = new Date().toLocaleString();

  return (
    <main className="main">
      <ImageCard src="/favicon.svg" label="VITE ICON" timestamp={timestamp} />
      <Button
        customClassName={btnClasses.button}
        caption="Fetch Random Image"
      />
    </main>
  );
}

export default App;
