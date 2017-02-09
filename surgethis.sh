npm run build
cp CNAME build/
mv build/index.html build/200.html
surge ./build
