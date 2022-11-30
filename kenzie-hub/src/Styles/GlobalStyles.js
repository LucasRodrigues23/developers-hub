import { createGlobalStyles } from 'styled-components'

export default createGlobalStyles`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
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
}

button {
    cursor: pointer;
}



`