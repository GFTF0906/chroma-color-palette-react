import type { ColorPalette } from '../types/ColorPaletteType';
import ColorCard from './ColorCard';

function ColorsRender({ colors, mode, seed }: ColorPalette) {
  return (
    <section className="flex items-center justify-center gap-8 flex-col">
      <h2 className="capitalize text-xl font-bold">
        {seed.name.value} | {mode}
      </h2>

      <section className="flex items-center justify-center gap-4">
        {colors.map((color) => (
          <ColorCard key={color.hex.clean} color={color} />
        ))}
      </section>
    </section>
  );
}

export default ColorsRender;
