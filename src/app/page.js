import Banner from "./homepage/banner/page";
import Summary from "./homepage/userCard/summury/Summary";
import Cards from "./homepage/userCard/cards/Cards";

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <Summary />
        <Cards></Cards>
      </div>
  );
}
