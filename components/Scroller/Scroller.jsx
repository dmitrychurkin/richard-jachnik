import { memo } from 'react';

const Scroller = ({ children, targetId }) => {
    const onClickHandler = e => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <a className="button-text" onClick={onClickHandler}>{children}</a>
    );
};

export default memo(Scroller);
