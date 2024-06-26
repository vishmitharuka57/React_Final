const Footer = () => {
  return (
    <div className="bg-blue-900 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl text-white font-bold tracking-tight">
          HotelHub.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Services</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
