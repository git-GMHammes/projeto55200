# Mapa RJ — Municípios Interativo

Mapa SVG offline dos 92 municípios do estado do Rio de Janeiro.
Clique em qualquer município para abrir um modal com dados editáveis.

---

## Estrutura de Arquivos

```
br_municipios_2024/
├── index.html                  — Página principal (HTML + CSS + modal)
├── app.js                      — Lógica: carrega shapefile, renderiza SVG, abre modal
├── D3.js                       — Lib D3 v7 (renderização SVG e projeção geográfica)
├── shp.min.js                  — Lib shpjs (lê .shp e .dbf no browser)
├── municipios_rj.json          — Dados dos municípios (EDITAR AQUI)
├── BR_Municipios_2024.shp      — Geometrias dos municípios (IBGE 2024)
├── BR_Municipios_2024.dbf      — Atributos: CD_MUN, NM_MUN, CD_UF
├── BR_Municipios_2024.shx      — Índice do shapefile
├── BR_Municipios_2024.prj      — Definição de projeção cartográfica
└── BR_Municipios_2024.cpg      — Encoding dos caracteres
```

---

## Fluxo Técnico

```
index.html carrega
    │
    ├── D3.js           (variável global d3)
    ├── shp.min.js      (variável global shp)
    └── app.js          (executa ao carregar)
            │
            ├── 1. fetch('municipios_rj.json')
            │       Carrega os dados editáveis dos municípios
            │
            ├── 2. shp(baseUrl + 'BR_Municipios_2024')
            │       Lê BR_Municipios_2024.shp + .dbf + .prj + .cpg
            │       Retorna GeoJSON com todas as features do Brasil
            │
            ├── 3. Filtra features onde CD_UF === '33'
            │       Mantém apenas os 92 municípios do RJ
            │
            ├── 4. d3.geoMercator().fitSize([800, 700], rj)
            │       Calcula projeção ajustada ao tamanho do SVG
            │
            ├── 5. svg.selectAll('path').data(rj.features)
            │       Cria um <path> SVG por município
            │       Cada path recebe: data-cod (CD_MUN), data-nome (NM_MUN)
            │
            └── 6. Evento 'click' no path
                    Busca o CD_MUN no municipios_rj.json
                    Preenche o modal com os dados encontrados
                    Abre o modal
```

---

## Como Adicionar Dados aos Municípios

Edite o arquivo `municipios_rj.json`. Cada chave é o código IBGE de 7 dígitos do município.

### Estrutura atual de cada município

```json
"3304557": {
  "nome": "Rio de Janeiro",
  "populacao": "",
  "area_km2": "",
  "observacoes": "",
  "link": ""
}
```

### Campos disponíveis

| Campo         | Tipo  | Descrição                                      |
| ------------- | ----- | ---------------------------------------------- |
| `nome`        | texto | Nome exibido no modal (preenchido, não altere) |
| `populacao`   | texto | Ex: `"6.211.223"`                              |
| `area_km2`    | texto | Ex: `"1.200,18"`                               |
| `observacoes` | texto | Qualquer informação adicional                  |
| `link`        | URL   | Se preenchido, exibe botão "Ver mais" no modal |

### Exemplo preenchido

```json
"3304557": {
  "nome": "Rio de Janeiro",
  "populacao": "6.211.223",
  "area_km2": "1.200,18",
  "observacoes": "Capital do estado até 1960.",
  "link": "https://www.rio.rj.gov.br"
}
```

---

## Como Adicionar Novos Campos ao Modal

### Passo 1 — Adicionar o campo no JSON (`municipios_rj.json`)

```json
"3304557": {
  "nome": "Rio de Janeiro",
  "populacao": "6.211.223",
  "area_km2": "1.200,18",
  "observacoes": "Capital do estado até 1960.",
  "link": "",
  "pib": "R$ 389 bilhões",
  "idh": "0,799"
}
```

### Passo 2 — Adicionar a linha no modal (`index.html`)

Localize o bloco dos campos no modal e adicione:

```html
<div class="modal-campo">
  <span class="modal-label">PIB</span>
  <span class="modal-valor" id="modal-pib"></span>
</div>
<div class="modal-campo">
  <span class="modal-label">IDH</span>
  <span class="modal-valor" id="modal-idh"></span>
</div>
```

### Passo 3 — Preencher o campo em `app.js`

Dentro da função `abrirModal`, adicione:

```js
document.getElementById('modal-pib').textContent = info.pib || '—';
document.getElementById('modal-idh').textContent = info.idh || '—';
```

---

## Como Rodar Localmente

Requer um servidor HTTP local (XAMPP, Laragon, etc.) — o `fetch()` não funciona via `file://`.

**URL no XAMPP:**
```
http://localhost/php/loglab/detran/cakephp/scedoc/app/webroot/img/mapa/br_municipios_2024/index.html
```

---

## Origem dos Dados Geográficos

- Shapefile: IBGE — Malhas Municipais 2024
- Códigos IBGE: campo `CD_MUN` do `.dbf` (7 dígitos)
- Filtro do estado RJ: `CD_UF === '33'`
