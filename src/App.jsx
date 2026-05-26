import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import btnClasses from "./components/Button.module.css";
import ImageCard from "./components/ImageCard";
import { fetchImageUrl } from "./api/imageApi";

function App() {
  const [imageURL, setImageURL] = useState("");
  const [timestamp, setTimestamp] = useState("");

  async function handleClick() {
    try {
      const data = await fetchImageUrl();
      setImageURL(data.url);
      setTimestamp(data.timestamp);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <main className="main">
      {imageURL && <ImageCard
        src={imageURL}
        label={imageURL.split("/")[4]}
        timestamp={timestamp}
      />}
      <Button
        customClassName={btnClasses.button}
        caption="Fetch Random Image"
        onClick={handleClick}
      />
    </main>
  );
}

export default App;
