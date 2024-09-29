function Header() {
  return (
    <>
      <div className="flex justify-around items-center bg-rosepine-surface border-b-[1px] text-rosepine-text/90 border-b-rosepine-overlay py-2 ">
        <div className="font-bold text-xl">
          Why Is <span>Faizan</span>
        </div>
        <div className="flex gap-3 text-base font-semibold">
          <div className="p-4">Home</div>
          <div className="p-4">Projects</div>
          <div className="p-4">Work</div>
          <div className="p-4">Contact</div>
        </div>
      </div>
    </>
  );
}

export default Header;
