// CryptoDataViewer.test.jsx
import { render, screen } from '@testing-library/react';
import CryptoDataViewer from './CryptoDataViewer';

describe('CryptoDataViewer Component', () => {
  test('displays price increase correctly', () => {
    render(<CryptoDataViewer openPrice="50000" closePrice="51000" />);
    expect(screen.getByText(/↑ subiu/i)).toBeInTheDocument();
    // Adicione verificações adicionais para a cor, se necessário
  });

  test('displays price decrease correctly', () => {
    render(<CryptoDataViewer openPrice="51000" closePrice="50000" />);
    expect(screen.getByText(/↓ desceu/i)).toBeInTheDocument();
    // Adicione verificações adicionais para a cor, se necessário
  });
});