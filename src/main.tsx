import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/contexts/Theme.context"
import { Home } from "@/pages/home"
import { GetStarted } from "@/pages/getstarted"
import { NotFound } from "@/pages/notfound"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="get-started" element={<GetStarted />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
)
