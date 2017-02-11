npm run build
cp CNAME build/
cp build/index.html build/200.html
surge ./build
