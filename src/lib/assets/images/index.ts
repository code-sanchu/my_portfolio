import art from "^^assets/images/art.png?w=1024&format=avif;webp;jpg&as=picture&imagetools";
import art_2 from "^^assets/images/art-2.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools";
import art_3 from "^^assets/images/art-3.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools";
import art_7 from "^^assets/images/art-6.webp?w=1024&format=avif;webp;jpg&as=picture&imagetools";

import line_art_1 from '^^assets/images/line-art-1.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import line_art_2 from '^^assets/images/abstract-colours.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import line_art_3 from '^^assets/images/abstract-colours-2.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import line_art_4 from '^^assets/images/abstract-colours-3.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';

import dot_blue from '^^assets/images/dot-blue.png?w=100&format=avif;webp;jpg&as=picture&imagetools';
import dot_green from '^^assets/images/dot-green.png?w=100&format=avif;webp;jpg&as=picture&imagetools';
import dot_orange from '^^assets/images/dot-orange.png?w=100&format=avif;webp;jpg&as=picture&imagetools';
import dot_red from '^^assets/images/dot-red.png?w=100&format=avif;webp;jpg&as=picture&imagetools';
import dot_yellow from '^^assets/images/dot-yellow.png?w=100&format=avif;webp;jpg&as=picture&imagetools';

import { project } from './project';

export const image = {
   project, 
   line_art: {1: line_art_1, 2: line_art_2, 3: line_art_3, 4: line_art_4}, art: {1: art, 2: art_2, 3: art_3, 7: art_7}, 
   dot: {
blue: dot_blue, green: dot_green, orange: dot_orange, red: dot_red, yellow: dot_yellow
} };
