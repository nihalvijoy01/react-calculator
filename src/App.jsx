import { useState } from "react";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [exp, setexpState] = useState("");

  return (
    <>
      <div className=" bg-rose-200 flex flex-col justify-around border-2 border-grey-200 ">
        <Header></Header>
        <TextArea value={exp} />
        <div>
          <Button value="7" handleClick={() => onButtonClick("7")}></Button>
          <Button value="8" handleClick={() => onButtonClick("8")}></Button>
          <Button value="9" handleClick={() => onButtonClick("9")}></Button>
          <Button value="+" handleClick={() => onButtonClick("+")}></Button>
        </div>
        <div>
          <Button value="4" handleClick={() => onButtonClick("4")}></Button>
          <Button value="5" handleClick={() => onButtonClick("5")}></Button>
          <Button value="6" handleClick={() => onButtonClick("6")}></Button>
          <Button value="-" handleClick={() => onButtonClick("-")}></Button>
        </div>
        <div>
          <Button value="1" handleClick={() => onButtonClick("1")}></Button>
          <Button value="2" handleClick={() => onButtonClick("2")}></Button>
          <Button value="3" handleClick={() => onButtonClick("3")}></Button>
          <Button value="*" handleClick={() => onButtonClick("*")}></Button>
        </div>
        <div>
          <Button value="C" handleClick={() => onClearButton()}></Button>
          <Button value="0" handleClick={() => onButtonClick("0")}></Button>
          <Button value="=" handleClick={() => onEqualsButton(exp)}></Button>
          <Button value="/" handleClick={() => onButtonClick("/")}></Button>
        </div>
        <Footer></Footer>
      </div>
    </>
  );

  function onButtonClick(i) {
    console.log("button clicked");
    setexpState((exp) => exp.concat(i));
  }

  function onClearButton() {
    setexpState("");
  }

  function onEqualsButton(expression) {
    let result;
    result = new Function("return " + expression)();
    console.log(result);
    setexpState(String(result));
  }
}

export default App;
