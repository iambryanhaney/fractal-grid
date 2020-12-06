import React from 'react'
import './FractalGrid.css'

export default function FractalGrid() {
    const cards = [
        [
            "https://source.unsplash.com/6pZ1CR95-LE",
        ],
        [
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
        ],
        [
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
        ],
        [
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
        ],
        [
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
        ],
        [
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/M7WlI-YPWt0",
            // "https://source.unsplash.com/c6g-26myD34",
            // "https://source.unsplash.com/05KfSHkfupg",
        ],
        [
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
        ],
        [
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",
            "https://source.unsplash.com/M7WlI-YPWt0",
            "https://source.unsplash.com/c6g-26myD34",
            "https://source.unsplash.com/05KfSHkfupg",
            "https://source.unsplash.com/HjpNeUD8qdw",
            "https://source.unsplash.com/GZjXMTQAfB4",
            "https://source.unsplash.com/Y0nU6dqDCbY",
            "https://source.unsplash.com/6pZ1CR95-LE",
            "https://source.unsplash.com/mCdMERfagEI",
            "https://source.unsplash.com/s7JMSQ4DA4g",
            "https://source.unsplash.com/P7Tn-_IbrKI",  
        ],
    ]

    const renderCard = (urls, cardIndex) => {
        // Calculate grid cells per side using 2^ceiling(log4(image count)) 
        const cellsPerSide = 2**Math.ceil( Math.log(urls.length || 1) / Math.log(4) )

        return (
            <div className='card' key={`card_${cardIndex}`} >
                <div className="header">Header</div>
                <div className="fractal-grid" style={{ 
                    gridTemplateColumns: `repeat(${cellsPerSide}, 1fr)`,
                    gridAutoRows: `${1 / cellsPerSide}fr` }}>
                    { urls.map((url, imageIndex) =>
                        <img key={`c_${cardIndex}_i_${imageIndex}`} src={url} alt="" />
                    )}
                </div>
                <p className='footer'>Footer</p>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="main-grid">
                { cards.map((urls, index) => renderCard(urls, index) )}
            </div>
        </div>
    )
}