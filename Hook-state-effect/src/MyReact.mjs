const MyReact = {
  render(Component) {
    const Comp = Component(); // 컴포넌트를 실행하여 이펙트들을 처리
    Comp.render(); // 컴포넌트의 렌더링 함수 실행
    return Comp; // 컴포넌트 반환
  },
};

export default MyReact;
