## About
This is a demo project of embedding rust wasm chunk into react typescript application. It runs game of life with a torus boundary condition.
See demo [here]![http://wasm-gol.lindx.net/] 

### How to run this demo
```sh
git clone https://github.com/ldXiao/GOLTORust.git && cd GOLTORUST
```
install wasm-pack cli from https://rustwasm.github.io/wasm-pack/installer/
```sh
wasm-pack build cd www
```

```sh
npm install && npm run start
```



### reference
The wasm chunk is slightly adapted from the 
[rust wasm tutorial]: https://rustwasm.github.io/book/game-of-life/introduction.html
