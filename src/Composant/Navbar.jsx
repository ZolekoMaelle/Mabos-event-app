import { Menu, MessageCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();
     
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      
      <button  onClick={() => navigate('/Mp')}
       className="text-blue-500">
        <Menu size={28} />
      </button>
      
      <h1 className="text-lg font-semibold">Accueil</h1>
      
      <button  onClick={() => navigate('/Sp')}
      className="text-blue-500">
        <MessageCircle size={28} />
      </button>
    </nav>
  );
};

export default Navbar;