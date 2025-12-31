import Lion from "./blogs/Lion"
import Dog from "./blogs/Dog"
import Cat from "./blogs/Cat"
import Home from "./blogs/Home"
import {Routes, Route} from 'react-router-dom'

export default function Section(){
    return(
        <section>
            <Routes>
                <Route path = '/' element = {<Home title = {'Home Page'}/>}/> {/*defining routes using Route component*/}
                <Route path = '/Dog' element = {<Dog title = {'Dogs'}/>}/> {/*here /Dog is route for Dog.jsx*/}
                <Route path = '/Cat' element = {<Cat title = {'Cats'}/>}/>
                <Route path = '/Lion' element = {<Lion title = {'Lions'}/>}/>
            </Routes>
        </section>
    )
}