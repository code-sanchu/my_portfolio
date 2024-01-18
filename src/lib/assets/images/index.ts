import art from "^^assets/images/art.webp?w=600&format=avif;webp;jpg&as=picture&imagetools";


import dot_blue from '^^assets/images/dot-blue.png?w=10&format=avif;webp;jpg&as=picture&imagetools';
import dot_green from '^^assets/images/dot-green.png?w=10&format=avif;webp;jpg&as=picture&imagetools';
import dot_orange from '^^assets/images/dot-orange.png?w=10&format=avif;webp;jpg&as=picture&imagetools';

import { project } from './project';

export const image = {
   project,
   dot: {
      blue: dot_blue, green: dot_green, orange: dot_orange,
   }, art: { 1: art }
};
