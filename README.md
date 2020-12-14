# React Daisycon Pixel

React daisycon pixel makes it easy to integrate the daisycon conversion pixel into a react app

## Installation

```bash
$ npm install react-daisycon-pixel
```

## Usage

```js
<DaisyconPixel
  {/* required params */}
  matchingDomain="fr135.net"
  campaignId={00000}
  transactionId={transactionId}
  amount={100}
  revenue={100}
  description="Conversion"
  {/* non required params */}
  compensationCode={12345},
  currency="EUR",
  promotionCode="promo",
  descriptionInternal="order from webshop",
  countryCode="NL",
  zipCode="1314CH",
  gender="m",
  birthDate={1990}
  stockKeepingUnit={12345}
  quantity={1}
  extras={[1,2,3,4,5]}
/>
```


### Mapping of the parameters
| From                      | To              |
| -------------             | :-------------: |
| campaignId                | ci              |
| amount                    | a               |
| transactionId             | ti              |
| compensationCode          | cc              |
| currency                  | cur             |
| promotionCode             | pr              |
| revenue                   | r               |
| description               | pn              |
| descriptionInternal       | iv              |
| countryCode               | c               |
| zipCode                   | z               |
| gender                    | g               |
| birthDate, // = birth yea | b               |
| stockKeepingUnit          | sku             |
| quantity                  | qty             |
| extras (as array)         | e1-e5           |

For explanation of the parameters, see [here](https://faq-advertiser.daisycon.com/hc/en-us/articles/206905459-Implement-the-conversion-pixel)


## License
[ISC](https://choosealicense.com/licenses/isc/)
