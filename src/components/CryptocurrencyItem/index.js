// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptoCurrencyDetails

  return (
    <li className="crypto-item">
      <div className="logo-and-title-container">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
