// import { createSignal } from "solid-js";
import { Router, useRoutes } from "@solidjs/router";
import { routes } from './routes';

function App() {
  // const [active, setActive] = createSignal(false);

  const Routes = useRoutes(routes);
  return (
    < Router >
    <div>
      { /* Main content */ }
      <main>
        < Routes />
      </main>
    </div>
    </Router>
  );
}

export default App;
