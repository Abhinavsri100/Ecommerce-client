/** @format */

import React from "react";
import { useParams } from "react-router-dom";

export const Demo = () => {
  const params = useParams();
  console.log(params);
  return <div>Demo</div>;
};
