import React, { Fragment, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { StatefulDatepicker, DatePicker } from "baseui/datepicker";
import { StyledTable, StyledBodyCell } from "baseui/table-grid";
import { FaRegCreditCard } from "react-icons/fa";
import { StyledTableHeadAlt } from "components/PageStyles/Apps.styled";
import { Container, ListGridCard } from "components/ui";
import {
  DivWrapper,
  Paragraph,
  SubSection,
  SectionTitle,
} from "./Pages.styled";

import { tableSampleData } from "utils/data";

const Billing: NextPage<{}> = () => {
  const [rangeDate, setRangeDate] = React.useState([new Date(), new Date()]);
  console.log("rangeDate", rangeDate);
  return (
    <>
      <Head>
        <title>Incidents | Sety</title>
        <meta
          name="Description"
          content="List of reported incidents for business on sety.io"
        />
      </Head>

      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 12]}>
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
                  Billing
                </Block>
                <Block
                  as="p"
                  paddingBottom="20px"
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
                  Reported incidents by your customers/users
                </Block>
                <Block marginBottom="20px" marginTop="40px">
                  <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
                    <Cell span={[12, 12, 9]}>
                      <DivWrapper
                        style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.10)" }}
                      >
                        <div style={{ paddingLeft: "1.25rem", flex: "0.5" }}>
                          <Paragraph>
                            Select Range
                          </Paragraph>
                          <DatePicker
                            range
                            value={rangeDate}
                            onChange={({ date }) => setRangeDate(date)}
                            placeholder="YYYY/MM/DD – YYYY/MM/DD"
                            quickSelect
                          />
                        </div>
                        <SubSection>
                          <Paragraph>Total Amount</Paragraph>
                          <SectionTitle>₦12,398,867</SectionTitle>
                        </SubSection>
                        <SubSection>
                          <Paragraph>Incidents</Paragraph>
                          <SectionTitle>1,218</SectionTitle>
                        </SubSection>
                      </DivWrapper>
                    </Cell>
                    <Cell span={[12, 12, 3]}>
                      <ListGridCard
                        style={{
                          padding: "20px 25px 22px",
                          boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.16)",
                        }}
                        variant="grid"
                        thumbHeight="60px"
                        title="₦129k"
                        description="Outstanding balance"
                        btn={
                          <Button
                            kind="secondary"
                            size="compact"
                            shape="pill"
                            overrides={{
                              BaseButton: {
                                style: () => {
                                  return {
                                    fontSize: "14px",
                                    paddingLeft: "14px",
                                    paddingRight: "14px",
                                    color: "#5341c5",
                                  };
                                },
                              },
                            }}
                          >
                            <>
                              <FaRegCreditCard />
                              &nbsp;Make Payment
                            </>
                          </Button>
                        }
                      />
                    </Cell>
                  </Grid>
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
                    <StyledTableHeadAlt>Name</StyledTableHeadAlt>
                    <StyledTableHeadAlt>Phone number</StyledTableHeadAlt>
                    <StyledTableHeadAlt>Email</StyledTableHeadAlt>
                    <StyledTableHeadAlt>Status</StyledTableHeadAlt>
                    <StyledTableHeadAlt>Date Added</StyledTableHeadAlt>
                    {tableSampleData.map((item, index) => {
                      const striped = index % 2 === 0;
                      return (
                        <Fragment key={index}>
                          <StyledBodyCell $striped={striped}>
                            {item.property}
                          </StyledBodyCell>
                          <StyledBodyCell
                            $striped={striped}
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></StyledBodyCell>
                          <StyledBodyCell $striped={striped}>
                            <code>{item.type}</code>
                          </StyledBodyCell>
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

export default Billing;
