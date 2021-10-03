import './BlockBoxs.css'
import brandRecognition from '../../../images/Statistics/BlockBoxs/brandRecognition.svg'
import detailedRecords from '../../../images/Statistics/BlockBoxs/detailedRecords.svg'
import fullyCustomizable from '../../../images/Statistics/BlockBoxs/fullyCustomizable.svg'

function BlockBoxs() {
  return (
    <div className="BlockBoxs">
      <div className="BlockBoxs__line"></div>
      <div className="BlockBoxs__box">
        <img className="BlockBoxs__icon" src={brandRecognition} alt="icon" />
        <h3 className="BlockBoxs__title">Brand Recognition</h3>
        <p className="BlockBoxs__text">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className="BlockBoxs__box">
        <img className="BlockBoxs__icon" src={detailedRecords} alt="icon" />
        <h3 className="BlockBoxs__title">Detailed Records</h3>
        <p className="BlockBoxs__text">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="BlockBoxs__box">
        <img className="BlockBoxs__icon" src={fullyCustomizable} alt="icon" />
        <h3 className="BlockBoxs__title">Fully Customizable</h3>
        <p className="BlockBoxs__text">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  )
}

export default BlockBoxs
