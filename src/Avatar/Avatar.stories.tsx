import { ThemeProvider } from "styled-components";

import { inube } from "@inubekit/foundations";
import { Avatar, IAvatarProps } from ".";

import { props, parameters } from "./props";

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters,
  argTypes: props,
};

export const Default = () => <Avatar />;

const theme = {
  ...inube,
};

export const Themed = (args: IAvatarProps) => (
  <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>
);

export default story;
