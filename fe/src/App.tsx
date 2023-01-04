import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header/index";
import { Orders } from "./components/Orders/Index";

export function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  )
}
