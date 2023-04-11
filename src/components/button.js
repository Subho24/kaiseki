import { useState } from "react"

export const Button = (props) => {
    const [isHover, setIsHover] = useState(false);


    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const styles = {
        button: {
            width: '230px',
            height: '50px',
            backgroundColor: isHover ? 'white' : 'black',
            border: '1px solid white',
            color: isHover ? 'black' : 'white',
            fontSize: 'larger',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            margin: 'auto',
            cursor: 'pointer',
            opacity: 'unset'
        }
    }
    return (
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
    )
}