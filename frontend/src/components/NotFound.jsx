import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container" style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <h2 style={styles.subHeading}>Page Not Found</h2>
            <p style={styles.text}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" style={styles.link}>
                <button style={styles.button}>Back to Home</button>
            </Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        padding: '0 20px',
    },
    heading: {
        fontSize: '6rem',
        fontWeight: 'bold',
        margin: '0',
        color: '#e74c3c',
    },
    subHeading: {
        fontSize: '2rem',
        margin: '10px 0 20px',
    },
    text: {
        fontSize: '1.2rem',
        marginBottom: '30px',
        maxWidth: '600px',
    },
    button: {
        padding: '12px 24px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    link: {
        textDecoration: 'none',
    }
};

export default NotFound;