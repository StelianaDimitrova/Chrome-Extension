export async function fetchImageUrl() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!response.ok) {
    throw new Error("Fetching images failed");
  }

  const data = await response.json();
  const timestamp = new Date().toLocaleString();

  return { url: data.message, timestamp };
}
