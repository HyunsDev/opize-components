import { addDecorator } from "@storybook/react";
import StoryRouter from 'storybook-react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Story />} />
      </Routes>
    </BrowserRouter>
  )
];