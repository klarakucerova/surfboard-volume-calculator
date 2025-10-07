
import { FRACTIONS } from './fractions.js';

export const surfboardThickness = [];

for (let whole = 2; whole <= 4; whole++) {
    FRACTIONS.forEach(frac => {
        const numeric = whole + frac.value;
        const label = frac.label ? `${whole} ${frac.label}"` : `${whole}"`;
        surfboardThickness.push({ label, inches: numeric });
    });
}
