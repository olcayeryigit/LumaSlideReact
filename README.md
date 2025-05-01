# LumaSlide - React Component Library

**LumaSlide** is a modern, creative component library built with React that includes sliders, navigation, and pagination features. It offers four unique transition effects:

### **SLIDERS**

- `Flux`
- `Perspective`
- `DualPanel`

### **NAVIGATION**

- `Boost`

### **PAGINATION**

- `FlatPager`

These reusable components are designed to enhance your UI with smooth, stylish, and high-performance transitions, providing both functionality and an engaging user experience.

## 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/olcayeryigit/LumaSlideReact.git
cd luma-react
npm install
npm run dev
```

## 📦 Usage

Each transition effect is modular and can be imported individually:

> Note: For cleaner output and easier debugging, it's recommended to test with only one slider or component at a time.

## 🔌 Integrating the Slider, Navigation, or Pagination Component into Your Project

Simply copy the folder of the slider, navigation, or pagination type you want to use into the `src/components` directory of your React project. If the `components` folder doesn’t exist, feel free to create it.

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

> 🔔 **Note:** You only need to include the folder for the specific slider, navigation, or pagination component you want to use. Each component works independently, so you can either use one type across the project or assign different ones to different pages.

## ⚙️ Tech Stack

- ⚡ Vite

## 💡 Contributing

Contributions are welcome! Fork, branch, code and open a Pull Request 🚀

## 📄 License

MIT License
