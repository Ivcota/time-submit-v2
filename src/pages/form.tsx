import { Container, Input, Navbar } from "../base_components";
import { trpc } from "../utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

interface IForm {
  firstName: string;
  lastName: string;
  hours: number;
  placements: number;
  videos: number;
  returnVisits: number;
  bibleStudies: number;
  comments: string;
}

const schema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  hours: z.number().min(0, { message: "Required" }),
  placements: z.number().min(0, { message: "Required" }),
  videos: z.number().min(0, { message: "Required" }),
  returnVisits: z.number().min(0, { message: "Required" }),
  bibleStudies: z.number().min(0, { message: "Required" }),
  comments: z.string().nullable(),
});

const FormPage = () => {
  const utils = trpc.useContext();
  const { data } = trpc.timeCard.listAllCards.useQuery();
  const { mutateAsync } = trpc.timeCard.createTimeCard.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <Navbar />
      <Container>
        <form
          onSubmit={handleSubmit(async (data) => {
            await mutateAsync({
              firstName: data.firstName,
              lastName: data.lastName,
              bibleStudies: data.bibleStudies,
              comment: data.comments,
              hours: data.hours,
              month: "",
              placements: data.placements,
              returnVisits: data.returnVisits,
              videos: data.videos,
            });
          })}
          className="flex  flex-col items-center justify-center"
        >
          <Input
            label="First Name"
            className="mt-3"
            autoComplete="off"
            register={register("firstName")}
            errorMessage={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            className="mt-3"
            register={register("lastName")}
            autoComplete="off"
            errorMessage={errors.lastName?.message}
          />
          <Input
            label="Hours"
            type="number"
            className="mt-3"
            autoComplete="off"
            register={register("hours", { valueAsNumber: true })}
            errorMessage={errors.hours?.message}
          />
          <Input
            label="Placements"
            type="number"
            className="mt-3"
            autoComplete="off"
            register={register("placements", { valueAsNumber: true })}
            errorMessage={errors.placements?.message}
          />
          {/* <Input
            label="Placements"
            type="date"
            className="mt-3"
            autoComplete="off"
            register={register("placements", { valueAsNumber: true })}
            errorMessage={errors.placements?.message}
          /> */}
          <Input
            label="Videos"
            type="number"
            className="mt-3"
            autoComplete="off"
            register={register("videos", { valueAsNumber: true })}
            errorMessage={errors.videos?.message}
          />
          <Input
            label="Return Visits"
            type="number"
            className="mt-3"
            autoComplete="off"
            register={register("returnVisits", { valueAsNumber: true })}
            errorMessage={errors.returnVisits?.message}
          />
          <Input
            label="Bible Studies"
            type="number"
            className="mt-3"
            autoComplete="off"
            register={register("bibleStudies", { valueAsNumber: true })}
            errorMessage={errors.bibleStudies?.message}
          />
          <Input
            label="Comments"
            type="text"
            className="mt-3"
            autoComplete="off"
            register={register("comments")}
            errorMessage={errors.comments?.message}
          />
          <button className="mt-3 w-48 rounded bg-sky-500 px-5 py-2 text-white active:bg-sky-700">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default FormPage;
