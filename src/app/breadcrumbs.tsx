import React from "react";
import { Link } from "react-router-dom";
import {Grid} from "@mui/material";
import styles from "./breadcrumbs.module.css";

type Props = {
  title: string;
};

export const AppBreadcrumbs = ({ title }: Props) => {
  return (
    <Grid display="flex" alignItems="center" className={styles.boxStyle}>
      <Link to={"/home"} className={styles.linlStyle}>Главная</Link>

      <div className={styles.vl}></div>

      <p>{title}</p>
    </Grid>
  );
};
