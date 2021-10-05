import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Provider } from "react-redux"
import store from "./store/store"

const queryClient = new QueryClient()
const theme = createTheme()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
          <ReactQueryDevtools></ReactQueryDevtools>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
