import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import  LineChart  from "../line-chart/LineChart";
import styles from './chartCard.module.css'
type Props = {
    title: string;
    }

export const ChartCard = ({ title }: Props) => {
  return (
    <Card elevation={3} className={styles.cardStyle}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography component="div">
          <LineChart url="http://10.111.15.123:5085/api/ESF/GetESFRegistrationByMonth"/>
        </Typography>
      </CardContent>
    </Card>
  );
};