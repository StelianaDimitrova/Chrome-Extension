import "./ImageCard.css";

export default function ImageCard({ src, label, timestamp }) {
  return (
    <section className="section">
      <img src={src} alt={label} className="card" />
      <p>{timestamp}</p>
    </section>
  );
}
