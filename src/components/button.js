import { useState } from "react"


export const Button = (props) => {
    const [isHover, setIsHover] = useState(false);
    const screen = window.innerWidth;


    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const styles = {
        button: {
            width: screen < 500 ? '200px' : '230px',
            height: '50px',
            backgroundColor: isHover ? 'white' : 'black',
            border: '1px solid white',
            color: isHover ? 'black' : 'white',
            fontSize: screen < 500 ? 'large' : 'larger',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            margin: 'auto',
            cursor: 'pointer',
            opacity: 'unset',
            fontFamily: 'auto'
        }
    }
    return (
        <a href={props.buttonUrl}> 
            <div 
                style={styles.button} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>
                    {props.buttonText}
                </span>
                <span style={{marginBottom: -5}}>
                    {props.iconElement}
                </span>
            </div>
        </a>
    )
}