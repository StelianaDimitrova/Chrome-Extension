export default function Button({
  customClassName,
  onClick,
  caption,
  disabled,
}) {
  return (
    <button
      className={customClassName}
      onClick={onClick}
      aria-label={caption}
      disabled={disabled}
    >
      {caption}
    </button>
  );
}
