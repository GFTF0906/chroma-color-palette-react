type ColorCardProps = {
  color: {
    hex: { value: string };
    name: { value: string };
    hsl: { value: string };
    rgb: { value: string };
  };
};

function ColorCard({ color }: ColorCardProps) {
  const { hex, name, hsl, rgb } = color;

  return (
    <div className="flex items-center justify-start flex-col p-6 rounded h-64 w-56 bg-neutral-800">
      <div
        className="w-20 h-20 mb-4 rounded"
        style={{ backgroundColor: hex.value }}
      />
      <h3 className="pb-1 text-md font-bold">{name.value}</h3>

      <h4 className="cursor-pointer">{hex.value}</h4>
      <h4 className="cursor-pointer">{hsl.value}</h4>
      <h4 className="cursor-pointer">{rgb.value}</h4>
    </div>
  );
}

export default ColorCard;
