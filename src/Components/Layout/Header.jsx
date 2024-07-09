
const Header = () => {
  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Service",
      link: "#service",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    {
      name: "About Us",
      link: "#aboutUs",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Contact Us",
      link: "#contactUs",
    },
  ];
  return (
    <div className="flex flex-row justify-between items-center text-white h-24 lg:h-36 xl:h-36">
      <div>
        <img alt="sweatbox logo" src="/" className="w-full h-full object-contain object-center"/>
      </div>
      <div className="lg:flex xl:flex hidden justify-center gap-x-8 items-center">
        {nav.map((item, index) => (
          <div key={index} className="text-sm">
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
