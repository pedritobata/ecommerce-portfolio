import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '..';

describe('Index', () => {
    describe('renders', () => {
        it('should render home page', () => {
            render(<Home />);

            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('E-commerce project');
        })
    });
});