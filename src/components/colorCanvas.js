import React, { useEffect, useState } from 'react'
import canvasSketch from 'canvas-sketch';
import { lerp } from 'canvas-sketch-util/math'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes'
import { css } from '@emotion/core'


const ColorCanvas = ({ id, show, duration }) => {
    let [rendered, setRendered] = useState(false)

    useEffect(() => {
        let colorCount = random.rangeFloor(6, 24)
        console.log("COLOR_COUNT", colorCount)
        let palette = random.shuffle(random.pick(palettes))
            .slice(0, colorCount)
        const createGrid = () => {
            const points = [];
            const count = 53;
            for (let x = 0; x < count; x++) {
                for (let y = 0; y < count; y++) {
                    const u = count <= 1 ? 0.5 : x / (count - 1);
                    const v = count <= 1 ? 0.5 : y / (count - 1);
                    points.push({
                        color: random.pick(palette),
                        radius: Math.abs(0.01 + random.gaussian() * 0.01),
                        position: [u, v]
                    });
                }
            }
            return points;
        }
        const sketch = () => {
            random.setSeed(512)
            const points = createGrid().filter(() => random.value() > 0.5 ? true : false)
            const margin = 0;
            // render fn
            return ({ context, width, height }) => {

                context.fillStyle = '#333';
                context.fillRect(0, 0, width, height);

                points.forEach((point) => {
                    const { position, radius, color } = point;
                    const [u, v] = position;
                    const x = lerp(margin, width - margin, u);
                    const y = lerp(margin, width - margin, v);

                    context.beginPath();
                    context.arc(x, y, radius * width, 0, Math.PI * 2, false);
                    context.fillStyle = color;
                    context.fill();
                })
            }
        }
        const CANVAS_SETTINGS = {
            scaleContext: true,
            parent: document.getElementById(id)
        }
        if (!rendered) {
            canvasSketch(sketch, CANVAS_SETTINGS);
            setRendered(true)
        }
    }, [id, show, rendered])

    return (
        <div id={id} css={css`
            height: 100%;
            min-width: 1000px;
            opacity: ${show ? '1' : '0'};
            transition: opacity ${duration}s ease-in-out;
            @media (max-width: 1000px) {
                margin-left: -6rem;
            }
        `}>
        </div>
    )
}

export default ColorCanvas