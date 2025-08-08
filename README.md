# Exercises1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## To Create an Excercise

### Create the new component

Open a terminal window at the project root directory.

Enter the scaffolding command to create a new component.

```
ng g c app/exercise3
```

### Add the new component to the app routing

In the app routing,
```src/app/app.routes.ts```,
add the route for the new component.

```typescript
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'exercise1',
    component: Exercise1,
  },
  {
    path: 'exercise2',
    component: Exercise2,
  },
];
```
```typescript
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'exercise1',
    component: Exercise1,
  },
  {
    path: 'exercise2',
    component: Exercise2,
  },
  {
    path: 'exercise3',
    component: Exercise3,
  },
];
```
Add the import for the new component.

```typescript
import {Exercise3} from './app/exercise3/exercise3';
```

### Add a link to the component in the app root page

In the app root template,
```src/app/app.html```,
add a link to navigate to the new component.

```html
  <p>Main Menu</p>
<ul>
<li><a routerLink="/">Home</a></li>
  <li><a routerLink="/exercise1">Exercise 1</a></li>
  <li><a routerLink="/exercise2">Exercise 2</a></li>
</ul>
```
```html
  <p>Main Menu</p>
<ul>
<li><a routerLink="/">Home</a></li>
<li><a routerLink="/exercise1">Exercise 1</a></li>
<li><a routerLink="/exercise2">Exercise 2</a></li>
<li><a routerLink="/exercise3">Exercise 3</a></li>
</ul>
```

In the app route component,
```src/app/app.ts```,
add the import for the new component.

```typescript
import {Exercise3} from './app/exercise3/exercise3';
```
