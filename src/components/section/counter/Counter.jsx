import Counter from "../../../common/counter";
import bgShape1 from "../../../assets/images/icon/square_shape_1.png";
import bgShape2 from "../../../assets/images/icon/square_shape_2.png";

import CoinInfoCounterWrapper from "./Counter.style";
import coinInfoCounterData from "../../../assets/data/coinInfoCounter.json"; // Convert this to a JS file like in roadmap/faq.js
import coinInfo from "../../../assets/data/coinInfoCounter";

/* Web requests structure
https://api.bscscan.com/api
   ?module=stats
   &action=tokenCsupply
   &contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56
   &apikey=YourApiKeyToken

https://api.bscscan.com/api
   ?module=stats
   &action=tokenCsupply
   &contractaddress=0x10964c2ffdea1e99b5e26d102516d9b03368915f
   &apikey=S5H6R74273RYSJ8RZ6FJ6MFWIED7WGNA7F

Token info:
https://api.bscscan.com/api
   ?module=token
   &action=tokeninfo
   &contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
   &apikey=YourApiKeyToken
*/

const CoinInfoCounter = () => {
  const totalSupply = 'https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x10964c2ffdea1e99b5e26d102516d9b03368915f&apikey=AY2V4Y3YWKM8QS8EN71Y5HZ7CR28MSHTBK'
  fetch(totalSupply)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)});

  const tokenInfo = 'https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=0x10964c2ffdea1e99b5e26d102516d9b03368915f&apikey=AY2V4Y3YWKM8QS8EN71Y5HZ7CR28MSHTBK'
  fetch(tokenInfo)
  .then(data =>{return data.json()})
  .then(res=>{console.log(res)});

  const { info } = coinInfoCounterData;

  return (
    <CoinInfoCounterWrapper>
      <div className="container">
        <ul>
          {info?.map((item, i) => (
            <li key={i}>
              <h3>
                <Counter
                  end={item.number}
                  decimal="."
                  decimals={item.number % 1 !== 0 ? "2" : "0"}
                  suffix={item.unit}
                />
              </h3>
              <h4>{item.text}</h4>
            </li>
          ))}
        </ul>
      </div>
    </CoinInfoCounterWrapper>
  );
};

export default CoinInfoCounter;
