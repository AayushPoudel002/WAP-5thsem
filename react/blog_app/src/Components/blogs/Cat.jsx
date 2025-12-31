import styles from './Cat.module.css' //anythig can be imported using modules.css like styles
//anything can be written instead of styles and used as styles.classname

export default function Cat(props){
    return(
    <article>
        <h1 className={styles.title}>{props.title}</h1>
        <p>Cats are fascinating feline companions known for their independence, agility, and affectionate nature. These domesticated animals have been cherished by humans for thousands of years, serving as both beloved pets and skilled hunters. With their keen senses, flexible bodies, and playful personalities, cats bring joy and entertainment to millions of households worldwide. Whether they're purring contentedly in your lap or pouncing on their favorite toy, cats continue to captivate us with their mysterious charm and unique behaviors.</p>
    </article>
    )
}