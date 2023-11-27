# README: Criação do Banco de Dados

Este README fornece informações sobre a criação do banco de dados para a aplicação Spring Boot. O banco de dados é composto por diversas tabelas que representam entidades relacionadas ao contexto da aplicação. A seguir, são apresentados os scripts SQL para a criação das tabelas, organizados por entidade.

## 1. Tabela `eliminacao`

```sql
CREATE TABLE `eliminacao` (
  `id_eliminacao` bigint NOT NULL AUTO_INCREMENT,
  `data` datetime(6) DEFAULT NULL,
  `motivo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_eliminacao`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 2. Tabela `eventos_especiais`

```sql
CREATE TABLE `eventos_especiais` (
  `id_evento` bigint NOT NULL AUTO_INCREMENT,
  `data` datetime(6) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 3. Tabela `num_quartos`

```sql
CREATE TABLE `num_quartos` (
  `num_quartospk` bigint NOT NULL AUTO_INCREMENT,
  `num_quartos` int NOT NULL,
  PRIMARY KEY (`num_quartospk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 4. Tabela `participante`

```sql
CREATE TABLE `participante` (
  `id_participante` bigint NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `idade` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `numero` int NOT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `telefone` int NOT NULL,
  `tipo_participante` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_participante`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 5. Tabela `vencedores`

```sql
CREATE TABLE `vencedores` (
  `vencedorespk` bigint NOT NULL AUTO_INCREMENT,
  `vencedores` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vencedorespk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 6. Tabela `votacao`

```sql
CREATE TABLE `votacao` (
  `id_votacao` bigint NOT NULL AUTO_INCREMENT,
  `data` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_votacao`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 7. Tabela `edicao_casa`

```sql
CREATE TABLE `edicao_casa` (
  `id_edicao` bigint NOT NULL AUTO_INCREMENT,
  `ano` int DEFAULT NULL,
  `apresentador` varchar(255) DEFAULT NULL,
  `area_total` int DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_termino` date DEFAULT NULL,
  `id_casa` int DEFAULT NULL,
  `localizacao` varchar(255) DEFAULT NULL,
  `fk_num_quartos_num_quartos_pk` bigint DEFAULT NULL,
  `fk_participante_id_participante` bigint DEFAULT NULL,
  PRIMARY KEY (`id_edicao`),
  UNIQUE KEY `UK_evo5m0kr9tv7e5woxabab6a7p` (`id_casa`,`id_edicao`),
  KEY `FKbne0puoc91mg7vpd24nxt3stf` (`fk_num_quartos_num_quartos_pk`),
  KEY `FKbjmavaqxstodqwnuw4bcns6i5` (`fk_participante_id_participante`),
  CONSTRAINT `FKbjmavaqxstodqwnuw4bcns6i5` FOREIGN KEY (`fk_participante_id_participante`) REFERENCES `participante` (`id_participante`),
  CONSTRAINT `FKbne0puoc91mg7vpd24nxt3stf` FOREIGN KEY (`fk_num_quartos_num_quartos_pk`) REFERENCES `num_quartos` (`num_quartospk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 8. Tabela `indica`

```sql
CREATE TABLE `indica` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `data` datetime(6) DEFAULT NULL,
  `fk_participante_id_participante` bigint DEFAULT NULL,
  `fk_participante_id_participante_` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKy0sknwys8gcvc6gy69fsgoqp` (`fk_participante_id_participante`),
  KEY `FKof8nvnsj2xva8ynsr9jnhdkjw` (`fk_participante_id_participante_`),
  CONSTRAINT `FKof8nvnsj2xva8ynsr9jnhdkjw` FOREIGN KEY (`fk_participante_id_participante_`) REFERENCES `participante` (`id_participante`),
  CONSTRAINT `FKy0sknwys8gcvc6gy69fsgoqp` FOREIGN KEY (`fk_participante_id_participante`) REFERENCES `participante` (`id_participante`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 9. Tabela `ocorre_eliminacao_edicao_participante`

```sql
CREATE TABLE `ocorre_eliminacao_edicao_participante` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fk_edicao_casa_id_edicao` bigint DEFAULT NULL,
  `fk_edicao_casa_id_casa` int DEFAULT NULL,
  `fk_eliminacao_id_eliminacao` bigint DEFAULT NULL,
  `fk_participante_id_participante` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr5vl9aw6byj1rtsl86yce1hoe` (`fk_edicao_casa_id_casa`,`fk_edicao_casa_id_edicao`),
  KEY `FKjn3wwl1kwxenox4ggjpnw1phh` (`fk_el

iminacao_id_eliminacao`),
  KEY `FK62a3d0fn2sohc9jqydegb2md` (`fk_participante_id_participante`),
  CONSTRAINT `FK62a3d0fn2sohc9jqydegb2md` FOREIGN KEY (`fk_participante_id_participante`) REFERENCES `participante` (`id_participante`),
  CONSTRAINT `FKjn3wwl1kwxenox4ggjpnw1phh` FOREIGN KEY (`fk_eliminacao_id_eliminacao`) REFERENCES `eliminacao` (`id_eliminacao`),
  CONSTRAINT `FKr5vl9aw6byj1rtsl86yce1hoe` FOREIGN KEY (`fk_edicao_casa_id_casa`, `fk_edicao_casa_id_edicao`) REFERENCES `edicao_casa` (`id_casa`, `id_edicao`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 10. Tabela `possui`

```sql
CREATE TABLE `possui` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fk_edicao_casa_id_edicao` bigint DEFAULT NULL,
  `fk_edicao_casa_id_casa` int DEFAULT NULL,
  `fk_eventos_especiais_id_evento` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbnabrlqeof7dbw6c17nio8txl` (`fk_edicao_casa_id_casa`,`fk_edicao_casa_id_edicao`),
  KEY `FKccn2gkjn3tch74gc8jvo4r5pq` (`fk_eventos_especiais_id_evento`),
  CONSTRAINT `FKbnabrlqeof7dbw6c17nio8txl` FOREIGN KEY (`fk_edicao_casa_id_casa`, `fk_edicao_casa_id_edicao`) REFERENCES `edicao_casa` (`id_casa`, `id_edicao`),
  CONSTRAINT `FKccn2gkjn3tch74gc8jvo4r5pq` FOREIGN KEY (`fk_eventos_especiais_id_evento`) REFERENCES `eventos_especiais` (`id_evento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 11. Tabela `possui_votacao_edicao_casa_participante`

```sql
CREATE TABLE `possui_votacao_edicao_casa_participante` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fk_edicao_casa_id_edicao` bigint DEFAULT NULL,
  `fk_edicao_casa_id_casa` int DEFAULT NULL,
  `fk_participante_id_participante` bigint DEFAULT NULL,
  `fk_votacao_id_votacao` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6ime3gpaqhxmosa15a5ti9p05` (`fk_edicao_casa_id_casa`,`fk_edicao_casa_id_edicao`),
  KEY `FK54b0nrb4b51j5ggy1tm7hllis` (`fk_participante_id_participante`),
  KEY `FKf0g493s6f24g32yhirc25nsfx` (`fk_votacao_id_votacao`),
  CONSTRAINT `FK54b0nrb4b51j5ggy1tm7hllis` FOREIGN KEY (`fk_participante_id_participante`) REFERENCES `participante` (`id_participante`),
  CONSTRAINT `FK6ime3gpaqhxmosa15a5ti9p05` FOREIGN KEY (`fk_edicao_casa_id_casa`, `fk_edicao_casa_id_edicao`) REFERENCES `edicao_casa` (`id_casa`, `id_edicao`),
  CONSTRAINT `FKf0g493s6f24g32yhirc25nsfx` FOREIGN KEY (`fk_votacao_id_votacao`) REFERENCES `votacao` (`id_votacao`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 12. Tabela `prova`

```sql
CREATE TABLE `prova` (
  `id_prova` bigint NOT NULL AUTO_INCREMENT,
  `data` datetime(6) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `fk_vencedores_vencedores_pk` bigint DEFAULT NULL,
  PRIMARY KEY (`id_prova`),
  KEY `FKnukn7d3n3l82lgalah6asiv0g` (`fk_vencedores_vencedores_pk`),
  CONSTRAINT `FKnukn7d3n3l82lgalah6asiv0g` FOREIGN KEY (`fk_vencedores_vencedores_pk`) REFERENCES `vencedores` (`vencedorespk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

## 13. Tabela `realiza`

```sql
CREATE TABLE `realiza` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fk_participante_id_participante` bigint DEFAULT NULL,
  `fk_prova_id_prova` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9k7t5w4p590s0frmmr1ro0rrq` (`fk_participante_id_participante`),
  KEY `FK446q3v6wdci6hqkmar2l5y79d` (`fk_prova_id_prova`),
  CONSTRAINT `FK446q3v6wdci6hqkmar2l5y79d` FOREIGN KEY (`fk_prova_id_prova`) REFERENCES `prova` (`id_prova`),
  CONSTRAINT `FK9k7t5w4p590s0frmmr1ro0rrq` FOREIGN KEY (`fk_participante_id_participante`) REFERENCES `participante` (`id_participante`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

Este conjunto de scripts cria as tabelas necessárias para o funcionamento da aplicação Spring Boot, com suas respectivas relações. Certifique-se de executar esses scripts na ordem apresentada para evitar problemas de dependência entre as tabelas.
