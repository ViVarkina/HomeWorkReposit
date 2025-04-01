import { describe, test, expect, beforeEach } from 'vitest'
import {AffairPriorityType, AffairType} from '../Homework2.tsx'
import {deleteAffair} from "../utils";

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

describe('deleteAffair tests', () => {
    test('delete 0', () => {
        const newState = deleteAffair(initialState, 0)
        expect(newState.length).toBe(6)
    })
    
    test('delete 1', () => {
        const newState = deleteAffair(initialState, 1)
        expect(newState.length).toBe(5)
    })
    
    test('delete 3', () => {
        const newState = deleteAffair(initialState, 3)
        expect(newState.length).toBe(5)
    })
    
    test('delete 6', () => {
        const newState = deleteAffair(initialState, 6)
        expect(newState.length).toBe(5)
    })
    
    test('delete 7', () => {
        const newState = deleteAffair(initialState, 7)
        expect(newState.length).toBe(6)
    })
})
