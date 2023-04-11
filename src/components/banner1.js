import banner from '../banner.webp';
import logo_background from '../logo_background.webp';
import logo from '../logo.jpg';
import { Button } from './button';
import { SetMeal } from '@mui/icons-material';



// export const Banner = (props) => {
//     const styles = {
//         container: {
//             backgroundImage: `url(${banner})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             position: 'relative',
//             top: 0,
//             left: 0,
//             height: 780,
//             width: 980,
//             maxHeight: 780,
//             maxWidth: 980,
//             margin: 'auto'
//         },

//         img1: {
//             width: '100%',
//             height: '100%',
//             position: 'relative',
//             top: 0,
//             left: 0
//         },

//         img2: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%'
//         },

//         logo: {
//             position: 'absolute',
//             top: '30%',
//             left: '42%',
//             height: '35%',
//         }
//     }


//     return (
//         <div style={styles.container}>
//             <img src={banner} style={styles.img1} />
//             <img src={logo_background} style={styles.img2} />
//             <img src={logo} style={styles.logo}  /> 
//             <Button buttonText='Boka Bord' iconElement={<FontAwesomeIcon icon={faCalendarCheck} />} />
//         </div>
//     )
// }


export const Banner = (props) => {
    const styles = {
        container: {
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            top: 0,
            left: 0,
            height: 800,
            width: '90%',
            margin: 'auto'
        },

        img1: {
            width: '100%',
            height: '100%',
            position: 'relative',
            top: 0,
            left: 0
        },

        logoBackground: {
            backgroundImage: `url(${logo_background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '95%',
            height: '100%'
        },

        logoContainer: {
            position: 'absolute',
            top: '30%',
            left: '38%',
            height: '40%',
            width: '25%',
        }
    }


    return (
        <div className='bannerContainer' style={styles.container}>
            <div className='logoBackground' style={styles.logoBackground} />
            <div className='logoContainer' style={styles.logoContainer}>
                    <div>
                        <img src={logo} style={{width: '100%', height: '90%'}} />
                    </div>
                    <div className='buttonContainer' style={{marginTop: 50, textAlign: 'center'}}>
                    <Button buttonText="Boka Bord" iconElement={<SetMeal />} />
                    </div>
            </div>




            {/* <img src={logo_background} style={styles.img2} /> */}
            {/* <img src={logo} style={styles.logo}  />  */}
        </div>
    )
}