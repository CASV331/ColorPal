import ColorPicker from "../components/colorPicker/ColorPicker.jsx";
import ContrastRatio from "./contrastRatio/ContrastRatio.jsx";
import { useShuffle } from "../context/shuffleContext.jsx";

function Hero() {
  const { shuffle, setShuffle } = useShuffle();

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setShuffle(!shuffle);
  };
  return (
    <section>
      <div className="flex flex-wrap bg-gray-50 justify-center gap-10 items-center md:justify-end py-8">
        <section className="mx-auto">
          <ContrastRatio />
        </section>
        <section className="flex flex-col items-center mx-auto sm:flex-row">
          <div>
            <ColorPicker target={shuffle ? "secondary" : "primary"} />
          </div>
          <div>
            <button
              className="bg-white border-1 border-gray-200 h-8 rounded-lg w-8 mt-1 pointer"
              onClick={handleButtonClick}
            >
              <img src="/img/SVGs/shuffle.svg" alt="suffle colors icon" />
            </button>
          </div>
          <div>
            <ColorPicker target={shuffle ? "primary" : "secondary"} />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
