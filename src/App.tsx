import GlobalNavigation from "./widgets/GlobalNavigation";
import Divider from "./shared/ui/Divider";
import HeroSection from "./shared/ui/HeroSection";
import { BaseButton } from "./shared/ui/Button";

function App() {
  return (
    <>
      <GlobalNavigation></GlobalNavigation>
      <HeroSection />
      <Divider />
      <BaseButton>buttonTest</BaseButton>
    </>
  );
}

export default App;
