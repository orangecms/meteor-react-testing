export default function *emoji (min, max) {
  let current = min;
  while (true) {
    yield String.fromCodePoint(current);
    current++;
    if (current > max) current = min;
  }
}

export const kittyEmoji = emoji(0x1F638, 0x1F640);
