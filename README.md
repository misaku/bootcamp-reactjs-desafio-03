# Desafio Rocketseat Bootcamp - GoReact Nível 3	This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


 Esse git é para postar a solução desenvolvida por mim, como o proposito deste desafio é só verificar o conheimento e logica relacionado a tecnologia, não estarei preocupando com melhorias, e sim só completar as normas solicitadas pelo desafio.	## Available Scripts


 ## O Desafio :	In the project directory, you can run:
Configure uma estrutura com create-react-app. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.	


 Neste desafio você vai construir uma aplicação utilizando a biblioteca React Map GL da Uber. A aplicação se trata de um repositório de localização de desenvolvedores. O usuário poderá adicionar desenvolvedores ao mapa clicando sobre o mesmo e informando o username do Github do desenvolvedor, dessa forma, a aplicação irá captar os dados do dev via API e salvá-lo no estado do Redux.	### `npm start`


 ## Utilize o seguinte layout na aplicação:	Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


 ![Listagem](/assets/listagem.png)	The page will reload if you make edits.<br>
![New](/assets/new.png)	You will also see any lint errors in the console.


 Veja que na esquerda temos uma lista dos usuários cadastrados enquanto que no mapa temos os avatares do usuário indicando sua posição no mapa.	### `npm test`


 ## Ponto de partida	Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


 Para você se basear para utilização do mapa e controle do clique deixei um projeto para você utilizar como exemplo: https://github.com/Rocketseat/goreact-exemplo-mapbox. Nesse projeto utilizamos a biblioteca [MapBox](http://mapbox.com/) para renderizar o mapa, **talvez seja necessário você criar uma conta gratuita** para obter um **access token**.	### `npm run build`


 ## Fluxo	Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


 1. O usuário acessa a aplicação;	The build is minified and the filenames include the hashes.<br>
2. O usuário clica sobre o mapa para adicionar um novo usuário à posição clicada;	Your app is ready to be deployed!
3. Um modal abre sobre a tela com um único campo, o username do Github;	
4. A aplicação busca informações como nome e avatar do usuário da API do Github e salva o usuário no store do Redux;	
5. O usuário adicionado agora aparece no mapa e na lista lateral;	
6. Caso o usuário digitado no input for inválido uma mensagem deve ser retornada, assim como se tudo ocorrer bem deve ser retornada uma mensagem de sucesso (você pode utilizar a lib https://github.com/fkhadra/react-toastify);	
7. Deve ser possível excluir usuários da listagem clicando sobre o “x” na sidebar;	


 ## Exemplo de URL da API	See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


 Usuário: http://api.github.com/users/diego3g	### `npm run eject`


 ## Entrega	**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


 Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do código do desafio feito por mim aqui: https://github.com/Rocketseat/bootcamp-reactjs-desafio-03	If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


 *PS.: Tente fazer o desafio sem olhar o código antes :)*	Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.


 *PS2.: Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras :D*	You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


 Booooooora dev!!!	## Learn More


 “Se você acha que pode, ou que não pode, das duas formas você está certo”!	You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
## Agradecimento	
 **@Rocketseat ( [Github](https://github.com/Rocketseat) | [Site](https://rocketseat.com.br/) )**
