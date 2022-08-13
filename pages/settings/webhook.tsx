// @ts-nocheck
import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { Container } from "components/ui";
import SettingsMenu from "components/SideMenu/SettingsMenu";
import { Paragraph, Title } from "pages/Pages.styled";

const schema = yup.object().shape({
  url: yup.string().required("Valid URL is required"),
});

const Webhook: NextPage<{}> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data, null, 4));
  });

  const handleOnReset = () => {
    reset();
  };

  return (
    <>
      <Head>
        <title>Webhook | Sety</title>
        <meta name="Description" content="Webhhooks businesses on sety.io" />
      </Head>

      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 3]}>
              <SettingsMenu />
            </Cell>
            <Cell span={[12, 12, 9]}>
              <Block paddingTop={["10px", "15px", "30px", "0"]}>
                <Title style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  Webhook
                </Title>
                <Paragraph>
                  Connection URI for your webhook service...
                </Paragraph>
                <Block
                  overrides={{
                    Block: {
                      style: {
                        minHeight: "150px",
                        marginTop: "3rem",
                      },
                    },
                  }}
                >
                  <FormControl
                    label="Enter hook URK"
                    caption="Please enter a valid url"
                    error={errors?.url?.message}
                    overrides={{
                      Label: {
                        style: ({ $theme }) => {
                          return { ...$theme.typography.font350 };
                        },
                      },
                    }}
                  >
                    <Input
                      type="url"
                      name="url"
                      {...register("url")}
                      overrides={{
                        InputContainer: {
                          style: () => {
                            return { backgroundColor: "transparent" };
                          },
                        },
                      }}
                    />
                  </FormControl>
                  <Button isLoading={false}>Update URI</Button>
                </Block>
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default Webhook;
