import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
    colors: {
        custom: {
            100: "#002b6b",
            200: "#4db7ef",
            300: "#a7d8f6",
            400: "0088cc"
        },
        textcolor: {
            100: "#171a1f",
            200: "#6f7787"
        }
    },
})

export default Theme;