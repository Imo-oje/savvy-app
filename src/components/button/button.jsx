import { Link } from "react-router-dom";
function Button(prop) {
  return (
    <>
      <li id={prop.id} className={prop.className}>
        <Link to={prop.url}>
          {prop.icon}
          {prop.name}
        </Link>
      </li>{" "}
    </>
  );
}

export default Button;
