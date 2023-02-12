import { Input, Navbar } from "../base_components";

const FormPage = () => {
  return (
    <div>
      <Navbar />
      <Input
        label="Base Input"
        helperText="This is a base input"
        className="mx-5 mt-3"
      />
    </div>
  );
};

export default FormPage;
