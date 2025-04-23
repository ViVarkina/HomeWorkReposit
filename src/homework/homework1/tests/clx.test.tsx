import {describe, expect, test} from 'vitest'
import {clx} from "../Message.tsx";

describe('clx tests', () => {
    test('combining className', () => {
        expect(clx(['klass1', 'klass2'], {'klass3':true, 'klass4':false})).toBe('klass1 klass2 klass3')
    })

    test('No combining className', () => {
        expect(clx(['klass1', 'klass2'], {'klass3':undefined, 'klass4':false})).toBe('klass1 klass2')
    })

    test('empty arr className', () => {
        expect(clx([], {'klass3':true, 'klass4':false})).toBe('klass3')
    })

    test('only arr className', () => {
        expect(clx(['klass1', 'klass2'])).toBe('klass1 klass2')
    })

    test('empty className', () => {
        expect(clx([])).toBe('')
    })

    test('crash className', () => {
        // @ts-ignore
        expect(clx(undefined)).toBe('')
    })


})
