function Nav() {
  return (
    <div className="w-full border-transparent border-[1px] border-solid border-b-primary-line-light">
      <nav className="customContainer ">
        <div className="w-full h-[60px] lg:h-24 flex items-center content-center justify-between">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="w-full h-16 hidden items-center content-center lg:flex">
          1
        </div>
      </nav>
    </div>
  );
}

export default Nav;
