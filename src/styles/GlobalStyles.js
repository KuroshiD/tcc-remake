import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'roboto', sans-serif;
        text-decoration: none;
        list-style: none;
    }

    :root {
        --primary: #1d1d1d;
        --black: #c6c6c6;
        --gray: #afafaf;
        --gray-light: #6a737d;
        --gray-dark: #c6c6c6;
        --white: #fff;
        --header: #181818/
        --logo: #fff;
        --username: #9b9b9b;
        --search: #151515;
        --icon: #9b9b9b;
        --ticker: rgba(90, 90, 90, .5)
    }
`
export default GlobalStyles