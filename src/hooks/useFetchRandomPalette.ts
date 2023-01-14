import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { ColorPalette } from '../types/ColorPaletteType';

// eslint-disable-next-line consistent-return
function useFetchRandomPalette() {
  const possibleModes = [
    'monochrome',
    'monochrome-dark',
    'monochrome-light',
    'analogic',
    'complement',
    'analogic-complement',
    'triad',
    'quad',
  ];

  const randomHex = `${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

  const randomIndex = Math.floor(Math.random() * possibleModes.length);

  try {
    const { data, isLoading, isError } = useQuery(
      ['Fetch random color palette'],
      () =>
        axios
          .get(
            `https://www.thecolorapi.com/scheme?hex=${randomHex.toUpperCase()}&mode=${
              possibleModes[randomIndex]
            }&count=6`
          )
          .then((resp) => resp.data),
      { enabled: false }
    );

    const randomPaletteObj: ColorPalette = {
      colors: data?.colors,
      mode: data?.mode,
      seed: data?.seed,
    };

    return { randomPaletteObj, isLoading, isError };
  } catch (error) {
    console.error(error);
  }
}

export default useFetchRandomPalette;
