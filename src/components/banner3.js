import banner from '../banner3.webp';


export const Banner3 = (props) => {
    const screen = window.innerWidth;

    const styles = {
        container: {
            display: 'flex',
            height: screen < 500 ? 500 : 800,
            width: '90%',
            margin: 'auto',
            marginTop: screen < 500 ? 100 : 200
        },
        
        leftBanner: {
            width: '50%',
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'round',
            backgroundAttachment: 'fixed',
            backgroundPosition: screen < 500 ? 'right' : null
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
                        Vi är en restaurang med inspiration från det japanska köket. Kaiseki's vision är att ingen gillar allt men alla gillar något. Med den insikten sattes en meny med halvportioner ihop, bestående av allt från sushi till varma rätter. Målet är att erbjuda något till alla oavsett smak och tycke.
                    </h3>
                </div>
            </div>
        </div>
    )
}