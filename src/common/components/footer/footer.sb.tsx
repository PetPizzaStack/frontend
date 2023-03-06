import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "@app/common";

export default {
  title: "Common/Footer",
  component: Footer,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
