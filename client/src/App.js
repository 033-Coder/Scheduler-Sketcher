import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";
import Appointments from "./pages/appointments";
import NewAppointment from "./pages/newAppointment";
import Users from "./pages/users";
import NewUser from "./pages/newUser";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/newAppointment" element={<NewAppointment />} />
                <Route path="/users" element={<Users />} />
                <Route path="/newUser" element={<NewUser />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
