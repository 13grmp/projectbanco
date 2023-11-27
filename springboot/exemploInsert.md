# README: Exemplos de Inserção de Dados

Este README fornece exemplos de como inserir dados nas tabelas do banco de dados criado para a aplicação Spring Boot. Os exemplos estão organizados por tabela, e os scripts SQL são apresentados a seguir.

## 1. Inserir dados na tabela `eliminacao`

```sql
-- Insert data into eliminacao table
INSERT INTO eliminacao  (data, motivo) VALUES ('2023-11-25 12:00:00', 'Razão para eliminação');
```

## 2. Inserir dados na tabela `eventos_especiais`

```sql
-- Insert data into eventos_especiais table
INSERT INTO eventos_especiais (data, descricao, nome) VALUES ('2023-11-25 12:00:00', 'Descrição do evento especial', 'Nome do evento especial');
```

## 3. Inserir dados na tabela `num_quartos`

```sql
-- Insert data into num_quartos table
INSERT INTO num_quartos (num_quartos) VALUES (4);
```

## 4. Inserir dados na tabela `participante`

```sql
-- Insert data into participante table
INSERT INTO participante (cidade, email, estado, genero, idade, nome, numero, rua, telefone, tipo_participante) VALUES ('Cidade', 'email@example.com', 'Estado', 'Gênero', 25, 'Nome do Participante', 123, 'Rua do Participante', 123456789, 'Tipo de Participante');
```

## 5. Inserir dados na tabela `vencedores`

```sql
-- Insert data into vencedores table
INSERT INTO vencedores (vencedores) VALUES ('Nome do Vencedor');
```

## 6. Inserir dados na tabela `votacao`

```sql
-- Insert data into votacao table
INSERT INTO votacao (data) VALUES ('2023-11-25 12:00:00');
```

## 7. Inserir dados na tabela `edicao_casa`

```sql
-- Insert data into edicao_casa table
INSERT INTO edicao_casa (ano, apresentador, area_total, cidade, data_inicio, data_termino, id_casa, localizacao, fk_num_quartos_num_quartos_pk, fk_participante_id_participante) VALUES (2023, 'Nome do Apresentador', 200, 'Cidade da Edição', '2023-01-01', '2023-12-31', 1, 'Localização da Edição', 1, 1);
```

## 8. Inserir dados na tabela `ocorre_eliminacao_edicao_participante`

```sql
-- Insert data into ocorre_eliminacao_edicao_participante table
INSERT INTO ocorre_eliminacao_edicao_participante (fk_edicao_casa_id_edicao, fk_edicao_casa_id_casa, fk_eliminacao_id_eliminacao, fk_participante_id_participante) VALUES (1, 1, 1, 1);
```

## 9. Inserir dados na tabela `possui`

```sql
-- Insert data into possui table
INSERT INTO possui (fk_edicao_casa_id_edicao, fk_edicao_casa_id_casa, fk_eventos_especiais_id_evento) VALUES (1, 1, 1);
```

## 10. Inserir dados na tabela `possui_votacao_edicao_casa_participante`

```sql
-- Insert data into possui_votacao_edicao_casa_participante table
INSERT INTO possui_votacao_edicao_casa_participante (fk_edicao_casa_id_edicao, fk_edicao_casa_id_casa, fk_participante_id_participante, fk_votacao_id_votacao) VALUES (1, 1, 1, 1);
```

## 11. Inserir dados na tabela `prova`

```sql
-- Insert data into prova table
INSERT INTO prova (data, nome, fk_vencedores_vencedores_pk) VALUES ('2023-11-25 12:00:00', 'Nome da Prova', 1);
```

## 12. Inserir dados na tabela `realiza`

```sql
-- Insert data into realiza table
INSERT INTO realiza (fk_participante_id_participante, fk_prova_id_prova) VALUES (1, 1);
```

**Nota:** O exemplo a seguir deve ser executado fora do script SQL.

```sql
-- Insert data into indica table
INSERT INTO indica (data, fk_participante_id_participante, fk_participante_id_participante_) VALUES ('2023-11-25 12:00:00', 1, 2);
```

Estes são exemplos de como inserir dados nas tabelas do banco de dados. Certifique-se de ajustar os valores de acordo com os requisitos específicos da sua aplicação antes de executar os scripts de inserção.
