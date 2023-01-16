import ButtonCopy from './ButtonCopy';

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
    <div className="flex items-center justify-start flex-col p-6 rounded h-64 w-56 transition-all bg-zinc-800 hover:outline-zinc-700 hover:outline hover:bg-zinc-900">
      <div
        className="w-20 h-20 mb-4 rounded"
        style={{ backgroundColor: hex.value }}
      />
      <h3 className="pb-1 text-md font-bold">{name.value}</h3>

      <ButtonCopy obj={hex} textValue={hex.value} />
      <ButtonCopy obj={rgb} textValue={rgb.value} />
      <ButtonCopy obj={hsl} textValue={hsl.value} />
    </div>
  );
}

export default ColorCard;
