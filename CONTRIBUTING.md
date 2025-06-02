# 🤝 Contributing to IonicCurrencyConverter

Agradecemos por considerar contribuir para o projeto **IonicCurrencyConverter**! Este documento descreve as diretrizes e processos para submeter melhorias, correções e novas funcionalidades.

Se você estiver vendo isso em um projeto acadêmico, fique à vontade para participar ou adaptar o código conforme sua necessidade!

---

## 🛠 Como Contribuir

Existem várias formas de contribuir:

- Corrigir bugs
- Implementar novas funcionalidades
- Melhorar a documentação
- Ajustar a interface (UX/UI)
- Relatar bugs ou problemas via Issues

### Passo a passo para contribuir:

1. **Faça um fork do repositório**
2. **Crie uma nova branch** com uma descrição clara:
   ```bash
   git checkout -b feature/converter-moedas
   ```
3. **Faça suas alterações**
4. **Teste localmente** antes de enviar
5. **Commit com mensagens claras**:
   ```bash
   git commit -m "Corrigido histórico não atualizando"
   ```
6. **Envie suas alterações**:
   ```bash
   git push origin feature/converter-moedas
   ```
7. Abra um **Pull Request (PR)** explicando o que foi feito

---

## 📋 Diretrizes de Código

Para manter o projeto organizado e padronizado, siga estas diretrizes:

- Use **padrões do Angular/Ionic** para estrutura de pastas e componentes
- Comente trechos complexos do código
- Siga o estilo de código existente
- Teste suas alterações antes de abrir PR
- Não envie arquivos desnecessários (ex: `node_modules/`, `.vscode/`, `platforms/`)

---

## 🧪 Como Testar o Projeto Localmente

Antes de enviar sua contribuição, certifique-se de testar suas alterações:

```bash
# Instale dependências
npm install

# Rode o app no navegador
ionic serve
```

Para dispositivos móveis:

```bash
# Adicione plataforma Android
ionic cap add android

# Execute no dispositivo
ionic cap run android
```

> Se estiver usando iOS, substitua `android` por `ios`.

---

## 💬 Reportando Problemas

Se encontrar algum problema ou quiser sugerir uma melhoria, abra uma **Issue** no repositório com as seguintes informações:

- Título claro e descritivo
- Detalhes do problema (passos para reproduzir, se aplicável)
- Versão do Ionic/Angular utilizada
- Mensagens de erro (se houver)

Exemplo de título bom:
```
Bug: Histórico não salva após conversão na versão 1.0
```

---

## 📚 Documentação

Se você está contribuindo com mudanças significativas, considere também atualizar os seguintes documentos:

- `README.md` – Para refletir novas funcionalidades
- `ioniccurrencyconverterdocs/` – Atualize a documentação técnica se necessário
- `TODO.md` – Adicione tarefas pendentes, se for o caso

---

## 👥 Agradecimentos

Toda contribuição é muito bem-vinda! Seu nome pode aparecer nos créditos da próxima versão 😊

