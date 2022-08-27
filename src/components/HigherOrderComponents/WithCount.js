import React from 'react';

const WithCount = (WrrapedComponent, incrementCount) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        clickHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementCount }
            })

        }
        render() {
            return (
                <WrrapedComponent
                    count={this.state.count}
                    clickHandler={this.clickHandler}
                    {...this.props}  // for remaing props which we have pass direct from the components (ButtonClick and MouseHover components )
                />
            )
        }
    }
    return NewComponent
}

export default WithCount;