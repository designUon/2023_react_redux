// 미들웨어의 형식으로 작성한 logger
// 미들웨어의 특징
// 모든 dispatch가 호출되고, 리듀서가 실행되기전에 먼저 실행되는 중간 함수

const myLogger = store => next => action => {
    // 액션 객체 출력 {type : "~"}
    console.log(action);
    // next() 액션객체를 리듀서 또는 미들웨어에게 전달
    // result는 next()를 실행한 결과값 : undefined
    const result = next(action);
    return result
}

export default myLogger;