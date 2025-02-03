let hooks = [],
  currentHook = 0,
  _deps = [];

const MyReact = {
  render(Component) {
    const Comp = Component();
    Comp.render();
    // 현재 훅을 0으로 다시 초기화
    currentHook = 0;
    return Comp;
  },
};

export const useState = (initValue) => {
  // 현재 훅 배열에 값이 있다면 훅의 값을 아니면 initValue를 사용
  hooks[currentHook] = hooks[currentHook] || initValue;
  const hookIndex = currentHook;
  // current Hook 전용 setState
  const setState = (newState) => {
    if (typeof newState === "function") {
      // 함수형일 때 업데이트
      hooks[hookIndex] = newState(hooks[hookIndex]);
    } else {
      // current Hook과 값은 같고 주소만 다름
      hooks[hookIndex] = newState;
    }
  };
  return [hooks[currentHook++], setState];
};

// 의존성 배열이 없어도 항상 실행됨
export const useEffect = (callback, depArr) => {
  // 의존성 배열 유무
  const hasNoDeps = !depArr;
  // hook의 currnetIndex에 값 존재 판별, 초기 실행시 undefined
  const prevDeps = hooks[currentHook] ? hooks[currentHook].deps : undefined;

  // hook이 들어있다면 cleanup함수를 넣음
  const prevCleanup = hooks[currentHook]
    ? hooks[currentHook].cleanup
    : undefined;

  //의존성 배열의 변경점 판별
  const hasChangedDeps = prevDeps
    ? !depArr.every((el, i) => el === prevDeps[i])
    : true;

  // 의존성배열이 없거나, 의존성배열의 변경이 있으면 실행
  if (hasNoDeps || hasChangedDeps) {
    // cleanup함수가 있다면 실행
    if (prevCleanup) prevCleanup();
    const cleanup = callback();
    hooks[currentHook] = { deps: depArr, cleanup };
  }
  currentHook++;
};
export default MyReact;
