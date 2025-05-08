import { IN_Response } from "@/core/types/interfaces";

function ProductSection({ data }: { data: IN_Response }) {
  const {
    data: { title, code },
  } = data;

  return (
    <div className="grid grid-cols-12 lg:gap-x-6">
      <div className="col-span-5">1</div>
      <div className="col-span-7 ">
        <div className="w-full p-4">
          <h2 className="text-2xl font-medium leading-10"> {title}</h2>
          <p className="text-xs my-1 text-seccondary-text-light">{code}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
