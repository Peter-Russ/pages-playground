import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Home from '@/pages/index';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders a title', () => {
    const title = screen.getByText(/Peter-Russ/i);
    expect(title).toBeInTheDocument();
  });

  it('renders a meta description', () => {
    const metaDescription = document.head.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', 'Generated by create next app');
  });

  it('renders a viewport meta tag', () => {
    const viewportMeta = document.head.querySelector('meta[name="viewport"]');
    expect(viewportMeta).toHaveAttribute('content', 'width=device-width, initial-scale=1');
  });

  it('renders a favicon link', () => {
    const faviconLink = document.head.querySelector('link[rel="icon"]');
    expect(faviconLink).toHaveAttribute('href', '/favicon.ico');
  });
});
