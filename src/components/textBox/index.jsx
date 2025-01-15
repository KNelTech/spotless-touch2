import PropTypes from 'prop-types';

const TextBox = ({
    children,
    className = 'text-box',
    readOnly = true
}) => {
    return (
        <>
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
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default TextBox;
