import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";


function About(): React.ReactComponentElement<any, any> {
    return (
        <div>
            <h2>About</h2>
            <Link to="/about/">About</Link>

            <Link to="/users/">Users</Link>
        </div>
    )
}

function Users(): React.ReactComponentElement<any, any> {
    return <h2>Users</h2>;
}

export class App extends React.Component<any, any> {
    constructor(props: any, state: any) {
        super(props, state)
    }

    render() {
        return (
            <Container>
                <Switch>
                    <Route path="/"> <About /> </Route>
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />

                    {/* if not matched any route */}
                    <Route render={() => {
                        return <Redirect to="/404" />
                    }} />
                </Switch>
            </Container>
        )
    }
}