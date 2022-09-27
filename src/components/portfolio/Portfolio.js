import Projects from "./Projects";
import Footer from "../footer/Footer";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../actions/ScrollButton";

const Portfolio = () => {
  document.title = "Projects | Sabahat";
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Portfolio;
