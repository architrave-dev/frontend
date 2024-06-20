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
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
