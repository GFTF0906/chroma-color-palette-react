/* eslint-disable indent */
/* eslint-disable consistent-return */

import axios from 'axios';
import { ColorPalette } from '../types/ColorPaletteType';

const checkRegex = (str: string, regex: RegExp) => regex.test(str);

const setColorType = (str: string) => {
  const hexRegex = /(^#?(\d|[a-f]|[A-F]){3,6}$)/gm;
  const isHex = checkRegex(str, hexRegex);

  if (!isHex) return;

  return `hex=${str.replace('#', '')}`;
};

// eslint-disable-next-line consistent-return
async function fetchData(
  color: string,
  schemes: string | string[],
  randomIndex?: number
) {
  try {
    if (!color || !schemes) {
      console.error('Please specify a hex/rgb/hsl color.');
      return;
    }

    const colorType = setColorType(color);
    if (!colorType) return;

    const baseUrl = 'https://www.thecolorapi.com/scheme?';
    const params = `${colorType}&mode=${
      randomIndex ? schemes.at(randomIndex) : schemes
    }&count=6`;

    const url = `${baseUrl}${params}`;

    const data: ColorPalette = await axios.get(url).then((resp) => resp.data);

    const dataObj: ColorPalette = {
      colors: data?.colors,
      mode: data?.mode,
      seed: data?.seed,
    };

    return { dataObj };
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
