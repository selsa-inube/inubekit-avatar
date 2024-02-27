import { Icon } from "@inubekit/icon";
import { MdPersonOutline } from "react-icons/md";

export const Avatar = () => {
  return (
    <Icon
      appearance="primary"
      cursorHover={true}
      variant="filled"
      shape="circle"
      icon={<MdPersonOutline />}
      spacing="wide"
      size="24px"
    />
  );
};
