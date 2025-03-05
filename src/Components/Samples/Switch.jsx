export const Switch = ({ placeholder }) => {
  return (
    <div
      className="flex items-center gap-5"
      style={{
        fontSize: "13px",
      }}
    >
      <span>{placeholder}</span>
      <img src="/Switch.png" className="w-12" />
    </div>
  );
};
