import "./Header.css";

import Switch from "../Switch/Switch";

export default function Header() {
  return (
    <header className="header-wrap">
      <ul className="header-wrap__ul">
        <li>Movie catalog on React</li>
        {/* <li>Link to production</li> */}
        <li>
          <Switch />
        </li>
      </ul>
    </header>
  );
}
