import './styles.css';
import { Welcome1 } from '../../../assets/welcome-1.js'
import { Welcome2 } from '../../../assets/welcome-2.js';

export function Welcome() {
    return (
        <>
        <div class="welcome-container">
            <div class="welcome-layer1">
                <Welcome1 />
            </div>
            <div class="welcome-layer2">
                <span class="overlay">
                    <Welcome2 />
                </span>
            </div>
        </div>
        </>
    )
}