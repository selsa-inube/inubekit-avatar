import { MdPersonOutline } from "react-icons/md";
import { Icon } from "@inubekit/icon";

export interface IAvatarProps {
  icon?: React.ReactElement;
}

const defaultIcon = <MdPersonOutline />;

export const Avatar = (props: IAvatarProps) => {
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
