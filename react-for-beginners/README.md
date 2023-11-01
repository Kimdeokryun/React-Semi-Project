### react classname for module.css

#### class name을 랜덤으로 생성하기 때문에 class name을 같게해도 문제가 되지 않는다.
- App_title__oSnkz

- Button_title__d8ixm

### issue
#### 렌더링 두 번씩 되는 현상

rendering이 두 번되는 현상이 있어서 찾아보았더니 index.js에
React.StrictMode 테그에 감싸져 있어서 그렇다고 합니다.
StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 테그로,
해당 테그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행된다고 합니다.

React.StrictMode 테그를 지우면 해결.


## useEffect

### 20231031

#### 최초 한 번만 렌더링이 되길 바랄 때

function useEffect(effect: EffectCallback, )

첫번 째 argument는 우리가 딱 한 번만 실행하고 싶은 코드이다.
(api 호출은 한 번만 실행해야할 때가 있으므로.)

  useEffect(() => {
    console.log("Call the API.....");
  }, []);


### 20231101

#### value 변화 시에만 렌더링이 되길 바랄 때

  useEffect(() => {
    console.log("Search For", keyword);
  }, [keyword]);

대상 변수들을 [] 안에 넣어준다.

if(keyword !== "" && keyword.length > 5)

(최초 실행 X, value 길이 지정)

#### useEffect destroyed

useEffect(()=> {
    console.log("created :)");
    return () => console.log("destroyed");
  }, []);

return으로 destroy 될 때, 원하는 반환 값을 지정.

// 아래 처럼 함수형으로 설정 가능

1. 외부 함수 지정

  function destroyedFn() {
    console.log("bye :(");
  }

  function effectFn() {
    console.log("created :)");
    return destroyedFn;
  }

  useEffect(effectFn, []);
  return <h1>Hello</h1> ;

2. 내무 함수 지정

  useEffect(function() {
    console.log("created :)");
    return function() { console.log("destroyed"); }
  }, []);