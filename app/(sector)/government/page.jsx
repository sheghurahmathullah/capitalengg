import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import Blogs from "./projects";
import SectorDetails from "./detail";
import { allPortfolio } from "@/data/portfolio";
export const metadata = {
  title: "Government",
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      {/* <Blogs /> */}
      {/* <CtaForm/> */}
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
