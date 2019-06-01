# Notifier  

Script para realizar envios de notificação via Telegram quando houver um trigger do cloudwatch alarms.

Para usar esse script deve ser adicionado um cloudwatch alarm e vincular um tópico SNS no trigger do alarm, e por fim adicionar a lambda no tópico SNS.

## Variáveis de ambiente

Para o funcionamento desse script deve ser usado 2 variáveis de ambiente no serverless:
BOT_TOKEN = ${Token do bot que irá entregar a mensagem}
CHAT_ID = ${ID do chat onde a messagem será enviada}

## Testando localmente

Como testar localmente.

```
serverless invoke local -f notifier -p ./test.json
```
