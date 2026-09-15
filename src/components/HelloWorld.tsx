

function HelloWorld(props: { name: string }) {
    let { name } = props;
    return (
        <div>
            <div>Hello World {name}</div>

        </div>
    );
}

export default HelloWorld;