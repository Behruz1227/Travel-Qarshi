import loading from "./loading.gif";

function Loading() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh"
            }}>
            <img src={loading} alt="loading..." />
        </div>
    );
}

export default Loading;