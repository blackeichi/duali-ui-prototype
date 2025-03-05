export const Slider = ({ placeholder, width }) => {
  return (
    <div
      className="flex flex-col gap-1"
      style={{
        width,
        fontSize: "13px",
      }}
    >
      <span>{placeholder}</span>
      <input
        type="range"
        id={placeholder}
        min="0"
        max="10"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};
