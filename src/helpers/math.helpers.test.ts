
import { describe, expect, test } from 'vitest'
import { add, divide, multiply, substract } from './math.helper'

describe('add', () => {

    test('Should add two numbers', () => {

        // 1. Arrange
        //preparar nuestras entradas
        const a = 2;
        const b = 2;
        // 2. Act
        //aplicar estimulos
        const result = add(a, b);

        // 3. Assert
        console.log({result})
        expect(result).toBe(4);

    })

});

describe('susbtract', () => {

    test('Should susbtract two numbers and be 0', () => {
        const a = -2;
        const b = -2;
        const result = substract(a, b);

        expect(result).toBe(0);

    })
    test('Should susbtract two numbers', () => {

        const a = 2;
        const b = 2;
        const result = substract(a, b);

        expect(result).toBe(0);
    })

});

describe('multiply', () => {

    test('Should multiply two negative numbers and be positive', () => {

        const a = -2;
        const b = -2;
        const result = multiply(a, b);
        expect(result).toBe(4);

    })

    test('Should multiply two numbers', () => {

        const a = 1;
        const b = 1;
        const result = multiply(a, b);
        expect(result).toBe(1);

    })

    test('Should divide two numbers', () => {

        const a = 1;
        const b = 1;
        const result = divide(a, b);
        expect(result).toBe(1);

    })

});

