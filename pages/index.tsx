import { NextPage } from "next";
import {
  FaUserCheck,
  FaVestPatches,
  FaUsersCog,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import { Card, StyledBody } from "baseui/card";
import Head from "next/head";
import { useRouter } from 'next/router'
import Views from "containers/Widgets/Views";
import { Container, LabelGroup, WidgetCard } from "components/ui";
import ProductViews from "containers/Widgets/ProductViews";
import ProductsBar from "containers/Widgets/ProductsBar";
import { productsBar, productViews } from "utils/data";

const IncidentReportOptions = [
  {
    color: "#7928CA",
    label: "Pending",
  },
  {
    color: "#3aa76d",
    label: "Resolved",
  },
  {
    color: "#FF0080",
    label: "Cancelled",
  },
];
const homeWidgets: any = [
  {
    color: "#5341C4",
    title: "210",
    icon: <FaUserCheck color="#ffffff" size="1.7em" />,
    description: "Active customers",
    btntext: "View Customers",
    label: "",
    onclick: () => console.log("View report of unread email."),
  },
  {
    color: "#0070F3",
    title: "198",
    icon: <FaVestPatches color="#ffffff" size="1.7em" />,
    description: "Total Incidents",
    btntext: "View Incidents",
    label: "",
    onclick: () => console.log("View report of unread email."),
  },
  {
    color: "#3AA76D",
    title: "210",
    icon: <FaUsersCog color="#ffffff" size="1.7em" />,
    description: "Team Members",
    btntext: "View team",
    label: "",
    onclick: () => console.log("View report of unread email."),
  },
  {
    color: "#f516c8",
    title: "₦347k",
    icon: <FaMoneyCheckAlt color="#ffffff" size="1.7em" />,
    description: "Avg. Monthly Income",
    btntext: "Generate report",
    label: "",
    onclick: () => console.table("Heyo!!!"),
  },
];
const Home: NextPage<{}> = () => {
  const router = useRouter();
  console.log('router', router)
  return (
    <Container>
      <Head>
        <title>Sety Business dashbaord</title>
      </Head>
      <Block
        marginLeft={"-8px"}
        marginRight={"-8px"}
        paddingTop={["15px", "20px", "30px", "40px"]}
      >
        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={[12, 12, 6]}>
            <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
              {homeWidgets.map((widget, index) => (
                <Cell span={[12, 6]} key={index}>
                  <WidgetCard
                    style={{ marginBottom: "20px" }}
                    color={widget.color}
                    title={widget.title}
                    icon={widget.icon}
                    description={widget.description}
                    btntext={widget.btntext}
                    label={widget.label}
                    onClick={widget.onclick}
                  />
                </Cell>
              ))}
            </Grid>
          </Cell>
          <Cell span={[12, 12, 6]}>
            <Grid gridGutters={16} gridMargins={0}>
              <Cell span={12}>
                <Card
                  title="Registation stats"
                  overrides={{
                    Root: {
                      style: ({ $theme }) => {
                        return {
                          borderTopColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "transparent",
                          borderLeftColor: "transparent",
                          boxShadow: $theme.lighting.shadow400,
                          minHeight: "312px",
                          marginBottom: "20px",
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                          position: "absolute",
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: "260px",
                        };
                      },
                    },
                  }}
                >
                  <StyledBody>
                    <ProductViews
                      categories={productViews.categories}
                      products={productViews.products}
                      views={productViews.views}
                    />
                  </StyledBody>
                </Card>
              </Cell>
            </Grid>
          </Cell>
        </Grid>

        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={[12, 12, 4]}>
            <Card
              title="Incidents Resolution Stats"
              overrides={{
                Root: {
                  style: ({ $theme }) => {
                    return {
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                      borderLeftColor: "transparent",
                      boxShadow: $theme.lighting.shadow400,
                      marginBottom: $theme.sizing.scale700,
                    };
                  },
                },
                Title: {
                  style: ({ $theme }) => {
                    return {
                      ...$theme.typography.font250,
                      position: "absolute",
                    };
                  },
                },
                Body: {
                  style: () => {
                    return {
                      minHeight: "372px",
                      position: "relative",
                      paddingTop: "20px",
                    };
                  },
                },
              }}
            >
              <StyledBody>
                <ProductsBar
                  className="padding-control"
                  labels={productsBar.labels}
                  products={productsBar.products}
                />
                <LabelGroup
                  style={{
                    position: "absolute",
                    width: "100%",
                    bottom: "0",
                  }}
                  items={IncidentReportOptions}
                />
              </StyledBody>
            </Card>
          </Cell>
          <Cell span={[12, 12, 4]}>
            <Card
              title="Outstanding Balance"
              overrides={{
                Root: {
                  style: ({ $theme }) => {
                    return {
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                      borderLeftColor: "transparent",
                      boxShadow: $theme.lighting.shadow400,
                      marginBottom: $theme.sizing.scale700,
                    };
                  },
                },
                Title: {
                  style: ({ $theme }) => {
                    return {
                      ...$theme.typography.font250,
                      position: "absolute",
                    };
                  },
                },
                Contents: {
                  style: () => {
                    return {
                      minHeight: "372px",
                    };
                  },
                },
              }}
            >
              <StyledBody>
                <Views className="padding-control" totalView={75} />
              </StyledBody>
            </Card>
          </Cell>
        </Grid>

        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={12}>
            <div className="cash-flow">
              <Card
                title="Cash Flow"
                overrides={{
                  Root: {
                    style: ({ $theme }) => {
                      return {
                        borderTopColor: "transparent",
                        borderRightColor: "transparent",
                        borderBottomColor: "transparent",
                        borderLeftColor: "transparent",
                        boxShadow: $theme.lighting.shadow400,
                      };
                    },
                  },
                  Title: {
                    style: ({ $theme }) => {
                      return {
                        ...$theme.typography.font250,
                      };
                    },
                  },
                  Body: {
                    style: () => {
                      return {
                        minHeight: "200px",
                      };
                    },
                  },
                }}
              >
                <StyledBody>
                  {/* <CashFlow
                    categories={cashFlow.categories}
                    cash={cashFlow.cash}
                  /> */}
                </StyledBody>
              </Card>
            </div>
          </Cell>
        </Grid>
      </Block>
    </Container>
  );
};

export default Home;
