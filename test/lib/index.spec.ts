import { createEnum } from '../../lib/index';

describe('Enum Utility', () => {
  let Status: ReturnType<typeof createEnum>;

  beforeEach(() => {
    jest.clearAllMocks();
    Status = createEnum('PENDING', 'SUCCESS', 'FAILED');
  });

  it('should return correct enum values', () => {
    expect(Status.PENDING).toBe('PENDING');
    expect(Status.SUCCESS).toBe('SUCCESS');
    expect(Status.FAILED).toBe('FAILED');
  });

  it('should create new enum-like object correctly', () => {
    const Priority = createEnum('LOW', 'MEDIUM', 'HIGH');

    expect(Priority.LOW).toBe('LOW');
    expect(Priority.MEDIUM).toBe('MEDIUM');
    expect(Priority.HIGH).toBe('HIGH');
  });

  it('should allow only valid enum values (compile-time)', () => {
    // 타입 정의를 따로 만들어서 사용해도 됩니다.
    type StatusType = keyof typeof Status;

    const value: StatusType = 'SUCCESS';
    expect(value).toBe('SUCCESS');

    const invalidValue: StatusType = 'NOT_A_STATUS';
    void invalidValue;
  });
});
