import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter"; 
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import IfElse from "./components/IfElse";
import NameList from "./components/NameList";
import Form from "./components/Form";
import RefComp from "./components/RefComp";
import FocusInput from "./components/FocusInput";
import ErrorBoundry from "./components/ErrorHandling/ErrorBoundry";
import ErrorHeroComponent from "./components/ErrorHandling/ErrorHeroComponent";
import ButtonClick from "./components/HigherOrderComponents/ButtonClick";
import MouseHover from "./components/HigherOrderComponents/MouseHover";



function App() {
  return (
    <div className="App">
      <ButtonClick name={'Dhruvin'} />
      <MouseHover />
      {/* <ErrorBoundry>
        <ErrorHeroComponent Username="naviman" />
        <ErrorHeroComponent Username="batman" />
        <ErrorHeroComponent Username="superman" />
      </ErrorBoundry> */}
      {/* <FocusInput/> */}
      {/* <RefComp/> */}
      {/* <Form/> */}
      {/* <NameList/> */}
      {/* <IfElse/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Greet name="functionNameDhrruvin"><p>This is the childern props. Thank you</p></Greet> */}
      {/* <Greet><button>Action</button></Greet> */}
      {/* <Welcome name = 'classNameDhruvin'></Welcome> */}
    </div>
  );
}

export default App;
