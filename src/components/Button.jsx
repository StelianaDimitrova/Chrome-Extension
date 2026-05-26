export default function Button({ customClassName, onClick, caption }) {
  return (
    <button className={customClassName} onClick={onClick} aria-label={caption}>
      {caption}
    </button>
  );
}
