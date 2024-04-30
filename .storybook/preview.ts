import { setup, type Preview } from "@storybook/vue3";
import '@/styles/main.scss'
import { createPinia } from "pinia";
import { App } from "vue";

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
