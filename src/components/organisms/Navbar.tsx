import type { NextPage } from "next";
const Navbar: NextPage = () => {
  return (
    <div className="w-full h-[9.375rem] relative border-whitesmoke-200 border-solid border-b-[1px] box-border overflow-hidden text-left text-[3rem] text-whitesmoke-100 font-playfair-display">
      <div className="absolute top-[2.688rem] left-[calc(50%_-_840px)] w-[105rem] overflow-hidden flex items-center gap-[15.5rem]">
        <b className="relative [text-shadow:0px_0px_10px_rgba(255,_255,_255,_0.25)]">
          Esaú Aguilar
        </b>
        <div className="w-[66.438rem] flex items-center justify-between gap-[1.25rem] text-[2rem] font-lato">
          <div className="relative tracking-num-0_05">About me</div>
          <div className="relative tracking-num-0_05">Projects</div>
          <div className="relative tracking-num-0_05">Certifications</div>
          <div className="relative tracking-num-0_05">{`Skills & Tools`}</div>
          <div className="relative tracking-num-0_05">Contact</div>
        </div>
      </div>
    </div>
  );
};
export { Navbar };
