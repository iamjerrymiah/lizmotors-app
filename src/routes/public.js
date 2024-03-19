
import { MainAppLayout } from "Layout/MainAppLayout";
import Loader from "common/Loader/Loader";
import { Route } from "react-router-dom";


const PublicRoutes = ({ 
    component: Component,
    layout: Layout = MainAppLayout,
    preload,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            render={(props) => (
                <Layout>
                    {preload ? <Component {...props} /> : <Loader />}
                </Layout>
            )}
        />
    )
}

export default PublicRoutes