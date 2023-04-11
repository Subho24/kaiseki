import { useState } from "react"


export const Nav = (props) => {

    const styles = {
        container: {
            display: 'flex',
            height: '60px',
            width: '100%',
            backgroundColor: 'black',
            justifyContent: 'space-evenly',
            fontFamily: 'sans-serif',
            fontSize: '20px',
            fontWeight: 'bolder'
        },
    
        nav: {
            textDecoration: 'none',
            color: 'white'
        }
    }

    const handleMouseEnter = (e) => {
        e.target.style.color = '#21ce88';
    }

    const handleMouseLeave = (e) => {
        e.target.style.color = 'white';
    }

    const navOptions = ['Hem', 'Boka Bord', 'Meny']
    return(
        <div style={styles.container}>
            {
                navOptions.map(opt => {
                    return (
                        <div 
                            style={{
                                alignSelf: 'center',
                            }} 
                            onMouseEnter={(e) => handleMouseEnter(e)} 
                            onMouseLeave={(e) => handleMouseLeave(e)} 
                        >
                            <a 
                                href="http://localhost:3000/" 
                                style={styles.nav}
                            >
                                {opt}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
} 