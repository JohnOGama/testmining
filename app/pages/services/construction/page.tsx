export const metadata = {
  title: "Construction",
  description: "Construction",
};

import Link from "next/link";

export default function Construction() {
  return (
    <section className="relative pt-[70px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-10 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="h1" style={{ color: "#08c5d6" }}>
              Construction is on going ...
            </h1>
            <h4 className="h4 text-black">
              <br></br>
              Please do not delay
            </h4>
          </div>
          {/* Page header */}

          <div>
            <br></br>
            <h5 className="h4 text-black">CONSTRUCTION</h5>
            <h6 className="h6 text-black">
              Construction is a general term meaning the art and science to form
              objects, systems, or organizations,[1] and comes from Latin
              constructio (from com- "together" and struere "to pile up") and
              Old French construction.[2] To construct is the verb: the act of
              building, and the noun is construction: how something is built,
              the nature of its structure.
              <br></br>
              In its most widely used context, construction covers the processes
              involved in delivering buildings, infrastructure, industrial
              facilities, and associated activities through to the end of their
              life. It typically starts with planning, financing, and design,
              and continues until the asset is built and ready for use;
              construction also covers repairs and maintenance work, any works
              to expand, extend and improve the asset, and its eventual
              demolition, dismantling or decommissioning.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
