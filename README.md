# LumaSlide - ReactLibrary

**LumaSlide** is a modern, creative slider/animation component library built with React. It includes four unique transition effects:

- 🧩 `DualPanel`
- 🌊 `Flux`
- 🔮 `Perspective`
- 🟣 `PixelMorph`

These reusable components are designed to enhance your UI with smooth and stylish transitions.

## 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/olcayeryigit/LumaSlideReact.git
cd luma-react
npm install
npm run dev
```

## 📦 Usage

Each slider effect is modular and can be imported individually:

> Note: For cleaner output, use only one slider at a time while testing.

## 🔌 Integrating the Slider Component into Your Project

Copy the folder of the slider type you want to use into the `src/components` directory of your React project. If the `components` folder doesn't exist, simply create one.

Example folder structure:

```
src/
└── components/
    └── dual-panel
```

Then, import the component into your `App.jsx` (or any other component file where you want to use it) like this:

```jsx
import DualPanel from "./components/dual-panel/DualPanel";

function App() {
  return (
    <div>
      <DualPanel />
    </div>
  );
}
```

> 🔔 **Note:** You only need to include the folder of the specific slider effect you want to use. Each slider works independently, so you can use a single type throughout the project or assign different sliders to different pages.

## ⚙️ Tech Stack

- ⚡ Vite

## 💡 Contributing

Contributions are welcome! Fork, branch, code and open a Pull Request 🚀

## 📄 License

MIT License
