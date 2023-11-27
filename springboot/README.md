# README

## Inicialização do Banco de Dados para Spring Boot

Este repositório contém scripts SQL para a criação de tabelas e inserção de dados iniciais para uma aplicação Spring Boot. A aplicação foi projetada para gerenciar um reality show com várias entidades, como participantes, eliminações, eventos especiais, edições e mais.

### Definições das Tabelas

1. **Tabela eliminacao**
   - Armazena informações sobre eliminações no reality show.

2. **Tabela eventos_especiais**
   - Registra detalhes de eventos especiais que ocorrem durante o programa.

3. **Tabela num_quartos**
   - Gerencia o número de quartos para cada edição do reality show.

4. **Tabela participante**
   - Mantém detalhes dos participantes, como nome, idade, endereço e informações de contato.

5. **Tabela vencedores**
   - Armazena os nomes dos vencedores do reality show.

6. **Tabela votacao**
   - Gerencia sessões de votação para os participantes.

7. **Tabela edicao_casa**
   - Contém informações sobre cada edição do reality show, incluindo localização, apresentador e datas de início/fim.

8. **Tabela indica**
   - Registra indicações feitas pelos participantes, indicando outros participantes por razões específicas.

9. **Tabela ocorre_eliminacao_edicao_participante**
   - Gerencia ocorrências de eliminações, vinculando edições, casas, eliminações e participantes.

10. **Tabela possui**
    - Vincula edições a eventos especiais.

11. **Tabela possui_votacao_edicao_casa_participante**
    - Vincula edições, casas, participantes e sessões de votação.

12. **Tabela prova**
    - Registra informações sobre os desafios ou testes realizados no reality show.

13. **Tabela realiza**
    - Gerencia a participação dos participantes em desafios ou testes específicos.

### Inserindo Dados Iniciais

Para popular as tabelas com dados iniciais, execute os scripts SQL de inserção fornecidos. Esses scripts incluem dados de exemplo para cada tabela, abrangendo eliminações, eventos especiais, participantes, vencedores, sessões de votação, edições, ocorrências, vínculos entre entidades, desafios e envolvimento de participantes.

Observação: O último script de inserção para a tabela `indica` deve ser executado separadamente, pois faz referência a IDs de participantes criados nos scripts anteriores.

Sinta-se à vontade para modificar os dados fornecidos ou adicionar mais registros conforme necessário.

Para quaisquer problemas ou dúvidas, consulte a documentação ou entre em contato com os mantenedores do projeto.
