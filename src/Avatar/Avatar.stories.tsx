import { Avatar } from ".";

import { props, parameters } from "./props";

const story = {
  title: "data/Avatar",
  components: [Avatar],
  parameters,
  argTypes: props,
};

export const Default = () => <Avatar icon={undefined} />;

export default story;
