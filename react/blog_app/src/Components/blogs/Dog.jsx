export default function Dog(props){ //props is used to receive data from parent component (Section.jsx), any name can be used instead of props
    return(
    <article>
        <h1>{props.title}</h1>
        <p>Dogs are remarkable canine companions known for their loyalty, intelligence, and friendly nature. These domesticated animals have been cherished by humans for thousands of years, serving as both beloved pets and skilled workers. With their keen senses, athletic bodies, and playful personalities, dogs bring joy and entertainment to millions of households worldwide. Whether they're wagging their tails happily by your side or fetching their favorite toy, dogs continue to captivate us with their unwavering devotion and unique behaviors.</p>
    </article>
    )
}