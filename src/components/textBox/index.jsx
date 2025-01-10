import PropTypes from 'prop-types';

const TextBox = ({ children, className, readOnly }) => {
    return (
        <div
            className={className}
            contentEditable={!readOnly}
            suppressContentEditableWarning={true}
        >
            {children}
        </div>
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