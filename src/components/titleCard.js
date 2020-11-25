import React from 'react'
import { css } from '@emotion/core'

const TitleCard = () => {
    return (
        <div css={css`
            background: #151515;
            text-align: center;
            padding: 1rem;
            border-radius: 8px;
            border: 4px solid #fff;
            padding: 2rem;
            box-shadow: 8px 8px 4px rgba(0,0,0,.5);
            h1 {
                color: white;
                margin: 0;
                font-weight: normal;
                font-family: 'Courier New', Courier, monospace;
                font-size: min(max(1rem,4vw),1.6rem);
            }
            h1:first-of-type {
                margin-bottom: 0.75rem;
            }
            p {
                color: #fff;
                margin: 0;
            }
            b {
                color: #fff;
                font-weight: 600;
            }
        `}>
            <h1>
                Hello, I'm <b>Daniel Russell</b>.
            </h1>
            <h1>I'm a <b>fullstack web developer</b>.</h1>
        </div>
    )
}

export default TitleCard