// import React from "react";
// import Link from "react-router-dom";
// import { Icon } from "@iconify/react";
// import { usePathname } from "next/navigation";


// const DesktopNavbar = ({ items }) => {
//   const pathname = usePathname();

//   return (
//     <nav>
//       <ul>
//         {items.map((item) => (
//           <li
//             key={item.name}
//             className={pathname === item.path ? "active" : ""}
//           >
//             <Link href={item.path}>
//               <Icon icon={item.icon} />
//               <span>{item.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default DesktopNavbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const DesktopNavbar = ({ items }) => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              <Icon icon={item.icon} />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;