import s from "./Header.component.module.scss";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <h2 className={s.header}>{title}</h2>;
}

export default Header;
