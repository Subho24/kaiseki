import arrow from '../arrow.webp'

export const Text = (props) => {
    const styles = {
        conatainer: {
            width: '80%',
            color: 'white',
            margin: '10% auto 145px auto',
            transform: 'rotate(-20deg)',
            fontFamily: 'cursive',
            display: 'flex',
            lineHeight: 2,
        },

        arrow: {
            width: '500px',
            marginTop: '70px',
            marginLeft: '-70px',
        }
    }


    return (
        <div style={styles.conatainer}>
            <h1>
                Ta en tur till Japan och få en smak av deras kultur, tradition och konst med vår kaiseki Middagsmeny. Boka ditt bord och låt oss göra din kväll till en minnesvärd välsmakande resa till Japan med vår service och vårt urval av rätter.
            </h1>
            <img src={arrow} />
        </div>
    )
}