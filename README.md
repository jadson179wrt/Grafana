
# GRAFANA 

![](https://imgs.unisec.com.br/tools/grafana.svg)

![](https://img.shields.io/badge/projeto-opensource-gren) 

# Painel de Salas

Solução criada com intuíto de ser uma ambiente onde estarão inseridas as `logos` das empresas alocadas no empreendimento `comercial`.


## Requisitos

* GRAFANA
* GITHUB
* HTML E CSS
* INTERNET

## INTEGRAÇÃO 

<img src="images/integracao.png" width="500px">

### Requisição

* GRAFANA -> http://github.com/unisec/painel-salas/cliente*/andar*/sala*/logo.png


### Resposta

* GITHUB -> logo.png


## Visualização 

<img src="images/view-painel.png" width="500px">


## Como os usuário irão trocar ás imagens!!

`Passo 1` - Acessar o [GITHUB](https://github.com) com usuário e senha;
`Passo 2` - Irá até o " `/clientes/nomecliente*/andar*/sala*/` ", e realizar o upload da imagem com o nome de logo.png

`Obs:` Todas ás logos inseridas no github, precisam ter o formato .png


## Raiz de Diretórios

```
└─ clientes
    └─ nome-cliente
        └─ andar
            └─ sala
                └─ *.png 
├─ codigo
    └─ painel-salas.md
├─ images 
    └─ *.png
```
