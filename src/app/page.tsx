import { getData } from "@/core/services/getData";

export default async function Home() {
  const data = await getData();

  return (
    <div className="customContainer">
      dslvkm
      {/* <div dangerouslySetInnerHTML={{ __html: data.data.description }} /> */}
    </div>
  );
}
