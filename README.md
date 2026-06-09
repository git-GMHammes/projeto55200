🗺️ projeto55200 — Mapa Interativo do Estado do Rio de Janeiro
Renderização interativa do mapa do Estado do Rio de Janeiro baseada em dados cartográficos do IBGE (Instituto Brasileiro de Geografia e Estatística).


📋 Descrição
Este projeto é uma aplicação web que renderiza um mapa interativo do Estado do Rio de Janeiro utilizando dados geoespaciais fornecidos pelo IBGE. A visualização é construída com D3.js e permite explorar os municípios do estado de forma dinâmica e responsiva.
O mapa utiliza arquivos de formato vetorial (Shapefile/GeoJSON) convertidos para SVG, garantindo alta qualidade gráfica e interatividade no navegador.


🚀 Funcionalidades

🗺️ Mapa vetorial interativo do Estado do Rio de Janeiro

🏙️ Visualização por municípios com divisões territoriais oficiais do IBGE

🖱️ Interatividade com D3.js — zoom, pan e hover nos municípios

📱 Design responsivo para diferentes tamanhos de tela

⚡ Renderização leve diretamente no navegador (client-side)

🛠️ Tecnologias Utilizadas
Table
Tecnologia	Descrição
HTML5	Estrutura da aplicação
JavaScript (ES6+)	Lógica e interatividade
D3.js	Biblioteca para manipulação de dados e renderização SVG
SVG	Formato vetorial para o mapa
IBGE	Fonte oficial dos dados cartográficos e territoriais


📁 Estrutura do Projeto
plain
projeto55200/
├── 📄 index.html              # Página principal da aplicação
├── 📄 app.js                  # Lógica principal e renderização do mapa com D3.js
├── 📄 D3.js                   # Biblioteca D3.js (ou referência CDN)
├── 📄 shp.min.js              # Biblioteca para leitura de arquivos Shapefile
├── 📄 municipios_rj.json      # Dados GeoJSON dos municípios do RJ
├── 📄 brazil_rio_de_janeiro_location_m...  # Dados de localização do RJ no Brasil
├── 📁 br_municipios_2024/     # Arquivos shapefile do IBGE (municípios do Brasil)
│   ├── BR_Municipios_2024.shp
│   ├── BR_Municipios_2024.dbf
│   ├── BR_Municipios_2024.shx
│   ├── BR_Municipios_2024.prj
│   └── BR_Municipios_2024.cpg
├── 📄 README.md               # Este arquivo
└── 📄 .gitattributes           # Configurações do Git


📊 Fonte de Dados
Os dados cartográficos utilizados neste projeto são provenientes do Instituto Brasileiro de Geografia e Estatística (IBGE) — a principal fonte oficial de informações geoespaciais e estatísticas do Brasil.

🌐 Site oficial: https://www.ibge.gov.br

📥 Downloads de dados espaciais: IBGE — Malhas Municipais

📅 Ano de referência: 2024
O IBGE disponibiliza malhas municipais atualizadas anualmente, contendo os limites territoriais de todos os municípios brasileiros em formato Shapefile, que podem ser convertidos para GeoJSON/SVG para uso web.

🚀 Como Executar
Clone o repositório:
bash
git clone https://github.com/git-GMHammes/projeto55200.git
cd projeto55200
Abra o arquivo index.html em um navegador moderno:
bash
# Você pode simplesmente abrir o arquivo no navegador
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
Ou utilize um servidor local simples:
bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
Acesse no navegador:
plain
http://localhost:8000


🗂️ Dados do IBGE Utilizados
Table
Arquivo	Descrição
BR_Municipios_2024.shp	Geometria vetorial dos municípios brasileiros
BR_Municipios_2024.dbf	Atributos dos municípios (código, nome, etc.)
BR_Municipios_2024.shx	Índice espacial do shapefile
BR_Municipios_2024.prj	Sistema de coordenadas geográficas
municipios_rj.json	Dados filtrados/convertidos dos municípios do RJ


🎨 Preview
O projeto renderiza um mapa completo do Estado do Rio de Janeiro, destacando:
Todos os 92 municípios do estado
Limites territoriais precisos conforme o IBGE
Interface limpa e focada na visualização geoespacial


🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para:
Reportar bugs ou sugerir melhorias via Issues
Enviar pull requests com novas funcionalidades
Melhorar a documentação


📄 Licença
Este projeto é de uso educacional e de referência. Os dados cartográficos são de domínio público (IBGE — governo brasileiro). Consulte as licenças específicas das bibliotecas utilizadas (D3.js, etc.) para uso comercial.


---

## Metadados

---

## 📌 Metadados do Autor

| Campo               | Informação                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Nome**            | Gustavo Hammes                                                                                                           |
| **Projeto**         | Sistema de Gerenciamento do Centro de Documentação                                                                       |
| **E-mail**          | [gustavo@habilidade.com](mailto:gustavo@habilidade.com)                                                                  |
| **Whatsapp**        | [(21) 9 8055-8545](https://wa.me/5521980558545)                                                                          |
| **Stack principal** | PHP (Laravel, Symfony, Cake, Codeigniter), Java Spring Boot, JS/TS (React, Vue, Node.js), Mobile (React Native, Flutter) |

> 🌎 Este projeto utiliza dados oficiais do IBGE para promover a visualização e compreensão do território fluminense.

---



