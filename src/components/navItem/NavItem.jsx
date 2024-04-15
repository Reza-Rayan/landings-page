import "./NavItem.css";

const NavItem = ({ navitem, href }) => {
  return (
    <li className="font-bold text-xl text-slate-600 navItem relative pb-1 hover:text-sky-700 dark:text-white">
      <a href={href}>{navitem}</a>
    </li>
  );
};

export default NavItem;
