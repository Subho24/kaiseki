import banner from '../banner3.webp';


export const Banner3 = (props) => {
    const styles = {
        container: {
            display: 'flex',
            height: 800,
            width: '90%',
            margin: 'auto',
            marginTop: 200
        },
        
        leftBanner: {
            width: '50%',
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'round',
            backgroundAttachment: 'fixed',
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
                <p style={{marginTop: '100px'}}>
                    Om Oss
                </p>
                <div style={{
                    lineHeight: 2,
                    margin: '10% auto',
                    width: '60%',
                    fontSize: 'large'
                }} >
                    <h3>
                        Vi är en restaurang med inspiration från det japanska köket. Kaiseki's vision är att ingen gillar allt men alla gillar något. Med den insikten sattes en meny med halvportioner ihop, bestående av allt från sushi till varma rätter. Målet är att erbjuda något till alla oavsett smak och tycke.
                    </h3>
                </div>
            </div>
        </div>
    )
}