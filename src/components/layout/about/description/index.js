import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


export function Description({ randomColor1, randomColor2 }) {
    return (
        <>
            <div className='description-container'>
                <div className='description-sidebar' style={{background:`linear-gradient(70deg, ${randomColor1}, ${randomColor2})`}}></div>
                <span className='description-title'>
                    Me chamo Victor Emanuel.
                </span>
                <span className='description-content'>
                    Sou um desenvolvedor front-end, tenho 22 anos, moro em Aparecida de Goiânia e sou apaixonado por tecnologia, programação, design e desenvolvimento de games.
                </span>
            </div>

            <div className='social-media'>
                <a href="https://www.linkedin.com/in/victormoraisc/" target='blank'>
                    <div className='social-media-icon'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </a>
                <a href="https://github.com/victormoraisc" target='blank'>
                    <div className='social-media-icon'>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </a>
                <a href="https://www.instagram.com/victorc_morais3/" target='blank'>
                    <div className='social-media-icon'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </a>
            </div>
        </>
        
    );
}