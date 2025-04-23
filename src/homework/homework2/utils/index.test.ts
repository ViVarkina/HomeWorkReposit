import { describe, it, expect } from 'vitest';
import { filterAffairs, deleteAffair, renameName, renamePriority } from './index';
import { AffairPriorityType, AffairType } from '../Homework2';

describe('Utility Functions Tests', () => {
    const mockAffairs: AffairType[] = [
        { _id: 1, name: 'Task 1', priority: AffairPriorityType.HIGH },
        { _id: 2, name: 'Task 2', priority: AffairPriorityType.MIDDLE },
        { _id: 3, name: 'Task 3', priority: AffairPriorityType.LOW },
        { _id: 4, name: 'Task 4', priority: AffairPriorityType.HIGH },
    ];

    describe('filterAffairs', () => {
        it('should filter high priority affairs', () => {
            const result = filterAffairs(mockAffairs, AffairPriorityType.HIGH);
            expect(result).toHaveLength(2);
            expect(result.every(affair => affair.priority === AffairPriorityType.HIGH)).toBe(true);
        });

        it('should filter middle priority affairs', () => {
            const result = filterAffairs(mockAffairs, AffairPriorityType.MIDDLE);
            expect(result).toHaveLength(1);
            expect(result[0].priority).toBe(AffairPriorityType.MIDDLE);
        });

        it('should filter low priority affairs', () => {
            const result = filterAffairs(mockAffairs, AffairPriorityType.LOW);
            expect(result).toHaveLength(1);
            expect(result[0].priority).toBe(AffairPriorityType.LOW);
        });

        it('should return all affairs when no filter is applied', () => {
            const result = filterAffairs(mockAffairs, 'ALL' as AffairPriorityType);
            expect(result).toHaveLength(4);
        });
    });

    describe('deleteAffair', () => {
        it('should delete affair by id', () => {
            const result = deleteAffair(mockAffairs, 1);
            expect(result).toHaveLength(3);
            expect(result.find(affair => affair._id === 1)).toBeUndefined();
        });

        it('should not modify array if id not found', () => {
            const result = deleteAffair(mockAffairs, 999);
            expect(result).toHaveLength(4);
            expect(result).toEqual(mockAffairs);
        });
    });

    describe('renameName', () => {
        it('should rename affair name by id', () => {
            const newName = 'Updated Task';
            const result = renameName(mockAffairs, 1, newName);
            expect(result.find(affair => affair._id === 1)?.name).toBe(newName);
        });

        it('should not modify other affairs', () => {
            const result = renameName(mockAffairs, 1, 'Updated Task');
            expect(result.filter(affair => affair._id !== 1)).toEqual(mockAffairs.filter(affair => affair._id !== 1));
        });
    });

    describe('renamePriority', () => {
        it('should update affair priority by id', () => {
            const result = renamePriority(mockAffairs, 1, AffairPriorityType.LOW);
            expect(result.find(affair => affair._id === 1)?.priority).toBe(AffairPriorityType.LOW);
        });

        it('should not modify other affairs', () => {
            const result = renamePriority(mockAffairs, 1, AffairPriorityType.LOW);
            expect(result.filter(affair => affair._id !== 1)).toEqual(mockAffairs.filter(affair => affair._id !== 1));
        });
    });
}); 