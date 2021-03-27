# NextJS Template

- TypeScript
- ESLint & Prettier
- Styled components
- Github actions

### Setup
```
yarn
```

### Run

```
yarn dev
```

### Code style

Prettier and eslint is used for this project. 
New code is automatically validated on commit using a pre commit hook.


### Deploy

Script and github actions is set up to deploy to Github pages. 

```
# manually deploy
yarn deploy
```

_Custom domains: Add ` && echo 'mydomain.com' >> out/CNAME` in "predeploy" script to add a custom domain_
