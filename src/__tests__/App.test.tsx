// Imports
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';

// To Test
import App from '../App';

// Tests
describe('Renders main page correctly', async () => {
    /**
     * Resets all renders after each test
     */
    afterEach(() => {
        cleanup();
    });

    /**
     * Passes - shows title correctly
     */
    it('Should render the page correctly', async () => {
        // Setup
        await render(<App />);
        const h1 = await screen.queryByText('Vite + React');

        // Post Expectations
        expect(h1).toBeInTheDocument();
    });

    /**
     * Passes - shows the button count correctly present
     */
    it('Should show the button count set to 0', async () => {
        // Setup
        await render(<App />);
        const button = await screen.queryByText('count is 0');

        // Expectations
        expect(button).toBeInTheDocument();
    });

    /**
     * Passes - clicks the button 3 times and shows the correct count
     */
    it('Should show the button count set to 3', async () => {
        // Setup
        const user = userEvent.setup();
        await render(<App />);
        const button = await screen.queryByText('count is 0');
        
        // Pre Expectations
        expect(button).toBeInTheDocument();

        // Actions
        await user.click(button as HTMLElement);
        await user.click(button as HTMLElement);
        await user.click(button as HTMLElement);
        
        // Post Expectations
        expect(button?.innerHTML).toBe('count is 3');
    });
});