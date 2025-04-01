import { useColors } from "../../context/colorContext";
import { useShuffle } from "../../context/shuffleContext";
import { releases } from "../../const/releases";

function Releases() {
  const { colors } = useColors();
  const { shuffle } = useShuffle();

  const releasesList = releases.slice(1);
  const mainRelease = releases[0];

  return (
    <section
      className="py-10"
      style={{
        background: shuffle ? colors.secondary : colors.primary,
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="md:flex gap-8 justify-between">
          <h2
            className="text-5xl font-bold sm:text-7xl mb-4"
            style={{
              color: shuffle ? colors.primary : colors.secondary,
            }}
          >
            Top Songs
          </h2>
          <div className="md:w-6/12">
            <p
              className="text-lg font-light mb-8"
              style={{ color: shuffle ? colors.primary : colors.secondary }}
            >
              Feel the energy of their music and prepare to be taken on an
              unforgettable journey through the most vibrant and exicting sounds
              in the world of rap music.
            </p>
            <button
              className="uppercase py-2 w-56 border-1 rounded-lg font-bold text-lg"
              style={{
                color: shuffle ? colors.secondary : colors.primary,
                background: shuffle ? colors.primary : colors.secondary,
              }}
            >
              View all Releases
            </button>
          </div>
        </div>
        <div className="md:flex mt-10">
          <div className="md:w-6/12 pr-[4%]">
            <MainRelease {...mainRelease} />
          </div>
          <div className="mt-10 md:mt-0 md:w-6/12 grid gap-8 auto-rows-max">
            {releasesList.map(({ id, author, tittle, img }) => (
              <CompactReleases
                key={id}
                tittle={tittle}
                author={author}
                img={img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MainRelease({ tittle, author, img }) {
  const { colors } = useColors();
  const { shuffle } = useShuffle();
  return (
    <article>
      <figure className="aspect-square">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={img}
          alt="Abum cover"
        />
      </figure>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between mt-6">
          <div>
            <h3
              className="font-bold text-3xl"
              style={{ color: shuffle ? colors.primary : colors.secondary }}
            >
              {tittle}
            </h3>
            <p
              className="font-light text-lg"
              style={{ color: shuffle ? colors.primary : colors.secondary }}
            >
              {author}
            </p>
          </div>
          <figure className="w-6 h-6">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                stroke={shuffle ? colors.primary : colors.secondary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </figure>
        </div>
        <div
          className="w-full h-2 relative"
          style={{
            background: `${shuffle ? colors.primary : colors.secondary}4D`,
          }}
        >
          <span
            className="block h-full top-0 w-[60%] opacity-100"
            style={{ background: shuffle ? colors.primary : colors.secondary }}
          />
        </div>
        <div
          className="flex justify-between"
          style={{ color: shuffle ? colors.primary : colors.secondary }}
        >
          <span>2:15</span>
          <span>4:35</span>
        </div>
      </section>
    </article>
  );
}

function CompactReleases({ tittle, author, img }) {
  const { colors } = useColors();
  const { shuffle } = useShuffle();
  return (
    <article className="grid grid-cols-[64px_1fr_auto] h-max items-center">
      <figure className="aspect-square">
        <img
          className="object-cover rounded-lg w-full h-full"
          src={img}
          alt="Album cover"
        />
      </figure>
      <div className="px-6 truncate">
        <h4
          className="text-lg font-bold"
          style={{ color: shuffle ? colors.primary : colors.secondary }}
        >
          {tittle}
        </h4>
        <p
          className="font-light"
          style={{ color: shuffle ? colors.primary : colors.secondary }}
        >
          {author}
        </p>
      </div>
      <div className="flex gap-2">
        {/* Play icon */}
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
            stroke={shuffle ? colors.primary : colors.secondary}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Dots vertical */}
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
            stroke={shuffle ? colors.primary : colors.secondary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </article>
  );
}

export default Releases;
