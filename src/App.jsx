import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import btnClasses from "./components/Button.module.css";
import ImageCard from "./components/ImageCard";
import { fetchImageUrl } from "./api/imageApi";

import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [imageURL, setImageURL] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");

    try {
      const data = await fetchImageUrl();
      setImageURL(data.url);
      setTimestamp(data.timestamp);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="main">
      {error && <p className="error">Something went wrong: {error}</p>}
      {loading ? (
        <CircularProgress aria-label="Loading…" sx={{ m: 2 }} />
      ) : (
        imageURL && (
          <ImageCard
            src={imageURL}
            label={imageURL.split("/")[4]}
            timestamp={timestamp}
          />
        )
      )}
      <Button
        customClassName={btnClasses.button}
        caption={loading ? "Loading..." : "Fetch Random Image"}
        onClick={handleClick}
        disabled={loading}
      />
    </main>
  );
}

export default App;
