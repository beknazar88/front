import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import LineChartKkm from "../line-chart/LineChartKkm";
import styles from './chartCard.module.css'
type Props = {
    title: string;
    }

export const ChartCardKkm = ({ title }: Props) => {
  return (
    <Card elevation={3} className={styles.cardStyle}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography component="div">
          <LineChartKkm />
        </Typography>
      </CardContent>
    </Card>
  );
};