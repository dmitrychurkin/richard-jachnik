import { memo } from 'react';

const Socials = ({ className, classes: { link }, links }) => (
    <ul className={className}>
        {links.map(({ id, ...rest }) => (
            <li key={id}>
                <a
                    className={link}
                    {...rest}
                >
                    <i className={`bi bi-${id}`} />
                </a>
            </li>
        ))}
    </ul>
);

Socials.defaultProps = {
    links: [],
    classes: {}
};

export default memo(Socials, () => true);
