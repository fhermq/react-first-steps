import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {

    test('shoukd render with default values', () => {
        const name = 'Test item';
        render(<ItemCounter name={name} />)
        // screen.debug();
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const name = 'Test item';
        const qty = 10;
        render(<ItemCounter name={name} quantity={qty} />)
        // screen.debug();
        expect(screen.getByText(qty)).toBeDefined();
    });

    test('should increase count when +1 button is pressed ', () => {
        const name = 'Test item';
        const qty = 99;
        render(<ItemCounter name={name} quantity={qty} />)

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);
        expect(screen.getByText('100')).toBeDefined();

        console.log(buttonAdd.innerHTML);
    });

    test('should decrease count when -1 button is pressed ', () => {
        const name = 'Test item';
        const qty = 5;
        render(<ItemCounter name={name} quantity={qty} />)
        const [, buttonSustract] = screen.getAllByRole('button');
        console.log(buttonSustract.innerHTML);
        fireEvent.click(buttonSustract);
        expect(screen.getByText('4')).toBeDefined();
        // screen.debug();
    });

    test('shouldnt decrease count when -1 button is pressed and auqntity = 0', () => {
        const name = 'Test item';
        const qty = 0;
        render(<ItemCounter name={name} quantity={qty} />)
        const [, buttonSustract] = screen.getAllByRole('button');
        console.log(buttonSustract.innerHTML);
        fireEvent.click(buttonSustract);
        expect(screen.getByText('0')).toBeDefined();
        // screen.debug();
    });

    test('Should change color to red when count is 0', () => {
        const name = 'Test item';
        const qty = 0;
        render(<ItemCounter name={name} quantity={qty} />)
        const itemText = screen.getByText(name);
        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('red');
        // expect(screen.getByText('0')).toBeDefined();
        // screen.debug();
    });

    test('Should change color to black when count is +1', () => {
        const name = 'Test item';
        const qty = 1;
        render(<ItemCounter name={name} quantity={qty} />)
        const itemText = screen.getByText(name);
        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('black');

    });


})