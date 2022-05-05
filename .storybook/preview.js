import { MemoryRouter } from 'react-router-dom';
import Style from './style';

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Style />
      <div className="flex h-screen items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <Story />
        </div>
      </div>
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    darkClass: 'dark',
    stylePreview: true,
  },
};
