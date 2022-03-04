# crypto-world

Projeto feito para estudos. 

Tecnologias usadas:
- NextJs / NextJsProgressBar
- MomentJs
- Chakra UI
- ChartJS/ReactChartJS
- Api's - Rapid API: Coinranking e Bingnewssearch

Inicialmente iria usar também millify para tratar os número enormes das crypto moedas e o REACT HTML PARSER para converter a descrição delas,
mas na hora do deploy tive muita dor de cabeça devido a essas duas depenências e optei por refatorar o código e as removerem. 

Houve uma boa refatoração de código além da remoção das duas depenências, deixando o código mais limpo e mais reaproveitável, principalmente no *_app*
com a criação do componente *Layout* 

*IMPORTANTE*:
CASO TENHA INTERESSE EM CLONAR/TESTAR, COLOQUE AS CHAVES DA API DIRETAMENTE NO ARQUIVO FETCHS.JS.
SE USAR ATRAVÉS DE VARIÁVEIS DE AMBIENTE, ELE NÃO FUNCIONARÁ CORRETAMENTE.
LINKS:
RAPID API COINRANKING: https://rapidapi.com/Coinranking/api/coinranking1/
RAPID API BINGNEWSSEARCH: https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/


Aqui está a DEMO: https://crypto-world-deploy.vercel.app/
