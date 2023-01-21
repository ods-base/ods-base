import "../themes/colors/dark.css";
import "../themes/colors/light.css";
import "../themes/ods-theme.css";
import "../themes/ods-light-mode.css";
import "../themes/ods-dark-mode.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: "Dark Mode",
    list: [
      { name: "Dark Mode", class: "oc-dark-mode", color: "#00aced" },
      { name: "Light Mode", class: "oc-light-mode", color: "#3b5998" },
    ],
  },
};

export const argTypes = {
  className: {
    table: {
      disable: true,
    },
  },
};

export const globalTypes = {
  colorMode: {
    name: "Color Mode",
    description: "Color Mode",
    defaultValue: "dark-mode",
    toolbar: {
      icon: "circle",
      items: [
        { value: "oc-light-mode", icon: "circlehollow", title: "Light Mode" },
        { value: "oc-dark-mode", icon: "circle", title: "Dark Mode" },
      ],
      showName: false,
    },
  },
};

const withTheme = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { colorMode } = context.globals;
  document.body.style.transition = "background-color 0.2s";
  document.body.style.backgroundColor =
    colorMode === "oc-light-mode" ? "#FFF" : "var(--ods-color-dark-gray-2)";

  return (
    <div
      className={[colorMode, "oc-theme"].join(" ")}
      style={{
        "--ods-font-family-sans-serif": "Quicksand",
        "--ods-font-family-serif": "Josefin Slab",
        "--ods-font-family-monospace": "Azeret Mono",
        "--ods-btn-font-family": "Quicksand",
      }}
    >
      <StoryFn />
    </div>
  );
};

export const decorators = [withTheme];
