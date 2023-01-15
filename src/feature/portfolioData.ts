import ESintImg from "src/assets/images/E-SInt.png";
import DealerImg from "src/assets/images/Dealer.png";
import VotingSiteImg from "src/assets/images/votiong-site.png";

const PortfolioDatas = [
  {
    id: 0,
    portfolio_name: "E-SInt",
    portfolio_introduction:
      "同じ空間にいる人のみと自己紹介カードを交換できるwebアプリです。",
    sub__introduction:
      "サークルの新歓などで顔と名前、特徴を覚えるために作りました。",
    portfolio_img: ESintImg,
    frontend: "TypeScript, Next.js, TailWind, Jest",
    backend: "Node.js, ApolloServer, Graphql",
    Other: "Vercel, Firebase, Docker, Prisma",
    appUrl: "https://self-introduction-app.vercel.app/",
    githubUrl: "https://github.com/Hasegawa-Akito/self-introduction-app",
  },
  {
    id: 1,
    portfolio_name: "Dealer",
    portfolio_introduction:
      "ポーカーにおけるチップ交換をデジタル化するwebアプリです。",
    sub__introduction:
      "JPHACKSに出場し、予選を勝ち抜きAwardDayの決勝16チームに選出されました。",
    portfolio_img: DealerImg,
    frontend: "TypeScript, Next.js, TailWind",
    backend: "Go, Gin, GorillaWebSocket",
    Other: "Nginx, ConoHaVPS, Docker",
    appUrl: "https://p-dealer.com/start",
    githubUrl:
      "https://github.com/tokyo-azisai-paradise/poker-mahjong-calculation",
  },
  {
    id: 2,
    portfolio_name: "voting-site",
    portfolio_introduction:
      "アンケート作成とその結果をリアルタイムで反映できるwebアプリ",
    sub__introduction:
      "投票結果がリアルタイムで画面に反映されるため、投票状況を楽しむことができます。",
    portfolio_img: VotingSiteImg,
    frontend: "TypeScript, React, TailWind",
    backend: "not using",
    Other: "Firebase",
    appUrl: "https://voting-site-76b5a.web.app/",
    githubUrl: "https://github.com/Hasegawa-Akito/voting-ts-react",
  },
];

export default PortfolioDatas;
