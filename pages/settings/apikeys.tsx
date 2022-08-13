import React, { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import { StyledTable, StyledBodyCell } from "baseui/table-grid";
import { StyledTableHeadAlt } from "components/PageStyles/Apps.styled";
import { Container } from "components/ui";
import SettingsMenu from "components/SideMenu/SettingsMenu";

import { tableSampleData } from "utils/data";

const ApiKeys: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>API keys | Sety</title>
        <meta
          name="Description"
          content="List of API keys for businesses on sety.io"
        />
      </Head>

      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 3]}>
              <SettingsMenu />
            </Cell>
            <Cell span={[12, 12, 9]}>
              <Block paddingTop={["10px", "15px", "30px", "0"]}>
                <Block
                  as="h2"
                  paddingBottom="10px"
                  overrides={{
                    Block: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font650,
                          color: $theme.colors.primaryA,
                        };
                      },
                    },
                  }}
                >
                  API Keys
                </Block>

                <Block
                  as="p"
                  paddingBottom="30px"
                  overrides={{
                    Block: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font200,
                          color: $theme.colors.borderInverseOpaque,
                        };
                      },
                    },
                  }}
                >
                  Active API keys for this business
                </Block>

                <Block
                  overrides={{
                    Block: {
                      style: {
                        minHeight: "150px",
                      },
                    },
                  }}
                >
                  <StyledTable $gridTemplateColumns="150px 250px auto auto auto">
                    <StyledTableHeadAlt>API Key</StyledTableHeadAlt>
                    <StyledTableHeadAlt>Date Added</StyledTableHeadAlt>
                    {tableSampleData.map((item, index) => {
                      const striped = index % 2 === 0;
                      return (
                        <Fragment key={index}>
                          <StyledBodyCell $striped={striped}>
                            {item.default}
                          </StyledBodyCell>
                          <StyledBodyCell $striped={striped}>
                            {item.version && item.version}
                          </StyledBodyCell>
                        </Fragment>
                      );
                    })}
                  </StyledTable>
                </Block>
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default ApiKeys;
