# Calendar

It is a simple calendar application devloped by me for a given json data. I have used React, Redux, JSX, HTML5, CSS3, Sass and Gulp
for making this project. I have used redux instead of traditional flux because redux has concepts of HOC which enables direct connections with the store and props don't need to passed all the way down. I have also made some stateless functional components because they are faster way of making presentational components as the whole react lifecycle methods are skipped. Sass allows me to split my css into various parts and modularize my css code.

The various parts of this projects are:-

1. Assets folder - has the compressed and compiled css/js after running gulp command
2. Client folder - All the project code including react components and reducers,actions are here. React components are divided into two parts presentational components and container components which are HOC. This also contains the styles.
3. Data folder - This has the data for json and colors.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `gulp` to run the gulp command which will build the minified js and css and start the application on localhost:3000

Run `gulp development` for a development version of this project which will have unminified files



