import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Routes from './Routes';
import { dogs } from './App';

test('renders all dog names in the list', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <Routes dogs={dogs} />
    </MemoryRouter>
  );

  const dogNames = dogs.map(dog => dog.name);

  for (const name of dogNames) {
    const linkElement = getByText(new RegExp(name, 'i'));
    expect(linkElement).toBeInTheDocument();
  }
});

test(`Renders only Whiskey's information`, () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dogs/whiskey']}>
      <Routes dogs={dogs} />
    </MemoryRouter>
  );

  const whiskeyInfo = dogs.find(dog => dog.name === 'Whiskey');
  const dukeInfo = dogs.find(dog => dog.name === 'Duke');

  const linkElement = getByText(new RegExp(whiskeyInfo.facts[0], 'i'));
  expect(linkElement).toBeInTheDocument();

  expect(screen.queryByText(new RegExp(dukeInfo.facts[0], 'i'))).toBeNull();
});

test('renders home when route not existing', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dogs/nodog']}>
      <Routes dogs={dogs} />
    </MemoryRouter>
  );

  const dogNames = dogs.map(dog => dog.name);

  for (const name of dogNames) {
    const linkElement = getByText(new RegExp(name, 'i'));

    expect(linkElement).toBeInTheDocument();
  }
});
