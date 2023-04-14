import banner from '../banner3.webp';


export const Banner3 = (props) => {
    const screen = window.innerWidth;

    const styles = {
        container: {
            display: 'flex',
            height: screen < 500 ? null : 800,
            width: screen < 500 ? null : '90%',
            margin: 'auto',
            marginTop: screen < 500 ? 100 : 200
        },
        
        leftBanner: {
            width: '50%',
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'round',
            backgroundAttachment: 'fixed',
            backgroundPosition: screen < 500 ? 'right' : null,
            // backgroundSize:  screen < 500 ? 'cover' : null
        },

        rightBanner: {
            backgroundColor: '#abcfb9',
            width: '50%',
            textAlign: 'center'
        }
    }


    return (
        <div className='bannerContainer' style={styles.container}>
            <div style={styles.leftBanner}>
            </div>
            <div style={styles.rightBanner}>
                <p style={{marginTop: screen < 500 ? '100px' : '100px'}}>
                    Om Oss
                </p>
                <div style={{
                    lineHeight: 2,
                    margin: '10% auto',
                    width: '60%',
                    fontSize: screen < 500 ? '0.4em' : 'large'
                }} >
                    <h3>
                    Välkommen till Kaiseki, där mat, cocktails och drycker möts för att skapa en oförglömlig matupplevelse.
                    Våra dörrar öppnar den 26 april och vi kan inte vänta med att dela våra kulinariska skapelser med dig. Från traditionella japanska rätter till moderna tolkningar, vår meny är utformad för att glädja dina smaklökar och lämna dig sugen på mer.
                    Häng med oss på en måltid, eller stanna förbi för en drink och låt våra experter mixologer skapa den perfekta cocktailen som passar ditt humör. Med en avslappnad atmosfär och uppmärksam service är Kaiseki den perfekta platsen att varva ner och njuta av god mat och gott sällskap.
                    Missa inte spänningen - registrera dig nedan för att vara den första att veta om vår öppning och få exklusiva erbjudanden och uppdateringar.
                    Vi ses snart på Kaiseki!
                    </h3>
                </div>
            </div>
        </div>
    )
}