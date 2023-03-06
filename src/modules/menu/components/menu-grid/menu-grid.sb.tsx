import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuGrid } from "@app/modules";

import data from "@app/mocks/pizza.json";

export default {
  title: "Menu/MenuGrid",
  component: MenuGrid,
  argTypes: {
    cols: {
      control: {
        type: "radio",
        options: [2, 3, 4],
      },
    },
  },
} as ComponentMeta<typeof MenuGrid>;

const Template: ComponentStory<typeof MenuGrid> = (args) => <MenuGrid {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: data,
  cols: 3,
};
