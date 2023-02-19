import { Container, Input, Navbar } from "../base_components";
import { trpc } from "../utils/trpc";

const FormPage = () => {
  const utils = trpc.useContext();
  const { data } = trpc.timeCard.listAllCards.useQuery();

  return (
    <div>
      <Navbar />
      <Container>
        <form className="flex  flex-col items-center justify-center">
          <Input label="First Name" className="mt-3" />
          <Input label="Last Name" className="mt-3" />
          <Input label="Hours" type="number" className="mt-3" />
          <Input label="Placements" type="number" className="mt-3" />
          <Input label="Videos" type="number" className="mt-3" />
          <Input label="Return Visits" type="number" className="mt-3" />
          <Input label="Bible Studies" type="number" className="mt-3" />
          <Input label="Comments" type="text" className="mt-3" />
          <button className="mt-3 w-48 rounded bg-sky-500 px-5 py-2 text-white active:bg-sky-700">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default FormPage;
