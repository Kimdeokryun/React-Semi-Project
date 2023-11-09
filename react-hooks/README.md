# React-Hooks

npx create-react-app react-hooks

# Collection of React Hooks to install with NPM
- [✅] useTitle
- [✅] useInput
- [] usePageLeave
- [] useClick
- [] useFadeIn
- [] useFullScreen
- [] useHover
- [] useNetwork
- [] useNotification
- [] useScroll
- [] useTabs
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