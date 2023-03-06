import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuItem } from "@app/modules";

export default {
  title: "Menu/MenuItem",
  component: MenuItem,
  argTypes: {
    title: { control: "text" },
    link: { control: "text" },
    imageSource: { control: "text" },
    ingredients: { control: "array" },
    weight: { control: "number" },
    price: { control: "number" },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Pizza Margherita 🍕",
  link: "/pizza-margherita",
  imageSource: "texas.jpeg",
  ingredients: ["tomato", "mozzarella", "basil"],
  weight: 500,
  price: 99,
};
