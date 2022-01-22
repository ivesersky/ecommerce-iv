export const styles = {
    logo: {
        width: "20px",
    },
    link: {
        textDecoration: "none",
        color: "rgb(0, 0, 0)",
        transition: "all 0.3s ease-in-out",
    },
    list: {
        listStyleType: "none",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
        width: "99vw",
        backgroundColor: "transparent",
    },
    nav: {
        marginTop: "40px",
        position: "relative",
        display: "flex",
        height: "4rem",
        flexFlow: "row nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "black",
        fontFamily: "Segoe UI Semibold",
        fontWeight: "900",
    },
    hover: {
        fontWeight: "bold",
        filter: "invert(90%)",
        transform: "scale(1.1)",
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        alignSelf: "flex-start",
        justifySelf: "flex-start",
    },
    detailRow: {
        textDecoration: "none",
    },
    container: {
        margin: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        alignItems: "center",
        justifyContent: "space-evenly",

        gridGap: "10px",
        width: "80vw",
        height: "80vh",
    },
    loader: {
        display: "flex",
        flexDirection: "row",
        width: "10%",
    },
};
