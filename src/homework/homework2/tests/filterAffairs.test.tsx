import { describe, test, expect, beforeEach } from 'vitest'
import {AffairPriorityType, AffairType} from '../Homework2.tsx'
import {filterAffairs} from "../utils";

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: 1, name: 'React', priority: AffairPriorityType.HIGH},
        {_id: 2, name: 'anime', priority: AffairPriorityType.LOW},
        {_id: 3, name: 'games', priority: AffairPriorityType.LOW},
        {_id: 4, name: 'work', priority: AffairPriorityType.HIGH},
        {_id: 5, name: 'html & css', priority: AffairPriorityType.MIDDLE},
        {_id: 6, name: 'porn', priority: AffairPriorityType.LOW},
    ]
})

describe('filterAffairs tests', () => {
    test('filter by all', () => {
        const newState = filterAffairs(initialState, AffairPriorityType.ALL)
        expect(newState.length).toBe(6)
    })

    test('filter by high', () => {
        const newState = filterAffairs(initialState, AffairPriorityType.HIGH)
        expect(newState.length).toBe(2)
    })

    test('filter by middle', () => {
        const newState = filterAffairs(initialState, AffairPriorityType.MIDDLE)
        expect(newState.length).toBe(1)
    })

    test('filter by low', () => {
        const newState = filterAffairs(initialState, AffairPriorityType.LOW)
        expect(newState.length).toBe(3)
    })
})
