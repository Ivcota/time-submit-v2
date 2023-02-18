import { Container, Input, Navbar } from "../base_components";
import { trpc } from "../utils/trpc";

const FormPage = () => {
  const utils = trpc.useContext();
  const { data } = trpc.timeCard.listAllCards.useQuery();

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
