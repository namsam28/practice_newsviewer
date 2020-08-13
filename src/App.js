import React from "react";
import { Route } from "react-router-dom";
import NewPage from "./pages/NewsPage";

const App = () => {
    return <Route path="/:category?" component={NewPage} />;
};

export default App;
