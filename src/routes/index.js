import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import React, { useMemo, Suspense } from "react"
import routes from "./routes";
import PublicRoute from "./public";
import Home from "modules/web/pages/Home/Home";
import ErrorPage from "component/ErrorPage/ErrorPage";
import Loader from "common/Loader/Loader";
import DefaultLayout from "Layout/DefaultLayout";


function Routes () {
    const renderRoutes = useMemo(() =>
        routes.map((route, index) =>
            route.redirect ? (
                <Redirect
                    key={index}
                    from={route.path}
                    to={route.redirect}
                    {...route}
                />
            ) : (
                <PublicRoute
                    key={index}
                    preload={true}
                    {...route}
                />
            )
        ), []
    )


    return(
		<Router>
            <Suspense fallback={<Loader />}>
				<Switch>
                    <PublicRoute
                        layout={DefaultLayout}
                        path="/"
                        exact
                        component={Home}
                        preload={true}
                    />
                    <PublicRoute
                        layout={DefaultLayout}
                        path="/index"
                        exact
                        component={Home}
                        preload={true}
                    />
                    {renderRoutes}
                    <PublicRoute
                        layout={DefaultLayout}
                        path="*"
                        component={ErrorPage}
                        preload={true}
                    />  
                </Switch>
			</Suspense>
		</Router>
    )
}

export default Routes