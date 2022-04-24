import Image from "next/image"
import { HeaderComponent } from "../types"

const Header: HeaderComponent = ({ logo, logoWidth }) => {
  const { width: logoOriginalWidth, height: logoOriginalHeight } = logo.dimensions
  const logoHeight = logoOriginalWidth && logoOriginalHeight
    ? logoOriginalHeight / logoOriginalWidth * logoWidth
    : undefined
  return (
    <header>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logoWidth}
        height={logoHeight}
      />
    </header>
  )
}

export default Header
