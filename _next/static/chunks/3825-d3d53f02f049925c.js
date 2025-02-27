(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3825],
  {
    53825: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return RootLayout;
          },
          wagmiConfig: function () {
            return v;
          },
        });
      var s = o(57437);
      o(2265), o(12148), o(17351), o(21848), o(8780);
      var i = o(46480),
        n = o(94041),
        a = o(23845),
        r = o(5925),
        l = o(81229),
        c = o(78908),
        d = o(38038),
        m = o(14701),
        h = o(75404),
        u = o(75398),
        g = o(52629),
        p = o(46877);
      let f = (0, p.j)({
        fontFamily: g.rk,
        fontFamilyMonospace: g.rk,
        primaryColor: "green",
        headings: { fontFamily: g.rk },
        breakpoints: {
          xs: "20em",
          sm: "30em",
          md: "48em",
          lg: "67.5em",
          xl: "90em",
        },
        colors: {
          blue: [
            "#0052FF",
            "#1A66FF",
            "#337AFF",
            "#4D8EFF",
            "#66A2FF",
            "#80B6FF",
            "#99CAFF",
            "#B3DEFF",
            "#CCF2FF",
            "#E6F6FF",
          ],
          black: [
            "#1D1D1D",
            "#333333",
            "#3C3C3C",
            "#121229",
            "#1D1D33",
            "#1D331D",
            "#331D1D",
            "#331D12",
            "#121D33",
            "#1D3312",
            "#331212",
          ],
        },
      });
      var w = o(58374);
      let b = new c.S(),
        v = (0, m.vX)({
          appName: "Coolman's Universe",
          chains: [h.R, u.F],
          projectId: "121c99989d21edbad5ec8c82ae3d35a9",
          appDescription: "Coolman's Universe",
          appIcon: "https://www.coolcoin.wtf/images/logo.svg",
          appUrl: "https://www.coolcoin.wtf",
          ssr: !0,
        });
      function RootLayout(e) {
        let { children: t } = e;
        return (0, s.jsxs)("html", {
          lang: "en",
          className: g.Df.className,
          children: [
            (0, s.jsxs)("head", {
              children: [
                (0, s.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/coolman.png",
                }),
                (0, s.jsx)("title", { children: w.Bm.title }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content: w.Bm.description,
                }),
                (0, s.jsx)("meta", {
                  name: "viewport",
                  content:
                    "minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no",
                }),
              ],
            }),
            (0, s.jsx)("body", {
              children: (0, s.jsx)(l.F, {
                config: v,
                children: (0, s.jsx)(d.aH, {
                  client: b,
                  children: (0, s.jsx)(m.pj, {
                    initialChain: 1,
                    children: (0, s.jsx)(i.M, {
                      theme: f,
                      children: (0, s.jsxs)(n.x, {
                        className: "  text-white !scroll-smooth bg-[#070029] ",
                        children: [
                          (0, s.jsx)(r.x7, { position: "bottom-center" }),
                          (0, s.jsx)(n.x, { flex: "1", children: t }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
            (0, s.jsx)(a.GoogleAnalytics, { gaId: "G-8D941GH22K" }),
          ],
        });
      }
    },
    49142: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          CopyAddress: function () {
            return CopyAddress;
          },
          default: function () {
            return useCopyToClipboard;
          },
        });
      var s = o(57437),
        i = o(2265),
        n = o(29172),
        a = o(5925),
        r = o(2390),
        l = o.n(r);
      function useCopyToClipboard() {
        let [e, t] = (0, i.useState)(""),
          [o, s] = (0, i.useState)();
        return [
          (e, o) => {
            let i = l()(e, o);
            i && t(e), s(i);
          },
          { value: e, success: o },
        ];
      }
      let CopyAddress = (e) => {
        let { address: t, shouldOnlyCopy: o } = e,
          [i] = useCopyToClipboard();
        return (0, s.jsxs)("span", {
          onClick: () => {
            i(t), a.ZP.success("Copied");
          },
          className: "block gap-4 break-all break-words cursor-pointer",
          children: [
            !o &&
              (0, s.jsx)("a", {
                target: "_blank",
                href: "#",
                rel: "noopener noreferrer",
                className: "no-underline",
                children: t,
              }),
            o && t,
            (0, s.jsx)(n.esY, {
              className: "inline-block ml-3 -mt-1 cursor-pointer",
              color: "#000",
              size: 13,
            }),
          ],
        });
      };
    },
    58374: function (e, t, o) {
      "use strict";
      o.d(t, {
        $1: function () {
          return f;
        },
        Bm: function () {
          return k;
        },
        I9: function () {
          return y;
        },
        Mv: function () {
          return v;
        },
        Nd: function () {
          return u;
        },
        R: function () {
          return h;
        },
        VR: function () {
          return w;
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
          return g;
        },
        vb: function () {
          return c;
        },
        xj: function () {
          return C;
        },
      });
      var s = o(57437),
        i = o(16691),
        n = o.n(i),
        a = o(49142),
        r = o(61396),
        l = o.n(r);
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
            href: "https://t.me/CoolmanUniverse",
            img: "/images/telegram.svg",
            name: "telegram",
          },
          {
            href: "https://twitter.com/CoolmanUniverse",
            img: "/images/twitter.svg",
            name: "twitter",
          },
        ],
        u = [
          {
            disabled: !1,
            href: "https://dexscreener.com/ethereum/0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            img: "/images/market.svg",
          },
          {
            disabled: !1,
            href: "https://www.dextools.io/app/en/ether/pair-explorer/0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            img: "/images/market5.svg",
          },
        ],
        g = { img: "/hero-img.png" },
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
        f = {
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
        w = {
          img: "/images/rarity2-f784e030b959214770cb8589f9ea8a74 1.svg",
          title: "Tokenomics",
          title2: "$COOL is cool, man",
          desc: "",
          supply: "1,000,000,000",
          token: "token supply",
          addess: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          titleAdress: "token address",
          copy: "/images/Group 7450.svg",
          distribution: [
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("p", {
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
              text: (0, s.jsxs)(s.Fragment, {
                children: [
                  " ",
                  "contract ",
                  (0, s.jsx)("br", {}),
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
              text: (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(n(), {
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
              desc: (0, s.jsx)("div", {
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
              desc: (0, s.jsxs)(s.Fragment, {
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
              title: (0, s.jsxs)("p", {
                className: "m-0 text-center",
                children: ["Select the ", (0, s.jsx)("br", {}), " amount"],
              }),
              desc: (0, s.jsxs)(s.Fragment, {
                children: [
                  "Select $COOL to be cool man. You can also find it using the contract address:",
                  " ",
                  (0, s.jsx)(a.CopyAddress, {
                    shouldOnlyCopy: !0,
                    address: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
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
          contract: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          disclamer: "Disclaimer*",
          desc: "$COOL is a memecoin and has no utility. Don't risk money you are afraid of losing. The price may go up or it may go down. We are not responsible for the price of the token.",
        },
        C = {
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
        k = {
          title: "$COOL | Coolcoin",
          description:
            "Deep within the radioactive core of planet Wallstreet Wasteland… a mysterious and powerful force was born - The Cool Coin. This extraordinary gold coin, forged from the essence of an ancient supernova, holds the key to the very fabric of Coolman’s Universe.",
        };
    },
    52629: function (e, t, o) {
      "use strict";
      o.d(t, {
        Df: function () {
          return n.a;
        },
        rk: function () {
          return l;
        },
        yy: function () {
          return r.a;
        },
      });
      var s,
        i = o(91292),
        n = o.n(i),
        a = o(27470),
        r = o.n(a);
      let l =
        null === n() || void 0 === n()
          ? void 0
          : null === (s = n().style) || void 0 === s
          ? void 0
          : s.fontFamily;
    },
    12148: function () {},
  },
]);
