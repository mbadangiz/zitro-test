import { getData } from "@/core/services/getData";
import Breadcrumb from "./_components/Breadcrumb";

export default async function Home() {
  const data = await getData();

  return (
    <div className="customContainer">
      <Breadcrumb />
    </div>
  );
}
{
  /* <div dangerouslySetInnerHTML={{ __html: data.data.description }} /> */
}
