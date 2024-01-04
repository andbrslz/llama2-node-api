**Instruções de Instalação do Modelo**

1. **Baixe o Modelo:**
   - Baixe o modelo desejado na pasta "models" na raiz deste projeto.
   - Exemplo de link para download: [Modelo Llama-2-7B](https://huggingface.co/TheBloke/Llama-2-7B-GGUF/resolve/main/llama-2-7b.Q8_0.gguf?download=true).

   - Exemplo de link para download: [Modelo Llama-2-13B](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGUF/resolve/main/llama-2-13b-chat.Q8_0.gguf?download=true).

2. **Instale as Dependências:**
   - Execute o comando abaixo para instalar as dependências necessárias:
     ```
     npm i
     ```

3. **Inicie o Aplicativo:**
   - Inicie o aplicativo usando o seguinte comando:
     ```
     npm run start
     ```

4. **Teste a API:**
   - Após a inicialização da API, faça uma chamada CURL para testar:
     ```bash
     curl --request POST \
       --url http://localhost:3000/ask \
       --header 'Content-Type: application/json' \
       --data '{"question": "Qual o nome do jogador que é considerado o Rei do futebol?"}'
     ```

5. **Pronto!**
   - Agora você pode usar a API para fazer perguntas ao modelo.

**Observações:**
- Certifique-se de ter o Node.js instalado.
- Ajuste os comandos e caminhos conforme necessário para o seu ambiente.
- Consulte a documentação do modelo para informações específicas sobre como usá-lo.
