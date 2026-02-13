import { useState } from "react";

export const useMobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
};
