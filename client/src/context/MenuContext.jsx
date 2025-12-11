// Optional menu data cache 
import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, categories, setCategories }}>
      {children}
    </MenuContext.Provider>
  );
};