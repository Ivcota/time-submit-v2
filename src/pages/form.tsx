import { Container, Input, Navbar } from "../base_components";

const FormPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Input label="First Name" className="mt-3" />
        <Input label="Last Name" className="mt-3" />
      </Container>
    </div>
  );
};

export default FormPage;
