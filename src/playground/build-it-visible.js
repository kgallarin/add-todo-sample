// let show = false;

// const toggleShow = () => {
//     show = !show;
//     renderComponent();
// };

// const renderComponent = () => {
//     const hideShow = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleShow}>
//                 {show ? 'Hide Details' : 'Show Details'}
//             </button>
//             {show && <p>These are the text.</p>}
//         </div>    
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(hideShow, appRoot);
// }

// renderComponent();

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>These are the text!</p>
                    </div>
                )}

            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));