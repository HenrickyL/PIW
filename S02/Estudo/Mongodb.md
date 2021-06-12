# Mongo> db

usando atraves do terminal podemos:

```shell
show dbs
```

* Entrar em um banco, mesmo que não exista ele cria
```shell
> use sistemaDeMatricula
```
* usamos o objeto > db para operar neste banco
* podemos usar codigos js nele
```shell
> let aluno = {aluno:"Henricky"}
```
* podemos inserir:
```shell
> db.alunos.insert(aluno)
```
* podemos mostrar:
```shell
> show collections
```

* Destruir:
```shell
> db.dropDatabase()
```

## Operações e busca:

Usando find podemos buscar, nele podemos ver que o *insert* adiciona um id único

* buscar
```shell
> db.alunos.find()
```

* buscar um:
```shell
> db.alunos.findOne()
```

* Quantidade de objetos em coleção:
```shell
> db.contatos.count()
```

### Criterios de busca:
* Igualdade:
```shell
let criterio = {nome:"jo"}
```
* Like do SQL
```shell
> db.alunos.find({nome: /Jo/ })
------
Jose, João
```
* comparação condicional pode ser feito assim:
```shell
> db.alunos.find({nome:{"$in":["henricky","Lucas"]}})
```

### Operadores de comparação:
* $eq - igualdade
* $gt - maior que
* $gte - maior ou igua que
```shel
> db.alunos.find({ira:{"$gte":5000}})
```
* $lt - menor que
* $lte - menor ou igual que
* $ne - diferente
* $in - casa com algum elemento de uma lista
* $nin - casa com nenhum elemento de uma lista

### Operadores Lógicos:
* $or - OU
```shell
> db.alunos.find({"$or":[{nome:/Jo/},{ira:{"$gte":5500}}]})

```
* $and - E

E encadeado:
```shell
> db.alunos.find({"$and":[
    {nome:/Jo/}
    ,{"$and":[
        {ira:{"$gte":5000}},
        {ira:{"$lte":7000}}
        ]}
    ]})

```

* $not - Não
* $nor - Não OU


### Remover Documentos
```shell
> db.alunos.remove({nome:/Jo/})
```

## Junção

Relação se classifica quanto a:

* Multiplicidade:
 - 1x1 
 - 1xN
```shell
> db.disciplinas.insert({nome:"PIW"})
> let piw = db.disciplinas.findOne({nome:"PIW"})
> db.ofertas.insert({semestre:"2020.1", id_disciplina:piw._id})
#junção - encontrar todas de ofertas
> db.ofertas.find({id_disciplina:ed._id})
#junção - encontrar todas de disciplinas
> let oferta = db.ofertas.findOne()
> db.disciplinas.findOne({_id:oferta.id_disciplina})

```
 - NxN