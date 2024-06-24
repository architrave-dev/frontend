import GlobalNavigation from "./widgets/GlobalNavigation";
import HeroSection from "./shared/ui/HeroSection";
import ProjectDescription from "./entities/project/ui/ProjectDescription";

function App() {
  return (
    <>
      <GlobalNavigation></GlobalNavigation>
      <HeroSection />
      <ProjectDescription />
    </>
  );
}

export default App;
