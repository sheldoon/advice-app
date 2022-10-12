import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    main:{
alignItems: "center",
    },
    container:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#353535",
        width: 335,
        height: 264,
        borderRadius: 7,
        paddingHorizontal: 0,
        marginBottom: 21,
    },
    adviceText:{
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 10,
        width: "100%"
    },
    line:{
        height: 1,
        width: 50,
        color: "#fff",
        flex: 1,
        flexDirection: "row",
        
       
    },
    idText:{
        position: "absolute",
        color: "#07BA64",
        fontSize: 13,
        fontWeight: "600",
        top: 25,
       
    },
    line:{
        marginTop: 55,
        backgroundColor: "black",
        width: 290,
        paddingHorizontal: 10,
        height: 1,

    },
    adviceButton:{
        width: 177,
        height: 51,
        backgroundColor: "#07ba64",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText:{
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",

    }
});
export default styles