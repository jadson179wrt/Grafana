
![](https://img.shields.io/badge/painel-grafana-orange)

# Apartamento em Funcionamento / Sem funcionamento



<img src="../../images/apartamentos.png" width="400">


##  Config Query

`Query Mode:` Metrics

`Group:` $group 

`Application:` HTTP service

`Host:` /.*/
- obs: este parametro, realiza a seleção de todos os itens dentro do grupo;

`Item:` HTTP service is running

`Functions:` replaceAlias(:HTTP service is running, )

##  Config Visuaalization | Table

**Data**

`Table Tranform: ` Times series aggregation

`Columns: ` Max 

**Paging**

`Rows per page: ` 100

`Scroll:` Habiltado

`Font size:` 90%

### Column Styles
----
**Options**

`Apply to columns named: ` Metric

`Column Header: ` Apartamentos

`Render value as link: ` Disabled

**Type**

`Type: ` String

`Sanitize HTML:` Disabled

`Perserve Formatting: ` Disabled

**Values Mappings**

`Type:` Range to Text

**Thresholds**

`Thresholds:`

`Color Mode: ` Disabled

`Color: ` red, orange e green

---

**Options**

`Apply to columns named: ` Max

`Column Header: ` 

`Render value as link: ` Disabled

**Type**

`Type: ` String

`Sanitize HTML:` Disabled

`Perserve Formatting: ` Disabled

**Values Mappings**

`Type:` Values to Text
- `from:` 1  ->  Com comunicação
- `from:` 0  ->  Sem comunicação

**Thresholds**

`Thresholds:` 1

`Color Mode: ` Cell

`Color: ` red, orange e green

---