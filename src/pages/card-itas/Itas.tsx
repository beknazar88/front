
import DataCard from "../../components/dataCard/DataCard";
import { DataCardInterface } from "../../interfaces/dataCardInterface";
import { Layout } from "../../app/Layout";
import { Container, Grid } from "@mui/material";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import styles from "../../components/chartCard/chartCard.module.css";
import CaruselItas from "../../components/itas-card/caruselItas";
import { ChartCard } from "../../components/chartCard/chartCard";
import { ItasBarChart } from "../../components/bar-chart/itasBarChart";

function Itas() {
  const props: DataCardInterface = {
    budgetType: "Республиканский бюджет",
    forecastVal: 75137470,
    factVal: 99055122.0,
    fulfillmentPercentage: 107.99,
  };
  return (
    <Layout className={styles.menuStyle}>
      <Container maxWidth="lg">
        <Grid item xl={12}>
          <AppBreadcrumbs title="Itas" />
        </Grid>
        <Grid
          container
          direction="row"
          rowSpacing={8}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
        <Grid item xl={12} lg={12}>
        <DataCard {...props} />
        </Grid>
        <Grid item xl={12} lg={12}>
          <ChartCard title="Отчет о фактическом исполнении государственного бюджета по областям и районам" children={<ItasBarChart/>}/>
          </Grid>
          </Grid>
      </Container>
    </Layout>
  );
}

export default Itas;
