import {
  useMainAnimationContext,
  usePageContext,
} from '../context/mainAnimationContext';

export const useScreenTransitionAnimation = () => {
  const { page, setPage } = usePageContext(); // 페이지 context
  const { controlScreen, controlIndicater } = useMainAnimationContext(); // 애니메이션을 적용할 컨트롤러 context

  // wheel 이벤트
  const transitionWheelAnimation = (event: React.WheelEvent) => {
    // 인디케이터 애니메이션
    if ((event.deltaY > 0 && page < 3) || (event.deltaY < 0 && page > 1)) {
      controlIndicater
        .start({
          y: 0,
          transition: { type: 'spring', stiffness: 100 },
        })
        .then(() => {
          // 애니메이션 재시작
          controlIndicater.start({
            y: 10,
            transition: { type: 'spring', stiffness: 100 },
          });
        });

      // 메인페이지 화면 전환
      controlScreen
        .start({
          opacity: 0,
          transition: { duration: 0.5 },
        })
        .then(() => {
          if (event.deltaY > 0 && page < 3) {
            setPage((prevPage) => prevPage + 1);
          } else if (event.deltaY < 0 && page > 1) {
            setPage((prevPage) => prevPage - 1);
          }

          // 애니메이션 재시작
          controlScreen.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
    }
  };

  // click 애니메이션
  const transitionClickAnimation = (page: number) => {
    // 인디케이터 애니메이션
    controlIndicater
      .start({
        y: 0,
        transition: { type: 'spring', stiffness: 100 },
      })
      .then(() => {
        // 애니메이션 재시작
        controlIndicater.start({
          y: 10,
          transition: { type: 'spring', stiffness: 100 },
        });
      });

    // 메인페이지 화면 전환
    controlScreen
      .start({
        opacity: 0,
        transition: { duration: 0.5 },
      })
      .then(() => {
        setPage(page);

        // 애니메이션 재시작
        controlScreen.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
      });
  };

  return { transitionWheelAnimation, transitionClickAnimation };
};
