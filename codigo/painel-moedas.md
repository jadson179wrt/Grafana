# Cotações de Moedas | GRAFANA

## Requisítos

- [plugin ajax](https://grafana.com/grafana/plugins/ryantxu-ajax-panel)
- 
<style>
  #dash-table {
    width: 100%;
    background-color: #fff;
    color: #000;
  }
  .table-header {
    border: 1px solid #000;
    text-align: center;   
  }
  .table-cell {
      text-align: center; 
      border: 1px solid #000;
  }
</style>
<table id="dash-table">
  <tr>
      <th class="table-header" > MOEDAS </th>
      <th class="table-header" > NOME </th>
      <th class="table-header" > HIGH </th>
      <th class="table-header" > LOW </th>
      <th class="table-header" > VARIAÇÃO DA MOEDA </th>
      <th class="table-header" > PERCENTUAL DE VARIAÇÃO </th>
      <th class="table-header" > COMPRA </th>
      <th class="table-header" > VENDA</th>
      <th class="table-header" > DATA DE MUDANÇA</th>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.USD.code}}</td>
      <td class="table-cell"> {{ response.USD.name}}</td>
      <td class="table-cell"> {{ response.USD.high}}</td>
      <td class="table-cell"> {{ response.USD.low}}</td>
      <td class="table-cell"> {{ response.USD.varBid}}</td>
      <td class="table-cell"> {{ response.USD.pctChange}}</td>
      <td class="table-cell"> {{ response.USD.bid}}</td>
      <td class="table-cell"> {{ response.USD.ask}}</td>
      <td class="table-cell"> {{ response.USD.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.USDT.code}}</td>
      <td class="table-cell"> {{ response.USDT.name}}</td>
      <td class="table-cell"> {{ response.USDT.high}}</td>
      <td class="table-cell"> {{ response.USDT.low}}</td>
      <td class="table-cell"> {{ response.USDT.varBid}}</td>
      <td class="table-cell"> {{ response.USDT.pctChange}}</td>
      <td class="table-cell"> {{ response.USDT.bid}}</td>
      <td class="table-cell"> {{ response.USDT.ask}}</td>
      <td class="table-cell"> {{ response.USDT.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.CAD.code}}</td>
      <td class="table-cell"> {{ response.CAD.name}}</td>
      <td class="table-cell"> {{ response.CAD.high}}</td>
      <td class="table-cell"> {{ response.CAD.low}}</td>
      <td class="table-cell"> {{ response.CAD.varBid}}</td>
      <td class="table-cell"> {{ response.CAD.pctChange}}</td>
      <td class="table-cell"> {{ response.CAD.bid}}</td>
      <td class="table-cell"> {{ response.CAD.ask}}</td>
      <td class="table-cell"> {{ response.CAD.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.EUR.code}}</td>
      <td class="table-cell"> {{ response.EUR.name}}</td>
      <td class="table-cell"> {{ response.EUR.high}}</td>
      <td class="table-cell"> {{ response.EUR.low}}</td>
      <td class="table-cell"> {{ response.EUR.varBid}}</td>
      <td class="table-cell"> {{ response.EUR.pctChange}}</td>
      <td class="table-cell"> {{ response.EUR.bid}}</td>
      <td class="table-cell"> {{ response.EUR.ask}}</td>
      <td class="table-cell"> {{ response.EUR.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.GBP.code}}</td>
      <td class="table-cell"> {{ response.GBP.name}}</td>
      <td class="table-cell"> {{ response.GBP.high}}</td>
      <td class="table-cell"> {{ response.GBP.low}}</td>
      <td class="table-cell"> {{ response.GBP.varBid}}</td>
      <td class="table-cell"> {{ response.GBP.pctChange}}</td>
      <td class="table-cell"> {{ response.GBP.bid}}</td>
      <td class="table-cell"> {{ response.GBP.ask}}</td>
      <td class="table-cell"> {{ response.GBP.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.ARS.code}}</td>
      <td class="table-cell"> {{ response.ARS.name}}</td>
      <td class="table-cell"> {{ response.ARS.high}}</td>
      <td class="table-cell"> {{ response.ARS.low}}</td>
      <td class="table-cell"> {{ response.ARS.varBid}}</td>
      <td class="table-cell"> {{ response.ARS.pctChange}}</td>
      <td class="table-cell"> {{ response.ARS.bid}}</td>
      <td class="table-cell"> {{ response.ARS.ask}}</td>
      <td class="table-cell"> {{ response.ARS.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.BTC.code}}</td>
      <td class="table-cell"> {{ response.BTC.name}}</td>
      <td class="table-cell"> {{ response.BTC.high}}</td>
      <td class="table-cell"> {{ response.BTC.low}}</td>
      <td class="table-cell"> {{ response.BTC.varBid}}</td>
      <td class="table-cell"> {{ response.BTC.pctChange}}</td>
      <td class="table-cell"> {{ response.BTC.bid}}</td>
      <td class="table-cell"> {{ response.BTC.ask}}</td>
      <td class="table-cell"> {{ response.BTC.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.LTC.code}}</td>
      <td class="table-cell"> {{ response.LTC.name}}</td>
      <td class="table-cell"> {{ response.LTC.high}}</td>
      <td class="table-cell"> {{ response.LTC.low}}</td>
      <td class="table-cell"> {{ response.LTC.varBid}}</td>
      <td class="table-cell"> {{ response.LTC.pctChange}}</td>
      <td class="table-cell"> {{ response.LTC.bid}}</td>
      <td class="table-cell"> {{ response.LTC.ask}}</td>
      <td class="table-cell"> {{ response.LTC.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.JPY.code}}</td>
      <td class="table-cell"> {{ response.JPY.name}}</td>
      <td class="table-cell"> {{ response.JPY.high}}</td>
      <td class="table-cell"> {{ response.JPY.low}}</td>
      <td class="table-cell"> {{ response.JPY.varBid}}</td>
      <td class="table-cell"> {{ response.JPY.pctChange}}</td>
      <td class="table-cell"> {{ response.JPY.bid}}</td>
      <td class="table-cell"> {{ response.JPY.ask}}</td>
      <td class="table-cell"> {{ response.JPY.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.CHF.code}}</td>
      <td class="table-cell"> {{ response.CHF.name}}</td>
      <td class="table-cell"> {{ response.CHF.high}}</td>
      <td class="table-cell"> {{ response.CHF.low}}</td>
      <td class="table-cell"> {{ response.CHF.varBid}}</td>
      <td class="table-cell"> {{ response.CHF.pctChange}}</td>
      <td class="table-cell"> {{ response.CHF.bid}}</td>
      <td class="table-cell"> {{ response.CHF.ask}}</td>
      <td class="table-cell"> {{ response.CHF.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.AUD.code}}</td>
      <td class="table-cell"> {{ response.AUD.name}}</td>
      <td class="table-cell"> {{ response.AUD.high}}</td>
      <td class="table-cell"> {{ response.AUD.low}}</td>
      <td class="table-cell"> {{ response.AUD.varBid}}</td>
      <td class="table-cell"> {{ response.AUD.pctChange}}</td>
      <td class="table-cell"> {{ response.AUD.bid}}</td>
      <td class="table-cell"> {{ response.AUD.ask}}</td>
      <td class="table-cell"> {{ response.AUD.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.CNY.code}}</td>
      <td class="table-cell"> {{ response.CNY.name}}</td>
      <td class="table-cell"> {{ response.CNY.high}}</td>
      <td class="table-cell"> {{ response.CNY.low}}</td>
      <td class="table-cell"> {{ response.CNY.varBid}}</td>
      <td class="table-cell"> {{ response.CNY.pctChange}}</td>
      <td class="table-cell"> {{ response.CNY.bid}}</td>
      <td class="table-cell"> {{ response.CNY.ask}}</td>
      <td class="table-cell"> {{ response.CNY.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.ILS.code}}</td>
      <td class="table-cell"> {{ response.ILS.name}}</td>
      <td class="table-cell"> {{ response.ILS.high}}</td>
      <td class="table-cell"> {{ response.ILS.low}}</td>
      <td class="table-cell"> {{ response.ILS.varBid}}</td>
      <td class="table-cell"> {{ response.ILS.pctChange}}</td>
      <td class="table-cell"> {{ response.ILS.bid}}</td>
      <td class="table-cell"> {{ response.ILS.ask}}</td>
      <td class="table-cell"> {{ response.ILS.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.ETH.code}}</td>
      <td class="table-cell"> {{ response.ETH.name}}</td>
      <td class="table-cell"> {{ response.ETH.high}}</td>
      <td class="table-cell"> {{ response.ETH.low}}</td>
      <td class="table-cell"> {{ response.ETH.varBid}}</td>
      <td class="table-cell"> {{ response.ETH.pctChange}}</td>
      <td class="table-cell"> {{ response.ETH.bid}}</td>
      <td class="table-cell"> {{ response.ETH.ask}}</td>
      <td class="table-cell"> {{ response.ETH.create_date}}</td>
  </tr>
  <tr>
      <td class="table-cell"> {{ response.XRP.code}}</td>
      <td class="table-cell"> {{ response.XRP.name}}</td>
      <td class="table-cell"> {{ response.XRP.high}}</td>
      <td class="table-cell"> {{ response.XRP.low}}</td>
      <td class="table-cell"> {{ response.XRP.varBid}}</td>
      <td class="table-cell"> {{ response.XRP.pctChange}}</td>
      <td class="table-cell"> {{ response.XRP.bid}}</td>
      <td class="table-cell"> {{ response.XRP.ask}}</td>
      <td class="table-cell"> {{ response.XRP.create_date}}</td>
  </tr>
</taBle>