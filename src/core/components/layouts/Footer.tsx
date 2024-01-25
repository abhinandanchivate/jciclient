import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return <> &copy; {new Date().getFullYear()}</>;
};

export default Footer;
