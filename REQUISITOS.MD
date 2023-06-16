## TodoAPI

---

### Requisitos

- [] Deve ser possível criar um to-do
- [] Deve ser possível listar todos os to-do
- [] Deve ser possível marcar um to-do como concluído
- [] Deve ser possível desmarcar um to-do como concluído
- [] Deve ser possível excluir um to-do
- [] Deve ser possível listar os to-do marcados como concluído
- [] Deve ser possível listar os to-do não marcados com concluído

---

### Regras de negócio

- [] Não deve ser possível cadastrar um to-do com o mesmo nome
- [] Não deve ser possível atualizar um to-do não existente
- [] Não deve ser possível excluir um to-do não existente
- [] Na listagem, se o `completed` = true ? Trazer como 'Concluído' se não 'Pendente'

---

### Estrutura do to-do

{
  id: uuidV4(),
  title: 'Tarefa 1',
  description: 'Comprar pão na padaria',
  completed: true | false
}


### Boa sorte a to-dos!