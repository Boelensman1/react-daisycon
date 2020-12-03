import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { stringify as stringifyQuery } from 'query-string'

const daisyconScript = `(function(d){var a,b,c;if(/comp|inter|loaded/.test(d.readyState)){return _a();}d.addEventListener('DOMContentLoaded', _a);
	function _a(){setTimeout(function(){a=d.getElementsByTagName('img');for(b=0;b<a.length;b++){try{if(/[s|c]i=/i.exec(
	a[b].src)&&(!a[b].offsetHeight||a[b].offsetHeight<1)){c=d.createElement('img');c.height=c.width=1;c.id='news';
	c.className='net';c.src='//'+Math.round(+new Date()/83000)+'.'+c.id+'tat.'+c.className+'/ab/'+a[b].src.substring(
	a[b].src.indexOf('?'),a[b].src.length)+'&v3';d.body.appendChild(c);}}catch(e){}}},100)}})(document);`

const DaisyconConversionPixel = ({
  matchingDomain,
  campaignId,
  amount,
  transactionId,
  compensationCode,
  currency,
  promotionCode,
  revenue,
  description,
  descriptionInternal,
  countryCode,
  zipCode,
  gender,
  birthDate,
  stockKeepingUnit,
  quantity,
  extras,
}) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.innerHTML = daisyconScript

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const extrasAsObject = extras.reduce((acc, extra, i) => {
    acc[`e${i + 1}`] = extra
    return acc
  }, {})

  const query = stringifyQuery({
    ci: campaignId,
    a: amount,
    ti: transactionId,
    cc: compensationCode,
    cur: currency,
    pr: promotionCode,
    r: revenue,
    pn: description,
    iv: descriptionInternal,
    c: countryCode,
    z: zipCode,
    g: gender,
    b: birthDate,
    sku: stockKeepingUnit,
    qty: quantity,
    ...extrasAsObject,
  })

  const src = `https://${matchingDomain}/t/?${query}`

  return (
    <img
      src={src}
      style={{ border: 0, height: 1, width: 1 }}
      alt="Daisycon Affiliate Marketing"
    />
  )
}

DaisyconConversionPixel.defaultProps = {
  currency: 'EUR',
  extras: [],
}

DaisyconConversionPixel.propTypes = {
  matchingDomain: PropTypes.oneOf([
    'at19.net',
    'ds1.nl',
    'dt51.net',
    'dt61.net',
    'fr135.net',
    'hs82.net',
    'lt45.net',
    'mt74.net',
    'ndt5.net',
  ]).isRequired,
  campaignId: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  transactionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  compensationCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  promotionCode: PropTypes.string,
  descriptionInternal: PropTypes.string,
  countryCode: PropTypes.string,
  zipCode: PropTypes.string,
  gender: PropTypes.string,
  birthDate: PropTypes.string,
  stockKeepingUnit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  quantity: PropTypes.number,
  extras: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
}

export default DaisyconConversionPixel
