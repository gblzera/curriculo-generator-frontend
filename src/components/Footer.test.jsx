import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

// Descreve o conjunto de testes para o componente Footer
describe('Footer Component', () => {

  // O teste em si
  it('deve renderizar o nome do criador e o link do GitHub', () => {
    // Renderiza o componente em um ambiente de teste
    render(<Footer />);

    // Procura por um elemento de link que contém o seu nome
    // A opção 'i' no final torna a busca insensível a maiúsculas/minúsculas
    const linkElement = screen.getByRole('link', { name: /Gabriel Henrique Kuhn Paz/i });

    // Verificação (asserção)
    expect(linkElement).toBeInTheDocument(); // Esperamos que o elemento do link esteja no documento
    expect(linkElement).toHaveAttribute('href', 'https://github.com/gblzera'); // Verificamos se o link aponta para o lugar certo
  });

});