### A federated React app; host with two remotes 

- shared state using context 
- nested routing 
- css modules and images

--- 

1.)
```bash
mv webpack.env.sample.js webpack.env.js
```

2.) set server information (domain / server path to remote bundles)
- `host/src/index.html` `<script>` tags 
- `webpack.env.js`

3.) 
```bash 
# local 
npm start

# prod 
npm run build
```

---
CLI
```bash 
npm run create-remote DashboardPage
```

---

Note:
- The nav list styling changes when the `/img` route is accessed, and that styling persists after navigating away from `/img`.

- On subsequent routing to `/img`, the image is fetched or not when the browser cache is disabled or active, respectively.

---

Bonus features:
- No Typescript
