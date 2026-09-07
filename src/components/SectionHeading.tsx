import './SectionHeading.css'

type SectionHeadingProps = {
  id: string
  index: string
  title: string
  description?: string
}

function SectionHeading({ id, index, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-index">/{index}</p>
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default SectionHeading
