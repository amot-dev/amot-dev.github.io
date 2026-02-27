npx sharp-cli -i img/home.jpg -o img/home.avif -f avif resize 1920 --withoutEnlargement
npx sharp-cli -i img/home.jpg -o img/home.webp -f webp resize 1920 --withoutEnlargement

npx sharp-cli -i ./img/projects/*.png -o "./img/projects/{name}-400.avif" -f avif resize 400 --withoutEnlargement
npx sharp-cli -i ./img/projects/*.png -o "./img/projects/{name}-800.avif" -f avif resize 800 --withoutEnlargement
npx sharp-cli -i ./img/projects/*.png -o "./img/projects/{name}-1200.avif" -f avif resize 1200 --withoutEnlargement

npx sharp-cli -i ./img/projects/*.png -o "./img/projects/{name}-400.webp" -f webp resize 400 --withoutEnlargement
npx sharp-cli -i ./img/projects/*.png -o "./img/projects/{name}-800.webp" -f webp resize 800 --withoutEnlargement
npx sharp-cli -i ./img/projects/*.png -o "./img/projects/{name}-1200.webp" -f webp resize 1200 --withoutEnlargement
