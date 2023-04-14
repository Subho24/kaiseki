import banner from '../banner.webp';
import logo_background from '../logo_background.webp';
import tempBackground from '../temporaryBackground.webp';
import logo from '../Kaiseki Transparent-1.png';
import { Button } from './button';
import { SetMeal } from '@mui/icons-material';


export const Banner = (props) => {
    const screen = window.innerWidth;

    const styles = {
        container: {
            backgroundImage: `url(${tempBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            top: 0,
            left: 0,
            height: screen < 500 ? 600 : 800,
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
            top: screen < 500 ? 70 : 0,
            left: screen < 500 ? -20 : 0,
            width: screen < 500 ? '108%' : '95%',
            height: screen < 500 ? '70%' : '100%'
        },

        logoContainer: {
            position: 'absolute',
            top: '42%',
            left: screen < 500 ? null : '38%',
            height: screen < 500 ? null : '40%',
            width: screen < 500 ? null : '25%',
        },

        imgContainer: {
            width: screen < 500 ? '60%' : null,
            marginLeft: screen < 500 ? '25%' : null
        }
    }


    return (
        <div className='bannerContainer' style={styles.container}>
            <div className='logoBackground' style={styles.logoBackground} />
            <div className='logoContainer' style={styles.logoContainer}>
                    <div className='imgContainer' style={styles.imgContainer} >
                        <img src={logo} style={{width: '165%', height: '90%', margin: '-83px'}} />
                    </div>
                    <div className='buttonContainer' style={{marginTop: 175, textAlign: 'center'}}>
                    <Button buttonText="Boka Bord" iconElement={<SetMeal />} buttonUrl="https://boisterous-mandazi-d6dd55.netlify.app/book/668d2b6e-e432-4e25-ae2b-d5c97b93b780" />
                    </div>
            </div>
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