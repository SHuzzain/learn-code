import Container from "@/components/layout/container";
import { H1, Paragraph } from "@/components/ui/typography";

const RootCard = () => {
  return (
    <main className="top-safe">
      <Container classname={"flex justify-center py-24"}>
        <section className="flex flex-col items-center gap-4">
          <H1 className="flex items-center gap-3 font-semibold">
            Learn <H1 className="text-sky-500">Programming</H1>
          </H1>

          <Paragraph className="text-center text-xl">
            Quick-read tutorials with code examples that you can run <br /> and
            copy—perfect for self-paced learning.
          </Paragraph>
        </section>
      </Container>
    </main>
  );
};

export default RootCard;
