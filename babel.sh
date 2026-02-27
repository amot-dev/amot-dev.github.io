npx babel src/script.js --out-file /dev/stdout --presets @babel/preset-react | npx terser --compress --mangle --output script.js
