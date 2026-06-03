(async function () {
  const BASE = window.location.pathname.replace(/\/[^/]*$/, '/');
  // img\mapa\br_municipios_2024\index.html
  // Carrega dados dos municípios
  const dadosResp = await fetch('municipios_rj.json');
  const dados = await dadosResp.json();

  // Carrega shapefile (shp + dbf juntos via shpjs) — URL absoluta obrigatória
  const baseUrl = window.location.href.replace(/\/[^/]*$/, '/');
  const geo = await shp(baseUrl + 'BR_Municipios_2024');

  // Filtra só RJ (CD_UF = "33")
  const rj = {
    type: 'FeatureCollection',
    features: geo.features.filter(f => f.properties.CD_UF === '33')
  };

  // Monta SVG com D3
  const width = 800, height = 700;
  const projection = d3.geoMercator().fitSize([width, height], rj);
  const path = d3.geoPath().projection(projection);

  const svg = d3.select('#mapa')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('width', '100%')
    .attr('height', '100%');

  svg.selectAll('path')
    .data(rj.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('class', 'municipio')
    .attr('data-cod', d => d.properties.CD_MUN)
    .attr('data-nome', d => d.properties.NM_MUN)
    .on('mouseenter', function () {
      d3.select(this).classed('hover', true);
    })
    .on('mouseleave', function () {
      d3.select(this).classed('hover', false);
    })
    .on('click', function (event, d) {
      abrirModal(d.properties.CD_MUN, d.properties.NM_MUN);
    });

  // Labels (nomes) — opcional, descomente se quiser
  // svg.selectAll('text')
  //   .data(rj.features)
  //   .enter()
  //   .append('text')
  //   .attr('transform', d => `translate(${path.centroid(d)})`)
  //   .attr('text-anchor', 'middle')
  //   .attr('font-size', '6px')
  //   .text(d => d.properties.NM_MUN);

  function abrirModal(cod, nome) {
    const info = dados[cod] || {};
    document.getElementById('modal-titulo').textContent = info.nome || nome;
    document.getElementById('modal-cod').textContent = cod;
    document.getElementById('modal-populacao').textContent = info.populacao || '—';
    document.getElementById('modal-area').textContent = info.area_km2 || '—';
    document.getElementById('modal-obs').textContent = info.observacoes || '—';

    const linkEl = document.getElementById('modal-link');
    if (info.link) {
      linkEl.href = info.link;
      linkEl.style.display = 'inline-block';
    } else {
      linkEl.style.display = 'none';
    }

    document.getElementById('modal-overlay').classList.add('ativo');
  }

  document.getElementById('modal-fechar').addEventListener('click', fecharModal);
  document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) fecharModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });

  function fecharModal() {
    document.getElementById('modal-overlay').classList.remove('ativo');
  }
})();
