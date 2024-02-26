import { MdPersonOutline } from "react-icons/md";
import { Icon } from "@inubekit/icon";

const defaultIcon = <MdPersonOutline />;

export const Avatar = (props: { icon: React.ReactNode }) => {
  const { icon = defaultIcon } = props;

  return (
    <Icon
      appearance="primary"
      cursorHover={true}
      variant="filled"
      shape="circle"
      icon={icon}
      spacing="wide"
      size="24px"
    />
  );
};
