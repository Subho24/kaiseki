import banner from '../banner.webp';
import logo_background from '../logo_background.webp';
import tempBackground from '../temporaryBackground.webp';
import logo from '../Kaiseki Transparent-1.png';
import { Button } from './button';
import { SetMeal } from '@mui/icons-material';


export const Banner = (props) => {
    const styles = {
        container: {
            backgroundImage: `url(${tempBackground})`,
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
            top: '42%',
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
                        <img src={logo} style={{width: '165%', height: '90%', margin: '-83px'}} />
                    </div>
                    <div className='buttonContainer' style={{marginTop: 175, textAlign: 'center'}}>
                    <Button buttonText="Boka Bord" iconElement={<SetMeal />} />
                    </div>
            </div>




            {/* <img src={logo_background} style={styles.img2} /> */}
            {/* <img src={logo} style={styles.logo}  />  */}
        </div>
    )
}



// export const Banner = (props) => {
//     const styles = {
//         container: {
//             backgroundImage: `url(${tempBackground})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             height: '100vh',
//             width: '100vw',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'end',
//             alignItems: 'center',
//         }
//     }


//     return (
//         <div className='bannerContainer' style={styles.container}>
//             <div style={{
//                 width: '100vw', 
//                 height: '100vh',
//                 backgroundImage: `url(${logo_background})`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 backgroundSize: 'cover',
//             }}>
//                 <div style={{
//                     width: '135px',
//                     height: '150px',
//                     backgroundImage: `url(${logo})`,
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     backgroundSize: 'cover',
//                     margin: '70% auto auto 36%',
//                     borderRadius: '1000px',
//                 }}>
//                 </div>
//                 {/* <img src={logo} width='60%' height='30%' /> */}
//             </div>
//             <div style={{width: '100%', height: '200px'}}>
//                 <Button buttonText='Boka Bord' iconElement={<SetMeal />} />
//             </div>
//         </div>
//     )
// }