"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../lib/index");
describe('Enum Utility', () => {
    let Status;
    beforeEach(() => {
        jest.clearAllMocks();
        Status = (0, index_1.createEnum)('PENDING', 'SUCCESS', 'FAILED');
    });
    it('should return correct enum values', () => {
        expect(Status.PENDING).toBe('PENDING');
        expect(Status.SUCCESS).toBe('SUCCESS');
        expect(Status.FAILED).toBe('FAILED');
    });
    it('should create new enum-like object correctly', () => {
        const Priority = (0, index_1.createEnum)('LOW', 'MEDIUM', 'HIGH');
        expect(Priority.LOW).toBe('LOW');
        expect(Priority.MEDIUM).toBe('MEDIUM');
        expect(Priority.HIGH).toBe('HIGH');
    });
    it('should allow only valid enum values (compile-time)', () => {
        const value = 'SUCCESS';
        expect(value).toBe('SUCCESS');
        const invalidValue = 'NOT_A_STATUS';
        void invalidValue;
    });
});
