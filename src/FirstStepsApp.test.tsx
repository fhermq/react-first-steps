import { describe, test, expect, vi, afterEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from '@testing-library/react'

const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div data-testid="ItemCounter"
            name={props.productName}
            quantity={props.quantity} />
    )
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));


// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => (
//          <div data-testid="ItemCounter" 
//          name={props.name}
//          quantity={props.quantity} /> ),
// }));


describe('FirstStepsApp', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot', () => {
        render(<FirstStepsApp />);
        expect(screen.getByTestId('test-h1')).toMatchSnapshot();
    });

    test('should match snapshot with container', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
        screen.debug();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        // screen.debug();
        const itemCounterComponents = screen.getAllByTestId('ItemCounter');
        // console.log(itemCounterComponents.length);
        expect(itemCounterComponents.length).toBe(4);
    });

    test('should render ItemCounter wirh the correct props', () => {
        render(<FirstStepsApp />);
        // screen.debug();
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2', quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller', quantity: 5
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash Bros', quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Memoria SD 256 GB', quantity: 3
        });

    });
});