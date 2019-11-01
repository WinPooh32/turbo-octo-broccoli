import * as React from "react";
import { Button } from "semantic-ui-react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        // prevent string splitting by tsx parser
        const header = "Hello from" + this.props.compiler + " and " + this.props.framework + "!";

        return (
            <div>
                <h1>{header}</h1>
                <Button>Press me more times</Button>
            </div>
        )
    }
}
