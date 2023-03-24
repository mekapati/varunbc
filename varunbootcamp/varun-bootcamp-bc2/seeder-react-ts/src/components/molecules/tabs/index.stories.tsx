import TabsComponent, { Tab } from '.';
import { ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Molecules/Tabs',
  component: TabsComponent,
};

const Template: ComponentStory<typeof TabsComponent> = (args) => (
  <TabsComponent {...args} />
);

const TestTabs: Tab[] = [
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
];

const LotsOfTabs: Tab[] = [
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
  {
    name: 'My Contracts',
    children: 'Test',
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
]

export const Tabs = Template.bind({});
Tabs.args = {
  tabs: TestTabs,
};

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
  tabs: LotsOfTabs
}