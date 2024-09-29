function Header() {
  return (
    <>
      <div className="flex justify-around bg-rosepine-base border-b-2 border-b-rosepine-overlay sticky top-0 text-rosepine-text py-2 px-4 ">
        <div className="font-bold text-xl">Why Is Faizan</div>
        <div className="flex gap-8 text-base font-semibold">
          <div>Home</div>
          <div>Projects</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
}

export default Header;
