import Artist from "./Artist";
import Releases from "./Releases";

export default function Landing() {
  return (
    <section className="p-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="shadow-2xl rounded-xl border-1 border-gray-50 overflow-hidden">
          <section className="px-6 py-4 flex gap-2 bg-white border-b-1 border-gray-200 justify-end items-center">
            {/*<button className="cursor-pointer" type="button">
              <img src="/img/SVGs/full-screen.svg" alt="Full screen icon" />
            </button>*/}
          </section>
          <div className="overflow-visible relative">
            <Artist />
            <Releases />
            <section></section>
          </div>
        </div>
      </div>
    </section>
  );
}
