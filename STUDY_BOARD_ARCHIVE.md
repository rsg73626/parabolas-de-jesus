# Arquivo da Funcionalidade: Quadro de Estudos

Status: arquivada temporariamente em 2026-03-24.

## O que foi implementado antes de arquivar

- Fluxo de criacao de quadro com selecao de parábolas.
- Geração de link compartilhável com payload em query string.
- Visualização de quadro com múltiplas parábolas em sequência.
- Suporte a:
  - titulo do quadro
  - enunciado geral
  - enunciado por parábola
  - bloco de notas geral
  - bloco de notas por parábola
- Persistencia local de notas no navegador (`localStorage`).

## Motivo do arquivamento

- Priorização do fluxo principal de leitura das parábolas.
- Evitar complexidade de UI/estado enquanto o layout principal evolui.

## Remoção aplicada agora

- Removido todo o fluxo ativo de quadro de estudos do app (HTML, CSS e JS).
- Removidos modos/rotas de `study-board` e `study-board-builder`.
- Removidos controles de criacao/compartilhamento.

## Decisão para retomada

Se for retomar, usar branch dedicada e reintroduzir em etapas:

1. Modelo de estado/URL.
2. Tela de criação (seleção + metadados).
3. Tela de visualização do quadro.
4. Persistência de notas e testes de regressão.

