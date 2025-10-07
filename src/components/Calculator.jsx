
import { useState } from 'react';
import { surfboardLength } from '../utils/surfboardLength.js';
import { surfboardWidth } from '../utils/surfboardWidth.js';
import { surfboardThickness } from '../utils/surfboardThickness.js';
import { surfboardShape } from '../utils/surfboardShape.js';

import './Calculator.scss';

function Calculator() {
    const [lengthIndex, setLengthIndex] = useState(
        Math.floor(surfboardLength.length / 2)
    );
    const [widthIndex, setWidthIndex] = useState(
        Math.floor(surfboardWidth.length / 2)
    );
    const [thicknessIndex, setThicknessIndex] = useState(
        Math.floor(surfboardThickness.length / 2)
    );
    const [shapeIndex, setShapeIndex] = useState(
        Math.floor(surfboardShape.length / 2)
    );

    const L_in = surfboardLength[lengthIndex]?.inches ?? 0;
    const W_in = surfboardWidth[widthIndex]?.inches ?? 0;
    const T_in = surfboardThickness[thicknessIndex]?.inches ?? 0;

    const shapeFactor = surfboardShape[shapeIndex].factor;

    // const rawVolume = L_in * W_in * T_in * 0.016387;
    // const rawVolume = L_in * W_in * T_in * 0.01636;
    const rawVolume = L_in * W_in * T_in * 0.01637;
    const finalVolume = rawVolume * shapeFactor;

  return (
    <div className="calculator__inner">
        <div class="inner">
            <h2 className="heading">Surfboard Volume Calculator</h2>

            <div className="form__group">
                <label htmlFor="length">
                <span>Length</span><span className="number"><span class="unit">feet</span>{surfboardLength[lengthIndex]?.label}</span>
                </label>
                <input
                    type="range"
                    id="length"
                    min="0"
                    max={surfboardLength.length - 1}
                    value={lengthIndex}
                    className="w-full"
                    style={{
                        "--val": `${(lengthIndex / (surfboardLength.length - 1)) * 100}`
                    }}
                    onChange={(e) => setLengthIndex(Number(e.target.value))}
                />
            </div>

            <div className="form__group">
                <label htmlFor="width">
                <span>Width</span> <span className="number"><span class="unit">inch</span>{surfboardWidth[widthIndex]?.label}</span>
                </label>
                <input
                    type="range"
                    id="width"
                    min="0"
                    max={surfboardWidth.length - 1}
                    value={widthIndex}
                    className="w-full"
                    style={{
                        "--val": `${(widthIndex / (surfboardWidth.length - 1)) * 100}`
                    }}
                    onChange={(e) => setWidthIndex(Number(e.target.value))}
                />
            </div>

            <div className="form__group">
                <label htmlFor="thickness">
                <span>Thickness</span> <span className="number"><span class="unit">inch</span>{surfboardThickness[thicknessIndex]?.label}</span>
                </label>
                <input
                    type="range"
                    id="thickness"
                    min="0"
                    max={surfboardThickness.length - 1}
                    value={thicknessIndex}
                    className="w-full"
                    style={{
                        "--val": `${(thicknessIndex / (surfboardThickness.length - 1)) * 100}`
                    }}
                    onChange={(e) => setThicknessIndex(Number(e.target.value))}
                />
            </div>

            <div className="form__group">
                <label htmlFor="shape">
                    <span>Shape</span> <span className="number"><span class="unit">inch</span>{surfboardShape[shapeIndex].label}</span>
                </label>

                <input
                    type="range"
                    min="0"
                    max={surfboardShape.length - 1}
                    value={shapeIndex}
                    style={{
                        "--val": `${(shapeIndex / (surfboardShape.length - 1)) * 100}`
                    }}
                    onChange={(e) => setShapeIndex(Number(e.target.value))}
                />
            </div>

            <div className="volume">
                <span>Volume</span> <span className="number"><span className="unit">liters</span>{finalVolume.toFixed(1)}</span>
            </div>
        </div>
    </div>
  );
}

export default Calculator;
