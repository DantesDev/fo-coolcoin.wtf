(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5608],
  {
    6547: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 9433)),
        Promise.resolve().then(s.t.bind(s, 90413, 23)),
        Promise.resolve().then(s.t.bind(s, 68326, 23)),
        Promise.resolve().then(s.bind(s, 49142)),
        Promise.resolve().then(s.bind(s, 18930)),
        Promise.resolve().then(s.bind(s, 30798)),
        Promise.resolve().then(s.bind(s, 27480)),
        Promise.resolve().then(s.bind(s, 28549)),
        Promise.resolve().then(s.bind(s, 86036)),
        Promise.resolve().then(s.bind(s, 31702)),
        Promise.resolve().then(s.bind(s, 66542));
    },
    49142: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CopyAddress: function () {
            return CopyAddress;
          },
          default: function () {
            return useCopyToClipboard;
          },
        });
      var i = s(57437),
        l = s(2265),
        a = s(29172),
        r = s(5925),
        n = s(2390),
        o = s.n(n);
      function useCopyToClipboard() {
        let [e, t] = (0, l.useState)(""),
          [s, i] = (0, l.useState)();
        return [
          (e, s) => {
            let l = o()(e, s);
            l && t(e), i(l);
          },
          { value: e, success: s },
        ];
      }
      let CopyAddress = (e) => {
        let { address: t, shouldOnlyCopy: s } = e,
          [l] = useCopyToClipboard();
        return (0, i.jsxs)("span", {
          onClick: () => {
            l(t), r.ZP.success("Copied");
          },
          className: "block gap-4 break-all break-words cursor-pointer",
          children: [
            !s &&
              (0, i.jsx)("a", {
                target: "_blank",
                href: "#",
                rel: "noopener noreferrer",
                className: "no-underline",
                children: t,
              }),
            s && t,
            (0, i.jsx)(a.esY, {
              className: "inline-block ml-3 -mt-1 cursor-pointer",
              color: "#000",
              size: 13,
            }),
          ],
        });
      };
    },
    18930: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          AboutUs: function () {
            return AboutUs;
          },
        });
      var i = s(57437),
        l = s(9433),
        a = s(16691),
        r = s.n(a);
      s(2265);
      var n = s(58374);
      let AboutUs = () =>
        (0, i.jsxs)(l.Container, {
          id: "about",
          size: 1044,
          className:
            "relative pt-[20px] pb-[20px] sm:pt-[50px] sm:pb-[30px] md:pt-[50px] md:pb-[80px]",
          children: [
            (0, i.jsxs)("div", {
              className: "grid lg:grid-cols-[1.5fr,1fr,1fr] gap-8 md:gap-20",
              children: [
                (0, i.jsx)("div", {
                  className: "flex items-center justify-center",
                  children: (0, i.jsx)(r(), {
                    src: n.$1.leftImg,
                    height: 360,
                    width: 360,
                    className: " w-full max-w-[360px] h-auto",
                    alt: "",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "lg:col-span-2",
                  children: (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "font-bold text-center md:text-left text-[17px] leading-[25.5px] text-primaryPink font-helvatica-neue ",
                        style: {},
                        children: n.$1.title,
                      }),
                      (0, i.jsx)("div", {
                        className:
                          " pt-0 pb-3 relative flex   flex-wrap items-end gap-5",
                        children: (0, i.jsx)(r(), {
                          className: "max-w-[599px] w-full h-auto",
                          src: "/what-is-cool.svg",
                          alt: "what is cool",
                          width: 599,
                          height: 113,
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: " max-w-full  lg:max-w-[560px] w-full pb-3",
                        children: [
                          (0, i.jsx)("p", {
                            className:
                              "font-normal font-helvatica-neue pb-0  text-[17px] leading-[23.8px] text-white mt-3 mb-8",
                            style: {},
                            children: n.$1.desc,
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "font-normal font-helvatica-neue  text-[17px] leading-[23.8px] text-white",
                            style: {},
                            children: n.$1.desc2,
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "   relative flex     lg:items-center justify-between",
                        children: (0, i.jsx)(r(), {
                          className:
                            "absolute bottom-[-1rem] hidden lg:block right-[-10rem]",
                          src: n.$1.rocket,
                          height: 80,
                          width: 121,
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)(r(), {
              className: "absolute top-12 -right-32",
              src: "/elements/star.svg",
              alt: "star",
              width: 24,
              height: 24,
            }),
            (0, i.jsx)(r(), {
              className: "absolute top-16 -right-0",
              src: "/elements/circle.svg",
              alt: "star",
              width: 6,
              height: 6,
            }),
            (0, i.jsx)(r(), {
              className: "absolute -right-12 bottom-20",
              src: "/elements/circle.svg",
              alt: "star",
              width: 6,
              height: 6,
            }),
            (0, i.jsx)(r(), {
              className: "absolute -left-32 bottom-8",
              src: "/elements/star.svg",
              alt: "star",
              width: 24,
              height: 24,
            }),
            (0, i.jsx)(r(), {
              className: "absolute -left-16 bottom-40",
              src: "/elements/circle.svg",
              alt: "star",
              width: 6,
              height: 6,
            }),
          ],
        });
    },
    30798: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          BuySection: function () {
            return BuySection;
          },
        });
      var i = s(57437),
        l = s(9433),
        a = s(60271),
        r = s(16691),
        n = s.n(r);
      s(2265);
      var o = s(63238),
        c = s(61396),
        d = s.n(c),
        m = s(58374);
      s(27361);
      var h = s(52629);
      let BuySection = () =>
        (0, i.jsxs)("div", {
          id: "how-to-buy",
          className: "relative py-[40px] mt-4 sm:py-[50px] md:py-[80px]",
          children: [
            (0, i.jsxs)(l.Container, {
              size: m.vb,
              className: "  ",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex gap-4 justify-center md:justify-between items-end pb-4",
                  children: [
                    (0, i.jsx)(n(), {
                      className:
                        "w-full h-auto sm:max-w-[500px] lg:max-w-[800px] xl:max-w-[1055px]",
                      src: "/how-to-be-cool.svg",
                      width: 1055,
                      height: 290,
                      alt: "how to be cool",
                    }),
                    (0, i.jsx)("div", {
                      className: "hidden md:block",
                      children: (0, i.jsx)(a.z, {
                        component: d(),
                        href: "https://app.uniswap.org/swap?outputCurrency=0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
                        target: "_blank",
                        classNames: { inner: "-mt-1.5" },
                        className:
                          "!text-[24px] mt-3 mb-[30px] lg:mb-[56px] !w-[170px] !h-[55px] !font-[400]  leading-[36px] tracking-[2px]  ",
                        variant: "filled",
                        color: "#C86FFF",
                        size: "lg",
                        radius: 40,
                        style: {
                          border: "1px solid #282828",
                          boxShadow: "0px 4px 0px 0px #282828",
                          fontFamily: "".concat(h.rk, " !important"),
                        },
                        children: "Buy Now",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "md:hidden flex items-center justify-center mb-4",
                  children: (0, i.jsx)(a.z, {
                    component: d(),
                    href: "https://app.uniswap.org/swap?outputCurrency=0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
                    className:
                      "text-[24px] my-3  leading-[36px] font-normal tracking-[2px]  ",
                    variant: "filled",
                    color: "#C86FFF",
                    size: "lg",
                    radius: 40,
                    classNames: { inner: "-mt-1.5" },
                    style: {
                      border: "1px solid #282828",
                      boxShadow: "0px 4px 0px 0px #282828",
                      fontFamily: "".concat(h.rk, " !important"),
                    },
                    children: "Buy Now",
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "py-3 max-w-[1530px] mx-auto",
              children: (0, i.jsx)("div", {
                className: " mx-3 md:mx-6 0",
                children: (0, i.jsx)(o.l, {
                  containScroll: "keepSnaps",
                  align: "start",
                  slideSize: "auto",
                  style: { flex: 1, height: "100%" },
                  slideGap: "md",
                  dragFree: !0,
                  withControls: !1,
                  children: m.gK.details.map((e, t) =>
                    (0, i.jsx)(
                      o.l.Slide,
                      {
                        children: (0, i.jsxs)(
                          "div",
                          {
                            className:
                              "card h-[92%] mx-0 mt-[40px] lg:w-[364px] w-full rounded-[20px] px-3 pt-3 pb-0 flex flex-col justify-between items-center relative",
                            style: { background: e.bg },
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "h-[40px] w-[100px] font-helvatica-neue flex justify-center !text-[19px] !text-[#282828] absolute top-[-21px] items-center bg-[#F4F4F4] rounded-[20px]",
                                style: { border: "1px solid #282828" },
                                children: e.step,
                              }),
                              (0, i.jsx)("h1", {
                                className:
                                  "mb-0 font-helvatica-neue font-normal max-w-[203px] w-full text-[28px] text-center leading-[1.1] text-textColor",
                                style: {},
                                children: e.title,
                              }),
                              (0, i.jsx)("div", {
                                className: "".concat(
                                  t === m.gK.details.length - 1
                                    ? "break-all"
                                    : "",
                                  " mt-4 mb-2 font-helvatica-neue text-textColor font-normal text-center text-[15px] leading-[17.89px] max-w-[290px] w-full"
                                ),
                                style: {},
                                children: e.desc,
                              }),
                              (0, i.jsx)(n(), {
                                priority: !0,
                                src: e.img.src,
                                height: e.img.height,
                                width: e.img.width,
                                className: "w-auto h-auto",
                                alt: " ",
                              }),
                            ],
                          },
                          t
                        ),
                      },
                      t
                    )
                  ),
                }),
              }),
            }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(n(), {
                  className: "hidden md:block absolute top-12 right-32",
                  src: "/elements/star-outline.svg",
                  alt: "star",
                  width: 22,
                  height: 22,
                }),
                (0, i.jsx)(n(), {
                  className:
                    "hidden md:block absolute top-[21rem] right-[16rem]",
                  src: "/elements/circle.svg",
                  alt: "star",
                  width: 6,
                  height: 6,
                }),
                (0, i.jsx)(n(), {
                  className: "hidden md:block absolute top-[4rem] left-[15rem]",
                  src: "/elements/star.svg",
                  alt: "star",
                  width: 22,
                  height: 22,
                }),
                (0, i.jsx)(n(), {
                  className: "hidden md:block absolute top-[1rem] left-[9rem]",
                  src: "/elements/circle.svg",
                  alt: "star",
                  width: 6,
                  height: 6,
                }),
                (0, i.jsx)(n(), {
                  className:
                    "hidden md:block absolute bottom-[4rem] left-[10rem]",
                  src: "/elements/star.svg",
                  alt: "star",
                  width: 10,
                  height: 10,
                }),
                (0, i.jsx)(n(), {
                  className:
                    "hidden md:block absolute bottom-[6rem] left-[50%]",
                  src: "/elements/circle.svg",
                  alt: "circle",
                  width: 6,
                  height: 6,
                }),
                (0, i.jsx)(n(), {
                  className:
                    "hidden md:block absolute bottom-[3rem] left-[60%]",
                  src: "/elements/star.svg",
                  alt: "star",
                  width: 20,
                  height: 20,
                }),
                (0, i.jsx)(n(), {
                  className:
                    "hidden md:block absolute bottom-[2rem] right-[10%]",
                  src: "/elements/circle.svg",
                  alt: "circle",
                  width: 6,
                  height: 6,
                }),
              ],
            }),
          ],
        });
    },
    28549: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Hero: function () {
            return Hero;
          },
        });
      var i = s(57437),
        l = s(9433),
        a = s(16691),
        r = s.n(a),
        n = s(2265),
        o = s(97387),
        c = s(58374),
        d = s(94932),
        m = s(57042),
        h = s(18170);
      function getRandomValue() {
        return 0.5 * Math.random() + 0.5;
      }
      let SoundWaves = (e) => {
          let { isPlaying: t } = e,
            [s, l] = (0, n.useState)(50),
            [a, r] = (0, n.useState)(80),
            [o, c] = (0, n.useState)(90);
          return (
            (0, n.useEffect)(() => {
              let e = setInterval(() => {
                if (t) {
                  let e = 100 * getRandomValue(),
                    t = 100 * getRandomValue(),
                    s = 100 * getRandomValue();
                  l(e), r(t), c(s);
                }
              }, 300);
              return t || clearInterval(e), () => clearInterval(e);
            }, [t]),
            (0, i.jsxs)("div", {
              className:
                "w-[10px] h-[16px] relative items-end flex justify-between",
              children: [
                (0, i.jsx)("div", {
                  style: { height: "".concat(s, "%") },
                  className: " w-[2px] bg-white",
                }),
                (0, i.jsx)("div", {
                  style: { height: "".concat(a, "%") },
                  className: " w-[2px] bg-white",
                }),
                (0, i.jsx)("div", {
                  style: { height: "".concat(o, "%") },
                  className: " w-[2px] bg-white",
                }),
              ],
            })
          );
        },
        useAudio = (e) => {
          let [t, s] = (0, n.useState)(null),
            [i, l] = (0, n.useState)(!1),
            toggle = () => l(!i);
          return (
            (0, n.useEffect)(() => {
              if (t) return;
              let i = new Audio(e);
              (i.loop = !0), s(i);
              let handleMouseMove = () => {
                toggle(),
                  document.body.removeEventListener("click", handleMouseMove);
              };
              return (
                document.body.addEventListener("click", handleMouseMove),
                () => {
                  document.body.removeEventListener("click", handleMouseMove),
                    s(null);
                }
              );
            }, []),
            (0, n.useEffect)(() => {
              console.log("audio", t, "this is already availble audio");
            }, []),
            (0, n.useEffect)(
              () => (
                t && (i ? null == t || t.play() : null == t || t.pause()),
                () => {
                  null == t || t.pause();
                }
              ),
              [i]
            ),
            (0, n.useEffect)(() => (t && (t.volume = 0.5), () => {}), [t]),
            [i, toggle]
          );
        },
        x = (0, n.forwardRef)((e, t) => {
          let { children: s, className: l, ...a } = e;
          return (0, i.jsx)(h.A, {
            radius: "xl",
            color: "#fff",
            variant: "outline",
            className: (0, m.Z)(
              "cursor-pointer !min-h-[auto] !min-w-[auto] !w-6 !h-6 flex items-center justify-center rounded-full border-2 border-solid border-white ",
              l
            ),
            ref: t,
            ...a,
            children: s,
          });
        }),
        SoundWidget = () => {
          let e = (0, n.useMemo)(() => "/resources/audio.mp3", []),
            [t, s] = useAudio(e),
            [l, a] = (0, n.useState)(!0);
          return (
            console.log("sound widget"),
            (0, i.jsx)("div", {
              className: "relative pr-4",
              children: (0, i.jsxs)("div", {
                className: "relative  z-10 flex items-end ",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex items-center justify-center z-10",
                    children: (0, i.jsx)(r(), {
                      className: "w-full h-auto max-w-[60px] md:max-w-[71px]",
                      src: "/audio-widget/l-img.svg",
                      alt: "audio widget",
                      width: 71,
                      height: 71,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "relative flex items-center h-[45px] md:h-[56px] bg-[#ff00b7] -ml-4 md:-ml-6 pl-6 md:pl-8 pr-3 md:pr-4 rounded-lg",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex items-center gap-2 md:gap-4",
                        children: [
                          (0, i.jsx)(SoundWaves, { isPlaying: t }),
                          l &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsxs)("div", {
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "m-0 font-bold text-[12px] md:text-[15px] font-helvatica-neue leading-[1]",
                                      children: c.I9.title,
                                    }),
                                    (0, i.jsx)("p", {
                                      className:
                                        "m-0 text-[12px] md:text-[15px] font-helvatica-neue leading-[1] text-[#FFCEF1]",
                                      children: c.I9.name,
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "scale-[0.8] md:scale-100 flex gap-2 items-center",
                                  children: [
                                    (0, i.jsx)(x, {
                                      children: (0, i.jsx)(d.oCz, { size: 10 }),
                                    }),
                                    (0, i.jsx)("div", {
                                      onClick: () => {
                                        s();
                                      },
                                      children: (0, i.jsxs)(x, {
                                        className: "!bg-white",
                                        children: [
                                          t &&
                                            (0, i.jsx)(d.tnh, {
                                              size: 10,
                                              color: "#ff57d7",
                                            }),
                                          !t &&
                                            (0, i.jsx)(d.u5, {
                                              size: 10,
                                              color: "#ff57d7",
                                              className: "ml-[2px]",
                                            }),
                                        ],
                                      }),
                                    }),
                                    (0, i.jsx)(x, {
                                      children: (0, i.jsx)(d.$mW, { size: 10 }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "absolute -top-3 -right-3",
                        children: (0, i.jsxs)(x, {
                          onClick: () => {
                            a((e) => !e);
                          },
                          variant: "filled",
                          className: "!border-2 !border-white !border-solid ",
                          color: "#ff00b7",
                          children: [
                            l && (0, i.jsx)(d.IOM, {}),
                            !l && (0, i.jsx)(d.Z2A, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Hero = () => {
          let e = (0, n.useRef)();
          return (0, i.jsx)(l.Container, {
            id: "home",
            size: c.vb,
            className: "relative",
            children: (0, i.jsxs)("div", {
              className:
                "mt-0 w-full flex justify-center items-center relative  overflow-hidden rounded-3xl ",
              children: [
                (0, i.jsx)(o.Z, {
                  style: { scale: 1.01 },
                  loop: !0,
                  controls: !1,
                  autoplay: !0,
                  muted: !0,
                  playsinline: !0,
                  playing: !0,
                  onReady: () => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.play();
                  },
                  src: "/hero-video.mp4",
                  fallBack: (0, i.jsx)(r(), {
                    priority: !0,
                    src: c.rP.img,
                    height: 1500,
                    width: 1500,
                    quality: 100,
                    className: " w-full h-auto",
                    alt: "",
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute z-20 bottom-[10px] left-[10px] md:bottom-[30px] md:left-[30px]",
                  children: (0, i.jsx)(SoundWidget, {}),
                }),
              ],
            }),
          });
        };
    },
    86036: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SliderSection: function () {
            return SliderSection;
          },
        });
      var i = s(57437),
        l = s(16691),
        a = s.n(l);
      s(2265);
      var r = s(68956),
        n = s(58374);
      let SliderSection = () =>
        (0, i.jsx)(r.Z, {
          children: (0, i.jsx)("div", {
            className: " ",
            children: (0, i.jsxs)("div", {
              className: "flex items-center gap-5",
              children: [
                (0, i.jsx)(a(), {
                  src: n.eD.berry,
                  height: 60,
                  width: 60,
                  alt: "bery",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "bg-[#87F8B8] rounded-[50px]  flex h-[48px] gap-[18px] items-center px-[30px]   justify-between",
                  children: [
                    (0, i.jsx)(a(), {
                      src: n.eD.star,
                      height: 16,
                      width: 16,
                      alt: "star",
                    }),
                    (0, i.jsx)("p", {
                      className: "font-normal text-[22px] text-blackText ",
                      style: { letterSpacing: "2%" },
                      children: n.eD.slide2,
                    }),
                    (0, i.jsx)(a(), {
                      src: n.eD.star,
                      height: 16,
                      width: 16,
                      alt: "star",
                    }),
                  ],
                }),
                (0, i.jsx)(a(), {
                  src: n.eD.bd,
                  height: 56,
                  width: 61,
                  alt: "relax 2",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "bg-[#7F80FF] rounded-[50px]  flex h-[48px] gap-[18px] items-center px-[30px]   justify-between",
                  children: [
                    (0, i.jsx)(a(), {
                      src: n.eD.star,
                      height: 16,
                      width: 16,
                      alt: "star",
                    }),
                    (0, i.jsx)("p", {
                      className: "font-normal text-[22px] text-blackText ",
                      style: { letterSpacing: "2%" },
                      children: n.eD.slide3,
                    }),
                    (0, i.jsx)(a(), {
                      src: n.eD.star,
                      height: 16,
                      width: 16,
                      alt: "star",
                    }),
                  ],
                }),
                (0, i.jsx)(a(), {
                  src: n.eD.laggy,
                  height: 100,
                  width: 100,
                  alt: "bery",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "bg-[#FF9AFF] rounded-[50px]  flex h-[48px] gap-[18px] items-center px-[30px]   justify-between",
                  children: [
                    (0, i.jsx)(a(), {
                      src: n.eD.star,
                      height: 16,
                      width: 16,
                      alt: "star",
                    }),
                    (0, i.jsx)("p", {
                      className: "font-normal text-[22px] text-blackText ",
                      style: { letterSpacing: "2%" },
                      children: n.eD.slide4,
                    }),
                    (0, i.jsx)(a(), {
                      src: n.eD.star,
                      height: 16,
                      width: 16,
                      alt: "star",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
    },
    31702: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Tokenomics: function () {
            return Tokenomics;
          },
        });
      var i = s(57437),
        l = s(9433),
        a = s(16691),
        r = s.n(a);
      s(2265);
      var n = s(52629),
        o = s(58374),
        c = s(49142);
      let Tokenomics = () =>
        (0, i.jsxs)("div", {
          id: "tokenomics",
          className: "py-3 px-4 md:min-h-[735px]  ",
          children: [
            (0, i.jsx)("div", {
              className:
                " py-[22px] md:my-8 relative flex justify-center  text-center flex-wrap items-end gap-5",
              children: (0, i.jsx)("h2", {
                className:
                  "   m-0 w-full text-[50px] md:text-[70px] font-normal uppercase leading-[59.5px] text-white",
                children: o.VR.title,
              }),
            }),
            (0, i.jsx)(l.Container, {
              size: o.vb,
              className:
                "sm:!mx-auto  lg:max-h-[460px] relative  bg-[#CCE1FF] rounded-[50px] md:px-[40px]   py-[40px] ",
              children: (0, i.jsxs)("div", {
                className: "grid lg:grid-cols-[1fr,1.3fr] ",
                children: [
                  (0, i.jsx)("div", {
                    className: "",
                    children: (0, i.jsx)("div", {
                      className:
                        " max-w-[383px]  w-full mx-auto lg:mt-[-200px]",
                      children: (0, i.jsx)(r(), {
                        className: "w-full h-auto",
                        src: o.VR.img,
                        height: 735,
                        width: 383,
                        alt: "",
                      }),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex flex-col items-center lg:block",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "   max-w-[231px]  h-[48px] flex justify-center items-center rounded-[100px] my-4  md:my-0 bg-[#FF41C1] text-center md:text-start w-full  ",
                            children: (0, i.jsx)("h3", {
                              className:
                                "font-bold m-0 text-[18px] leading-[46.81px] text-white ",
                              style: { fontFamily: n.yy.style.fontFamily },
                              children: o.VR.title2,
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: " ",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "font-normal text-[18px] leading-[25.5px] text-[#FF41C1] mt-6 -mb-2",
                                style: { fontFamily: n.yy.style.fontFamily },
                                children: o.VR.token,
                              }),
                              (0, i.jsx)("h1", {
                                className:
                                  "no-underline font-normal m-0 md:mt-[-1rem] text-[40px] sm:text-[50px] md:text-[110px] leading-[1] text-[#FF41C1]",
                                children: o.VR.supply,
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "",
                            children: (0, i.jsx)("ul", {
                              className: "pl-[18px] mt-4",
                              children: o.VR.distribution.map((e) =>
                                (0, i.jsx)(
                                  "li",
                                  {
                                    className:
                                      "text-base md:!text-[17px] font-helvatica-neue leading-[28.63px] text-textColor",
                                    style: {},
                                    children: e,
                                  },
                                  e.toString()
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "md:mt-[36px] md:pb-[39px]",
                        children: (0, i.jsxs)("div", {
                          className:
                            "px-[16px] py-2  md:py-0   w-full rounded-[5px] md:min-h-[48px] min-h-full   sm:gap-4  flex justify-center md:justify-between flex-wrap items-center ",
                          style: { border: "1px solid #1D1D1D" },
                          children: [
                            (0, i.jsx)("h2", {
                              className:
                                "text-[22px] m-0 uppercase font-normal leading-[29.22px] text-textColor",
                              children: o.VR.titleAdress,
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "flex gap-[16px] items-center flex-wrap  justify-center md:justify-start",
                              children: (0, i.jsx)("p", {
                                className:
                                  "text-[16px]  font-normal break-all leading-[29.22px] font-helvatica-neue text-textColor",
                                children: (0, i.jsx)(c.CopyAddress, {
                                  shouldOnlyCopy: !0,
                                  address: o.VR.addess,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)(l.Container, {
              size: o.vb,
              className: "px-0",
              children: (0, i.jsx)("div", {
                className:
                  "mt-[24px] grid grid-cols-2 place-content-end md:flex flex-wrap justify-center lg:justify-end gap-[12px] ",
                children: o.VR.bottomData.map((e, t) => {
                  let {
                    imgSrc: s,
                    width: l,
                    height: a,
                    text: n,
                    widthCard: c,
                  } = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className:
                        "flex  px-[17px] py-[15px]    gap-3 rounded-[15px] bg-[#292447] items-center justify-center ".concat(
                          o.VR.bottomData.length - 1 === t
                            ? "col-span-2 flex justify-center items-center"
                            : ""
                        ),
                      children: [
                        (0, i.jsx)(r(), {
                          src: s,
                          width: l,
                          height: a,
                          alt: n.toString(),
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "m-0 text-center sm:text-left font-normal   leading-[1] !text-[17px] text-white uppercase",
                          children: n,
                        }),
                      ],
                    },
                    t
                  );
                }),
              }),
            }),
          ],
        });
    },
    58374: function (e, t, s) {
      "use strict";
      s.d(t, {
        $1: function () {
          return g;
        },
        Bm: function () {
          return j;
        },
        I9: function () {
          return y;
        },
        Mv: function () {
          return v;
        },
        Nd: function () {
          return x;
        },
        R: function () {
          return h;
        },
        VR: function () {
          return f;
        },
        eD: function () {
          return p;
        },
        gK: function () {
          return b;
        },
        hu: function () {
          return d;
        },
        pO: function () {
          return m;
        },
        rP: function () {
          return u;
        },
        vb: function () {
          return c;
        },
        xj: function () {
          return w;
        },
      });
      var i = s(57437),
        l = s(16691),
        a = s.n(l),
        r = s(49142),
        n = s(61396),
        o = s.n(n);
      let c = 1412,
        d = {
          burger: "/images/burger.svg",
          volumeImg: "/images/onblue.svg",
          logo: "/images/logo.svg",
          socia: "socials",
          arrow: "/images/chevron_down.svg",
        },
        m = [
          { id: "home", name: "home", href: "/#home" },
          { id: "about", name: "about", href: "/#about" },
          { id: "tokenomics", name: "tokenomics", href: "/#tokenomics" },
          { id: "how-to-buy", name: "how to buy", href: "/#how-to-buy" },
          { id: "claim", href: "/claim", name: "claim" },
        ],
        h = [
          {
            href: "https://t.me/TheCoolCoin",
            img: "/images/telegram.svg",
            name: "telegram",
          },
          {
            href: "https://x.com/TheCoolCoin",
            img: "/images/twitter.svg",
            name: "twitter",
          },
        ],
        x = [
          {
            disabled: !1,
            href: "https://dexscreener.com/ethereum/0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
            img: "/images/market.svg",
          },
          {
            disabled: !1,
            href: "https://www.dextools.io/app/en/ether/pair-explorer/0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
            img: "/images/market5.svg",
          },
        ],
        u = { img: "/hero-img.png" },
        p = {
          slide1: "COOLCOIN is coming soon",
          slide2: "Ur fav spesh",
          slide3: "Discover the world of Wallstreet Wasteland",
          slide4: "Mysterious Gold Coin",
          star: "/images/Star 17.svg",
          berry: "/images/Barry 1.svg",
          bd: "/images/BD_RELAX 2.svg",
          laggy: "/images/Neutral Iggy 1.svg",
        },
        g = {
          leftImg: "/images/about-left.svg",
          kiss: "/images/kiss-25d80ff53783db386c56a9dae576c336 2.svg",
          rocket: "/images/White_Hoodie_Iggy_Front 1.svg",
          title: "New World Unlocked",
          title2: "wtf is cool?",
          desc: "Deep within the radioactive core of planet Wallstreet Wasteland… a mysterious and powerful force was born - The Cool Coin. This extraordinary gold coin, forged from the essence of an ancient supernova, holds the key to the very fabric of Coolman’s Universe.",
          desc2:
            "For eons, civilizations have whispered tales of Cool Coin’s unimaginable power and the destiny of those who seek to harness it…",
          title3: "by Coolman Coffeedan",
        },
        f = {
          img: "/images/rarity2-f784e030b959214770cb8589f9ea8a74 1.svg",
          title: "Tokenomics",
          title2: "$COOL is cool, man",
          desc: "",
          supply: "1,000,000,000",
          token: "token supply",
          addess: "0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
          titleAdress: "token address",
          copy: "/images/Group 7450.svg",
          distribution: [
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("p", {
                  className: "font-bold m-0 inline",
                  children: " 100%",
                }),
                " Liquidity Pool",
              ],
            }),
          ],
          bottomData: [
            {
              imgSrc: "/tokenomics/2.svg",
              text: "no presale",
              width: 40,
              height: 40,
              widthCard: "155px",
            },
            {
              imgSrc: "/tokenomics/1.svg",
              text: (0, i.jsxs)(i.Fragment, {
                children: [
                  " ",
                  "contract ",
                  (0, i.jsx)("br", {}),
                  " renounced",
                  " ",
                ],
              }),
              width: 40,
              height: 40,
              widthCard: "150px",
            },
            {
              imgSrc: "/tokenomics/3.svg",
              text: "LP burnt",
              width: 40,
              height: 40,
              widthCard: "137px",
            },
            {
              imgSrc: "/tokenomics/4.svg",
              text: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a(), {
                  className: "-mb-[6px]",
                  width: 45,
                  height: 23,
                  src: "/Group 7443.svg",
                  alt: "0% tax",
                }),
              }),
              width: 40,
              height: 40,
              widthCard: "120px",
            },
            {
              imgSrc: "/tokenomics/5.svg",
              text: "mint revoked",
              width: 40,
              height: 40,
              widthCard: "169px",
            },
          ],
        },
        b = {
          title: { white: "how to", otherColor: "be cool" },
          buy: "/images/buy_.svg",
          bd: "/images/BD_RELAX 2.svg",
          details: [
            {
              id: 1,
              step: "step 1",
              title: "Use Metamask wallet",
              desc: (0, i.jsx)("div", {
                className: "max-w-[270px] mx-auto",
                children: "Download Metamask wallet on your device.",
              }),
              img: {
                src: "/images/phantom-wallet.svg",
                width: 286,
                height: 233,
              },
              bg: "#FF93F0",
            },
            {
              id: 2,
              step: "step 2",
              title: "Get some ETH",
              desc: "Purchase Ethereum (ETH) on an exchange and transfer it to your wallet.",
              img: { src: "/images/step2.svg", width: 286, height: 233 },
              bg: "#53E7B6",
            },
            {
              id: 3,
              step: "step 3",
              title: "Go to Jupiter or Raydium",
              desc: (0, i.jsxs)(i.Fragment, {
                children: [
                  "Link your wallet with a decentralized exchange such as Uniswap.,",
                ],
              }),
              img: { src: "/images/step3.svg", width: 286, height: 233 },
              bg: "#CAF4FF",
            },
            {
              id: 4,
              step: "step 4",
              title: (0, i.jsxs)("p", {
                className: "m-0 text-center",
                children: ["Select the ", (0, i.jsx)("br", {}), " amount"],
              }),
              desc: (0, i.jsxs)(i.Fragment, {
                children: [
                  "Select $COOL to be cool man. You can also find it using the contract address:",
                  " ",
                  (0, i.jsx)(r.CopyAddress, {
                    shouldOnlyCopy: !0,
                    address: "0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
                  }),
                ],
              }),
              img: { src: "/images/good-job.svg", width: 286, height: 233 },
              bg: "#FEF26A",
            },
          ],
        },
        v = {
          since: "\xa9 2025 Coolman Universe",
          contact: "",
          contract: "0x45EB6C2006c739F6742219b4FfF3A0280Ec6072c",
          disclamer: "Disclaimer*",
          desc: "$COOL is a memecoin and has no utility. Don't risk money you are afraid of losing. The price may go up or it may go down. We are not responsible for the price of the token.",
        },
        w = {
          hero: {
            description:
              "Claim $COOL by holding a Coolman Universe NFT, it’s about to get cooler…",
            selectNft: "Select the nfts that you wish to claim",
            noNft:
              "No UNCLAIMED NFTs found in connected ETH wallet, Search for UNCLAIMED NFTs below with our NFT checker",
            phantomWallet: "Copy Paste your ETH wallet address",
            phantomWalletConnected:
              "Your wallet is connected. You are now able to claim!",
            nftsClaimedSuccess: "Rewards have been successfully claimed",
            nftsClaimedError: "Error claiming rewards",
            invalidSolAddress: "Invalid ETH Address",
          },
          allocation: {
            title: "ALLOCATION",
            description:
              "Our token allocation rewards loyal holders while ensuring a smooth project launch. By prioritizing our community's interests, we're fostering growth and fairness for all.",
          },
          allocationCards: [
            {
              id: 1,
              imgSrc: "/claim/feature/1.svg",
              left: {
                percent: 90,
                title: "Liquidity Pool",
                subTitle: "",
                desc: "",
              },
              right: {
                title: "900,000,000 tokens ",
                desc: "90% of the total token supply will be available to purchase on Raydium. These tokens are 100% locked.",
              },
            },
            {
              id: 2,
              imgSrc: "/claim/feature/2.svg",
              left: { percent: 5, title: "Airdrop", subTitle: "", desc: "" },
              right: {
                title: "50,000,000 tokens ",
                desc: "5% of the total token supply will be claimable for our NFT holders: 3.75% for Coolman's Universe collection & 1.25% for the babies collection holders.",
              },
            },
            {
              id: 3,
              imgSrc: "/claim/feature/3.svg",
              left: {
                percent: 5,
                title: "Rewards",
                subTitle: "coolrewards.sol",
                desc: "",
              },
              right: {
                title: "50,000,000 tokens ",
                desc: "Incentives drive outcomes. 5% of the total token supply will be allocated towards rewarding our community. These rewards are designed to encourage users to contribute and participate in Coolman's Universe.",
              },
            },
          ],
          claimingForHolders: {
            title: "claiming for holders",
            desc: "",
            tableHeader: { left: "NFT COLLECTION", right: "ALLOCATED PER NFt" },
          },
          tableNfts: [
            {
              id: 1,
              imgSrc: "/claim/nfts/1.svg",
              name: "Coolman's Universe",
              allocatedTokens: "3,750 $COOL tokens",
            },
            {
              id: 2,
              imgSrc: "/claim/nfts/2.svg",
              name: "Babies By Coolman",
              allocatedTokens: "1,250 $COOL tokens",
            },
          ],
          nftChecker: {
            title: "NFT CHECKER",
            firstInputLabel: "Select the collection",
            firstInputOptions: ["Coolman's Universe", "Babies By Coolman"],
            secondInputLabel: "NFT #Number",
            btnText: "CHECK",
            claimed: "This item has already been claimed.",
            notClaimed: "This item has not been claimed yet.",
          },
        },
        y = { title: "$COOL", name: "Coolman's Universe" },
        j = {
          title: "$COOL | Coolcoin",
          description:
            "Deep within the radioactive core of planet Wallstreet Wasteland… a mysterious and powerful force was born - The Cool Coin. This extraordinary gold coin, forged from the essence of an ancient supernova, holds the key to the very fabric of Coolman’s Universe.",
        };
    },
    52629: function (e, t, s) {
      "use strict";
      s.d(t, {
        Df: function () {
          return a.a;
        },
        rk: function () {
          return o;
        },
        yy: function () {
          return n.a;
        },
      });
      var i,
        l = s(91292),
        a = s.n(l),
        r = s(27470),
        n = s.n(r);
      let o =
        null === a() || void 0 === a()
          ? void 0
          : null === (i = a().style) || void 0 === i
          ? void 0
          : i.fontFamily;
    },
  },
  function (e) {
    e.O(
      0,
      [7699, 614, 5706, 8967, 7049, 9787, 902, 2971, 2472, 1744],
      function () {
        return e((e.s = 6547));
      }
    ),
      (_N_E = e.O());
  },
]);
