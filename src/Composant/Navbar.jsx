import { Menu, MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      
      <button className="text-blue-500">
        <Menu size={28} />
      </button>
      
      <h1 className="text-lg font-semibold">Accueil</h1>
      
      <button className="text-blue-500">
        <MessageCircle size={28} />
      </button>
    </nav>
  );
};

export default Navbar;