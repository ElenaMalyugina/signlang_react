import React from "react";

class ErrorBoundary extends React.Component<{}, {isError: boolean}>{
    constructor(props:{}){
        super(props);
        this.state = {
            isError: false
        }
    }

    static getDerivedStateFromError() {
        return { isError: true };
    }

    render(){
        if(this.state.isError){
            return <p>Что-то пошло не так</p>
        }

        return this.props.children;
        
    }
}

export default ErrorBoundary;