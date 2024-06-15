import React from "react";

export const User = () => {
  const token = localStorage.getItem("token");
  const tokenName = token ? token.user : null;
  return <div>{tokenName}</div>;
};
