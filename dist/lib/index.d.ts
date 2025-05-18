/**
 * EnumLike<T>
 *
 * 문자열 리터럴 값으로 구성된 오브젝트 형태의 enum 타입을 생성하는 유틸리티 타입입니다.
 * 각 키와 값이 동일한 문자열로 매핑됩니다.
 *
 * @template T - enum의 키와 값으로 사용할 문자열 리터럴 유니온 타입
 *
 * @example
 * // 'PENDING' | 'SUCCESS' | 'FAILED' 같은 문자열을 key-value로 가진 객체 타입 생성
 * type Status = EnumLike<'PENDING' | 'SUCCESS' | 'FAILED'>;
 * // {
 * //   PENDING: 'PENDING';
 * //   SUCCESS: 'SUCCESS';
 * //   FAILED: 'FAILED';
 * // }
 */
export type EnumLike<T extends string> = {
    [K in T]: K;
};
/**
 * 문자열 기반의 enum-like 객체를 생성하는 함수입니다.
 * 전달된 문자열 배열을 기반으로 각 키와 값이 동일한 오브젝트를 반환합니다.
 *
 * @param values - enum의 키와 값으로 사용할 문자열 리터럴 목록
 * @returns 각 프로퍼티의 키와 값이 동일한 문자열인 오브젝트
 *
 * @example
 * // enum-like 객체 만들기
 * const Status = createEnum('PENDING', 'SUCCESS', 'FAILED');
 *
 * console.log(Status.PENDING); // 'PENDING'
 *
 * // 타입 정의하기
 * type StatusType = keyof typeof Status;
 *
 * // 타입 안전하게 사용
 * const foo: StatusType = 'SUCCESS'; // ✅
 * // const bar: StatusType = 'NOT_A_STATUS'; // ❌ 타입 에러
 */
export declare function createEnum<const T extends string[]>(...values: T): EnumLike<T[number]>;
