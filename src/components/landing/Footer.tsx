const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Cyberk.io. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;