import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={headerStyles}>
            <div className='container'>
                <h2>{ text }</h2>
            </div>
        </header>
    )
}

// if user does not pass any props it will apply default props
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'black',
    textColor: '#ffe4c4'
}

// type checking the props
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header