import dino from './images.png'

const HomePage = () => {

    return(
        <>
        <h1>Welcome to the most useless website, I dare you to find a useful feature</h1>
        <p>
            Home of Jackson Lippert's failed hopes and dreams, where a terrible front-end developer tries to improve his skills.
        </p>
        <p>
            Here is a spinny dinosaur to numb the pain
        </p>
        <img src={dino} className="dino" alt={"Dino"}/>     
        </>
    )
}
 
export default HomePage;