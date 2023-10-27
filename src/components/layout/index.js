import './style.css'
import { About } from './about';
import { Projects } from './projects';

export function Layout({randomColor1, randomColor2}){
    return(
        <div className='layout-container'>
            <div className='layout-content'>
                <About randomColor1={randomColor1} randomColor2={randomColor2}/>
                <Projects randomColor1={randomColor1} randomColor2={randomColor2}/>
            </div>
        </div>
    )
}