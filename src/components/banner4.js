import { Button } from "./button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { SetMeal } from "@mui/icons-material";

export const Banner4 = (props) => {
    const styles = {
        textContainer: {
            height: '60%',
            width: '60%',
            margin: '10% auto',
            backgroundColor: '#232323',
            border: '2px solid black',
            textAlign: 'center',
            opacity: '0.8',
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: 'large',
            lineHeight: 2,
        }
    }

    return (
        <div>
            <div style={styles.textContainer}>
                <div>
                    <h1>Kaiseki 懐石</h1>
                </div>
                <h3>Kaiseki är en traditionell japansk middag.
                    Den är bestående av många olika rätter från förrätter till
                    desserter som är väl anpassade till varandra. Ofta kommer det i flera serveringaralternativtatt man får det på en bricka.
                    Denna typ av servering motsvarar ungefär en komplett middag med förrätt, huvudrätt, sushi och efterrätt.
                    Här på Sakanaya så väljer kockarna ut olika rätter för varje vecka.
                    Hör med servisen om vad som står på kvällens meny    
                    Vår kaiseki kommer ut i 6 serveringar och går även att få vegetarisk & vegan.
                </h3>
            </div>
            <Button buttonText="Meny" iconElement={<SetMeal />} />
        </div>
    )
}