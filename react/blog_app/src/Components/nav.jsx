import {Link} from 'react-router-dom'
export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to = '/'>Home</Link></li> {/*using Link component to navigate without reloading to different routes*/}
                <li><Link to = '/Dog'>Dog</Link></li> {/*here /Dog is Dog.jsx route*/}
                <li><Link to = '/Cat'>Cat</Link></li>
                <li><Link to = '/Lion'>Lion</Link></li>
                  
            </ul>
        </nav>

    )
}

