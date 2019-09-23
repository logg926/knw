rm -R ./www
ionic build --prod --optimization
rm -R ../express/www
cp -rf ./www ../express/www
cd ../express
bash push.sh