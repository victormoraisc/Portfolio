import './styles.css';

export function Decoration({randomColor1, randomColor2}){
return (
    <div className='decoration-container'>
        <div>
            <div className='decoration top-decoration'>
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <linearGradient
                        id="gradient"
                        gradientTransform="rotate(-70 .5 .5)">

                    <stop offset="0" stop-color={randomColor1}/>
                    <stop offset="1" stop-color={randomColor2}/>
                    </linearGradient>
                    <polyline points="256 0, 0 0, 0 256, 16 240, 16 16, 240 16, 256 0" fill="url(#gradient)" stroke="#none" stroke-width="1"/>
                </svg>
            </div>
            <div className='decoration bottom-decoration'>
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <linearGradient
                    id="gradient"
                    gradientTransform="rotate(70 .5 .5)">

                    <stop offset="0" stop-color="#fff"/>
                    <stop offset="1" stop-color="#000"/>
                    </linearGradient>
                    <polyline points="0 256, 256 256, 256 0, 240 16, 240 240, 16 240, 0 256 " fill="url(#gradient)" stroke="#none" stroke-width="1"/>
                </svg>
            </div>
        </div>
    </div>
)
}