import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Courses from "../components/home/Courses";
import Rankers from "../components/home/Rankers";
import Testimonials from "../components/home/Testimonials";
import AppDownload from "../components/home/AppDownload";
import DoubtBot from "../components/chat/DoubtBot";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Offers />
      <Courses />
      <Rankers />
      <Testimonials />
      <AppDownload />
      <DoubtBot />
    </div>
  );
}
