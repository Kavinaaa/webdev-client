export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  let secondString = "Computer Science and Design"
  let secondNumber = 2028
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      secondString = {secondString}
      <br />
      typeof secondString = {typeof secondString}
      <br />
      secondNumber = {secondNumber}
      <br />
      typeof secondNumber = {typeof secondNumber}
      <br />
      sampleCount = {sampleCount}
      <br />
      typeof sampleCount = {sampleCountType}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      typeof sampleLabel = {sampleLabelType}
      <br />
    </div>
  );
}
