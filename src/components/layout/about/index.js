import './style.css';
import { Welcome } from './welcome';
import { Description } from './description';
import { Logo } from '../../assets/logo.js';

export function About({randomColor1, randomColor2}) {
    return (
        <div className='container'>
            <Logo />
            <Welcome />
            <Description randomColor1={randomColor1} randomColor2={randomColor2} />
        </div>
    );
}