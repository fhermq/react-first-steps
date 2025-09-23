import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('Should render firstName and Lastname', () => {

        // Container ayuda a evaluar el estado inicial.
        const { container } = render(<MyAwesomeApp />);

        // console.log(container.innerHTML);
        screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        // expect(h1?.innerHTML).toBe('Fernando :)');
        expect(h1?.innerHTML).toContain('Fernando');
        expect(h3?.innerHTML).toContain('Mirasol');


 
    });
    test('Should render firstName and Lastname - using screen', () => {
        // Container ayuda a evaluar el estado inicial.
        //Screen de debe usar si o si cuando se usen eventos
        render(<MyAwesomeApp />);
        screen.debug();

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Fernando');
        console.log(h1.innerHTML);

    });
});