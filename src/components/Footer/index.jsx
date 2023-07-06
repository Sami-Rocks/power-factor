const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <p className=" py-20 md:py-20 text-center px-10 text-md md:text-xl">
      © Copyright {year} | Power Factor Limited
    </p>
  );
};

export default Footer;
