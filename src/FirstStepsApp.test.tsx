import { describe, test, expect } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from '@testing-library/react'


describe('FirstStepsApp', () =>{

    test('should match snapshot', ()=>{
        render(<FirstStepsApp/>);
        expect( screen.getByTestId('test-h1')).toMatchSnapshot();
    } );

    test('should match snapshot with container', ()=>{
       const {container} = render(<FirstStepsApp/>);
        expect(container).toMatchSnapshot();
        screen.debug(); 
    } );

})