// import React from "react";
// import Link from "react-router-dom";
// import { Icon } from "@iconify/react";
// import { usePathname } from "next/navigation";



// const MobileNavbar = ({
//   items,
//   isOpen,
//   toggleMenu,
// }) => {
//   const pathname = usePathname();
//   return (
//     <>
//       <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
//         <span className="close-btn" onClick={toggleMenu}>
//           <Icon icon="mdi:close" />
//         </span>
//         <nav>
//           <ul>
//             {items.map((item) => (
//               <li
//                 key={item.name}
//                 className={pathname === item.path ? "active" : ""}
//               >
//                 <Link href={item.path} onClick={toggleMenu}>
//                   <Icon icon={item.icon} />
//                   <span>{item.name}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
//     </>
//   );
// };

// export default MobileNavbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const MobileNavbar = ({
  items,
  isOpen,
  toggleMenu,
}) => {
  const location = useLocation();
  
  return (
    <>
      <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>
          <Icon icon="mdi:close" />
        </span>
        <nav>
          <ul>
            {items.map((item) => (
              <li
                key={item.name}
                className={location.pathname === item.path ? "active" : ""}
              >
                <Link to={item.path} onClick={toggleMenu}>
                  <Icon icon={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default MobileNavbar;