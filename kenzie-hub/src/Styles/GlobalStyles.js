import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    --color-succes: #3FE864;
    --color-negative: #E83F5B;
}

body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    background-color: var(--color-grey-4);
    animation: theme 21s linear infinite;
    
    &:after,
    &:before {
        content: '';
        display: block;
        position: fixed;
        z-index: -1;
        top: 0;
        width: 100vw;
        height: 100vh; 
        width: 100vmax;
        height: 100vmax;
        background: rgba(0, 0, 0, 0.2);
        animation: background 90s linear infinite;
    }

    &:after {
        left: 15vw;
    }

    &:before {
        right: 15vw;
        animation-delay: -30s;
        animation-direction: reverse;
    }
}


@keyframes background {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
}

button {
    cursor: pointer;
}

.App {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

`