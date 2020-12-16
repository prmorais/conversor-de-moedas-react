import React from 'react';
import { render } from '@testing-library/react';
import ConversorMoedas from './ConversorMoedas';

test('Deve renderizar o componente sem erro', () => {
	render(<ConversorMoedas />);
});
