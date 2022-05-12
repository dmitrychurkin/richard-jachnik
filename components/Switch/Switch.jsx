const Switch = ({ labelProps, inputProps, classes: { handle } }) => (
    <label
        {...labelProps}
    >
        <input
            type='checkbox'
            {...inputProps}
        />
        <span className={handle} />
    </label>
);

Switch.defaultProps = {
    labelProps: {
        id: 'switch',
        className: 'switch'
    },
    inputProps: {
        id: 'slider',
        className: 'checkbox'
    },
    classes: {
        handle: 'slider round'
    }
};

export default Switch;
