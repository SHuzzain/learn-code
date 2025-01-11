import AsideNav from "@/components/layout/aside-nav";
import Container from "@/components/layout/container";
import JavaScriptCard from "@/features/javascript/components/javascript-card";

const JavaScriptPage = () => {
  return (
    <div
      className="flex-1 items-start md:gap-6 lg:gap-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] container"
      style={{ minHeight: "100vh" }}
    >
      <AsideNav type="javaScript" />
      <Container className={"pt-5"}>
        <JavaScriptCard />
      </Container>
    </div>
  );
};

export default JavaScriptPage;
