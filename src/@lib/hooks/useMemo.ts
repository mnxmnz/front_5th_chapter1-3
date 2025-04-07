import { DependencyList } from "react";
import { useRef } from "./useRef";
import { shallowEquals } from "../equalities";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 이전 상태 저장
  const memoizedValue = useRef<T | null>(null);
  const prevDeps = useRef(deps);

  // 의존성 비교
  const isDepsSame = equals(prevDeps.current, deps);

  // 상태 업데이트
  if (memoizedValue.current === null || !isDepsSame) {
    memoizedValue.current = factory();
    prevDeps.current = deps;
  }

  return memoizedValue.current;
}
