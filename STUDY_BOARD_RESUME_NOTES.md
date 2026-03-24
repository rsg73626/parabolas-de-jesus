# Notas Técnicas para Retomar Quadro de Estudos

## Escopo funcional que existia

- Seleção de múltiplas parábolas.
- Metadados do quadro:
  - titulo
  - enunciado geral
  - enunciados específicos por parábola
- Visualização compartilhável por link.
- Notas por quadro e por parábola com persistência local.

## Formato de compartilhamento usado anteriormente

- Query param: `board=...`
- Conteúdo serializado em Base64 URL-safe com JSON contendo:
  - `ids` (array de IDs de parábolas)
  - `title` (string)
  - `generalPrompt` (string)
  - `parablePrompts` (objeto por ID)

## Pontos de atenção na retomada

- Manter compatibilidade com idioma ativo (`pt-BR`, `pt-PT`, `en`, `es`).
- Garantir navegação estável com `popstate`.
- Evitar acoplamento visual entre:
  - tela de índice
  - tela de parábola única
  - tela de quadro
- Revisar limite de tamanho de URL ao incluir textos longos.

## Recomendação técnica para próxima versão

- Se o payload crescer, migrar para persistência curta por ID e resolver via armazenamento local/servidor, em vez de carregar tudo na URL.

