"use client";

import { IN_Response } from "@/core/types/interfaces";
import Description from "./Description";

function FullDescription({ data }: { data: IN_Response }) {
  return (
    <div>
      <Description desc={data.data.description} />
    </div>
  );
}

export default FullDescription;
