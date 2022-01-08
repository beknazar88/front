
import DataCard from "../../components/dataCard/DataCard";
import { DataCardInterface } from "../../interfaces/dataCardInterface";
import { Layout } from "../../app/Layout";
import { Container, Grid } from "@mui/material";
import { AppBreadcrumbs } from "../../app/breadcrumbs";
import styles from "../../components/chartCard/chartCard.module.css";

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
        <DataCard {...props} />
      </Container>
    </Layout>
  );
}

export default Itas;
