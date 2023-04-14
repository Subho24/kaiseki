import arrow from '../arrow.webp'
import background from '../background.png'

export const Text = (props) => {
    const screen = window.innerWidth;

    const styles = {
        conatainer: {
            width: screen < 1200 && screen > 500 ? '100%' : screen < 500 ? '120%' : '80%',
            color: 'white',
            // margin: screen < 1200 && screen > 500 ? '10% auto 145px 10%' : screen < 500 ? '10% auto 50px 50px' : '10% auto 145px auto',
            marginLeft:  screen < 500 ? 55 : null, 
            transform: 'rotate(-20deg)',
            fontFamily: 'cursive',
            display: 'flex',
            lineHeight: 2,
            height:  screen < 500 ? '300px' : null,
            fontSize: screen < 500 ? '0.4em' : null,
        },

        arrow: {
            width: screen < 500 ? '200px' : null,
            marginRight: screen < 500 ? '100px' : null
        }
    }


    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'bottom'
        }}>
            <div style={styles.conatainer} className='textContainer' >
                <h1>
                    Ta en tur till Japan och få en smak av deras kultur, tradition och konst i vår restaurang. Boka ditt bord och låt oss göra din kväll till en minnesvärd välsmakande resa till Japan med vår service och vårt urval av rätter och utmärkt drycker.
                </h1>
                <img src={arrow} style={styles.arrow} />
            </div>
        </div>
    )
}