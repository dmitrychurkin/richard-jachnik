import { memo } from 'react';

const Scroller = ({ className, children, targetId }) => {
    const onClickHandler = e => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <a className={className} onClick={onClickHandler}>{children}</a>
    );
};

export default memo(Scroller);
