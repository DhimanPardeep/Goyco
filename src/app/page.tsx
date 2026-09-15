import Achievements from "./components/Home/Achievements";
import ContactHome from "./components/Home/Contact";
import Slider from "./components/Home/Slider";
import Solutions from "./components/Home/Solutions";
import Testimonials from "./components/Home/Testimonials";
import Ventures from "./components/Home/Ventures";
import WorkWay from "./components/Home/WorkWay";

export default function Home() {
  return (
    <>
      <Slider></Slider>
      <Ventures></Ventures>
      <Solutions></Solutions>
      <WorkWay></WorkWay>
      <Achievements></Achievements>
      <Testimonials></Testimonials>
      <ContactHome></ContactHome>
    </>
  );
}
