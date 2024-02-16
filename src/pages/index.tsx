import { ItemList } from "@/components/ItemList/ItemList";
import { QuadrantList } from "@/components/QuadrantList/QuadrantList";
import { getAppName, getItems, getReleases } from "@/lib/data";
import { CustomPage } from "@/pages/_app";

const Home: CustomPage = () => {
  const appName = getAppName();
  const version = getReleases().length;
  const items = getItems(undefined, true);
  return (
    <>
      <h1>
        {appName}{" "}
        <span style={{ color: "var(--highlight)" }}>Version #{version}</span>
      </h1>
      <QuadrantList items={items} />
    </>
  );
};

export default Home;