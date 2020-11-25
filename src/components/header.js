import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

import TitleCard from './titleCard'
import ColorCanvas from './colorCanvas'

const ANIMATION_DURATION = 6 // seconds
const NUM_PERMUTATIONS = 30
let CURR_IDX = 0

const Header = () => {
    let [toggles, setToggles] = useState(new Array(NUM_PERMUTATIONS).fill(0))

    let [start, setStart] = useState(false)

    const advanceColors = (toggles) => {
        let newToggles = [...toggles]
        if (CURR_IDX === newToggles.length) CURR_IDX = 0
        newToggles.forEach((toggle, idx) => newToggles[idx] = 0)
        newToggles[CURR_IDX] = 1
        setToggles(newToggles)
        CURR_IDX = CURR_IDX + 1
    }

    useEffect(() => {
        setTimeout(() => {
            advanceColors(toggles)
        }, ANIMATION_DURATION * 1000)
        if (!start) {
            advanceColors(toggles)
            setStart(true)
        }
    }, [toggles, start])

    return (
        <header css={css`
            height: 100vh;
            position: relative;
            overflow: hidden;
        `}>
            {toggles.map((state, idx) => {
                return (
                    <div
                        key={idx}
                        css={css`
                            height: 100%;
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                        `}
                    >
                        <ColorCanvas
                            id={`canvas-${idx}`}
                            show={state}
                            duration={ANIMATION_DURATION}
                        />
                    </div>
                )
            })}
            <div css={css`
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 1rem;
                margin: -4rem 0 0;
                @media (max-width: 600px) {
                    margin: -6rem 0 0;
                }
            `}>
                <TitleCard />
            </div>

        </header>
    )
}

export default Header