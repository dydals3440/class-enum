"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEnum = createEnum;
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
function createEnum() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return values.reduce(function (acc, cur) {
    acc[cur] = cur;
    return acc;
  }, Object.create(null));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVFbnVtIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInZhbHVlcyIsIkFycmF5IiwiX2tleSIsInJlZHVjZSIsImFjYyIsImN1ciIsIk9iamVjdCIsImNyZWF0ZSJdLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEVudW1MaWtlPFQ+XG4gKlxuICog66y47J6Q7Je0IOumrO2EsOuftCDqsJLsnLzroZwg6rWs7ISx65CcIOyYpOu4jOygne2KuCDtmJXtg5zsnZggZW51bSDtg4DsnoXsnYQg7IOd7ISx7ZWY64qUIOycoO2LuOumrO2LsCDtg4DsnoXsnoXri4jri6QuXG4gKiDqsIEg7YKk7JmAIOqwkuydtCDrj5nsnbztlZwg66y47J6Q7Je066GcIOunpO2VkeuQqeuLiOuLpC5cbiAqXG4gKiBAdGVtcGxhdGUgVCAtIGVudW3snZgg7YKk7JmAIOqwkuycvOuhnCDsgqzsmqntlaAg66y47J6Q7Je0IOumrO2EsOuftCDsnKDri4jsmKgg7YOA7J6FXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vICdQRU5ESU5HJyB8ICdTVUNDRVNTJyB8ICdGQUlMRUQnIOqwmeydgCDrrLjsnpDsl7TsnYQga2V5LXZhbHVl66GcIOqwgOynhCDqsJ3ssrQg7YOA7J6FIOyDneyEsVxuICogdHlwZSBTdGF0dXMgPSBFbnVtTGlrZTwnUEVORElORycgfCAnU1VDQ0VTUycgfCAnRkFJTEVEJz47XG4gKiAvLyB7XG4gKiAvLyAgIFBFTkRJTkc6ICdQRU5ESU5HJztcbiAqIC8vICAgU1VDQ0VTUzogJ1NVQ0NFU1MnO1xuICogLy8gICBGQUlMRUQ6ICdGQUlMRUQnO1xuICogLy8gfVxuICovXG5leHBvcnQgdHlwZSBFbnVtTGlrZTxUIGV4dGVuZHMgc3RyaW5nPiA9IHsgW0sgaW4gVF06IEsgfTtcblxuLyoqXG4gKiDrrLjsnpDsl7Qg6riw67CY7J2YIGVudW0tbGlrZSDqsJ3ssrTrpbwg7IOd7ISx7ZWY64qUIO2VqOyImOyeheuLiOuLpC5cbiAqIOyghOuLrOuQnCDrrLjsnpDsl7Qg67Cw7Je07J2EIOq4sOuwmOycvOuhnCDqsIEg7YKk7JmAIOqwkuydtCDrj5nsnbztlZwg7Jik67iM7KCd7Yq466W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAqXG4gKiBAcGFyYW0gdmFsdWVzIC0gZW51beydmCDtgqTsmYAg6rCS7Jy866GcIOyCrOyaqe2VoCDrrLjsnpDsl7Qg66as7YSw65+0IOuqqeuhnVxuICogQHJldHVybnMg6rCBIO2UhOuhnO2NvO2LsOydmCDtgqTsmYAg6rCS7J20IOuPmeydvO2VnCDrrLjsnpDsl7Tsnbgg7Jik67iM7KCd7Yq4XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGVudW0tbGlrZSDqsJ3ssrQg66eM65Ok6riwXG4gKiBjb25zdCBTdGF0dXMgPSBjcmVhdGVFbnVtKCdQRU5ESU5HJywgJ1NVQ0NFU1MnLCAnRkFJTEVEJyk7XG4gKlxuICogY29uc29sZS5sb2coU3RhdHVzLlBFTkRJTkcpOyAvLyAnUEVORElORydcbiAqXG4gKiAvLyDtg4DsnoUg7KCV7J2Y7ZWY6riwXG4gKiB0eXBlIFN0YXR1c1R5cGUgPSBrZXlvZiB0eXBlb2YgU3RhdHVzO1xuICpcbiAqIC8vIO2DgOyehSDslYjsoITtlZjqsowg7IKs7JqpXG4gKiBjb25zdCBmb286IFN0YXR1c1R5cGUgPSAnU1VDQ0VTUyc7IC8vIOKchVxuICogLy8gY29uc3QgYmFyOiBTdGF0dXNUeXBlID0gJ05PVF9BX1NUQVRVUyc7IC8vIOKdjCDtg4DsnoUg7JeQ65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbnVtPGNvbnN0IFQgZXh0ZW5kcyBzdHJpbmdbXT4oXG4gIC4uLnZhbHVlczogVFxuKTogRW51bUxpa2U8VFtudW1iZXJdPiB7XG4gIHJldHVybiB2YWx1ZXMucmVkdWNlPEVudW1MaWtlPFRbbnVtYmVyXT4+KFxuICAgIChhY2MsIGN1cikgPT4ge1xuICAgICAgKGFjYyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVtjdXJdID0gY3VyO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIE9iamVjdC5jcmVhdGUobnVsbCkgYXMgRW51bUxpa2U8VFtudW1iZXJdPixcbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsVUFBVUEsQ0FBQSxFQUVIO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFEbEJDLE1BQU0sT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBTkYsTUFBTSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBRVQsT0FBT0YsTUFBTSxDQUFDRyxNQUFNLENBQ2xCLFVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFLO0lBQ1hELEdBQUcsQ0FBNEJDLEdBQUcsQ0FBQyxHQUFHQSxHQUFHO0lBQzFDLE9BQU9ELEdBQUc7RUFDWixDQUFDLEVBQ0RFLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FDcEIsQ0FBQztBQUNIIiwiaWdub3JlTGlzdCI6W119