### react classname for module.css

#### class name을 랜덤으로 생성하기 때문에 class name을 같게해도 문제가 되지 않는다.
- App_title__oSnkz

- Button_title__d8ixm

### issue2
#### 렌더링 두 번씩 되는 현상

rendering이 두 번되는 현상이 있어서 찾아보았더니 index.js에
React.StrictMode 테그에 감싸져 있어서 그렇다고 합니다.
StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 테그로,
해당 테그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행된다고 합니다.

React.StrictMode 테그를 지우면 해결.

### useEffect

function useEffect(effect: EffectCallback, )

첫번 째 argument는 우리가 딱 한 번만 실행하고 싶은 코드이다.
(api 호출은 한 번만 실행해야할 때가 있으므로.)

  useEffect(() => {
    console.log("Call the API.....");
  }, []);