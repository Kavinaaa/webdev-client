import TextFields from "./TextFields";
import Textarea from "./TextArea";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";
import Buttons from "./Buttons";
import MyForm from "./YourForm";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
        <TextFields />
        <Textarea />
        <RadioButtons />
        <Checkboxes />
        <Dropdowns />
        <OtherFieldTypes />
        <Buttons />
        <MyForm />
        {/* add the next form components here */}
    </div>
  );
}