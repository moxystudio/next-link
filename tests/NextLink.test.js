import React from 'react';
import { render } from '@testing-library/react';
import { NextLink } from '../src/NextLink';

const defaultProps = {
    href: '/foo',
};

const renderWithProps = (props) => render(<NextLink { ...defaultProps } { ...props }>bar</NextLink>);

describe('NextLink Component', () => {
    it('should render correctly', () => {
        const { getByRole, getByText } = renderWithProps();
        const link = getByRole('link');

        expect(link).toHaveAttribute('href', '/foo');
        expect(getByText('bar')).toBeInTheDocument();
    });

    it('should render correctly in a new tab', () => {
        const { getByRole, getByText } = renderWithProps({ newTab: true, prefetch: true });
        const link = getByRole('link');

        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        expect(getByText('bar')).toBeInTheDocument();
    });

    it('should render correctly as external', () => {
        const { getByRole, getByText } = renderWithProps({ external: true });
        const link = getByRole('link');

        expect(link).toHaveAttribute('href', '/foo');
        expect(getByText('bar')).toBeInTheDocument();
    });

    it('should render correctly as external in a new tab', () => {
        const { getByRole, getByText } = renderWithProps({ external: true, newTab: true });
        const link = getByRole('link');

        expect(link).toHaveAttribute('href', '/foo');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        expect(getByText('bar')).toBeInTheDocument();
    });
});
