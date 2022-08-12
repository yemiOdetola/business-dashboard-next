// @ts-nocheck
import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { FaPencilAlt } from "react-icons/fa";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import { Button, SHAPE } from "baseui/button";
import { Container } from "components/ui";
import SettingsMenu from "components/SideMenu/SettingsMenu";
import { DivWrapper, Title, Paragraph, Label, BorderedInfoList } from "pages/Pages.styled";

const businessDetails = {
  "name": "Sety",
  "address": "6 Adeola road",
  "industry": "Telecommunications",
  "country": "Nigeria"
}

const Settings: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>Settings | Sety</title>
        <meta
          name="Description"
          content="Setup your business details, team members..."
        />
      </Head>

      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 3]}>
              <SettingsMenu />
            </Cell>
            <Cell span={[12, 12, 9]}>
              <DivWrapper style={{marginBottom: "20px"}}>
                <Title>Business info</Title>
                <Button shape={SHAPE.square}>
                  <FaPencilAlt />
                </Button>
                {/* <Button
                  type="submit"
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                        };
                      },
                    },
                  }}
                >
                  Edit Business Info
                </Button> */}
              </DivWrapper>
              <Block paddingTop={["10px", "20px", "30px", "30px"]}>
                <BorderedInfoList>
                  <Paragraph $nomb>Business Name</Paragraph>
                  <Label>{businessDetails.name}</Label>
                </BorderedInfoList>
                <BorderedInfoList>
                  <Paragraph $nomb>Business Industry</Paragraph>
                  <Label>{businessDetails.industry}</Label>
                </BorderedInfoList>

                <BorderedInfoList>
                  <Paragraph $nomb>Address</Paragraph>
                  <Label>{businessDetails.address}</Label>
                </BorderedInfoList>

                <BorderedInfoList>
                  <Paragraph $nomb>Country</Paragraph>
                  <Label>{businessDetails.country}</Label>
                </BorderedInfoList>
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default Settings;
