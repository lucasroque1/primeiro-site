Documentação da Resolução dos Exercícios da Aula 2

Este documento descreve a resolução dos exercícios propostos ao final da "Aula 2 – Front-End.pdf"

Exercício A: Utilizando Hooks e localStorage, ao usuário entrar na página um alert deve aparecer perguntando ao usuário seu nome.

Descrição da Atividade: O objetivo deste exercício é utilizar o Hook useEffect para executar uma ação (mostrar um alert) quando o componente é montado pela primeira vez. Este alert deve solicitar o nome do usuário.

![Image](https://github.com/user-attachments/assets/62d2467b-2cdf-4a54-8159-511cb3989c0f)


Resultado: Ao acessar a página pela primeira vez (ou se o nome do usuário não estiver salvo no localStorage), um alert aparecerá solicitando que o usuário digite seu nome.

Exercício B: Ao usuário informar seu nome o valor deve ser salvo no localStorage.

Descrição da Atividade: Após o usuário digitar seu nome no alert (conforme o Exercício A), o valor fornecido deve ser armazenado no localStorage para que na próxima vez que o usuário acessar a página, o nome possa ser recuperado sem a necessidade de digitá-lo novamente.

![Image](https://github.com/user-attachments/assets/caec4f61-882f-4003-a529-ac0ccc661449)


Resultado: O nome fornecido pelo usuário será salvo localmente no navegador usando o localStorage.

Exercício C: Usando Hooks, faça a leitura do valor salvo no localState e insira na tela o nome do usuário e depois a frase “, sua lista de tarefas”

Descrição da Atividade: Este exercício requer a utilização de um Hook (useEffect) para verificar se o nome do usuário já está salvo no localStorage. Se estiver, o valor deve ser lido e exibido na tela juntamente com a frase ", sua lista de tarefas".

![Image](https://github.com/user-attachments/assets/e0414eed-b9c1-48dc-a850-6669b462b16f)

Resultado: Ao carregar a página, se o nome do usuário estiver salvo no localStorage, ele será lido e exibido na tela seguido da frase ", sua lista de tarefas". Caso contrário, o alert para inserir o nome será mostrado.

Exercício D: Crie alguns Radio Buttons com nome de cores. Utilize a documentação do React: https://reactnative.dev/docs/colors

Descrição da Atividade: Este exercício envolve a criação de elementos de formulário do tipo Radio Button. Cada Radio Button deve representar uma cor diferente. A documentação do React Native sobre cores foi fornecida como referência, embora estejamos desenvolvendo para a web utilizando React (a manipulação de cores será um pouco diferente).

![Image](https://github.com/user-attachments/assets/3c0d266f-c3d9-4071-8739-818a4bbdb939)


Resultado: Serão exibidos Radio Buttons na tela, cada um com o nome de uma cor (branco, azul, verde, cinza, neste exemplo). A seleção de um dos Radio Buttons atualizará o estado corSelecionada.
