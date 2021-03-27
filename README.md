# NextJS Template

- TypeScript
- ESLint & Prettier
- Styled components
- Github actions

### Setup
```
yarn
```

#### For deployment
Replace `PRODUCTION_DOMAIN_ROOT` in `next.config.js`

The repository is set up to deploy on Github pages. If we want a custom domain, we must add ` && echo 'mydomain.com' >> out/CNAME` in `predeploy` script.

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

