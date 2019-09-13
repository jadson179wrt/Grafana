# Empreendimentos | AGENT ZABBIX

![](../../../images/agent-zabbix.png)

##  Config Query

`Query Mode:` Metrics

`Group:` Nome do Cliente 

`Application:` Zabbix agent

`Host:` /.*/
- obs: este parametro, realiza a seleção de todos os itens dentro do grupo;

`Item:` Zabbix agent ping

`Functions:` replaceAlias(:Zabbix agent ping, )

##  Config Visuaalization | Table

**Data**

`Table Tranform: ` Times series aggregation

`Columns: ` Current

**Paging**

`Rows per page: ` 100

`Scroll:` Habiltado

`Font size:` 100%

### Column Styles
----
**Options**

`Apply to columns named: ` Current

`Column Header: ` Status

`Render value as link: ` Disabled

**Type**

`Type: ` String

`Sanitize HTML:` Disabled

`Perserve Formatting: ` Disabled

**Values Mappings**

`Type:` Value to Text

- `From : 1  to:` Com comunicação
- `From : 0  to:` Sem comunicação

**Thresholds**

`Thresholds:`

`Color Mode: ` Cell

`Color: ` red, orange e green

---

**Options**

`Apply to columns named: ` Metrics

`Column Header: ` Aplicações

`Render value as link: ` Disabled

**Type**

`Type: ` Number
    
`Unit:` Short

`DEciamals: ` 2

**Thresholds**

`Thresholds:` 

`Color Mode: ` disabled

`Color: ` red, orange e green

---


## Requisítos 

- [Plugin Zabbix](https://grafana.com/grafana/plugins/alexanderzobnin-zabbix-app)