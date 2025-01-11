import { H1, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { LANGUAGE_TITLE, NAV_HREF } from "@/constants";
import { Link } from "react-router";

const RootCard = () => {
  return (
    <>
      <main className={"flex justify-center py-20"}>
        <section className="flex flex-col items-center gap-4">
          <H1 className="flex items-center gap-3 font-semibold">
            Learn <span className="text-sky-500">Programming</span>
          </H1>

          <Paragraph className="text-center text-xl">
            Quick-read tutorials with code examples that you can run <br /> and
            copy—perfect for self-paced learning.
          </Paragraph>

          <div className="flex flex-wrap gap-5">
            {Object.values(LANGUAGE_TITLE).map((lang) => (
              <Button asChild key={lang} variant="outline">
                <Link to={NAV_HREF[lang]}>{lang}</Link>
              </Button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default RootCard;
