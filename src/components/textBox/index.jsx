import PropTypes from 'prop-types';

const TextBox = ({ children, className, readOnly }) => {
    return (<>
        <h1 className='aboutTitle' id="about">About</h1>
        <div
            className={className}
            contentEditable={!readOnly}
            suppressContentEditableWarning={true}
        >
            {children}
        </div>
        </>
    );
};

TextBox.propTypes = {
    children: PropTypes.string.isRequired, // Expecting a string for content
    className: PropTypes.string,
    readOnly: PropTypes.bool,
};

TextBox.defaultProps = {
    className: 'text-box',
    readOnly: true,
};

export default TextBox;