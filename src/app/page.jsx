import Image from "next/image";
import vd from "../../public/rasmlar/video.png";
import sss from "../../public/sss.svg";

const page = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="header__wrapper py-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M8.87991 1.08803L1 1V30.9659H8.28692L23.7816 11.7124V21.6515L17.3759 24.0993L23.7984 31H31V1.00004H23.7849L16.2506 10.8942L8.87991 1.08803Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.6618 16.9684L8.28589 21.4113V12.5213L11.6618 16.9684Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </g>
            </svg>

            <h1 className="mt-[145px]">
              Abdukarim Mirzayev <br /> bilan <span>storytelling</span> kursi...
            </h1>
            <p>
              Ushbu kurs yordamida jozibali gapirish, sahnada va kamera
              qarshisida hayajonlanmaslik, vizual kompozitsiya va ovozlashtirish
              sirlarini bilib olasiz.
            </p>

            <button>
              <span>Guruhga qo’shilish</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
              >
                <g clip-path="url(#clip0_12_26)">
                  <path
                    d="M3.95825 7.5H15.0416"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.2917 11.25L15.0417 7.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.2917 3.75L15.0417 7.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_26">
                    <rect width="19" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="video">
        <div classNmae="container">
          <div
            classNmae="about__wrapper"
            style={{ marginTop: "80px", marginBottom: "80px" }}
          >
            <Image
              src={vd}
              alt="Picture of the author"
              height={565}
              quality={100}
              className="mx-auto relative"
            />

            <button className="absolute top-[115%] left-[47%] p-6 rounded-[100%] bg-[rgba(0,0,0,0.75)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <g clip-path="url(#clip0_14_17)">
                  <path
                    d="M14.5833 8.33333V41.6667L41.6666 25L14.5833 8.33333Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_17">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="course">
        <div className="container mx-auto">
          <div className="course__wrapper">
            <div className="c__card">
              <Image
                src={sss}
                alt="Picture of the author"
                height={73}
                width={67}
                quality={100}
                className="mx-auto relative"
              />
              <div className="c__card--title">
                <p>
                  Kursning
                  <span>
                    <br /> davomiyligi 1 oy
                  </span>
                </p>
              </div>
            </div>

            <div className="c__card">
              <Image
                src={sss}
                alt="Picture of the author"
                height={73}
                width={67}
                quality={100}
                className="mx-auto relative"
              />
              <div className="c__card--title">
                <p>
                  Kursning
                  <span>
                    <br /> davomiyligi 1 oy
                  </span>
                </p>
              </div>
            </div>

            <div className="c__card">
              <Image
                src={sss}
                alt="Picture of the author"
                height={73}
                width={67}
                quality={100}
                className="mx-auto relative"
              />
              <div className="c__card--title">
                <p>
                  Kursning
                  <span>
                    <br /> davomiyligi 1 oy
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid1">
        <div className="container mx-auto">
          <div className="grid__wrapper angry-grid">
            <div className="item-0 grid__">
              <h2>— 01 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-1 grid__">
              <h2>— 02 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-2 grid__">
              <h2>— 03 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-3 grid__">
              <h2>— 01 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-4 grid__">
              <h2>— 01 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-5 grid__">
              <h2>— 01 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-6 grid__">
              <h2>— 01 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-7 grid__">
              <h2>— 01 dars</h2>
              <h1>Storytelling nima?</h1>
              <p>
                — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
                sarguzasht kabi asosiy tushunchalar haqida toxtalamiz.
              </p>
            </div>

            <div className="item-8 grid__">
              <button>
                <span>Guruhga qo’shilish</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_12_26)">
                    <path
                      d="M3.95825 7.5H15.0416"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2917 11.25L15.0417 7.5"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2917 3.75L15.0417 7.5"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_26">
                      <rect width="19" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <p>
                Ushbu tugmani bosish orqali kursning Telegramdagi saralash
                guruhiga azo bolasiz →
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container mx-auto">
          <div className="footer__wrapper">
            <h1>
              O’quvchilarimizning <span>kurs haqidagi fikrlari</span>
            </h1>
            <p>
              Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish
              imkonini bergan Robbimga hamdlar bolsin! Mening nazarimda bu
              bilimlar hozirgi kunda juda muhim.
            </p>

            <p>
              Darsda otilgan mavzulardan foydalanib bir sifatli video, audio,
              tekst, va hkz tayyorlasa tinglovchi va koruvchilarga yaxshi
              mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan
              bo’lardilar deb oylayman.
            </p>
            <h3>Baxrom Abduqayyum</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
