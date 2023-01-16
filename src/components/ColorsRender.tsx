import type { ColorPalette } from '../types/ColorPaletteType';
import ColorCard from './ColorCard';

function ColorsRender({ colors, mode, seed }: ColorPalette) {
  return (
    <section className="flex items-center justify-center gap-8 flex-col">
      <section className="flex">
        <div className="text-center">
          <h2 className="capitalize text-xl font-bold">{seed?.name?.value}</h2>
          <h2 className="capitalize text-xl font-bold">{mode}</h2>
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 2xl:flex 2xl:flex-row">
        {colors.map((color) => (
          <ColorCard key={color?.hex?.clean} color={color} />
        ))}
      </section>
    </section>
  );
}

export default ColorsRender;
