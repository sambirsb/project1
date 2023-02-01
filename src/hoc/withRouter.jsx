import { useParams } from "react-router-dom"

let withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {

        let params = useParams()
        return  <Component {...props} params={params} />
    }
    return ComponentWithRouterProp
}

export default withRouter