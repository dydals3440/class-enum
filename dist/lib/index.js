"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnum = createEnum;
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
function createEnum(...values) {
    return values.reduce((acc, cur) => {
        acc[cur] = cur;
        return acc;
    }, Object.create(null));
}
