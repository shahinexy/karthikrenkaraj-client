import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TampleCauseCard from "../tample/tampleDards/TampleCauseCard";

const ProductDetailsTap = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

  return (
    <Tabs defaultValue="causes" className="w-full">
      <TabsList className="bg-transparent md:mb-8 mb-4 flex md:gap-5 gap-2">
        <TabsTrigger
          value="causes"
          className="md:text-2xl  data-[state=active]:border-b-[2px] data-[state=active]:border-black data-[state=active]:shadow-none data-[state=active]:rounded-none"
        >
          Causes
        </TabsTrigger>
        <TabsTrigger
          value="completed-causes"
          className="md:text-2xl  data-[state=active]:border-b-[2px] data-[state=active]:border-black data-[state=active]:shadow-none data-[state=active]:rounded-none"
        >
          Completed Causes
        </TabsTrigger>
      </TabsList>
      <TabsContent value="causes">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
          {items.map((item, idx) => (
            <TampleCauseCard key={idx} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="completed-causes">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
          {items.map((item, idx) => (
            <TampleCauseCard key={idx} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductDetailsTap;
