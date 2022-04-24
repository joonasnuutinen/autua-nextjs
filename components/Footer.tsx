import { FooterComponent } from "../types"

const Footer: FooterComponent = ({ content }) => {
  return (
    <footer>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </footer>
  )
}

export default Footer
