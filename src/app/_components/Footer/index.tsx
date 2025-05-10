import Info from "./Info";
import Services from "./Services";

function Footer() {
  return (
    <footer className="hidden lg:block customContainer my-6 ">
      <div className="w-full px-6 py-[22px] bg-input-oncard-light rounded-4xl">
        <Services />

        <Info />
      </div>
    </footer>
  );
}

export default Footer;
