const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Cyberk.io. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;