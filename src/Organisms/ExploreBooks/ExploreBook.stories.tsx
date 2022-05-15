import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExploreBooks from "./ExploreBook";

export default{
    title:'Organisms/Explore Books',
    component:ExploreBooks
} as ComponentMeta<typeof ExploreBooks>;

const Template:ComponentStory<typeof ExploreBooks>= (args)=> <ExploreBooks {...args} />

export const BasicExploreBooks = Template.bind({});