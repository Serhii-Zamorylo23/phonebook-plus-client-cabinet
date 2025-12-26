import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () =>{
    const token = useSelector(state => state.token)
    console.log(token)
    return(
        token ? <Outlet/> : <Navigate to="/"/>
    )
}
export default PrivateRoute