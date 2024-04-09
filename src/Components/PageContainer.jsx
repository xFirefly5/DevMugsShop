

function PageContainer(props) {

    const styles = {
        backgroundColor: "white",
        width: "100vw",
        height: "100vh"
    };

    return (
        <div style={styles}>{props.children}</div>
    )
}

export default PageContainer