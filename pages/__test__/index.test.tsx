import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '..';
import { renderWithStoreProviders } from '@/utils/testUtils';
import { withLayout } from '@/utils/uiUtils';

describe('Index', () => {
    describe('renders', () => {
        it('should render layout sections', () => {
            renderWithStoreProviders(withLayout(<Home />));

            expect(screen.getByText('Discount top banner')).toBeInTheDocument();
            expect(screen.getByText('Top Generic Section')).toBeInTheDocument();
            expect(screen.getByText('Global Section')).toBeInTheDocument();
            expect(screen.getByText('Navigator')).toBeInTheDocument();
            expect(screen.getByText('Footer')).toBeInTheDocument();
        })
    });
});