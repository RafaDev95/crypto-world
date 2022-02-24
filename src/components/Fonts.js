import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Raleway:wght@100;300;400;500;600&display=swap');
            `}
  />
)

export default Fonts
