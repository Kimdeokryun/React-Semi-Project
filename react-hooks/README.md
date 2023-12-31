# React-Hooks

npx create-react-app react-hooks

# Collection of React Hooks to install with NPM
- [✅] useTitle         20231110
- [✅] useInput         20231109
- [] usePageLeave
- [✅] useClick         20231110
- [] useFadeIn
- [] useFullScreen
- [] useHoverf 
- [] useNetwork
- [] useNotification
- [] useScroll
- [✅] useTabs          20231109
- [] usePreventLeave
- [] useConfirm
- [] useAxios

#

https://codesandbox.io/


#

## Hooks란?

functional component에서 state를 가질 수 있게 해준다.

-> class component, did mount, render를 안 해도 된다!

함수형 프로그래밍.

## useInput

`input placeholder="Name" value={name.value} />`를 
`input placeholder="Name" {...name} />` 이렇게 쓸 수 있다.

다만 name이 같은 파라미터 값이 하나여야 한다.

아래의 경우 위 처럼 쓰지 못한다.
```
function useInput(initialVal) {
  const [value, setValue] = useState(initialVal);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
}

function App() {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}
```

### validator

func useInput
```
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
```

func App
```
const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
```

value의 길이가 10 이하 인 경우에만 validator 가 true

## useTabs

React Hook "useState" 오류 해결방법
```
React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?
```

위와 같은 에러가 떴을 때 아래와 같이 useState()를 최상단으로 이동시켜주시면 됩니다.
*최상위(at the Top Level)에서만 Hook을 호출해야 합니다.
```
const useTabs = (initialTab, allTabs) => {

const [currentIndex, setCurrentIndex] = useState(initialTab);

if (!allTabs || !Array.isArray(allTabs)) {
return;
}
return { currentItem: allTabs[currentIndex] };
};
```

## useEffect

ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

`useEffect(func, []);`

func -> EffectCallback

[] -> DependencyList

## useTitle

useState와 useEffect를 활용하여 setTitle


## useClick

autofocus
```
function App() {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000); // autofocus

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
```

useEffect 안에 function을 넣게 되면 componentDidMount, componentDidUpdate 때 호출 된다. (dependency가 없다면)

return이 function 이라면, ComponentWillUnmount 로 부터 호출 된 것.
