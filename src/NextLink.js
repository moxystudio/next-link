import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const NextLink = forwardRef(({ children, className, href, newTab, prefetch, as, scroll, external, ...props }, ref) => {
    const Anchor = (
        <a
            ref={ ref }
            className={ className }
            target={ newTab ? '_blank' : undefined }
            rel={ newTab ? 'noopener noreferrer' : undefined }
            href={ external ? href : undefined }
            { ...props }>
            { children }
        </a>
    );

    if (external) {
        return Anchor;
    }

    return (
        <Link href={ href } prefetch={ prefetch && undefined } as={ as } scroll={ scroll } passHref>
            { Anchor }
        </Link>
    );
});

NextLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    newTab: PropTypes.bool,
    external: PropTypes.bool,
    prefetch: PropTypes.bool,
    as: PropTypes.string,
    scroll: PropTypes.bool,
};

export default NextLink;
