import { describe, expect, it } from 'vitest'; // Assuming Vitest is installed
import About from './About'; // Assuming About.css exists (or mock it if needed)
import React from 'react';
import { render } from '@testing-library/react'; // Import for rendering

describe('About page', () => {
  it('About component renders correctly', () => {
    const { getByText } = render(<About />);

    // Assertions for core elements
    expect(getByText('Quiénes Somos')).toBeInTheDocument();
    expect(getByText('Descubre nuestra historia y misión')).toBeInTheDocument();

    // Assertions for content paragraphs (consider using a loop or data-testid)
    const content = getByText(/Lorem ipsum/); // Assuming first paragraph contains "Lorem ipsum"
    expect(content).toBeInTheDocument();
    // Add similar assertions for other paragraphs if needed
  });
});
