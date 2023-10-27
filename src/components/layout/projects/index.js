import './style.css';

export function Projects({ randomColor1, randomColor2 })
{
    return (
        <div className='projects-container'>
            <div className='projects-header'>Meus Projetos</div>
            <div className='projects-header-underline' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`}}></div>
            <div className='projects-content'>
                <a href="https://victormoraisc.github.io/Portfolio/Instagram/">
                    <div className='project-item'>
                        <span className='project-title'>Instagram Clone</span>
                        <span className='project-description'>
                            Clone do Instagram feito utilizando react-js, com algumas APIS de aleatorização para a geração de usuários e de posts infinitamente.
                        </span>
                        <div className='project-tags'>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>React</div></div>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>Node.js</div></div>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>Javascript</div></div>
                        </div>
                    </div>
                </a>
                <a href="https://victormoraisc.github.io/Portfolio/Netflix/" >
                    <div className='project-item'>
                    <span className='project-title'> Netflix Clone </span>
                        <span className='project-description'>
                            Clone da Homepage da Netflix feito utilizando Javascript Vanila, com algumas pequenas interaçoes de Css e javascript.
                        </span>
                        <div className='project-tags'>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>Javascript</div></div>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>Html5</div></div>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>CSS3</div></div>
                        </div>
                        </div>
                </a>
                <a href='#'>
                    <div className='project-item'>
                        <span className='project-title'>Flappy Bird Clone</span>
                        <span className='project-description'>
                            Clone do jogo Flappy Bird, atualmente em desenvolvimento, está sendo feito também com React
                        </span>
                        <div className='project-tags'>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>React</div></div>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>Javascript</div></div>
                            <div className='project-tag' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`, borderImageSlice: '1'}}><div>Html5</div></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}