const {
  useEffect,
  useRef,
  useState
} = React;

const stats = [
  {
    value: "92%",
    text: (
      <>
        visual attention
        <br />
        designed into the first frame
      </>
    )
  },

  {
    value: "3.4×",
    text: (
      <>
        more motion moments
        <br />
        as the page unfolds
      </>
    )
  },

  {
    value: "100%",
    text: (
      <>
        scroll-driven
        <br />
        interaction model
      </>
    )
  }
];


const features = [
  {
    number: "01",

    title: "Premium motion",

    text:
      "Transform-first animation keeps movement fluid and avoids unnecessary layout work."
  },

  {
    number: "02",

    title: "Responsive by design",

    text:
      "The composition adapts for smaller screens while preserving the scroll narrative."
  },

  {
    number: "03",

    title: "Dynamic storytelling",

    text:
      "Each section has its own reveal range, creating a living page rather than a static stack."
  }
];

function Nav() {
  return (
    <nav
      className="
        fixed
        inset-x-0
        top-0
        z-20
        flex
        h-[76px]
        items-center
        justify-between
        px-[5vw]
      "
    >

      <div
        className="
          text-[13px]
          font-extrabold
          tracking-[.24em]
        "
      >
        ITZ FIZZ
      </div>


      <span
        className="
          text-[11px]
          tracking-[.18em]
          text-muted
        "
      >
        SCROLL / EXPLORE
      </span>

    </nav>
  );
}
function ProgressBar({ progress }) {
  return (
    <div
      className="
        fixed
        right-[22px]
        top-1/2
        z-30
        h-[100px]
        w-px
        -translate-y-1/2
        bg-white/10
      "
    >

      <i
        className="
          block
          w-px
          bg-fizz
          transition-[height]
          duration-75
        "
        style={{
          height: `${progress * 100}%`
        }}
      />

    </div>
  );
}

function Hero({ orbRef }) {

  const headline =
    "W E L C O M E   I T Z   F I Z Z";


  return (
    <section
      className="
        relative
        h-[160vh]
        md:h-[180vh]
      "
      id="hero"
    >

      <div
        className="
          sticky
          top-0
          flex
          h-screen
          items-start
          overflow-hidden
          pt-[17vh]
          md:items-center
          md:pt-0
        "
      >

        <div
          className="
            relative
            z-[2]
            mx-auto
            w-[88vw]
            max-w-[1440px]
            md:w-[90vw]
          "
        >

          {/* Small heading */}

          <div
            className="
              hero-item
              mb-7
              translate-y-0
              text-[11px]
              tracking-[.28em]
              text-fizz
              opacity-0
            "
          >
            DIGITAL EXPERIENCE / 01
          </div>


          {/* Main headline */}

          <h1
            className="
              max-w-[1200px]
              text-[clamp(48px,9.3vw,150px)]
              font-[750]
              uppercase
              leading-[.87]
              tracking-[.08em]
            "
            aria-label="Welcome Itz Fizz"
          >

            {headline
              .split("")
              .map((char, index) => (

                <span
                  key={index}
                  className="
                    hero-letter
                    inline-block
                    translate-y-[50px]
                    rotate-[2deg]
                    opacity-0
                  "
                  style={{
                    transitionDelay:
                      `${index * 0.025}s`
                  }}
                >
                  {char === " "
                    ? "\u00A0"
                    : char}
                </span>

              ))}

          </h1>


          {/* Description */}

          <p
            className="
              hero-item
              mt-[34px]
              max-w-[520px]
              translate-y-[18px]
              text-[15px]
              leading-[1.7]
              text-muted
              opacity-0
            "
          >
            A scroll-led landing experience where
            motion is controlled by your hand, not a
            timer. Keep moving to reveal the story —
            scroll back to reverse it.
          </p>


          {/* Statistics */}

          <div
            className="
              mt-[42px]
              flex
              flex-wrap
              gap-0
              md:gap-[10px]
            "
          >

            {stats.map((stat, index) => (

              <div
                key={stat.value}
                className="
                  hero-stat
                  min-w-1/2
                  translate-y-[26px]
                  border-t
                  border-white/[.12]
                  px-0
                  py-[18px]
                  pb-4
                  opacity-0
                  md:min-w-[155px]
                  md:px-[18px]
                "
                style={{
                  transitionDelay:
                    `${index * 110}ms`
                }}
              >

                <b
                  className="
                    block
                    text-[28px]
                    tracking-[-.04em]
                  "
                >
                  {stat.value}
                </b>


                <small
                  className="
                    mt-[5px]
                    block
                    text-[11px]
                    leading-[1.4]
                    text-muted
                  "
                >
                  {stat.text}
                </small>

              </div>

            ))}

          </div>

        </div>


        {/* Animated orb */}

        <div
          ref={orbRef}
          className="
            orb
            absolute
            right-[-14vw]
            top-[63%]
            z-[1]
            aspect-square
            w-[68vw]
            rounded-full
            opacity-70
            md:right-[4vw]
            md:top-1/2
            md:w-[min(38vw,520px)]
            md:-translate-y-1/2
            md:opacity-100
          "
        />


        {/* Scroll indicator */}

        <div
          className="
            absolute
            bottom-7
            left-[6vw]
            flex
            items-center
            gap-3
            text-[10px]
            tracking-[.18em]
            text-muted
            md:left-[5vw]
          "
        >

          <span
            className="
              h-px
              w-12
              bg-white/[.12]
            "
          />

          SCROLL TO BEGIN

        </div>

      </div>

    </section>
  );
}

function Visual() {

  const visualRef =
    useRef(null);

  const ringRef =
    useRef(null);

  const coreRef =
    useRef(null);


  useEffect(() => {

    visualRef.current.ring =
      ringRef.current;

    visualRef.current.core =
      coreRef.current;

  }, []);


  return (
    <div
      ref={visualRef}
      className="
        visual
        relative
        h-[360px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/[.12]
        md:h-[520px]
      "
    >

      {/* Ring */}

      <div
        ref={ringRef}
        className="
          absolute
          left-[15%]
          top-[15%]
          aspect-square
          w-[70%]
          rounded-full
          border
          border-fizz/35
        "
      />


      {/* Core */}

      <div
        ref={coreRef}
        className="
          absolute
          left-[34%]
          top-[34%]
          aspect-square
          w-[32%]
          rounded-full
          bg-fizz
          shadow-[0_0_80px_rgba(217,255,90,.3)]
        "
      />

    </div>
  );
}

function StorySection({
  number,
  title,
  children,
  reverse = false
}) {

  return (
    <section
      className="
        reveal
        min-h-screen
        border-t
        border-white/[.12]
        px-[6vw]
        py-[13vh]
        md:px-[5vw]
      "
    >

      <div
        className="
          mx-auto
          grid
          w-[90vw]
          max-w-[1440px]
          items-center
          gap-[45px]
          md:grid-cols-2
          md:gap-[8vw]
        "
      >

        {reverse ? (

          <Visual />

        ) : (

          <div>

            <div
              className="
                text-[10px]
                tracking-[.25em]
                text-fizz
              "
            >
              {number}
            </div>


            <h2
              className="
                my-[18px]
                mb-6
                text-[clamp(40px,6vw,90px)]
                leading-[.94]
                tracking-[-.045em]
              "
            >
              {title}
            </h2>


            <p
              className="
                max-w-[510px]
                text-base
                leading-[1.75]
                text-muted
              "
            >
              {children}
            </p>

          </div>

        )}


        {reverse ? (

          <div>

            <div
              className="
                text-[10px]
                tracking-[.25em]
                text-fizz
              "
            >
              {number}
            </div>


            <h2
              className="
                my-[18px]
                mb-6
                text-[clamp(40px,6vw,90px)]
                leading-[.94]
                tracking-[-.045em]
              "
            >
              {title}
            </h2>


            <p
              className="
                max-w-[510px]
                text-base
                leading-[1.75]
                text-muted
              "
            >
              {children}
            </p>

          </div>

        ) : (

          <Visual />

        )}

      </div>

    </section>
  );
}

function FeatureCards() {

  return (
    <section
      className="
        reveal
        min-h-screen
        border-t
        border-white/[.12]
        px-[5vw]
        py-[13vh]
        md:flex
        md:items-center
      "
    >

      <div
        className="
          mx-auto
          grid
          w-[90vw]
          max-w-[1440px]
          gap-[14px]
          md:grid-cols-3
        "
      >

        {features.map((feature) => (

          <article
            key={feature.number}
            className="
              min-h-[280px]
              rounded-[24px]
              border
              border-white/[.12]
              bg-card
              p-[30px]
            "
          >

            <i
              className="
                not-italic
                text-xs
                tracking-[.16em]
                text-fizz
              "
            >
              {feature.number}
            </i>


            <h3
              className="
                mt-[55px]
                mb-3
                text-[25px]
              "
            >
              {feature.title}
            </h3>


            <p
              className="
                text-sm
                leading-[1.6]
                text-muted
              "
            >
              {feature.text}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}

function FinalSection() {

  return (
    <section
      className="
        reveal
        flex
        min-h-[80vh]
        items-center
        justify-center
        border-t
        border-white/[.12]
        px-[5vw]
        text-center
      "
    >

      <div>

        <div
          className="
            text-[10px]
            tracking-[.25em]
            text-fizz
          "
        >
          04 / END FRAME
        </div>


        <h2
          className="
            mt-4
            text-[clamp(52px,10vw,150px)]
            leading-[.85]
            tracking-[-.05em]
          "
        >
          KEEP
          <br />
          SCROLLING.
        </h2>


        <p
          className="
            mt-[30px]
            text-muted
          "
        >
          And scroll back up — the experience rewinds.
        </p>

      </div>

    </section>
  );
}

function App() {

  const orbRef =
    useRef(null);

  const [progress, setProgress] =
    useState(0);


  useEffect(() => {

    const letters =
      document.querySelectorAll(".hero-letter");

    const heroItems =
      document.querySelectorAll(".hero-item");

    const statItems =
      document.querySelectorAll(".hero-stat");


    requestAnimationFrame(() => {

      /* Small heading */

      heroItems[0].style.transition =
        "opacity .8s ease, transform .8s ease";

      heroItems[0].style.opacity =
        "1";

      heroItems[0].style.transform =
        "translateY(0)";


      /* Headline letters */

      letters.forEach((letter) => {

        letter.style.transition =
          "opacity .65s cubic-bezier(.2,.7,.2,1), transform .65s cubic-bezier(.2,.7,.2,1)";

        letter.style.opacity =
          "1";

        letter.style.transform =
          "translateY(0) rotate(0)";

      });


      /* Description + statistics */

      setTimeout(() => {

        heroItems[1].style.transition =
          "opacity .8s ease, transform .8s ease";

        heroItems[1].style.opacity =
          "1";

        heroItems[1].style.transform =
          "translateY(0)";


        statItems.forEach((stat) => {

          stat.style.transition =
            "opacity .65s ease, transform .65s cubic-bezier(.2,.7,.2,1)";

          stat.style.opacity =
            "1";

          stat.style.transform =
            "translateY(0)";

        });

      }, 500);

    });

    let target = 0;

    let current = 0;

    let frameId;


    const clamp = (
      value,
      min = 0,
      max = 1
    ) =>
      Math.max(
        min,
        Math.min(max, value)
      );


    /* Calculate scroll progress */

    const updateTarget = () => {

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;


      target =
        maxScroll > 0
          ? clamp(
              window.scrollY /
                maxScroll
            )
          : 0;


      setProgress(target);

    };


    /* Smooth animation loop */

    const animate = () => {

      current +=
        (target - current) *
        0.085;


      /* Main orb */

      if (orbRef.current) {

        orbRef.current.style.transform = `
          translate3d(
            ${current * 34}px,
            calc(-50% + ${current * 130}px),
            0
          )
          scale(${0.9 + current * 0.2})
          rotate(${current * 35}deg)
        `;


        orbRef.current.style.filter =
          `saturate(${1.05 + current * 0.5}) brightness(${1 + current * 0.08})`;

      }


      /* Reveal sections */

      document
        .querySelectorAll(".reveal")
        .forEach((section) => {

          const rect =
            section.getBoundingClientRect();


          const local =
            clamp(
              (
                window.innerHeight *
                0.86 -
                rect.top
              ) /
              (
                window.innerHeight *
                0.72
              )
            );


          section.style.opacity =
            local;


          section.style.transform = `
            translate3d(
              0,
              ${(1 - local) * 70}px,
              0
            )
            scale(
              ${0.97 + local * 0.03}
            )
          `;

        });


      /* Story visuals */

      document
        .querySelectorAll(".visual")
        .forEach((visual) => {

          const rect =
            visual.getBoundingClientRect();


          const local =
            clamp(
              (
                window.innerHeight *
                0.92 -
                rect.top
              ) /
              (
                window.innerHeight *
                0.9
              )
            );


          if (visual.ring) {

            visual.ring.style.transform =
              `rotate(${local * 140}deg) scale(${0.7 + local * 0.3})`;

          }


          if (visual.core) {

            visual.core.style.transform =
              `scale(${0.75 + local * 0.5})`;

          }

        });


      frameId =
        requestAnimationFrame(
          animate
        );

    };


    /* Event listeners */

    window.addEventListener(
      "scroll",
      updateTarget,
      {
        passive: true
      }
    );


    window.addEventListener(
      "resize",
      updateTarget
    );


    updateTarget();

    animate();


    /* Cleanup */

    return () => {

      window.removeEventListener(
        "scroll",
        updateTarget
      );

      window.removeEventListener(
        "resize",
        updateTarget
      );

      cancelAnimationFrame(
        frameId
      );

    };

  }, []);


  return (
    <div
      className="
        min-h-screen
        bg-night
      "
    >

      {/* Noise */}

      <div className="noise" />


      {/* Navigation */}

      <Nav />


      {/* Scroll progress */}

      <ProgressBar
        progress={progress}
      />


      <main>

        {/* Hero */}

        <Hero
          orbRef={orbRef}
        />


        {/* Movement */}

        <StorySection
          number="02 / MOVEMENT"
          title={
            <>
              Scroll becomes
              <br />
              the timeline.
            </>
          }
        >
          The next chapter does not wait for an autoplay
          clock. Scroll position is the input, so every
          frame can be scrubbed forward or backward
          naturally.
        </StorySection>


        {/* Reveal */}

        <StorySection
          number="03 / REVEAL"
          title={
            <>
              More content.
              <br />
              More depth.
            </>
          }
          reverse
        >
          Cards, copy, visuals and details arrive
          progressively. Reverse your scroll and the
          same content retreats with the same continuity.
        </StorySection>


        {/* Features */}

        <FeatureCards />


        {/* Final */}

        <FinalSection />

      </main>

    </div>
  );
}

ReactDOM
  .createRoot(
    document.getElementById("root")
  )
  .render(
    <App />
  );