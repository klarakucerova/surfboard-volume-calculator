
import { FRACTIONS } from './fractions.js';

export const surfboardWidth = [];

for (let whole = 17; whole <= 24; whole++) {
    FRACTIONS.forEach(frac => {
        const numeric = whole + frac.value;
        const label = frac.label ? `${whole} ${frac.label}"` : `${whole}"`;
        surfboardWidth.push({ label, inches: numeric });
    });
}
