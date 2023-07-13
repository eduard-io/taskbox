import type { Meta, StoryObj } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import TaskComponent from './task.component';

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<TaskComponent> = {
  title: 'Task',
  component: TaskComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  //decorators: [withDesign],
  render: (args: TaskComponent) => ({
    props: {
      ...args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lKPAZoiD1VlKvNulmM6EfF/Test-Story-Book?type=design&node-id=1-51&mode=design&t=tF2BCkl8fNinDpob-4'
    }
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_PINNED',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lKPAZoiD1VlKvNulmM6EfF/Test-Story-Book?type=design&node-id=1-54&mode=design&t=tF2BCkl8fNinDpob-4'
    }
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_ARCHIVED',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lKPAZoiD1VlKvNulmM6EfF/Test-Story-Book?type=design&node-id=1-63&mode=design&t=tF2BCkl8fNinDpob-4'
    }
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;
export const LongTitle: Story = {
  args: {
    task: {
      ...Default.args?.task,
      title: longTitleString,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lKPAZoiD1VlKvNulmM6EfF/Test-Story-Book?type=design&node-id=2-118&mode=design&t=tF2BCkl8fNinDpob-4'
    }
  },
};

