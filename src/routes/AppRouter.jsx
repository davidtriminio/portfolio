import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage.jsx";

const AppRouter = ({ themePreference, setThemePreference }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={"/"}
                    element={(
                        <HomePage
                            themePreference={themePreference}
                            setThemePreference={setThemePreference}
                        />
                    )}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
