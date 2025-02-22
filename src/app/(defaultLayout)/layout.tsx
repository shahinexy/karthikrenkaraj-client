import NavBar from "@/components/shared/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gradient-to-b from-[#eff5e6] to-[#f6f6f6] max-w-[1372px] mx-auto md:py-5 md:px-0 px-3">
      <div className="md:pb-9 pb-3 pt-3"><NavBar/></div>
      <div>{children}</div>
    </main>
  );
};

export default CommonLayout;
