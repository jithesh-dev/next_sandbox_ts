import { FC } from "react";
import Link from "next/link";
import styles from "./styles";

type Props = {
  url?: string;
};

const ButtonHover: FC<Props> = ({ url = "/" }) => (
  <Link href={url}>
    <a>
      <span>Button</span>
      <span>Button</span>
      <style jsx>{styles}</style>
    </a>
  </Link>
);

export default ButtonHover;
