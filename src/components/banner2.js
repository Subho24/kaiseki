import banner from '../banner2.webp';
import { Button } from './button';
import { SetMeal } from '@mui/icons-material';


export const Banner2 = (props) => {
    const screen = window.innerWidth;

    const styles = {
        container: {
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: screen < 500 ? 700 : 800,
            width: '90%',
            margin: 'auto'
        },

        textContainer: {
            height: screen < 500 ? null : '65%',
            width: screen < 1200 ? '80%' : '60%',
            marginTop: '10%',
            backgroundColor: 'dimgray',
            border: '2px solid black',
            textAlign: 'center',
            opacity: '0.8',
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: screen < 500 ? '0.7em' : 'large',
            lineHeight: 2,
        },
    }


    return (
        <div className='bannerContainer' style={styles.container}>
            <div style={styles.textContainer}>
                <h3>
                    Välkommen till Kaiseki, där mat, cocktails och drycker möts för att skapa en oförglömlig matupplevelse.
                    Våra dörrar öppnar den 26 april och vi kan inte vänta med att dela våra kulinariska skapelser med dig. Från traditionella japanska rätter till moderna tolkningar, vår meny är utformad för att glädja dina smaklökar och lämna dig sugen på mer.
                    Häng med oss på en måltid, eller stanna förbi för en drink och låt våra experter mixologer skapa den perfekta cocktailen som passar ditt humör. Med en avslappnad atmosfär och uppmärksam service är Kaiseki den perfekta platsen att varva ner och njuta av god mat och gott sällskap.
                    Missa inte spänningen - registrera dig nedan för att vara den första att veta om vår öppning och få exklusiva erbjudanden och uppdateringar.
                    Vi ses snart på Kaiseki!
                </h3>
            </div>
        </div>
    )
}