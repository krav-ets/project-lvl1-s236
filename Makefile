install:
	npm install --save-dev babel-core babel-cli babel-preset-env babel-preset-stage-0

run-balance:
	npm run babel-node -- src/bin/brain-balance.js

run-calc:
	npm run babel-node -- src/bin/brain-calc.js

run-even:
	npm run babel-node -- src/bin/brain-even.js

run-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

run-prime:
	npm run babel-node -- src/bin/brain-prime.js

run-progression:
	npm run babel-node -- src/bin/brain-progression.js

publish:
	npm publish

lint:
	npm run eslint .
