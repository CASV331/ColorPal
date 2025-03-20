import { useColors } from "../../context/colorContext";
import { useShuffle } from "../../context/shuffleContext";

function Artist() {
  const { colors } = useColors();
  const { shuffle } = useShuffle();
  return (
    <section
      className="overflow-hidden relative pt-10"
      style={{
        isolation: "isolate",
        background: shuffle ? colors.secondary : colors.primary,
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="">
          <h2
            className="text-7xl sm:text-8xl font-bold text-center"
            style={{
              color: shuffle ? colors.primary : colors.secondary,
            }}
          >
            𝕶𝖊𝖓𝖉𝖗𝖎𝖈𝖐 𝕷𝖆𝖒𝖆𝖗
          </h2>
        </div>
        <div className="h-[250px] sm:h-[300px] md:h-[500px] relative flex justify-center">
          <img
            className="absolute -top-[10%] sm:-top-[15%] md:-top-[5%] max-w-[500px] md:max-w-[800px]"
            src="/img/WebImages/kendrick-lamar.png"
            alt="Kendrick lamar's photo sitting looking straight"
            loading="eager"
          />
        </div>
        <div
          className="pb-10 text-lg relative z-1"
          style={{
            color: shuffle ? colors.secondary : colors.primary,
          }}
        >
          <span className="float-left mr-4 font-medium">About Kendrick</span>
          <p className="text-left font-light">
            One of hip-hop’s most influential rappers known for the songs
            “Alright,” “HUMBLE.” and “Not Like Us.” After writing stories as a
            child, the Southern California native who started rapping under the
            name K-Dot put music to some lyrics about the rough Compton streets
            he grew up on.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 pointer-events-none h-[320px] md:h-[200px] blur-[60px] -bottom-[120px] sm:-bottom-[30px] md:-bottom-[70px"
        style={{
          background: shuffle ? colors.primary : colors.secondary,
        }}
      ></div>
      <div
        className="absolute inset-x-0 pointer-events-none h-[360px] blur-[60px] -bottom-20 sm:-bottom-64 md:-bottom-40"
        style={{
          background: shuffle ? colors.primary : colors.secondary,
        }}
      ></div>
    </section>
  );
}

export default Artist;
